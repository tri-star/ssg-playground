# MarkDown記法

## 見出し

```

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

```
``` bash
 #!/bin/bash

 # comment
 A=10
 B="abcdefg"
 echo "A=${A}B=${B}"

 ps aux | grep "AAAA"
```
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
``` bash{4-6}
 #!/bin/bash

 # comment
 A=10
 B="abcdefg"
 echo "A=${A}B=${B}"

 ps aux | grep "AAAA"
```
```
```

**出力結果**

``` bash{4-6}
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

``` md
::: tip
注釈メッセージ
:::

::: warning
注釈メッセージ(警告)
:::

::: danger
注釈メッセージ(注意)
:::
```

**出力結果**

::: tip
注釈メッセージ
:::

::: warning
注釈メッセージ(警告)
:::

::: danger
注釈メッセージ(注意)
:::

### タイトルを指定

``` md 
::: tip "この機能について"
注釈メッセージ
:::
```

**出力結果**

::: tip "この機能について"
注釈メッセージ
:::

## 折り畳み可能な注釈

``` md
::: details
注釈メッセージ
:::
```

**出力結果**

::: details
注釈メッセージ
:::


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

``` md
[[toc]]
```

[[toc]]
