---
tags: Web_JavaScript_1
lang: ja-jp
breaks: false
---

<style>
iframe{
  border: none;
  width: 100%;
  min-height: 15em;
}
</style>
<style>
span.r {
    background-color: #f003
}
span.g {
    background-color: #0a03
}
span.b {
    background-color: #00a3
}
</style>

# 2-15 コードの実行過程を見てみよう

今回は、ブラウザの開発者ツールを用いて実行過程を確認する方法を学びましょう。

## 開発者ツール

開発者ツールはHTML要素の構造や、CSSルールの適用状況、JavaScriptの処理の追跡など、webページに関わる様々な情報を閲覧することができるツールです。このツールはJavaScriptのデバッグ（プログラムのバグを見つけて修正すること）には不可欠になるので、使い方を押さえておきましょう。

<!-- ref: https://developers.google.com/web/tools/chrome-devtools/javascript?hl=ja -->

### 開発者ツールの{Source|ソース}パネルを開く

1. Chromeで、前回までに作成したページを開いておきます。
1. 右上の︙記号 > "その他のツール" > "デベロッパーツール" を選択します。キーボードショートカットを用いる場合は `Command+Option+I`(Mac), `Control+Shift+I`(Windows)です。
![DevToolを開く](https://i.imgur.com/DsoXV0p.png)
1. "Source"タブをクリックします。
![Sourceタブを開く](https://i.imgur.com/nH4aj4o.png)

### {Source|ソース}パネルの見方

Sourceパネルは3つの領域に分かれています。それぞれ境界はドラッグして大きさを変えられるので、見やすいサイズに調整しましょう。

![](https://i.imgur.com/CXSNVqz.png)

次の3つの領域で構成されています。名称は覚える必要はありません。
- <span class="r">{File Navigator|ファイルナビゲーター}</span>: 左上にあるファイルのリスト。ページが読み込まれているファイルが全て表示される。
- <span class="g">{Code Editor|コードエディター}</span>: 選択されたファイルのコードが表示される。
- <span class="b">{JavaScript Debugging|ジャバスクリプト デバッギング}</span>: JavaScriptの実行の停止や再開などの制御や、変数内容の確認などができる。画面幅によって下側または右側に表示される。

## Sourceパネルの使い方

### ブレークポイントを設置して処理を一時停止する

コードの実行を途中で止めてみましょう。ブレークポイントと呼ばれる印を設置することで、その位置で実行を一時停止させることができます。

1. <span class="r">File Navigator</span>で作成したファイルをクリックし、<span class="g">Code Editor</span>に表示させます。
2. <span class="g">Code Editor</span>の行番号をクリックして青色のブレークポイントを設置します。
![](https://i.imgur.com/e74xcGr.png)
3. 今はすでに実行が終わってしまってるので再読み込みをクリックします。ブレークポイントは残ったままになるので、再びページが読み込まれたあと、ブレークポイントを設置した行で動作が中断します。動作が中断している場所が青くハイライトされます。
![](https://i.imgur.com/TZiCqHp.png)

### 変数の中身を確認する

右下のScopeの欄には変数に格納されている値が表示されます。  
   `answer`には数値の`60`、`data`には文字列の`"200"`が格納されていることがわかります。`input`に代入する手前で処理を一時停止しているので、まだ`input`の中には何も入っていません(`undefined`)。   
   ![](https://i.imgur.com/UknH3JV.png =60%x)  

> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> `answer`や`data`などの変数の内容を確認しましょう。また、値をダブルクリックして変数の内容を書き換えてみましょう。
> 

### 処理を1ステップずつ進める。

一時停止したあとに再び動かす時は、<span class="b">JavaScript Debugging</span>の上端にあるボタン群を用います。

最もよく使うのは左の2つです。`Resume`ボタンで、一時停止中の処理を再び動かすことができます。次のブレークポイントまで処理が進み、ブレークポイントが無ければ最後まで実行されます。  
`Step over`ボタンは、処理を1つずつ進めます。変数の内容が計画通りに変化しているのか、if文の分岐は想定通りに動いているのか確かめるのに役立ちます。
![](https://i.imgur.com/0Isw0YR.png)

また、右側のボタンも有用です。`Activate breakpoints`は、ブレークポイントの有効無効を切り替えます。ブレークポイントを設置しすぎた時に、いったん止めることなく実行したいときに役立ちます。  
`Pause on exceptions`ボタンは、エラーが発生した際に処理を一時停止します。通常はエラーが発生するとプログラムが終了してしまいますが、この機能を使うことで終了直前の変数の様子を確かめることができるので、エラーの原因究明に役立ちます。
![](https://i.imgur.com/914MXMv.png)


> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> ブレークポイントを設定して1ステップずつ進めてみましょう。また、再読み込みしながら、様々な機能を試してみましょう。
> 

## コンソールを使ってみよう
JavaScriptコンソールも、デバッグには欠かせないツールです。
"Console"タブをクリックして、コンソールを開きましょう。

![](https://i.imgur.com/6o3VBdu.png)

### ログの出力と確認

教材序盤で登場した`console.log()`は、変数の内容を把握するのに非常に便利です。開発者ツールでは、このコンソールに表示されます。例えば、以下のように入力された数値`input`を出力してみます。
```diff=11
      const data = prompt('答えだと思う数字を入力してください');
      const input = Number(data);
+     console.log(input)
      if (input < 1 || 100 < input) {
```

![](https://i.imgur.com/umAF3rd.png)

値が出力され、右側には`console.log()`を記述した行番号が表示されます。複数の`console.log()`を書いてもどこから出力されたか簡単に区別することができます。

### JavaScriptの実行

コンソールでは様々なJavaScriptコードをその場で実行することができます。例えば、`20 + 3`と入力してEnterを押すと`23`が出力されます。
![](https://i.imgur.com/iIsO55n.png)

また、ページ内のJavaScriptと同じように実行されているため、`input`や`answer`などの変数などにもアクセスできます。

![](https://i.imgur.com/rpa89lZ.png)


> [color=#d400f5]
> 
> ### :rocket: **練習**
> 
> コンソールで簡単なコードを実行してみましょう。  
> `input`や、`answer == input`を実行してみましょう。  
> 余裕があれば`alert('こんにちは')`や`prompt('いくつ?')`なども試してみましょう。
> 



> [color=#f5d400]
> ### :pencil2: **まとめ**
> 
> :white_check_mark: 開発者ツールにはデバッグに欠かせない機能が多くある  
> :white_check_mark: Sourceパネルで変数の内容などを確認できる  
> :white_check_mark: Consoleパネルで、JavaScriptを実行できる

