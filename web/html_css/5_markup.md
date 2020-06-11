---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-5 マークアップとは

<!-- 目標 -->
今回はウェブページのメインの場所を指定しましょう。

## 練習


<!-- 指示 -->
- `<main>`要素内に、`<h2>`要素と`<p>`要素を含める。


```diff=1
  <h1>電通 太郎のホームページ</h1>
+ <main>
+   <h2>人物紹介</h2>
+   <p>
+     こんにちは。電通高校1年生の電通 太郎です。趣味はサイクリングとバイオリンです。犬が好きです！よろしくお願いします！
+   </p>
+ </main>
```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://uec-programming.github.io/basic_training/web-sample/img/demo1-5.png)

<!-- お手本リンク -->
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1-5.html "デモ")


<!-- お祝い -->
:::success
:tada: 前回と同じ画面が表示されました！
:::


## 解説

### ネスト
HTMLでは要素の中に要素を入れることができます。これを<strong>ネスト</strong>と呼びます。今回のコードでは`<main>`要素の中に`<p>`要素が入っています。ただし`<main>`要素の中に`<p>`要素を入れた場合、`<main>`要素の外側に終了タグ`</p>`を配置することはできません。正しく要素の配置をしましょう。
<!--
参考: https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Nesting_elements
-->

<!-- インデントの話と、エディタの整形機能(vscode: ⌘⇧Fとか)? -->


### `<main>`要素
`<main>`要素はウェブページのメインコンテンツを設置するのに用います。基本的にページ内では一度しか使うことができません。
<!-- 
main要素について
参考: 
https://developer.mozilla.org/ja/docs/Web/HTML/Element/main -->

<!--
他にも見た目は変わらないけど意味をつける要素はいろいろあるよ(軽く紹介)
参考: https://web-manabu.com/html-css48/
-->
:::info
HTMLは文書に意味づけ(マークアップ)をしていくことから、プログラミング言語ではなく**マークアップ言語**と呼ばれます。
:::
