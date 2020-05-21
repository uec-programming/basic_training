###### tags: `Python_1st_Step`
# 6　電卓

|要　点|説　明|
|---|---|
|プログラムの機能|電卓|
|得られる知識|・インタラクティブモードの使いやすさ<br><br>・Pythonの算術演算子 operator<br>・型 type|
|手順|（1） 四則演算の練習問題を入力する。<br>（2） 計算結果を表示する。|

```bash=
>>> 2 + 4
6
>>> ( +2 ) + ( +4 )
6
>>> -3 + ( -5 )
-8
>>> ( -3 ) + ( -5 )
-8
```
## コードの解説
|No|行|対象|説明|
|---|---|---|---|
|1|1|>>> 2 + 4|インタラクティブモードではこの記号が出ます。「>>>」をプロンプト（入力促進記号）prompt といいます。|＊プロンプトは入力はしません。|
|2|1|>>> 2 + 4|たし算（加法）の例です。|演算子 operator は「 + 」|演算子の左右の値のことをオペランド operand といいます。|「 2 + 4 」 のように「オペランド、演算子、オペランド」の形をとるものを 式 expression といいます。|
|3|1|>>> 2 + 4　|Enterキーを押すと、Pythonが式を「評価」します。|
|4|2|6|「 2 + 4 」が評価された結果、 6 になりました。この 6 のことを「式の値」といいます。|
|5|3|>>> ( +2 ) + ( +4 )|オペランドにわざわざ「 + 」の単項演算子 unary operator をつけてカッコでくくった式です。|詳しくは中学で学習します。|
|6|4|6|Enterキーを押すと評価されて出てくる答え|
|7|5|>>> -3 + ( -5 )|オペランドに単項演算子がついている点は共通です。しかし、片方はカッコがなく、片方はカッコでくくっている、といった統一性のない式です。|
|8|6|-8|そんな式でも、間違っているわけではないので、Enterキーを押すと評価されて答えが出ます。|
|9|7|>>> ( -3 ) + ( -5 )|統一性のある式を心がけましょう。|
|10|8|-8|Enterキーを押すと出てくる答え|

```bash=9
>>> 5 - 7
-2
>>> ( +5 ) - ( +7 )
-2
>>> -2 - 2
-4
>>> -2 - ( +2 )
-4
>>> -4 - ( 5 - 2 ) + 9
2
>>> -15 - ( -27 ) + 0 - 12
0
```

## コードの解説
|No|行|対象|説明|
|---|---|---|---|
|11|9|>>> 5 - 7|ひき算（減法）の例|演算子 operator は「 - 」|演算子の左右の値のことををオペランド operand といいます。|オペランド、演算子、オペランドの形をとるものを 式 expression といいます。|
|12|9|>>> 5 - 7|Enterキーを押すと、Pythonが式を「評価」します。|
|13|10|-2|「 5 - 7 」が評価された結果、 -2 になりました。この -2 のことを「式の値」といいます。|
|14|11|>>> ( +5 ) - ( +7 )|5 - 7 と同じこと。オペランドにわざわざ「 + 」の単項演算子 unary operator をつけてカッコでくくった式。|
|15|12|-2|答え|
|16|13|>>> -2 - 2|オペランドは「-2」と「2」。演算子は「-」です。|-2から2を引くとどうなる？という計算です。|
|17|14|-4|答え|
|18|15|>>> -2 - ( +2 )|よく見れば、13行目の式と同じものです。|
|19|16|-4|同じ式からは同じ答えが出ます。|
|20|17|>>> -4 - ( 5 - 2 ) + 9|加減が入り混じった式|（ 5 - 2 ）を打ち込むのが面倒なら、-4 - 3 + 9 と打ち込んでも大丈夫です。|
|21|18|2|答え|
|22|19|>>> -15 - ( -27 ) + 0 - 12|加減が入り混じった式|簡単な部分は暗算して、-15+27-12と打ち込んでも大丈夫です。|
|23|20|0|答え|

```bash=21
>>> 2 * 4
8
>>> 3 * ( -2 ) * 7
-42
>>> 3 ** 2
9
>>> ( -3 ) ** 2
9
>>> -6 ** 2
-36
```

## コードの解説
|No|行|対象|説明|
|---|---|---|---|
|24|21|>>> 2 * 4|かけ算（乗法）の例|演算子 operator は「 * 」|数学で使う「×」はPythonでは使いません！|
|25|22|8|答え|
|26|23|>>> 3 * ( -2 ) * 7|負の数「 -2 」が混じったかけ算|
|27|24|-42|答え|
|28|25|>>> 3 ** 2|算数での 3 × 3 と同じ計算。|同じ数を2回かける「累乗（るいじょう）」の計算|累乗の演算子は「 ** 」|詳しくは中学生で学習します。|
|29|26|9|答え|
|30|27|>>> ( -3 ) ** 2|-3 の 2乗の計算|（ -3 ）×（ -3 ）と同じ計算|
|31|28|9|答え|
|32|29|>>> -6 ** 2|6の2乗にマイナスがつく計算|（ -6 ）の2乗の計算とは結果が違います。|
|33|30|-36|答え|

```bash=31
>>> 4 / 2
2.0
>>> 2 / 4
0.5
>>> 7 / 2
3.5
>>> 7 // 2
3
>>> 7 % 2
1
```

## コードの解説
|No|行|対象|説明|
|---|---|---|---|
|34|31|>>> 4 / 2|わり算（除法）の例|演算子 operator は「 / 」|数学で使う「÷」はPythonでは使いません！|
|35|32|2.0|割り算の結果には小数点がついてきます。|
|36|33|>>> 2 / 4|2÷4の計算です。|
|37|34|0.5|答え|
|38|35|>>> 7 / 2|7÷2の計算です。|
|39|36|3.5|答え|
|40|37|>>> 7 // 2|「//」は割り算の商を表示する演算子です。|フロアディビジョン （floor division）|
|41|38|3|ですから 3 と表示されます。|
|42|39|>>> 7 % 2|「%」は割り算のあまりを表示する演算子です。|モジュロ （modulo）|
|43|40|1|ですからこの場合は、1になります。|













