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

# リスト-その①

## 導入
学校で生徒の成績データを管理する時に、一人に対して一つの変数を利用すると、かなり効率が悪いです。`Python`には、複数の値を1つの変数で管理するための仕組みが用意されています。**リスト**を使うと、たった1つの変数に、生徒全員の成績を記録することができます。


## 解説
### リストの定義
リストは**一列のデータ**を意味します。`Python`ではリストをこのように記述します。
![](https://i.imgur.com/nD4nOfu.png)

強制ではないですが、「**,**(コンマ)」の後ろにスペースを入れるとコードとして綺麗です。

### 1.　リストの作り方
```python=1
# リストの作り方
num_list = [10, 20, 30, 40]
print(num_list)
words_list = ['uec', 'programming', 'python']
print(words_list)

# rangeを使って、リストを生成
num_seq = range(10)
num_list = list(num_seq)
print(num_list)
```

| 行 | 解説 |
|-----|-----|
|2|リストを作るには、**角括弧**の中にコンマで区切って複数の要素を記述、この行では整数型の要素を含むリストを作りました。|
|4|整数型以外に、文字列型の要素をリストに格納することもできます。この場合は、各要素の前後をクォーテーションでで囲む必要があります。|
|8|`range()`関数を使って、`range`型の`num_seq`に`0~9`を格納します。|
|9|`range`型の`num_seq`を`list()`でリスト型に変換をします。|

<iframe height="150px" width="100%" src="https://1-1.programminguec.repl.run/?lite=true"></iframe>

:::info
:bulb: 補足事項
1. 任意のデータ型をリストに格納できます。
2. `num_list = []` や `num_list = list()` のように空のリストを作ることもできます。
3. `range`型のデータは変更不可能で、リスト型の変数は変更可能です。
:::

### 2.　リストの要素にアクセスする方法

#### 一次元のリスト

```python=1
rainbow = ['red', 'orange', 'yello', 'green', 'blue', 'indigo', 'violet']
print(rainbow[0], rainbow[3], rainbow[-1], rainbow[-4])
rainbow[6] = 'black'
print(rainbow)
```
![](https://i.imgur.com/yQgkPdF.png)

|行|解説|
|---|---|
|1|リスト型変数`rainbow`に虹の七色を表す英単語を文字列要素として格納します。|
|2|下図のように、リストの各要素は前から順番に、0から始まる番号で管理され、この番号をインデックスといいます。また後ろからは`-1,-2...`の順番で管理されます。|
|3|上の補足事項に書いたように、リストの要素は変更可能なので、ここで6番目の色を変更してもコードは正しく実行されます。|

<iframe width="100%" height="115" src="https://1-2.programminguec.repl.run"></iframe>


#### リスト中のリスト

リスト中のリストを**2次元リスト**と呼びます。

``` python=1
world_cup_winners = [[2006, "Italy"], [2010, "Spain"],
                     [2014, "Germany"], [2018, "France"]]
print(world_cup_winners[1])
print(world_cup_winners[1][1])  
```
<img src="https://i.imgur.com/xrMhlYD.png" width=500 height=180/>

|行|解説|
|---|---|
|1,2|リスト型を要素として、リストに格納します。上の例はリスト`world_cup_winners`に過去4回の大会の開催年と優勝国を格納しました。|
|3|`world_cup_winners[インデックス]`のように、二次元リストにおいて、一つのインデックスで参照できるのはインデックスに該当する**行**の情報です。|
|4|`world_cup_winners[インデックス1][インデックス2]`のように、二つのインデックスを使うと、**一つ目は行情報,二つは該当する行の列情報です。**|


<iframe width="100%" height="115" src="https://1-3.programminguec.repl.run"></iframe>

### 3.　リストとfor構文の組み合わせ
``` python=1
points = [58, 68, 90, 57, 78, 45, 98, 62, 80, 66]
sum_point = 0
for i in points:
    sum_point += i
print('Sum:',sum_point)
```

|行|解説|
|---|---|
|1|生徒の点数のリストを変数`points`に格納します。これで複数の生徒の点数を一つの変数で管理できます。|
|2|合計を計算するために、変数`sum_point`の初期値をゼロとします。|
|3|ループ変数`i`の繰り返し範囲として、リスト`points`を指定します。これでリストの各要素の値(生徒の点数)が、変数iにセットされます。|
|4|`sum_point`の値に、`i`を加算して、10名の生徒の合計点を求めます。|

<iframe width="100%" height="115" src="https://1-4.programminguec.repl.run"></iframe>

``` python=1
student_list = [['A001', 'keita'],
                ['A002', 'makoto'],
                ['A003', 'haruka'],
                ['A004', 'takahiro']]
print('生徒の名前だけ出力:')
for i in range(len(student_list)):
    print(student_list[i][1])
```

|行|解説|
|---|---|
|1~4|生徒の学生番号と名前を格納する2次元リスト`student_list`を定義します。|
|6|`len(student_list)`で`student_list`の長さを求め、それを`range`関数の範囲として使います。ここでの長さは4なので、ループ変数`i`の変化範囲は`0`から`3`までです。|
|7|`student_list[i][1]`とは`i`行目の`1`番目の要素を指します。ここでは、名前の列にあたります。|

<iframe height="165px" width="100%" src="https://1-5.programminguec.repl.run?lite=true"></iframe>


<div style='display: none'>

## クイズ例

1. リストの作り方として、正しいものを選んでください。
- [x] `new_list = []` 
- [ ] `new_list = ()` 
- [x] `new_list = ['hello', '123', 123, 'python']`
- [x] `new_list = list()`

2. 以下のコードの実行結果を選んでください。
<div class = 'code'>

``` python=1
a=[3] 
alist=[1, 2, 3, 4, 5] 
print(a in alist)
```

- [ ] `0`
- [x] `False`
- [ ] `1`
- [ ] `True`


3. 以下のコードの実行結果を選んでください。


``` python=1
rainbow = ['red','orange','yello','green','blue','indigo','violet']
print(rainbow[-3][-3], rainbow[0][2], rainbow[-2], rainbow[2])
```

- [x] `l d indigo yellow`
- [ ] `r e yellow blue`
- [ ] `i v blue violet`
- [ ] `a b green blue`

4. 以下はまさや君の友達の誕生日を格納するリストです。まさや君は今みずきさんの誕生日の日付(月-日)を出力しようとしています。アンダーラインに入る正しいコードを以下から選んでください。
 
``` python=1
friends_birthday=[['yuta','1998','6-29'],
                  ['akane','1996','7-18'],
                  ['mizuki','1995','7-28']] 
print(________)
```


- [x] `friends_birthday[2][2]`
- [x] `friends_birthday[-1][-1]`
- [x] `friends_birthday[-1][2]`
- [x] `friends_birthday[2][-1]`

5. 以下のコードを実行すると、エラーメッセージが表示されます。以下の選択肢からエラーが発生する行の番号を選んでください。

``` python=1
num = [5, 4, 3, [2,1], 0]
print(num[0])
print(num[3][0])
print(num[5])
print(num[3][-1])
```
- [ ] `2行目`
- [ ] `3行目`
- [x] `4行目`
- [ ] `5行目`
</div>



