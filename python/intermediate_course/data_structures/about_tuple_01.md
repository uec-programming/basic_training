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

# 3. タプル

## 導入
今回はリストの兄弟と言われている **{tuple|タプル}** について紹介をします。リストに格納される値は変更可能に対して、タプルに格納される値は**変更不可能**です。「えっ、それだと不便じゃん」と思う人が多いかもしれないですが、変更不可能のおかげで**データ情報の安全性**を高めることができます。

## 解説
### 1. タプルの定義
タプルは**変更不可能な一列のデータ**を意味します。Pythonのタプルの中に、どんなデータをも保存できます。

「変更不可能」というのは「ハッシュ可能」とも意味します。つまり、タップルは辞書型データので**キー値**として使えます。(辞書で詳しく説明をします。)


Pythonでは以下のようにタプルを記述します。
![](https://i.imgur.com/PuTqpIZ.png)

### 2. {tuple|タプル}の作り方

```python=1 
empty_tuple = ()   
print(empty_tuple)
city_name = ('tokyo', 'osaka', 'kyoto', 'hokkaido')
print(city_name)
weekend = 'saturday', 'sunday' 
print(weekend)
```

<iframe height="150px" width="100%" src="https://repl.it/@programminguec/maketuple?lite=1&outputonly=1"></iframe>

|行番号|解説|
|---|---|
|1,2|空のタプルを作って、出力します。|
|3,4|四つの都市名をタプルに格納して、出力します。|
|7|括弧を省略して書いてもよいが、あまり推奨しない書き方です。|

:::danger
:fire: **重要**

定義する時、タプルは円括弧、リストは角括弧を使います。
![](https://i.imgur.com/PWPy1FU.png)
:::

### 3. 変更不可能であることの確認
```python=1 
city_name = ('tokyo', 'osaka', 'kyoto', 'hokkaido')
print(city_name)
city_name[1] = 'saitama'
```
<iframe height="180px" width="100%" src="https://repl.it/@programminguec/unchangable1?lite=1&outputonly=1"></iframe>

変更しようとしすると、変更不可能というエラーが発生します。
`TypeError: 'tuple' object does not support item assignment`を訳すと、「タイプエラー:'タプル'オブジェクトに内容の代入ができない」という意味です。

```python=1 
city_name = ('tokyo', 'osaka', 'kyoto', 'hokkaido')
print(city_name)
city_name = ('saitama', 'kangawa', 'hiroshima', 'nagasaki')
print(city_name)
```
<iframe height="120px" width="100%" src="https://repl.it/@programminguec/unchangable2?lite=1&outputonly=1"></iframe>

同じ変数に代入し直すことはできます。
これは新しいオブジェクトを作っているので、オブジェクトの中身の変更されてないです。


### 4. タプルの操作
リストの講義で、アクセス方法、スライス、メソッド、組み込み関数について説明をしましたが、こういった操作の多くはタプルにも適用できます。(もちろん、適用できないものもあります。)

```python=1
num_tuple = (1, 2, 3, 4, 5, 6, 7) 
print("1番目の要素：", num_tuple[0]) 
print("4番目の要素：", num_tuple[3])

print("最初から3番目までの要素: ", num_tuple[:3]) 
print("2番目から5番目までの要素: ", num_tuple[1:5])

for i in num_tuple:   
    print(i * 2)
```
|行番号|解説|
|---|---|
|2,3|リストと同様にインデックスで要素にアクセスできます。|
|5,6|スライス操作もリストと同様です。|
|8,9|forによるタプルの操作,num_tupleの各要素の2倍の値を出力します。|
<iframe height="260px" width="100%" src="https://repl.it/@programminguec/operation1?lite=1&outputonly=1"></iframe>
リストは沢山メソッドがあるのに対して、タプルのメッソドは二つしかないです。

```python=1
#indexメソッドで要素のインデックスを返す
language = ('C', 'Python', 'PHP', 'C++','JavaScript')
print("要素Pythonのインデックスを出力:", language.index('Python'))

#countメソッドで特定要素の回数を数える
num_tuple = (1, 3, 7, 8, 7, 5, 4, 5, 8, 5)
print("要素5の出現回数:", num_tuple.count(5))  #num_tuple中の5の回数を出力
```
|行番号|解説|
|---|---|
|3|`index(要素)`は要素のインデックスを返します。|
|7|`count(要素)`は要素の出現回数を返します。|

<iframe height="120px" width="100%" src="https://repl.it/@programminguec/operation2?lite=1&outputonly=1"></iframe>

:::info
:bulb: 補足事項

Q: なぜタプルのメソッドはこんなに少ないの？

A: 要素が変更不可能であることはタプルの最大の特徴です。```append()```、```extend()```、```clear()```などのメソッドはタプル要素を変更することになるので、もちろん使えないよね。
:::


```python=1
tuple1 = ("a", "b", "c")
tuple2 = (1, 2, 3)
tuple3 = tuple1 + tuple2 
print("tuple1とtuple2の結合:", tuple3)
print("tuple1の長さは:", len(tuple1)) 

list_1 = [1, 2, 3, 4, 5]
tuple_1 = tuple(list_1)  
print('listをtupleに変換した:', tuple_1)
```
|行番号|解説|
|---|---|
|3|`+`記号で二つのタプルを結合します。|
|5|`len()`関数でタプルの長さを返します。|
|8|`tuple()`で他の型をタプルに変換します。|

<iframe height="120px" width="100%" src="https://repl.it/@programminguec/operation3?lite=1&outputonly=1"></iframe>

<div style='display: none'>

## クイズ

1. 変数`a`と変数`b`の正しい型を以下から選んでください。
```python=1
a = ('cat')
b = ('cat',)
```
- [ ] `a`はタプル型、`b`もタプル型
- [x] `a`は文字列型、`b`はタプル型
- [ ] `a`はタプル型、`b`は文字列型
- [ ] `a`は文字列型、`b`も文字列型

2. 以下からタプルについて正しい内容を選んでください。
- [ ] 順番なし、変更可能
- [ ] 順番あり、変更可能
- [ ] 順番なし、変更不可能
- [x] 順番あり、変更不可能

3. 以下のコードから正しく実行されるものを選んでください。
- [ ] `a = (1,2,3) a[2] = 5`
- [x] `a = (1,2,3,[4,5]) a[-1][1] = 1`
- [x] `a = (1,2,3) a = (4,5,6)`
- [ ] `a = (1,2,3,[4,5]) a.append(3)`

4. 以下のコードの実行結果を選んでください。
```python=1
aTuple = (100, 200, 300, 400, 500)
print(aTuple[-2], aTuple[-4:-1])
```
- [ ] `400 (200, 300, 400)`
- [ ] `300 [200, 300, 400]`
- [x] `400 [200, 300, 400]`
- [ ] `300 (200, 300, 400)`

5. 以下のタプル型変数`aTuple`の要素`15`にアクセスするための正しいコードを以下から選んでください。
```python=1
aTuple = ("uecprogramming", [10, 20, 30], (5, 15, 25))
```
- [ ] `aTuple[2][1]`
- [ ] `aTuple[-1](1)`
- [ ] `aTuple[2][0]`
- [x] `aTuple[-1][1]`
</div>