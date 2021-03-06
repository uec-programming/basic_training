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
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
##### 電気通信大学 プログラミング教室 教材 作成者：張 翌坤
# 1　Pyxelで箱をつくろう
![](https://i.imgur.com/9sAxUwg.png)

今回はpyxelで一個の「箱」を作ります。

なんで箱なの？って思うかもしれません。

箱を描くことで、ゲームエンジンの描画の関数の仕様がわかります。

どんなゲームも、画面に情報を表示しないと、ゲームとは呼べません。

## コード
```python=
import pyxel

pyxel.init(160, 120)

def update():
    if pyxel.btnp(pyxel.KEY_Q):
        pyxel.quit()

def draw():
    pyxel.cls(0)
    pyxel.rect(10, 10, 20, 20, 11)


if __name__ == "__main__":
    pyxel.run(update, draw)
```

## 解説
|行番号|解説|
|----|----|
|1|このシリーズは`pyxel`というゲームエンジンを使うので、まずはこのモジュールを`import`しないといけません|
|3|GUIベースのゲームなので、まずはゲームを表示するためのウィンドウが欲しいです。このコードでウィンドウが生成されます。<br>`pyxel.init(w,h)`の一般的な使い方はウィンドウの横幅と縦幅(整数)を引数とに入れます。<br>今回は横幅`160`縦幅`120`のウィンドウサイズを設定しました。|
|5|ゲームの基本の一つはゲーム内物体の状態の更新、つまりアップデート、この`update()`関数の中には更新したい内容を書きます|
|6|今回はpyxelのキーボードのキー入力を受付する関数`pyxel.btnp()`を使います、引数として`pyxel.KEY_Q`を受け取っています。これは`pyxel`モジュールの中にすでに定義された定数を入れています。意味はキーボードの`Q`。<br>このif文は`update()`関数の中に書かれていますので、`update()`関数が呼び出されるたびに、このif文が実行されます。このif文のは「`Q`が押されたか」を検出しています。`Q`が押されたら、`pyxel.btnp(pyxel.KEY_Q)`の返り値が`True`になり、次のコードブロック内の文が実行されます。|
|7|`pyxel.quit()`はゲームのウィンドウを閉じる関数です。上の文と一緒に見ると、「`Q`が押されたらゲームを終了する」ことだと分かるはずです。|
|9|ゲームの基本のもう一つは内容の描画です。ゲーム画面を描画するには`draw()`という関数が必要です。<br>一般的には`draw()`関数の中にはゲーム内の各オブジェクトの描画処理を書きます。|
|10|`pyxel.cls(col)`はゲーム画面内を塗りつぶす関数です。引数`col`として、一つの0\~15までの整数が入れられます。各整数はい違う色を代表して、ここで`0`を入れているので、ゲームウィンドウを黒に塗りつぶすという意味です。|
|11|`pyxel.rect(x,y,w,h,col)`はゲーム画面内に四角を描く関数です。引数として、最初の2つの`x,y`は四角の左上の座標を意味します。次の2つの`w,h`は四角の横幅と縦幅を意味します。最後の`col`は描いた四角の塗りつぶし色になります|
|14|これは、このファイルが直接実行されたときに限って実行されたい挙動を書くための判定文です。<br>pythonでは、ファイルをインポートするだけでコードの最初から最後まで実行されます。<br>インポートされただけで実行してほしくないが、直接実行すると動いてほしい内容があると、このif文の下に書きます|
|15|`pyxel.run(update, draw)`、pyxelのゲームウィンドウで毎回実行されたい関数を引数として入れます。一般的には、毎回オブジェクトを更新し、更に更新されたオブジェクトを描画し直したいので、`update`関数と`draw`関数を入れます。<br>ここで注意してほしいのは、関数の後ろの`()`がいらないことです。|