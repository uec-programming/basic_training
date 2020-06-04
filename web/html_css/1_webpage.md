---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-1 ウェブページの仕組み

今回はウェブページの仕組みを簡単に学びましょう。

## HTML5

ウェブページは**HTML**, **CSS**, **JavaScript**によって作られています。これら3つをまとめて**HTML5**と呼ぶこともあります。

**HTML** ({Hypertext|ハイパーテキスト} {Markup|マークアップ} {Language|ランゲージ}) は、ウェブページを表すために用いられる言語です。「ウェブページのどの部分が見出しで、どの部分が本文か」というような情報を表す、ページの設計図のようなものです。

**CSS** ({Cascading|カスケーディング} {Style|スタイル} {Sheets|シート}) は、ウェブページを装飾するために用いられる言語です。文字や背景の色や、大きさやレイアウトなどを表す、ページの見た目を整えるものです。

{**JavaScript**|ジャバスクリプト} (JS) は、ウェブページに動きをつけるために用いられる言語です。ボタンをクリックした時に表示を切り替えたり、通信処理を行なったり、ゲーム画面を描いたりします。
:::warning
JavaScriptは{Java|ジャバ}とは全くの別の言語です。JavaScript はJSと省略します。
:::

![HTML5](https://uec-programming.github.io/basic_training/web-sample/img/html5-family.png)
<!-- フリー素材: http://www.shoshinsha-design.com/2014/12/html5%E3%80%80css3%E3%80%80js/.html 切り取り -->


## ブラウザ

ウェブページを表示するために作られたソフトウェアを**ブラウザ**と言います。ブラウザは、HTML等のソースコードをもとにウェブページを画面に表示する機能があります。

代表的なブラウザとして次のようなものがあります。
- <i class="fa fa-safari"></i> {**Safari**|サファリ}: MacやiPhone などに付属している、Appleが開発するブラウザ。
- <i class="fa fa-chrome"></i> {**Google Chrome**|グーグルクローム}: Googleが開発する世界シェア1位[^chromeShare]のブラウザ。
- <i class="fa fa-firefox"></i> {**Mozilla Firefox**|モジラ ファイアーフォックス}: Mozillaが開発し、プライバシーに配慮したオープンソースのブラウザ。
- <i class="fa fa-edge"></i> {**Microsoft Edge**|マイクロソフト エッジ}: かつての {Internet Explorer|インターネットエクスプローラー}の後継であるWindows標準ブラウザ。2020年にはベースの技術をChromeと同じものに切り替えた[^chromiumEdge]。

[^chromeShare]: 2020年4月時点で64% https://gs.statcounter.com/browser-market-share
[^chromiumEdge]: ChromiumベースのMicrosoft Edgeの正式リリースは2020年1月に行われたが、確定申告サイトe-Taxが対応していない影響で日本国内では延期されている。

:::info
:bulb: **学習のコツ**

教材をすべて暗記しようとすると大変なので「こんなものがあるんだな」と理解するようにしましょう。詳しく思い出したい時にページを見返したり、Googleで検索して思い出せれば十分です。
:::

:::info
より詳しい技術的な仕組みは、CS解説で確認できます。
:::

![ブラウザ](https://uec-programming.github.io/basic_training/web-sample/img/browsers.png)
<!-- https://github.com/alrra/browser-logos より各ロゴ取得, 文字を追加 -->

## 始める前に

### ブラウザの用意(Google Chrome)

ウェブページを表示するためのブラウザを用意しましょう。このコースではGoogle Chromeを用いて学習します。まだインストールしていない場合は下記リンクからダウンロードしてインストールを完了させましょう。

<i class="fa fa-arrow-circle-right"></i> Google Chrome https://www.google.co.jp/chrome/

### エディタの用意
ソースコードを書くためのエディタを用意しましょう。VSCodeをおすすめしますが、AtomやVimなどの使い慣れたエディタがあればそちらで十分でしょう。

<i class="fa fa-arrow-circle-right"></i> Visual Studio Code https://code.visualstudio.com/

### コマンドラインからエディタを起動する

コマンドラインからエディタを起動できるようにすると便利です。コマンドラインを使い慣れていない人はスキップしても構いません。

:::spoiler VSCodeの場合(Mac)
1. VSCodeを起動します。
2. ⌘Commnand + ⇧Shift + P を押してコマンドパレットを表示します。
3. `shell`と入力し、表示される`Shell Command: Install 'code' command in PATH command.`をクリックします。
4. `code`コマンドでファイルをVSCodeで開けるようになります
:::

:::spoiler VSCodeの場合(Windows)
インストールが完了した時点で、`code`コマンドによりファイルをVSCodeで開けます
:::

### 拡張子を表示する

:::spoiler Windowsの場合
エクスプローラで拡張子を表示するように設定しましょう
参考: http://www.wannko.net/windows10/kihon/kaku.html
:::

:::spoiler Macの場合
Finderを開き、"環境設定" > "詳細" > "すべてのファイル名拡張子を表示"のチェックをいれる
参考: [Macでファイル名拡張子を表示する/非表示にする - Apple サポート](https://support.apple.com/ja-jp/guide/mac-help/mchlp2304/mac)
:::

:::info
学習の準備ができたか、講師に確認してもらいましょう。
:::

## これからの目標

HTML&CSS基礎編では、自己紹介ページを作成していきます。作成を通して、HTMLやCSSを用いて自分のウェブページを作成できるようになりましょう。

