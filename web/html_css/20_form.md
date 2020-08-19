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
        <img src="https://i.imgur.com/HIxTKbe.jpg" alt="東京タワーから見た夜景" />
        <img src="https://i.imgur.com/pAQ7QKc.jpg" alt="高尾山から見た朝焼け" />
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
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1.html "デモ")

<!-- お祝い -->
:::success
:tada: お問い合わせ欄を作ることができました！
:::


## 解説

### {`<form>`|　フォーム　}要素
`<form>`要素はユーザーの入力フォームを作成するために用います。属性として、入力データの送信先URLを指定する{`action`|アクション}属性、データの送信方法を指定する{`method`|メソッド}属性などがあります。

### {`<input>`|　インプット　}要素
`<input>`要素は入力フォームを構成するための様々な型を作成するために用います。属性として`type`属性が挙げられます。この`type`属性には多くの属性値があるため用途に応じて使い分けましょう。

#### {`type`|タイプ}属性
- {`text`|テキスト}: 単一行のテキストボックスを作成します。
- {`radio`|ラジオ}: グループから1つだけ選択するラジオボタンを作成します。`name`属性の値が同じものがグループとみなされます。
- {`checkbox`|チェックボックス}: 選択、未選択のどちらかの値を取るチェックボックスを作成します。
- {`submit`|サブミット}: 送信ボタンを作成します。押すとフォームの内容が送信されます。

他にも数多くの値が指定でき、色やファイル、日付の入力欄を作成することができます。詳しくは[HTMLクイックリファレンス<i class="fa fa-external-link"></i>](http://www.htmq.com/html5/input.shtml)を参考にしてください。

#### {`name`|ネーム}属性
フォームにつける名前です。送信時に値と共に送られます。

#### {`value`|バリュー}属性
値を指定します。`type`属性値として `checkbox`、`radio`、`hidden`を用いる時には必ず使います。その他の`type`属性値の時、省略することができます。

#### {`placeholder`|プレイスホルダー}属性
フォームが空欄の時にヒントとして表示するテキストを指定します。`type="text"`などで使えます。


### {`<textarea>`|　テキストエリア　}要素
`<textarea>`要素はユーザーに複数行のテキストを入力してもらう時に用います。`value`属性や`placeholder`属性などの`<input>`要素と共通の属性もあります。