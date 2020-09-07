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
# 3　箱の色を変えてみよう
今回は縦に移動させてみて、色の変化も入れてみましょう。

![](https://i.imgur.com/Tw2gl4g.gif)


## コード
```python=
import pyxel

class App:
    def __init__(self):
        pyxel.init(160, 120)
        self.y = 0
        pyxel.run(self.update, self.draw)

    def update(self):
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
        self.y = (self.y + 1) % pyxel.height

    def draw(self):
        pyxel.cls(0)
        pyxel.rect(0, self.y, 8, 8, self.y%16)

App()
```

<details><summary>前回との違い(クリックして開く)</summary>

```diff=
 import pyxel

 class App:
     def __init__(self):
         pyxel.init(160, 120)
+        self.y = 0
         pyxel.run(self.update, self.draw) 

     def update(self):
         if pyxel.btnp(pyxel.KEY_Q):
             pyxel.quit()
+        self.y = (self.y + 1) % pyxel.height

     def draw(self):
         pyxel.cls(0)
+        pyxel.rect(0, self.y, 8, 8, self.y%16)

+App()
```
</details>

## 解説
|行番号|解説|
|---|---|
|6|今回は縦に動かしたいので`self.y`を初期化します。|
|11|前回と同じ要領で、縦の枠を超過してしまったら一番上に戻って欲しいので、`(self.y+1)%pyxel.height`で`self.y`を更新します。`pyxel.height`でウィンドウの高さ(縦幅のサイズ)を取得できます。|
|16|`self.y`を二番目の引y数に入れて、y座標が更新されるたら、縦に移動します。<br>今回は色も制御してみました。一番最後の引数は0\~15の間の数値を取れるので、`self.y`に対して`16`の余りを取ると、0\~15の値が出てくるので、その値を色の引数として使ってみました。|
|18|このファイルがインポートされないとしたら、このまま最後に`App()`をインスタンス化してもいいです。|