---
tags: Web_JavaScript_2
lang: ja-jp
breaks: false
---

<style>
iframe{
  border: none;
  width: 100%;
  min-height: 20em;
}
</style>

# 3-3 関数(3)

<!-- ref
javascript.info https://ja.javascript.info/function-basics
MDN https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions
JSPremier https://jsprimer.net/basic/function-declaration/
-->

今回は、関数から結果を返す方法を学びましょう。

## 返り値
前回は引数を用いて、関数へデータを渡すことを学びました。関数に渡されたデータの処理をした後に元のプログラムに結果を返したい時があります。ここで用いられるのが**返り値**です。今回はreturn文を用いて結果を元のプログラムに返しましょう。

`return 返り値;`のように記述します。
```javascript
function 関数名(引数) {
  処理
  return 返り値;
}
```
具体的に見てみましょう。`add()`関数に引数として2と3を渡しています。
```javascript=
function add(num1, num2) {
  return num1 + num2;
}

const result = add(2, 3)
console.log(`足し算の答えは${result}`);
```
`add`関数は引数である`num1`と`num2`を足し算して、その値を`return`文で元のプログラムに返しています。

5行目において、`add`関数を呼び出して、結果を`result`に格納します。

![](https://i.imgur.com/4ljPyE6.png)

> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> 上のコードを自分で入力し、実行してみましょう。  
> 次に、掛け算の関数も作成しましょう。
> 
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html"></iframe>

以下のプログラムの`isEven()`関数は引数として渡された数値が偶数なら`true`を、それ以外なら`false`を返します。
```javascript=
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(10));
console.log(isEven(5));
```

ちなみに、上のプログラムを省略して記述した方法が以下のプログラムです。引数`num`が2で割り切れるかどうかの条件式を評価します。その評価値、つまり真か偽を返り値として元のプログラムに返します。

ちなみに、isEven関数は以下のように短縮して書くこともできます。余裕がある人はどうして同じになるのか考えてみましょう。

:::spoiler 解説(クリックで展開)
`num % 2 == 0`は、真偽値(`true`または`false`)を返すため、その値を直接`return`文を用いて関数から返すことができます。
:::

```javascript=
function isEven(num) {
  return num % 2 == 0;
}
```


> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> 上のコードを自分で入力し、実行してみましょう。  
> 次に、関数を2回呼び出してみましょう。
> 
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=// isEven関数を定義\n\n\n\n\n// isEven関数を呼び出し\n"></iframe>

## 変数のスコープ

変数がどの場所からどの場所まで影響するかを定義する必要があります。この変数の影響する範囲のことを**変数のスコープ**と言います。

以下の例を確認してみましょう。
注目すべき部分は変数`name`です。変数`name`のスコープは`sayName()`関数となっています。しかし、6行目で用いられている`name`はスコープ外となっています。そのため、エラーが発生します。

```javascript=
function sayName() {
  const name = '太郎';
  alert(name);
}
sayName();   // '太郎'
alert(name); // エラー
```

関数の中で定義された変数は、関数の中でのみ使うことができます。これを**ローカル変数**といいます。ローカル変数を使うことで、他で使われている変数名と重複したり、他の場所のコードが与える影響を考える必要がなくなります。

これに対して、関数の外で定義した変数を**グローバル変数**といいます

このルールは、`{` `}`で囲まれた部分(ブロック)に適用されるので、関数に限らず`if`文や`for`文でも同じです。


![](https://i.imgur.com/yaNCP27.png)



> [color=#f5d400]
> ### :pencil2: **まとめ**
> :white_check_mark: 返り値を用いて、関数の呼び出し元に値を返すことができる。  
> :white_check_mark: 変数にはスコープがあり、関数内で定義した変数は関数内でしか使えない。  
> 

