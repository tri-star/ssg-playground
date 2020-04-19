# MarkDown記法(SSG固有のものを含む)

## 見出し

```

## レベル2

### レベル3

```

**出力結果**

## レベル2

### レベル3

## コードブロック

mkdocs.ymlに以下の追加が必要です。

``` yaml
markdown_extensions:
  - codehilite
```

### 言語を指定したハイライト (SSG固有)

 「```」の後で言語を指定することで、その言語に応じたマークアップが行われます。

例:

``` raw
 ``` bash
 #!/bin/bash

 # comment
 A=10
 B="abcdefg"
 echo "A=${A}B=${B}"

 ps aux | grep "AAAA"
 ```
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

``` md
 ``` bash hl_lines="3 4 5 6"
 #!/bin/bash

 # comment
 A=10
 B="abcdefg"
 echo "A=${A}B=${B}"

 ps aux | grep "AAAA"
 ```
```

**出力結果**

``` bash hl_lines="3 4 5 6"
#!/bin/bash

# comment
A=10
B="abcdefg"
echo "A=${A}B=${B}"

ps aux | grep "AAAA"

```

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
[Markdown記法](./markdown.md)
```

**出力結果**

[Markdown記法](./markdown.md)


### 外部リンク

``` md
[Google](https://www.google.co.jp/)
```

**出力結果**

[Google](https://www.google.co.jp/)


## 画像

``` md
![cat](./images/cat.png)
```

**出力結果**

![cat](./images/cat.png)


## 注釈 (SSG固有)

### 標準の形式

注釈にはnote, warningの他、`danger`, `info`など様々なものが存在します。

参照: [Admonition](https://squidfunk.github.io/mkdocs-material/extensions/admonition/)

mkdocs.ymlに以下の追加が必要です。

``` yaml
markdown_extensions:
  - admonition
```


**markdown**

``` md
!!! note
    注釈メッセージ

!!! warning
    注釈メッセージ(警告)

!!! success
    注釈メッセージ(成功)

```

**出力結果**

!!! note
    注釈メッセージ

!!! warning
    注釈メッセージ(警告)

!!! success
    注釈メッセージ(成功)

### タイトルを指定

``` md 
!!! note "この機能について"
    注釈メッセージ

```

**出力結果**

!!! note "この機能について"
    注釈メッセージ


## 折り畳み可能な注釈

mkdocs.ymlに以下の追加が必要です。

``` yaml
markdown_extensions:
  - pymdownx.details
```

**Markdown**

``` md
??? note "注釈"
    注釈メッセージ
```

**出力結果**

??? note "注釈"
    注釈メッセージ
    注釈メッセージ
    注釈メッセージ


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

mkdocsでは目次は右ペインに表示されます。
