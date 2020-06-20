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

# 辞書-その②
## 導入
前のレッスンで辞書の基本的な操作について説明をしました。今回は要素を列挙する方法と、ループによる辞書の操作について紹介をします。
## 解説
### ループを使わない列挙
```python=1
class_info = {'yuta': 25, 'yuka': 22, 'akane': 16}
print("キーの一覧:", class_info.keys())
print("\n値の一覧:", class_info.values())
print("\n(キー,値)ペアの一覧:", class_info.items())
```
|行番号|解説|
|---|---|
|2|`keys()`メソッドで辞書の`キー`の一覧を返します|
|3|`value()`メソッドで辞書の`値`の一覧を返します|
|4|`items()`メソッドで`キー`と`値`のペアを返します|

<iframe height="200px" width="100%" src="https://enume-noloop.programminguec.repl.run?lite=true"></iframe>

:::info
:bulb: 補足事項

`list(class_info.keys())`のように、結果を`list`型に変えることもできます。型変換のメリットは、変換後にリストのメソッドも適用することができることです。
:::

### ループで辞書中のデータを列挙
```python=1
class_info = {'yuta': 25, 'yuka': 22, 'akane': 16}
print("名前一覧：")
for name in class_info.keys():
   print(name)
print("\n年齢一覧:")
for age in class_info.values():
   print(age)
print("\n名前と年齢一覧:")   
for name_id, age_id in class_info.items():
   print(name_id, age_id)
```
|行番号|解説|
|---|---|
|3,6|ループを使って、`キー`や`値`を一つずつ本来の文字列型と整数型として、出力しました。これは上のようなループを使わない方法と比べて、データをより操作しやすくなります。|

<iframe height="330px" width="100%" src="https://enume-loop.programminguec.repl.run?lite=true"></iframe>

:::info
:bulb: 補足事項
```python=1
class_info = {'yuta': 25, 'yuka': 22, 'akane': 16}
for name in class_info:
   print(class_info[name])
```
前のレッスンの要素へのアクセス方法で説明しましたが、`class_info[name]`のように名前に対応する年齢を出力することもできます。
:::
### ループでネスト辞書を操作
```python=1
students = {
    "yusuke": {"age": 10, "city": "tokyo"},
    "takahiro": {"age": 11, "city": "kanagawa"},
    "naoko": {"age": 9, "city": "kyoto"},
} 
for name, info in students.items():
    print("name:", name)
    for stu_info in info:
        print(stu_info + ':', info[stu_info])
    print("\n")
```
|行番号|解説|
|---|---|
|1~5|ネスト辞書を作ります。|
|6|変数`name`の中身は生徒の名前で、`students`という辞書の`キー`にあたる部分です。`info`は辞書の`値`にあたる部分です。**この`info`自体もまた一つの辞書となっています。**|
|8,9|変数`stu_info`の中身は辞書`info`の`キー`にあたる`age`と`city`、そして`info[stu_info]`は`キー`に対応する`値`です。|

<iframe height="320px" width="100%" src="https://nest-loop.programminguec.repl.run?lite=true"></iframe>

<div style='display: none'>
## クイズ
1. 以下のコードの実行結果を選んでください。
```python=1
class_info = {'yuta': 25, 'yuka': 22, 'akane': 16}
print(list(class_info.items())[2])
```
- [ ] `('yuka': 22)`
- [x] `('akane', 16)`
- [ ] `['yuka': 22]`
- [ ] `['akane', 16]`

2. 以下のコードの実行結果を選んでください。
```python=1
fruits = {"Apple": "リンゴ",　"Banana": "バナナ",　"Melon": "メロン",　"Orange": "オレンジ"
}
fruits.pop("Melon")
print(list(fruits.values()))
```
- [ ] `['Apple', 'Banana', 'Orange']`
- [ ] `['Apple', 'Banana', 'Orange', 'Melon']`
- [x] `['リンゴ', 'バナナ', 'オレンジ']`
- [ ] `['リンゴ', 'バナナ', 'オレンジ', 'Melon']`

3. 四人の生徒の名前と点数は以下のように辞書型変数`score`に格納されています。四人の合計点を計算するために、Aに入るコードを以下から選んでください。
```python=1
sum_score = 0
score = {'yuta': 100, 'yuka': 75, 'akane': 86, 'aoki': 65}
for i in ___A___:
    sum_score += i
print(sum_score)
```
- [ ] `score.keys()`
- [x] `score.values()`
- [ ] `score`
- [ ] `score.items`

4.　辞書型変数`students`に４人の生徒の年齢と住む都市の情報が格納されています。`tokyo`に住んでいる生徒の名前を出力するために、A、Bに入るコードとして正しいものを以下から選んでください。
```python=1
students = {
    "yusuke": {"age": 10, "city": "tokyo"},
    "takahiro": {"age": 11, "city": "kanagawa"},
    "naoko": {"age": 9, "city": "kyoto"},
    "asuka":{"age": 15, "city": "tokyo"}
} 
for name_id in students.keys():
    if students[__A__][__B__] == 'tokyo':
        print(name_id)
```
- [x] A:`name_id`, B:`'city'`
- [ ] A:`students.keys`, B:`city`
- [ ] A:`name_id`, B:`city`
- [ ] A:`city`, B:`'name_id'`

5. 辞書型変数`students`から`asuka`さんに関する情報を全て削除するために使うコードを以下から選んでください。
```python=1
students = {
    "yusuke": {"age": 10, "city": "tokyo"},
    "takahiro": {"age": 11, "city": "kanagawa"},
    "naoko": {"age": 9, "city": "kyoto"},
    "asuka":{"age": 15, "city": "tokyo"}
} 
```
- [x]  `del students['asuka']`
- [x]  `students.pop('asuka')`
- [ ]  `students.popitem('asuka')`
- [x]  `students.popitem()`
</div>