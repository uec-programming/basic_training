---
tags: Web_JavaScript_1
lang: ja-jp
breaks: false
---

<style>
iframe{
  border: none;
  width: 100%;
  min-height: 12em;
}
</style>

# 2-1 JavaScriptとは

## {JavaScript|ジャバスクリプト}の役割

HTMLはウェブページの骨格と内容を表し、CSSはウェブページの装飾を担当するものでした。では、JavaScriptは何をするものでしょう。

JavaScriptは、PythonやC言語と同じプログラミング言語です。足し算や引き算といった基本的な処理から、サーバーとの通信、2D,3Dグラフィック、音声合成と言った分野まで幅広い処理を行うことができます。

HTMLとCSSでは見るだけだったウェブページが、JavaScriptを加えることによって閲覧者の操作に応じた動きを見せるウェブページに変えることができます。

:::info
HTMLはマークアップ言語、CSSはスタイルシート言語に分類されます。
:::

![HTML5](https://uec-programming.github.io/basic_training/web-sample/img/html5-family.png)



## JavaScriptができること

<!--
 参考1: 少し上級者向けのイントロかもしれない
 https://developer.mozilla.org/ja/docs/Web/JavaScript -->
 
JavaScriptは、 HTMLやCSSで作ったウェブページに動きをつけることができるので、お洒落なページや便利なページを作ることができます。動きのつけ方次第で様々な活用方法があります。どんな物が作れるのでしょうか？具体的な例を見てみましょう。

### スクロールに合わせた動きのあるページ

スクロールするにつれて変化するウェブページに出会ったことはありませんか？そのようなページは、JavaScriptでスクロール量を検知し、そのスクロール量に合わせて内容を書き換え続けることで作られています。

 - "[Nasa Prospect](http://nasaprospect.com/)"は、Nasaの活動を紹介するサイトです。スクロールするにつれて絵柄と音楽を変化させることで、見ていて飽きない作りになっています。
 - [Appleのホームページ](https://www.apple.com/jp/)では、[iPhone](https://www.apple.com/jp/iphone-11/), [iPad](https://www.apple.com/jp/ipad-pro/), [MacBook](https://www.apple.com/jp/macbook-pro-16/) などの製品紹介ページで多用されています。製品の特徴が引き立たされて印象に残る作りになっています。

### バックグラウンドで通信するページ

JavaScriptは、サーバーとも通信することができるので、いちいちページ全体を読み込み直さずとも新しい情報だけを画面に追加することができます。この技術は{**Ajax**|エイジャックス}と呼ばれ、今では欠かせない技術の一つです。

 - [Google検索](https://www.google.co.jp/)は、検索ボックスに文字を入力するとキーワード候補が表示されます。入力された文字をサーバーに送信し、取得した予測キーワードを検索ボックス下に表示することで実現しています。
 - [Googleマップ](https://www.google.co.jp/maps)は、地図を動かすだけで次々に新たな地図のデータが読み込まれて、まるで一つの大きな地図のように扱える便利なウェブアプリです。登場当初は地図が動かせることが画期的で、Ajax技術の便利さを世の中に広めました。

### アプリケーション

JavaScriptによって、高度なアプリケーション開発が可能になりました。ブラウザ上で用いる**ウェブアプリ**は、インストール不要で手軽に使えるため便利です。さらにブラウザの枠を超えて、パソコン用アプリやスマホアプリをJavaScriptで作る技術も普及し始めています。

 - [Web版Microsoft Office](https://www.microsoft.com/ja-jp/microsoft-365/free-office-online-for-the-web)は、Word, Excel, Powerpointのウェブアプリ版でJavaScriptで作られています。同じように、Googleの[Googleドライブ](https://www.google.co.jp/drive/apps.html)や、Appleの[iCloud](https://www.apple.com/jp/iwork/)も文書編集や表計算ソフトを提供しており、いずれも無料で使用できます。
 - [Visual Studio Code](https://code.visualstudio.com/)や、PC版[Slack](https://slack.com/intl/ja-jp/)は、[Electron](https://www.electronjs.org/)という技術を用いて作られたデスクトップアプリケーションです。ウェブアプリと同じくHTML, CSS, JavaScriptで作れる上、Mac版とWindows版を同時に開発できるのが利点です。

### ゲーム

JavaScriptは、{**Canvas**|キャンバス}という技術によって画面上に図や画像を描くことができます。マウスやタッチなどの入力に応じて画面を描くことで、ゲームを開発することができます。最近では**WebGL**という3DCG技術による3Dゲームも広まりつつあります。

- [RPGツクールMV](https://tkool.jp/mv/)は、KADOKAWAなどが開発している、JavaScriptのCanvasを利用したRPGゲームの作成ツールです。作品は公式コミュニティ[RPGアツマール](https://game.nicovideo.jp/atsumaru/)を中心に公開されています。2020年8月には後継の[RPGツクールMZ](https://tkool.jp/mz/)が公開されました。
- [TANX](https://tanx.io/)は、小さな戦車同士が打ち合うゲームです。入力に応じてゲームの舞台自体は平面ですが、WebGLを用いた3Dグラフィックを楽しめます。


ここに挙げた例は、どれもプロのエンジニアが作成した非常にレベルが高いものでしたが、なんとなくJavaScriptでできることのイメージが掴めたと思います。

次回から実際にコードを描き始めましょう！
