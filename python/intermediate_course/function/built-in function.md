---
tags: Python 中級
lang: ja-jp
robots: noindex, nofollow
breaks: false
---

<style>
.code {
user-select: none;
-ms-user-select: none;
-webkit-user-select: none;
cursor: not-allowed
}
</style>

# 10. 組み込み関数

## 導入

前回までは、自力で関数を定義する方法について紹介しました。しかし、Pythonではすでに多くの関数が用意されているため、ライブラリをインポートする必要なく使うことができます。このような関数のことを**組み込み関数**(`Built-in Functions`)と呼びます。現在の`Python3.8.5`では、69個の組み込み関数が用意されています。今回は、よく使う組み込み関数をグループに分けて基本的な使い方を説明します。

## 解説

### 0. まずはこれをマスターしましょう

今までの解説で**型**というキーワードは何度も登場したと思います。型によって用いることのできるメソッドが違い、操作方法も変わってくるため、今使ってる変数の型を意識する必要があります。組み込み関数では、型判定をしてくれる**type()**
という関数があります。自分で判断できない時はぜひこれを使って調べてください。

```python=1
a = 1
print(type(a)) 
b = 3.14
print(type(b))
c = [1, 2, 3]
print(type(c))
```

このように変数aはint型(整数)、bはfloat型(小数)、cはlist型(リスト)とわかります。結果の頭に、`class`という単語が入っていますが、これの意味については最後のオブジェクト指向の単元で説明をします。

### 1. 数値と計算処理系

#### 1. 整数と浮動小数の型変換

```python=1
a = 3.21
b = int(a)
print(b)
print("bの型は:", type(b))
c = 3
d = float(c)
print(float(d))
print("dの型は:", type(d))
```

|行番号|解説|
|---|---|
|1~2|`int()`は変数を整数型に変換する関数です。浮動小数点数型の変数aを`int(a)`のように整数型に変換します。|
|3~4|出力結果を見ると、`3.21`の整数部分のみが残りました。`type()`で型を調べると、予想通りの`int`型になっています。|
|5~6|`float()`は変数を浮動小数点数型に変換する関数です。整数型の変数cを`float(c)`のようにして浮動小数点数型に変換します。|
|7~8|結果を見ると、整数の`3`が小数の形の`3.0`になりました。同様に`type()`で型を調べると、予想通りの`float`型になっています。|

#### 2. 進数変換

```python=1
print("整数10の2進数表記:", bin(10))
print("整数20の2進数表記:", bin(20))
```

|行番号|解説|
|---|---|
|1~2|関数`bin(10進数)`は10進数を2進数に変換する関数です。出力結果を見ると、数値の前に2進数を表す「0b」がついています。|
:::info
:bulb: 補足

