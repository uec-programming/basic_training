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

# 3-1 関数(1)

<!-- ref
javascript.info https://ja.javascript.info/function-basics
MDN https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions
JSPremier https://jsprimer.net/basic/function-declaration/
-->

今回は、同じ処理を使い回す方法を学習しましょう。

## 関数とは

何行かにわたるプログラムをひとまとめにできる機能を関数といいます。同じ処理をさまざまなところで実行することができます。


:::info
関数は、プログラムを作る上で最も重要な要素になるので、しっかり理解しましょう。
:::

## 関数宣言と呼び出し

関数を定義するには、次のように{`function`|ファンクション}キーワードを用いて**関数宣言**をします。

```javascript
function 関数名() {
  処理
}
```

そして、作成した関数を実行したいときには、以下のように関数名の後ろに`()`を記述して**関数を呼び出し**ます。

```javascript
関数名()
```

以下は、「こんにちは」と表示する関数を定義し、その後呼び出すプログラムです。

```javascript=
// sayHello関数を定義
function sayHello() {
  console.log('こんにちは');
}

// sayHello関数を呼び出し
sayHello();
```

まず、2-4行目で`sayHello`関数を定義します。ここでは関数を作成しただけなので、関数内の`console.log()`はまだ実行されていません。

次に、7行目で`sayHello`関数を呼び出します。`sayHello`関数が呼び出されている中、関数内のコードが順に実行され、初めて3行目の `console.log()`が実行されます。そして関数が実行し終わると7行目の処理は終わります。

![](https://i.imgur.com/3Dj7utj.png)

一度定義した関数は、何度でも呼び出すことができます。関数を使うことで、全く同じコードを複製することなく、同じ処理をさまざまな場所から呼び出せるようになります。

> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> 上のコードを自分で入力し、実行してみましょう。  
> 次に、関数を2回呼び出してみましょう。
> 
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=// sayHello関数を定義\n\n\n\n\n// sayHello関数を呼び出し\n"></iframe>


> [color=#f5d400]
> ### :pencil2: **まとめ**
> :white_check_mark: 関数は、処理のまとまり。  
> :white_check_mark: 関数宣言は、`function`キーワードを用いる  
> :white_check_mark: 関数は何度でも呼び出せる。  
> 

