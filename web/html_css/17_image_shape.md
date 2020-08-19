---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-17 画像の形を変更しよう

<!-- 目標 -->
今回は画像の大きさや形状を変えましょう。

## 練習

<!-- 指示 -->
 - `width`プロパティを追加する。
 - `height`プロパティを追加する。
 - `border-radius`プロパティを追加する。

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
          text-shadow: 2px 2px 4px black;
          font-size: 64px;
          text-align: center;
        }
        h2 {
          color: darkgreen;
          border-left: 8px solid #4abdac;
          padding-left: 8px;
          margin-top: 32px;
        }
        img {
          border: 4px solid gray;
+         width: 480px;
+         height: 270px;
+         border-radius: 20px;
        }
        main {
          margin: 16px;
        }
      </style>
      ...省略...
```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://uec-programming.github.io/basic_training/web-sample/img/demo1-17.png)
<!-- お手本リンク -->
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1-17.html "デモ")

<!-- お祝い -->
:::success
:tada: 大きさを変えて角を丸くできました！
:::


## 解説

### {`height`|ハイト}プロパティ
`height`プロパティは要素の高さを指定するために用います。今回の練習で用いた`270px`や`10em`のように数値で指定することができます。
<!--
参考: https://developer.mozilla.org/ja/docs/Web/CSS/height
-->

### {`width`|ウィドゥス}プロパティ
`width`プロパティは要素の幅を指定するために用います。今回の練習で用いた`480px`や`20em`のように数値で指定することができます。
<!-- 
参考: https://developer.mozilla.org/ja/docs/Web/CSS/width
-->
### {`border-radius`|ボーダー レイディアス}プロパティ
`border-radius`プロパティは要素の角の半径を指定するために用います。指定する数は自由ですが、指定する数によって角の丸め方が変わります。
- 1つの時: **4つの角**
 - 2つの時: 1つ目は**左上と右下**、2つ目は**右上と左下**
 - 3つの時: 1つ目は**左上**、2つ目は**右上と左下**、3つ目は**右下**
 - 4つの時: **左上**、**右上**、**右下**、**左下**の順に角を丸めます<br>
 また`/`で区切り、2つ目の半径を指定すると楕円形に丸めることができます。
<!-- 
参考: https://developer.mozilla.org/ja/docs/Web/CSS/border-radius
-->