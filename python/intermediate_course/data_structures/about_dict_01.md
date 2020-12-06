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

# 4. 辞書-その①

## 導入
今まではリストとタプルについて学びました。これらは全てインデックス(例:```a[1]```)による要素へのアクセスが可能です。しかし、これから説明する辞書型はインデックスで要素へのアクセスはできません。そして、この辞書型は皆さんが普段使ってる英和辞書と非常に近いイメージです。


## 解説

### 辞書の定義
辞書は一つの単語に対して必ず一つ以上の解釈がついています。つまり、単語と解釈の間に**対応関係**があります。


Pythonではこのような対応関係を辞書型で表現します。
では、実際の使い方を見ていきましょう。

![](https://i.imgur.com/Ds9tepn.png)

```キー```を英単語の{```key```|キー}、```値```を英単語の{```value```|バリュー}で書くことも多いです。

### 辞書の作り方
```python=1
# 生徒の名前と年齢を格納する辞書を作成
# 方法1
class_info = {'yuta': 25, 'yusuke': 18, 'yuka': 22}
print(class_info)
```
<iframe height="100px" width="100%" src="https://repl.it/@programminguec/createdict1?lite=1&outputonly=1"></iframe>

```python=5
# 方法2
class_info = {}
class_info['yuta'] = 25
class_info['yusuke'] = 18
class_info['yuka'] = 22
print(class_info)
```
<iframe height="100px" width="100%" src="https://repl.it/@programminguec/createdict2?lite=1&outputonly=1"></iframe>

|行番号|解説|
|---|----|
|3|辞書の定義に従って、大括弧に```キー```:```値```をカンマで区切って、辞書を作り、また```キー```や```値```は文字列型の時、前後をクォーテーションで囲む必要があります。|
|6|空の辞書を作ります。|
|7,8,9|空の辞書に```辞書型の変数名[キー] = 値```の形で要素を追加します。|

:::danger
:fire: **重要**

**辞書の`キー`のデータ型は必ず変更不可能な型のみです**。例えば、前回のレッスンでやったタプル型、または文字列型、整数型は辞書の`キー`として使えますが、リスト型は変更可能なので、`キー`として使うことはできません。この理由は、Python言語の辞書型はハッシュテーブルで実装され、標準で提供されています。詳しく知りたい人は`ハッシュテーブル`、`連想配列`といったキーワードで検索をしてみてください。
:::
```python=1
# 方法3    
class_info = dict(yuta = 25, yusuke = 18, yuka = 22)
print(class_info)
```
<iframe height="100px" width="100%" src="https://repl.it/@programminguec/createdict3?lite=1&outputonly=1"></iframe>

```python=4
# 方法4  
class_info = dict([('yuta', 25), ('yusuke', 18), ('yuka', 22)])
print(class_info)
```
<iframe height="100px" width="100%" src="https://repl.it/@programminguec/createdict4?lite=1&outputonly=1"></iframe>

|行番号|解説|
|---|----|
|2|```dict(キー=値,キー=値,...)```の形式で```キー```と```値```を辞書に登録します。この方法で辞書を作る時、```キー```は文字列型であっても、クォーテーションで囲む必要がないです。|
|5|`キー`と`値`のペアをタプルに登録し、タプルのリストから辞書を作ることもできます。|

:::info
:bulb: 補足事項

他には`zip()`関数を使って、2つのリストの値をそれぞれ`キー`と`値`とした一つの辞書を作成する方法があります。興味がある人は自分で調べてみてください。[**参考リンク**](https://docs.python.org/ja/3/library/functions.html#zip):link:
:::

### 要素へのアクセス、確認

```python=1
#生徒の名前と年齢を格納する辞書を作成
class_info = {'yuta': 25, 'yusuke': 18, 'yuka':  22, 'akane': 16}

# 辞書のキーに対応する値にアクセス
print('yuta' + 'の年齢:', class_info['yuta'])
print('yuta' + 'の年齢:', class_info.get('yuta'))

# キーの存在を確認
print('akane' in class_info)
print('akane' in class_info.keys())

# 値を修正
class_info['yuta'] = 20
print('yutaの年齢を修正後の辞書:', class_info['yuta'])

# キーを追加
class_info['akiko'] = 30
print('akikoを追加した後:', class_info)

#　キーを削除
del class_info['yuta']
print('yutaを削除した後:', class_info)
```
|行番号|解説|
|---|---|
|5,6|辞書型はリストやタプルと違って、`class_info[1]`のように、インデックスで要素を確認することができないです。この場合は`辞書型変数[キー]`または辞書の`get()`でキーに対応する値をアクセスできます。|
|9,10|`キー in 辞書型変数名`でその`キー`は辞書中にあるかどうかを確認、ある場合は`True`、ない場合は`False`を返します。また、辞書の`keys()`メソッドを使っても同じ結果です。|
|13|`辞書変数[キー]=更新値`で値を更新します。|
|17|指定する`キー`が存在しない場合は、辞書にその```キー```は追加されます。|
|21|delの後ろに削除したい`キー`を指定し、辞書から該当する`キー`と`値`を削除できます。|
    
<iframe height="240px" width="100%" src="https://repl.it/@programminguec/access-elem?lite=1&outputonly=1"></iframe>

### 辞書中の辞書

```python=1
students = {
    "yusuke": {"age": 10, "city": "tokyo"},
    "takahiro": {"age": 11, "city": "kanagawa"},
    "naoko": {"age": 9, "city": "kyoto"},
} 
print('yusukeの個人情報:', students['yusuke'])
print('naokoが住む都市:', students['naoko']['city'])
```
|行数|解説|
|---|---|
|1~5|生徒の名前を`キー`、年齢と住む都市を`値`として辞書型変数`students`に格納します。そして、年齢と都市はまた`キー`となって、それに対応するする`値`と組み合わせて、辞書中の辞書となっています。|
|6|`students['yusuke']`は、yusukeの全ての個人情報にアクセスできます。出力例結果は一つの辞書です。|
|7|`students['naoko']['city']`は、naokoの個人情報中の住む都市に関する情報にアクセスできます。|

<iframe height="120px" width="100%" src="https://repl.it/@programminguec/nestdict?lite=1&outputonly=1"></iframe>


<div style='display: none'>
## クイズ

1. 辞書型について正しい選択肢を以下から選んでください。 
- [x] 辞書型は`キー`と`値`のペアから構成されます。
- [x] 辞書型の要素はインデックスによるアクセスはできません。
- [x] 辞書型の`キー`として使えるのは変更不可能なデータ型のみです。
- [x] 辞書型の`キー`に対する`値`はどんなデータ型でも大丈夫です。

2. 辞書型の`キー`として使用可能なデータ型を以下から選んでください。
- [ ] リスト型
- [x] タプル型
- [x] 文字列型
- [x] 整数型

3. 以下のコードの実行結果を選んでください。
```python=1
dict1 = {"key1": 1, "key2": 2}
dict2 = {"key2": 2, "key1": 1}
print(dict1 == dict2)
```
- [x] True
- [ ] 1
- [ ] False
- [ ] 0 

4. 以下のコードの実行結果を選んでください。
```python=1
class_info = {'yuta': 25, 'yusuke': 18, 'yuka': 22}
class_info['yuka'] = 30
class_info['akane'] = 15
del class_info['yuta']
print(class_info)
```
- [ ] `{'yuta': 25, 'yusuke': 18, 'yuka': 22}`
- [x] `{'yusuke': 18, 'yuka': 30, 'akane': 15}`
- [ ] `{'yuta': 25, 'yusuke': 18, 'yuka': 30}`
- [ ] `{'yusuke': 18, 'yuka': 22, 'akane': 15}`

5. mikiさんの年齢にアクセスするための正しいコードを以下から選んでください。
```python=1
student = {1: {'name': 'yuta', 'age': '27'},
           2: {'name': 'miki', 'age': '22'}
          }
```
- [ ] `student[1][1]`
- [x] `student[2]['age']`
- [ ] `student[1]['age']`
- [ ] `student[2][age]`
</div>