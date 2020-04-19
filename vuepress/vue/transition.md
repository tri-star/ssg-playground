# Transition

## 要素の追加/削除にアニメーションを追加する

### Vue.jsでのアニメーション
Vue.jsには表示・消去に関するアニメーションを提供する機能は存在しないものの、
アニメーションの実装を手助けする機能を提供している。

以下のように `transition` タグで括ると、配下の要素の状態遷移時にアニメーション用のCSSクラスが追加・削除される。

``` html
    <transition name="fade">
        <div v-if="show" >content</div>
    </transition>
```

### アニメーション用のCSS
状態に応じたCSSの付与・削除はVue.jsが行うので、各状態でどのようなエフェクトを適用するかを実装する。

※transitionタグにname属性を指定した場合、以下のクラス名はname属性に応じて変化する。

状態名(CSSクラス名) | タイミング | 備考
------------------ | --------- | --------------------------------------------------
v-enter | 表示アニメーション開始時 | 表示開始直後にCSSが付与され、1フレーム後に削除される。
v-enter-active | 表示中 | 表示の進行中に付与され、アニメーション完了時に削除される
v-leave | 消去アニメーション開始時 | 消去のアニメーションの開始時に付与され、1フレーム後に削除される。
v-leave-active | 消去アニメーション進行中 | 消去の進行中に付与され、消去完了時に削除される。
v-leave-to | 消去完了時 | v-leaveが削除されたタイミング(=消去開始の1フレーム後)で付与され、消去完了時に削除される。<br />消去の終了状態の定義に利用する。

例：

HTML 

``` html
    <transition name="fade">
        <div v-if="show" >content</div>
    </transition>
```

CSS

``` css
    .fade-enter, .fade-leave-to {
        opacity: 0;  /* フェードイン/アウト */
        transform: translateX(100px);  /* 横方向にスライド */
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 500ms ease;
    }
```

実際の動きを見ていると、消去完了時はDOM要素が削除され、空のHTMLコメントが残る動作になっている。
空のHTMLコメントを削除すると意図通りに動作しないため、状態を戻すために必要と思われる。

上の例で表示完了時の状態を定義しなくても正しく表示出来るのは、"表示完了時の状態 = 初期状態"という前提になっているためと思われる。
(一応、表示中のエフェクトを定義するための"v-enter-to"というクラスも存在する)