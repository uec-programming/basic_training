---
tags: Web_JavaScript_1
lang: ja-jp
breaks: false
---

# 2-18 繰り返し処理をしよう(2)

<style>
iframe{
  border: none;
  width: 100%;
  min-height: 15em;
}
</style>

今回は、繰り返しから抜ける方法を学習しましょう。

## break文
break文を用いると、break文が記述されている繰り返しの`for文`または`while文`から抜けることができます。
```javascript=
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
```
上のコードは`i`が0から9まで画面に表示する処理を1ずつ繰り返しますが、`i=5`の時に`break`文があります。この時に繰り返しの`for文`から抜け出し、次の処理へと移ります。

> [color=#d400f5]
> 
> ### :rocket: **練習1**
> 
> 上で見たプログラムを実行し、結果を確認しましょう。  
> 次に、for文から抜ける条件を変更してみましょう。  
> 
>  <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code="></iframe>

## continue文
continue文を用いると、ある条件の時に処理をスキップさせることができます。
```javascript=
for (let i = 0; i < 10; i++) {
  if (i % 3 == 0) {
    continue;
  }
  console.log(`${i}は3の倍数ではありません。`);
}
```
上のコードは`i`が0から9までの間、3の倍数をスキップする処理を繰り返します。`i`が3の倍数の時、`continue文`によって、`console.log`をスキップしています。そして、次の`i`の数値に進みます。

> [color=#d400f5]
> 
> ### :rocket: **練習2**
> 
> 上で見たプログラムを実行し、結果を確認しましょう。  
> 次に、5の倍数もスキップさせてみましょう。  
> 
>  <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html"></iframe>

> [color=#d400f5]
> 
> ### :rocket: **練習3**
> 
> 以下のコードは、そのまま実行すると無限ループになってしまいます。繰り返しを20回で止める処理を追加しましょう。  
> 
>  <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=let%20i%20%3D%200%3B%0D%0Awhile%20(true)%20%7B%0D%0A%20%20console.log(i)%3B%0D%0A%20%20i%2B%2B%3B%0D%0A%7D"></iframe>

<!--
## 無限ループと合わせて使う

```javascript=
let i = 0;
while (true) {

  // 20になったら終了
  if (i == 20) {
    break;
  }

  // 3の倍数はスキップ
  if (i % 3 == 0) {
    continue
  }

  console.log(i);
  i++;
}
```-->




> [color=#f5d400]
> ### :pencil2: **まとめ**
> :white_check_mark: `break`文は、ループから抜けることができる。
> :white_check_mark: `conitune`文は、繰り返しの処理をスキップすることができる。
> 