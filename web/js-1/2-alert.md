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
.mathjax > span {
    background: #eee;
    border-radius: 8px;
    box-shadow: #eee 0 -6px, #eee 0 6px;
}
</style>

# 2-2 文字を表示してみよう

今回は、画面にメッセージを表示させてみましょう。

## JavaScriptを書いてみよう

さて、1つめのコードを見てみましょう。

```javascript=
alert('こんにちは');
```

これは、「こんにちは」という文字を表示するシンプルなJavaScriptのプログラムです。このプログラムを実際に動かしてみましょう。

> [color=#d400f5]
> ### :rocket: **練習**
> 
> 以下の練習ボックスでは、コードを書き換えたり、実行することができます。"**▶︎実行**"ボタンを押して、「こんにちは」というメッセージが表示されることを確認しましょう。
> 
> さらに、「こんにちは」の部分を「おはよう」に書き換えて動作がどうなるか試してみましょう。
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=alert('こんにちは');"></iframe>

### {`alert()`|アラート　}{関数|かんすう}

<!-- ref
https://ja.javascript.info/structure#ref-505
-->

`alert()`関数は画面にメッセージを表示する処理をする関数です。JavaScriptには、このような組み込み関数と呼ばれる最初から利用可能な関数がたくさん用意されています。

### {関数|かんすう}

さて、先ほどのコードを詳しくみてみましょう。まず、`alert()`のように関数名に続けて`()`を書くと、関数を**実行**することができます。関数を**呼び出す**とも言います。

$$
\tt{
\color{#dd0066}{
    \underset{関数名}{\underline{alert}}
}
()
}
$$

しかし、これでは画面に表示するメッセージを指定できません。関数にデータを渡す仕組みが必要そうです。

関数名の後ろの`()`の中には、関数へ渡すデータを書くことができます。これを{**引数**|ひきすう}といいます。ここでは`'こんにちは'`と記述しました。

$$
\tt
{\color{#dd0066}{\underset{関数名}{\underline{alert}}}
(
{\color{#4a4}{\underset{引数}{\underline{'こんにちは'}}}}}
)
$$

最後に、文末には{`;`|セミコロン}をおきます。日本語で言う句点(`。`)のような物です。セミコロンを書くことで文の終わりを示すことができます。

$$
\tt
{\color{#dd0066}{\underset{関数名}{\underline{alert}}}
(
{\color{#4a4}{\underset{引数}{\underline{'こんにちは'}}}}}
);
$$

これが、「『こんにちは』と画面に表示する。」という命令文になります。まとめると、以下のように書くことで関数を呼び出せます。

$$
\tt
{\color{#dd0066}{\it 関数名}}
\ (
{\color{#4a4}{\it 引数}}
);
$$

:::info
:bulb: `alert()`メソッドは、正確に表現するなら`Window`オブジェクトのメソッドなのですが、今はまだ深く触れません。
:::

> [color=#f5d400]
> ### :pencil2: **まとめ**
> 
> :white_check_mark: JavaScriptには予め多くの関数が用意されている。  
> :white_check_mark: **関数を呼び出す**には、関数名に続けて`()`を書く。  
> :white_check_mark: **引数**とは、関数に渡すデータで`(` と`)`の間に書く。
> 