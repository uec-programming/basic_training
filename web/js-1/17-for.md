---
tags: Web_JavaScript_1
lang: ja-jp
breaks: false
---

# 2-17 繰り返し処理をしよう(2)

<style>
iframe{
  border: none;
  width: 100%;
  min-height: 15em;
}
</style>

今回は、回数が決まった繰り返し処理をしましょう.

## インクリメントとデクリメント
変数の数値を1増やしたり、１減らしたりする処理は頻繁に用いられます。この時に加算、減算の演算子を用いることができますが、より簡単にコードを書く方法として、**インクリメント**と**デクリメント**があります。まずは下のコードを見てみましょう。
```javascript=
let apple = 5;
apple++; 
console.log(apple); // 6
apple--;
console.log(apple); // 5
```

インクリメント演算子はオペランドの右または左に`++`と書きます。`apple++`は、`apple`に1を加算するという意味で、`apple = apple + 1`, `apple += 1`と同じ意味[^1]です。

デクリメント演算子はオペランドの右または左に`--`と書きます。`apple--`は`apple`に1を減算するという意味で、`apple = apple - 1`, `apple -= 1`と同じ意味です。

[^1]: どちらも実行後に1だけ加算されていることに変わりはありませんが、厳密には返す値が異なります。`apple++`は加算される前の値を返すのに対して、`apple += 1`, `apple += 1`は`++apple`と等価で加算された後の値を返します。

## for文
for文は繰り返す回数、範囲を指定し、`{}`の中のコードを実行します。

<!-- ref
https://jsprimer.net/basic/loop/#for-statement
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for
-->

書式は以下の通りです。

```javascript
for (初期化式; 条件式; 加算式) {
  繰り返し実行する処理
}
```

具体例

```javascript=
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

初期化式は`let i = 0`となっており、変数`i`の値を初期値0にセットしました。次の条件式では`i`が10未満の時と指定しています。最後の加算式では`i`をインクリメント演算子によって1ずつ加算しています。

このプログラムでは`i`が0から9までの時、`i`を出力します。

## for文とwhile文の違い
どちらの文も条件を満たしている間、処理を繰り返すという点では同じです。しかし、for文ではあらかじめ決められた回数を繰り返すときに用います。一方、while文ではあらかじめ繰り返しの回数が分からないような処理をすることができます。

> [color=#d400f5]
> 
> ### :rocket: **練習1**
> 
> 上で見たプログラムを実行し、結果を確認しましょう。  
> 次に、0から19までの数を出力するように書き換えましょう。  
> 
>  <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=for%20(let%20i%20%3D%200%3B%20i%20%3C%2010%3B%20i%2B%2B)%20%7B%0D%0A%20%20console.log(i)%3B%0D%0A%7D%0D%0A"></iframe>

具体例2

```javascript=
console.log(`3の段の計算。`)
for (let i = 1; i < 10; i++) {
  console.log(`3 × ${i} = ${3 * i}`);
}
```

まずはfor文の初期化式、条件式、加算式を見てみましょう。初期化式は`i = 1`となっています。次の条件式では`i < 10`となっています。最後の加算式では`i`は繰り返しをするたびにインクリメントされています。つまり、`i`が1から10未満までの間、繰り返しの処理をするということが分かります。

繰り返しの処理の中身は3に`i`をかけた数を出力するコードです。


> [color=#d400f5]
> 
> ### :rocket: **練習2**
> 
> 上のコードを実際に打ち込んで実行してみましょう  
> 次に、7の段を出力したり、●×100まで出力してみましょう。
> 
>  <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html"></iframe>



> [color=#f5d400]
> ### :pencil2: **まとめ**
> :white_check_mark: インクリメントは、変数の値を1増やすこと。
> :white_check_mark: デクリメントは、変数の値を1減らすこと。
> :white_check_mark: for文は、回数が決まったループに使いやすい   