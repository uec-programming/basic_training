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

# 7. 内包表記

## 導入
内包表記とは、リストやタプル、辞書型、集合型を手軽に生成するための表記方法です。これは、`Python`における強力な記述方法です。

## 解説
### イテラブルについて
イテラブルとは、繰り返し可能なデータ構造のことです。つまり、イテラブルであれば`for`文で要素を順番に取り出して処理する事が可能です。今まで紹介したリスト、タプル、辞書、集合などはイテラブルです。

また、`range()`関数の返り値もイテラブルです。文字列の時は文字ごとに取り出されるイテラブルです。


### リストの内包表記
```python=1
# 1以上10以下の整数のリストの各要素を二倍にする
num = []
for i in range(1, 11):
    num.append(i * 2)
print(num)
```
|行番号|解説|
|---|---|
|2|空のリストを作ります。|
|3, 4|1から10までの整数を`i`に格納し、 `i`を２倍してリスト変数`num`に追加します。|
|5|出力結果は1から10までの整数を2倍にした整数のリストでです。|


これを内包表記で記述すると以下のようになります。4行で書かれていたコードをたった2行で記述することができました。
```python=1
# 内包表記での記述 
num = [i * 2 for i in range(1, 11)]
print(num)
```

<iframe height="120px" width="100%" src="https://repl.it/@programminguec/listcommprehension02?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|2|`式 for 変数　in イテラブル`　これはリストの内包表記の基本的な記述方法は次の通りです。上記のコードを見ると、式に当たる部分は`i * 2`、変数は`i`、イテラブルは`range(1, 11)`から順番に取り出した変数になります。|

### 条件判断付きの内包表記
#### その① ifのみ使用
```python=1
# 20以下の3の倍数のリスト
num = []
for i in range(1, 21):
    if i % 3 == 0:
        num.append(i)
print(num)
```
|行番号|解説|
|---|---|
|2|空のリスト`num`を作ります。|
|3~5|1から20まで、3で割り切れた整数をリスト`num`に追加します|

これを内包表記で記述すると以下のようになります。`for`の後に`if`を記述して、内容をフィルタリングできるようになっています。

```python=1
# 内包表記で記述 
num1 = [i for i in range(1, 21) if i % 3 == 0]
print(num1)
```
<iframe height="120px" width="100%" src="https://repl.it/@programminguec/listcomprehensionwithifonly?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|2|if文付きの内包表記の基本形式：`式 for 変数　in イテラブル if 条件`|
|2|`if i % 3 == 0`という条件を最後につけると、3の倍数のみ`num1`というリストに追加されます。|


#### その② if-elseを使う時
```python=1
# 20以下の3の倍数であれば、その数字を文字列にして追加し、
# それ以外の場合は文字列'a'で置き換える
num = []
for i in range(1, 11):
    if i % 3 == 0:
        num.append(str(i))
    else:
        num.append('a')
print(num)
```
|行番号|解説|
|---|---|
|3|空のリスト`num`を作ります。|
|4|1から20までの数字を含むイテラブルを生成し、<br>その中の要素を順番に取り出し、変数`i`に入れる。<br>そして変数`i`に対し、以下の処理をする|
|5,6|変数`i`の中に格納されているデータが3の倍数であれば、<br>`i`のデータをそのまま文字列にして`str(i)`、`num`に追加する|
|7,8|それ以外の場合は`i`の中の数字の代わりに、<br>文字列`'a'`を`num`の中に入れる|

これを内包表記で記述すると以下のようになります。

```python=1
# 内包表記で記述 
num1 = [str(i) if i % 3 ==0 else 'a' for i in range(1, 11)]
print(num1)
```

<iframe height="120px" width="100%" src="https://repl.it/@programminguec/listcomprehensionwithifelse?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|2|`if-else`付きの内包表記の基本形式: `[3項演算子 for 変数　in イテラブル]`|
|2|三項演算子とは`「条件式が真の時の処理」 if 「条件式」 else 「条件式が偽の時の処理」のような記述方法です`。|



