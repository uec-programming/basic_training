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

# 2-12 条件によって処理を分岐させよう(2)

今回は、条件を満たさなかった時にも処理を用意しましょう。

## else文
if文は条件式がtrueと判断された時に、if文の中のプログラムを実行します。しかし、falseと判断された時だけに実行したい処理もあります。この時に使われるのが**else文**です。
```javascript
if (条件式) {
    条件を満たした時だけ実行するプログラム
} else {
    条件を満たさなかった時だけ実行するプログラム
}
```
以下の例は定数ageの数値をif文の条件式で判断しています。今回は定数`age`が23なので条件式を満たしません。そのため、else文の中のプログラムが実行されます。
```javascript=
const age = 23;
console.log(`${age}才ですね。`);    // "16才ですね"
if (age < 18) {
  console.log('選挙権がありません'); // 実行されない
} else {
  console.log('選挙へ行こう!');      // 実行される
}
```

```flow
st=>start: 開始
e=>end: 終了
op=>operation: 年齢を定義
op1=>operation: “〇〇才ですね”と出力
op2=>operation: “選挙権がありません”と出力
op3=>operation: “選挙へ行こう!”と出力
cond=>condition: 18歳未満か?

st->op->op1->cond
cond(yes)->op2->e
cond(no)->op3->e
```

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
        if (input == answer) {
          alert('正解!');
-       }
+       } else {
+         alert('不正解!');
+       }
      </script>
    </head>
    <body>
      <h1>数当てゲーム</h1>
    </body>
  </html>
```

## 解説
if文の条件式は`input`と`answer`の数値が一致するかを判断します。それぞれ中身が60と24で異なるので、`answer == input`はfalseを返します。

その結果、条件式を満たさないため、else文の中の`alert('不正解!');`が実行されます。
> [color=#f5d400]
> ### :pencil2: **まとめ**
> 
> :white_check_mark: **else文**は、if文で条件を満たさなかった時に実行する処理がある時に用いられる。  