1. ここで初めて進数表現を習う人は、まずCS解説の該当教材で勉強してください。[**CS解説-進数表現の話**](https://www.uec-programming.com/e-learning/irohaboard/contents_questions/index/208):link:
2. `bin()`以外にも`otc()`, `hex()`といった8進数や16進数に変換する関数があります。興味がある人は調べてください。
:::

#### 3. 演算

```python=1
print("-2の絶対値：", abs(-2))
print("4.53を四捨五入:", round(4.53))
print("10の2乗:", pow(10, 2))
print("1~5の整数の和:", sum(1, 2, 3, 4, 5))
print("5,3,9,12のうちの最小値:", min(5, 3, 9, 12))
print("7,3,15,9のうちの最大値:", max(7, 3, 15, 9))
l = [3,1,4,1,5,9,2]
print("リストlの和:", sum(l))
print("リストlの最小値:", min(l))
print("リストlの最大値:", max(l))
```

|行番号|解説|
|---|---|
|1|`abs()`で数値の絶対値を求めます。|
|2|`round()`で小数を四捨五入して整数値にします。また、`round(4.53, 1)`のように二つ目の引数に1を指定すると、小数点の一桁目まで四捨五入することもできます。|
|3|`pow(a,b)`はaのb乗を求めます。これは結果的に`a**b`と同じです。|
|4|`sum()`は指定された値の和を求めます。|
|5~6|`min()`と`max()`は指定された値から最小値と最大値を取得します。|
|8\~10|`sum`, `min`, `max`は引数としてリスト、タプルを指定しても計算できます。|

### 2. イテラブルとその操作

#### 1. イテラブルの基本操作

```python=1
print("リスト[1,2,3,4]を反転：", list(reversed([1, 2, 3, 4])))
print("タプル(1,3,5,7)の長さ:", len((1, 3, 5, 7)))
s = 'Python'
s_obj = slice(-1, -4, -1)
print("文字列sのスライス操作結果:", s[s_obj]) 
```

|行番号|解説|
|---|---|
|1|`reversed()`でイテラブルの順序を反転します。リスト、タプル、文字列などにも適用できます。反転後の結果を確認するためには、必ず`list()`のように型変換が必要です。|
|2|`len()`はイテラブルの長さを返します。|
|3,4|`slice()`で文字列の切り出し操作を行います。これは`s[-1:-4:-1]`と同じ結果です。|

#### 2. イテラブルに対する判定

```python=1
nums = [0, 1, 2, 3, 4]
print(all([i > 2 for i in nums]))
print(any([i > 2 for i in nums]))
```

|行番号|解説|
|---|---|
|2|`all()`は全ての要素が条件を満たす時に`True`を返し、一つでも満たさないものがあると`False`を返します。|
|3|`any()`は条件を満たす要素が一つさえあれば`True`を返し、ゼロ個の場合は`False`を返します。|


#### 3. インデックスと要素を結合

```python=1
some_list = ['one', 'two', 'three']
mapping = {}
for index, item in enumerate(some_list):
    mapping[item] = index
print(mapping)
```
|行番号|解説|
|---|---|
|2|`mapping = {}`で辞書型変数`mapping`を作成します。|
|3~4|`index`はリストのインデックス、`item`はそのインデックスに対応する要素です。`mapping[item] = index`は、`item`を辞書のキーに指定し`index`を辞書の値に指定します。このように、`enumerate(some_list)`を使うとリストのインデックスと要素を同時に取得できます。|

```python=1
seq1 = ['1', '2', '3']
seq2 = ['one', 'two', 'three']
zipped = zip(seq1, seq2)
print(list(zipped))
```

|行番号|解説|
|---|---|
|1, 2|リスト`seq1`と`seq2`を作成します。|
|3|`zip()`で二つのリストの同じインデックスの要素を順番で一つのタプルとして結合します。|
|4|`list()`で結合した要素を一つのリストに変換します。|

#### 4. 変換

`list()`はイテラブルなオブジェクトをリストに変換できます。

```python=
t = (1, 2, 3, 4)
t_list = list(t)
print('タプルをリストに変換:', t_list)
s = 'Hello'
s_list = list(s)
print('文字列の要素を分割し、リストに変換:', s_list)
```

|行番号|解説|
|---|---|
|1|タプル型変数`t`を作成します。|
|2|`list()`で`t`をリストに変換します。タプルに限らず、`list()`はイテラブルなオブジェクトをリストに変換できます。|
|5|文字列もイテラブルなので、`list()`で文字列を分割できます。|

```python=
key_value_list = [(1, 2), ('a', 'b'), ('c', True)]
kv_dict = dict(key_value_list)
print('辞書kv_dict:', kv_dict)
print('キーaに対応する値:', kv_dict['a'])
```

|行番号|解説|
|---|---|
|1|`key_value_list`というリストを作成します。各要素はタプルです。|
|2|`dict()`で`(key,value)`のセットで書かれたリストの要素を辞書に変換します。|

### 3. 出力のフォーマット指定

文字列と数字を一つの文で出力したい時は、一般的に数字を文字列に型変換して`print()`で記述します。

```python=
apple = 50
orange = 100
s = 'りんご:' + str(apple) + '円、' + 'オレンジ:' + str(orange) + '円'  
print(s)
```

しかし、型変換や`+`を沢山使うと、かなり面倒くさいですね。ここで、`format()`を使う書き方を紹介します。

```python=1
apple = 50
orange = 100
total = apple + orange
print('りんご：{0}円 みかん：{1}円 合計：{2}円'.format(apple, orange, total))
```
|行番号|解説|
|---|---|
|4|`{0}，{1}，{2}`はそれぞれ、`format`の引数`(apple, orange,total)`に対応します。`apple`の値は`{0}`、`orange`の値は`{1}`、`total`の値は`{2}`に代入されます。|

python3.8以降(正確に言うと3.7以降)、`f-string`という型が使えます。`f''`のようにクォーテーションの前に`f`をつけることで、`{}`を使って表示内容を指定できます。

```python=
apple = 50
orange = 100
total = apple + orange
print(f'りんご：{apple}円 みかん：{orange}円 合計：{total}円')
```
:::info
:bulb: 補足
以下のように出力のフォーマットの調整もできます。

```python=1
print("{0:=^20}".format("Python"))
print("{0:*>20}".format("Python"))
```

詳しくは[**ドキュメント**](https://docs.python.org/ja/3/library/string.html#format-specification-mini-language):link:
を参考にしてください。(クイズで出しますので、目を通してね！)
:::

### 4. コード実行

おまけとして、コード実行に関する関数を二つ紹介します。

`eval()`で式の評価ができます。`'x+y'`のような変数の計算式の文字列を与えると、それの計算結果が返されます。

```python=1
x = 10
y = 20
ans = eval('x+y')
print("x+yの結果: ", ans)
```

`exec()`は「式」だけじゃなく、「構文」の評価もできます。
例えば、以下の`for文`は`exec()`で評価され、実行結果が返されます。

```python=1
s = "for i in range(5): print(i)"
a = exec(s) 
```

:::danger
:fire: **重要**

`eval()`と`exec()`を使用すると、任意のコードを実行することができます。システムにとって危険性があるので、使用を避けるか、引数に特別な値を指定して動作範囲を決める必要があります。`eval()`と`exec()`の詳しい話はPython中級教材の範疇を超えるので、紹介を省きます。
:::

オブジェクト指向関連やファイル操作関連の組み込み関数については、以降の単元で説明をします。


<div style="display: none">

## クイズ

1. 以下から正しい記述を選んでください。

- [ ] `print(round(4.50))`の結果は`4`です。
- [x] `print(bin(10))`の結果は`0b1010`です。
- [ ] `print(reversed([1, 2, 3, 4]))`の結果は`[4, 3, 2, 1]`
- [x] `print(round(4.53, 1))`の結果は`4.5`です。

2. 以下のプログラムの実行結果を選んでください。

```python=1
some_list = ['one', 'two', 'three']
mapping = {}
for i, j in enumerate(some_list):
    mapping[j] = i
print(mapping)
```
- [x] `{'one': 0, 'two': 1, 'three': 2}`
- [ ] `{'0': one, '1': two, '2': three}`
- [ ] `[0, one, 1, two, 2, three]`
- [ ] `[one, 0, two, 1, three, 3]`

3. 以下のプログラムの実行結果を選んでください。
```python=1
print("{0:=^10}".format("Python"))
```
- [ ] `====Python`
- [ ] `Python^^^^`
- [x] `==Python==`
- [ ] `^^^^Python`

4. Python3.8において、以下のプログラムの出力結果が`りんご：50円 みかん：100円 合計：150円`になるように、____A____に入るコードを選んでください。

```python=
apple = 50
orange = 100
total = apple + orange
x = [apple, orange, total]
print(____A____)
```
- [x] `f'りんご：{apple}円 みかん：{orange}円 合計：{total}円'`
- [x] `f'りんご：{x[0]}円 みかん：{x[1]}円 合計：{x[2]}円'`
- [x] `'りんご：{0}円 みかん：{1}円 合計：{2}円'.format(apple, orange, total)`
- [x] `'りんご：{0}円 みかん：{1}円 合計：{2}円'.format(x[0], x[1], x[2]))`

5. 出力結果が`0:(foo,one) 
1:(bar,two)
2:(baz,three)`
になるように、____A____に入るコードを選んでください。

```python=
seq1 = ['foo', 'bar', 'baz']
seq2 = ['one', 'two', 'three']
for i, (a, b) in ___A___:
    print('{}:({},{})'.format(i, a, b))
```   

- [x] `enumerate(zip(seq1, seq2))` 
- [ ] `zip(enumerate(seq1, seq2))`
- [ ] `zip(seq1, seq2)`
- [ ] `enumerate(seq1, seq2)`

</div>