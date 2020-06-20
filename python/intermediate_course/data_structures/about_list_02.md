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

# リスト-その②

## 導入
前回は、リストの紹介とリストの作り方、要素へのアクセス方法とループによるリストの処理について学びました。今回はリストの**スライス操作**、**メソッド**と**組み込み関数**について紹介をします。

## 解説

### 1. スライス操作
リストの一部を取り出す操作を「スライス」と呼びます。
:::danger
:fire: **重要**

スライスの書式

- リスト[開始：終了]
- リスト[開始：終了：ステップ]

(終了の部分には、リストでの終了インデックス番号に１を足した値を指定する必要があります。また開始の要素は最初の要素、終了の要素は最後の要素の時、インデックス指定を省略することもできます。)
:::
```python=1
alphabet_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

print(alphabet_list[-7:-3])  # [開始:終了]
print(alphabet_list[0:7:2])  # [開始:終了:ステップ]
print(alphabet_list[:7:2])
print(alphabet_list[::2])
print(alphabet_list[2:])
print(alphabet_list[::-1])  # ステップをマイナスにも指定できる
```

![](https://i.imgur.com/hgeU6Fm.png)

|行番号|解説|
|---|---|
|3|リストの-7番目から-4番目を取り出すために、-7から-3まで指定します。|
|4|0番目から6番目まで、一つおきに要素を取り出します。|
|5,6,7|開始の要素は最初の要素、終了の要素は最後の要素の時、省略可能です。|
|8|ステップをマイナスの数字を指定することで、リストを後ろから要素を取り出せます。**-1**の場合、後ろから1個おき(逐次)に取り出せます。**-2**の場合、後ろから2個おきに取り出せます。|
<iframe height="200px" width="100%" src="https://slice.programminguec.repl.run?lite=true"></iframe>


### 2. リストのメソッド

メソッドとは、変数や値に付けて呼び出すものです。呼び出せる種類は変数や値のデータ型によって異なります。例えば、`append()`はリスト(list)にしか使えません(文字列`str`や整数`int`などには使えません)。

```python=1
#リストの一番後ろに要素を追加
num_list = [1, 2, 3]  
print('追加する前:', num_list)
num_list.append(4) 
print('追加した後:', num_list)
```
|行番号|解説|
|---|---|
|3|一番後ろに要素を追加する前のリストを出力します。|
|4|一番後ろに要素4を追加します。|
|5|一番後ろに要素を追加した後のリストを出力します。|

<iframe height="120px" width="100%" src="https://append.programminguec.repl.run?lite=true"></iframe>

---

```python=1
#リストに値を挿入
num_list = [1, 3, 5, 7, 9]
print('値を挿入する前:', num_list)
num_list.insert(3, 4) 
print('値を挿入した後:', num_list)
```

|行番号|解説|
|---|---|
|3|値を挿入する前のリストを出力します。|
|4|3番目の位置に4を挿入して、それ以降の要素を一つずつ後ろにずらします。|
|5|値を挿入した後のリスト出力します。|


<iframe height="130px" width="100%" src="https://insert.programminguec.repl.run?lite=true"=></iframe>

---

```python=1
#インデックスを指定して、該当要素を取り出して、リストから削除
name_list = ['taro', 'naoki', 'yuta', 'tomoki', 'mizuki']

print('popする前のリスト:', name_list)
print('popされた要素:', name_list.pop())
print('popされた後のリスト:', name_list)
print('\n')  
print('1番目の要素をpop:', name_list.pop(1) )
print('popされた後のリスト:', name_list)
```
|行番号|解説|
|---|---|
|4,5|`pop()`のように、括弧に何も指定しなければ、最後の要素が取り出されて、リストから削除されます。|
|8|`pop(1)`のように、1番目の要素を指定して、該当要素を取り出して、リストから削除します。|

<iframe height="220px" width="100%" src="https://pop.programminguec.repl.run?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>



:::info
:bulb: 補足事項

リストのメソッドは上で説明したもの以外にも沢山あります。詳しくは[**Python公式ドキュメント**](https://docs.python.org/ja/3/tutorial/datastructures.html):link:を参考にしてください。ドキュメントを読む力はプログラミングを学ぶ上で大事な能力なので、疑問があったらどんどんドキュメントを活用してください。**演習問題やクイズでもドキュメントを参考にして、考えてもらう問題を出題します。**
:::

### 3. リストの組み込み関数
```python=1 
student_score = [50, 63, 76, 48, 98, 82, 77]
student_num = len(student_score)　　
print("生徒の人数: ", student_num)　

sum_score = sum(student_score)
print("生徒の合計点: ", sum_score)

max_score = max(student_score)
print("最高点: ", max_score)

min_score = min(student_score)
print("最低点: ", min_score)

score_ranking = sorted(student_score)
print("点数順位: ", score_ranking)
```

|行番号|解説|
|---|---|
|2|`len()`関数でリストの長さを求めます。|
|5|`sum()`関数でリストの要素の総和を求めます。|
|8,11|`max()`と`min()`関数はリスト要素のうちの最大値と最小値を返します。|
|14|`sorted()`でリストを小さい順に並べます。|

<iframe height="170px" width="100%" src="https://studentscore.programminguec.repl.run?lite=true"></iframe>

---

```python=1
subjects_list = ['Japanese', 'Math', 'English', 'Physics', 'Chemistry', 'Music']
for index, subject in enumerate(subjects_list):
    print(index, subject)
print('\n')
print(list(enumerate(subjects_list)))  # enumerate()の動作を確認
```

|行番号|解説|
|---|---|
|2|`enumerate()`関数でリストのインデックスと対応要素を同時に取得できます。|
|5|`enumerate()`の正体は`(インデックス,要素)`からできた一つのタプルです。タプルについては、次のレッスンで説明をします。|

<iframe height="260px" width="100%" src="https://enumerate.programminguec.repl.run?lite=true"></iframe>


<div style='display: none'>
## クイズ(メモ)

1. 以下のコードの実行結果を選んでください。

``` python=1
list_a = [3, 4, 5, 7, 9, 12, 13, 15, 17]
print(list_a[3:6])
print(list_a[2:])
print(list_a[:7])
```

- [ ] `[5, 7, 9]`
      `[4, 5, 7, 9, 12, 13, 15, 17]`
      `[3, 4, 5, 7, 9, 12, 13]`
- [ ] `[7, 12, 15]`
      `[4, 5, 7, 9, 12, 13, 15, 17]`
      `[4, 5, 7, 9, 12, 13, 15]`
- [x] `[7, 9, 12]`
      `[5, 7, 9, 12, 13, 15, 17]`
      `[3, 4, 5, 7, 9, 12, 13]`
- [ ] `[3, 6]`
      `[2]`
      `[7]`

2. 以下のコードの実行結果を選んでください。

``` python=1
arr = [2, 4, 6, 8, 10, 12]
for i in range(1, 6):
    arr[i - 1] = arr[i]
for i in range(0, 6): 
    print(arr[i], end = " ")
```

- [ ] `[2, 4, 6, 8, 10, 12, 12]`
- [x] `2 4 6 8 10 12 12`
- [ ] `[1, 3, 5, 7, 9, 11]`
- [ ] `1 3 5 7 9 11`

3. 以下のコードの実行結果を選んでください。

``` python=1
a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(a[::2])
print(a[::-1])
```

- [x] `[1, 3, 5, 7, 9]`
      `[9, 8, 7, 6, 5, 4, 3, 2, 1]`
- [ ] `[1, 2]`
      `[1, 2, 3, 4, 5, 6, 7, 8, 9]`
- [ ] `[8, 9]`
      `[9, 8, 7, 6, 5, 4, 3, 2, 1]`
- [ ] `[1, 2, 3]`
      `[1, 2, 3, 4, 5, 6, 7, 8, 9]`


4. 以下のコードの実行結果を選んでください。
``` python=1
numbers = [1, 2, 3, 4]
numbers.append(5) 
numbers.append(['a', 'b', 'c', 'd'])
print(len(numbers),numbers.index(5),numbers[5][2])
``` 
- [ ] `6 1 2`
- [ ] `5 0 5`
- [x] `6 4 c`
- [ ] `5 0 b` 

5. 以下のコードの実行結果が` ['a', 'a', 'b', 'b', 'c', 'c']` になるように、Aに入るコードとして正しいものを選んでください。
``` python=1
alist=['a', 'b', 'c']
for i in range(1, len(alist) * 2, 2):
    alist.insert(__A__)  
print(alist)
``` 
- [x] `i, alist[i - 1]`
- [ ] `i - 1, alist[i]`
- [ ] `i + 1, alist[i + 1]`
- [ ] `i - 1, alist[i]` 
</div>