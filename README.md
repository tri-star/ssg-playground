# SSG Playground

## 概要

Markdownで書いた既存のドキュメントを
整形・管理する方法としてSSGを利用した場合、どのツールが適しているかを検証する用のリポジトリ。

以下の観点を重視して検討します。
SSG自体の

* 既存のMarkdownに手を入れなくても良い 
  (全ページにFrontmatterを仕込む必要がある、等は避けたい)
* 何もしなくてもほどほどに整形が行われる 
  (自分でCSSやHTMLをいじらなくて済む)

## 比較対象

ツール  | テーマ  | URL
-------- | -------------------- | ----------------------
Hugo     | Docsy  | https://www.docsy.dev/
VuePress | @vuepress/theme-vue | https://vuepress.vuejs.org/<br>https://www.npmjs.com/package/@vuepress/theme-vue
Mkdocs   | Material for MkDocs | https://squidfunk.github.io/mkdocs-material/

## イメージ

* [mkdocs](https://ssg-playground-mkdocs.netlify.app)
* [VuePress](https://ssg-playground-vuepress.netlify.app)


## プレビュー方法

### MkDocs

サーバーの起動

``` bash
cd mkdocs
docker-compose up -d
```

確認用URL

```
http://127.0.0.1:8000
```


### VuePress

サーバーの起動

``` bash
cd vuepress
docker-compose up -d
```

確認用URL

```
http://127.0.0.1:8080
```
