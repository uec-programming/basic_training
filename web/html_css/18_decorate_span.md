---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-18 文字の一部を変更しよう

<!-- 目標 -->
今回はウェブサイトの一部分の見た目を変えましょう。

## 今回のコード

<!-- 指示 -->

 - 2つの`<span>`要素を追加して、`class`属性を指定する。
 - `<div>`要素を追加して、`class`属性をする。
 - CSSの指定を追加する。

```diff=26
  ...省略...
      main {
        margin: 16px;
      }
+     .cycling {
+       color: blue;
+     }
+     .violine {
+       color: orange;
+     }
+     .pictures {
+       background-color: black;
+     }
</style>
  </head>
  <body>
    <h1>電通 太郎のホームページ</h1>
    <main>
      <h2>人物紹介</h2>
      <p>
-       こんにちは。電通高校1年生の電通 太郎です。趣味はサイクリングとバイオリンです。犬が好きです！よろしくお願いします！
+       こんにちは。電通高校1年生の電通 太郎です。趣味は<span class="cycling">サイクリング</span>と<span class="violine">バイオリン</span>です。犬が好きです！よろしくお願いします！
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
+     <div class="pictures">
        <img src="img/tokyo-night.jpg" alt="東京タワーから見た夜景" />
        <img src="img/tokyo-sunrise.jpg" alt="高尾山から見た朝焼け" />
+     </div>
    </main>
  </body>
</html>
```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://uec-programming.github.io/basic_training/web-sample/img/demo1-18.png)
<!-- お手本リンク -->
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1-18.html "デモ")

<!-- お祝い -->
:::success
:tada: 2ヶ所の文字の色を変えることができました！
:::


## 解説

### {`span`|スパン}要素

<!-- 何もしない -->

### クラス名セレクタ

<!-- 要素名だけじゃないよ -->
