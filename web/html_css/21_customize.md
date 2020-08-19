---
tags: Web_html_css
lang: ja-jp
breaks: false
---

# 1-21 自分だけのウェブページを作ろう

前回までで、ウェブページの作り方の基礎を学びました。ここまで学習を進めてきたなら、自分だけのウェブページを作ることができるはずです。挑戦してみましょう。

## どんなサイトを作るか決める

### 1.目的を決める

何のウェブページを作るか決めましょう。テーマが思いつかなければ以下を参考にしてみましょう。

- 自己紹介
- 所属している学校の紹介
- 住んでいる街の紹介
- 自分が撮影した写真の紹介

### 2.内容を決める

何をウェブページに書くか決めましょう。箇条書きでメモを取ってみると考えを整理しやすいです。

:::warning
:warning: **著作権に注意**

他人が作った画像や文章には著作権が存在します。許可なくコピーして公開すると無断転載となるので気をつけましょう。
:::

### 3. 実際に作る

コードを書いてブラウザで表示しましょう！
:::info
少し書いたら期待通りに表示されるか確認することを繰り返しましょう。一度に全てのコードを書いてから確認する方法を取ると、修正すべき場所を見つけるのに苦労することがあります。
:::

### 4. 公開する

サーバーにアップロードして、誰からでもアクセスできるようにしましょう。

1. {GitHub|ギットハブ}アカウントを取得する。[GitHub](https://github.com/)にアクセスし、ユーザー名などを入力していきます。  
::: info
ユーザー名はURLの一部にもなるので、短めでわかりやすく他人とかぶらないアルファベットを選びましょう。
:::
::: info
学生はProアカウントの機能を無料で使えます。[Github Students Pack<i class="fa fa-external-link"></i>](https://education.github.com/pack)を手に入れましょう！
:::
2. GitHubにリポジトリを作成し、GithubPagesで公開  

:::spoiler VSCodeの場合(クリックして展開)

1. 【GitHubとVSCodeを連携させる】左側のGitタブを選択、"GitHubに発行する"をクリック  
![VSCodeウィンドウ](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/1-vscode.png =x300)

1. 確認画面が表示されるので、GitHubにログイン  
![確認画面](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/2-askprompt.png =x300)

1. ブラウザが立ち上がり、VSCodeにGitHubを連携させることを確認。"Continue"(続ける)をクリック  
![確認画面](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/3-auth.png =x300)


1. ブラウザが立ち上がり、VSCodeにGitHubを連携させることを確認。"Continue"(続ける)をクリック  
![確認画面](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/4-login.png =x300)

1. VSCode用拡張機能が利用する権限を確認し、"Authorise github"(認証)をクリック  
![権限の確認](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/5-permission.png =x300)

1. Success!(成功)が表示されたら、"Open Visual Studio Code"をクリックしてVSCodeを開く  
![権限の確認](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/6-success.png =x300)

1. 拡張機能がURLを開くことを許可する  
![拡張機能](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/7-extension.png =x300)

1. 【GitHubにリポジトリを作成する】リポジトリ名を決定する。小文字のアルファベットと、ハイフン(`-`)を用いるのが一般的。  
![リポジトリ名の確認](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/8-repository-name.png =x300)

1. リポジトリに含めるファイルを選択。  
![ファイルの確認](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/9-include.png =x300)

1. "Uploading Files"(ファイルをアップロードしています)と表示されるのでしばらく待つ  
![アップロード中](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/10-uploading.png =x300)


1. "Successfully published"と表示されればアップロード完了  
![アップロード完了](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/11-success.png =x300)


1. 自分のGitHubアカウントページを開き、確認する。右端の"Settings"タブをクリック  
![アップロード完了](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/12-check.png =x300)

1. 【GitHub Pagesで公開する】GitHub Pagesの欄で、Sourceをmasterにし、"Save"をクリック  
![GitHub Pagesの設定](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/13-ghpages.png =x300)

1. URLが表示される。これが公開アドレス。  
![設定完了](https://uec-programming.github.io/basic_training/web-sample/img/vscode-github/14-published.png =x300)
:::

:::info
講師に手伝ってもらいながら進めましょう。
:::

<!-- GitHub VSCodeから -->

## 作品制作の方法

### 方法1: ここまで作ったページをアレンジする

まずは、前回までに作成した「電通 太郎のホームページ」をアレンジして、自分だけのウェブページに変えてみましょう。

- 文章を変えてみましょう。 
- `<h1>`要素や`<h2>`要素で作った見出しの色や大きさを変えてみましょう。
- 文字サイズや大きさも変えてみましょう。
- 画像を変えてみましょう。


### 方法2: 新しくウェブページを作る

新しく1からウェブページを作るときには、実際にコードを書く前にしっかり設計することが大切です。どのようなウェブページを作るのかしっかり考えを整理してからコードを書いていきましょう。


