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
# 2　箱を動かしてみよう

![](https://i.imgur.com/5HDPp8j.gif)
## コード

```python=
import pyxel

class App:
    def __init__(self):
        pyxel.init(160, 120)
        self.x = 0
        pyxel.run(self.update, self.draw)

    def update(self):
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
        self.x = (self.x + 1) % pyxel.width
        # self.x += 1
        # if self.x > pyxel.width:
        #     self.x = 0

    def draw(self):
        pyxel.cls(0)
        pyxel.rect(self.x, 0, 8, 8, 9)
        
        
if __name__=='__main__':
    App()
```

<details><summary>前回との違い(クリックして開く)</summary>

```diff=
+import pyxel

+class App:
+    def __init__(self):
         pyxel.init(160, 120)
+        self.x = 0
+        pyxel.run(self.update, self.draw)

+    def update(self):
         if pyxel.btnp(pyxel.KEY_Q):
             pyxel.quit()
+        self.x = (self.x + 1) % pyxel.width
+        # self.x += 1
+        # if self.x > pyxel.width:
+        #     self.x = 0
 
+     def draw(self):
         pyxel.cls(0)
         pyxel.rect(self.x, 0, 8, 8, 9)
 if __name__=='__main__':
+    App()
```
</details>

## 解説
|行番号|解説|
|---|---|
|3|今回は箱を動かすと合わせて、オブジェクト化もしてみます、怖いことは何にもありますん。<br>オブジェクトは一連のデータとそれに関する処理をまとめたものです。ゲームアプリなので、今回は簡単に`App`と名付けます。|
|4|オブジェクトをインスタンスにする瞬間(実体化)実行したい処理はこの`__init__()`関数の中に書く。<br>オブジェクトなので、オブジェクト自身からこの関数を見えるように最初の引数は必ず`self`にする。|
|6|前回の箱の座標は定数にしていたので、箱は動けませんでした、今回は箱を動かしたいため、この箱のx座標を保存するための変数`x`を用意します。<br>この変数は同じクラス内の別のメソッドから呼び出すこともあるため、`self.x`と書きます。<br>初期値は`0`に設定します。|
|7|前回、ゲームを実行する関数は最後に書いていました。今回は`__init__()`の中に書きます。<br>前回はクラス化していないため、全部グローバルに書けばよかったが、今回はクラス化したため、このゲームを実行し始めるのは、インスタンス化した最後で良いです。<br>ここで注意して欲しいのは、中に入れた関数は`self.update`と`self.draw`になりました。この2つのメソッドはクラス内に書かれたので、`self`を前につけないといけません|
|12|`self.x`の更新処理、つまり箱のx座標の更新処理になります。x座標が変化すると、ゲームウィンドウに表示された箱も移動するようになります。<br>`self.x+1`は`update`が実行されるごとに`1`増えます。`self.x`が増え続けると、ウィンドウの外に行っちゃうので、ウィンドウの横幅のサイズを`pyxel.width`で取得して、余りを毎回求めます。つまり、`self.x`に`1`が足された後、その値がウィンドウの横幅を超過していないと(余りと除数が同じ)`self.x`に`1`足された結果が代入されます。ウィンドウの横幅と同じになった瞬間、その余りが`0`になるので、`self.x`の中に`0`が代入されます。|
|13\~15|12行目の別の書き方、もし`self.x`がゲームウィンドウの横幅より大きくなったら、`self.x`を`0`にセットします。|
|19|毎回、更新された`self.x`で箱を描画します。今回描画した箱のおおきさは`8*8`で、色は`9`番です。|
|23|最後は`App()`を呼び出し、上で作ったクラスをインスタンス化します。<br>インスタンス化された瞬間、`__init__()`が実行されて、ゲームウィンドウが作られ、`pyxel.run()`が実行され、ゲームが始まります。|
