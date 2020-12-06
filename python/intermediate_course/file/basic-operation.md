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

# 13. ファイル操作の基本
## 導入
`Python`を使うと色々な仕事や作業を自動化することができます。もちろん、皆さんが普段よく扱っているファイルの読み書きも簡単にできます。今回は**ファイル操作**について説明をします。
## 解説

ファイルの読み書きを行う際には、定められた手順に沿ってプログラムを書く必要があります。ファイルの読み書きは次の手順に沿って行います。

:::danger
:fire: **重要**
1. ファイルを開く
2. ファイルの読み書きの処理をする
3. ファイルを閉じる

開いて作業をしたら、必ず最後に閉じるという手順です。
:::

以下のコード例で扱う`test.txt`の中身です。
```=
line 1
line 2
line 3
```

### 1. ファイルの読み書き
```python=1
# read()で読み込む
a_file = open("test.txt", "r")
data = a_file.read()
print(data)
a_file.close()
```
<iframe height="130px" width="100%" src="https://repl.it/@programminguec/read?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

|行番号|解説|
|---|---|
|1|関数`open()`でファイルを開きます。一つ目の引数にファイルの位置を指定します。これは必ず指定する必要があります。次にモードという引数を指定します。`"r"`はファイルを読み込みモードで開くという意味です。読み込みモードで開く場合だけ、指定しなくても大丈夫です。|
|2|`read()`メソッドでファイルの中身を読み込みます。`read(10)`と引数を指定する場合は、最初の10文字だけ読み込まれます。指定しない場合はファイルの中身が全て読み読み込まれます。|
|3|読み込まれた内容を出力します。`read()`で読み込まれた内容は文字列型です。|
|4|最後にファイルを閉じます。|

---

```python=1
# readlines()で読み込む
a_file = open("test.txt", "r")
data = a_file.readlines()
print(data)
a_file.close()
```
<iframe height="100px" width="100%" src="https://repl.it/@programminguec/readlines?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

一番目のコード例とほぼ同じですが、二行目で`readlines()`というメソッドを使いました。これは、ファイルの中身を一行ずつ読み込んで、ひとつのリストとして値を格納します。実行結果で確認してみてください。

---

この例でファイルへの書き込みを説明します。
```python=1
# write()
a_file = open("test.txt", "a")
a_file.write("Hello python\n")
a_file.close()
```

|行番号|解説|
|---|---|
|2|ファイルに追加形式で内容を書き込む時、引数のモードに`a`を指定します。|
|4|最後にファイルを閉じます。|


さらに、書き込んだ内容を確認したい時はどうしましょう？

```python=1
# write()
a_file = open("test.txt", "a+")
a_file.write("Hello python\n")
a_file.seek(0)    # ファイルのポインターを先頭に移動
a = a_file.read()
print(a)
a_file.close()
```
<iframe height="180px" width="100%" src="https://repl.it/@programminguec/write?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

繰り返して実行すると`Hello python`は何度も追加されます。

基本的に上で紹介した内容と同じですが、2ヶ所の違いがあります。
|行番号|解説|
|---|---|
|2|上のプログラムのように、追記で書き込んだあとにファイルの中身をもう一度読み込みたい場合は、後ろに`+`を入れます。詳しくは以下の補足の部分を読んでください。|
|4|ファイルを一度書き終えた時は、内部のポインター(:pencil2:ペンだと思えばいい)の位置はもちろん一番後ろにありますよね。そして、頭から中身を読みたい場合はその位置を先頭に移動させる必要があります。ここで`seek()`というメソッドを使います。|



:::info
:bulb: 補足

ここでよく使うモードをまとめます。他にもありますが、使う頻度が一番高いのは以下の四種類です。

|モード|説明|
|---|---|
|'r'|ファイルを読み込みモードで開く|
|'w'|ファイルを書き込みモードで開き、既存の内容があると全て上書きする|
|'a'|書き込み用に開き、ファイルが存在すれば末尾に追記する|
|'+'|`r+`, `w+`, `a+`のように、モードの後ろに`＋`記号を入れると、もとのモードに読み込みと書き込みの機能を同時に与えます。|

