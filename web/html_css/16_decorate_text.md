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

<!--
参考: https://developer.mozilla.org/ja/docs/Web/CSS/text-shadow 
-->

### {`font-size`|フォント サイズ}プロパティ

<!-- 
参考: https://developer.mozilla.org/ja/docs/Web/CSS/font-size
-->
### {`text-align`|テキスト アライン}プロパティ

<!-- 
参考: https://developer.mozilla.org/ja/docs/Web/CSS/font-size
-->