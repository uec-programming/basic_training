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
.mathjax > .MJXc-display {
    background: #eee;
    border-radius: 8px;
    box-shadow: #eee 0 -6px, #eee 0 6px;
}
</style>

# 2-13 複数の条件を組み合わせよう

今回は、より複雑に条件を組み合わせた場合の分岐処理をしましょう。

## else if文
if文でfalseと判断された時にelse文の中のプログラムを実行します。しかし、さらに細かく条件を設定して別のプログラムを実行したい時もあります。複数の条件で分岐させたい時に使われるのが**else if文**です。
```javascript
if (条件式１) {
    条件式１を満たした時に実行するプログラム
} else if (条件式２) {
    条件式１は満たさず、条件式２を満たした時に実行するプログラム
}
```

```javascript
const hour = 7;
if ( hour < 10 ) {           // 朝ならば
    console.log('おはよう');
} else if ( hour > 18 ) {    // 朝ではなくて、夜ならば
    console.log('こんばんは');
} else {                     // 朝でも夜でもないならば
    console.log('こんにちは');
}
```

```flow
st=>start: 開始
e=>end: 終了
op=>operation: 年齢を定義
cond1=>condition: 10時より前か?
out1=>operation: “おはよう”と出力
cond2=>condition: 18時より後か?
out2=>operation: “こんばんは”と出力
out3=>operation: “こんにちは”と出力

st->cond1
cond1(yes)->out1->e
cond1(no)->cond2
cond2(yes)->out2->e
cond2(no)->out3->e
```

## 論理演算子
論理演算子とはオペランドの真偽値に対して、`true`または`false`を返す演算子のことを指します。論理演算子を用いることで、複数の条件式を一つにまとめることができます。以下の3つの論理演算子を確認してみましょう。
| 記号   | 名称    | Column 3 |
| ----- | ------ | -------- |
| `&&`  | 論理AND(かつ) | 左オペランドと右オペランドの両方が`true`なら`true`を返す。     |
| `||`  | 論理OR(または) | 左オペランドと右オペランドの少なくとも一方が`true`なら`true`を返す。     |
| `!`   | 論理NOT | 右オペランドが`true`なら`false`を、`false`なら`true`を返す。 |

```javascript=
console.log(true && true);       // true
console.log(true && false);      // false
console.log(false && false);     // false
console.log(21 < 22 && 33 < 34); // true

console.log(true || true);       // true
console.log(true || false);      // true
console.log(false || false);     // false
console.log(5 == 5 || 3 == 2);   // true

console.log(!true);             // false (trueの反対)
console.log(!false);            // true  (falseの反対)
console.log(!(2 < 3));          // false
```
> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> `&&`や`||`などの演算子を用いて、複数の数値比較を組み合わせてみましょう。
> 
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code="></iframe>

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
        const input = 24;
        // 答えと比べる
+       if (input < 1 || 100 < input) {
+         alert('1から100の間で入力してください。');
+       } else if (input == answer) {
-       if (input == answer) {
          alert('正解!');
-       } else {
-         alert('不正解!');
-       }
+       } else if (input < answer) {
+         alert('不正解!答えは入力した数字より大きいです。');
+       } else {
+         alert('不正解!答えは入力した数字より小さいです。');
+       }
      </script>
    </head>
    <body>
      <h1>数当てゲーム</h1>
    </body>
  </html>
```

## 解説

まず、`input`が1から100の範囲内にない場合にメッセージを出すことを考えましょう。if文の条件式は「`input`が1より小さい」という条件と「`input`が100より大きい」という条件の論理ORを取っています。今`input=24`なので、どちらの条件も`false`となります。そのため、このif文の条件式は`false`となります。

次のelse if文を見てみましょう。`input == answer`という条件式は「`input`と`answer`が等しい」という意味です。今は、満たされてないため、この条件式も`false`となります。

さらにその次のelse if文を見てみましょう。`input < answer`という条件式は満たされています。そのため、この条件式は`true`となります。

その結果、else if文の中の`alert('不正解!答えは入力した数字より大きいです。');`が実行されることになります。

最後のelse文は、これまでの条件がどれも満たされなかった時に実行されます。今は、既に満たされた条件があったので、このelse文は実行されません。

> [color=#f5d400]
> ### :pencil2: **まとめ**
> 
> :white_check_mark: **else if文**で、複数の条件分岐を作ることができる。  
> :white_check_mark: 論理演算子で、複数の条件式をひとまとめにすることができる。  