### 辞書の内包表記
```python=1
# 二十歳以上の生徒名と年齢を辞書で出力
student_age = {'yuki': 21, 'naoko': 24, 'haruto': 18, 'makoto': 25}
over_twenty = {}
for k,v in student_age.items():
    if v >= 20:
        over_twenty[k] = v
print(over_twenty)
```
|行番号|解説|
|---|---|
|2|生徒の名前と年齢を格納する辞書変数`student_age`を作ります。|
|3|二十歳以上の生徒の情報を格納する空の辞書を先に作成します。|
|4|ループ変数`k,v`はそれぞれ辞書の`key`と`value`に対応し、ここではそれぞれ生徒の名前と年齢を表します。|
|5,6|年齢が二十歳以上の生徒を`over_twenty`に情報を追加します。|

```python=1
# 内包表記で記述
student_age = {'yuki': 21, 'naoko': 24, 'haruto': 18, 'makoto': 25}
print({k:v for k,v in student_age.items() if v >= 20})

<iframe height="120px" width="100%" src="https://repl.it/@programminguec/dictcomprehension?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

```
|行番号|解説|
|---|---|
|3|リストの内包表記と同じように、基本的な記述方法は以下のようになっています。　<br>`式 for 変数　in イテラブル if 条件`|
|3|ここのイテラブルは辞書のキーと値を同時に取り出すのに使う`items()`メソッドです。|



:::info
:bulb: 補足

python3.6以降では、辞書型に対して`for`文の処理はキー値が追加された順番で取り出せるようになりました。python3.6未満ではキー値が順番通りに取り出されるとは限りません。
:::


### タプルと集合型の内包表記
```python=1
# リストから奇数だけを取り出し、重複なしのsetにする
no_dup = set(i for i in [1, 2, 3, 4, 5, 4, 3, 2, 1] if i % 2==1)
print('no_dup:', no_dup)
# 辞書のkey値をタプルにする
key_tuple = tuple(k for k in {'a':1, 'b':2})
print('key_tuple:', key_tuple)
```

<iframe height="120px" width="100%" src="https://repl.it/@programminguec/othercomprehension?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|2|`set()`関数を用いてリストから集合に変換できるので、`set(リスト内包表記)`で記述します。<br>また、`no_dup = {i for i in [1, 2, 3, 4, 5, 4, 3, 2, 1]}`のように、<br>`{}`を使うことも可能です。|
|5|`tuple()`関数を用いてリストからタプルに変換できるので、<br>`tuple(リスト内包表記)`で記述します。|


<div style='display: none'>

1. 以下の変数のデータ型を考えて、イテラブルであるものを選んでください。

- [x] `a = {'x', 'y', 'z'}`
- [x] `b = ['x', 'y', 'z']`
- [ ] `c = int(2020)`
- [x] `d = (1, 2, 3)`

2. 以下のプログラムの実行結果を選んでください。
```python=1
num0 = ['Even' if i % 2 == 0 else 'Odd' for i in range(1, 6)]
num1 = [i[0] for i in num0]
print(num1)
```
- [x] `['O', 'E', 'O', 'E', 'O']`
- [ ] `['E', 'O', 'E', 'O', 'E']`
- [ ] `['Odd', 'Even', 'Odd', 'Even', 'Odd']`
- [ ] `['Even', 'Odd', 'Even', 'Odd', 'Even']`

3. 以下のプログラムの実行結果を選んでください。
```python=1
student_age = {'yuki': 21, 'naoko': 15, 'haruto': 18, 'makoto': 25}
print({k:v for k,v in student_age.items() if v <= 20})
```
- [ ] `{'naoko', 'haruto'}`
- [x] `{'naoko': 15, 'haruto': 18}`
- [ ] `[15, 18]`
- [ ] `['naoko': 15, 'haruto': 18]`

4. 以下のプログラムの実行結果を選んでください。
```python=1
print([[i+j for i in "12"] for j in "45"])
```
- [ ] `[['14', '15'], ['24', '25']]`
- [ ] `['14', '15', '24', '25']`
- [ ] `['14', '24', '15', '25']`
- [x] `[['14', '24'], ['15', '25']]`

5.　以下から正しく実行されるものを選んでください。

- [x] `a = set(i for i in [0,1,2,3])`
- [x] `b = {i for i in [0,1,2,3]}`
- [ ] `c = set{i for i in [0,1,2,3]}`
- [x] `d = [i**+1 for i in range(4)]`
</div>
