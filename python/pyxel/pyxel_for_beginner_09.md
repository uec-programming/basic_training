---
tags: Pyxel
lang: ja-jp
robots: noindex, nofollow
breaks: false
---

<style>
.code {
user-select: none;
-webkit-user-select: none;
}
table td {
  word-break : break-word;
}
img {
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
##### 電気通信大学 プログラミング教室 教材 作成者：張 翌坤
# 9　複数の敵と勝利画面を追加してみよう
![](https://i.imgur.com/WrjbNy4.gif)

## コード
```python=
import pyxel
import math
import random

# 複数の敵を制御してみる
class Player:
    def __init__(self, x=80, y=5):
        # プレイヤーの基本属性を設定する、初期座標、速度、横縦幅、色
        self.x = x
        self.y = y
        self.speed = 2
        self.w = 6
        self.h = 8
        self.color = 6

    def draw(self):
        # このプレーヤーの描画を行うメソッド
        pyxel.rect(self.x, self.y, self.w, self.h, self.color)

    def update(self):
        """playerの動きを制御する、WSADで移動を操作"""
        # updateはフレームごとに更新される関数、フレームごとにユーザ(プレーヤー)の入力を受け付けたい
        # and プレイヤーが画面の端にいると操作が受け付けないようにする
        # pyxel.btnpには3つの引数が存在する(判定したいキー, 長押しに反応する時間, 長押しのときに入力を反復する間隔)
        if pyxel.btnp(pyxel.KEY_W, 2, 1) and self.y >= 0: 
            self.y -= self.speed
        elif pyxel.btnp(pyxel.KEY_S, 2, 1) and self.y <= pyxel.height-self.h:
            self.y += self.speed
        if pyxel.btnp(pyxel.KEY_A, 2, 1) and self.x >= 0:
            self.x -= self.speed
        elif pyxel.btnp(pyxel.KEY_D, 2, 1) and self.x <= pyxel.width-self.w:
            self.x += self.speed

    def is_collided(self, target):
        return self.x < target.x+target.w and self.x + self.w > target.x and self.y < target.y + target.h and self.h + self.y > target.y


class Enemy:
    """敵のクラス、敵の動きや表示を定義する"""
    def __init__(self, x, y, target=None):
        self.x = x
        self.y = y
        self.w = 5
        self.h = 5
        self.speed = 1.5
        self.target = target


    def update(self):
        if self.target: # 追跡目標が存在すれば、つまり if self.target != None
            # targetの座標と自分自身の座標をなす角を求める
            angle = math.atan2(self.target.y-self.y, self.target.x-self.x)
            # 角の情報をもとに次に移動する座標を計算し代入する
            self.x += round(math.cos(angle), 6) * self.speed
            self.y += round(math.sin(angle), 6) * self.speed


    def draw(self):
        # 色は8番、赤色
        # 座標は整数に限るので、描画するときは整数に直す
        pyxel.rect(round(self.x), round(self.y), self.w, self.h, 8)



class App:
    """箱をランダムに動かして、壁にぶつかると跳ね返す動きをする、跳ね返す際に速度も変える"""
    def __init__(self):
        pyxel.init(160, 120, fps=20)
        self.x = pyxel.width//2
        self.y = pyxel.height//2
        self.x_a = -random.randint(1,5)
        self.y_a = -random.randint(1,5)
        self.rect_w = 5
        self.rect_h = 7
        # APPの中にplayerのインスタンスを作成する
        self.player = Player()
        # 敵のインスタンスをリストで作成する
        self.enemy_number = 3
        # リストの作り方は2通りある
        self.enemys = [Enemy(random.choice([0, pyxel.width]), random.choice([0, pyxel.height]), self.player) for _ in range(self.enemy_number)]
        #self.enemys = []
        #for i in range(self.enemy_number):
        #    self.enemys.append(Enemy(random.randrange(pyxel.width), random.randrange(pyxel.height), self.player))
        # gameoverのフラグを設定する
        self.game_over = False
        # プレイヤーが死亡したかを設定するフラグ
        self.player_die = False
        pyxel.run(self.update, self.draw)

    def update(self):
        # アプリのupdate関数はフレーム更新するごとに、各インスタンスのupdateも呼び出さないと、他のクラスは動かない
        self.player.update()
        for i in self.enemys:
            i.update()
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()

        if self.player.x<self.x<self.player.x+self.player.w and self.player.y<self.y<self.player.y+self.player.h:
            self.game_over = True
        # playerの衝突検出も全部の敵とやらないといけない
        for i in self.enemys:
            if self.player.is_collided(i):
                self.player_die = True
        self.x += self.x_a
        self.y += self.y_a
        if not 0<self.x<pyxel.width:
            self.x_a, self.rect_w = self.set_random(self.x_a, self.rect_w)
        if not 0<self.y<pyxel.height:
            self.y_a, self.recr_h = self.set_random(self.y_a, self.rect_h)

    def set_random(self, cord, size):
        # 座標とサイズを再計算する
        cord = (cord//abs(cord))*(-1)*random.randint(1,5)
        size = random.randint(5,10)
        return cord, size


    def draw(self):
        if self.game_over:
            self.draw_over()
        elif self.player_die:
            self.draw_death()
        else:
            pyxel.cls(0)
            self.player.draw()
            for i in self.enemys:
                i.draw()
            pyxel.rect(self.x, self.y, self.rect_h, self.rect_w, self.y%16)

    def draw_death(self):
        pyxel.cls(2)
        pyxel.text(40, 30, "YOU DIE!!", 14)

    def draw_over(self):
        pyxel.cls(1)
        pyxel.text(80, 60, "YOU WIN!!!", 15)

App()
```

## 解説

```python=77
        # 敵のインスタンスをリストで作成する
        self.enemy_number = 3
        # リストの作り方は2通りある
        self.enemys = [Enemy(random.randint(0, pyxel.width), random.randint(0, pyxel.height), self.player) for _ in range(self.enemy_number)]
        #self.enemys = []
        #for i in range(self.enemy_number):
        #    self.enemys.append(Enemy(random.randint(0, pyxel.width), random.randint(0, pyxel.height), self.player))
```
77行目で敵の数を設定します。今回は3個に設定します。
次は敵の数`self.enemy_number`に従って、三体の敵を作って、リスト`self.enemys`に格納します。
これはリスト内包表記による記述で、下にコメントアウトされた部分は伝統的な記述方法になります。

```python=90
    def update(self):
        # アプリのupdate関数はフレーム更新するごとに、各インスタンスのupdateも呼び出さないと、他のクラスは動かない
        self.player.update()
        for i in self.enemys:
            i.update()
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
```
敵を複数体にしたので、`update()`の呼び出しもリスト内の全敵について実行する必要がある。
for文でリスト内のすべての敵のインスタンスの`update()`を呼び出します。
```python=123
        else:
            pyxel.cls(0)
            self.player.draw()
            for i in self.enemys:
                i.draw()
            pyxel.rect(self.x, self.y, self.rect_h, self.rect_w, self.y%16)
```
上の`update()`と同様に`draw()`も同じように全部の敵に対して実行する必要が出てきましたので、for文で逐次`draw()`を実行します。