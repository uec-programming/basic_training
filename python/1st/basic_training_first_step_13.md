###### tags: `Python_1st_Step`
# 13　四則計算（加法、減法、乗法、除法）プログラム

|要　点|説　明|
|---|---|
|プログラムの機能|自作の電卓です。|
|得られる知識|四則演算の問題はなんでもPythonで解ける。|
|手順|（1）ユーザに2つの整数を入力してもらう。<br>（2）入力された値を計算する。<br>（3）結果を表示する。|

## ファイル名は`1_13_math.py`
```python=
# 計算プログラム
print( "Enter numbers for a and b." )
print( "Display the result of arithmetic operation with a and b." )

# 足し算、加法
print( "Addition of a and b" )
a = input( "The number a is:" )
a = int( a )
b = input( "The number b is:" )
b = int( b )
c = a + b
print( " a + b = ", c )

# 引き算、減法
print( "Subtraction of a and b ")
c = a - b
print( " a - b = ", c )

# かけ算、乗法
print( "multiplication of a and b" )
c = a * b
print( " a * b = ", c )

# 割り算、除法
print( "Division of a and b" )
c = a / b
print( " a / b = ", c )
```

## コードの解説
|No|行|対象|説明|
|---|---|---|---|
|1|1|# 計算プログラム|#（コメント）で何をするプログラムかを説明した行。|
|2|2|print( " Enter numbers for ~ " )|print() 関数でユーザにメッセージを表示をします。|
|3|3|print( "Display the result~" )|2行目と同じです。|
|4|4|# 足し算、加法|足し算を明示したコメント行。|
|5|5|print( "Addition of a and b" )|2行目と同じです。|
|6|6|a = input( "The number a is:" )|input()関数でユーザにaの数字を入力してもらい、変数aに代入します。|
|7|7|a = int( a )|input()で得た値が文字列型なので、int型に変換して変数aに代入します。|
|8|||a = int( input( "The number~:" ) )|6行目と7行目はこのようにまとめられます。|
|9|||8|b = input( "The number b is: " )|6行目と同じことをしています。|input()関数でユーザにbの数字を入力してもらい、変数bに代入をします。|
|10|9|b = int( b )|7行目と同じことをしています。|
|11|||b = int( input( "The number~:" ) )|8行目と9行目もまとめられます。|
|12|10|c = a + b|int型同士で足し算し、結果を変数cに代入します。|
|13|11|print( " a + b = ", c )|print()関数の引数を2つとって結果を表示します。クオートで囲ったa + bは文字列、コンマで区切り、cは整数型と扱われます。|
|14|12|# 引き算、減法|コメント行で引き算を明示。|
|15|13|print( "Subtraction of a and b" )|2行目と同じです。|
|16|14|c = a - b|int型同士で引き算し、結果を変数cに代入します。|
|17|15|print( " a - b = ", c )|11行目と同じです。|
|18|16|# かけ算、乗法|コメント行で掛け算を明示。|
|19|18|c = a * b|かけ算の演算子（えんざんし）は「×」ではなく「 * 」を使います。|
|20|20|# 割り算、除法|コメント行で割り算を明示。|
|21|22|c = a / b|割り算の演算子は「÷」ではなく「 / 」を使います。|



