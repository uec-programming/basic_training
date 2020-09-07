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
# 5　箱の挙動を変えてみよう
今回は箱が跳ね返すときの挙動を変えてみます。

例えば、跳ね返すときに箱のサイズとか、移動速度をランダムにしてみよう。

![](https://i.imgur.com/hFqDPhg.gif)

## コード
```python=
import pyxel
import random

class App:
    """箱をランダムに動かして、壁にぶつかると跳ね返す動きをする、跳ね返す際に速度も変える"""
    def __init__(self):
        pyxel.init(160, 120, fps=20)
        self.x = 0
        self.y = 0
        self.x_speed = -random.randint(1,5)
        self.y_speed = -random.randint(1,5)
        self.set_random_x()
        self.set_random_y()
        pyxel.run(self.update, self.draw)

    def update(self):
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
        self.x = (self.x + self.x_speed)
        self.y = (self.y + self.y_speed)
        if not 0<self.y<pyxel.height: # メソッドの実行条件、同じくwindowを出てしまったら、方向を逆にする
            self.set_random_y()
        if not 0<self.x<pyxel.width:
            self.set_random_x()

    def set_random_x(self):
        # x軸の速度をいじる
        # このいじり方は数学的な話なのでじっくりこの数式の仕組を考えましょう
        self.x_speed = (self.x_speed//abs(self.x_speed))*(-1)*random.randint(1,5)
        # 箱の横幅をいじる
        self.rect_w = random.randint(5,10)

    def set_random_y(self):
        # y軸の速度とはこの縦幅を変更する
        self.y_speed = (self.y_speed//abs(self.y_speed))*(-1)*random.randint(1,5)
        self.rect_h = random.randint(5,10)

    def draw(self):
        pyxel.cls(0)
        pyxel.rect(self.x, self.y, self.rect_h, self.rect_w, self.y%16)

App()
```

<details><summary>前回との違い(クリックして開く)</summary>

```diff=
 import pyxel
 import random
 
 class App:
+    """箱をランダムに動かして、壁にぶつかると跳ね返す動きをする、跳ね返す際に速度も変える"""
     def __init__(self):
+        pyxel.init(160, 120, fps=20)
         self.x = 0
         self.y = 0
+        self.x_speed = -random.randint(1,5)
+        self.y_speed = -random.randint(1,5)
+        self.set_random_x()
+        self.set_random_y()
         pyxel.run(self.update, self.draw)
 
     def update(self):
         if pyxel.btnp(pyxel.KEY_Q):
             pyxel.quit()
         self.x = (self.x + self.x_speed)
         self.y = (self.y + self.y_speed)
         if not 0<self.y<pyxel.height: # メソッドの実行条件、同じくwindowを出てしまったら、方向を逆にする
+            self.set_random_y()
         if not 0<self.x<pyxel.width:
+            self.set_random_x()
 
+    def set_random_x(self):
+        # x軸の速度をいじる
+        # このいじり方は数学的な話なのでじっくりこの数式の仕組を考えましょう
+        self.x_speed = (self.x_speed//abs(self.x_speed))*(-1)*random.randint(1,5)
+        # 箱の横幅をいじる
+        self.rect_w = random.randint(5,10)

+    def set_random_y(self):
+        # y軸の速度とはこの縦幅を変更する
+        self.y_speed = (self.y_speed//abs(self.y_speed))*(-1)*random.randint(1,5)
+        self.rect_h = random.randint(5,10)
 
     def draw(self):
         pyxel.cls(0)
+        pyxel.rect(self.x, self.y, self.rect_h, self.rect_w, self.y%16)
 
 App()
```

</details>

## 解説
```python=6
    def __init__(self):
        pyxel.init(160, 120, fps=20)
```
7行目の3つ目ののところに、キーワード引数の`fps`を指定しました。このキーワード引数を使うと、画面のフレームレート(1秒に何フレーム送るかを表す物)を指定できます。<br>
今回は`20`fpsに設定します。
```python=10
        self.x_speed = -random.randint(1,5)
        self.y_speed = -random.randint(1,5)
```
前回と同じくx軸とy軸の速度を保存する変数を初期化していきます。実は、この二行は0以外の数であれば何でも良いです。<br>気になればこの数値を色々変えて、実行してみてください。プログラムの挙動は大きく変わらないはずです。
```python=12
        self.set_random_x()
        self.set_random_y()
```
この2つの関数で、箱の動く速度の方向を逆にして、箱のサイズを変えています。<br>
`self.set_random_x()`はx軸の速度と、箱の横幅<br>
`self.set_random_y()`はy軸の速度と、箱の縦幅を変えています。

```python=21
        if not 0<self.y<pyxel.height: # メソッドの実行条件、同じくwindowを出てしまったら、方向を逆にする
            self.set_random_y()
        if not 0<self.x<pyxel.width:
            self.set_random_x()
```
`self.set_random_x()`と`self.set_random_y()`の実行を制御する文です。<br>
仕組みは前回のものと同じく、箱が上下の境界を超えたら`self.set_random_y()`を実行します。<br>
箱が左右の境界を超えたら`self.set_random_x()`を実行します。

```python=26
    def set_random_x(self):
        # x軸の速度をいじる
        # このいじり方は数学的な話なのでじっくりこの数式の仕組を考えましょう
        self.x_speed = (self.x_speed//abs(self.x_speed))*(-1)*random.randint(1,5)
        # 箱の横幅をいじる
        self.rect_w = random.randint(5,10)
```
肝心な`set_random_x()`メソッドの定義文です。<br>
29行目の`self.x_speed`は今のx軸の速度です、`abs(self.x_speed)`はその速度の絶対値です。<br>
`(self.x_speed//abs(self.x_speed))`この計算をすると`数x`と`数xの絶対値`の商の計算になります。この計算の結果は`1`か`-1`かになります。つまり、元のx軸の速度の方向がわかります。`1`であれば、元のx軸の速度は右に向いています、`-1`であれば、左に向いています。<br>
昔のx軸の速度の方向に`-1`を更にかけると、速度の方向が逆になります。<br>
逆の速度の方向単位に、新しく`random.randint(1,5)`を実行して、取り出した新しい乱数に掛けると、方向が逆になった、ランダムなx軸の速度が代入されます。<br>
31行目は単純に箱の横幅`self.rect_w`を設定し直しています。

```python=33
    def set_random_y(self):
        # y軸の速度とはこの縦幅を変更する
        self.y_speed = (self.y_speed//abs(self.y_speed))*(-1)*random.randint(1,5)
        self.rect_h = random.randint(5,10)
```
上の`self.set_random_x()`と同じ要領で、y軸の速度の`self.y_speed`と箱の縦幅の`self.rect_h`を設定しています。
```python=38
    def draw(self):
        pyxel.cls(0)
        pyxel.rect(self.x, self.y, self.rect_h, self.rect_w, self.y%16)
```
今回はフレームごとに、x座標y座標と箱の大きさを表す横幅と縦幅を毎回描画し直しています。<br>
色は前回と同じく、y座標の`self.y`について`16`の余りを取って設定していますので、y座標が変えるたびに色が変化します。<br>
`self.__init__()`メソッドの時を思い出してみよう、ゲームのインスタンス化した瞬間、x軸とy軸の速度しか初期化していないのに、この描画メソッドの中に`self.rect_w`と`self.resct_h`を使っています。<br>
しかし、この2つの変数を設定しないと、ゲームは実行できないはずですね。<br>
実は`self.set_random_x()`と`self.set_random_y()`を一回実行しているので、このメソッドの中に`self.rect_w`と`self.rect_h`を定義しているので、`self.__init__()`が実行された最後に、`self.rect_w`と`self.rect_h`は定義された状態になります。