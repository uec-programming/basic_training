---
tags: Pyxel
lang: ja-jp
robots: noindex, nofollow
breaks: false
---

<style>
.code {
user-select: none;
-webkit-user-select: none;
}
table td {
  word-break : break-word;
}
img {
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
##### 電気通信大学 プログラミング教室 教材 作成者：張 翌坤
# 10　「箱」の抽象化と光る箱の分離
![](https://i.imgur.com/Xa4YQbU.gif)

## コード
```python=
import pyxel
import math
import random

# Playerが追い込む箱のクラスをAppクラスから分離するし、「箱」を抽象化する
class Box:
    """一般的な箱のクラス"""
    def __init__(self, x, y, w, h, speed=1, color=1):
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.x_speed = speed
        self.y_speed = speed
        self.color = color
        
    def update(self):
        pass

    def draw(self):
        # speedが小数だと、xとyの座標が小数になりえるので、描画のときは整数に直します
        pyxel.rect(round(self.x), round(self.y), self.w, self.h, self.color)

    def is_collided(self, target):
        return self.x < target.x+target.w and self.x+self.w > target.x and self.y < target.y+target.h and self.h+self.y > target.y


class LightingBox(Box):
    """光る箱のクラス"""
    # 一般的な箱のクラスに無いものを追加して、重複なものを省いた
    # set_randomは光る箱特有なメソッド
    def __init__(self, x, y, w=5, h=5):
        super().__init__(x, y, w, h)
        self.x_speed = -random.randint(1,5)
        self.y_speed = -random.randint(1,5)
        
    def update(self):
        self.x += self.x_speed
        self.y += self.y_speed
        if not 0<self.x<pyxel.width:
            self.x_speed, self.w = self.set_random(self.x_speed, self.w)
        if not 0<self.y<pyxel.height:
            self.y_speed, self.h = self.set_random(self.y_speed, self.h)
        self.color = self.y%16

    def set_random(self, cord, size):
        # 座標とサイズを再計算する
        cord = (cord//abs(cord))*(-1)*random.randint(1,5)
        size = random.randint(5,10)
        return cord, size

# PlayerはBoxの子クラスにする
class Player(Box):
    def __init__(self, x=80, y=5, w=6, h=8, speed=2, color=6):
        # プレイヤーの基本属性はBoxを受け継ぐ
        super().__init__(x, y, w, h, speed, color)
    
    def update(self): # Boxのupdateをオーバーライド
        """playerの動きを制御する、WSADで移動を操作"""
        # updateはフレームごとに更新される関数、フレームごとにユーザ(プレーヤー)の入力を受け付けたい
        # and プレイヤーが画面の端にいると操作が受け付けないようにする
        # pyxel.btnpには3つの引数が存在する(判定したいキー, 長押しに反応する時間, 長押しのときに入力を反復する間隔)
        if pyxel.btnp(pyxel.KEY_W, 2, 1) and self.y >= 0: 
            self.y -= self.y_speed
        elif pyxel.btnp(pyxel.KEY_S, 2, 1) and self.y <= pyxel.height-self.h:
            self.y += self.y_speed
        if pyxel.btnp(pyxel.KEY_A, 2, 1) and self.x >= 0:
            self.x -= self.x_speed
        elif pyxel.btnp(pyxel.KEY_D, 2, 1) and self.x <= pyxel.width-self.w:
            self.x += self.x_speed


# EnemyもBoxの子クラスにする
class Enemy(Box):
    """敵のクラス、敵の動きや表示を定義する"""
    def __init__(self, x, y, w=5, h=5, speed=1.5, color=8, target=None):
        super().__init__(x, y, w, h, speed, color)
        self.target = target

    def update(self): # Boxのupdateをオーバーライド
        if self.target: # 追跡目標が存在すれば、つまり if self.target != None
            # targetの座標と自分自身の座標をなす角を求める
            angle = math.atan2(self.target.y-self.y, self.target.x-self.x)
            # 角の情報をもとに次に移動する座標を計算し代入する
            self.x += round(math.cos(angle), 6) * self.x_speed
            self.y += round(math.sin(angle), 6) * self.y_speed


class App:
    """箱を追い込むゲーム"""
    def __init__(self):
        pyxel.init(160, 120, fps=20)
        # APPの中に箱(Box)のインスタンス(box)を作成する
        self.box = LightingBox(50, 50)
        # APPの中にplayerのインスタンスを作成する
        self.player = Player()
        # 敵のインスタンスをリストで作成する
        self.enemy_number = 3
        # リストの作り方は2通りある
        self.enemys = [Enemy(x=random.choice([0, pyxel.width]), y=random.randint(0, pyxel.height), target=self.player) for _ in range(self.enemy_number)]
        # gameoverのフラグを設定する
        self.game_over = False
        # プレイヤーが死亡したかを設定するフラグ
        self.player_die = False
        pyxel.run(self.update, self.draw)

    def update(self):
        self.player.update()
        for i in self.enemys:
            i.update()
        # 目標の光る箱の更新
        self.box.update()
        
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()

        if self.player.is_collided(self.box):
            self.game_over = True
        # playerの衝突検出も全部の敵とやらないといけない
        for i in self.enemys:
            if self.player.is_collided(i): # どれかの敵に接触したらplayerが死ぬ
                self.player_die = True

    def draw(self):
        if self.game_over:
            self.draw_over()
        elif self.player_die:
            self.draw_death()
        else:
            pyxel.cls(0)
            self.box.draw()
            self.player.draw()
            for i in self.enemys:
                i.draw()

    def draw_death(self):
        pyxel.cls(2)
        pyxel.text(40, 30, "YOU DIE!!", 14)

    def draw_over(self):
        pyxel.cls(1)
        pyxel.text(80, 60, "YOU WIN!!!", 15)

App()
```

## 解説


```python=5
# Playerが追い込む箱のクラスをAppクラスから分離するし、「箱」を抽象化する
class Box:
    """一般的な箱のクラス"""
    def __init__(self, x, y, w, h, speed=1, color=1):
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.x_speed = speed
        self.y_speed = speed
        self.color = color
        
    def update(self):
        pass

    def draw(self):
        # speedが小数だと、xとyの座標が小数になりえるので、描画のときは整数に直します
        pyxel.rect(round(self.x), round(self.y), self.w, self.h, self.color)

    def is_collided(self, target):
        return self.x < target.x+target.w and self.x+self.w > target.x and self.y < target.y+target.h and self.h+self.y > target.y
```
今回は箱が主体のゲームですべてのオブジェクトが箱になります。<br>
勝手に動く箱、操作できる箱、操作する箱を追いかける箱、これらのオブジェクトの共通点としては、皆全員が箱であることです。<br>
なので、今回は`Box`というクラスを作って、箱が共通するものを記述します<br>
箱というものを定義するには、この箱がどこに存在するか、この箱の横縦幅、この箱の動く速度、この箱の色等が必要です。<br>
なので、`__init__()`の中に、`self.x`と`self.y`で箱の位置を記録する変数を初期化します。<br>
`self.w`と`self.h`で箱の横幅と縦幅を記録する変数を初期化します。<br>
`self.x_speed`と`self.y_speed`ではこの移動速度を初期化します。<br>
`self.color`で箱の色を初期化します。<br>
箱の属性があるだけでは足りません、箱が行える事も定義しないといけません。前の節でも言ったように、ゲームのオブジェクトでは`update()`(更新)と`draw()`(描画)が絶対に抱えないものです。<br>
なので`update()`と`draw()`2つのメソッドを定義します。<br>
以前のコードを眺めると分かるように、プレイやが操作できる箱の座標更新と敵の座標更新と光る箱の座標の更新はすべて違うロジックで行われています。このことから、3種類の箱には共通する更新(update)が無いため、箱の共通点を定義するための`Box`クラス内の`update()`メソッドの中では何も記述する必要がなく、`pass`だけを記述すればいいです。(passはあるコードブロック内でコードを書かないときの魔法な言葉)<br>
`draw()`が違います、3つの箱は全部座標と大きさと色に沿って描画されるので、この共通の部分は`Box`クラスの`darw()`メソッド内に記述します。<br>
最後は`is_collided()`メソッド、箱同士の衝突を検出する方法は同じなはずなので、このクラスの中に記述します。<br>
この衝突検出用のメソッドは実際に`Player`でしか使われてないが、ゲームの仕様によって別の箱のインスタンスにも使われる可能性があるので、抽象化された`Box`クラスに記述したほうがいいでしょう。

```python=28
class LightingBox(Box):
    """光る箱のクラス"""
    # 一般的な箱のクラスに無いものを追加して、重複なものを省いた
    # set_randomは光る箱特有なメソッド
    def __init__(self, x, y, w=5, h=5):
        super().__init__(x, y, w, h)
        self.x_speed = -random.randint(1,5)
        self.y_speed = -random.randint(1,5)
        
    def update(self):
        self.x += self.x_speed
        self.y += self.y_speed
        if not 0<self.x<pyxel.width:
            self.x_speed, self.w = self.set_random(self.x_speed, self.w)
        if not 0<self.y<pyxel.height:
            self.y_speed, self.h = self.set_random(self.y_speed, self.h)
        self.color = self.y%16

    def set_random(self, cord, size):
        # 座標とサイズを再計算する
        cord = (cord//abs(cord))*(-1)*random.randint(1,5)
        size = random.randint(5,10)
        return cord, size
```
28行からは光る箱の定義です。`LightingBox(Box)`という記述に注目してください。これはクラスの継承です。<br>
`LightingBox`というクラスが`Box`クラスを継承している事を意味します。`Box`クラスを継承するというのは、`Box`クラス内に定義された属性とメソッドが使えることです。<br>
32行目では、光る箱の横幅と縦幅を初期化しています。初期位置(`x`と`y`)はインスタンス化するときに決めます。<br>
32行だけでは位置と大きさだけを決めているので、速度や色が決まっていまん。他の部分も定義されるために、親クラスの初期化メソッドを呼び出します。33行目はスーパークラス`super()`の初期化メソッド`__init__()`を呼び出しています。<br>
`Box`クラスではx軸の速度とy軸の速度が同じようになっています。光る箱はランダムな方向に動かしたいので、34，35行では、両方向の速度を乱数で代入し直します。<br>
37行目はおなじみの光る箱の位置を更新するための処理です。<br>
よく見ると、`draw()`という描画用のメソッドが無いことに気づくはず、これは`Box`クラスでは定義されていたので、わざわざ書かなくていいです。<br>
しかし、箱の色を変えるために、`y`座標と`16`の余りを取っていたが、`Box`クラスの中の`draw()`メソッドはそれをやっていません。<br>
このことを解決するために`update()`の最後に、`self.color`を更新すればいい、毎回y座標が更新されると、`self.color`も新しいy座標について、`16`の余りを取れば、問題解決です。<br>
実は今までは、`draw()`メソッドの中に演算を(つまり`self.color%16`)書いていました。これはよくないことです。<br>
46行目からは`set_random()`メソッド、これは光る箱だけが使うもので、このクラスに書くべきです。

```python=52
# PlayerはBoxの子クラスにする
class Player(Box):
    def __init__(self, x=80, y=5, w=6, h=8, speed=2, color=6):
        # プレイヤーの基本属性はBoxを受け継ぐ
        super().__init__(x, y, w, h, speed, color)
    
    def update(self): # Boxのupdateをオーバーライド
        """playerの動きを制御する、WSADで移動を操作"""
        # updateはフレームごとに更新される関数、フレームごとにユーザ(プレーヤー)の入力を受け付けたい
        # and プレイヤーが画面の端にいると操作が受け付けないようにする
        # pyxel.btnpには3つの引数が存在する(判定したいキー, 長押しに反応する時間, 長押しのときに入力を反復する間隔)
        if pyxel.btnp(pyxel.KEY_W, 2, 1) and self.y >= 0: 
            self.y -= self.y_speed
        elif pyxel.btnp(pyxel.KEY_S, 2, 1) and self.y <= pyxel.height-self.h:
            self.y += self.y_speed
        if pyxel.btnp(pyxel.KEY_A, 2, 1) and self.x >= 0:
            self.x -= self.x_speed
        elif pyxel.btnp(pyxel.KEY_D, 2, 1) and self.x <= pyxel.width-self.w:
            self.x += self.x_speed
```
53行目からは`Player`クラスの記述です。<br>
前章までは直接に属性を定義しましたが、スーパークラスの`__init__()`メソッドは属性の初期化を書いていたので、ここでは`super().__init__()`を使ったほうがいいです。<br>
特に変えることがありません、`is_collided()`と`draw()`が親クラスにあるので、この2つのメソッドを削除するだけです。

```python=73
# EnemyもBoxの子クラスにする
class Enemy(Box):
    """敵のクラス、敵の動きや表示を定義する"""
    def __init__(self, x, y, w=5, h=5, speed=1.5, color=8, target=None):
        super().__init__(x, y, w, h, speed, color)
        self.target = target

    def update(self): # Boxのupdateをオーバーライド
        if self.target: # 追跡目標が存在すれば、つまり if self.target != None
            # targetの座標と自分自身の座標をなす角を求める
            angle = math.atan2(self.target.y-self.y, self.target.x-self.x)
            # 角の情報をもとに次に移動する座標を計算し代入する
            self.x += round(math.cos(angle), 6) * self.x_speed
            self.y += round(math.sin(angle), 6) * self.y_speed
```
74行目からは敵の箱を定義するクラスです。<br>
77行目はPlayerクラスと同じ理由で`super().__init__()`で属性を初期化します。<br>
`draw()`は省略します。

```python=89
class App:
    """箱を追い込むゲーム"""
    def __init__(self):
        pyxel.init(160, 120, fps=20)
        # APPの中に箱(Box)のインスタンス(box)を作成する
        self.box = LightingBox(50, 50)
        # APPの中にplayerのインスタンスを作成する
        self.player = Player()
        # 敵のインスタンスをリストで作成する
        self.enemy_number = 3
        # リストの作り方は2通りある
        self.enemys = [Enemy(x=random.choice([0, pyxel.width]), y=random.randint(0, pyxel.height), target=self.player) for _ in range(self.enemy_number)]
        # gameoverのフラグを設定する
        self.game_over = False
        # プレイヤーが死亡したかを設定するフラグ
        self.player_die = False
        pyxel.run(self.update, self.draw)
```
89行目からはゲームの本体部分で、かなり簡略化されます。<br>
ゲームの初期化では、光る箱の属性部分が省略されて、<br>
ゲームオブジェクトの光る箱`self.box`の初期化、`self.box = LightingBox(50, 50)`、<br>
操作できる箱`self.player`の初期化、`self.player = Player()`<br>
敵の箱`self.enemys`の初期化とゲームのフラグの初期化だけになります。

```python=107
    def update(self):
        self.player.update()
        for i in self.enemys:
            i.update()
        # 目標の光る箱の更新
        self.box.update()
        
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()

        if self.player.is_collided(self.box):
            self.game_over = True
        # playerの衝突検出も全部の敵とやらないといけない
        for i in self.enemys:
            if self.player.is_collided(i): # どれかの敵に接触したらplayerが死ぬ
                self.player_die = True
```
ゲームのフレームごとの更新も省略されます。<br>
まずは108\~112行はゲーム内すべてのオブジェクトの`update()`メソッドを呼び出しているだけです。<br>
次の114行はゲームの終了処理です。<br>
最後はプレイヤーの箱と他の箱の衝突検出の部分です。<br>
今回、光る箱もオブジェクト化したお陰で、同じロジックで`player.is_collided()`を使えば、光る箱と敵の箱の検出ができます。<br>
その検出に応じて対応しているフラグを変更すればいいです。

```python=124
    def draw(self):
        if self.game_over:
            self.draw_over()
        elif self.player_die:
            self.draw_death()
        else:
            pyxel.cls(0)
            self.box.draw()
            self.player.draw()
            for i in self.enemys:
                i.draw()
```
124行目からはゲーム本体の描画部分です。<br>
最後の光る箱の更新がなくなり、`self.box.draw()`が一個追加されました。