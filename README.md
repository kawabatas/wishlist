wishlist
========
korehoshi
=========

アプリ「これほし」用のリポジトリ．

コンセプト
=============
欲しいもので繋がるSNS

対応機種
=======
iPhone5 (Retina Display)

機能概要
=====
欲しいもの管理
------------
* 欲しいものを携帯のカメラで撮影して登録
* ブックマークレットでブラウザから登録

ランキング
---------
* 性別，年代別等でwantのランキングを表示


外部サイト連携
----------
* Amazonのウィッシュリストから欲しいものを取得，購入済み商品を反映
* Webページからブックマークレットで欲しいものを取り込み


SNS連携
--------
* Ameba, Twitter, Facebook, Google+へ欲しいものの投稿可能

全機能詳細
======
フィード
---------
全会員が投稿したモノを最新順で表示する．

ホーム
------
自分が投稿したモノを最新順で表示する．

投稿する
------
カメラで撮影またはカメラロールで指定した画像とコメントを入力してwant（欲しいモノ）投稿できる．
加えて，商品名，金額，タグ，URL，ホシ度，コレホシ内での公開非公開，外部SNSでの連携投稿の有無を選択することができる．

ランキング
----------
男女別，年代別で，want+haveの数を，1:1で，多い順にソートして表示．
集計期間は，daily, weekly, monthlyで切り替えて表示できる．


アカウント
------
プロフィール編集，パスワード変更，SNS接続の設定が可能．また，ユーザ検索機能（検索結果等からフォローができる），have, want follow followerの数も表示する．






既存サービスとの違い
==============
sumally
-------





開発について
============

ソース変更の流れ
-----------------
修正者）ブランチを切って修正→コミット．プルリクエストを出す．

検証者）検証取れたらマージ

修正者と検証者は極力別人が行うことが望ましい．
コミットメッセージは原則日本語で行う．

ブランチ命名規則
----------------
[ブランチの種類]_[そのブランチで行う変更の概要を英数字，アンダーバーで]

例)feature_add_login （ログイン機能を追加）

* feature : 機能追加・改善
* hotfix : バグフィックス
* refactor : リファクタリング
* chore : 上記以外の修正
