---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-12 まとめて見た目を変えよう

<!-- 目標 -->
今回は、CSSの指定を1か所にまとめましょう。

## 練習

<!-- 指示 -->
- `<h1>`要素の`style`属性を削除する。
- `<style>`要素を追加する。
- `<style>`要素内にCSSを記述する。

```diff=1
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>電通 太郎のホームページ</title>
+     <style>
+       h1 {
+         color: pink;
+       }
+       h2 {
+         color: darkgreen;
+       }
+     </style>
    </head>
    <body>
-     <h1>電通 太郎のホームページ</h1>
      <main>
        <h2>人物紹介</h2>
        <p>
          こんにちは。電通高校1年生の電通
          太郎です。趣味はサイクリングとバイオリンです。犬が好きです！よろしくお願いします！
        </p>
        <h2>サイト紹介</h2>
        <p>電気通信大学プログラミング教室のwebサイトは<a href="https://www.uec-programming.com">こちら</a>！！</p>
        <h2>好きな食べ物</h2>
        <ul class="food">
          <li>納豆</li>
          <li>バナナ</li>
          <li>海老</li>
        </ul>
        <h2>おすすめ小説ランキング</h2>
        <ol>
          <li>ハリーポッター</li>
          <li>ナルニア国物語</li>
          <li>ニルスの不思議な旅</li>
        </ol>
        <h2>写真</h2>
        <img src="https://i.imgur.com/HIxTKbe.jpg" alt="東京タワーから見た夜景" />
        <img src="https://i.imgur.com/pAQ7QKc.jpg" alt="高尾山から見た朝焼け" />
      </main>
    </body>
  </html>
```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://uec-programming.github.io/basic_training/web-sample/img/demo1-12.png)

<!-- お手本リンク -->
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1-12.html "デモ")

<!-- お祝い -->
:::success
:tada: 全ての`<h2>`要素にも色がつきました！
:::


## 解説

### `<style>`要素

<!-- 説明 -->
今回使った`<style>`要素はウェブページ全体や一部分の装飾情報を指定するために用います。`<style>`要素はHTMLコードの`<head>`要素の中に書きましょう。また、ウェブページ内のCSSルールをまとめて書くことができます。

### セレクタ

どの要素に対して装飾をするのか、と言うことを指定するのが**セレクタ**です。今回は、`h1`や`h2`というような要素名を指定しました。これを要素型セレクタと呼び、ページ内にあるすべての指定された要素を対象に、装飾します。

![ルールセット](https://uec-programming.github.io/basic_training/web-sample/img/css-selector.png)

<!--
参考:
セレクタ
https://developer.mozilla.org/ja/docs/Learn/CSS/Building_blocks/Selectors
要素型セレクタ
https://developer.mozilla.org/ja/docs/Web/CSS/Type_selectors
ルールセット
https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/CSS_basics#Anatomy_of_a_CSS_ruleset
CSSの構文 https://developer.mozilla.org/ja/docs/Learn/CSS/First_steps/What_is_CSS -->

:::warning

<!--
参考: https://developer.mozilla.org/ja/docs/Learn/CSS/First_steps/How_CSS_is_structured#Inline_styles
-->

:warning: **`style`属性の使用**

`style`属性の使用は極力控え、代わりに`<style>`要素を使うべきです。装飾が増えていくと、CSSの記述とHTMLの構造が混ざってしまい、コードが読みにくくなります。また、一括して複数の要素に指定することができないため、メンテナンスに苦労することになります。

例えば、今回のコードを`<style>`要素の代わりに`style`属性で書いたっばい
場合は6箇所に`style`属性を記述しなければなりません。
```html
<h1 style="color: pink;">電通 太郎のホームページ</h2>

<h2 style="color: darkgreen;">人物紹介</h2>

<h2 style="color: darkgreen;">サイト紹介</h2>

<h2 style="color: darkgreen;">好きな食べ物</h2>

<h2 style="color: darkgreen;">おすすめ小説ランキング</h2>

<h2 style="color: darkgreen;">写真</h2>
:::