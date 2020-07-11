---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-11 文字に色を着けよう

<!-- 目標 -->
今回はウェブページの装飾の方法を学びましょう。

## CSSとは
ここまで、ウェブページの構造を表すHTMLを用いて自己紹介ページを作成してきました。しかし、白い背景に黒い文字のシンプルなウェブページも悪くないですが、少し地味で退屈です。

そこで、ウェブページを装飾するために**CSS**という言語を用います。CSSは、HTMLで書かれたページの構造に対して文字の色や大きさ、背景色や位置などを指定できます。それだけでなく、マウスを重ねた時のエフェクトや簡単なアニメーションもCSSで作ることができます。

:::info
CSSという単語は、"1-1 ウェブページの仕組み"でも出てきました。
:::

## 練習

<!-- 指示 -->
- `<h1>`要素に`style`属性を追加する。
- `style`属性の値に`color: pink`を指定する。

```diff=1
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>電通 太郎のホームページ</title>
    </head>
    <body>
+     <h1 style="color: pink;">電通 太郎のホームページ</h1>
      <main>
        <h2>人物紹介</h2>
        <p>
          こんにちは。電通高校1年生の電通 太郎です。趣味はサイクリングとバイオリンです。犬が好きです！よろしくお願いします！
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
![表示結果](https://uec-programming.github.io/basic_training/web-sample/img/demo1-11.png)

<!-- お手本リンク -->
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1-11.html "デモ")

<!-- お祝い -->
:::success
:tada: 見出しがピンク色になりました！
:::

## 解説

### CSSの構文

- **宣言**  
  HTML要素に対してどのような装飾を行うかを指定します。 `color: pink;` のように、 {`:`|コロン} と {`;`|セミコロン}を用いて表します。
- **プロパティ**  
  装飾の種類を指定します。CSSには様々なプロパティが用意されていて、例えば文字色を変更するための`color`プロパティがあります。
- **プロパティ値**  
  装飾の内容を指定します。プロパティごとに様々な値が用意されていて、例えば`color`プロパティでは`red`, `pink`などが使用できます。
  

<!-- CSSの基本 参考: https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/CSS_basics -->
![CSS宣言](https://uec-programming.github.io/basic_training/web-sample/img/css-prop.png)

### {`color`|カラー}プロパティ

colorプロパティは文字の色を指定します。値には、{`red`|レッド}, {`pink`|ピンク}, {`blue`|ブルー},　{`orange`|オレンジ}など、現在は147色の名前を指定できます。

[147 Colors](http://www.colors.commutercreative.com/grid/) というウェブサイトで色名を見つけることができます。
<!--
値は、色名で指定できることのみ紹介、16進数表現など詳細は次回
Color
参考: https://developer.mozilla.org/ja/docs/Web/CSS/color_value
-->

### {`style`|スタイル}属性
style属性はCSSの宣言を属性値として持ちます。要素に対して装飾を指定するために用います。

:::info
:bulb:**インラインスタイル**

今回の練習では`<h1>`要素の中にstyle属性を指定しました。このようにHTMLコードの中に直接CSSの宣言をすることをインラインスタイルと言います。しかし、HTMLコードが長くなったり、HTMLとCSSが混同する恐れがあるので気をつけましょう。
:::
<!--
インラインスタイル
https://developer.mozilla.org/ja/docs/Learn/CSS/First_steps/How_CSS_is_structured#Inline_styles
-->


