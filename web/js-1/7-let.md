---
tags: Web_JavaScript_1
lang: ja-jp
breaks: false
---

{%hackmd XHlLOBGsR3CMEh2g6-7OCA %}


# 2-7 変わる値にも名前をつけよう

今回は、状況によって変わる数値や文字列に名前をつけ、便利に利用できるようにしましょう。

## 変数

変数とは、必要に応じて変わる数値や文字列を持ちます。一度代入しても、あとから何度でも代入できます。

変数を定義する時は、`let`を用います。
$$
\tt{
    \color{#0044ff}{let}
    \ 
    \color{#7f7f7f}{\it 変数名};
}
$$

定数の時のように初期値を入れる時は、変数名を書いて、`=`演算子の右に初期値を書きます。
$$
\tt{
    \color{#0044ff}{let}
    \ 
    \color{#7f7f7f}{\it 変数名}
    \ =\ 
    \color{#7f7f7f}{\it 値};
}
$$

代入する時は、変数名を書いて、`=`演算子の右に数値や文字列を書きます。
$$
\tt{
    \color{#7f7f7f}{\it 変数名}
    \ =\ 
    \color{#7f7f7f}{\it 値};
}
$$

```javascript=
let score = 0;
score = 20;       // score: 20
score = 50;       // score: 50
score = 70;       // score: 70

let player;
player = 'あなた';
console.log(player + 'のターン');  // 'あなたのターン'
player = '相手';
console.log(player + 'のターン');  // '相手のターン'
player = 'あなた';
console.log(player + 'のターン');  // 'あなたのターン'
```

> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> 変数を定義したり代入したりしてみましょう
> 
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=// 変数を定義\nlet     =    ;\n// 出力\nconsole.log(     );\n// 代入\n    =    ;\n// 出力\nconsole.log(     )"></iframe>
> 

## 便利な制限

### 同名の変数は定義できない
変数は値の再代入は可能です。しかし、定数と同じように再び同じ名前の変数を定義することはできません。同じ名前の変数を定義すると構文エラーが発生します。
<!--
定数と同じだね
-->

```javascript=
let dogAge = 2; // 定義
dogAge = 3;     // 代入
dogAge = 4;
dogAge = 5;
let dogAge = 0; // 再定義はエラー
```


## 四則演算と合わせて使う
最初の例は変数`passenger`を用いてバスの中の乗客の人数を出力するプログラムです。変数`passenger`に数値を足したり引いたりした数値を、再び変数`passenger`に代入しています。


```javascript=
// バスの乗客数
let passenger = 0;

// 最初のバス停で5人乗りました
passenger = passenger + 5;
console.log(passenger);    // 5

// 次のバス停で2人乗りました
passenger = passenger + 2;
console.log(passenger);    // 7

// その次のバス停で4人降りました
passenger = passenger - 4;
console.log(passenger);    // 3
```

<!-- 右辺が先に評価され、左辺の変数に代入 -->
次の例は上の例と同じ結果を出力するプログラムです。上の例との違いをよく見てみましょう。
```javascript=
// バスの乗客数
let passenger = 0;

// 最初のバス停で5人乗りました
passenger += 5;
console.log(passenger);    // 5

// 次のバス停で2人乗りました
passenger += 2;
console.log(passenger);    // 7

// その次のバス停で4人降りました
passenger -= 4;
console.log(passenger);    // 3
```
ここで用いた演算子は`=`演算子ではありません。ここでは`+=`演算子、`-=`演算子を用いました。右辺の数値を変数`passenger`に足したり、引いたりします。その後に結果を変数`passenger`に代入します。上の例よりも短くコードを書くことができましたね。

> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> 上の例のように変数の値を出力した後、別の値を代入してから出力してみましょう。
> 
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=// 変数を定義\n\n// 出力\n\n// 変数に新しい値を代入\n\n// 出力\n"></iframe>
> 

> [color=#f5d400]
> ### :pencil2: **まとめ**
> 
> :white_check_mark: 繰り返し使う値は**変数**を使うと便利  
> :white_check_mark: 変数は`let`キーワードを使って定義する  
> :white_check_mark: 計算と代入は`+=`や`-=`を使って短縮できる
