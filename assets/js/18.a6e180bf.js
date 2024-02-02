(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{424:function(e,v,_){"use strict";_.r(v);var r=_(2),o=Object(r.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),v("p",[e._v("在之前，我们"),v("code",[e._v("css")]),e._v("布局多用"),v("code",[e._v("float")]),e._v("和"),v("code",[e._v("position")]),e._v("，虽然跨浏览器兼容性好，但其实一些布局效果它们是无法很方便地实现的，例如垂直居中子元素、使父容器中所有子元素等高/等宽排列。下面我们便来了解弹性盒子，它能很轻易完成这些效果。")]),e._v(" "),v("h2",{attrs:{id:"弹性盒子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#弹性盒子"}},[e._v("#")]),e._v(" 弹性盒子")]),e._v(" "),v("h3",{attrs:{id:"什么是弹性盒子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是弹性盒子"}},[e._v("#")]),e._v(" 什么是弹性盒子")]),e._v(" "),v("blockquote",[v("p",[e._v("弹性盒子是一种用于按行或按列布局元素的一维布局方法。元素可以膨胀以填充额外的空间，收缩以适应更小的空间")])]),e._v(" "),v("h3",{attrs:{id:"示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('<h1>flexbox example</h1>\n<div class="content">\n<div class="box">\n    <h2>First flexItem</h2>\n    <p>\n        Life is ...\n    </p>\n</div>\n​\n<div class="box">\n    <h2>Second flexItem</h2>\n    <p>\n        Best of ...\n    </p>\n</div>\n​\n<div class="box">\n    <h2>Third flexItem</h2>\n    <p>\n        You\'re amazing! ...\n    </p>\n    <p>\n        You must ...\n    </p>\n</div>\n</div>\n')])])]),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("body {\n    margin: 0;\n}\n​\nh1 {\n    text-align: center;\n    line-height: 100px;\n    margin: 0;\n}\n​\n.box {\n    padding: 10px;\n    margin: 10px;\n    background: darkgray;\n}\n")])])]),v("p",[v("strong",[e._v("效果：")])]),e._v(" "),v("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12980d8b8b10460387326ca49bde7af0~tplv-k3u1fbpfcp-watermark.image?",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),v("p",[e._v("以上示例的段落块默认都是占满父元素宽度，高度为内容高度。但我们想要它们等宽均匀分布在父盒子中，且高度与最高的子元素保持一致。")]),e._v(" "),v("h4",{attrs:{id:"设为弹性盒子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设为弹性盒子"}},[e._v("#")]),e._v(" 设为弹性盒子")]),e._v(" "),v("p",[e._v("我们将这些子元素的父盒子所在的"),v("code",[e._v("class")]),e._v("添加一个"),v("code",[e._v("display:flex")]),e._v("属性")]),e._v(" "),v("p",[e._v("再到通用子元素"),v("code",[e._v("class")]),e._v("添加"),v("code",[e._v("flex:1")]),e._v("就可以发现")]),e._v(" "),v("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d69236990c624294906b6f82f3151b5d~tplv-k3u1fbpfcp-watermark.image?",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),v("p",[e._v("它们等宽分布在父盒子中,且高度与最高的子元素保持一致。也许到这里你会感到困惑，它们是怎么发生的呢？不要着急，我们先了解一下"),v("code",[e._v("flex")]),e._v("模型。")]),e._v(" "),v("h4",{attrs:{id:"flex-模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-模型"}},[e._v("#")]),e._v(" flex 模型")]),e._v(" "),v("p",[e._v("首先对于设置了"),v("code",[e._v("display:flex")]),e._v("的父元素我们称为"),v("strong",[e._v("flex 容器（flex container）")]),e._v(" ，即内部容纳表现为柔性盒子的元素的容器。而对于内部的这些“柔性盒子”元素我们统称为"),v("strong",[e._v("flex 项（flex item）")]),e._v(" 。在这些"),v("code",[e._v("flex")]),e._v("元素放置的方向上有一条延伸的轴称为"),v("strong",[e._v("主轴（main axis）")]),e._v(" ，轴的开始和结束称为"),v("strong",[e._v("main start")]),e._v("和"),v("strong",[e._v("main end")]),e._v("。垂直"),v("code",[e._v("flex")]),e._v("元素的方向上还有一条轴称为"),v("strong",[e._v("交叉轴（cross axis）")]),e._v(" ，轴的开始和结束被称为 "),v("strong",[e._v("cross start")]),e._v(" 和 "),v("strong",[e._v("cross end")]),e._v("。下面我们用一张图来看一下。")]),e._v(" "),v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eec1d32411384dd6a9c116ff93ce2668~tplv-k3u1fbpfcp-watermark.image?",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),v("h4",{attrs:{id:"弹性盒子相关属性说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#弹性盒子相关属性说明"}},[e._v("#")]),e._v(" 弹性盒子相关属性说明")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("指定主轴方向："),v("code",[e._v("flex-direction")]),e._v("可以指定主轴的方向，默认为"),v("code",[e._v("row")]),e._v("，即排成一排，而"),v("code",[e._v("row-reverse")]),e._v("只是调换了"),v("code",[e._v("main start")]),e._v("和"),v("code",[e._v("main end")]),e._v("的方向。还有按列排的就是"),v("code",[e._v("column")]),e._v("，"),v("code",[e._v("column-reverse")]),e._v("和"),v("code",[e._v("row-reverse")]),e._v("同理。")])]),e._v(" "),v("li",[v("p",[e._v("换行：当我们对"),v("code",[e._v("flex项")]),e._v("定宽或定高的时候，有可能会出现个别"),v("code",[e._v("flex项")]),e._v("溢出"),v("code",[e._v("flex容器")]),e._v("的情况。这个时候可以使用"),v("code",[e._v("flex-wrap:wrap")]),e._v("就可以在出现溢出元素的时候换行。")])]),e._v(" "),v("li",[v("p",[e._v("上面两个属性可以缩写为"),v("code",[e._v("flex-flow:row wrap")]),e._v("，"),v("code",[e._v("flex-wrap")]),e._v("是"),v("code",[e._v("flex-direction")]),e._v("和"),v("code",[e._v("flex-wrap")]),e._v("的缩写。")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("flex项")]),e._v("的动态尺寸：现在回到我们开头的例子可以发现对"),v("code",[e._v("flex项")]),e._v("设了"),v("code",[e._v("flex:1")]),e._v("。这是一个缩写属性，这里指的是"),v("code",[e._v("flex-glow")]),e._v("的值。这是一个无单位的比例值，表示每个 flex 项沿主轴的可用空间大小。上例中，我们设置"),v("code",[e._v("flex项")]),e._v("元素的 "),v("code",[e._v("flex-glow")]),e._v(" 值为 "),v("code",[e._v("1")]),e._v("，这表示每个元素占用空间都是相等的，占用的空间是在设置 "),v("code",[e._v("padding")]),e._v(" 和 "),v("code",[e._v("margin")]),e._v(" 之后剩余的空间。因为它是一个比例，这意味着将每个 flex 项的设置为 "),v("code",[e._v("100")]),e._v(" 的效果和 "),v("code",[e._v("1")]),e._v(" 的时候是完全一样的。")]),e._v(" "),v("p",[e._v("第二个无单位比例 "),v("code",[e._v("flex-shrink")]),e._v(" 一般用于溢出容器的 flex 项。这指定了从每个 flex 项中取出多少溢出量，以阻止它们溢出它们的容器。 第三个是基础值。可以单独指定全写 "),v("code",[e._v("flex-basis")]),e._v(" 属性的值（px、em、%）。也可与"),v("code",[e._v("flex-glow")]),e._v("同时指定，会先按基础值设定"),v("code",[e._v("flex项")]),e._v("的尺寸再根据可用空间重新分配大小。")])]),e._v(" "),v("li",[v("p",[e._v("水平和垂直对齐：此项是针对"),v("code",[e._v("flex容器")]),e._v("的属性。 "),v("code",[e._v("align-items")]),e._v(" 控制 "),v("code",[e._v("flex 项")]),e._v("在交叉轴上的位置。默认的值是 "),v("code",[e._v("stretch")]),e._v("，其会使所有 flex 项沿着交叉轴的方向拉伸以填充父容器。如果父容器在交叉轴方向上没有固定宽度（即高度），则所有 flex 项将变得与最长的 flex 项一样长（即高度保持一致）。也是上例在默认情况下得到相等的高度的列的原因。还有"),v("code",[e._v("center")]),e._v("沿交叉轴垂直居中。也可以设"),v("code",[e._v("flex start")]),e._v("向交叉轴开始对齐或"),v("code",[e._v("flex-end")]),e._v("向交叉轴结束对齐。")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("flex项")]),e._v("排序：弹性盒子也有可以改变 flex 项的布局位置的功能，而不会影响到源顺序（即 "),v("code",[e._v("dom 树")]),e._v("里元素的顺序）。例如对想要放在容器第一位的"),v("code",[e._v("flex项")]),e._v("设"),v("code",[e._v("order:1")]),e._v("。"),v("code",[e._v("order")]),e._v("有以下几项规则 1.所有 "),v("code",[e._v("flex 项")]),e._v("默认的 "),v("code",[e._v("order")]),e._v(" 值是 0。 2."),v("code",[e._v("order")]),e._v(" 值大的 "),v("code",[e._v("flex")]),e._v(" 项比 "),v("code",[e._v("order")]),e._v(" 值小的在显示顺序中更靠后。 3.相同 "),v("code",[e._v("order")]),e._v(" 值的 "),v("code",[e._v("flex")]),e._v(" 项按源顺序显示。所以假如你有四个元素，其 "),v("code",[e._v("order")]),e._v(" 值分别是 2，1，1 和 0，那么它们的显示顺序就分别是第四，第二，第三，和第一。")])])])])}),[],!1,null,null,null);v.default=o.exports}}]);