# Vue Top

## 概要

GoogleでAngularの開発に携わっていたEvan You氏によって開発されたJavascriptフレームワーク。 2014年2月にリリース。

AngularとReactの良いとこ取りの特徴を持っているとされている。

設計の思想としては"Progressive Framework"というのが意識されているそうで、 少ない学習コストで小規模に始めることが出来て、必要に応じて利用する周辺機能を増やすことで 複雑なアプリケーションにも対応できる方針とされている。

## Vue.js内部の動作について抑えておきたい点

* Vue.jsの双方向のデータバインディングは、dataに定義したプロパティに対し 暗黙のうちに監視用のsetter/getterが設定されることで行われている。
* dataのプロパティがmethodsやcomputedで定義された関数から参照された場合、 Vue.jsはそれを検知してdata <-> methods(computed)が関連付けられていると判断する。 (DOM要素はdataやmethods, computedなどと関連付けられているので、dataなどが変更されたタイミングで 再描画が必要と判断できる)
* dataが変更された場合、Vue.js内部では変更内容はキューに蓄積される。 この変更はプロパティ(？)単位で蓄積されており、同じ項目に連続で変更が送信されても 余計な計算は発生しないようになっている。 キューはVue.js内部の1回のTickでフラッシュされる。

## 詳細

* [インストール](./install.md)
* [基本](./basic.md)
* [コンポーネント](./component.md)
* [Transition](./transition.md)
