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

# 12. 例外処理
## 導入
`Python`のプログラムを正しく書いたからといって、全くエラーが起きないという保証はありません。例えば、ファイルにアクセスしようとしてアクセス権がなかったら、エラーが発生します。このように、`Python`はスクリプトを実行する際に問題が発生すると色々なエラーが発生させているのです。こうしたエラーを扱うのが**例外処理**構文です。
## 解説

### 1.エラーと例外
`Python`を使っていると、様々なエラーメッセージを目にすることがあったと思います。これらは主に**構文エラーと例外**の二種類に分けることができます。

以下の文を実行すると、構文エラーが出ます。
```python=1
print(hello world)
```
エラーのメッセージ
```python
#エラーメッセージ
File "main.py", line 1
    print(hello world)
                ^
SyntaxError: invalid syntax
```
文字列の前後を挟むクォーテーションを抜けるような`Python`の文法に違反した場合は`SyntaxError`が出ます。

以下の文を実行すると、例外が出ます。
```python=1
a = 10
b = 0
print(a / b)
```
```python
# エラーメッセージ
Traceback (most recent call last):
  File "main.py", line 3, in <module>
    print(a / b)
ZeroDivisionError: division by zero
```
数値をゼロで割ってはいけないような間違いがあっても、プログラムは一度実行され、その実行中にそのエラーが発見されます。つまり、例外は実行中に検出されるものです。

よくある例外の例：

```python=1
>>> 2 + a * 4
...
NameError: name 'a' is not defined
```
変数`a`が定義されてないまま使用すると、`NameError`が発生します。
```python=1
>>> '2' + 2
...
TypeError: Can't convert 'int' object to str implicitly
```
文字列と数字の足し算はできないため、`TypeError`が発生します。
```python=1
>>> num = "zero"
>>> Div = 10 / int(num)
...
ValueError: invalid literal for int() with base 10: 'zero'
```
文字列"Zero"に`int()`を適用できないため、`ValueError`が発生します。

