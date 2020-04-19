---
title: 基本
weight: 20
---

# 基本

## Vue.jsの利用
webpackなどを利用しない場合、CDNを利用して以下のスクリプトを埋め込むことで利用できる。

``` html
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
    <!-- または -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>
```

## Vueインスタンスの初期化
Vueのインスタンスは、HTML中に特定のIDを付けた要素の中に適用される。

HTML:

``` html
    <div id="app">
    </div>
```

Javascript:

``` javascript

    var vm = new Vue({
        el: '#app',
        template: '<span>contents.</span>'  //テンプレートに使用するHTML。この方法は限界があるので、テンプレートは他の方法でも指定可能。
    });
```

### テンプレートを文字列以外の方法で指定する
テンプレートは、Javascript文字列で定義する他、以下の方法でも宣言が可能。

* DOMテンプレート
* 単一ファイルコンポーネント (詳細は後述)

DOMテンプレートは、以下のようなscriptタグを宣言してid属性を使って参照する。

``` html
    <script type="text/x-template" id="my-component">
        <div>A custom component!</div>
    </script>
```

Vueのインスタンスを初期化する際は、 `template: '#my-component'` のように指定する。

!!! caution
    このDOMテンプレート方式では、カスタムのコンポーネント名にkebab-case形式しか利用できないなど幾つかの制限がある。


## 変数
データ定義をすると、`{{ }}` の記号を使用してテンプレート中にデータを出力できる

HTML:

``` html
    <div id="app">
    </div>
```

Javascript:

``` js
    var vm = new Vue({
        el: '#app',
        data: {
            value: 10  //データ定義
        },
        template: '<span>value = {{value}}</span>'
    });
```

### データの出力
`{{ }}` の中では、Javascriptの式を利用できる。これにはいくつか制限がある

* 単一の式しか利用できない
* 許可された一部のオブジェクトしか参照できない
    * Dateなどの一部のグローバルオブジェクト
    * Vueインスタンス内の変数や関数

また、出力される値は全てHTMLエスケープされる。

HTMLエスケープを行わずに値を出力するには、以下のように行う。

``` html
    <!-- valueは、Vueのdataで定義された変数(HTMLを含んでいる)。 -->
    <span v-html="value"></span>
```

HTML属性の中で変数を出力する場合は、 `v-bind` を利用する。

``` html
    <!-- valueは、Vueのdataで定義された変数。 -->
    <span v-bind:class="value"></span>

    <!-- v-bindは省略して":"だけでも記述できる -->
    <span :class="value"></span>
```

class属性に対しては、以下のような特別な指定が可能。

``` html
    <!-- isActiveはdataとして定義されていて、"true"であるとする。 -->
    <span v-bind:class="{ active: isActive }"></span>
    <!-- 次のように変換される -->
    <span class="active"></span>

    <!-- isActive: true, formType: 'label' -->
    <span v-bind:class="[{ active: isActive}, formType]"></span>
    <!-- 次のように変換される -->
    <span class="active label"></span>
```


### データの参照
dataで定義した値は以下のようにVueインスタンスのプロパティとして参照できる。

``` js
    vm.value
```

### データの更新
dataで定義した値はVueが管理するため、値を変更すると依存しているDOM要素も更新される。

``` js
    vm.value = 20;
    //前述の例では、<span>タグ内の値が更新される。
```

## 関数の定義
VueのインスタンスはViewModelとして利用するため、Viewに関するメソッドを定義できる。

メソッドの定義は、viewインスタンスの `methods` に記述する。

HTML: 

``` html
    <div id="app">
    </div>
```

Template:

``` html
    <script type="text/x-template" id="template">
        <button v-on:click="click();">button</button>
    </script>
```

Javascript:

``` js
    var vm = new Vue({
        el: '#app',
        template: '#template',
        methods: {
            click: function() {
                alert('clicked');
            }
        }
    });
```

## ライフサイクルフック
VUeのインスタンスにはcreated, mounted, updatedなどのイベントが定義されており、フックを宣言することが出来る。

Javascript:

``` js
    var vm = new Vue({
        el: '#app',
        template: '#template',
        created: function() {

        }
    });
```

[Instance lifecycle hook] (https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks)

## Computed-properties
dataの変化に応じて自動的に再計算が必要になるものの中で、計算処理が重いなどの理由でキャッシュしたいものや、
複数のdataから計算して算出される値については、computed-propertyが利用できる。


Template:

``` html

    <script type="text/x-template" id="template">
        <span>{{ computedValue }}</span>
        <button v-on:click="click();">button</button>
    </script>
```

Javascript:

``` js
    var vm = new Vue({
        el: '#app',
        template: '#template',
        data: {
            value: 0
        },
        computed: {
            computedValue: function() {
                return value * 2;
            }
        },
        methods: {
            click: function() {
                this.value += 10;
            }
        }
    });
```

## 条件分岐
条件成立時のみ要素を表示する場合は `v-if` ディレクティブを利用する。
`v-else-if`, `v-else` は `v-if` の直後に配置する必要がある。

``` html
    <span v-if:"isOk">OK</span>
    <span v-else-if:"isNg">NG</span>
    <span v-else>ELSE</span>
```

条件分岐に伴って複数の要素が変動する場合、適宜HTMLタグで括って利用する。

``` html
    <template v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username" key="username-input">
    </template>
```

文字列テンプレートの中では、条件分岐は以下のようにも記述できる。

``` html
    {{#if ok}}
        <h1>OK</h1>
    {{/if}}
```


## ループ処理

ループ処理には `v-for` を利用する。

template:

``` html
    <script type="text/x-template" id="template">
        <div>
            <ul>
                <li v-for="item in items">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </script>
```

Javascript:

``` js
    var vm = new Vue({
        el: '#app',
        data:{
            items: [
                { name: 'a'},
                { name: 'b'},
                { name: 'c'}
            ]
        },
        template: '#template',
    });
```

以下のようにすると、index番号(0スタート)も取得できる。

``` html
    <li v-for="(item, index) in items">
```

### 配列操作時の注意事項
Vueは配列への要素の追加、削除などを、Arrayオブジェクトのメソッドを上書きすることで検出しているため、
通常の操作であれば変更を検出できるが、Javascriptの制約から次のような方法での変更を検出できない。

``` js
    vm.items[1].name = 'modified';
```

このような変更を正しくVueに伝搬するためには、Vue.$setを利用する。

``` js
    vm.$set(vm.items, 1, 'modified');
    // または
    Vue.set(vm.items, 1, 'modified');
```

オブジェクトに複数のプロパティを追加するようなケースでは、`assign` や `_.extend` ではなく、
新しいオブジェクトで入れ替えることで対応する。

``` js
    vm.profile = Object.assign({}, vm.profile, {
        newProperty1: 100,
        newProperty2: 200
    });
```

## イベントハンドリング
onClickやonChangeなどのイベントにフックするには、以下のように記述する。

``` html
    <div v-on:click="click()"></div>
    <!-- または -->
    <div @click="click()"></div>
```

`click.prevent` などの修飾子を付けることで、 `preventDefault` などの動作を追加することが出来る。

``` html
    <div v-on:click.prevent="click()"></div>
```

## Form
`v-model` を利用すると、data属性で定義したオブジェクトとの双方向バインディングを簡単に実現することが出来る。

``` html
    <input type="text" v-model="name">
```

ラジオボタンやチェックボックスに対しても、Vue側で判断して値のバインディングが行われる。

以下のように記述すると、入力値は自動でintにキャストされる。

``` html
    <input type="text" v-model:number="score" type="number">
```
