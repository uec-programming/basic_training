---
tags: Web_JavaScript_1
lang: ja-jp
breaks: false
---

<style>
iframe{
  border: none;
  width: 100%;
  min-height: 20em;
}
.mathjax > .MJXc-display {
    background: #eee;
    border-radius: 8px;
    box-shadow: #eee 0 -6px, #eee 0 6px;
}
</style>

# 2-9 HTMLと組み合わせてみよう

今回からは、HTMLとJavaScriptを組み合わせていきます。

## 目標


ここからは数当てゲームを作っていきます。適当な数値を入力すると、答えより大きい、小さい、あるいは正解とが表示され、これを繰り返して正解の数を探るゲームです。

## HTMLファイルの作成

新しいHTMLファイルを作成し、`number-game.html`と名前をつけて保存しましょう。


まずは基礎となるHTMLファイルを作成します。HTMLファイルは`<!DOCTYPE html>`という宣言から始まり、`<html>`要素の中に`<head>`要素と`<body>`要素がありました。

しかし、新しいHTMLファイルを作るたびに、これらの雛形を毎回記述するのは少し面倒です。そこで、Emmetという便利なプラグインを利用しましょう。Emmetは、HTMLのコードを素早く書くために開発されているプラグインです。VS Codeには標準でインストールされているのですぐに使えます。Atomを使っている場合はEmmetというパッケージをインストールしましょう。
:::info
**:mag: プラグインとは**

VS CodeやAtomなどの多くのエディタには、初期搭載されている基本機能に加えて、自分でエディタに機能を追加することができます。この追加機能をプラグインといい、VS Codeでは拡張機能、Atomではパッケージと呼ばれています。イメージとしては、スマートフォンに標準搭載されているアプリと自分でストアから追加したアプリの関係とよく似ています。

特定のプログラミング言語の予測候補を強化するものや、コードを綺麗に整えるもの、機械学習でこれから書くコードを予測するものまであります。
:::

空のHTMLファイルを保存したら、1行目に半角の`!`を入力してからTabキーを押します。VS Codeの場合は予測候補に入力内容が表示されるので、Tabキーの代わりに候補を選択しても構いません。すると、以下のようなコードが入力されたと思います。

```htmlmixed=
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

Emmetを使うと一瞬で入力できて便利ですね。Emmetは、より複雑なHTMLやCSSを入力するときにこそ役立つのですが、今は趣旨とそれるため省略します。

続いて、以下のように修正します。

:::info
`-`から始まる赤い行は変更前、`+`から始まる緑の行が変更後です。
:::

```diff=
  <!DOCTYPE html>
- <html lang="en">
+ <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-     <title>Document</title>
+     <title>数当てゲーム</title>
+     <script>
+       alert('表示テスト');
+     </script>
    </head>
    <body>
+     <h1>数当てゲーム</h1>
    </body>
  </html>
```

### `lang`属性

`<html>`要素の`lang`属性はページで使われる言語を指定します。`en`は英語、`ja`は日本語です。省略しても構わないですが、せっかくEmmetが書いてくれたので利用しましょう。

### `<meta name="viewport">`

`<meta>`要素はページに関する情報を表す要素でした(1-10参照)。今回Emmetによって挿入されたのは、スマートフォンなどでも表示を等倍にする指定です。これを指定しないと、PCサイトとして扱われるため縮小表示されます。

### `<script>要素`
`<script>`要素はJavaScriptのコードやデータをHTML文書に埋め込む時に用いる要素です。今回の練習では`<script>`と`</script>`で挟まれた部分に書かれた`alert('表示テスト');`が埋め込まれました。

HTML文書に直接JavaScriptコードを書かずに、外部ファイルとしてJavaScriptコードを読み込むこともできます。その時には次のような書き方をします。
```htmlmixed=
<script src="number-game.js"></script>
```

> [color=#f5d400]
> ### :pencil2: **まとめ**
> 
> :white_check_mark: Emmetなどプラグインを使うと、コードを書くのが便利。  
> :white_check_mark: JavaScriptは、HTMLファイルの中に組み込むことができる。  
> :white_check_mark: JavaScriptは`<script>`タグの中に記述する。
