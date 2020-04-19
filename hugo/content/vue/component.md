---
title: コンポーネント
weight: 30
---

# コンポーネント

## コンポーネントの初期化(グローバル)
`Vue.component` を利用すると、グローバルに利用可能なコンポーネントを作成できる。

Template:

``` html
    <script type="text/x-template" id="component-template">
        <div>
            <span>Custom component</span>
            <span>{{ value }}</span>
        </div>
    </script>
```

Javascript:

``` js
    var component = new Vue.component('SampleComponent', {
        props: [
            'param'
        ],
        data: function() {
            return {
                value: 0
            };
        },
        template: '#component-template'
    });
```

コンポーネントの利用方法:

``` html
    <div>
        <!-- ここにコンポーネントのHTMLが展開される -->
        <SampleComponent/>
    </div>

    <!-- または、kebab-caseで記述する。DOMテンプレート内ではこの方法しか利用できない -->
    <div>
        <!-- ここにコンポーネントのHTMLが展開される -->
        <sample-component/>
    </div>
```

## コンポーネントの初期化(ローカル)
特定のコンポーネントの中でのみ有効なコンポーネントを作るには、以下のように記述する。

Javascript:

``` js
    //コンポーネント情報を通常のオブジェクトで宣言する。
    var localComponent = {
        props: ['param'],
        data: {
            value: 100
        },
        template: '#local-component-template'
    };

    var vm = new Vue({
        components: {  //親コンポーネントの"components"の中で参照する。プロパティ名がコンポーネント名になる
            localComponent: localComponent
        },
        template: '#template'
    });
```

Template:

``` html
    <script type="text/x-template" id="template">
        <div>
            <local-component/>
        </div>
    </script>
```

## Props

### パラメータの受け渡し
親のコンポーネントから子のコンポーネントに値を渡す場合、以下のように記述する。

``` html
    <script type="text/x-template" id="template">
        <div id="parent-component">
            <!-- "parameter1" を渡す場合 -->
            <child-component parameter1="value">

            <!-- 動的な値を渡す場合 -->
            <child-component v-bind:parameter1="post.title">
        </div>
    </script>
```

子コンポーネント側：

``` js
    var child = {
        name: 'ChildComponent',
        props: ['parameter1']
    };
```

### パラメータのバリデーション

``` js
    var child = {
        name: 'ChildComponent',
        props: {
            parameter1: Number,

            parameter2: [Number, String],

            parameter3: {
                type: String,
                required: true
            },

            parameter4: {
                type: String,
                default: 'default value'
            },

            parameter5: {
                validator: function(value) {
                    return value < 100;
                }
            }
        }
    };
```

## Slot
子のコンポーネントの出力の一部を上書きしたい場合に、Slotが利用できる。

子コンポーネント側

``` html
    <div class="child-component">
        <h2>{{ title }}</h2>
        <div>
            <slot name="slot1">default content</slot>
        </div>
    </div>
```

親コンポーネント側

``` html
    <div class="parent-component">
        <child-component>
            <template slot="slot1">
                custom content
            </template>
        </child-component>
    </div>
```
