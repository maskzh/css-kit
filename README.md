# css 工具箱
一个用于快速构建 Web 界面的 CSS 工具库
- 无 reset 样式
- 无基础（h1-6、table 等）样式
- 仅包含工具类

## 安装
```shell
npm i css-kit --save
```

## 使用
```js
import 'css-kit'
```
or 使用 `dist` 下的目录下 toolkit.css 文件

## 文档
- [animation](#animation-基础动画)
- [borders](#borders-边框相关)
- [colors](#colors-文字色背景色边框色)
- [depth](#depth-zindex-层级)
- [flex](#flex-栅格布局基于-flex)
- [grid](#grid-栅格布局基于-float)
- [images](#images-图片背景图相关)
- [positioning](#positioning-定位浮动)
- [responsive](#responsive-响应式相关)
- [sizing](#sizing-宽高)
- [typography](#typography-排版相关)
- [utilities](#utilities-显示隐藏滚动等工具类)
- [whitespace](#whitespace-内补外补)

### animation 基础动画
支持的动画如下
#### fade
- `.fadeIn`, `.fadeOut` `.fadeInUp`, `.fadeInDown`

#### slide
- `.slideUp`, `.slideDown`, `.slideRight`, `.slideLeft`

#### scale
- `.scaleUp`, `.scaleDown`

#### flip
- `.flipIn`, `.flipOut`

#### rotate
- `.rotateRight`, `.rotateLeft`

#### other
- `.flash`, `.shake`

### borders 边框相关
#### 边框类型
默认的 border-style 为 `solid`，默认的 border-color 为 `#D9D9D9`，默认的 border-radius 为 `3px`

下面的类名默认都有 `border-style` 和 `border-color` 的样式
- `.b0`、`.b1`、`.b2`、`.b3` border-width 分别为 0, 1px, 2px, 3px，
- `.bt0`、`.bt1`、`.bt2`、`.bt3` 上边框 border-width 分别为 0, 1px, 2px, 3px
- `.br0`、`.br1`、`.br2`、`.br3` 右边框 border-width 分别为 0, 1px, 2px, 3px
- `.bb0`、`.bb1`、`.bb2`、`.bb3` 下边框 border-width 分别为 0, 1px, 2px, 3px
- `.bl0`、`.bl1`、`.bl2`、`.bl3` 左边框 border-width 分别为 0, 1px, 2px, 3px

#### hair border
0.5px 的边框，通过 :before，:after 以及 transform: scale 缩放来实现
- `.bht` 上边框
- `.bhr` 右边框
- `.bhb` 下边框
- `.bhl `左边框

#### 边框其他样式
- .rounded     { border-radius: $border-radius }
- .not-rounded { border-radius: 0 }
- .circle      { border-radius: 50% }


### colors 文字色，背景色，边框色
提供文字颜色、背景颜色、边框颜色支持的颜色
```
primary =    #337ab7
success =    #5cb85c
info    =    #5bc0de
warning =    #f0ad4e
danger  =    #d9534f

white     =  #fff
silver    =  #F4F4F4
lightgrey =  #ececec
grey      =  #ccc
midgrey   =  #777
darkgrey  =  #444
black     =  #222
trueblack =  #000
```

**文字颜色、背景颜色、边框颜色，分别使用 `color-xxx`、`bg-xxx`、`border-xxx`（eg. color-success、bg-white、border-black）**

> 提供 `text-xxx` 作为 `color-xxx` 的别名

额外提供如下颜色类名
```css
.c0     { color: #000 }
.c1     { color: #111 }
.c2     { color: #222 }
.c3     { color: #333 }
.c4     { color: #444 }
.c5     { color: #555 }
.c6     { color: #666 }
.c7     { color: #777 }
.c8     { color: #888 }
.c9     { color: #999 }
.ca     { color: #aaa }
.cb     { color: #bbb }
.cc     { color: #ccc }
.cd     { color: #ddd }
.ce     { color: #eee }
.cf     { color: #fff }
```


### depth zIndex 层级
```css
.depth0  { z-index:    -1 }
.depth1  { z-index:  1000 }
.depth2  { z-index:  2000 }
.depth3  { z-index:  3000 }
.depth4  { z-index:  4000 }
.depth5  { z-index:  5000 }
.depth6  { z-index:  6000 }
.depth7  { z-index:  7000 }
.depth8  { z-index:  8000 }
.depth9  { z-index:  9000 }
.depth10 { z-index: 10000 }
```

### flex 栅格布局，基于 flex
#### Flex 容器
```css
.column {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: auto;
  flex-wrap: nowrap;
}

.row {
  display: flex;
  flex: 1 1 auto;
  height: auto;
  flex-direction: row;
  flex-wrap: wrap;
}
```

#### Flex Items 定位
```css
.center               { align-items: center; justify-content: center }
.top-left             { align-items: flex-start; justify-content: flex-start }
.bottom-right         { align-items: flex-end; justify-content: flex-end }

.column.top-center    { align-items: center; justify-content: flex-start }
.column.top-right     { align-items: flex-end; justify-content: flex-start }
.column.center-left   { align-items: flex-start; justify-content: center }
.column.center-right  { align-items: flex-end; justify-content: center }
.column.bottom-left   { align-items: flex-start; justify-content: flex-end }
.column.bottom-center { align-items: center; justify-content: flex-end }

.row.top-center       { align-items: flex-start; justify-content: center }
.row.top-right        { align-items: flex-start; justify-content: flex-end }
.row.center-left      { align-items: center; justify-content: flex-start }
.row.center-right     { align-items: center; justify-content: flex-end }
.row.bottom-left      { align-items: flex-end; justify-content: flex-start }
.row.bottom-center    { align-items: flex-end; justify-content: center }
```

#### Flex Items 对齐
```css
.space-around   { justify-content: space-around }
.space-between  { justify-content: space-between }

.align-top      { align-items: flex-start }
.align-middle   { align-items: middle }
.align-baseline { align-items: baseline }
.align-stretch  { align-items: stretch }
```

#### Flex Order
```css
.order1  { order: 1 }
.order2  { order: 2 }
.order3  { order: 3 }
.order4  { order: 4 }
.order5  { order: 5 }
.order6  { order: 6 }
.order7  { order: 7 }
.order8  { order: 8 }
.order9  { order: 9 }
.order10 { order: 10 }
```

#### Flex Size
```css
.flex1 { flex: 1 }
.flex2 { flex: 2 }
.flex3 { flex: 3 }
.flex4 { flex: 4 }
.flex5 { flex: 5 }
```


### grid 栅格布局，基于 float
同 bootstrap 分为 12 栅格，从 `.col-1` 到 `.col-12`。
也同时提供 `.col-pull-x`、`.col-push-x`、`.col-offset-x` 系列类名

### images 图片，背景图相关
#### 背景图
```css
.bg-no-repeat { background-repeat: no-repeat }
.bg-cover     { background-size: cover }
.bg-contain   { background-size: contain }
.bg-center    { background-position: center }
.bg-top       { background-position: top }
.bg-right     { background-position: right }
.bg-bottom    { background-position: bottom }
.bg-left      { background-position: left }

.bg-fixed     { background-attachment: fixed }
.bg-local     { background-attachment: local }
```
### `<img>` 图片
```css
.img-cover      { object-fit: cover }
.img-contain    { object-fit: contain }
.img-fill       { object-fit: fill }
.img-scale-down { object-fit: scale-down }
```


### positioning 定位，浮动
#### 定位
```css
.relative { position: relative }
.absolute { position: absolute }
.fixed    { position: fixed }

.top    { top: 0 }
.right  { right: 0 }
.bottom { bottom: 0 }
.left   { left: 0 }
```
#### 浮动
```css
.float-left  { float: left }
.float-right { float: right }

/*清楚浮动*/
.clearfix:before, .clearfix:after {
  display: table;
  content: ' '
}
.clearfix:after { clear: both }
```
> 提供 `.pull-left`，`.pull-right` 以及 `.fl`，`.fr` 作为 `.float-left`，`.float-right` 的别名

### responsive 响应式相关
```css
html { font-size: 10px }

/* iphone 6 */
@media (min-device-width : 375px) and (max-device-width : 667px) and (-webkit-min-device-pixel-ratio : 2) {
  html { font-size: 11.71875px }
}

/* iphone6 plus */
@media (min-device-width : 414px) and (max-device-width : 736px) and (-webkit-min-device-pixel-ratio : 3) {
  html { font-size: 12.9375px }
}
```


### sizing 宽高
#### 宽
```css
.w-auto    { width: auto    !important }
.w-inherit { width: inherit !important }
.w-initial { width: initial !important }
```
提供以 5 为粒度，单位分别为 `vw` 和 `%` 的一系列类名如下
```css
.vw5   { width: 5vw  }
.vw10  { width: 10vw }
...
.vw100 { width: 100vw }

.w5   { width: 5%  }
.w10  { width: 10% }
...
.w100 { width: 100% }
```
#### 高
```css
.h-auto    { height: auto !important }
.h-inherit { height: inherit !important }
.h-initial { height: initial !important }
```
同样提供以 5 为粒度，单位分别为 `vh` 和 `%` 的一系列类名如下
```css
.vh5   { height: 5vh  }
.vh10  { height: 10vh }
...
.vh100 { height: 100vh }

.h5   { height: 5%  }
.h10  { height: 10% }
...
.w100 { height: 100% }
```
并额外提供几个最小高度的类名
```css
.mh100   { min-height: 100px }
.mh200   { min-height: 200px }
.mh300   { min-height: 300px }
.mh400   { min-height: 400px }
.mh500   { min-height: 500px }
```

### typography 排版相关
#### 文本对齐
```css
.text-center { text-align: center }
.text-left   { text-align: left }
.text-right  { text-align: right }
```
> `.tc`、`.tl`、`.tr` 分别作为 `.text-center`、`.text-left`、`.text-right` 的别名

#### 行高
```css
.lh1 { line-height:  1 }
.lh2 { line-height:  1.2 }
.lh3 { line-height:  1.3 }
.lh4 { line-height:  1.4 }
.lh5 { line-height:  1.5 }
.lh6 { line-height:  1.6 }
.lh7 { line-height:  1.7 }
.lh8 { line-height:  1.8 }
.lh9 { line-height:  1.9 }

.lh-2 { line-height:  2 }
.lh-3 { line-height:  3 }
```

#### 字体大小
```css
.fs-xx-small { font-size: xx-small }
.fs-x-small  { font-size: x-small }
.fs-small    { font-size: small }
.fs-medium   { font-size: medium }
.fs-large    { font-size: large }
.fs-x-large  { font-size: x-large }
.fs-xx-large { font-size: xx-large }

.fs-smaller  { font-size: smaller }
.fs-larger   { font-size: larger }

.fs12       { font-size: 12px }
.fs13       { font-size: 13px }
.fs14       { font-size: 14px }
.fs15       { font-size: 15px }
.fs16       { font-size: 16px }
...
.fs35       { font-size: 35px }
.fs36       { font-size: 36px }
```

#### 其他字体样式
```css
/*文字溢出隐藏*/
.cut {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 70ch;
}

.uppercase        { text-transform: uppercase }
.lowercase        { text-transform: lowercase }
.capitalize       { text-transform: capitalize }
.italic           { font-style: italic }
.tracked          { letter-spacing: 4px }
.underline        { text-decoration: underline }
.no-underline     { text-decoration: none }
.list-style-none  { list-style-type: none }

.thin    { font-weight: 200 }
.regular { font-weight: 400 }
.bold    { font-weight: 700 }
```

### utilities 显示隐藏滚动等工具类
#### display
```css
.hidden       { display: none }
.hide         { display: none }
.none         { display: none }

.block        { display: block }
.inline       { display: inline }
.inline-block { display: inline-block }

.flex         { display: flex }
.inline-flex  { display: inline-flex }
```
> 同时 `.db`、`.dib`、`.di` 作为 `.block`、`.inline`、`.inline-block` 的别名

#### overflow & Scrolling
```css
.overflow-hidden { overflow: hidden }
.overflow-scroll { overflow: scroll }
.overflow-auto   { overflow: auto }

.scroll-x {
  overflow-x: scroll
  overflow-y: hidden
}
.scroll-y {
  overflow-x: hidden
  overflow-y: scroll
}

.no-scrollbar::-webkit-scrollbar {
  width: 0px
  height: 0px
  background: transparent
}
```
> 同时 `.ofh`、`.ofs`、`.ofa` 作为 `.overflow-hidden`、`.overflow-scroll`、`.overflow-auto` 的别名

#### Text wrap
```css
.pre       { white-space: pre }
.nowrap    { white-space: nowrap }
```

#### Textareas
```css
.resize-none       { resize: none }
.resize-vertical   { resize: vertical }
.resize-horizontal { resize: horizontal }
```

#### Misc
```css
.pointer { cursor: pointer }
.not-allowed { cursor: not-allowed }

.prevent { pointer-events: none }

.disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none }
```


### whitespace 内补外补
提供内补和外补，粒度为 `1rem` 和 `10px`

#### 内补
##### 以 `1rem` 为粒度
```css
.p0 { padding: 0 }
.p1 { padding: 1rem }
...
.p5 { padding: 5rem }

/*
pt => padding-top
pr => padding-right
pb => padding-bottom
pl => padding-left
*/
.pt0 { padding-top: 0 }
.pt1 { padding-top: 1rem }
...
.pt5 { padding-top: 5rem }

/*
ptb => padding-top & padding-bottom
plr => padding-right & padding-left
*/
.ptb0 { padding-top: 0; padding-bottom: 0 }
.ptb1 { padding-top: 1rem; padding-bottom: 1rem }
...
.ptb5 { padding-top: 5rem; padding-bottom: 5rem }
```

##### 以 `10px` 为粒度
```css
.p10 { padding: 10px }
...
.p50 { padding: 50px }

/*
pt => padding-top
pr => padding-right
pb => padding-bottom
pl => padding-left
*/
.pt10 { padding-top: 10px }
...
.pt50 { padding-top: 50px }

/*
ptb => padding-top & padding-bottom
plr => padding-right & padding-left
*/
.ptb10 { padding-top: 10px; padding-bottom: 10px }
...
.ptb50 { padding-top: 50px; padding-bottom: 50px }
```

##### 额外提供 `5px` 和 `15px`
```css
.ph { padding: 5px }
.p15 { padding: 15px }
.pth { padding-top: 5px }
.pt15 { padding-top: 15px }
.prh { padding-right: 5px }
.pr15 { padding-right: 15px }
.pbh { padding-bottom: 5px }
.pb15 { padding-bottom: 15px }
.plh { padding-left: 5px }
.pl15 { padding-left: 15px }
.ptbh { padding-top: 5px; padding-bottom: 5px }
.ptb15 { padding-top: 15px; padding-bottom: 15px }
.plh { padding-left: 5px; padding-right: 5px }
.pl15 { padding-left: 15px; padding-right: 15px }
```

### 外补
**外补命名同内补风格一致，类名前缀为 `m`**
