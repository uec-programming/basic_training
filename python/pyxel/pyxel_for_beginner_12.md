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
# 12　シーンマネージャーを作ってみよう
シーンマネージャーはゲームのシーン切り替えなどを管理する仕組みです。これをマスターすれば、ゲームの作成も簡単になります。<br>
シーンマネージャーはゲームのシーンの増大につれ、シーンの切り替えが複雑になるのを避けるためのもので、今回はタイトル画面(タイトルシーン)を追加するのを例に、シーンマネージャーを作ってみましょう。
![](https://i.imgur.com/6jtv8wP.gif)

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
            

class SceneManager:
    """
    シーンマネージャーのクラス
    シーンを管理する中枢となるクラスで、各シーンのupdateとdrawを呼び出す
    """
    def __init__(self):
        self.current_scene = 'title'
        self.difficulty = '3' # 今回は使わない
        self.scenes = {
                'title':TitleScene(self),
                'play':PlayScene(self),
                'win':WinScene(self),
                'game_over':GameOverScene(self)
                }

    def update(self):
        self.scenes[self.current_scene].update()

    def draw(self):
        self.scenes[self.current_scene].draw()



class TitleScene:
    """
    ゲームタイトルのシーンクラス
    ゲームが始まるとこのシーンが一番最初に読み込まれる
    """
    def __init__(self, manager_class):
        self.manager = manager_class
        pass
    
    def update(self):
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
        if pyxel.btnp(pyxel.KEY_R):
            self.manager.scenes['play'].reset_game()
            self.manager.current_scene = 'play'

    def draw(self):
        pyxel.cls(3)
        messages = [
                "Welcome to Sample Game!",
                "press R to start",
                "press Q to quit"
                ]
        for idx,itm in enumerate(messages):
            pyxel.text(pyxel.width//2-len(itm)*2, pyxel.height//2+8*idx, itm, 15)


class PlayScene:
    """
    ゲーム本体のシーンクラス
    プレイする部分のオブジェクトの操作をやっている
    """
    def __init__(self,manager_class):
        "manager_classは一つ外のSceneManagerクラスと通信するための変数"
        self.manager = manager_class
        self.reset_game()

    def reset_game(self):
        # APPの中に箱(Box)のインスタンス(box)を作成する
        self.box = LightingBox(10, 10)
        # APPの中にplayerのインスタンスを作成する
        self.player = Player()
        # 敵のインスタンスをリストで作成する
        self.enemy_number = 3
        # リストの作り方は2通りある
        self.enemys = [Enemy(random.choice([0, pyxel.width]), random.randint(0, pyxel.height), target=self.player) for _ in range(self.enemy_number)]

    def update(self):
        # アプリのupdate関数はフレーム更新するごとに、各インスタンスのupdateも呼び出さないと、他のクラスは動かない
        self.player.update()
        for i in self.enemys:
            i.update()
        self.box.update()
        # 目標の箱に衝突したかを見る
        if self.player.is_collided(self.box):
            self.manager.current_scene = 'win'
        # playerの衝突検出も全部の敵とやらないといけない
        for i in self.enemys:
            if self.player.is_collided(i): # どれかの敵に接触したらplayerが死ぬ
                self.manager.current_scene = 'game_over'
                break

    def draw(self):
        pyxel.cls(0)
        self.box.draw()
        self.player.draw()
        for i in self.enemys:
            i.draw()


class GameOverScene:
    """
    ゲームオーバのシーンクラス
    このシーンで行われる描画と受付する入力について定義する
    """
    def __init__(self, manager_class):
        self.manager = manager_class


    def update(self):
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
        if pyxel.btnp(pyxel.KEY_R):
            self.manager.current_scene = 'title'

    def draw(self):
        pyxel.cls(2)
        messages = [
                "YOU DIE !!",
                "press R to get back to title",
                "press Q to quit"
                ]
        for idx,itm in enumerate(messages):
            pyxel.text(pyxel.width//2-len(itm)*2, pyxel.height//2+8*idx, itm, 14)


class WinScene:
    """
    ゲーム勝利のシーンクラス
    このシーンで行われる描画と受付する入力について定義する
    """

    def __init__(self, manager_class):
        self.manager = manager_class

    def update(self):
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
        if pyxel.btnp(pyxel.KEY_R):
            self.manager.current_scene = 'title'

    def draw(self):
        pyxel.cls(1)
        messages = [
                "YOU WIN !!!",
                "press R to get back to title",
                "press Q to quit"
                ]
        for idx,itm in enumerate(messages):
            pyxel.text(pyxel.width//2-len(itm)*2, pyxel.height//2+8*idx, itm, 15)


class App:
    """箱を追い込むゲーム"""
    def __init__(self):
        pyxel.init(160, 120, fps=20)
        self.scene_manager = SceneManager()
        pyxel.run(self.scene_manager.update, self.scene_manager.draw)


if __name__ == '__main__':
    App()
```

## 解説
今回は百行くらいの違いがあったが、その殆どが以前書いたコードのコピペなので、そんなに心配しないでください。<br>
前章のゲーム画面の切り替えをまず考えてみてください。前章は3つのゲームシーンがあり、ゲーム進行シーンからプレイヤー死亡に移行すると、ゲーム進行シーンからゲーム終了(勝利)に移行すると、ゲーム終了やプレイヤー死亡画面からゲーム進行の画面に移行することができます。<br>
これらの煩雑な画面遷移は全部`update`の中でフラグの管理しながら、`draw`でフラグに応じて、if文を書いていました。<br>
このやり方には多くの問題点があります。<br>
新しいシーンを追加するたびに、そのシーンと他のシーンを区別するためのフラグ変数を用意する必要があります。<br>
更に、描画と操作の受付もフラグ変数に沿って処理されるので、多対多のシーン移行の処理が複雑になりえます。<br>
また、シーンの数だけ、フラグ変数を判定するためのif文が必要なので、1フレームごとに、シーンを特定するための時間複雑度はO(n)　(nはシーンの数)になり、プログラムの実行効率も悪いです。このプログラムの実行効率が悪いと、ゲームに反映すると、ゲーム進行するときのラグになります。

```python=89
class SceneManager:
    """
    シーンマネージャーのクラス
    シーンを管理する中枢となるクラスで、各シーンのupdateとdrawを呼び出す
    """
    def __init__(self):
        self.current_scene = 'title'
        self.difficulty = '3' # 今回は使わない
        self.scenes = {
                'title':TitleScene(self),
                'play':PlayScene(self),
                'win':WinScene(self),
                'game_over':GameOverScene(self)
                }

    def update(self):
        self.scenes[self.current_scene].update()

    def draw(self):
        self.scenes[self.current_scene].draw()
```
89行目からは「シーンマネージャー」のクラスになります。このシーンマネージャーは各シーンの移行するための仲介の役割を果たしています。<br>
このクラスで「辞書」のテクニックを使いました。<br>
`self.scenes`でキーにシーンの名前、バリューにシーンのインスタンスを入れています。<br>
現在ゲーム画面に表示されているシーンのインスタンスは常に`self.scenes[self.current_scene]`になるので、`current_scene`と対応するそのインスタンスの`update()`と`draw()`を呼び出せばいい。<br>
95行目は`self.current_scene`初期化されたときのシーンの名前を代入しています。ゲームに入ると一番最初に表示されるシーンはタイトルシーンなので、`title`を代入しています。この`title`は`self.scenes`の中で`TitleScene()`と対応しています。<br>
97行からはこのゲームに必要なシーンを辞書`self.scenes`に保存します。<br>
ここで注意すべきのは、インスタンス化するときに受け取った引数のことです。ここで実引数に`self`を取っています。つまり、ゲームの各シーンで、このスーパクラス(シーンマネージャークラス)を参照することがあるということです。ここの参照について後で詳しく述べます。<br>
`update()`と`draw()`は単純に`self.scenes[self.current_scene]`の`update()`と`draw()`を呼び出せばいいです。これは、他のゲームシーンの中にすでに`update()`と`draw()`が実装されたことが前提となっています。<br>
この辞書のやり方で、フラグ変数によるシーンの遷移管理がなくなり、シーンの特定も時間複雑度O(1)になってので、見た目も効率も良くなりました。
```python=112
class TitleScene:
    """
    ゲームタイトルのシーンクラス
    ゲームが始まるとこのシーンが一番最初に読み込まれる
    """
    def __init__(self, manager_class):
        self.manager = manager_class
        pass
    
    def update(self):
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
        if pyxel.btnp(pyxel.KEY_R):
            self.manager.scenes['play'].reset_game()
            self.manager.current_scene = 'play'

    def draw(self):
        pyxel.cls(3)
        messages = [
                "Welcome to Sample Game!",
                "press R to start",
                "press Q to quit"
                ]
        for idx,itm in enumerate(messages):
            pyxel.text(pyxel.width//2-len(itm)*2, pyxel.height//2+8*idx, itm, 15)
```
今回はこのタイトル画面を新しく実装します。<br>
一つのシーンとして独立して存在しているので、`update()`と`draw()`の中にこのシーンと関連あるものだけを書きます。<br>
今まで使ってきたフラグなどは一切使っていまん。<br>
その代わりに、クラス初期化の`__init__()`の引数に`manager_class`を受け取っています。<br>
この引数に、マネージャークラスを入れる必要があります。上のマネージャークラスの初期化の中で、`TitleScene(self)`と書いたが、この`self`は`manager_class`として読み込まれます。こうすると、この`TitleScene`から`SceneManager`の中を参照できるようになります。<br>
121行からは開始画面で受付する操作を書きます。<br>
122~123はいつもあるQで退出する操作の部分です。<br>
124からははRを押した後の操作です。Rでゲームを開始したいが、SceneManagerは`SceneManager`の中の`scenes[current_scene]`のupdate()しか実行しません。ゲームのプレイシーンは`SceneManager.scenes['play']`にあるので、その`SceneManager.current_scene`を変えなければなりません。<br>
125行の`self.manager`は実は`SceneManager`を参照しているので、`self.manager.current_scene`は`SceneManager.current_scene`になります。<br>
`SceneManager.current_scene`に`'play'`を代入するだけで足りません、ゲームの初期化`reset_game()`は`PlayScene`がインスタンス化されたときだけ一回しか実行されてません。二回目のゲームを開始したいとき、ゲームを初期化しないといけませんので、`self.manager.scenes['play'].reset_game()`を実行して、ゲーム画面の初期化を行います。<br>
128行からはタイトル画面の描画になります。フラグによる描画内容の制御が無いため、このシーンにあるものだけを書けばいいです。<br>
前章は3つの変数で表示文字を保存し、それを真ん中に表示させましたが、今回は一つの変数の中に保存し、for文で表示させます。<br>
表示する開始位置や、毎行ずれる高さの計算はなぜこうしたかを自分で考えてみてください。

```python=139
class PlayScene:
    """
    ゲーム本体のシーンクラス
    プレイする部分のオブジェクトの操作をやっている
    """
    def __init__(self,manager_class):
        "manager_classは一つ外のSceneManagerクラスと通信するための変数"
        self.manager = manager_class
        self.reset_game()

    def reset_game(self):
        # APPの中に箱(Box)のインスタンス(box)を作成する
        self.box = Box(10, 10)
        # APPの中にplayerのインスタンスを作成する
        self.player = Player()
        # 敵のインスタンスをリストで作成する
        self.enemy_number = 3
        # リストの作り方は2通りある
        self.enemys = [Enemy(random.choice([0, pyxel.width]), random.randint(0, pyxel.height), target=self.player) for _ in range(self.enemy_number)]

    def update(self):
        # アプリのupdate関数はフレーム更新するごとに、各インスタンスのupdateも呼び出さないと、他のクラスは動かない
        self.player.update()
        for i in self.enemys:
            i.update()
        self.box.update()
        # 目標の箱に衝突したかを見る
        if self.player.is_collided(self.box):
            self.manager.current_scene = 'win'
        # playerの衝突検出も全部の敵とやらないといけない
        for i in self.enemys:
            if self.player.is_collided(i): # どれかの敵に接触したらplayerが死ぬ
                self.manager.current_scene = 'game_over'
                break

    def draw(self):
        pyxel.cls(0)
        self.box.draw()
        self.player.draw()
        for i in self.enemys:
            i.draw()
```
139行からはゲーム進行のメイン画面、`PlayScene`になります。上の新しく追加された`TitleScene`がちゃんと理解されていれば、このシーンもうまく理解できるはずです。<br>
144行の初期化のときは`manager_class`を受け取り、`update()`メソッドのシーン移行するときは、`self.manager`の`current_scene`を書き換えます。<br>
他の部分は全部以前のコードのコピペで、フラグ変数全部削除しただけです。<br>
プレイヤーが光る箱に追いついたら、ゲームは勝利画面の`WinScene`に遷移したいので、マネージャークラスの`current_class`に`'win'`を代入します。<br>
プレイヤーが敵の箱に追いつかれたら、ゲームは死亡画面の`GameOverScene`に遷移したいので、マネージャークラスの`current_class`に`'game_over'`を代入します。<br>
172行の`break`はプログラムの実行効率を上げるために書いた文です。プレイヤーがある敵と接触した瞬間でシーンを遷移するので、その後の敵との状況を知る必要がなくなる、`break`でfor文を中断しています。また、シーン移行の後の処理を避けるために、`return`を使ってもいいです。

```python=182
class GameOverScene:
    """
    ゲームオーバのシーンクラス
    このシーンで行われる描画と受付する入力について定義する
    """
    def __init__(self, manager_class):
        self.manager = manager_class


    def update(self):
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
        if pyxel.btnp(pyxel.KEY_R):
            self.manager.current_scene = 'title'

    def draw(self):
        pyxel.cls(2)
        messages = [
                "YOU DIE !!",
                "press R to get back to title",
                "press Q to quit"
                ]
        for idx,itm in enumerate(messages):
            pyxel.text(pyxel.width//2-len(itm)*2, pyxel.height//2+8*idx, itm, 14)


class WinScene:
    """
    ゲーム勝利のシーンクラス
    このシーンで行われる描画と受付する入力について定義する
    """

    def __init__(self, manager_class):
        self.manager = manager_class

    def update(self):
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
        if pyxel.btnp(pyxel.KEY_R):
            self.manager.current_scene = 'title'

    def draw(self):
        pyxel.cls(1)
        messages = [
                "YOU WIN !!!",
                "press R to get back to title",
                "press Q to quit"
                ]
        for idx,itm in enumerate(messages):
            pyxel.text(pyxel.width//2-len(itm)*2, pyxel.height//2+8*idx, itm, 15)
```
182行からは、以前あった二種類の終了画面、`GameOverScene`はプレイヤーが敵に追いつかれたときのシーン、`WinScene`はプレイヤーが光る箱に追いついたときのシーンになります。<br>
この2つのシーンは全部Rでタイトルシーンに戻るので、同じ`update()`を書きました。<br>
ここでエンディングが違うが、受け付ける入力操作が同じなので、抽象化して、より一般的な`EndingScene`を作っても構いません。
```python=234
class App:
    """箱を追い込むゲーム"""
    def __init__(self):
        pyxel.init(160, 120, fps=20)
        self.scene_manager = SceneManager()
        pyxel.run(self.scene_manager.update, self.scene_manager.draw)
```
以前は個別に`update()`と`draw()`を定義し、`pyxel.run(self.update, self.draw)`でこの2つのメソッドを逐次実行していました。<br>
しかし、今回のシーンマネージャーがあるために、シーンマネージャーの中の`udpate()`と`draw()`を呼び出せばいいので、`App.update()`と`App.draw()`を定義せずに、`pyxel.run(self.scene_manager.update, self.scene_manager.draw)`をやるようにしました。