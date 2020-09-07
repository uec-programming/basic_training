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
# 7　プレイヤーを追いかける敵を作ってみよう
![](https://i.imgur.com/U5B9ode.gif)

## コード
```python=
import pyxel
import random
import math

# 追いかけてくる敵を作ってみよう
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
    """光る箱をウィンドウ内でランダムな速度で動き回る。"""
    def __init__(self):
        pyxel.init(160, 120, fps=20)
        self.x = pyxel.width//2
        self.y = pyxel.height//2
        self.x_speed = -random.randint(1,5)
        self.y_speed = -random.randint(1,5)
        self.rect_w = 5
        self.rect_h = 7
        # APPの中にplayerのインスタンスを作成する
        self.player = Player()
        # 敵のインスタンスを作成
        self.enemy = Enemy(
            random.randrange(pyxel.width), 
            random.randrange(pyxel.height), 
            self.player)
        # gameoverのフラグを設定する
        self.game_over = False
        pyxel.run(self.update, self.draw)

    def update(self):
        # アプリのupdate関数はフレーム更新するごとに、各インスタンスのupdateも呼び出さないと、他のクラスは動かない
        self.player.update()
        self.enemy.update()
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()

        if self.player.x<self.x<self.player.x+self.player.w and self.player.y<self.y<self.player.y+self.player.h:
            self.game_over = True
        self.x += self.x_speed
        self.y += self.y_speed
        if not 0<self.x<pyxel.width:
            self.x_speed, self.rect_w = self.set_random(self.x_speed, self.rect_w)
        if not 0<self.y<pyxel.height:
            self.y_speed, self.recr_h = self.set_random(self.y_speed, self.rect_h)

    def set_random(self, cord, size):
        # 座標とサイズを再計算する
        cord = (cord//abs(cord))*(-1)*random.randint(1,5)
        size = random.randint(5,10)
        return cord, size


    def draw(self):
        if self.game_over:
            self.draw_over()
        else:
            pyxel.cls(0)
            self.player.draw()
            self.enemy.draw()
            pyxel.rect(self.x, self.y, self.rect_h, self.rect_w, self.y%16)

    def draw_over(self):
        pyxel.cls(1)
        pyxel.text(80, 60, "YOU WIN!!!", 15)

App()
```

## 解説
```python=3
import math
```
今回の追跡アルゴリズムの中で数学計算が含まれるので、`math`モジュールをインポートする必要があります。

```python=35
class Enemy:
    """敵のクラス、敵の動きや表示を定義する"""
    def __init__(self, x, y, target=None):
        self.x = x
        self.y = y
        self.w = 5
        self.h = 5
        self.speed = 1.5
        self.target = target
```
敵も箱で作るので、初期座標、大きさ、速度を予め定義しないといけません。<br>
敵なので、追いかける目標も設定する必要があります。引数に`target`を取り、そのターゲットを`Enemy`クラスに保存します。`target`のデフォルト値は`None`にしています。<br>
注意すべきのは、ターゲットのインスタンスを敵クラスの中に保存する(今回のやり方)のは最良のやり方である保証はありません。<br>
別のやり方として、`update(target)`メソッドで引数でターゲット参照してもいいです。どのやり方を選ぶのは場合に応じて決めてください。
```python=45
    def update(self):
        if self.target: # 追跡目標が存在すれば、つまり if self.target != None
            # targetの座標と自分自身の座標をなす角を求める
            angle = math.atan2(self.target.y-self.y, self.target.x-self.x)
            # 角の情報をもとに次に移動する座標を計算し代入する
            self.x += round(math.cos(angle), 6) * self.speed
            self.y += round(math.sin(angle), 6) * self.speed
```
46行目は座標更新の条件です。`self.target`がデフォルト値の`None`であれば、目標が設定されてないので、座標の更新を行わないことにします。
48行目で、三角関数の`math.atan2`で目標の座標と敵自身の座標でx軸とy軸の差分で、目標がいる方向を計算します。計算された方向は角度として、`angle`変数に保存します。
角度情報`angle`を元に、x軸の方向とy軸の方向を計算した上で、単位速度の`self.speed`を掛けて新しい座標を計算します。x軸とy軸の方向と大きさ角度に応じては(-1, +1)の間で変化するので、単純に`+=`を使えば良いです。
![](https://i.imgur.com/1d5Xtzc.png)

座標更新のときは`round()`を使って、四捨五入で数値を丸めるが、今回は第2の引数の有効数字を6に指定し、小数点後の6桁目までに丸めます。

```python=
    def draw(self):
        # 色は8番、赤色
        # 座標は整数に限るので、描画するときは整数に直す
        pyxel.rect(round(self.x), round(self.y), self.w, self.h, 8)
```
おなじみの描画関連のメソッドです。
今回の速度は1.5という小数を設定したので、座標も当然小数になりえます。
描画するときは整数の座標上に描画するときは`round()`関数で四捨五入の整数を取ります。

```python=59
class App:
    """光る箱をウィンドウ内でランダムな速度で動き回る。"""
    def __init__(self):
        pyxel.init(160, 120, fps=20)
        self.x = pyxel.width//2
        self.y = pyxel.height//2
        self.x_speed = -random.randint(1,5)
        self.y_speed = -random.randint(1,5)
        self.rect_w = 5
        self.rect_h = 7
        # APPの中にplayerのインスタンスを作成する
        self.player = Player()
        # 敵のインスタンスを作成
        self.enemy = Enemy(
            random.randrange(pyxel.width), 
            random.randrange(pyxel.height), 
            self.player)
        # gameoverのフラグを設定する
        self.game_over = False
        pyxel.run(self.update, self.draw)
```
72行目で敵のインスタンス`self.enemy`を生成します。
敵の出現位置はランダムな数値を取り、その追跡の目標を`self.player`に設定します。
こうすると、敵はプレイヤーに追いかける目標ができました。
```python=
    def update(self):
        # アプリのupdate関数はフレーム更新するごとに、各インスタンスのupdateも呼び出さないと、他のクラスは動かない
        self.player.update()
        self.enemy.update()
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()

        if self.player.x<self.x<self.player.x+self.player.w and self.player.y<self.y<self.player.y+self.player.h:
            self.game_over = True
        self.x += self.x_speed
        self.y += self.y_speed
        if not 0<self.x<pyxel.width:
            self.x_speed, self.rect_w = self.set_random(self.x_speed, self.rect_w)
        if not 0<self.y<pyxel.height:
            self.y_speed, self.recr_h = self.set_random(self.y_speed, self.rect_h)
```
前章と殆ど変わらずに、83行目に敵のインスタンスの`self.enemy`の`update()`メソッドを呼び出す一行を追加します。
```python=
    def draw(self):
        if self.game_over:
            self.draw_over()
        else:
            pyxel.cls(0)
            self.player.draw()
            self.enemy.draw()
            pyxel.rect(self.x, self.y, self.rect_h, self.rect_w, self.y%16)

```
敵を表示するために`self.enemy.draw()`を呼び出さないといけません。