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
# 6　操作可能なプレイヤーを作ってみよう
![](https://i.imgur.com/Wj9qhR6.gif)

## コード
```python=
import pyxel
import random

# 操作可能のプレイヤークラスも作ってみる
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

class App:
    """箱をランダムに動かして、壁にぶつかると跳ね返す動きをする、跳ね返す際に速度も変える"""
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
        # gameoverのフラグを設定する
        self.game_over = False
        pyxel.run(self.update, self.draw)

    def update(self):
        # アプリのupdate関数はフレーム更新するごとに、各インスタンスのupdateも呼び出さないと、他のクラスは動かない
        self.player.update()
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()

        if self.player.x<self.x<self.player.x+self.player.w and self.player.y<self.y<self.player.y+self.player.h:
            self.game_over = True
        self.x += self.x_speed
        self.y += self.y_speed
        if not 0<self.x<pyxel.width:
            self.x_speed, self.rect_w = self.set_random(self.x_speed, self.rect_w)
        if not 0<self.y<pyxel.height:
            self.y_speed, self.rect_h = self.set_random(self.y_speed, self.rect_h)

    def set_random(self, cord, size):
        # 座標とサイズを再計算する
        cord = (cord//abs(cord))*(-1)*random.randint(1,5)
        size = random.randint(5,10)
        return cord, size


    def draw(self):
        if self.game_over:
            pyxel.cls(1)
            self.draw_over()
        else:
            pyxel.cls(0)
            self.player.draw()
            pyxel.rect(self.x, self.y, self.rect_h, self.rect_w, self.y%16)

    def draw_over(self):
        pyxel.text(80, 60, "YOU WIN!!!", 15)

App()
```

## 解説

```python=
class Player:
    def __init__(self, x=80, y=5):
        # プレイヤーの基本属性を設定する、初期座標、速度、横縦幅、色
        self.x = x
        self.y = y
        self.speed = 2
        self.w = 6
        self.h = 8
        self.color = 6
```
今回は`Player`というクラスを作成します。<br>
クラスは「関連のあるデータ」と「そのデータを処理する関数」の塊です。<br>
まずは操作できる箱をプレイヤーとして作りましょう。<br>
箱を作るには、まず、箱の初期位置、箱の大きさ、箱の色、箱の移動速度が必要になります。<br>
なので、このクラスの初期化で`self.x`、`self.y`で箱の初期位置、<br>
`self.speed`ではこの移動速度、<br>
`self.w`で箱の横幅、`self.h`で箱の縦幅、<br>
`self.color`で箱の色を設定します。<br>
ここで注目してほしいのは、2行目で、箱の初期化するときに、座標を`x`と`y`という引数で取っています。<br>
他の属性(速度や大きさ、色など)にも引数で代入できます。このように引数で代入すると、もっと使いやすくなることもあります。
```python=15
    def draw(self):
        # このプレーヤーの描画を行うメソッド
        pyxel.rect(self.x, self.y, self.w, self.h, self.color)
```
前回までの`App`クラス中の`draw`メソッドにも同じく書いていましたが、ここで使われている引数は一体どのデータを指しているのかをちゃんと認識してほしい。<br>
`self`がついているので、同じクラス内の変数を見ています。<br>
他のクラス内に同じく`self.x`などで書かれても、違うデータであることを意識しましょう。
```python=19
    def update(self):
        """playerの動きを制御する、WSADで移動を操作"""
        # updateはフレームごとに更新される関数、フレームごとにユーザ(プレーヤー)の入力を受け付けたい
        # and プレイヤーが画面の端にいると操作が受け付けないようにする
        # pyxel.btnpには3つの引数が存在する(判定したいキー, 長押しに反応する時間, 長押しのときに入力を反復する間隔)
        if pyxel.btnp(pyxel.KEY_W, 2, 1) and self.y >= 0: 
            self.y -= self.speed
        elif pyxel.btnp(pyxel.KEY_S, 2, 1) and self.y <= pyxel.height-self.h:
            self.y += self.speed
```
`update`メソッドの中には、フレームごとに更新や実行されたいコードを書きましょう。<br>
プレイヤーの入力受付はこのメソッドに書きます。<br>
24行目の制御文を見てみましょう、`pyxel.btnp()`はキーボードの入力を検出する関数です。<br>
第一引数は**どのキーが押されたか**を監視しています。<br>
第2引数はこのキーを長押していると判定されるまでにかかる時間(フレーム数)を設定しています。2と設定している意味は、連続2フレームでこのキーが押されたのを検出したら、**長押ししている**と見なすの意味です。<br>
第3引数は長押しとみなされたら、どれくらいの頻度でこのキーの入力を受付する。1の意味は1フレームごとに、キーの入力を受付する意味です。<br>
今回は伝統的な**WSAD**で上下左右のコントロールしたいので、**W**は上の操作に割り当てます。<br>
`KEY_W`が押されたら、`pyxel.btnp()`が`True`を返します。<br>
これだけで、プレイヤーの座標を書き換えると、箱が無限に上に移動できます。<br>
箱がウィンドウの上辺まで移動したら、それ以上、上に移動できないように、`self.y >= 0`も判定の中に入れます。<br>
つまり、プレイヤーの箱のy座標が0以上(プレイヤーがウィンドウの上辺の下にいる)、且つ`KEY_W`が押されたら、プレイヤー箱のy座標が書き換えられ、プレイヤーが上に移動します。<br>

上への移動と同じ要領で、下への移動も同じく`pyxel.btnp()`に`KEY_S`に入れて、キー**S**で下の移動に割り当てます。<br>
ここで注意すべきのは、下辺に移動するとき、もう一つの判定条件は`self.y <= pyxel.height-self.h`です。<br>
ウィンドウのy軸の下の限界は`pyxel.height`であるのはわかりますが、なぜ`self.h`を引くのでしょうか。<br>
これは、`pyxel.rect()`の描画するときは箱の左上の座標と右と下に伸ばす横幅と縦幅で描画しているからです。<br>
もし、`self.y <= pyxel.height`で判定すると、プレイヤーの箱の左上座標がウィンドウの下辺の限界を超えなければ、移動が可能になります。しかし、こうなると不自然になるので、プレイヤーの箱の下辺がウィンドウの下辺を超えないようにするには`self.y <= pyxel.height-self.h`に設定しないといけません。<br>
勿論、`self.y+self.h <= pyxel.height`と設定しても構いません。

```python=28
        if pyxel.btnp(pyxel.KEY_A, 2, 1) and self.x >= 0:
            self.x -= self.speed
        elif pyxel.btnp(pyxel.KEY_D, 2, 1) and self.x <= pyxel.width-self.w:
            self.x += self.speed
```
上下の操作が設定されたので、同じ要領で左右の操作を`KEY_A`と`KEY_D`に割り当てます。
```python=33
class App:
    """箱をランダムに動かして、壁にぶつかると跳ね返す動きをする、跳ね返す際に速度も変える"""
    def __init__(self):
        pyxel.init(160, 120, fps=20)
        self.x = pyxel.width//2
        self.y = pyxel.height//2
        self.x_speed = -random.randint(1,5)
        self.y_speed = -random.randint(1,5)
        self.rect_w = 5
        self.rect_h = 7
```
ここの37, 38行目にも`self.x`と`self.y`を設定したが、これは`App`クラスの中の変数(属性)であり、`Player`クラスの中の変数(属性)でないことを注意しましょう。
```python=43
        # APPの中にplayerのインスタンスを作成する
        self.player = Player()
```
実行するときは`App`クラスだけで実行するので、このクラスの中で`Player`を操作したいので、`App`クラスの中の一つの変数として、`self.player`を宣言します。
```python=45
        # gameoverのフラグを設定する
        self.game_over = False
```
ゲーム終了の画面を実装したいので、違う画面の描画用に、ゲーム終了のフラグ`self.game_over`を用意します。<br>
フラグなので、ブール値で設定します。
```python=49
    def update(self):
        # アプリのupdate関数はフレーム更新するごとに、各インスタンスのupdateも呼び出さないと、他のクラスは動かない
        self.player.update()
```
ゲームが始まると、実際にフレームごとに実行されるのは`App.update()`と`App.draw()`になります。`Player.update()`は自動的に実行されません。`Player.update()`が実行され無いと、プレイヤーのコントロールができません。<br>
プレイヤーのインスタンスである`self.player`をコントロールするには、`App.update()`の中に、明示的に`self.player.update()`を呼び出さないといけません。このように書くと、`App.update()`が実行されたら、`self.player.update()`も実行されます。<br>
`self.player.update()`が実行されると、プレイヤーへのコントロールができるようになります。<br>
```python=55
        if self.player.x<self.x<self.player.x+self.player.w and self.player.y<self.y<self.player.y+self.player.h:
            self.game_over = True
```
今回のゲーム終了の条件は簡単で、我々が操作できるプレイヤーが動き回る箱を捕まえれば、勝ちとします。<br>
ここでゲームにおける大事な概念である、**当たり判定**が出てきます。<br>
当たり判定はゲームプログラミングにおいて、避けて通れないテーマです。<br>
一次元、二次元、三次元の組み合わせで色んなゲームアイデイアが実装できます。例えば、シューティングゲームでは線や点と二次元三次元の当たり判定、アクションゲームなら三次元のオブジェクトの間の当たり判定があります。<br>
今回は二次元のゲームなので、比較的に簡単です。<br>
二次元の当たり判定では円と四角、四角と四角、円と円など、色んな種類がありますが、今回は一番簡単な「四角と四角」の手抜き当たり判定をやってみます。<br>
判定の主体は**動き回る箱**と操作できる**プレイヤー**です。<br>
`self.player.x<self.x<self.player.x+self.player.w`は、動く箱の左上のx座標がプレイヤーの箱の左右の範囲の間にあると意味します。<br>
x座標と同様に、y座標は`self.player.y<self.y<self.player.y+self.player.h`で判定しています。<br>
2つの条件を`and`で繋いて、動く箱のx座標とy座標が同時にプレイヤーの箱の範囲内であれば、if文内の内容が実行されます。<br>
プレイヤーの箱と動く箱が重なったら、ゲーム終了のフラグ`self.game_over`に`True`を代入します。<br>
![上の当たり判定の図示](https://i.imgur.com/BMEmuIT.png)
手抜き当たり判定なので、うまく判定できない場合があります。それはどういう場合かを考えてみてください。<br>
その問題を解消するにはどうすればいいでしょうか？
```python=59
        if not 0<self.x<pyxel.width:
            self.x_speed, self.rect_w = self.set_random(self.x_speed, self.rect_w)
        if not 0<self.y<pyxel.height:
            self.y_speed, self.rect_h = self.set_random(self.y_speed, self.rect_h)
```
動き回る箱の大きさや動く速度をランダムにするために、`set_random()`メソッドを使っています。
```python=64
    def set_random(self, cord, size):
        # 座標とサイズを再計算する
        cord = (cord//abs(cord))*(-1)*random.randint(1,5)
        size = random.randint(5,10)
        return cord, size
```
動き回る箱の大きさや動く速度をランダムにしたいので、前の章では`set_random_x()`と`set_random_y()`2つのメソッドを使いました。<br>
その2つのメソッドが近い形をしていて、良いプログラマーであれば、うまくまとめられるかを考えるべきです。<br>
前章では、メソッドの中で、直接属性をいじっていたので、違う属性を変更させるには違うメソッドが必要でした。<br>
今回は「引数」と「返り値」を活用して、計算処理自体は同じ関数にまとめました。<br>
変更したい属性(変数)は、メソッドの引数で受け取ってから、データを処理して返します。<br>
返り値を元の属性(変数)に代入し直します。
```python=71
    def draw(self):
        if self.game_over:
            pyxel.cls(1)
            self.draw_over()
```
今回は二種類の画面を場合分けて描画します。<br>
まずはゲーム終了時の画面を描画します。<br>
動く箱とプレイヤーが接触したら、`self.game_over`が`True`になります。<br>
もし、`self.game_over`のフラグが立ったら、まず`pyxel.cls(1)`でウィンドウ全体を1番の色で塗りつぶします。<br>
次は`self.draw_over()`メソッドを実行します。
```python=75
        else:
            pyxel.cls(0)
            self.player.draw()
            pyxel.rect(self.x, self.y, self.rect_h, self.rect_w, self.y%16)
```
動く箱とプレイヤーがまだ接触していない間、`self.game_over`は`False`なので、この部分が実行されます。<br>
まずは`pyxel.cls(0)`でウィンドウを0番の色で塗りつぶします。<br>
次は`selfplayer.draw()`を呼び出します。前の`self.player.update()`と同じで、明示的に呼び出さないと、プレイヤーが描画されません。<br>
最後は動く箱の描画です。
```python=80
    def draw_over(self):
        pyxel.text(80, 60, "YOU WIN!!!", 15)
```
ゲーム終了の画面は別の`draw_over()`メソッドで作成します。<br>
一般的にゲームの進行段階は2段階だけあるのは少ない、ゲームの進行に合わせて**シーン**を追加して行くのは一般的なやり方です。<br>
今回のこの`draw_over()`は**ゲーム終了シーン**紛いのものと思ってください。<br>
ゲーム終了後の画面描画はこのメソッドの中に書くと、ゲーム本体の`draw()`メソッドが簡潔に書けて、プログラムを修正するときは簡単になります。