---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-10 画面外の情報を追加しよう

<!-- 目標 -->
今回は、ページの画面外の情報を追加しましょう

## 練習

<!-- 指示 -->

- 一番初めに`<!DOCTYPE html>`と記述する。
- 全体を`<html>`タグで囲む。
- `<head>`要素を追加する。
- `<head>`要素に、`<meta>`要素と`<title>`要素を追加する。
- `<head>`要素の後に、表示する内容を`<body>`タグで囲む。

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
        <img src="https://i.imgur.com/pAQ7QKc.jpg" alt="東京タワーから見た夜景" />
        <img src="https://i.imgur.com/HIxTKbe.jpg" alt="高尾山から見た朝焼け" />
      </main>
+   </body>
+ </html>

```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://uec-programming.github.io/basic_training/web-sample/img/demo1-10.png)

<!-- お手本リンク -->
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1-10.html "デモ")


<!-- お祝い -->
:::success
:tada: タブにページタイトルが表示されました！
:::

## 解説

### {DOCTYPE|ドックタイプ}宣言

:::info
:bulb:**豆知識**

HTML5以前のHTML4.01では、`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`などの長いDOCTYPE宣言が必要でした。
:::

### `<html>`要素と {`<head>`|　ヘッド　}要素, {`<body>`|　ボディ　}要素
`<html>`要素はウェブページにおいて最初に現れる要素です。全ての要素はこの`<html>`要素の中に含まれます。<br>`<head>`要素はタイトルなどのブラウザに対して指定する情報を含みます。この情報をメタデータと言います。<br>`<body>`要素はウェブページのコンテンツを示す要素です。コード中に一つだけ用いることができます。
### {`<title>`|　タイトル　}要素
`<title>`要素はブラウザのタイトルバーやページのタブに表示されるタイトルを指定します。`<head>`要素の中に記述します。


### {`<meta>`|　メタ　}要素
<!-- 文字コードの話 -->
`<meta>`要素はページに関する情報を表すことができます。例えば、ページの作者や説明文、文字エンコーディングや、SNSにシェアされた際に表示する画像などの指定をすることができます。`<head>`要素の中に記述します。

:::info
:bulb:**charset属性**

この属性はウェブページで用いる文字エンコーディングを指定します。通常UTF-8を用います。文字エンコーディングを指定しておくことで、文字化けを防ぐことができます。
:::