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

# 14.オブジェクト指向の基本
## 導入
Pythonをはじめ現代的な言語にはオブジェクト指向の仕組みが備わっています。オブジェクト、つまり物体のことです。例えば、人間の体には、目や耳など色々な器官があります。器官ごとには個別の機能が備わっています。ものを食べる時、目で位置を確認して、手でつかみ、口へ放り込みます。オブジェクト指向もこれと同じで、一つのオブジェクトに色々な機能を持つデータや関数があり、それらを組み合わせて使うことで様々な役に立つ処理ができます。
## 解説

まずは擬似コードで、人間を表すオブジェクトを設計してみましょう。オブジェクト指向では、`class宣言`でクラスを設計します。クラスはオブジェクトのひな型となるものです。
### まずは擬似コードでクラスを設計してみよう
```python=1
class Human:
    def walk(self, place):　 #歩く
        # 処理を記述
        print("Walking to " + place)
    def eat(self, food):      #物を食べる処理
        # 処理を記述
        print("Eating " + food)
    def read(self, book):　　#本を読む処理 
        # 処理を記述
        print("Reading " + book)
```
このように、人間の動作をクラス内の関数の形で再現しました。まだしっくりこないかもしれないですがが、実は皆さんが普段やってるゲームの中で登場キャラクターの技や特性もこのように定義されています。

:::danger
:fire: **重要**

クラス内で定義した関数のことを「**メソッド(method)**」と呼びます。class宣言の下に必ず自身を表す **`self`** という引数を第一引数として指定する必要があります。また、クラス内で定義した変数のことを「**プロパティ(Property)**」と呼びます。
:::

宣言したクラスを使うために、それをもとにオブジェクトを生成する必要があります。クラスからオブジェクトを生成するには、このように記述します。⇒`「オブジェクト名＝クラス名()」`

上の`Human()`クラスの続き
```python=11
jack = Human()  # クラスHuman()を元にオブジェクトを生成
jack.eat("Banana") # Humanクラスで定義したメソッドを呼びだす
```
2行目のように、呼び出す時には`self`を与える必要がありません。クラスを利用する時に与える値は、`self`を飛ばして二つ目以降の引数のみ割り当てられます。オブジェクト指向では、クラスを元にして生成したオブジェクトのことを「**インスタンス**」と言います。上のコードの場合、`jack`は`Human`クラスで生成されたインスタンスです。

:::info
:bulb: 補足

インスタンスとクラスはたい焼きと鋳型のような関係です。鋳型がクラスに当たります。鋳型があれば、形が同じたいやきをいくつも作ることができます。つまり、クラスを1つ定義すれば、それをもとにインスタンスをいくつも生成することができます。
:::

クラスを定義する時、各メソッドの第1引数に「**self**」を指定しました。これは、クラスの**インスタンス自身**を表します。「`self`」の使い方について、もう一つコード例で確認してみましょう。
```python=1
# クラスを定義
class HumanName:              
    def setName(self, name):
        self.name = name
    def getName(self):
        return self.name
# インスタンスを生成
taro = HumanName()
taro.setName("Taro")
print(taro.getName())
print(taro.name)
```
`HumanName`クラス定義では、`setName()`メソッドを実行すると、`self.name`プロパティの値を返すようにします。8行目から11行目はインスタンスを生成する部分です。10,11行目の出力は同じ`"Taro"`となっていることから、引数`self`が、オブジェクトのインスタンスを表すことが確認できますよね。


### 初期化メソッド
クラスのオブジェクトを生成する時に、クラス内で利用するデータの準備をする必要があります。オブジェクト指向では、このデータの準備を「初期化メソッド」と呼ばれるメソッドで行います。Pythonでは、特殊のメソッド **`__init__()`** を定義することでオブジェクトのデータを初期化するのに利用します。

