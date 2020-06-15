---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-9 画像を追加しよう

<!-- 目標 -->
今回はウェブページに画像を掲載しましょう。

## 練習

<!-- 指示 -->
- `<h2>`要素を追加する。
- `<img>`要素を2つ追加する。
- `<img>`要素の`src`属性に、それぞれ画像アドレスを指定する
    - 1つめの画像: `https://i.imgur.com/pAQ7QKc.jpg`
    - 2つめの画像: `https://i.imgur.com/HIxTKbe.jpg`
- `<p>`要素を追加する。

:::info
画像アドレスの部分はコピー&ペーストで構いません。
:::

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
+   <img src="https://i.imgur.com/pAQ7QKc.jpg" alt="東京タワーから見た夜景" />
+   <img src="https://i.imgur.com/HIxTKbe.jpg" alt="高尾山から見た朝焼け" />
  </main>

```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://uec-programming.github.io/basic_training/web-sample/img/demo1-9.png)

<!-- お手本リンク -->
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1-9.html "デモ")


<!-- お祝い -->
:::success
:tada: ウェブページに画像を添付できました！
:::

## 解説

### `<img>`要素
`<img>`要素はHTML文書に画像を埋め込むために用います。

`src`属性はこの要素に必ず書かなければなりません。埋め込みたい画像へのパスが属性値です。

`alt`属性は画像をテキストで説明する時に用います。必ず書かなければならない属性ではありませんが、読み上げソフトなどを利用するユーザーが何の画像を表しているのかを知る事ができます。また、何らかの理由で画像が読み込まれない場合にページに表示されます。
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
:::info
:bulb:**閉じタグの無い要素**

`<img>`や`<br>`などの一部の要素は閉じタグ`</タグ名>`を持ちません
:::
<!-- 直リンクはダメだよって話 -->
:::warning
**直リンクに気をつけよう！**

今回用いた画像ファイルは他のサイトの画像でした。画像ファイルを他のサイトから直接呼び出して表示させることを**直リンク**といいます。相手側のサーバーに負荷がかかります。直リンクは禁止されているサイトが多いため、できるだけしないようにしましょう。
:::

<!-- 
置換要素軽く紹介(置換要素って言葉はいらないかな)
<img>の画像の埋め込みだけでなく、<audio>, <video>, <iframe>もあるよ！

置換要素のリストがあるページ： https://developer.mozilla.org/ja/docs/Web/CSS/Replaced_element
-->

:::info
:bulb:**その他の埋め込み要素**

`<img>`要素は画像を埋め込むために用いる要素でしたね。この他にも`<audio>`,`<video>`や`<iframe>`要素があります。それぞれ、音声、動画、他のサイトの埋め込みができます。
:::

:::info
:bulb: **改行要素の使い方**

段落要素の中で改行を行う場合は、改行要素`<br>`を用います。<br>

```diff=1
<p>こんにちは。電通高校1年生の電通 太郎です。<br>趣味はサイクリングとバイオリンです。犬が好きです！<br>よろしくお願いします！</p>
```

<p>こんにちは。電通高校1年生の電通 太郎です。<br>趣味はサイクリングとバイオリンです。犬が好きです！<br>よろしくお願いします！</p>
:::