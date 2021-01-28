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

# 3-2 関数(2)

<!-- ref
javascript.info https://ja.javascript.info/function-basics
MDN https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions
JSPremier https://jsprimer.net/basic/function-declaration/
-->

今回は、似通った処理をまとめる方法を学びましょう。

## 引数

前回は関数の定義と呼び出しを学びました。この方法では「こんにちは」と表示する関数や、10+5の結果を表示する関数を作成することができます。

しかし、完全に同じデータに同じ処理をしたい時だけではなく、異なるデータに対しても同じ処理をしたいことがあります。例えば、相手に合わせて「〇〇さん、こんにちは」というような関数があれば便利です。

そこで「〇〇さん」という情報を関数にコピーして渡す必要があります。このような関数へ渡す値や変数をを{**引数**|ひきすう}といい、以下のように記述します。

```javascript
function 関数名(引数名1, 引数名2, 引数名3, ...) {
  処理
}
```

関数を呼び出すときには、以下のように`()`内に順序正しく記述します。

```javascript=
関数名(引数1, 引数2, 引数3, ...);
```

具体的に見てみましょう。前回作成した`sayHello()`関数に、名前を渡してみます。

```javascript=
// sayHello関数を定義
function sayHello(name) {
  console.log(`${name}さん、こんにちは`);
}

// sayHello関数を呼び出し
sayHello('太郎');
sayHello('花子');
```

2行目で、1番目の引数として`name`という引数を追加します。これで、「`sayHello`関数は、1つ目の引数として渡された値を`name`という名前の変数として扱う」という意味になります。この`name`は、3行目で出力します。

続いて、7行目で関数を呼び出しますが、1つ目の引数として`'太郎'`という文字列を渡しているので「太郎さん、こんにちは」と出力されます。同じように、8行目は「花子さん、こんにちは」と出力されます。

![](https://i.imgur.com/I9Mtec0.png)

このように、引数を用いて共通する処理を関数にまとめることで、コードをすっきり簡潔にまとめることができます。



> [color=#d400f5]
> 
> ### :rocket: **練習1**
> 
> 下には、前回のコードが入力されています。上のコードになるように自分で書き換えて、実行してみましょう。  
> 次に、別の名前を`sayHello`関数に渡してみましょう。
> 
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=// sayHello関数を定義\nfunction sayHello() {\n  console.log('こんにちは');\n}\n\n// sayHello関数を呼び出し\nsayHello();"></iframe>


引数が複数ある例も見てみましょう。引数が2つになっただけで、ほとんど変わりません。

```javascript=
// guide関数を定義
function guide(place, distance) {
  console.log(`${place}へ行くんですね。`);
  console.log(`${place}までは${distance}kmです。`);
}

// guide関数を呼び出し
guide('北山', 10);
guide('東谷', 3);
```

2行目では`guide`関数を定義しています。1つ目の引数として渡された値は`place`へ, 2つ目は`distance`へコピーされます。

8行目では、`'北山'`, `10`の順に関数へ値を渡しています。これにより、8行目の関数呼び出しでは`place`が`'北山'`, `distance`が`10`になります。


> [color=#d400f5]
> 
> ### :rocket: **練習2**
> 
> 上のコードを自分で入力し、実行してみましょう。  
> 次に、関数呼び出しを追加してみましょう。
> 
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=// guide関数を定義\n\n\n\n\n\n// guide関数を呼び出し\n\n"></iframe>

:::info
:point_up: **補足: 関数に値を渡さないとどうなる？**

引数を定義したのに、値を渡さないとどうなるでしょう。コピー先である引数を使おうとしても、値が渡されていない状況では`undefined`が得られます。

そのため、今日のコードで`sayHello()`というように引数を省略すると、`"undefinedさん、こんにちは"`と表示されます。
:::

:::info
:zap: **発展: デフォルト引数** 

補足で触れたように、関数へ値を渡さないと`undefined`を受け取ります。
その際、`undefined`という値が入ってくることで`"undefinedさん、こんにちは"`のような表示が発生したりと不便な場合があります。そこで、**デフォルト引数**を指定することができ、以下のように記述します。
```javascript
function 関数名(引数名1=デフォルト値1, 引数名2=デフォルト値2) {}
```
呼び出し時に引数が省略されるか`undefined`が渡された場合には、`undefined`の代わりにこのデフォルト値が使用されます。

使用例
```javascript=
function sayHello(name="名無し") {
  console.log(`${name}さん、こんにちは`);
}
```
:::


> [color=#f5d400]
> ### :pencil2: **まとめ**
> :white_check_mark: 引数を用いて、関数へデータを渡せる。  
> :white_check_mark: 引数を持つ関数で、似たような処理をまとめて記述可能  
> 

