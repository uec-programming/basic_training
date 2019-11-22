###### tags: `Python_1st_Step`
# 20　1st Step の総復習　

## 趣旨の説明
|項目|説明|
|---|---|
|ねらい|1st Stepで「順次・選択・繰り返し」の「順次」が分かったので、2nd Stepでは「選択・繰り返し」を使いこなせるようにする。|
|方法|1st Step と同様です。|


## 1st Stepの復習（ここで知る新しい知識も入っています）
### 電卓
```python
>>> 3 + 4		# int型の計算
7
>>> 30 - 2 * 6		# 計算の順序に注意
18
>>> ( 30 - 2 ) * 6 / 4	# （）を優先
42.0
>>> 9 / 2		# 除算するとfloat型が返ってくる
4.5
>>> 10 / 3		# 割り切れない場合　末尾に注意
3.3333333333333335
>>> 18 / 7		# 割り切れない計算
2.5714285714285716
>>> 18 // 7		# 除算の整数値のみ
2
>>> 18 % 7		# 除算の余りのみ
4
>>> 2 * 7 + 4		# 検算　答え×割る数+余り
18
>>> 6 ** 2		# 累乗の例
36
>>> 2 ** 4		# 累乗の例
16
>>> 3.14 * 5  /  2.5	# int型とfloat型の混在計算　結果はfloat型
6.28
>>> 6.28 / 4
1.57
```

### 変数
```python
>>> # 長方形の面積計算
>>> width = 100
>>> height = 80
>>> area = width * height
>>> print(area)
8000
```

### エラー
```
>>> weight
Traceback (most recent call last):
  File "<pyshell#18>", line 1, in <module>
    weight
NameError: name 'weight' is not defined
```
（ネームエラー：　weightという名前は定義されてません）


### 文字列
```python
>>> 'is not'			# シングルクオート
'is not'
>>> 'isn't'			# クオートが重なるとどうなるかの実験
SyntaxError: invalid syntax
>>> 'isn\'t'			# シングルクオートが重なるときは「\」でエスケープ
"isn't"
>>> "isn't"			# もしくはダブルクオート
"isn't"
>>> 'Do you like me?'		# 私が好き？
'Do you like me?'
>>> '"Yes," he said.'		# はい、と彼は言った　異なるクオートを使った場合
'"Yes," he said.'
>>> "\"Yes, \" she said."	# はい、と彼女は言った　エスケープを使った場合
'"Yes, " she said.'
```

### print（）関数
```python
>>> "\"No, \" she said."
'"No, " she said.'
>>> print("\"No, \" she said.")	# print()関数を使うと読みやすい出力結果が得られる
"No, " she said.

>>> 'I love you! ' * 3				# 文字列でも算術演算子が使える
'I love you! I love you! I love you! '
>>> "i love you! " + "i love you! " +"i love you! "
'i love you! i love you! i love you!'
```

### 文字列とインデックス
```python
>>> word = "LOVE"	# 文字列とインデックスの関係
>>> word[0]
'L'
>>> word[1]
'O'
>>> word[2]
'V'
>>> word[3]
'E'
>>> word[-1]		# マイナスのインデックスの始まりは-1
'E'
>>> word[-2]
'V'
>>> word[-3]
'O'
>>> word[-4]
'L'
```

### 文字列とスライス（切り取り）
```python
>>> word[0:2]		# LOVEのインデックス0以上2未満
'LO'
>>> word[2:4]
'VE'
```

### 文字列は変更不可能（イミュータブル）
```python
>>> word[1]='i'
Traceback (most recent call last):
  File "<pyshell#65>", line 1, in <module>
    word[1]='i'
TypeError: 'str' object does not support item assignment
```
### len()関数
```python
>>> len(word)		# 変数wordの値（love）の長さを調べる
4
>>> len('I love you!')	# 文字列の長さを調べる
11
```

### 前の二つの数を足すと次の数になる数列のプログラミング
・フィボナッチ数列
・イタリアの数学者レオナルド・フィボナッチにちなんだ名前
・最初の数と二番目の数は1と設定する
・1, 1, 2, 3, 5, 8, ・・・
・詳しく知りたい人はインターネットで検索しよう
```python
>>> a, b = 0, 1		# a = 0 と b = 1 を一行で書く（多重代入）　
>>> while b < 10:	# 無限に続くと困るので10までにした
		print(b)
		a, b = b, a + b		# ここでも多重代入
	
1
1
2
3
5
8
```