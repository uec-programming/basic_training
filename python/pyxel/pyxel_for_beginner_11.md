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
# 11　ゲームを何回も再開できるようにしてみよう
今回はRを押したらゲームを再開できるようにします。
![](https://i.imgur.com/uqpT4Vf.gif)

## コード
```python=
import pyxel
import math
import random

# Playerが追い込む箱のクラスをAppクラスから分離するし、「箱」を抽象化する
class Box:
    """一般的な箱のクラス"""
    def __init__(self, x, y, w, h, speed=1, color=1):
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.x_speed = speed
        self.y_speed = speed
        self.color = color
        
    def update(self):
        pass

    def draw(self):
        # speedが小数だと、xとyの座標が小数になりえるので、描画のときは整数に直します
        pyxel.rect(round(self.x), round(self.y), self.w, self.h, self.color)

    def is_collided(self, target):
        return self.x < target.x+target.w and self.x+self.w > target.x and self.y < target.y+target.h and self.h+self.y > target.y


class LightingBox(Box):
    """光る箱のクラス"""
    # 一般的な箱のクラスに無いものを追加して、重複なものを省いた
    # set_randomは光る箱特有なメソッド
    def __init__(self, x, y, w=5, h=5):
        super().__init__(x, y, w, h)
        self.x_speed = -random.randint(1,5)
        self.y_speed = -random.randint(1,5)
        
    def update(self):
        self.x += self.x_speed
        self.y += self.y_speed
        if not 0<self.x<pyxel.width:
            self.x_speed, self.w = self.set_random(self.x_speed, self.w)
        if not 0<self.y<pyxel.height:
            self.y_speed, self.h = self.set_random(self.y_speed, self.h)
        self.color = self.y%16

    def set_random(self, cord, size):
        # 座標とサイズを再計算する
        cord = (cord//abs(cord))*(-1)*random.randint(1,5)
        size = random.randint(5,10)
        return cord, size


# PlayerはBoxの子クラスにする
class Player(Box):
    def __init__(self, x=80, y=5, w=6, h=8, speed=2, color=6):
        # プレイヤーの基本属性はBoxを受け継ぐ
        super().__init__(x, y, w, h, speed, color)
    
    def update(self): # Boxのupdateをオーバーライド
        """playerの動きを制御する、WSADで移動を操作"""
        # updateはフレームごとに更新される関数、フレームごとにユーザ(プレーヤー)の入力を受け付けたい
        # and プレイヤーが画面の端にいると操作が受け付けないようにする
        # pyxel.btnpには3つの引数が存在する(判定したいキー, 長押しに反応する時間, 長押しのときに入力を反復する間隔)
        if pyxel.btnp(pyxel.KEY_W, 2, 1) and self.y >= 0: 
            self.y -= self.y_speed
        elif pyxel.btnp(pyxel.KEY_S, 2, 1) and self.y <= pyxel.height-self.h:
            self.y += self.y_speed
        if pyxel.btnp(pyxel.KEY_A, 2, 1) and self.x >= 0:
            self.x -= self.x_speed
        elif pyxel.btnp(pyxel.KEY_D, 2, 1) and self.x <= pyxel.width-self.w:
            self.x += self.x_speed


# EnemyもBoxの子クラスにする
class Enemy(Box):
    """敵のクラス、敵の動きや表示を定義する"""
    def __init__(self, x, y, w=5, h=5, speed=1.5, color=8, target=None):
        super().__init__(x, y, w, h, speed, color)
        self.target = target

    def update(self): # Boxのupdateをオーバーライド
        if self.target: # 追跡目標が存在すれば、つまり if self.target != None
            # targetの座標と自分自身の座標をなす角を求める
            angle = math.atan2(self.target.y-self.y, self.target.x-self.x)
            # 角の情報をもとに次に移動する座標を計算し代入する
            self.x += round(math.cos(angle), 6) * self.x_speed
            self.y += round(math.sin(angle), 6) * self.y_speed

class App:
    """箱を追い込むゲーム"""
    def __init__(self):
        pyxel.init(160, 120, fps=20)
        self.reset_game()
        pyxel.run(self.update, self.draw)

    def reset_game(self):
        # APPの中に箱(Box)のインスタンス(box)を作成する
        self.box = Box(10, 10)
        # APPの中にplayerのインスタンスを作成する
        self.player = Player()
        # 敵のインスタンスをリストで作成する
        self.enemy_number = 3
        self.enemys = [Enemy(random.choice([0, pyxel.width]), random.randint(0, pyxel.height), self.player) for _ in range(self.enemy_number)]
        # gameoverのフラグを設定する
        self.game_over = False
        # プレイヤーが死亡したかを設定するフラグ
        self.player_die = False


    def update(self):
        self.player.update()
        for i in self.enemys:
            i.update()
        self.box.update()
        
        if pyxel.btnp(pyxel.key_q):
            pyxel.quit()

        if (self.game_over or self.player_die) and pyxel.btnp(pyxel.key_r):
            # ゲームが2つの終了状態でRを押したらreset_gameを実行する
            self.reset_game()

        if not self.player_die and self.player.is_collided(self.box):
            self.game_over = True
        # playerの衝突検出も全部の敵とやらないといけない
        for i in self.enemys:
            if self.player.is_collided(i): # どれかの敵に接触したらplayerが死ぬ
                self.player_die = True   

    def draw(self):
        if self.game_over:
            self.draw_over()
        elif self.player_die:
            self.draw_death()
        else:
            pyxel.cls(0)
            self.box.draw()
            self.player.draw()
            for i in self.enemys:
                i.draw()

    def draw_death(self):
        pyxel.cls(2)
        die_message = "YOU DIE!!"
        pyxel.text(pyxel.width//2-len(die_message)*2, pyxel.height//2, die_message, 14)
        reset_str = "press R to restart"
        pyxel.text(pyxel.width//2-len(reset_str)*2, pyxel.height//2+8, reset_str, 14)
        quit_str = "press Q to quit"
        pyxel.text(pyxel.width//2-len(reset_str)*2, pyxel.height//2+8*2, quit_str, 14)

    def draw_over(self):
        pyxel.cls(1)
        win_message = "YOU WIN !!!"
        pyxel.text(pyxel.width//2-len(win_message)*2, pyxel.height//2, win_message, 15)
        reset_str = "press R to restart"
        pyxel.text(pyxel.width//2-len(reset_str)*2, pyxel.height//2+8, reset_str, 15)
        quit_str = "press Q to quit"
        pyxel.text(pyxel.width//2-len(reset_str)*2, pyxel.height//2+8*2, quit_str, 15)


if __name__ == '__main__':
    App()
```

## 解説
```python=88
class App:
    """箱を追い込むゲーム"""
    def __init__(self):
        pyxel.init(160, 120, fps=20)
        self.reset_game()
        pyxel.run(self.update, self.draw)
```
ゲームの初期化の中で、様々なオブジェクトを初期化し、フラグも初期化しています。<br>
これらの初期化で、ゲームの初期状態が決まります。今回はゲームをリスタートしたいので、ゲームの初期化状態を再現できるようにしないといけません<br>
`pyxel.init()`はゲームのウィンドウを呼び出しているので、ゲームの内容と関係なしにこのウィンドウが必要なので、`__init__()`の中に残ります。<br>
最後の`pyxel.run()`はゲームの実行部分なので、これも`__init__()`の中に残ります。<br>
真ん中の部分はゲームの内容と関わるものなので、`reset_game()`にまとめられます。まとまられた後、ゲームの最初に呼び出したいので、ここで一回呼び出します。
```python=95
    def reset_game(self):
        # APPの中に箱(Box)のインスタンス(box)を作成する
        self.box = Box(10, 10)
        # APPの中にplayerのインスタンスを作成する
        self.player = Player()
        # 敵のインスタンスをリストで作成する
        self.enemy_number = 3
        self.enemys = [Enemy(random.choice([0, pyxel.width]), random.randint(0, pyxel.height), self.player) for _ in range(self.enemy_number)]
        # gameoverのフラグを設定する
        self.game_over = False
        # プレイヤーが死亡したかを設定するフラグ
        self.player_die = False
```
95行目からはただゲームの内容と関係ある部分の初期化を取り出して`reset_game()`に書いただけです。
```python=110
def update(self):
        self.player.update()
        for i in self.enemys:
            i.update()
        self.box.update()
        
        if pyxel.btnp(pyxel.key_q):
            pyxel.quit()

        if (self.game_over or self.player_die) and pyxel.btnp(pyxel.key_r):
            # ゲームが2つの終了状態でRを押したらreset_gameを実行する
            self.reset_game()

        if not self.player_die and self.player.is_collided(self.box):
            self.game_over = True
        # playerの衝突検出も全部の敵とやらないといけない
        for i in self.enemys:
            if self.player.is_collided(i): # どれかの敵に接触したらplayerが死ぬ
                self.player_die = True
```
この`update()`の中に非常に重要な部分が加えられました。<br>
この部分は119\~121行になります。<br>
このif文は、ゲームが終了の状態かプレイヤーが死亡かの状態で、キーボードのRキーが押されたら、下のコードを実行する意味です。<br>
下のコードは先程定義した、`reset_game()`です。このメソッドが実行されると、ゲームないすべてのオブジェクトや状態などが初期化されますの、ゲームがリスタートしたとも言えます。

```python=142
    def draw_death(self):
        pyxel.cls(2)
        die_message = "YOU DIE!!"
        pyxel.text(pyxel.width//2-len(die_message)*2, pyxel.height//2, die_message, 14)
        reset_str = "press R to restart"
        pyxel.text(pyxel.width//2-len(reset_str)*2, pyxel.height//2+8, reset_str, 14)
        quit_str = "press Q to quit"
        pyxel.text(pyxel.width//2-len(reset_str)*2, pyxel.height//2+8*2, quit_str, 14)
```
142行からはプレイヤーが死亡したときの描画に別の文も表示させて見ました。<br>
例えば「Press R to restart」は「Rを押してゲームをリスタート」<br>
また「Press Q to quit」は「Qを押してゲームを終了」など。<br>
今回は変数を使って、表示させたい文を一時的に保存して、次に表示してみた、この理由は、表示するときはこのテキストの長さによって表示場所を変更したい(正確に言うと、常に真ん中に表示させたい)ので、変数に保存すると、修正が簡単になるからです。
```python=151
    def draw_over(self):
        pyxel.cls(1)
        win_message = "YOU WIN !!!"
        pyxel.text(pyxel.width//2-len(win_message)*2, pyxel.height//2, win_message, 15)
        reset_str = "press R to restart"
        pyxel.text(pyxel.width//2-len(reset_str)*2, pyxel.height//2+8, reset_str, 15)
        quit_str = "press Q to quit"
        pyxel.text(pyxel.width//2-len(reset_str)*2, pyxel.height//2+8*2, quit_str, 15)
```
`draw_death()`と同じように、別の文も表示させてみました。