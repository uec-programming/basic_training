---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-19 装飾のいろいろな指定方法

<!-- 目標 -->
今回は様々な方法で装飾対象の指定をしましょう。

## 練習

<!-- 指示 -->

 - `.cycling, .violine`への指定を追加する。
 - `.food li`への指定を追加する。

```diff=29
  ...省略...
      .cycling {
        color: blue;
      }
      .violine {
        color: orange;
      }
      .pictures {
        display: flex;
      }
+     .cycling,
+     .violine {
+       font-size: 20px;
+     }
+     .food li {
+       color: green;
+     }
    </style>

   ...省略...

   <h2>好きな食べ物</h2>
-  <ul>
+  <ul class="food">
     <li>納豆</li>
     <li>バナナ</li>
     <li>海老</li>
   </ul>

```

### 結果の確認

<!-- 結果画像 -->
![表示結果](https://uec-programming.github.io/basic_training/web-sample/img/demo1-19.png)
<!-- お手本リンク -->
[お手本デモを確認](https://uec-programming.github.io/basic_training/web-sample/demo1-19.html "デモ")

<!-- お祝い -->
:::success
:tada: 2ヶ所の文字の色を変えることができました！
:::


## 解説

### 複数のセレクタを結合
複数のセレクタに対して同時に装飾を指定する時には`,`を用います。これをカンマ区切りといい、今回の練習では`.cycling, .violine`と記述することで`cycling`と`violine`に同じ装飾を指定しています。
<!-- カンマ区切り -->

### 親子関係のセレクタ
親子関係のセレクタは空白区切りを用います。左のセレクタが親、右のセレクタが子となります。今回の練習では`.food`が親セレクタ、`li`が子セレクタです。`<ul class="food">`と`</ul>`で囲まれた範囲の中に`li`がある時、装飾が適用されます。
<!-- 結合子 -->
