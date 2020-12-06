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

# 15. 継承と隠蔽処理
## 導入
前回はオブジェクト指向の基本事項について説明をしました。今回は継承、情報隠蔽という二つの重要な概念について解説をします。

## 解説

### 継承の基本

継承とは、すでに定義してあるクラスを元にして、新たな要素を加えたクラスを定義することです。元になるクラスを「**基底クラス(スーパークラス)**」と呼び、新たに定義されたクラスを「**派生クラス(サブクラス)**」と呼びます。派生クラスには、元となる基底クラスの機能が全部備わっているため、派生クラスを定義する際には、その差分だけを定義すればよいです。つまり、既存のクラスを再利用して、効率よく異なるクラスを作成することができます。

以下の書式で継承を記述します。通常のクラス定義とそれほど変わりはありません。派生クラス名の後に基底クラス名を記述するだけです。

継承の書式：
```python=
class 派生クラス名(基底クラス):
    派生クラスを定義
```
ここで、簡単な例で使い方を見ていきましょう。

`class Vehicel`とは、乗り物を表すクラスで、基底クラスとして定義します。車は乗り物の一種なので、車を表すクラス`class Car`は、`class Vehicel`の派生クラスとして定義されています。
```python=1
class Vehicle:
    def __init__(self, maker, color):
        self.maker = maker
        self.color = color
    def printDetails(self):
        print("Manufacturer:", self.maker)
        print("Color:", self.color)

class Car(Vehicle):
    def __init__(self, maker, color):
        Vehicle.__init__(self, maker, color)
    def printCarDetails(self):
        self.printDetails()
        
obj1 = Car("Suzuki", "Grey")
obj1.printCarDetails()
```
|行番号|解説|
|---|---|
|1~7|基底クラス`Vehicle`を作り、乗り物のメーカーと色を表すプロパティ`maker`,`color`と乗り物の情報を出力するメソッド`printDetails`を定義します。|
|9~13|基底クラスから派生クラス`Car`を作ります。派生クラスなので、プロパティやメソッドの中身を再度定義する必要がなく、そのまま使えます。|
|15~16|クラスからインスタンスを生成し、インスタンスの情報を出力します。|
また、11行目に注目してください。ここでは、基底クラスの`__init__`メソッドを呼び出しています。基底クラスのメソッドを呼び出したい時は、`super().__init__()`のように呼び出すこともできます。13行目も同様になります。
```diff=9
class Car(Vehicle):
    def __init__(self, maker, color):
+       super().__init__(maker, color)
    def printCarDetails(self):
+       super.printDetails()
```

次のプログラム例で継承の利便性を確認しましょう。例えば、
基底クラス`class Vehicle`から継承した派生クラス`class Car`に生産年の情報を追加したい場合を考えます。以下のように基底クラス`class Vehicle`からプロパティとメソッドを継承して、派生クラス`class Car`に生産年のプロパティだけ追加すればよいです。同じ部分を二回記述する手間が省けて、便利ですね。

```diff=9
class Car(Vehicle):
+   def __init__(self, maker, color, year):
        Vehicle.__init__(self, maker, color)
+       self.year = year
    def printCarDetails(self):
        self.printDetails()
+       print("Year: ", self.year)
+ obj1 = Car("Suzuki", "Grey", "2010")
obj1.printCarDetails()
```
### メソッドのオーバーライド
また、基底クラスと派生クラスの両方で同じメソッドを定義した場合、派生クラスのメソッドで上書きされることを「メソッドのオーバーライド」と言います。以下の例でクラスのメソッドのオーバーライドを確認してみよう。
```python=1
class Shape:
    def __init__(self): 
        self.sides = 0
    def getArea(self):
        self.area = 0
class Rectangle(Shape):  
    def __init__(self, width=0, height=0):
        self.width = width
        self.height = height
        self.sides = 4
    def getArea(self):
        self.area = self.width * self.height
        return (self.area)

shapes = Rectangle(6, 10)
print("この長方形の面積:", shapes.getArea())
```
|行番号|解説|
|---|---|
|1~5|基底クラス`Shape`を作り、基底クラス内でプロパティ`self.sides`と`self.area`の値を`0`とします。|
|6~13|派生クラス`Rectangle`で基底クラス`shape`で定義されたプロパティ値を変えると、値は上書きされます。|
|15~16|クラスをインスタンス化して、メソッドを呼び出して結果を出力します。|

