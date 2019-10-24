# 5　Python3　インタラクティブモードで文字を表示させよう

|要　点|説　明|
|---|---|
|目的|Pythonとの対話を楽しむ。得られる知識<br>・print( ) 関数<br>・英語の打ち込み方<br>・文字の表示|
|手順|（1）>>> (入力不要)の後の青文字を打ち込む。<br>（2）リターンキーを押す。<br>（3）結果を見る。<br>（4）赤字のエラーメッセージが出たら、どこかに間違いがあるため、前と違うやり方で試す。|

```=
>>> print( " Hello World ! " )
Hello World
>>> print "Hello"
SyntaxError: Missing parentheses in call to 'print'
>>> print("Hello")
Hello
>>> print('Hello')
Hello
>>> print('''Hello''')
Hello
>>> print('Hello World')
Hello World
>>> print("""Hello World""")
Hello World
>>> print('''Hello World''')
Hello World
>>> print("Hello World')
SyntaxError: EOL while scanning string literal
>>>  "Hello World"
'Hello World'
>>> Hello World
SyntaxError: invalid syntax
>>> 'Hello World'
'Hello World'
>>> 'That's a bird.'
SyntaxError: invalid syntax
>>> "That's a bird."
"That's a bird."
>>> print("That's a bird.")
That's a bird.
```