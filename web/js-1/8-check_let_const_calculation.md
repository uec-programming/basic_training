---
tags: Web_JavaScript_1
lang: ja-jp
breaks: false
---

<style>
iframe{
  border: none;
  width: 100%;
  min-height: 20em;
}
.mathjax > .MJXc-display {
    background: #eee;
    border-radius: 8px;
    box-shadow: #eee 0 -6px, #eee 0 6px;
}
</style>

# 2-8 【実力チェック】変数, 定数, 四則演算

今回は、変数や定数、四則演算などのここまで学んできた内容を振り返りましょう。

## ここまでの復習

```javascript=
// 定数
const name = '太郎'; 


// 変数
let age = 15;     // 宣言
age = 16;         // 代入
let year = 2020;  // 宣言+代入


// 文字列と数値の連結
'今年は' + year + '年です';       // '今年は2020年です'
'来年は' + (year + 1) + '年です'; // '来年は2021年です'

// テンプレート文字列を使った場合
`今年は${year}年です`;            // '今年は2020年です'
`来年は${year + 1}年です`;        // '来年は2021年です'


// 四則演算
10 + 5        // 15   (足し算)
18 - 5.5      // 12.5 (引き算)
5 * 6         // 30   (掛け算)
15 / 2        // 7.5  (割り算)
20 % 7        // 6    (剰余)
5 ** 3        // 125  (べき乗)
2 * (3 + 4)   // 14   (カッコ優先)


// アラートを表示する
alert('こんにちは');

// 練習ボックスの下に表示する
console.log('こんにちは');
```

## 練習

> [color=#d400f5]
> 
> ### :rocket: **練習1**
> 
> 120円のリンゴの税込金額を計算するプログラムを作りましょう。  
> - 定数`tax`を宣言して、消費税10%なので初期値`1.10`を代入。
> - 定数`apple`を宣言して、りんごの本体価格`120`を代入。
> - `りんごは税込oo円です`と表示する。`oo`の部分は計算させる。
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=// 税率を定義\n\n// りんごの価格を定義\n\n// 表示する\n"></iframe>
> 

:::info
余裕があれば本体価格180円のバナナも一緒に表示させてみましょう
:::

> [color=#d400f5]
> 
> ### :rocket: **練習2**
> 
> 円の面積と周の長さを2つ計算するプログラムを作りましょう。  
> - 定数`PI`を宣言して、円周率を代入。
> - 変数`radius`を宣言して、円の半径を代入。
> - `周の長さはoo、面積はoo`と表示する。
> - 変数`radius`に別の値を代入。
> - `周の長さはoo、面積はoo`と表示する。
> 
> :::spoiler 円の公式を忘れた人へ(クリックで開く)
> 算数
> $$
> (周の長さ) = 2 \times (半径) \times 3.14 \\
> (面積) = (半径) \times (半径) \times 3.14
> $$
> 
> 数学
> $$
> 周の長さ\ l = 2\pi r \\
> 面積\ S = \pi r^2
> $$
> :::
>
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=// 円周率を定義\n\n// 半径を定義\n\n// 表示する\n\n// 新しい半径を代入\n\n// 表示する\n"></iframe>
> 

:::info
**:bulb: 変数名のつけ方**

変数名は、数学では $x$ や $a$ のように一文字で表すことが多いですが、コードを書く時には`tax`や`radius`などの英単語のように読んだだけで意味がわかるようにすることが大切です。
:::

> [color=#d400f5]
> 
> ### :rocket: **練習3**
> 
> 秒速〜mを、時速〜kmに変換するプログラムを作りましょう。  
> - 変数`speed1`を宣言して、秒速(m)の速さを代入。
> - 変数`speed2`を宣言して、`spped1`を時速(km)に変換して代入
> - `秒速〜mは、時速〜kmです`と表示する。
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=// 時速を定義\n\n// 秒速を定義\n\n// 表示する\n"></iframe>
> 

> [color=#d400f5]
> 
> ### :rocket: **練習4**
> 
> 自分で問題を考えてプログラムを作ってみましょう。思いつかなければ下の例を参考にしてみてください。  
> - 例1: 時速`speed`kmで`hour`分歩いたときの距離
> - 例2: 面積(km²)を東京ドーム何個分に換算する(東京ドームは0.047 km²)
> - 例3: 鶴と亀が合わせて`total`匹、足が`leg`本のときの鶴と亀の数  
> :::spoiler 鶴亀算の解法[中2] (クリックで開く)
> > 合計$n$匹、足が$l$本のときの鶴を$x$匹、亀を$y$匹とする。
> >$$
> > \begin{cases}
> > x + y = n \\
> > 2x + 4y = l
> > \end{cases}
> > $$
> >であるから、
> >$$
> > \begin{cases}
> > x = 2n - \frac l 2 \\
> > y = \frac l 2 - n
> > \end{cases}
> > $$
> :::
> 
> <iframe src="https://uec-programming.github.io/basic_training/web-sample/editor.html?code=// 時速を定義\n\n// 秒速を定義\n\n// 表示する\n"></iframe>
> 

> [color=#f5d400]
> ### :pencil2: **まとめ**
> 
> :white_check_mark: 変数と定数を学んだ。  
> :white_check_mark: 四則演算や文字列の結合を学んだ。  
> :white_check_mark: 文字を表示する方法を学んだ。