### 隠蔽処理
オブジェクト指向プログラミングでは、クラスをインスタンス化してから利用します。つまり、クラスを定義する側と、クラスを利用する側があります。例えば、ゲームを制作する側はクラスを定義する側、遊ぶ側はクラスを利用する側にあたります。クラスの利用者は、仕組みについて知らなくても、その機能を利用することができれば良いわけです。

そのために、オブジェクト指向では、「`カプセル化`」と呼ばれる隠蔽処理を使います。メソッド名や変数名が`アンダーバー(_)`から始まっていれば、それは`非公開メンバー`であり、クラスの利用側は手を出さないというルールがあります。しかし、実際クラスの利用者もアンダーバーから始まる名前を操作できていまします。それで、クラス利用者から要素名を隠すために「`マングリング`」という機能が用意されています。要素名の前に`アンダーバーを二つ(__)`つけます。そうすると、要素名が「`_クラス名__要素名`」と置換される仕組みになっているので、ある程度隠すことができます。

では、プログラム例で確認しましょう。

これは隠蔽処理をしてなく、外部からもクラスのメンバーをアクセスできるプログラムです。特に11,12行目を注目すると、インスタンス`student1`のプロパティ値を外部からもアクセスできています。
```python=1
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score
    def print_score(self):
        print(self.name + ":" + str(self.score))

student1 = Student("tom", 95)
student1.print_score()

print(student1.name)
print(student1.score)
```
<iframe height="130px" width="100%" src="https://repl.it/@programminguec/hiding-1?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

上のプログラム例と比較して、緑でハイライトされた行に注目してください。それぞれのプロパティ値の前のアンダーバー二つを入れたので、クラスの外部から`name`と`score`にアクセスできなくなります。そうすると、11,12行目のように、外部でその値を出力しようとしても、エラーが発生します。このように隠蔽処理を行うことで、クラスの安全性を高めることができました。

```diff=
class Student:
    def __init__(self, name, score):
+       self.__name = name
+       self.__score = score
    def print_score(self):
+       print(self.__name + ":" + str(self.__score))

student1 = Student("tom", 95)
student1.print_score()

print(student1.__name)
print(student1.__score)
```
<iframe height="160px" width="100%" src="https://repl.it/@programminguec/hiding2?lite=1&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


<div style="display:none">

## クイズ

1. `ChildClass`は`ParentClass`から継承されます。この時、書式として正しいものを選んでください。

- [ ] `class ParentClass(ChildClass):`
- [x] `class ChildClass(ParentClass):`
- [ ] `class ChildClass inherts ParentClass:`
- [ ] `class ChildClass extends ParentClass:`

2. 以下のプログラムを理解して、選択肢の中から正しい記述を選んでください。

```python=1
class parent:
    def __init__(self,param):
        self.v1=param
class child(parent):
    def __init__(self,param):
        parent.__init__(self,param)
        self.v2=param
odj=child(100)
```

- [ ] `print(odj.v1==odj.v2)の結果はFalseである`
- [ ] `print(odj.v1==odj.v2)を実行するとエラーが発生する`
- [x] `print(odj.v1)の結果は100である`
- [ ] `print(odj.v1)の結果は0である`

3. 以下のプログラムの実行結果を選んでください。
```python=1
class Parent:
    def prn(self):
        print("Parent")
class Child(Parent):
    def __init__(self):
        self.a = Parent()
    def prn(self):
        print("Child")
temp = Child()
temp.a.prn()
```

- [ ] Child
- [ ] Child Parent
- [x] Parent
- [ ] Error

4.　class Gameのメソッドgoalをクラスの外からアクセスできないようにするための正しい書式を選んでください。
```python=1
class Game:
  def goal(self):
    print("This is my goal!")
  def play(self):
    print("Go head!")
game = Game()
game.play()
game.goal()
```
- [ ] `def _goal`
- [x] `def __goal`
- [ ] `def _goal_`
- [ ] `def __goal__`

5. 以下のプログラムを実行すると、エラーが発生しました。エラーが発生する行番号を選んでください。
```python=1
class Game:
  def goal(self):
    print("This is my goal!")
  def __play(self):
    print("Go head!")
game = Game()
game.play()
game.goal()
game._Game__play()
```

- [ ] 6行目
- [x] 7行目
- [ ] 8行目
- [ ] 9行目
</div>