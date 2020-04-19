---
title: インストール
weight: 10
---

# インストール

``` bash
# フレームワーク本体のインストール
yarn add vue

# vue-cliを利用する場合
yarn add vue-cli --dev

# webpackと連携する場合(例)
yarn add webpack webpack-cli webpack-manifest-plugin babel-loader babel-preset-env \
    css-loader eslint eslint-loader html-webpack-plugin \
    vue-loader vue-style-loader vue-template-compiler \
    chalk ora rimraf \
    --dev
```
