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

# 11. 再帰関数

## 導入

今回は、関数の中で、その関数自身を呼び出す「**再帰**」を説明します。関数の中で関数を呼び出すなんていうと、ちょっとややこしいのですが、いくつかの実例で考えながら、進めていきましょう。

## 解説

:::info
:bulb: 補足

今回の内容を順調に理解するために、まずはCS解説第5章-再帰処理の話で再帰の基本を復習or勉強してから取り組むことをお勧めします。[**CS解説-再帰処理の話**](https://www.uec-programming.com/e-learning/irohaboard/contents_questions/index/105):link:
:::

### 1. ループと再帰

一部のプログラミング言語(例：`Lisp`)は、「**再帰**」をループの代わりに使用します。つまり、ループで実装できるものは必ず再帰でも実装できます。しかし、その逆は成り立ちません。詳しい理由はまたあとで説明します。

ループと再帰の関係を実感してもらうために、まずは簡単な0から4までの整数を出力するプログラムを見てみましょう。

```python=1
#ループ
for i in range(5):
    print(i)
```

`range(5)`を使って、0~4までの数の列を生成し、出力をします

```python=1
#再帰
def print_num(i):
    if i >= 5:
        return 0
    print(i)
    print_num(i+1)
print_num(0)
```
|行番号|解説|
|---|---|
|2|関数`print_num()`を定義し、引数に`i`を指定します。|
|3,4|`i`が5以上になった場合、関数は終了します。|
|5,6|それ以外の場合、つまり`i`が5未満の時、`i`の値を出力して、**さらに関数自身を呼び出して、引数に`i+1`を指定します。**|
|7|最後に、関数`print_num()`を呼び出し、引数に具体的な数値0を指定し、プログラムは`print_num(0)⇒print_num(1)...⇒print_num(4)`の順番で実行されていきます。|

<iframe width="750" height="350" frameborder="5" src="http://pythontutor.com/iframe-embed.html#code=def%20print_num%28i%29%3A%0A%20%20%20%20if%20i%20%3E%3D%205%3A%0A%20%20%20%20%20%20%20%20return%200%0A%20%20%20%20print%28i%29%0A%20%20%20%20print_num%28i%2B1%29%0Aprint_num%280%29&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>


上の例からわかるように、再帰の一般的な書き方は以下のようになります。
```python=1
# 再帰のテンプレート
def func(引数):
    if 終了条件:
        return 値
    何かの処理を行う
　  func(引数)　　#自分を呼び出す
```
:::danger
:fire: **重要**

再帰のポイント①

再帰関数を実装する時に一番大事なことは、終了条件を決めることです。例えば、上の例の場合`i>=5`は終了条件となります。この終了条件は、関数の出口とも呼びます。<br>終了条件がないと、プログラムは永遠に止まらずに実行し、最後はスタックオーバーフローになり、正しく実行できなくなります。

:::

### 2. 総和を再帰で実装
総和を求めるプログラムで再帰の理解を深めていきましょう。
```python=1
n = 0
for i in range(11):
    n += i
print(n)
```
|行番号|解説|
|---|---|
|1|加算の初期値を0と設定します。|
|2,3|`i`の値は0から10までの整数値で、それぞれ`n`に加算していきます。|
|4|`n`は最終的に総和になり、出力します。|
```python=1
def func(n):
    if n == 0:
        return 0
    return func(n-1) + n
print(func(10))
```
|行番号|解説|
|---|---|
|1|関数`func()`を定義します。nは引数、これは`1~n`までの総和を求める関数です。|
|2,3|引数`n==0`は関数の終了条件で、この時関数は`0`を返します。当たり前ですが、`n=0`のとき総和は`0`ですよね。|
|4|`n==0`以外の場合は、該当整数までの総和は現在の数nに今までの結果(`func(n-1)`)を加えたものです。|
|5|引数に10を指定し、0から10までの和を求めて出力します。|


<iframe width="100%" height="350" frameborder="5" src="http://pythontutor.com/iframe-embed.html#code=def%20func%28n%29%3A%0A%20%20%20%20if%20n%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20return%200%0A%20%20%20%20return%20func%28n-1%29%20%2B%20n%0Aprint%28func%2810%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

:::danger
:fire: **重要**

再帰のポイント②

再帰の二つ目の大事なポイントは前後関係です。上の例でいうと、`func(n-1) + n`に当たる部分です。10までの和は必ず９までの和に10を足して求めます。同様に9までの和は8までの和に9を足して求めます。これをコードで表すと、`func(n-1) + n`となります。高校数学で数列を学んだことがある方は、ここでいう前後関係は漸化式をイメージすれば、理解できるでしょう。
:::

### 3. 再帰とフィボナッチ数列
再帰で有名なフィボナッチ数列を求めてみましょう。

![](https://i.imgur.com/Cy6Wsm0.jpg)

図のように、フィボナッチ数列の一番目は１、二番目も１で、三番目以降は、直前の二項の和です。
```python=1
def fib(n):
    a = [1, 1]
    for i in range(2, n):
        a.append(a[i-1] + a[i-2])
    return a[n-1]
print(fib(5))
```
|行番号|解説|
|---|---|
|1|フィボナッチ数列の第n番目を求める関数`fib(n)`を定義します。|
|2|フィボナッチ数列の最初の2項をリスト`a`に格納します|
|3~5|`append`メソッドでリスト`a`に`a[i-1] + a[i-2]`を追加し、最後に`a[n-1]`を返します。|


```python=1
def fib(n):    
    if n <= 2:
        return 1
    return fib(n - 1) + fib(n - 2)
print(fib(5))
```
|行番号|解説|
|---|---|
|2,3|再帰の終了条件は`n <= 2`、この時`1`を返します。|
|4|フィボナッチ数列の定義に従って、`n`番目の値は`n-1`番目と`n-2`番目の値の和です。|

<iframe width="750" height="350" frameborder="5" src="http://pythontutor.com/iframe-embed.html#code=def%20fib%28n%29%3A%20%20%20%20%0A%20%20%20%20if%20n%20%3C%3D%202%3A%0A%20%20%20%20%20%20%20%20return%201%0A%20%20%20%20return%20fib%28n-1%29%20%2B%20fib%28n-2%29%0Aprint%28fib%285%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=true&curInstr=38&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=true"> </iframe>


### 4. 再帰で図形を描いてみよう
コッホ曲線とは、線分を3等分して分割した２点を頂点とする正三角形を作るという操作を無限に繰り返すことによって得られる曲線の一種です。

以下の図はコッホ曲線を示しています。
![](https://i.imgur.com/yFIaClH.png)
左上から0次、1次、2次、３次のコッホ曲線と呼ぶことにしましょう。

以下の図はコッホ曲線からできたコッホ雪片を示しています。
![](https://i.imgur.com/5YlVvNz.gif)

これも左から0次、1次、2次、３次のコッホ雪片と呼ぶことにしましょう。

```python=1
import turtle
def koch(length, n):
    if n == 0:
        turtle.fd(length)
    else:
        for angle in [0, 60, -120, 60]:
           turtle.left(angle)
           koch(length / 3, n - 1)
def main():
    turtle.penup()
    turtle.goto(-100, 100)    
    turtle.pendown()
    turtle.pensize(2)
    level = 2      
    koch(200, level)     
    turtle.right(120)
    koch(200, level)
    turtle.right(120)
    koch(200, level)
    turtle.hideturtle()
main()
```
|行番号|解説|
|---|---|
|2|関数`koch`はコッホ曲線を描く再帰関数で、引数`length`は0次のコッホ曲線の長さで、`n`は描きたい曲線の次数です。|
|3,4|これは再帰関数の終了条件で、定義のように、次数が0次の時、描く線分の長さは最初に引数に指定した長さ`length`です。|
|5~8|それ以外の場合は、曲線を描く時の回転角をリストに格納して、対応する角度を回転し、次に長さを1/3に、次数を一つ下げ、同じ操作を繰り返します。|
|10~13|初期準備をします。スタート点を座標`(100,100)`(ただし右上が`(0,0)`)、筆の太さを2とします。|
|14~19|`koch`関数を呼び出して、2次のコッホ雪片を描きます。変数`level`で次数を調整します。ここで、`koch`関数を三回呼び出した理由は、コッホ雪片のもととなる形は三角形なので、どんなに次数の高いコッホ雪片でも三角形の三辺上でコッホ曲線を描くことで出来ているからです。|

<iframe src="https://trinket.io/embed/python/7c35fffe89?outputOnly=true&runOption=run&start=result" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>


:::info
:bulb: 再帰についての補足

再帰はスタックオーバーフローの危険性がありますので、終了条件や無駄な計算をいかに減らすか考える必要があります。
再帰の応用例としては、グラフィックスや探索のアルゴリズム、ネスト構造の解析などがあります。また、再帰をマスターするのに、よく用いられる有名な例があります。(ハノイの塔、順列の列挙、8クイーン問題)少し難しいですが、興味がある人はぜひ検索して、取り組んでみてください。

:::

<div style="display: none">

## クイズ
1. 以下のプログラムの実行結果を選んでください。
```python=1
def f(a, b):
    a = 4
    return a + b
def main():
    a = 5
    b = 6
    print(f(a, b), a + b)
main()
```
- [ ] `11 11`
- [x] `10 11`
- [ ] `11 10`
- [ ] `10 10`

2. 以下のプログラミングの出力結果の行数を選択肢から選んでください。
```python=1
def f(n):
    if n > 1:
        print('uec programming')
        f(n / 2)
f(64)
```
- [ ] `4`
- [ ] `5`
- [x] `6`
- [ ] `7`

3. 以下は階乗を求めるプログラムです。アンダーラインAに入る正しいコードを選択肢から選んでください。
```python=1
def factorial(n):
    if n == 1 or n == 0:
        return 1
    else:
        ＿＿A＿＿
print(factorial(10))
```
- [ ] `return n * factorial(n)`
- [ ] `return factorial(n - 1)`
- [x] `return n * factorial(n - 1)`
- [ ] `return (n - 1) * factorial(n - 1)`

4.以下のプログラムの実行結果を選んでください。
```python=1
def fun(n):
    if (n > 100):
        return n - 5
    return fun(fun(n + 11))
print(fun(45))
```
- [ ] `50`
- [ ] `無限ループ`
- [ ] `74`
- [x] `100`

5. 以下のプログラムの実行結果を選んでください。
```python=1
def test(i, j):
    if i == 0:
        return j
    else:
        return test(i - 1, i + j)
print(test(4, 7))
```
- [x] `17`
- [ ] `13`
- [ ] `7`
- [ ] `無限ループ`
</div>