:::info
:bulb:
`Python`のビルトイン例外は他にも沢山あり、興味がある人はこれを参考にしてください。
[**`Python`のビルトイン例外**](https://docs.python.org/3/library/exceptions.html#bltin-exceptions):link:
:::
### 2.`try...except..`構文
何かしらのエラーが起きたら、そこでプログラムはエラーを出して終了してしまいます。それはちょっと困りますよね。`Python`にはエラーに対処するための構文が用意されているのです。それが、以下の書式で書かれている`try...except..`構文です。
```python=1
try:
    # 処理
except:
    # エラーが起きた時の処理
```
まずは、簡単なBMIを求めるプログラムでエラー対処を見ていきましょう。
```python=1
weight = float(input("体重(kg):"))
height = float(input("身長(m):"))
bmi = weight / (height * height)
print("BMI:", bmi)
```
この時、`height`の入力値が0となった場合、`ZeroDivisionError`が発生し、プログラムは途中で止まります。

![](https://i.imgur.com/wnkbLUa.png)

そこで、`try...except..`構文を用いてユーザーが入力ミスをした時には、改めて入力を促すように改良してみましょう。
```python=1
while True:
    try:
        weight = float(input("体重(kg):"))
        height = float(input("身長(m):"))
        bmi = weight / (height * height)
        break;
    except:
        print("入力ミスがあります。再度入力してください。")
print("BMI:", bmi)
```
|行番号|解説|
|---|---|
|1|全体をwhile構文で囲んで、条件を満たす限り実行し続けます。|
|2|`try`の中に、実際の処理を書きます。|
|3~5|処理の中身です。ここはBMIの計算式です。|
|6|3行目から5行目までの処理の部分で、エラーがなければ、whileループから抜けて、9行目を実行します。エラーがあった場合は、一旦7,8行目を実行して、再度3行目から入力を求めます。|
|7,8|`except`の後ろにエラーが発生した時に対処を書きます。|

### 3. 特定のエラーを補足する

```python=1
s = input("数値を入力してください：")
v = 100 / float(s)
print(v)
```
実行して、値を入力すると、入力値に対応して、以下のエラーメッセージが考えられます。
|入力|入力に対応するエラー|
|:---:|:---:|
|`0`|`ZeroDivisionError`|
|文字列|`ValueError`|
この時、プログラムは途中で止まり、最後まで実行できなくなりますね。ここで、`try...except..`構文で特定のエラーキャッチします。

```python=1
s = input("数値を入力してください：")
try:
    v = 100 / float(s)
    print(v)
except ValueError as e:
    print(e)
except ZeroDivisionError as e:
    print(e)
except:
    print("その他のエラー")
```
|行番号|解説|
|---|---|
|2~4|`try`の後に実際の処理を書きます。|
|5~8|`except エラーの名前　as 変数名`のように、変数を通して、エラーの詳細を得ることができます。|
|9~10|上記以外のエラーが出た場合は、`その他のエラー`と出力します。|
また、違う種類のエラー(`ValueError`と`ZeroDivisionError`)に対して、同じ処理を行う場合は、分岐せず、以下のように書いても大丈夫です。
```python=1
s = input("数値を入力してください：")
try:
    v = 100 / float(s)
    print(v)
except (ValueError, ZeroDivisionError) as e:
    print(e)
except:
    print("その他のエラー")
```
### 4. elseとfinallyの使い方

`try`節で例外が発生せず正常終了したあとに行う処理を`else`節に指定できます。例外が発生して`except`でキャッチした場合は`else`節の処理は実行されません。書式は以下のようになります。
```python=1
try:
    # 処理
except:
    # エラー処理
else:
    # 例外が発生してない時に実行
```
```python=1
my_dict = {"a":1, "b":2, "c":3}
try:
    value = my_dict["a"]
except KeyError:
    print("KeyError!")
else:
    print("No error")
```
|行番号|解説|
|---|---|
|1|辞書型変数`my_dict`を定義します。|
|2~5|`a`というキーに対応する値を変数`value`に渡します。この時、予想されるエラーは`a`というキーが存在しない時に発生する`KeyError`です。(ここで`a`というキーは存在してますので、エラーは発生しない)|
|6~7|エラーがなかったので、`else`節の処理を実行します。|

また、例外が発生した場合もしなかった場合も常に最後に行う処理を`finally`節に指定できます。書式は以下のようになります。
```python=1
try:
    # 処理
except:
    # エラー処理
finally:
    # 必ず実行する処理
```

```python=1
my_dict = {"a":1, "b":2, "c":3}
try:
    value = my_dict["d"]
except KeyError:
    print("KeyError")
finally:
    print("実行完了")
```
|行番号|解説|
|---|---|
|2~5|`d`というキーは辞書`my_dict`に含まれてないので、ここで`KeyError`が発生します。|
|6~7|例外処理の有無に関係なく、`finally`の処理は実行されます。|

:::info
:bulb: 補足：エラーを発生させる

エラーは`Python`が発生させるだけでなく、任意のタイミングでわざとプログラム中でエラーを発生させることができます。それが`raise`です。以下の書式で書きます。
```python=1
raise エラー種類(メッセージ)
```
少し難しい内容なので、興味がある人は自分で検索してみてください。
:::

<div style="display: none">

1. 以下のプログラムの実行結果を選んでください。

```python=1
def foo():
    try:
        return 1
    finally:
        return 2
k = foo()
print(k)
```
- [ ] `1`
- [x] `2`
- [ ] `出力なし`
- [ ] `エラーメッセージ`

2.  pythonで`1 + '1'`を実行するとエラーが発生します。発生するエラーの種類を選んでください。

- [ ] `NameError`
- [ ] `ValueError`
- [x] `TypeError`
- [ ] `SyntaxError`

3. 以下のプログラムを実行すると、エラーが発生します。発生するエラーの種類を選んでください。

```python=1
my_dict = {"a":1, "b":2, "c":3}
print(my_dict["d"])
```
- [ ] `IndexError`
- [ ] `ValueError`
- [ ] `TypeError`
- [x] `KeyError`

4. 以下のプログラムの出力結果を選んでください。
```python=1
def foo():
    try:
        print(1)
    finally:
        print(2)
foo()
```
- [ ] `1`
- [ ] `2`
- [x] `1`と`2`
- [ ] 出力なし

5. 以下のプログラムの出力結果を選んでください。
```python=1
my_dict = {"a":1, "b":2, "c":3}
try:
    value = my_dict["a"]
except KeyError:
    print("KeyError")
else:
    print("No error")
finally:
    print("Finish")
```
- [ ] `KeyError`
- [ ] `No error`
- [ ] `Finish`
- [x] `No errorとFinish`
</div>