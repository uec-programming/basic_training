###### tags: `Python_1st_Step`
# 7　エラーメッセージの読み方

|要　点|説　明|
|---|---|
|エラーメッセージ|Pythonはコードが理解できないと<br>エラーメッセージを出してプログラマにお知らせします。|
|得られる知識|・エラーメッセージの読み方
|手順|（1） エラーメッセージを読む。<br>（2）どこが間違っているかを理解する。<br>（3）修正してやり直す。|

```bash=41
>>> 1-（-3）
SyntaxError: invalid character in identifier
```

## コードの解説

|No|行|対象|説明|
|---|---|---|---|
|44|41|>>> 1-（-3）|1 - ( -3 ) の計算です。オペランドは半角で入力するべきです。しかし、間違ってカッコを全角にしました。|
|45|42|SyntaxError: invalid character in identifier|Pythonがエラーメッセージを出しました。最初がエラーの種類、コロンの後が説明という構造です。<br>SyntaxError：構文エラー。Pythonの約束に違反した書き方、という意味。<br>invalid ：正しくないの意味。<br>character ：文字という意味。ほかにキャラクター、人の個性、性格の意味。<br>in identifier ：識別子に、の意味。|

