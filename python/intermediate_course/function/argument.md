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

# 9. 引数について
## 導入
前回は関数の作成方法、使い方について説明しました。今回は{引数|ひきすう}として可能なデータ型や使い方について解説をします。

## 解説
### 関数の引数
#### 1. 整数型が引数になる
```python=1
def power(x):
    return x * x
print(power(5))
```

<iframe height="100px" width="100%" src="https://repl.it/@programminguec/int-args?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|1,2|関数`power`の引数`x`は整数型で、これは`x`の2乗を計算して、結果を返す関数です。|
|3|引数に具体的な数字5を入れて、結果を出力します。|

#### 2. 文字列型が引数になる
```python=1
def greet(x):
    return 'Hello ' + x
print(greet('Jack'))
```
<iframe height="100px" width="100%" src="https://repl.it/@programminguec/char-args?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|1,2|関数`greet`の引数は同じ`x`ですが、この`x`は文字列型です。|
|3|引数に具体的な文字列`Jack`を入れて、結果を出力します。|
#### 3. 引数のデフォルト値を指定
```python=1
#引数の値を指定
def func(a, b=9):
    v = 0
    for i in range(a, b+1):
        v += i
    return v
print(func(1))
```
<iframe height="100px" width="100%" src="https://repl.it/@programminguec/default-args?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|1|関数`func`は引数`a`以上引数`b`以下の全ての整数の和を求める関数です。`b=9`のように、引数の値を指定することができます。|
|2~5|連続する整数の和を求めるので、加算の初期値を`v=0`と設定し、range関数で`a`以上`b`以下の整数を`v`に加算します。|
|3|最後に関数を呼び出し、結果を出力します。ここで、`b`はすでに値9を指定したので、呼び出す時に`a`の値だけ指定すればよいです。|

#### 4. リストやタプルが引数になる
```python=1
listA = [1, 2, 3, 4]
tupleA = (1, 3, 5, 7)
def sumargs(numlist):
    v = 0
    for n in numlist:
        v += n
    return v
print('listAの和:', sumargs(listA))
print('tupleAの和:', sumargs(tupleA))
```

<iframe height="120px" width="100%" src="https://repl.it/@programminguec/list-args?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|4|関数`sumargs`はリストやタプルの要素の和を求める関数で、引数`numlist`はリストやタプルのようなイテラブル変数を指定します。|
|5~8|加算の初期値を`v=0`と設定し、`numlist`の要素を`v`に加算して和を求めます。|
|9~10|呼び出し時は、`sumargs(listA)`や`sumargs(tupleA)`のように処理対象となるイテラブルの変数名を指定します。|

#### 4. 可変長引数-タプル、リスト
最終的に関数内部で受け取るのはタプル型
```python=1
num = [1,2,3,4]
def sumargs(*numlist):
    v = 0
    for n in numlist:
        v += n
    return v
print('リスト[1, 2, 3, 4]の和:', sumargs(1, 2, 3, 4))
print('リストnumの和:', sumargs(*num))
```
<iframe height="110px" width="100%" src="https://repl.it/@programminguec/args?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|2|`*numlist`のように引数名の前にアスタリスクを書くと、可変長引数を指定できます。つまり、引数の個数を何個でも指定できます。|
|3~6|前と同じ和を求める処理です。|
|7|`*sumargs(1,2,3,4)`のようにアスタリスクを入れると、この四つの数の和を求めます。例えば、`*sumargs(1,2,3,4,5)`を指定すると、五つの数の和を求めることができます。|
|8|すでに定義した変数を指定する場合は`*イテラブル変数`のように書きます。|
:::info
:bulb: 補足

普通の引数と可変長引数が同時に存在する場合は、以下のように可変長引数の位置は必ず後ろに来ます。
```python=1
def fun(a,*b):
    処理
```
:::
#### 5. 可変長引数-辞書型
```python=1
def print_dict(**args):
    print(args)
print_dict(name = 'John', age = 24, IP = '192.58.123.176')
```
<iframe height="110px" width="100%" src="https://repl.it/@programminguec/twoargs?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|1~2|辞書型の可変長引数を指定する時は`**args`のように、アスタリスクを二つ書きます。関数`print_dict`は引数の中身をそのまま出力する関数です。|
|3|具体的な値は`キー = 値`のように指定します。`キー`や`値`は第7回辞書型の所で説明しました。|

#### 6.関数を引数にする
```python=1
def add(n1, n2):
    return n1 + n2
def subtract(n1, n2):
    return n1 - n2
def calculator(operation, n1, n2):
    return operation(n1, n2) 
print(calculator(add, 10, 20))
```

<iframe height="100px" width="100%" src="https://repl.it/@programminguec/funct-args?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|1~2|二数の和を計算する関数`add`を定義します。|
|3~4|二数の差を計算する関数`subtract`を定義します。|
|5~6|関数`calculator`の一つ目の引数`operation`は関数を指定し、指定された関数に対する二つの変数はそれぞれ`n1`と`n2`です。|
|7|このように関数`add`を指定し、引数に`10`と`20`を入れると、この二数の和が出力されます。|

### {`lambda`|ラムダ}式(無名関数)
`lambda`式とは関数定義の`def`文を使わず、関数を定義する式のことです。無名関数とも言います。処理が短い、または一時的にしか使わない時に、これで記述することが多いです。書式は以下のようになります。

