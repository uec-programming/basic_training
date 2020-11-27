---
tags: Web_JavaScript_1
lang: ja-jp
breaks: false
---

<style>
iframe{
  border: none;
  width: 100%;
  min-height: 15em;
}
</style>

# 2-14 入力された値を使おう

今回は、ユーザーの入力欄を作成します。

## 「何もない」という値

{`null` | ヌル}は、「何もない」や「空」を意味する値です。 `true`が「正しい」、`false`が「正しくない」として使われていたのと同じように`null`もまた「何もない」という意味で使われる1つの値です。

{`undefined` | アンデファインド}は、内容が存在しない時などに暗黙的に(自動的に)設定される値です。まだ何も代入していない変数などから`undefined`が得られます。自分から`undefined`を変数に代入することは通常ありません。

`null`と`undefined`はよく似ています。
**`null`が空である**こと、**`undefined`が存在しない**ことの違いを理解するためには、トイレットペーパーの説明が役立ちます。

![演算子](https://uec-programming.github.io/basic_training/web-sample/img/null-undef.png)

左から順に確認していきましょう。一番左の変数には100が代入されています。トイレットペーパーが100だけありますね。

次に左から2番目の画像ではトイレットペーパーがなくなっていますね。トイレットペーパーという変数が宣言されて、**0**という値が代入されています。

さらに`null`の画像を確認しましょう。この画像ではトイレットペーパーの芯がありません。ホルダーだけがある状態です。トイレットペーパーという変数が**宣言だけされて、値が代入されていません。**

最後に`undefined`の画像を見てみましょう。そもそもトイレットペーパーのホルダーがありませんね。トイレットペーパーという変数を宣言する場所が**存在しない**ということです。

## モーダル

元のウィンドウからポップアップして、元のウィンドウの上に新たなウィンドウを表示します。この新たなウィンドウのことを**モーダル**と言います。モーダルはウィンドウを閉じるまで元のウィンドウの操作ができなくなります。

### `alert()`関数

alert()関数は画面にメッセージを表示する処理をする関数です。詳しくは**2-2 文字を表示させてみよう**で復習しましょう。
```javascript=
alert('こんにちは。');
```
`alert()`関数では常に何も返さないので、結果を得ようとしても`undefined`が返ります。

### `confirm()`関数
`confirm()`関数は確認ダイアログを表示する処理をする関数です。メッセージと「OK」,「キャンセル」のボタンが表示されます。
```javascript=
confirm('本当によろしいですか？');
```

ユーザーが「OK」をクリックすると`true`を返し、「キャンセル」をクリックすると`false`を返します。

<iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=const%20ok%20=%20confirm('本当によろしいですか？');%0Aconsole.log(ok);"></iframe>

:::info
:bulb: **真偽値の変数名**

真偽値を格納する変数名は`is`や`has`で始める慣習があります。その慣習に従うと、上の例は`ok`ではなく`isAccepted`というようになります。変数名は短いことよりわかりやすいことが重要ですので、英語が得意な方は挑戦してみましょう。
:::

### `prompt()`関数
`prompt()`関数は入力ダイアログを表示して、ユーザーからの入力された文字列を受け取る関数です。
```javascript=
prompt('お名前は？');
```
`prompt()`関数ではキャンセルがクリックされた時には`null`が返ります。
<iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=const%20name%20=%20prompt('お名前は？');%0Aconsole.log(name);"></iframe>

### モーダルのまとめ

| 関数名   | 返り値 | ユーザーアクション   |
| ------- | -------- | -------- |
| alert   | `undefined` | 「OK」ボタン
| confirm | `true`または`false` | 「OK」と「キャンセル」ボタン
| prompt  | 文字列または`null` | 文字の入力欄と 「OK」と「キャンセル」

## 今回のコード

```diff=
  <!DOCTYPE html>
  <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>数当てゲーム</title>
      <script>
        // 答え
        const answer = 60;
        // 入力された値
-       const input = 24;
+       const data = prompt('答えだと思う数字を入力してください');
+       const input = Number(data);
        // 答えと比べる
        if (input < 1 || 100 < input) {
          alert('1から100の間で入力してください。');
        } else if (input == answer) {
          alert('正解!');
        } else if (input < answer) {
          alert('不正解!答えは入力した数字より大きいです。');
        } else {
          alert('不正解!答えは入力した数字より小さいです。');
        }
      </script>
    </head>
    <body>
      <h1>数当てゲーム</h1>
    </body>
  </html>
```

:::success
:tada: 数当てゲームが完成しました！
:::

## 解説
これまでは変数`input`に`24`という数値を予め代入していました。これを削除します。ここでは`prompt()`関数を用いて、ユーザからの入力を文字列として受け取り、`data`に代入します。

次に`Number()`関数を用いて、`data`の中身の文字列から数値に変換します。これを`input`に代入しました。


> [color=#f5d400]
> ### :pencil2: **まとめ**
> 
> :white_check_mark: `null`は何もないことを意味する値  
> :white_check_mark: `undefind`はそもそも値が存在しない状態を示す値  
> :white_check_mark: `alert()`, `prompt()`, `confirm()`はそれぞれモーダルを表示する関数  

