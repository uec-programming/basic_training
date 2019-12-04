###### tags: `Python_2nd_Step`
# 2　今日が非誕生日だったらお祝いの言葉を表示するプログラム（if-else文）

|要　点|説　明|
|---|---|
|プログラムの機能|今日が誕生日であれば、「Happy birthday！」と表示する。<br/>誕生日ではない場合も表示が出るようにする。|
|得られる知識|if文の使い方<br/>二択の条件分岐のやり方|
|手順|（1） ユーザに今日が誕生日かどうか yes か no で入力してもらう。<br/>（2） ユーザの答えと文字列yesが一致するか確かめる。<br/>（3）一致すれば「Happy Birthday！」と表示する。<br/>（4）一致しなければ「Happy **Un**birthday!」と表示する。|

ファイル名は2_2_birthday.py
```python=
# if_else文の練習
answer = input('今日は誕生日？ : yes/no')
if answer == 'yes':
    print('Happy Birthday!')
else:
    print('Happy Unbirthday!')
```

## コードの解説
|No|行|対象|説明|
|---|---|------------|---|
|1|5|`else:`|**else**は「さもなくば」の意味です。<br/>if文が False ならば、else文に移ります。<br/>else文もコロン「:」で終わります。|
|2|6|`print('Happy Unbirthday!')`|2行目のコードがFalse だった場合の表示です。|
|3| |□□□□`print('Happy Unbirthday!')`|else文の次からの行（ブロック）は必ずインデントします。|
