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

# 2-10 数値の比較をしてみよう

今回は、数値同士の大小などの比較をしてみましょう。

## 真偽値

これまで数値と文字列を学びました。今回は真偽値について学びましょう。真偽値は別名として真理値、論理値とも言います。真偽値は`true`, `false`の2つの値を取ります。`true`は真、`false`は偽を意味する値で、わかりやすくいうと「Yes/No」や「はい/いいえ」に相当します。

```javascript=
true
false
```

> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> `true`や`false`を出力してみましょう
> 
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=console.log(    );"></iframe>

## 比較演算子

既に学んだ`+`や`-`は算術演算子と言います。それに対して、演算子の対象をオペランド(被演算子)と言います。今回は新しく**比較演算子**を学んでいきます。比較演算子とは左右のオペランドを比較して、比較結果に基づいて真偽値(`true`または`false`)を返します。
下の図で確認しましょう。
![演算子](https://uec-programming.github.io/basic_training/web-sample/img/operators.png)

| 記号 | 名称 | 振る舞い |
| :-----: | -------- | -------- |
| `>`   | 大なり演算子    | 左オペランドが右オペランドより大きければ`true`を返す。     |
| `>=`   | 大なりイコール演算子    | 左オペランドが右オペランドより以上ならば`true`を返す。     |
| `<`   | 小なり演算子    | 左オペランドが右オペランドより小さければ`true`を返す。     |
| `<=`   | 小なりイコール演算子    | 左オペランドが右オペランドより以下ならば`true`を返す。     |
| `==`   | 等価演算子    | 左オペランドと右オペランドが等しければ`true`を返す。     |
| `!=`   | 不等価演算子    | 左オペランドと右オペランドが等しくなければ`true`を返す。     |

```javascript=
console.log(16 < 64);  // true
console.log(32 <= 32); // true
console.log(4 > 4);    // false
console.log(4 >= 4);   // true
console.log(2 == 2);   // true
console.log(2 != 2);   // false
```

> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> `<`や`==`などの演算子を用いて数値を比較し、予想通りの真偽値が出力されるか確認しましょう。
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
-       alert('表示テスト');
+       // 答え
+       const answer = 60;
+       // 入力された値
+       const input = 24;
+       // 答えと比べる
+       alert(answer == input);
      </script>
    </head>
    <body>
      <h1>数当てゲーム</h1>
    </body>
  </html>
```

## 解説

定数`answer`には答えとなる数字を、`input`にはユーザーが入力した数字を入れることにします。入力の部分は後で作るので、今は仮に`input`に`24`を入れておきます。

alertの中では、`answer`と`input`を比較しています。それぞれ中身が60と24で異なるので、`answer == input`は`false`を返します。その結果、`alert(false)`となるので、`false`が表示されます。

> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> 上のコードで`answer`も`60`、`input`も60を代入したらどうなるか予想してみましょう。そして実行して確認してみましょう。


> [color=#f5d400]
> ### :pencil2: **まとめ**
> 
> :white_check_mark: 真偽値には`true`と`false`がある  
> :white_check_mark: 比較演算子は数値の大小を真偽値で返す。  
