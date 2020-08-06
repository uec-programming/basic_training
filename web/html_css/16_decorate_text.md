---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-16 文字をさらに装飾してみよう

<!-- 目標 -->
今回は文字の影などの装飾を加えましょう。

## 練習

<!-- 指示 -->

 - `text-shadow`プロパティを追加する。
 - `font-size`プロパティを追加する。
 - `text-align`プロパティを追加する。

```diff=1
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>電通 太郎のホームページ</title>
      <style>
        h1 {
          color: pink;
          background-color: #4abdac;
          padding: 32px;
+         text-shadow: 2px 2px 4px black;
+         font-size: 64px;
+         text-align: center;
        }
        h2 {
          color: darkgreen;
          border-left: 8px solid #4abdac;
          padding-left: 8px;
          margin-top: 32px;
        }
        img {
          border: 4px solid gray;
        }
        main {
          margin: 16px;
        }
      </style>
    </head>
    <body>
    ...省略...
```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://uec-programming.github.io/basic_training/web-sample/img/demo1-16.png)
:::warning
環境によっては画像と書体が異なることがあります
:::

<!-- お手本リンク -->
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1-16.html "デモ")

<!-- お祝い -->
:::success
:tada: タイトルテキストの見た目が変わりました！
:::


## 解説

### {`text-shadow`|テキスト シャドウ}プロパティ
`text-shadow`プロパティはテキストに影をつけることができます。指定する値はテキスト横方向の影の距離、テキスト縦方向の影の距離、ぼかしの半径、影の色です。このうち、**必ず指定しなければならない**のは**縦横の影の距離**です。影の距離が0より大きい時、テキストの右側、下側に影を作り、影の距離が0より小さい時、テキストの左側、上側に影を作ります。

今回の練習では最初の2つの値である`2px 2px`が横方向、縦方向の影の距離を指定しています。次の`4px`は影のぼかしの半径を指定しています。この値を大きくすると影は広く薄くなります。最後の`black`は影の色を指定しています。
<!--
参考: https://developer.mozilla.org/ja/docs/Web/CSS/text-shadow 
-->

### {`font-size`|フォント サイズ}プロパティ
`font-size`プロパティはテキストの文字の大きさを指定します`small medium large`などの`medium`を基準にした大きさや、今回の練習で用いた`64px`のような数値による大きさによって指定します。
<!-- 
参考: https://developer.mozilla.org/ja/docs/Web/CSS/font-size
-->
### {`text-align`|テキスト アライン}プロパティ
`text-align`プロパティはテキストの横方向の配置を指定します。`left`、`right`、`center`などのキーワード値を用いることで、テキストを左側に寄せる、あるいは右側に寄せる、中央で揃えることができます。今回の練習では`center`を用いたのでタイトルが中央で揃えられています。
<!-- 
参考: https://developer.mozilla.org/ja/docs/Web/CSS/text-align
-->

:::info
今回紹介したプロパティの値を変えながら、コードや表示結果を確認してみましょう。
:::

<style>
iframe{
  border: none;
  width: 100%;
  min-height: 20em;
}
</style>

<iframe src="https://uec-programming.github.io/basic_training/web-sample/text-styles.html"></iframe>