### お客さんの依頼とその対応項目：
QRなんのカードか表示する✅
◯・カードみやすくする(Twitterに近づける)
◯・Fold Call Raise Allin ボタンは全プレイヤーじゃなくて、一個にまとめたい
◯・ディーラーボタン誰からスタートか決めれるように(選択する)、ゲームの途中でも誰がするか決めれるようにする

### 現状
新規プロジェクトを作り上げて、そのコアの部分をRaiseのシステムから移す
Raiseのコア：oddsSystem, liveView, players, forDealer (jade,js), style css, oddsSystem css

現在のシステムは、NodeJsとExpressとSocket.ioを使う。
開発環境：Mac（Windows,仮想環境のUbuntuでも可）

### インストール流れ
1. NodeJs
2. npm
3. express
4. socket.io

### 実行手順
1. Terminalを開く
2. アプリのフォルダーへアクセス
  例： ``` cd /pokerapp ```
3. npmを開始
    ```npm start```

### Raiseのコアから移した一覧
- [x] Settings （ボックスの外形編集・機能追加のボタンなどはこちら）
- [x] Dealer
- [x] Gamesystem（ゲームの流れ・仕組みなど）
- [x] Socket_event
- [x] Tableinfo
- [ ] Assets
- [ ] LiveView
- [ ] Index jade
- [ ] Layout jade
- [x] Background
- [x] StyleSheets（css)
- [x] Index //home page

# 追加項目
- [ ] イベントメッセージ
- [x] 金額のスライデーhttps://codepen.io/ATC-test/pen/myPNqW

# 編集・追加の流れ
- Pug/jadeのモジュールを作成（Htmlページの作成と同様：html→css→js）
- Gameの仕組みの編集：./modules/oddsSystem.js　の方で。
    もし、新しい機能を追加することになったら、上のファイルを深くまでかいしゃくし

# 現在編集中の項目
GameSystem
- [x] Action-bar(slider)
- [ ] liveView
- [ ] playerBox
- [ ] Board
- [ ] EventMessege

### NodeJs、Expressとは
https://developer.mozilla.org/ja/docs/Learn/Server-side/Express_Nodejs/Introduction

そして、現状を配信側から他のユーザーに送信するため、socket.ioを使う。
https://socket.io/get-started/chat#Getting-this-example

### 他の参考文献
Build new app in Visual Studio Code
https://docs.microsoft.com/ja-jp/visualstudio/javascript/tutorial-nodejs?view=vs-2019
https://qiita.com/etet-etet/items/1c65b934dbe7fc33490b

Docker化（仮想環境を立ち上げずにアプリを実行・試作のため）
https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/

カメラ・ビデオの搭載
https://www.html5rocks.com/en/tutorials/getusermedia/intro/

Canvas
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage


### あとがき
英語の記事ばかり、そして変な日本語本当に申し訳ないです。
不明確なところがあれば、
私の個人メール donthaido@gmail.com
またはチャットワークでお気軽に連絡してください。
できる限りすぐ対応します！