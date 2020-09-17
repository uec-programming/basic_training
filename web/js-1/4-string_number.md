---
tags: Web_JavaScript_1
lang: ja-jp
breaks: false
---

<style>
iframe{
  border: none;
  width: 100%;
  min-height: 12em;
}
</style>

# 2-4 文字列と数値を使おう

今回は、文字列と数値の違いを学習しましょう。

## 文字列

JavaScriptにある様々なデータ型の1つに、**文字列**({string|ストリング})があります。文字列は次のように`'`(シングルクォート)または`"`(ダブルクォート)で括ります。

```javascript
'これは文字列です'
"これも文字列です"
```

`'`を用いた場合と`"`を用いた場合もまったく同じように文字列が作られます。ただし、`'文字列"`のように開始と終了で違う記号にすることはできません。
<!-- 'と"はまったく同じ -->

:::info
今後この教材では`'`(シングルクォート)を主に使います。
:::

<!--
JSPrimer
https://jsprimer.net/basic/string/
https://jsprimer.net/basic/data-type/#string

MDN
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String
-->

## 数値

数値({number|ナンバー})もデータ型の1つです。整数や小数など様々な値を扱うことができます。

```javascript
10
20.0
0.24
```

:::info
JavaScriptは、C言語やPythonのような`int`型(整数)や`double`型(浮動小数点数)のような区別はなく、すべて同じように扱います。  
:::

<!-- 
JSPrimer
https://jsprimer.net/basic/data-type/#number

MDN
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number
-->

> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> 文字列や数値を出力してみましょう。  
> `console.log()`関数を用いると結果を下の欄に出力できます。  
> また自分で値を変えて、様々な文字列や数値を出力してみましょう
> 
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=console.log('おはよう');\nconsole.log(%22こんにちは%22);\nconsole.log(2020);"></iframe>

## 文字列と数値の違い

文字列は**文字**の**列**と書かれるように、複数の文字をひとまとめにしたデータです。

$$
\boxed{\boxed{こ}\ \boxed{れ}\ \boxed{は}\ \boxed{文}\ \boxed{字}\ \boxed{列}\ \boxed{で}\ \boxed{す}}
$$

文字列は、画面に表示する文字や、ユーザーが入力した文字などに利用されます。

一方の数値は、計算に使うことができます。足し算や掛け算などの四則演算は次回行います。

では、`'120.5'`と書いた場合にはどうなるでしょう。一見数値に見えますが、シングルクォートで囲まれているので文字列です。文字列なので当然計算には使えません。

$$
\boxed{\boxed{１}\ \boxed{２}\ \boxed{０}\ \boxed{．}\ \boxed{５}}
$$

```javascript
'こんにちは'   // 文字列
'120.5'      // 文字列の'120.5'
120.5        // 数値の120.5
```

## 文字列と数値の変換

文字列と数値は相互に変換することができます。例えば、数値同士で計算をし、その結果を画面に表示する時に数値から文字列へ変換します。

数値から文字列にするには`String()`関数を、文字列から数値にするには`Number()`関数を使います。

```javascript
230            // 230 (数値)
String(230)    // '230' (文字列)
String(12.5)   // '12.5' (文字列)
'720'          // '720' (文字列)
Number('720')  // 720 (数値)
Number('3.14') // 3.14 (数値)
```

> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> 数値や文字列を出力してみましょう。さらに、Number()関数やString()関数で変換してみましょう。  
> `console.log()`関数を用いると結果を下の欄に出力できます。
> 
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=console.log(230);\nconsole.log(String(230));"></iframe>

:::info
**:mag: 非数**

`Number('文字です')`のように、数値にできない文字列を`Number()`関数に渡すとどうなるでしょう。結果は`NaN`(非数, **N**ot **A** **N**umber)という特殊な値になります。余裕があったら試してみましょう。
:::

> [color=#f5d400]
> ### :pencil2: **まとめ**
> 
> :white_check_mark: **文字列**は`'`や`"`で括って作成でき、入力や表示などに使われる。  
> :white_check_mark: **数値**は整数や小数を扱うことができ、計算などに使われる。  
> :white_check_mark: `Number()`関数と`String()`関数で数値と文字列を変換できる。  
> 
