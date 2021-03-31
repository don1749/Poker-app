お客さんの依頼とその対応項目：
QRなんのカードか表示する✅
◯・カードみやすくする(Twitterに近づける)
◯・FCRAボタンは全プレイヤーじゃなくて、一個にまとめたい
◯・ディーラーボタン誰からスタートか決めれるように(選択する)、ゲームの途中でも誰がするか決めれるようにする

現状：新規プロジェクトを作り上げて、そのコアの部分をRaiseのシステムから移す
Raiseのコア：oddsSystem, liveView, players, forDealer (jade,js), style css, oddsSystem css

現在のシステムは、NodeJsとExpressとSocket.ioを使う。
開発環境：Mac（Windows,仮想環境のUbuntuでも可）

Raiseからデータ移し一覧
- [ ] Settings （ボックスの外形編集・機能追加などはこちら）
- [x] Dealer
- [x] Gamesystem
- [x] Socket_event
- [x] Tableinfo
- [ ] Assets
- [ ] Config
- [ ] LiveView
- [ ] Index jade
- [ ] Layout jade
- [ ] OddsSystem
- [x] Background
- [x] StyleSheets
- [x] Index

追加項目
- [ ] イベントメッセージ
- [ ] 金額のスライデーhttps://codepen.io/ATC-test/pen/myPNqW

編集・追加の流れ
- Pug/jadeのモジュールを作成（Htmlページの作成と同様：html→css→js）
- Gameの仕組みの編集：./modules/oddsSystem.js　の方で。
    もし、新しい機能を追加することになったら、上のファイルを深くまでかいしゃくし

現在編集中の項目
GameSystem
- [ ] Action-bar(slider)
- [ ] liveView
- [ ] playerBox
- [ ] Board
- [ ] EventMessege

NodeJs、Expressとは
https://developer.mozilla.org/ja/docs/Learn/Server-side/Express_Nodejs/Introduction

そして、現状を配信側から他のユーザーに送信するため、socket.ioを使う。
https://socket.io/get-started/chat#Getting-this-example

他の参考文献
Build new app in Visual Studio Code
https://docs.microsoft.com/ja-jp/visualstudio/javascript/tutorial-nodejs?view=vs-2019
https://qiita.com/etet-etet/items/1c65b934dbe7fc33490b

Docker化（仮想環境を立ち上げずにアプリを実行・試作のため）
https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/

カメラ・ビデオの搭載
https://www.html5rocks.com/en/tutorials/getusermedia/intro/

Canvas
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage

あとがき
英語の記事ばかり、そして変な日本語本当に申し訳ないです。
不明確なところがあれば、
私の個人メール donthaido@gmail.com
またはチャットワークでお気軽に連絡してください。
できる限りすぐ対応します！