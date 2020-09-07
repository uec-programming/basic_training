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
# 8　当たり判定を改良し、死亡画面を作ってみよう


![](https://i.imgur.com/6a62b30.gif)

## コード
```python=
import pyxel
import math
import random

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
    def __init__(self, x, y, target):
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
        # 敵のインスタンスを作成
        self.enemy = Enemy(random.randrange(pyxel.width), random.randrange(pyxel.height), self.player)
        # gameoverのフラグを設定する
        self.game_over = False
        # プレイヤーが死亡したかを設定するフラグ
        self.player_die = False
        pyxel.run(self.update, self.draw)

    def update(self):
        # アプリのupdate関数はフレーム更新するごとに、各インスタンスのupdateも呼び出さないと、他のクラスは動かない
        self.player.update()
        self.enemy.update()
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()

        if self.player.x<self.x<self.player.x+self.player.w and self.player.y<self.y<self.player.y+self.player.h:
            self.game_over = True
        if self.player.is_collided(self.enemy):
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
            self.enemy.draw()
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
```python=33
    def is_collided(self, target):
        return self.x < target.x+target.w and self.x + self.w > target.x and self.y < target.y + target.h and self.h + self.y > target.y
```
前回の当たり判定は、A箱の左上の点がB箱の領域内かを調べて、雑に当たり判定していました。<br>
でも、そうするとAとBはぶつかっていても、A箱の左上の点がBはこの領域外になると、あたってない判定結果になります。こういう判定結果は望ましくないですね。<br>
今回は、Playerクラスに`is_collided()`メソッドを実装します。<br>
`is_collided(target)`は`target`というインスタンスを取り、その中の属性の座標x、yと大きさwとhを参考に当たり判定をしています。<br>
この当たり判定の条件に当てはめると、`True`を返して、あたったと意味します。<br>
当たり判定の条件に当てはまらないと、`False`を返して、あたってないと意味します。<br>
この当たり判定について、詳しくは[こちら](http://mslabo.sakura.ne.jp/WordPress/make/processing%E3%80%80%E9%80%86%E5%BC%95%E3%81%8D%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/%E7%9F%A9%E5%BD%A2%E5%90%8C%E5%A3%AB%E3%81%AE%E5%BD%93%E3%81%9F%E3%82%8A%E5%88%A4%E5%AE%9A%E3%82%92%E8%A1%8C%E3%81%86%E3%81%AB%E3%81%AF/)


```python=78
        # プレイヤーが死亡したかを設定するフラグ
        self.player_die = False
```
プレイヤーが敵に追いつかれるとゲーム失敗にしたいので、プレイヤーの状態を表す`self.player_die`というフラグを追加します。
```python=90
        if self.player.is_collided(self.enemy):
            self.player_die = True
```
プレイヤーをが追いつかれたら、`self.player_die`を`True`にします。これはプレイヤーが一度でも敵と接触すると、`True`になるので、このフラグで描画の内容が決まります。<br>
if文は `self.player`の`is_collided`メソッドを実行しています。引数は敵のインスタンスの`self.enemy`を受け取っています。<br>
つまり、これはプレイヤーと敵の衝突を判定しています。衝突が検出されたら、プレイヤーを死亡とします。

```python=106
    def draw(self):
        if self.game_over:
            self.draw_over()
        elif self.player_die:
            self.draw_death()
        else:
            pyxel.cls(0)
            self.player.draw()
            self.enemy.draw()
            pyxel.rect(self.x, self.y, self.rect_h, self.rect_w, self.y%16)
```
プレイヤーの死亡に応じて死亡の画面を描画したいが、ここで3つの描画があると注意してください。<br>
ここの順番は「ゲーム終了(勝利)」「死亡(失敗)」「ゲーム進行」の順番でif文で繋いています。<br>
fizzbuzzを書くときもそうだが、if文を書く時hあ優先順序があります。<br>
今回のような書き方は、「ゲーム終了(勝利)」が一番優先されるべきことで、一番最初に判定します。勝利すれば`self.draw_over()`を呼び出します。<br>
もし、勝利できなければ、失敗したかどうかを判定します。失敗したら、`self.draw_death()`を呼び出します。<br>
勝利でも、失敗でもなければ、これはゲーム進行途中を意味して、ゲームの進行画面(プレイヤーと敵と目標の箱)を描画します。

```python=117
    def draw_death(self):
        pyxel.cls(2)
        pyxel.text(40, 30, "YOU DIE!!", 14)
```
`draw_death()`はプレイヤーが死亡したときに表示させたい画面。<br>
スクリーンを2番の色で塗りつぶして、14番の色で`YOU DIE!!`(あなたが死んだ)と表示させます。