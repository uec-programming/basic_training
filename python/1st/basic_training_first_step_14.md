###### tags: `Python_1st_Step`
# 14　四則計算の応用練習

## 14.1　四則計算プログラム plus
|要　点|説　明|
|---|---|
|プログラムの機能|機能を強化した自作の電卓|
|得られる知識|算数・数学の計算問題で解ける範囲が少し広がる。|
|手順|四則演算プログラムと同じです。|


### 累乗・切り捨て除算・割り算の余り
```python=
# 累乗（るいじょう）ファイル名は`1_14_1_power.py`
print( "Calculate the square of a and the cube of b" )
print( "Enter numbers for a and b." )
a = int( input( " a： " ) )
a = a ** 2
print( "Square of a", a )
b = int( input( " b： " ) )
b = b ** 3
print( "Cube of b", b )
```

|No|行|対象|説明|
|---|---|---|---|
|1|1|累乗（るいじょう）|累乗の計算。<br>累法とは、3 × 3 のように同じ数を何度かかけたもの。<br>3 × 3 は、3^2と表記し、3の2乗という。<br>2乗は平方ともいう。<br>3 × 3 ×3は、 3^3と表記し、3の3乗という。<br>3乗は立方ともいう。|
|2|5|a = a ** 2|累乗の演算子は「 ** 」。<br>aを2乗した値を変数aに代入。|
|3|8|b = b ** 3|3乗のときは、演算子の後の数字を3にする。|

```python=10
# 切り捨て除算(ファイル名は1_14_rounddown.py)
print( "Calculate the quotient of a divided by b" )
print( "Enter numbers for a and b." )
a = int( input( " a： " ) )
b = int( input( " b： " ) )
c = a // b
print( "The quotient of a divided by b is" , c )
# 割り算で余りを出す(ファイル名1_17_surplas.py)
print( "Calculate the remainder of a divided by b" )
print( " Enter numbers for a and b." )
a = int( input( " a： " ) )
b = int( input( " b： " ) )
c = a % b
print( "The surplus of dividing a by b is" , c )
```

|No|行|対象|説明|
|---|---|---|---|
|1|10|# 切り捨て除算|割り算の商の計算。余りは切り捨てます。|
|2|15|c = a // b|切り捨て除算の演算子は「 // 」です。|
|3|17|# 割り算で余りを出す|余り、剰余の計算。<br>奇数・偶数判定の場合、2で割り、剰余が0か、1か判定します。|
|4|22|c = a % b|剰余演算子は「 % 」（モジューロ）。|



## 14.2　自主練（文章題）

先ほどまで学習してものを応用して取り組んでみましょう

（1）a%の食塩水bgの中に含まれる食塩の重さ

（2）定価a円のTシャツをy割引で買ったときの値段
