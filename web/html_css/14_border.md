---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-14 枠線をつけよう

<!-- 目標 -->
今回は要素に枠線をつけましょう

## 練習1

<!-- 指示 -->
- `<h2>`要素の左側に枠線を指定する。
- `<img>`要素に枠線を指定する。

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
        }
        h2 {
          color: darkgreen;
+         border-left-width: 8px;
+         border-left-style: solid;
+         border-left-color: #4abdac;
        }
+       img {
+         border-width: 4px;
+         border-style: solid;
+         border-color: gray;
+       }
      </style>
    </head>
    <body>
    ...省略...
```

### 結果の確認

<!-- 結果画像 -->
![表示結果1](https://uec-programming.github.io/basic_training/web-sample/img/demo1-14.png)

<!-- お手本リンク -->
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1-14.html "デモ")

<!-- お祝い -->
:::success
:tada: 写真と見出しに枠線がつきました！
:::

## 練習2
より短くシンプルに書き直してみましょう。
:::info
`-`がついている赤の行は、削除することを意味します。
:::

```diff=10
    ...省略...
    h2 {
      color: darkgreen;
-     border-left-width: 8px;
-     border-left-style: solid;
-     border-left-color: #4abdac;
+     border-left: 8px solid #4abdac;
    }
    img {
-     border-width: 4px;
-     border-style: solid;
-     border-color: gray;
+     border: 4px solid gray;
    }
    ...省略...
```

<!-- お祝い -->
:::success
:tada: 短いコードで同じ結果になりました！
:::

## 解説

### 枠線関係のプロパティ
- {`border-width`|ボーダー ウィドゥス}: 枠線の太さを指定します。枠線の太さをピクセルやフォントの数値(8px, 10emなど)や、thin(細い)、medium(普通)、thick(太い)などのキーワードで指定することができます。
- {`border-style`|ボーダー スタイル}: 枠線の種類を指定します。上下左右で異なる種類にする時は、スペースで区切り、複数の値を指定します。練習で用いた`solid`は1本線の枠線を表示します。
- {`border-color`|ボーダー カラー}: 枠線の色を指定します。上下左右で異なる色にする時は、スペースで区切り、複数の値を指定します。色の値はRGB16進表記やキーワード表記が利用できます。

<!-- まとめて"ショートハンド"-->
`border`プロパティは、`border-width` `border-style` `border-color`を**まとめて**指定することができます。ただし、上下左右で異なった指定をすることができないので注意しよう。枠線の太さ、種類、色の指定方法は個別に指定する時と同じ方法で行います。

<!-- border-left-* も紹介 -->
今回用いた`border-left-*`(*はwidth, style, color)ですが、それぞれ**左枠線**の太さ、種類、色を指定することができます。
<!-- まとめてborder-left！ -->
練習2で用いた`border-left`ですが、このプロパティは**左枠線**の太さ、種類と色を**まとめて**指定する時に用います。指定する順番は自由ですが、スペースで区切りましょう。

同じように、右枠線の {`border-right`|ボーダーライト}、上枠線の {`border-top`|ボーダートップ}、下枠線の {`border-bottom`|ボーダーボトム}を用いてそれぞれの枠線の太さ、種類、色を**まとめて**指定できます。左枠線の時と同じように`border-right-color`のように個別に指定することもできます。
<!-- widthの読み方、ウィドゥスって書いたけど... これは1つのプレゼン(https://www.slideshare.net/swwwitch/width)になるくらいカタカナで書き表すのが難しい話 --><!--英語の発音問題は仕方ないね！-->
