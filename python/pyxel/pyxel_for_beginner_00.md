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
</style>
##### 電気通信大学 プログラミング教室 教材 作成者：張 翌坤
# 0　Pyxelの導入
この教材シリーズはPyxelというゲームエンジンの入門教材になります。

Pyxelを使って、ミニゲームを作る入門を手助けするので教材の内容を丸写しではなく、ちゃんと理解してコードを書いてください。

Pyxelを使うにはまず導入が必要、MacOSとWSLのユーザは以下のやり方で導入できでき。

詳しいやり方は[公式のREADME](https://github.com/kitao/pyxel/blob/master/README.ja.md)を読んでください

## MacOS
ここでの導入はanacondaがすでに導入された前提で行います。

まずは以下のコマンドで依存ライブラリーをインストール:
```bash
brew install gcc sdl2 sdl2_image gifsicle
```

次は`pyxel`というパッケージをインストール
```bash
pip install pyxel
```

## WSL (Windows Subsystem for Linux)
ここでの導入はanacondaがすでに導入された前提で行います。

まずは以下のコマンドで依存ライブラリーをインストール:
```bash
sudo apt install libsdl2-dev libsdl2-image-dev gifsicle
```

次は`pyxel`というパッケージをインストール
```bash
pip install pyxel
```
<font color='red'>**注意**:</font>

WSLでインストールしただけでは足りない、xmingのGUIインターフェースも同時に動かして、音声サーバーも同時に動かす必要がある。

音声サーバについて、は[「WSLでの音声再生手順(pyaudio)」](https://hackmd.io/Dn6U-yHZQvGnS3zmp3yYHQ)を参考してください。

## Win10
cmdから`python`コマンドを実行できる前提で行います。

以下のコードでインストール
```
python -m pip install pyxel
```

## 導入後の検証
サンプルゲームを以下のコマンドでダウンロード

```bash
curl -s https://raw.githubusercontent.com/kitao/pyxel/master/pyxel/examples/07_snake.py > 07_snake.py
```

そして実行してみる
```bash
python3 07_snake.py
```
これが動いたら、環境構築が完了したので、次の説明に移していいです。