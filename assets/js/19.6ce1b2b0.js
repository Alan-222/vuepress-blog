(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{425:function(e,t,v){"use strict";v.r(t);var s=v(2),c=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("在前面我们已经学习了简单地使用"),t("code",[e._v("html")]),e._v("和"),t("code",[e._v("css")]),e._v("去构建一个网页，但通常需要一个媒介浏览器去展示我们的页面。下面我们就来说说浏览器是如何获取"),t("code",[e._v("html、css")]),e._v("文件并渲染展示地。")]),e._v(" "),t("h2",{attrs:{id:"浏览器如何加载css的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器如何加载css的"}},[e._v("#")]),e._v(" 浏览器如何加载"),t("code",[e._v("CSS")]),e._v("的")]),e._v(" "),t("p",[e._v("1.当浏览器获得一个"),t("code",[e._v("html")]),e._v("页面时，会“自上而下”加载解析，解析完成之后会生成"),t("code",[e._v("DOM TREE")])]),e._v(" "),t("blockquote",[t("p",[e._v("DOM 树由 DOM 元素和属性节点组成。DOM 是文档对象模型（Document Object Model）的缩写，是 HTML 文档的对象表示形式。")])]),e._v(" "),t("p",[e._v("我们通过一个"),t("code",[e._v("html")]),e._v("文件来具体分析")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<html>\n    <head>\n        <meta charset="UTF-8" />\n        <title>how css works</title>\n        <style>\n            h1 {\n                color: red;\n            }\n            p {\n                margin-top: 20px;\n            }\n        </style>\n    </head>\n    <body>\n        <div>\n            <h1>Hello World</h1>\n            <p>This is a test</p>\n        </div>\n    </body>\n</html>\n')])])]),t("p",[e._v("他的"),t("code",[e._v("DOM Tree")]),e._v("就大致如下图所示：")]),e._v(" "),t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a8acb33cf2f4c96be8a230301d6f46f~tplv-k3u1fbpfcp-watermark.image?",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),t("p",[e._v("2.上面构建了"),t("code",[e._v("DOM")]),e._v("树，但没有包含节点的样式信息。但是浏览器时无法直接理解"),t("code",[e._v("css")]),e._v("代码的，所以会先通过"),t("code",[e._v("css")]),e._v("文件转化为浏览器可以理解的"),t("code",[e._v("cssom")]),e._v("树。")]),e._v(" "),t("blockquote",[t("p",[e._v("注意，DOM Tree 与 CSSOM Tree 并没有严格的先后生成顺序，浏览器在构建 DOM 树的同时，如果样式也加载完成了，那么 CSSOM 树也会同步构建")])]),e._v(" "),t("p",[e._v("我们写一点"),t("code",[e._v("CSS")]),e._v("代码，看会生成怎样的"),t("code",[e._v("CSSOM")]),e._v("树。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("h1 {\n    color: red;\n}\np {\n    margin-top: 20px;\n}\n")])])]),t("p",[e._v("对应的树结构：")]),e._v(" "),t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/677d416226ad4fa18b6231ced1b0e217~tplv-k3u1fbpfcp-watermark.image?",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),t("p",[e._v("3.接下来便是构建渲染树，使可见的元素得以被渲染在网页上。")]),e._v(" "),t("blockquote",[t("p",[e._v("那为什么要构建渲染树呢？在上面的示例中可以看到，DOM 树可能包含一些不可见的元素，比如 head 标签，使用 display:none;属性的元素等。所以在显示页面之前，还要额外地构建一棵只包含可见元素的渲染树。")])]),e._v(" "),t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f7b6a7a9af440c6b4dd8c9f874e0d1e~tplv-k3u1fbpfcp-watermark.image?",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),t("p",[e._v("4.接下来便是根据渲染树进行页面元素的布局（对渲染树进行分层，生成分层树，类似于"),t("code",[e._v("ps")]),e._v("，生成一个个图层），然后合成绘制成一个完整页面。")]),e._v(" "),t("p",[e._v("5.接下来对于网页的修改会引发网页的重排与重绘。简单来说就是，涉及到"),t("code",[e._v("DOM")]),e._v("树中元素几何尺寸的变化会引发重排，这种方式开销比较大。其他不影响集合尺寸例如修改颜色会引发重绘，执行效率相对高些。")]),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("本文我们简单说明了浏览器加载一个"),t("code",[e._v("html")]),e._v("页面的过程，因为主要针对"),t("code",[e._v("css")]),e._v("方面，所以有些地方不是很详细。下文将会继续"),t("code",[e._v("css")]),e._v("的层叠继承以及对选择器系统讲解。")])])}),[],!1,null,null,null);t.default=c.exports}}]);