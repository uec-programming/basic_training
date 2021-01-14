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

# 2-19 【実力チェック】比較, 条件分岐, 繰り返し

今回は、後半の内容を復習し、自分の作品を制作してみましょう。

## 内容の復習

以下のコードを読み、内容を覚えているか確認しましょう。

### 比較演算子, 真偽値 (2-10)

`<` `<=` `>` `>=` `==` `!=` 2つの値の比較。
`true` `false` 「はい」と「いいえ」

```javascript=
console.log(10 < 15);  // true
console.log(30 <= 40); // true
console.log(4 > 4);    // false
console.log(4 >= 4);   // true
console.log(2 == 2);   // true
console.log(2 != 5);   // true
```
### 論理演算子 (2-13)

`&&` `||` `!` 「かつ」「または」「〜の反対」

```javascript=
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!false);         // true
console.log(2 < 3 && 9 < 8); // false
console.log(2 < 3 || 9 < 8); // true
console.log(!(99 < 100));    // false
```

### if文 else文 (2-11, 2-12, 2-13)

「もし〜〜の時」という分岐。

```javascript=
let age = 16;
if (age < 18) {
  alert('18才未満です');
} else if (age < 20) {
  alert('18才以上ですが、未成年です');
} else {
  alert('成人です。');
}
```

### while文 (2-16)

「〜〜の間繰り返す」ループ。

```javascript=
let num = 1;
while (num <= 10) {
  console.log(`3に${num}をかけると${3 * num}です。`)
  num++;
}
```

### for文(2-17)

「〜から〜までの回数繰り返す」ループ
```javascript=
for (let i = 0; i < 10; i++) {
  alert(`300円の商品を${i}個買うと${300 * i}円。`);
}
```

### 入出力(2-14)
| 関数名   | 返り値 | ユーザーアクション   |
| ------- | -------- | -------- |
| alert   | `undefined` | 「OK」ボタン
| confirm | `true`または`false` | 「OK」と「キャンセル」ボタン
| prompt  | 文字列または`null` | 文字の入力欄と 「OK」と「キャンセル」
```javascript=
alert('こんにちは！');  
const name = prompt('お名前はなんですか？');
const check = confirm(`本当によろしいですか？`);
```

> [color=#d400f5]
> 
> ### :rocket: **練習1**
> 
> 「本当によろしいですか？」と尋ね、OKとキャンセルを押した時で異なる文字を表示しましょう。
> :::info
> :bulb:**ヒント**  
> OKボタンとキャンセルボタンを表示する`confirm()`関数が返す、`true`か`false`の結果を利用します。
> :::
> 
> :::spoiler もっとヒント
> 一行目は `const check = confirm('本当によろしいですか？');`。  `check`の値に応じてif文とelse文で場合分け。
> :::
>
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=%2F%2F%20%E3%81%9F%E3%81%9A%E3%81%AD%E3%82%8B%0D%0A%0D%0A%2F%2F%20%E3%82%82%E3%81%97%E3%80%8COK%E3%80%8D%E3%81%8C%E6%8A%BC%E3%81%95%E3%82%8C%E3%81%9F%E3%82%89%0D%0A%0D%0A%20%20%2F%2F%20%E6%96%87%E7%AB%A0%E3%82%92%E8%A1%A8%E7%A4%BA%0D%0A%0D%0A%2F%2F%20%E3%81%9D%E3%81%86%E3%81%A7%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%0D%0A%0D%0A%20%20%2F%2F%20%E6%96%87%E7%AB%A0%E3%82%92%E8%A1%A8%E7%A4%BA"></iframe>
> 


> [color=#d400f5]
> 
> ### :rocket: **練習2**
> 
> 1, 2, 3 ... 10 と数字を表示するプログラムを作成しましょう。
> - 変数を用意する
> - ループを用いて、変数を1から10まで動かす。
> - `console.log()`で出力する。
> - for文でもwhile文でも良い
>
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=%2F%2F%20%E5%A4%89%E6%95%B0%E3%82%92%E5%AE%9A%E7%BE%A9%0D%0A%0D%0A%2F%2F%20%E3%83%AB%E3%83%BC%E3%83%97%0D%0A"></iframe>


> [color=#d400f5]
> 
> ### :rocket: **練習3**
> 
> 入力した数に100を足した数を教えてくれるプログラムを作りましょう。
> :::spoiler ヒント
> 1. `prompt()`関数で入力を受け取り、変数に入れる。  
> 1. 数値に変換する(これを忘れると文字列扱いになって、後ろに`100`という文字が連結される)  
> 1. 足し算をして`alert()`で表示する。
> :::
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code="></iframe>
> 


## 作品制作

これまで学習した知識を用いて、自分のプログラムを作成してみましょう。
特に、`prompt`は入力した値を用いることができるので、役立ちます。

> [color=#f5d400]
> ### :pencil2: **まとめ**
> 
> :white_check_mark: 値の比較や真偽値を学んだ。  
> :white_check_mark: 条件分岐を学んだ。  
> :white_check_mark: 繰り返し処理を学んだ。







