---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-10 画面外の情報を追加しよう

<!-- 目標 -->
今回は

## 今回のコード

<!-- 目的 -->

<!-- 指示 -->

```diff=1
+ <!DOCTYPE html>
+ <html>
+   <head>
+     <meta charset="UTF-8" />
+     <title>電通 太郎のホームページ</title>
+   </head>
+   <body>
      <h1>電通 太郎のホームページ</h1>
      <main>
        <h2>人物紹介</h2>
        <p>
          こんにちは。電通高校1年生の電通 太郎です。趣味は<span class="cycling">サイクリング</span>と<span class="violine"
            >バイオリン</span
          >です。犬が好きです！よろしくお願いします！
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
        <img src="tokyo-night.jpg" alt="東京の夜景" />
        <p>東京の夜景です。きれいでしょう？</p>
      </main>
+   </body>
+ </html>

```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://i.imgur.com/lQv9De4.png)

<!-- お手本リンク -->
<!-- [お手本デモを確認](http://example.com "デモ") -->

<!-- お祝い -->
:::success
:tada: タブにページタイトルが表示されました！
:::

## 解説

### DOCTYPE宣言

:::info
:bulb:**豆知識**
HTML5以前のHTML4.01では、`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`などの長いDOCTYPE宣言が必要でした。
:::

### `<html>`要素と `<head>`要素, `<body>`要素

### `<title>`要素

### `<meta>`要素
<!-- 文字コードの話 -->