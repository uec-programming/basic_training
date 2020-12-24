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
</style>

# 2-16 繰り返し処理をしよう(1)

今回は、処理を繰り返す方法を学びましょう。

## 繰り返しとは
同じプログラムを何回も繰り返して実行することがあります。この時に何回も同じコードを書く必要はありません。この時に用いるのが**ループ**といい、同じ処理を**繰り返す**ことができます。
<!-- ref.
https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Loops_and_iteration

https://jsprimer.net/basic/loop/

-->

## while文
<!-- whileの書式と挙動 -->
while文は指定した条件が`true`の時だけ、`{}`内のコードを繰り返し実行します。

```javascript=
while (条件式) {
    繰り返し実行する処理
}
```

<!-- 1から10以下の数字を出力するプログラム -->

以下は、1から10までの整数を出力するプログラムです。まずはじめに`step`には1が代入されています。

```javascript=
let step = 1;
while (step <= 10) {
  // stepを出力する
  console.log(`${step}周目`);
  // stepに1を加える
  step += 1;
}
```

while文の条件である「`step`が10以下であること」を満たしているので1周目に入ります。1周目では`"1周目"`を出力し、その後`step`に1を加えて2にします。

続いて、while文の条件を満たしているので2周目に入ります。2周目では`"2周目"`を出力し、その後`step`に1を加えて3にします。

同様に、`"3周目"`, `"4周目"`, ...と出力されます。`"10周目"`が出力された後、`step`に1を加えて11にします。
ここでwhile文の条件を満たさなくなるのでループを抜けます。

`step`のように、繰り返すたびに数が変わる変数のことを、**カウンタ変数**と呼びます。






> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> 上で見たプログラムを実行し、結果を確認しましょう。  
> 次に、1から20までの数を出力するように書き換えましょう。  
> また、奇数だけを出力する方法を考えましょう。
> 
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=let%20step%20%3D%201%3B%0D%0Awhile%20(step%20%3C%3D%2010)%20%7B%0D%0A%20%20%2F%2F%20step%E3%82%92%E5%87%BA%E5%8A%9B%E3%81%99%E3%82%8B%0D%0A%20%20console.log(%60%24%7Bstep%7D%E5%91%A8%E7%9B%AE%60)%3B%0D%0A%20%20%2F%2F%20step%E3%81%AB1%E3%82%92%E5%8A%A0%E3%81%88%E3%82%8B%0D%0A%20%20step%20%2B%3D%201%3B%0D%0A%7D"></iframe>


:::warning
:warning: **無限ループ**

無限ループとは、繰り返し処理から抜けることができずに無限に繰り返されてしまう繰り返し処理のことを言います。

```javascript=
while (true) {
  console.log('ハロー');
}
```

例えば、条件式を間違えてしまったり

```javascript=
let step = 1;
while (step > 0) {
  console.log(step);
  step += 1;
}
```

カウンタ変数に1を加えるのを忘れたりすると、

```javascript=
let step = 1;
while (step <= 10) {
  console.log(step);
  
}
```
条件式が常に`true`を返すので無限ループになってしまいます。無限ループが発生してしまっても、ブラウザのタブを閉じれば止めることができるので、焦らずに対処しましょう。
:::


> [color=#f5d400]
> ### :pencil2: **まとめ**
> 
> :white_check_mark: while文は、条件式が`true`の間繰り返される  
> :white_check_mark: 無限ループは、条件式を間違えると発生する  


