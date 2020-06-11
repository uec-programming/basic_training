---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-13 背景色を変えてみよう

<!-- 目標 -->
今回は背景色の設定をしましょう。

## 練習

<!-- 指示 -->

- `<h1>`要素への指定に`background-color`プロパティを追加する。

```diff=1
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>電通 太郎のホームページ</title>
      <style>
        h1 {
          color: pink;
+         background-color: #4abdac;
        }
        h2 {
          color: darkgreen;
        }
      </style>
    </head>
    <body>
    ... 省略 ...  
```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://uec-programming.github.io/basic_training/web-sample/img/demo1-13.png)

<!-- お手本リンク -->
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1-13.html "デモ")

<!-- お祝い -->
:::success
:tada: タイトルの背景が緑色になりました！
:::

## 解説

### {`background-color`|バックグラウンド カラー}プロパティ

<!-- 背景色だよ。以上 -->

### 色の指定

<!-- 色名指定-->

<!-- #rrggbb -->

<!--
参考: 
https://developer.mozilla.org/ja/docs/Web/CSS/color_value
-->

黒〜白

<span style="border-left:1em solid #000000;">`#000000`</span>
<span style="border-left:1em solid #404040;">`#404040`</span>
<span style="border-left:1em solid #808080;">`#808080`</span>
<span style="border-left:1em solid #bfbfbf;">`#bfbfbf`</span>
<span style="border-left:1em solid #ffffff">`#ffffff`</span>

光の三原色

<span style="border-left:1em solid #ff0000;">`#ff0000`</span>
<span style="border-left:1em solid #00ff00;">`#00ff00`</span>
<span style="border-left:1em solid #0000ff;">`#0000ff`</span>

三原色の組み合わせ

<span style="border-left:1em solid #ff00ff;">`#ff00ff`</span>
<span style="border-left:1em solid #ffff00;">`#ffff00`</span>
<span style="border-left:1em solid #00ffff;">`#00ffff`</span>

<span style="border-left:1em solid #ff8000;">`#ff8000`</span>
<span style="border-left:1em solid #00ff80;">`#00ff80`</span>
<span style="border-left:1em solid #8000ff;">`#8000ff`</span>

<span style="border-left:1em solid #80ff00;">`#80ff00`</span>
<span style="border-left:1em solid #0080ff;">`#0080ff`</span>
<span style="border-left:1em solid #ff0080;">`#ff0080`</span>

:::info
:bulb: **色の探し方**

カラーコードを自分で考えるのは難しいかもしれません。Googleで「カラーピッカー」と検索すると、自分で選んだ色のカラーコードを取得できます。
:::

:::info
色の指定は他にも、色相(H), 彩度(S), 明度(L)を用いたHSL記法などがあります。
:::



