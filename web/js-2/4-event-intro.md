---
tags: Web_JavaScript_2
lang: ja-jp
breaks: false
---

<style>
iframe{
  border: none;
  width: 100%;
  min-height: 25em;
}
</style>

# 3-4 イベント

今回は、ボタンを押した時に関数を動かしましょう。

## イベントとは

これまで学んできたJavaScriptのコードは、ページを読み込むとすぐに実行されました。ところが、多くのWebアプリケーションでは「ボタンをクリックした時」「Enterキーを押した時」「マウスカーソルを要素の上に重ねた時」など、さまざまなユーザーの入力に合わせて処理を実行したいことが多くあります。

これらのユーザーの入力は**イベント**といいます。そのイベントが発火した時に、処理する関数をあらかじめ登録することで、入力に応じた動作を実現します。

ユーザー入力以外にも様々なイベントがあります。イベントについての詳細な仕組みは、3-15で扱います。ここでは使い方を学習しましょう。


![](https://i.imgur.com/zbvtDwC.png)



## clickイベント

ここからは、「表示する」ボタンを押した時に「ボタンが押されました」というアラートを表示するプログラムを作ります。

まずは`<button>`要素を使ってボタンを作り、アラートを表示する`showAlert()`関数を作成します。この時点ではボタンを押しても反応しません。

```htmlembedded=
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script>
      function showAlert() {
        alert("ボタンが押されました");
      }
    </script>
  </head>
  <body>
    <h1>3-4 イベント</h1>
    <button>表示する</button>
  </body>
</html>
```

[ライブデモ (StackBlitz) <i class="fa fa-external-link" aria-hidden="true"></i>](https://stackblitz.com/edit/web3-4-sample?file=index.html) 

6〜8行目で`showAlert`関数を作成し、13行目で`<button>`要素を作成しています。

さて、ここでボタンをクリックした時に関数を呼び出すようにしましょう。要素がクリックされた時には{`click`|クリック}イベントが発火します。`click`イベントが発火した時の処理は{`onclick`|オンクリック}属性に記述します。13行目に次のように書き加えます。

```htmlmixed=13
<button onclick="showAlert()">表示する</button>
```

これにより、`click`イベントが発火すると`showAlert()`関数がよばれます。

:::info
`click`イベント以外もイベント名の頭に`on`をつけた属性名で扱います。
:::


> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> 上のコードを見ながら、押しても反応がなかったライブデモの`<button>`要素に`onclick`属性を追加し、ボタンが押されるとアラートが表示されるようにしましょう。
> 
> 
> 
> [ライブデモ (StackBlitz) <i class="fa fa-external-link" aria-hidden="true"></i>](https://stackblitz.com/edit/web3-4-sample?file=index.html)


> [color=#f5d400]
> ### :pencil2: **まとめ**
> :white_check_mark: **イベント**は、ユーザーアクションなどに応じたタイミングで発火する。  
> :white_check_mark: イベント発火時に関数を呼び出すことができる。  
> :white_check_mark: `click`イベントは、要素がクリックされた時に発火するイベント。  
> 
