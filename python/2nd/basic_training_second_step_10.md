###### tags: `Python_2nd_Step`
# 10　数当てゲーム

|要　点|説　明|
|---|---|
|プログラムの機能|コンピュータが決めた数を人間が当てるゲーム。|
|得られる知識|モジュール random の使い方|
|手順|（1）コピー&ペーストしてゲームを楽しむ。<br/>（2）コードの作り方の意味を考える。<br/>（3）改変する。|

ファイル名は2_10.py
```python=
import random
secret = random.randrange(1, 101)
guess = 0
tries = 0
while guess != secret:
    guess = int(input("1から100までの整数を一つ選んでください: "))
    tries = tries + 1
    if guess > secret:
        print("もうちょっと小さい数です")
    elif guess < secret:
        print("もうちょっとと大きい数です")
    else:
        print("当たり！")
print("予想回数は", tries, "回でした")
```
