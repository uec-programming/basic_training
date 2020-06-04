---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-20 フォームを作成しよう

<!-- 目標 -->
今回は、フォームを作成しましょう。

## 今回のコード

<!-- 指示 -->
 - `<h2>`要素を追加する。
 - `<form>`要素を追加する。
 - `<input>`要素や`<textarea>`要素などのフォーム要素を追加する。

```diff=67
  ...省略...
        <h2>写真</h2>
        <img src="tokyo-night.jpg" alt="東京の夜景" />
        <p>東京の夜景です。きれいでしょう？</p>
+       <h2>お問い合わせ</h2>
+       <form action="http://soasa.starfree.jp/form.php">
+         名前: <input type="text" name="name" placeholder="電通太郎" />
+         <br />
+         <input type="radio" name="animal" value="dog" />犬派
+         <input type="radio" name="animal" value="cat" />猫派
+         <input type="radio" name="animal" value="other" />その他
+         <br />
+         <input type="checkbox" name="music" />楽器経験がある
+         <br />
+         <textarea name="comment"></textarea>
+         <br />
+         <input type="submit" value="送信する" />
+       </form>
      </main>
    </body>
  </html>

  ...省略...

```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://uec-programming.github.io/basic_training/web-sample/img/demo1-20.png)
<!-- お手本リンク -->
<!-- [お手本デモを確認](http://example.com "デモ") -->

<!-- お祝い -->
:::success
:tada: お問い合わせ欄を作ることができました！
:::


## 解説

### {`<form>`|　フォーム　}要素

### {`<input>`|　インプット　}要素

### {`<textarea>`|　テキストエリア　}要素

