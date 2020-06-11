---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-6 ハイパーリンクを作成しよう

<!-- 目標 -->
今回は他のウェブサイトへのリンクを作成しましょう

## 練習

<!-- 指示 -->
- `サイト紹介`という見出しの`<h2>`要素を作成する。
- `<p>`要素で段落を作成する。
- 文章の一部を`<a>`要素にする。
- `<a>`要素の`href`属性にウェブサイトのアドレスを指定する。


```diff=1
  <h1>電通 太郎のホームページ</h1>
  <main>
    <h2>人物紹介</h2>
    <p>
      こんにちは。電通高校1年生の電通 太郎です。趣味はサイクリングとバイオリンです。犬が好きです！よろしくお願いします！
    </p>
+   <h2>サイト紹介</h2>
+   <p>電気通信大学プログラミング教室のwebサイトは<a href="https://www.uec-programming.com">こちら</a>！！</p>
  </main>
```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://uec-programming.github.io/basic_training/web-sample/img/demo1-6.png)

<!-- お手本リンク -->
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1-6.html "デモ")


<!-- お祝い -->
:::success
:tada: 「こちら」の部分がハイパーリンクになりました！
:::


## 解説

### 属性
要素は下の図のように属性を持つことができます。
<!-- タグと要素の時のような画像作る -->
![属性](https://uec-programming.github.io/basic_training/web-sample/img/attr.png)

属性を持たせるには次の3つの条件を満たす必要があります。

1. 要素名(ここでは`<a>`)と属性名の間に半角スペースを入れます
2. 属性名の後ろに`=`を入れる
3. 属性値を入れる。属性値の始めから終わりまでを`""`で囲む

<!--
参考: https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Attributes
-->

### `<a>`要素

`<a>`要素はアンカー要素と言い、{href|エイチレフ}属性を用いて、他のURLへのハイパーリンクを作ります。`<a>`要素はリンク先を属性値として示します。

### {href|エイチレフ}属性
href属性はハイパーリンクが指す先のURLを属性値として持ちます。別のウェブページのURL、ファイル、電話番号、メールアドレスにリンクするために用います。


<!-- 
a要素とhref属性
参考: 
https://developer.mozilla.org/ja/docs/Web/HTML/Element/a -->


<!-- 余裕のある人へ的な感じで target="_blank"とか入れる? -->