:::

### 2. with構文
ファイルの処理は他の処理と同じようにコンピューターのメモリ上で動作します。メモリの空き状況はコンピューターの実行速度に影響を与えるので、不要であるときは常にメモリを解放すべきです。ファイル操作の場合は`close`することでメモリの解放ができます。何らかのエラーでどうしても閉じることができない場合は、以下のように、`try-finally`で解決できます。

```python=1
a_file = open("test.txt", "w")
try:
    a_file.write("write something here.\n")
    a_file.write("write more thing here.\n")
    # 別の何らかの処理
finally:
    a_file.close()  
```

ただし、`try-finally`の例外構文を使うと、どうしても記述が長くなりがちです。そこで、`with`構文が用意されています。この構文を使うと、自動的に処理の最後に`close`メソッドを呼んでくれます。書式は以下のようになります。
```python=1
with open(ファイル名) as 変数:
    # ここに処理を記述
```

```python=1
with open("test.txt", "w") as f:
     f.write("write something here.\n")
     f.write("write more thing here.\n")
```

:::info
:bulb: 補足

Python3 では`with`構文が推奨されているので、必ず`with`構文を使ってください。また、`with`構文は`Python`のネットワークプログラミングでも使いますが、ここではまずファイル操作での使い方を覚えましょう。
:::


### 3. テキストファイルの処理

最後に一つの実践例を見ていきましょう。

プログラムで使う`cal.txt`の中身は以下とします。
```=
12 32
544 24
73 26 65
```

`cal.txt`を読み込んで、ファイル中の数字の和を求めてみましょう。
```python=
with open("cal.txt","r") as f:
    total = 0
    for line in f:
        numlist = line.split()
        for a in numlist:
            number = int(a)
            total = total + number
print("The sum is", total)         
```
|行番号|解説|
|---|---|
|1|`with`構文で`cal.txt`ファイルを開き、`f`に格納します。|
|2|総和を計算するために初期値を`0`にします。|
|3,4|外側のループでは行を取り出し、各行の文字列を`split()`メソッドでスペースごとに区切って、文字列型変数`numlist`に格納します。|
|5\~7|`numlist`に格納した数字を逐次`total`に加算していきます。`numlist`に格納された数字は文字列型なので、演算する場合、整数型に変換する必要があります。|
|8|結果を出力します。|

<div style="display: none">

## クイズ

1. ファイル`test.txt`を読み込みのために開く時に記述するコードを以下から全て選んでください。

- [ ] `open('test.txt', 'w')`
- [x] `open('test.txt','r')`
- [x] `open('test.txt')`
- [ ] `open('test.txt', 'rb')`

2. ファイル操作において、推奨されている操作を以下のどの操作ですか？

- [x] `with`構文を使用する
- [ ] `close`メソッドでファイルを閉じる
- [ ] `try-finally`構文を使用する
- [ ] 特になし

3. 現在のディレクトリはPythonフォルダーの下にある時、ファイル1.cppまでの正しい相対パスを選んでください。

programming/
│
├── python/ ←現在
│   ├── 1.py
│   └── 2.py
│
├── cpp/
│   └── 1.cpp
│
└── other.csv

- [x] `../python/cpp/1.cpp`
- [ ] `/python/cpp/1.cpp`
- [ ] `../python/1.cpp`
- [ ] `/python/1.cpp`

4. ファイルを一つの文字列として読み込むメソッドを以下から選んでください。

- [ ] `.readline()`
- [ ] `.readlines()`
- [x] `.read()`
- [ ] `.read_to_str()`

5. `temp.txt`を追加の書き込みモードで開くために使うコードを以下から選んでください。

- [ ] `outfile = open('temp.txt', 'a')`
- [x] `outfile = open('temp.txt', 'a+')`
- [ ] `outfile = open(file = 'temp.txt', 'w')`
- [ ] `outfile = open(file = 'temp.txt', 'w+')`

</div>



