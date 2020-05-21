---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-9 画像を追加しよう

<!-- 目標 -->
今回は

## 今回のコード

<!-- 目的 -->

<!-- 指示 -->

```diff=1
  <h1>電通 太郎のホームページ</h1>
  <main>
    <h2>人物紹介</h2>
    <p>
      こんにちは。電通高校1年生の電通 太郎です。趣味はサイクリングとバイオリンです。犬が好きです！よろしくお願いします！
    </p>
    <h2>サイト紹介</h2>
    <p>電気通信大学プログラミング教室のwebサイトは<a href="https://www.uec-programming.com">こちら</a>！！</p>
    <h2>好きな食べ物</h2>
    <ul>
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
+   <h2>写真</h2>
+   <img src="tokyo-night.jpg" alt="東京の夜景" />
+   <p>東京の夜景です。きれいでしょう？</p>
  </main>

```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://i.imgur.com/xPlhcPo.png)

<!-- お手本リンク -->
<!-- [お手本デモを確認](http://example.com "デモ") -->

<!-- お祝い -->
:::success
:tada: 
:::

## 解説

### `<img>`要素

<!-- 
img要素: 閉じタグの無い要素(空要素って言うらしい初めて聞いた)
src属性
alt属性: 画像ロード失敗時 / スクリーンリーダの人が使う(webは目で見るだけじゃないよ！)
width, height属性はCSSで大きさを扱うため触れない

閉じタグの無い要素 参考:
https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Empty_elements

img参考: 
https://developer.mozilla.org/ja/docs/Web/HTML/Element/img
-->

<!-- 直リンクはダメだよって話 -->

<!-- 
置換要素軽く紹介(置換要素って言葉はいらないかな)
<img>の画像の埋め込みだけでなく、<audio>, <video>, <iframe>もあるよ！

置換要素のリストがあるページ： https://developer.mozilla.org/ja/docs/Web/CSS/Replaced_element
-->
