###### tags: `Python_2nd_Step`
# 11　じゃんけんゲーム

|要　点|説　明|
|---|---|
|プログラムの機能|コンピュータとじゃんけんで勝負するゲーム。|
|得られる知識|リストの使い方<br/>勝敗を決めるやり方|
|手順|（1）コピー&ペーストしてゲームを楽しむ。<br/>（2）コードの作り方の意味を考える。<br/>（3）改変する。|

ファイル名は2_11.py
```python=
import random
moves = ['r', 'p', 's']
player_wins = ['pr', 'sp', 'rs']
while True:
    player_move = input("何を出す？: ")
    if player_move == "q":
        break
    computer_move = random.choice(moves)
    print("キミ: ", player_move)
    print("コンピュータ: ", computer_move)
    if player_move == computer_move:
        print("あいこ")
    elif player_move + computer_move in player_wins:
        print("キミの勝ち!")
    else:
        print("キミの負け!")
```
