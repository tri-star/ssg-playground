---
title: Markdown
---

# MarkDown記法

## 見出し

``` markdown

## レベル2

### レベル3

```

**出力結果**

## レベル2

### レベル3

## コードブロック

### 言語を指定したハイライト (SSG固有)

 「```」の後で言語を指定することで、その言語に応じたマークアップが行われます。

例:

``` md
` ` ` bash
 #!/bin/bash

 # comment
 A=10
 B="abcdefg"
 echo "A=${A}B=${B}"

 ps aux | grep "AAAA"
` ` `
```

**出力結果**

``` bash
#!/bin/bash

# comment
A=10
B="abcdefg"
echo "A=${A}B=${B}"

ps aux | grep "AAAA"

```


### 特定行のハイライト (mkdocs固有)

不明

## キーワード

``` md
この場合は`find`コマンドを実行します。
```

**出力結果**

この場合は`find`コマンドを実行します。


## リンク

### 内部リンク (mkdocs固有)

相対パスでドキュメントのファイルを指定する。

``` md
[Markdown記法]({{< relref "./markdown.md" >}})
```

**出力結果**

[Markdown記法]({{< relref "./markdown.md" >}})


### 外部リンク

``` md
[Google](https://www.google.co.jp/)
```

**出力結果**

[Google](https://www.google.co.jp/)


## 画像

``` md
![](/images/cat.png)
```

{{< alert title="注意" >}}ローカルの画像を参照させる場合、

画像のパスは"/"で始まる形式で指定する必要があります。
{{< /alert >}}

**出力結果**

![](/images/cat.png)


## 注釈 (SSG固有)

### 標準の形式

``` md
{ {< alert >} }注釈メッセージ{ {< /alert >} }

{ {< alert color="warning" >} }注釈メッセージ(警告){ {< /alert >} }

{ {< alert color="success" >} }注釈メッセージ(成功){ {< /alert >} }
```

**出力結果**

{{< alert >}}注釈メッセージ{{< /alert >}}

{{< alert color="warning" >}}注釈メッセージ(警告){{< /alert >}}

{{< alert color="success" >}}注釈メッセージ(成功){{< /alert >}}

### タイトルを指定

``` md 
{ {< alert title="注意" >} }注釈メッセージ{ {< /alert >} }
```

**出力結果**

{{< alert title="注意" >}}注釈メッセージ{{< /alert >}}

## 折り畳み可能な注釈

不明

## テーブル

```
id   | name | description
---: | ---- | --------------------
 100 | test | 説明文
 101 | test2 | 説明文2
 102 | test3 | 説明文3
 103 | test4 | 説明文4
```

**出力結果**

id   | name | description
---: | ---- | --------------------
 100 | test | 説明文
 101 | test2 | 説明文2
 102 | test3 | 説明文3
 103 | test4 | 説明文4


## 目次 (SSG 固有)

Hugoでは目次は右ペインに表示されます。
