---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-15 余白をとろう

<!-- 目標 -->
今回は余白の設定をしましょう。

## 練習

<!-- 指示 -->
 - `padding`プロパティや`margin`プロパティを追加する。

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
+         padding: 32px;
        }
        h2 {
          color: darkgreen;
          border-left: 8px solid #4abdac;
+         padding-left: 8px;
+         margin-top: 32px;
        }
        img {
          border: 4px solid gray;
        }
        main {
+         margin: 16px;
        }
      </style>
    </head>
    <body>
    ...省略...
```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://uec-programming.github.io/basic_training/web-sample/img/demo1-15.png)

<!-- お手本リンク -->
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1-15.html "デモ")

<!-- お祝い -->
:::success
:tada: 余白を設定できました！
:::


## 解説

### {`margin`|マージン}プロパティ

<!-- マージンは外側の余白。 -->

![Margin](https://uec-programming.github.io/basic_training/web-sample/img/margin.png)

<!-- まとめて"ショートハンド"！ -->
`margin`プロパティは、`margin-top`, `margin-right`, `margin-bottom`, `margin-left`を**まとめて**要素の外側の周りに対しての余白を指定します。指定する値の数によって余白を作成する方向が変わります。

 - 1つの時: **全方向**
 - 2つの時: 1つ目は**上下**、2つ目は**左右**
 - 3つの時: 1つ目は**上**、2つ目は**左右**、3つ目は**下**
 - 4つの時: **上、右、下、左**の順に余白が作成されます

`margin: 16px 1em 0 auto;`のように指定します。

<!--
参考: https://developer.mozilla.org/ja/docs/Web/CSS/margin 
-->

### {`padding`|パディング}プロパティ

<!-- マージンは外側の余白。 -->

![Padding](https://uec-programming.github.io/basic_training/web-sample/img/padding.png)

<!-- まとめて"ショートハンド"！ -->
`padding`プロパティは、`padding-top`, `padding-right`, `padding-bottom`, `padding-left`を**まとめて**要素の内側に対しての余白を指定します。指定する数によって余白を作成する方向が変わります。

 - 1つの時: **全方向**
 - 2つの時: 1つ目は**上下**、2つ目は**左右**
 - 3つの時: 1つ目は**上**、2つ目は**左右**、3つ目は**下**
 - 4つの時: **上**、**右**、**下**、**左**の順に余白が作成されます

`padding: 32px 1em 0 8px;`のように指定します。

<!-- 
参考: https://developer.mozilla.org/ja/docs/Web/CSS/padding 
-->