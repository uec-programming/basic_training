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

# 6. 集合
## 導入
今回は集合について説明をします。集合は、英語で{**set**|セット}と言います。集合型の特徴は、**要素には順番がなく、重複する値を持たせることができません。** また、集合型には特有の演算方法があります。

## 解説

### 集合の作り方
```python=1
# 方法1
new_set = {'a', 'b', 'c', 'a', 'b', 'c'}
print('セットの中身:', new_set)
print('セットの長さ:', len(new_set))  
```
<iframe height="140px" width="100%" src="https://makeset1.programminguec.repl.run?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

```python=5
# 方法2
empty_set = set()
print('空のセット:', empty_set)
new_set = set(['a', 'b', 'c', 'a', 'b', 'c'])
print('new_set:', new_set)
```
<iframe height="140px" width="100%" src="https://makeset2.programminguec.repl.run?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|2|`{}`を使ってセットを作ります。|
|3|セットに重複する値を持たせることができないので、`a`,`b`,`c`はそれぞれ一回ずつ出力されます。|
|4|`len()`でセットを長さを求めます。|
|6|`set()`を使ってセットを作ることもできます。|
|8|`set(変数)`の変数に代入可能なのは、リスト、文字列、辞書、タプルなどのようなイテラブル(繰り返し構文で操作可能なデータ型)です。|

:::info
:bulb: 補足

作り方自体は`{}`と`set()`の二通りありますが、`{}`で作ると辞書(dict)と間違えやすいのであまり推奨しません。
:::

:::danger
:fire: 重要

セットには順番がないので、`new_set[1]`のようにインデックスで要素にアクセスすることができません。
:::
### 集合の操作

```python=1
# 要素を確認
nums = set([1, 2, 3, 4])
print(4 not in nums)
print(2 in nums)
```
<iframe height="110px" width="100%" src="https://setoperation1.programminguec.repl.run?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|1|`set()`の括弧に代入できる変数はイテラブルのみで、ここではリスト型のデータを代入しています。|
|2,3|`要素 in セット名`または`要素　not in セット名`を使って要素は該当セットに含まれているかどうかを確認でき、含まれている場合は`True`、含まれてない場合は`False`を返します。|


```python=1
# 要素を追加
fruits = set(['blackberry', 'melon'])
fruits.add('apple')
fruits.add('banana')
print(fruits)
fruits.update(['orange', 'pear'])
print(fruits)
```
<iframe height="180px" width="100%" src="https://setoperation2.programminguec.repl.run?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|1|空のセットを作ります。|
|2,3|`add()`メソッドでセットに要素を追加します。<br>`add()`メソッドは文字列やタプルのようなハッシュ可能なデータを一つずつしか追加できません。|
|6|`update()`メソッドでセットに要素を追加します。<br>`update()`メソッドはリストのようなハッシュ不可能なデータ型を追加できます。|

```python=1
# 要素を削除
nums = set([1, 1, 2, 2, 3, 4, 4])
nums.remove(1)
print("要素1を削除後のセット:", nums)
nums.discard(4)
print("要素4を削除後のセット:", nums)
```
<iframe height="160px" width="100%" src="https://setoperation3.programminguec.repl.run?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


|行番号|解説|
|---|---|
|3|`remove()`メソッドでセットから指定した要素を1つ削除します。該当する要素が存在しない場合は、`KeyError`を返します。|
|5|`discard()`メソッドでセットから指定した要素を1つ削除します。該当要素が存在しない場合は、もとのセットに対して何も操作しません。|

### 集合の演算

```python=1
# 和集合
set1 = set(['Python', 'C', 'C#'])
set2 = set(['Javascript', 'Python', 'C'])
s1 = set1 | set2
print(s1)
s2 = set1.union(set2)
print(s2)
```
<iframe height="120px" width="100%" src="https://calculation1.programminguec.repl.run?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


|行番号|解説|
|---|---|
|1|和集合とは、演算する集合のいずれか少なくとも一つに含まれている要素の集合です。|
|4|`集合変数1｜集合変数2`のように、縦棒で和集合の計算をします。この場合、縦棒の前後の変数は必ず集合型(セット)です。|
|7|`union()`メソッドを使っても和集合の計算ができます。この場合、括弧に集合型以外のデータ型を代入しても大丈夫です。|

```python=1
# 積集合
set1 = set(['Python', 'C', 'C#'])
set2 = set(['Javascript', 'Python', 'C']) 
s1 = set1 & set2
print(s1)
s2 = set1.intersection(set2)
print(s2)
```
<iframe height="120px" width="100%" src="https://calculation2.programminguec.repl.run?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


|行番号|解説|
|---|---|
|1|積集合とは、演算する集合の共通要素の集合です。|
|4|`集合変数1 & 集合変数2`のように、`&`記号で積集合の計算を行います。この場合、`&`の前後の変数は必ず集合型(セット)です。|
|7|`intersection()`メソッドを使っても積集合の計算ができます。この場合、括弧に集合型以外のデータ型を代入しても大丈夫です。|
```python=1
# 差集合
set1 = set(['Python', 'C', 'C#'])
set2 = set(['Javascript', 'Python', 'C'])
s1 = set1 - set2
print(s1)
s2 = set1.difference(set2)
print(s2)
```
<iframe height="120px" width="100%" src="https://calculation3.programminguec.repl.run?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|1|差集合とは、ある集合の中から別の集合に属する要素を取り去って得られる集合です。|
|4|`集合1-集合2`のように、`-`記号で計算を行います。集合1には含まれているが集合2には含まれていない要素の集合が結果として得られます。`-`の前後の変数は必ず集合型(セット)です。|
|7|`difference()`メソッドを使っても差集合の計算ができます。この場合、括弧に集合型以外のデータ型を代入しても大丈夫です。|

<div style='display: none'>

## クイズ

1. 以下から正しくないコードの行番号を選んでください。
```python=1
set1 = {1, 2, 3, 3}
set2 = set('a', 'b', 'c')
print(set1[1]) 
set3 = set('abc')
```
- [ ] `1`
- [x] `2`
- [x] `3`
- [ ] `4`

2. 以下の選択肢からエラーが出る操作を選んでください。

```python=1
color = set(['red', 'blue', 'green', 'red']) 
```
- [x] `color.add('yellow', 'pink')`
- [x] `color.add(['black', 'white'])`
- [x] `color.remove('black')`
- [ ] `color.discard('white')`

3. 集合型変数`result`に含まれている要素を以下の選択肢から選んでください。
```python=1
set1 = set(['c' ,'a', 'c'])
set2 = set(['c' ,'d', 'a'])
result = (set1 | set2).intersection(['x', 'a', 'c']) 
print(result)
```
- [ ] `x`
- [ ] `d`
- [x] `a`
- [x] `c`


4. 集合型変数`result`に含まれている要素を以下の選択肢から選んでください。
```python=1
set1 = set(['c' ,'a', 'c', 'd'])
set2 = set(['c' ,'d', 'a'])
result = (set1 & set2).intersection(['x', 'a', 'c','d']) 
print(result)
```
- [x] `a`
- [ ] `x`
- [x] `d`
- [x] `c`

5. 以下のデータ型から、イテラブルオブジェクトであるものを選んでください。
- [x] 文字列
- [x] リスト
- [x] 辞書
- [x] タプル

</div>

