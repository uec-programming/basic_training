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
# 4　箱をウィンドウ内に動かそう
今回は箱をウィンドウ内に動き回るようにしてみましょう
![](https://i.imgur.com/tjLxLdg.gif)

## コード
```python=
import pyxel
import random
# ウィンドウの中で跳ね返すような箱を作ってみよう
class App:
    def __init__(self):
        pyxel.init(160, 120)
        self.x = 0
        self.y = 0
        self.x_speed = random.randint(1,5)
        self.y_speed = random.randint(1,5)
        pyxel.run(self.update, self.draw)

    def update(self):
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
        # 新しい座標を計算する
        self.x = (self.x + self.x_speed)
        self.y = (self.y + self.y_speed)
        # 新しいy座標がウィンドウの左右端を超えたら、速度変数に-1を掛ける
        # 例えば最初のx_speedは5で、四角が右に進んでいるとき、右の端を出たら、x_speedが-5となって、次は左に折り返す
        # y_speedにも同じ
        if not 0<self.y<pyxel.height:
            self.y_speed *= -1
        if not 0<self.x<pyxel.width:
            self.x_speed *= -1

    def draw(self):
        pyxel.cls(0)
        pyxel.rect(self.x, self.y, 8, 8, self.y%16)

App()
```

<details><summary>前回との違い(クリックして開く)</summary>

```diff=
 import pyxel
+import random
+# ウィンドウの中で跳ね返すような箱を作ってみよう
 class App:
     def __init__(self):
         pyxel.init(160, 120)
         self.x = 0
         self.y = 0
+        self.x_speed = random.randint(1,5)
+        self.y_speed = random.randint(1,5)
         pyxel.run(self.update, self.draw)
 
     def update(self):
         if pyxel.btnp(pyxel.KEY_Q):
             pyxel.quit()
+        # 新しい座標を計算する
+        self.x = (self.x + self.x_speed)
+        self.y = (self.y + self.y_speed)
+        # 新しいy座標がウィンドウの左右端を超えたら、速度変数に-1を掛ける
+        # 例えば最初のx_speedは5で、四角が右に進んでいるとき、右の端を出たら、x_speedが-5となって、次は左に折り返す
+        # y_speedにも同じ
+        if not 0<self.y<pyxel.height:
+            self.y_speed *= -1
+        if not 0<self.x<pyxel.width:
+            self.x_speed *= -1
 
     def draw(self):
         pyxel.cls(0)
+        pyxel.rect(self.x, self.y, 8, 8, self.y%16)
 
 App()
```
</details>

## 解説

```python=2
import random
```
今回は動くスピードの初期化に、乱数を使うため、`random`モジュールをインポートします。
```python=7
        self.x = 0
        self.y = 0
```
横と縦両方向に動かしたいので、x座標とy座標を別々の変数に保存しないといけません。<br>
2つの変数の初期値はともに`0`になります。
```python=9
        self.x_speed = random.randint(1,5)
        self.y_speed = random.randint(1,5)
```
xとy2つの方向の速度を別々に制御するために、`x_speed`と`y_speed`この2つの変数を用意する。<br>
上下左右に動かす速度を毎回違うものにしたいので、初期化のときは1\~5の間の数字をランダムに決めます。
```python=13
    def update(self):
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
        # 新しい座標を計算する
        self.x = (self.x + self.x_speed)
        self.y = (self.y + self.y_speed)
```
座標情報は`self.x`と`self.y`の中に保存されています。箱を動かすというのは`self.x`と`self.y`の値を変更することになります。<br>
変更の仕方として、元の数値に、速度を足して、代入すればいいです。<br>
17と18行目は初期化のときに設定されたランダムな速度にx,y座標が毎回更新されます。

```python=22
        if not 0<self.y<pyxel.height:
            self.y_speed *= -1
```
22,23行目は箱がウィンドウの上下の境界線にぶつかった後の挙動を制御しています。<br>
まずは、`0<self.y<pyxel.height`の意味を考えてみましょう。これはy座標`self.y`が`0`より大きく、且つウィンドウの縦幅`pyxel.height`より小さいかを見ている部分。<br>
`0<self.y<pyxel.height`の前に`not`を付けることで、この条件の否定をするになります。ウィンドウの上下の幅の中**ではない**を意味しています。つまり、y座標がウィンドウの領域を超過したら、次の文を実行すると意味します。<br>
23行目は`self.y_speed`に`-1`を掛けています。`self.y_speed`がもともと正であれば、負になり、もともとが負であれば、正になる。`self.y_speed`の絶対値は変わっていません。<br>
つまり、この二行で、箱の移動がウィンドウ上下境界の外に出ると、逆の方向に動くようにしています。

```python=24
        if not 0<self.x<pyxel.width:
            self.x_speed *= -1
```
24,25行目は箱がウィンドウの左右の境界線にぶつかった後の挙動を制御しています。<br>
22,23行目と同じく、x方向の速度の`self.x_speed`を制御しています。<br>
つまり、箱が横に動くときに、ウィンドウの左右境界を終えたら、速度を逆の方向にしています。
```python=29
        pyxel.rect(self.x, self.y, 8, 8, self.y%16)
```
x座標とy座標を両方更新していますので、箱を描く関数の最初の2つの引数に`self.x`と`self.y`をしています。