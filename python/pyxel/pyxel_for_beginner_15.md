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
# 15　箱を画像で代替してみよう
今回は、ドット絵で箱を代替してみましょう。
![](https://i.imgur.com/OqnAV0c.gif)

## 前作業
ドット絵を使う前に、まずは絵を書かないといけません。<br>
以下の命令でリソースファイルを作成してください。
```bash
pyxeleditor resource00.pyxres
```

ここの`.pyxres`はpyxel専用のリソースファイルの拡張子になります。<br>
`resource00.pyxres`は編集するリソースファイルのパスになります。

コマンドを実行したら、以下のようなウィンドウが出てくるので、自分の好きな動物のドット絵を書いてみましょう。
![](https://i.imgur.com/2NSZEpz.png)

描き終わりましたら、保存して(`ctrl+C`やウィンドウ上部の保存ボタン)ください。

## コード
```python=
import pyxel
import math
import random
from pyxelunicode import PyxelUnicode

# フォントのパスを指定する,ファイル名の拡張子は*.tff(TrueTypeFont)
font_path = "/path/to/your/font/file.ttf"
# ピクセルフォントのデフォルトの大きさ
font_size = 8
# make a pyxelunicode instance
pyuni = PyxelUnicode(font_path, font_size)

image_data = { # 'key': (img, u, v, w, h)
        'cat':(0, 0, 0, 16, 16)
        }


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
    def __init__(self, x=80, y=5, w=16, h=16, speed=2, color=6):
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

    def draw(self):
        pyxel.blt(round(self.x), round(self.y), *image_data['cat'])


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
        self.difficulty = 3 # 今回は使わない
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
                "「箱キャッチ」へようこそ！",
                "難易度: {}".format(self.manager.difficulty),
                "上/下矢印で難易度変更",
                "Rを押して開始",
                "Qを押して退出"
                ]
        for idx,itm in enumerate(messages):
            pyuni.text(pyxel.width//2-len(itm)*4, pyxel.height//2+8*idx, itm, 15)


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
                "死亡しました！",
                "Rを押してタイトル画面に戻る",
                "Qを押して退出"
                ]
        for idx,itm in enumerate(messages):
            pyuni.text(pyxel.width//2-len(itm)*4, pyxel.height//2+8*idx, itm, 14)


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
                "あなたの勝ち！",
                "Rを押してタイトル画面に戻る",
                "Qを押して退出"
                ]
        for idx,itm in enumerate(messages):
            pyuni.text(pyxel.width//2-len(itm)*4, pyxel.height//2+8*idx, itm, 15)


class App:
    """箱を追い込むゲーム"""
    def __init__(self):
        pyxel.init(160, 120, fps=20)
        resource_path = '/Users/yk.zhang/Programming/python3/pyxel_test/resource00.pyxres'
        pyxel.load(resource_path)
        self.scene_manager = SceneManager()
        pyxel.run(self.scene_manager.update, self.scene_manager.draw)


if __name__ == '__main__':
    App()


```

## 解説

```python=13
image_data = { # 'label': (img, u, v, w, h)
        'cat':(0, 0, 0, 16, 16)
        }
```
まずは自分の書いた絵の情報を辞書に保存します。そのまま情報をベタ書きでもいいが、使うときの利便性を考慮して、辞書に保存しておきます。

![](https://i.imgur.com/fzKlew9.png)

この辞書の中に、画像のラベル文字列がキーになります。ここでは`'cat'`がラベルになります。<br>
次は連続した5つの数字がそれぞれ(リソース画像番号、画像がリソース上のx座標、画像がリソース上のy座標、画像の横幅、画像の縦幅)になります。この5つの情報があれば、リソースファイルから画像を読み取れます。

```python=85
    def draw(self):
        pyxel.blt(round(self.x), round(self.y), *image_data['cat'])
```
85行目は`Player`の描画メソッドの`draw` になります。

もともと、`Player`の専用描画メソッドはなく、親クラス`Box`の描画メソッドの`draw`(つまり、`Box.draw()`)を使っていましたが、今回、別の画像を描画したいので、ここで、専用の描画メソッド`draw`をオーバーライドして、新しく定義します。

`pyxel.blt()`関数はリソースデータから画像データを読み込んで、スクリーンに描画する関数です。

受け取る引数は以下のようになります。
```python
pyxel.blt(
    スクリーンで描画するときのx座標,
    スクリーンで描画するときのy座標,
    リソース画像番号,
    画像がリソース上のx座標,
    画像がリソース上のy座標,
    画像の横幅,
    画像の縦幅
)
```
`スクリーンで描画するときのx座標,スクリーンで描画するときのy座標`はそれぞれ`Player`自分のx座標とy座標を丸めて`round(self.x), round(self.y)`入れます。

後ろの5つの引数は前に予め`image_data`という辞書型に保存したので、それを使う形で`image['cat']`を入れます。

ここで注意してほしいのは、単純に`image['cat']`を入れているではなく、`*image['cat']`と書きました。前に`*`がついています。これは**引数展開**といいます。

これを展開しないと、`pyxel.blt`が受け取った引数は以下のように見えます。
```python
pyxel.blt(
    スクリーンで描画するときのx座標,
    スクリーンで描画するときのy座標,
    (リソース画像番号,画像がリソース上のx座標,画像がリソース上のy座標,画像の横幅,画像の縦幅) # <-- 一つのtupleが受け取られた
)
```
もともと、受け取りたい引数は**7つ**あるはずだが、そのまま`iamge_data['cat']`を参照すると、実際に受け取った引数は**三つ**しかありません。安直な理解で良いと思って、`*`はそのデータの両側の括弧`()`を取り除いてくれるものだと思ってください。