例えば、買い物をする時の料金を計算するクラスを定義しましょう。値段に加えて、送料300円と税金10%を入れて計算しましょう。
```python=1
class CalcFee:
    def __init__(self):
        self.shipping_fee = 300
        self.tax_rate = 0.1
        self.value = 0
    def addItem(self, price):
        self.value += price
    def calc(self):
        total = self.value * (1 + self.tax_rate) + self.shipping_fee
        return total
fee = CalcFee()
fee.addItem(500)
fee.addItem(300)
print(fee.calc(), "円")
```
|行番号|解説|
|---|---|
|1|クラス`CalcFee`を定義します。|
|2~5|`__init__`メソッドで、インスタンスを初期化します。ここで、インスタンスのプロパティの送料(`shipping_fee`)、税率(`tax_fee`)、合計(`value`)の値を初期化します。|
|6~7|`addItem()`メソッドでは、商品の値段を加算します。|
|8~10|最後に`calc()`メソッドでは、最終的な料金を計算します。|
|11~14|クラスからインスタンスを生成し、500円と300円の商品を購入する時の合計金額を計算して、出力します。|

:::info
:bulb: 補足

クラスで定義したメソッドの第1引数`self`には、必ず、オブジェクトのインスタンスが設定されます。そのため、クラスの内部で、インスタンスのプロパティに値を設定したり、値を取得するには、「`self.value`」のように「`self.プロパティ名`」のように記述します。インスタンス生成された後、「`インスタンス.プロパティ`」のように記述します。
:::

### 実践例
ここでは、皆さんが1st stepでも作ったBMI計算プログラムをオブジェクト指向で実装してみましょう。BMI判定をするだけなら、クラスで実装する必要はないが、あくまでもオブジェクト指向の考え方を理解するための練習です。

```python=1
class BMI:
    def __init__(self, weight, height):
      self.weight = weight
      self.height = height
      self.calcBMI()

    def calcBMI(self):
      h = self.height / 100
      self.bmi = self.weight / (h ** 2)
    
    def printResult(self):
      print("BMI=", self.bmi)
      if(self.bmi < 18.5): print("やせ型")
      elif (self.bmi < 25): print("標準")
      elif (self.bmi < 30): print("肥満(軽)")
      else: print("肥満(重)")

# インスタンス生成
person1 = BMI(weight = 65, height = 170)
person1.printResult()
```
プログラムの前半でBMIの計算クラスを定義し、後半では、インスタンスのBMI値を計算し判定を出力します。BMIのインスタンスを生成する時に、`weight`と`height`を与えます。`__init__`メソッドでは、インスタンスのプロパティに体重と身長を設定し、`calcBMI()`メソッドでBMI値を計算します。`printResult()`メソッドで肥満度の判定結果を表示します。


<div style="display:none">

## クイズ

1. 以下のプログラムの実行結果を選んでください。

```python=1
class Account:
    def __init__(self, id):
        self.id = id
        id= 888
acc = Account(100)
print(acc.id)
```
- [ ] `888`
- [x] `100`
- [ ] `id`
- [ ] なし


2. 以下のプログラムの実行結果を選んでください。
```python=1
class A:
    def __init__(self, a, b, c):
        self.x = a + b + c 
a = A(6, 2, 3)
print(a.x)
```

- [x] 11
- [ ] 6
- [ ] 5
- [ ] なし

3. 以下のプログラムの実行結果を選んでください。
```python=1
class MyClass:
    def __init__(self, x, y):
        self.x = y
        self.y = x
obj1 = MyClass(2, 5)
print('x =', obj1.x)
print('y =', obj1.y)
```
- [ ] `x = 0 y = 0`
- [ ] `x = 2 y = 5`
- [x] `x = 5 y = 2`
- [ ] `エラー`

4. 以下のクラスをもとに、インスタンスを生成する方法として、正しい書き方を選んでください。

```python=1
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

- [ ] `Dog()`
- [x] `Dog("Rock", 3)`
- [ ] `Dog.create("Rock", 3)`
- [ ] `Dog.__init__("Rock", 3)`

5. メソッドを定義する時、インスタンス変数xにアクセスできる文を以下から選んでください。

- [ ] `x`
- [ ] `self.get(x)`
- [x] `self.x`
- [ ] `self[x]`
</div>