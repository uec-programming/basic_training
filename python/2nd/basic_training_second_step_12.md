###### tags: `Python_2nd_Step`
# 12　fizzbuzz　フィズバズ

|要　点|説　明|
|---|---|
|プログラムの機能|欧米の退屈しのぎ用のfizzbuzzという遊び<br/>数名で遊ぶ。0からカウントをスタートする。3の倍数が来たらFizzと言う。5の倍数が来たらBuzzと言う。3と5の公倍数が来たらFizzBuzzと言う。間違ったら負け。<br/>次のようになる。<br/>0, 1, 2, fizz（3の倍数）, 4, buzz（5の倍数）, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz（3と5の公倍数）, 16, 17, fizz, ...<br/>「プログラムを書けるプログラマ」を見分けるためのテストにも使われる有名なテーマ。|
|得られる知識|if文の応用|
|手順|（1）ユーザにfizzbuzzで遊ぶ最後の数字を入力してもらう。（終わりの数を設定しないと永遠に続くため）<br/>（2）0からスタートして1ずつ増やし、ユーザが指定した数までい　く。その間は以下の条件にしたがう。<br/>3の倍数がきたらfizzと表示<br/>5の倍数がきたらbuzzと表示<br/>3と5の公倍数がきたらfizzbuzzと表示<br/>（3）結果を表示する。|

ファイル名は2_12_fizzbuzz.py
```python=
# fizzbuzzプログラム
n = int(input('最後の数を入力してください '))
for i in range(1, n):
    if i % 15 == 0:
        print("fizzbuzz", end=', ')
    elif i % 3 == 0:
        print("fizz", end=', ')
    elif i % 5 == 0:
        print("buzz", end=', ')
    else:
        print(i, end=', ')
```

## コードの解説
|No|行|対象|説明|
|---|---|------------|---|
|1|2|`'最後の数を入力してください '`|例として101を入れてみましょう。|
|2|3|`for i in range(1, n):`|range()関数の引数が1とnなので、1から100までの範囲でfizzbuzzをやります。|
|3|4|□□□□`if i % 15 == 0:`|3と5の公倍数は15です。<br/>下記のように表記しても可能です。<br/>`if i % 3 == 0 and i % 5 == 0:`|
|4|5|□□□□□□□□`print("fizzbuzz", end=', ')`|コンマ区切りで表記させる方法です。<br/>`end = ‘, ’`を外すと、縦長に表記できます。|