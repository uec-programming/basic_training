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
- {`border-width`|ボーダー ウィドゥス}: 
- {`border-style`|ボーダー スタイル}: 
- {`border-color`|ボーダー カラー}: 

<!-- まとめて"ショートハンド"！ -->
`border`プロパティは、`border-width` `border-style` `border-color`

<!-- border-left-* も紹介 -->

<!-- まとめてborder-left！ -->

<!-- widthの読み方、ウィドゥスって書いたけど... これは1つのプレゼン(https://www.slideshare.net/swwwitch/width)になるくらいカタカナで書き表すのが難しい話 -->
