###### tags: `Python_1st_Step`
# 19 五輪マークみたいなの　／　スクリプトモードで実行

|要　点|説　明|
|---|---|
|turtle の応用|五つの色の円を重ねて表示。
|プログラムの機能|5つの円の色と場所を変えて表示し五輪マークに見えます。|
|得られる知識|コードに手を入れて思い通りに調整する方法。|
|手順|（1）コピー&ペーストして動かす。<br>（2）好みで調整する。<br>例えば、コードの3行目がスピード調整。いまは（0）で最速です。これを5に変えて変化を見ましょう。<br>（3）あちこち変えてみてください。
|アウトプット|済ませたら、受講アンケートの感想欄に「1stの17完了」と書きましょう。|

### ファイル名は`1_19_fivecircles.py`
```python=1
import turtle
t = turtle.Pen()

t.speed(0)
t.width(10)
t.color("black")
t.circle(60)

t.up()
t.backward(160)
t.pendown()
t.color("blue")
t.circle(60)

t.up()
t.fd(320)
t.pendown()
t.color('red')
t.circle(60)

t.up()
t.fd(-80)
t.rt(90)
t.fd(40)
t.lt(90)
t.pendown()
t.color("green")
t.circle(60)

t.up()
t.fd(-160)
t.pendown()
t.color("yellow")
t.circle(60)
```

1st Stepで学ぶ内容は以上です。
「1st Step の総復習」に進み、学んだ内容を総点検しましょう。
