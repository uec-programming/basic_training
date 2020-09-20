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
# 13　難易度設定を追加してみよう

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
        self.difficulty = 3 # 今回は設定
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
        # ↑矢印キーを押して、且つ難易度が4未満であれば
        if pyxel.btnp(pyxel.KEY_UP) and self.manager.difficulty < 4:
            # 難易度を一個上げる
            self.manager.difficulty += 1
        # ↓矢印キーを押して、且つ難易度が0未満であれば
        elif pyxel.btnp(pyxel.KEY_DOWN) and self.manager.difficulty > 1:
            # 難易度を一個下げる
            self.manager.difficulty -= 1
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
        if pyxel.btnp(pyxel.KEY_R):
            self.manager.scenes['play'].reset_game()
            self.manager.current_scene = 'play'

    def draw(self):
        pyxel.cls(3)
        messages = [
                "Welcome to Sample Game!",
                "LEVEL: {}".format(self.manager.difficulty),
                "press up / down arrow to change level",
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
        self.enemy_number = self.manager.difficulty
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
```python=89
class SceneManager:
    """
    シーンマネージャーのクラス
    シーンを管理する中枢となるクラスで、各シーンのupdateとdrawを呼び出す
    """
    def __init__(self):
        self.current_scene = 'title'
        self.difficulty = 3 # 今回は設定
        self.scenes = {
                'title':TitleScene(self),
                'play':PlayScene(self),
                'win':WinScene(self),
                'game_over':GameOverScene(self)
                }
```
96行目が難易度を表す数、3はデフォルトの難易度として代入しています。<br>
`difficulty`は`TitleScene`も`PlayScene`読み込むので、この2つのシーンが同時にアクセスするのは`SceneManager`なので、このクラスの中で定義します。<br>
他の共通で参照変数もあれば、この共通でアクセスできるクラスの中で書くべきです。

```python=111
class TitleScene:
    """
    ゲームタイトルのシーンクラス
    ゲームが始まるとこのシーンが一番最初に読み込まれる
    """
    def __init__(self, manager_class):
        self.manager = manager_class
        pass
    
    def update(self):
        # ↑矢印キーを押して、且つ難易度が4未満であれば
        if pyxel.btnp(pyxel.KEY_UP) and self.manager.difficulty < 4:
            # 難易度を一個上げる
            self.manager.difficulty += 1
        # ↓矢印キーを押して、且つ難易度が0未満であれば
        elif pyxel.btnp(pyxel.KEY_DOWN) and self.manager.difficulty > 1:
            # 難易度を一個下げる
            self.manager.difficulty -= 1
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()
        if pyxel.btnp(pyxel.KEY_R):
            self.manager.scenes['play'].reset_game()
            self.manager.current_scene = 'play'
```
121行からは、難易度調整用のコードになります。<br>
124は「上矢印を押した」且つ「難易度が4未満のとき」を条件にして、難易度が一個上げられます。<br>
128は「下矢印を押した」且つ「難易度が1以上のとき」を条件にして、難易度が一個下げられます。<br>

```python=135
    def draw(self):
        pyxel.cls(3)
        messages = [
                "Welcome to Sample Game!",
                "LEVEL: {}".format(self.manager.difficulty),
                "press up / down arrow to change level",
                "press R to start",
                "press Q to quit"
                ]
        for idx,itm in enumerate(messages):
            pyxel.text(pyxel.width//2-len(itm)*2, pyxel.height//2+8*idx, itm, 15)
```
139行は現在の難易度を表示する文字列になります。`.format()`メソッドで`self.manager.difficulty`を`"LEVEL: {}"`の中の`{}`に表示させます。<br>
140行は操作のヒントになる文字列です。

```python=148
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
        self.enemy_number = self.manager.difficulty
        # リストの作り方は2通りある
        self.enemys = [Enemy(random.choice([0, pyxel.width]), random.randint(0, pyxel.height), target=self.player) for _ in range(self.enemy_number)]

```
164行はもともと`3`と代入して、毎回固定で3個の敵が生成されました。<br>
今は`self.manager.difficulty`、つまりSceneManagerの中の`difficulty`を参照しているので、難易度調整の数字によって、敵が生成されます。