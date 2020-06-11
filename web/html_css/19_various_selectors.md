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

<!-- カンマ区切り -->

### 親子関係のセレクタ

<!-- 結合子 -->