無名関数の定義
```python
関数名 = lambda 引数1, 引数2, 引数3... : 返り値
```
三角形の面積を求める関数の普通の作り方と無名関数で記述するコードを比較して見ましょう。もちろん、結果は全く同じです。
```python=1
def triangle1(w, h):
    return w*h/2
triangle2 = lambda w,h : w*h/2
print("lambda式を使わない結果：", triangle1(10, 8))
print("lambda式を使う結果：", triangle2(10, 8))
```
<iframe height="120px" width="100%" src="https://repl.it/@programminguec/lambda-tri?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### 無名関数を引数として使ってみよう
```python=1
def cal(func):
    return func(10, 20)
result1 = cal(lambda a, b: a + b)
result2 = cal(lambda a, b: a - b)
print("無名関数を使って計算した二数の和:", result1)
print("無名関数を使って計算した二数の差:", result2)
```
<iframe height="110px" width="100%" src="https://repl.it/@programminguec/lambda-args?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

`lambda`式を利用すると、関数の定義や戻り値の記述をする手間が省けて楽ですね。

### 無名関数のよくある使い方
pythonのリストには、`sort()`メソッドが実装されています。
数値や文字だけのリストなら、**数字の小さい順とアルファベットの辞書順**でソートしてくれます。
しかし、以下のようなリストを数学の成績順で要素を並べ替える時、どうすればよいでしょうか？
```python=1
# 生徒の(名前、数学、国語)データを記録したリスト
students = [
    ('peter', 95, 60),
    ('william', 88, 75),
    ('lily', 75, 91),
    ('alan', 68, 81)
]
```
pythonでリストをソートする時、`key`引数でソートする時の基準値を指定できます。例えば、数学の成績順でソートする時、この基準値は数学の成績になります。要素は単一データの時はよく省略されます。
:::info
:bulb: 補足

`sort`メソッドについて詳しく知りたい人は以下のリンクをクリックして、ドキュメントを参考してください。 [**sortの使い方**](https://docs.python.org/ja/3/howto/sorting.html):link:
:::
上の例を使って、数学の成績順で要素を並べ替えてみましょう。まずは`lambda`式を使わずに、`key`を指定方法で書きます。

```python=1
students = [
    ('peter', 95, 60),
    ('will', 88, 75),
    ('lily', 75, 91)
]
def check_name(x):
    return x[0]
def check_math(x):
    return x[1]
# 名前の辞書順
students.sort(key=check_name)
print("名前の辞書順で並べ替えた結果：", students)
# 数学の成績順
print('\n')
students.sort(key=check_math)
print("数学の成績順で並べ替えた結果:", students)
```
<iframe height="200px" width="100%" src="https://repl.it/@programminguec/lambda-stu1?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|1~5|情報を格納するリストを定義します。|
|6~7|関数`check_name`は、リストを名前の辞書順で並べ替える関数を指定します。|
|8~9|関数`check_math`は、リストを数学の成績順で並べ替える関数を指定します。|
|11,15|`key=関数名`のように、関数を指定し、その関数の戻り値でソートしてくれます。|

次に、`lambda`式で書いてみましょう。`key`の指定の書き方に注意してください。
```python=1
students = [
    ('peter', 95, 60),
    ('will', 88, 75),
    ('lily', 75, 91),
]
# 名前の辞書順
students.sort(key=lambda x:x[0])
print("名前の辞書順で並べ替えた結果：",students)
# 数学の成績順
students.sort(key=lambda x:x[1])
print("数学の成績順で並べ替えた結果:", students)
```
|行番号|解説|
|---|---|
|7,10|この２行を見ると、`check_math`や`check_name`を定義必要がなく、`lambda x:ソートの基準値`の一行で同じ機能を実装できます。|

コードが一気に短くなって、スッキリしますね。`lambda`式と普通の書き方をよく比べてみて、マスターしてください。

<div style='display: none'>

## クイズ
1. 以下の関数の定義のうち、正しくないものを選んでくだっさい。
- [x] `def vfunc(*a,b):`
- [ ] `def vfunc(a,b=2):`
- [ ] `def vfunc(a,*b):`
- [ ] `def vfunc(a,b):`

2. 以下のプログラムの実行結果を選んでください。
```python=1
f1=lambda x:x*2
f2=lambda x:x**2
print(f1(f2(2)))
```
- [ ] `6`
- [x] `8`
- [ ] `2`
- [ ] `4`

3. 以下のプログラムの結果について記述のうち正しいものを選んでください。
```python=1
def f1(a, b, c=0, *args, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw)
f1(1, 2, 3, 'a', 'b', x=99) 
```
- [ ] `aは1,bは2,cは0`です。
- [x] `argsはタプル型で、値は('a',　'b')`です。
- [x] `kwは辞書型で、キーはx,値は99`です。
- [x] `aは1,bは2,cは3`です。

4. 以下のプログラムの実行結果を選んでください。
```python=1
def Sum(a,b=3,c=5):
    return sum([a,b,c])
print(Sum(8,2))
```
- [ ] `13`
- [x] `15`
- [ ] `16`
- [ ] `10`

5．以下のプログラムは4人の生徒の国数英語の成績を平均点の高い順に並べ替えるプログラムです。Aの部分に入る正しいコードを選んでください。
```python=1
students = [
    (100, 95, 60),
    (91, 88, 75),
    (82, 75, 91),
    (98, 68, 81)
]
students.sort(key=lambda x:___A___)
```
- [x] `(x[0]+x[1]+x[2])/3`
- [x] `sum(x)/len(x)`
- [x] `sum(x[:])/len(x[:])`
- [ ] `(x[1]+x[2]+x[3])/3`

</div>