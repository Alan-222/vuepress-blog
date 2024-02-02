(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{438:function(e,r,t){"use strict";t.r(r);var o=t(2),a=Object(o.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),r("p",[e._v("前面我们可能已经有了选择器的概念，知道它可以用来选择某个或某些"),r("code",[e._v("html")]),e._v("元素。本文将对选择器进行系统的讲解以便读者对于选择器有完整的认识。")]),e._v(" "),r("h2",{attrs:{id:"选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择器"}},[e._v("#")]),e._v(" 选择器")]),e._v(" "),r("h3",{attrs:{id:"什么是选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是选择器"}},[e._v("#")]),e._v(" 什么是选择器？")]),e._v(" "),r("blockquote",[r("p",[e._v("CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。选择器所选择的元素，叫做“选择器的对象”。")])]),e._v(" "),r("h3",{attrs:{id:"选择器列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择器列表"}},[e._v("#")]),e._v(" 选择器列表")]),e._v(" "),r("p",[e._v("既然可以使用单独的选择器，那么这些单独的选择器当然也可以可以被混编为一个“选择器列表”。例如"),r("code",[e._v("h1,p")]),e._v("，"),r("code",[e._v("h1 p")]),e._v("，但要注意了当单个选择器无效时，组合的选择器也会失效，例如"),r("code",[e._v("h1,..special")]),e._v("(x)")]),e._v(" "),r("h3",{attrs:{id:"选择器的种类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择器的种类"}},[e._v("#")]),e._v(" 选择器的种类")]),e._v(" "),r("h4",{attrs:{id:"_1-类型、类和-id-选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-类型、类和-id-选择器"}},[e._v("#")]),e._v(" 1.类型、类和 ID 选择器")]),e._v(" "),r("p",[e._v("此类选择器是最常用的最简单的选择器，接下来让我们来看看。")]),e._v(" "),r("h5",{attrs:{id:"类型选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#类型选择器"}},[e._v("#")]),e._v(" 类型选择器")]),e._v(" "),r("p",[e._v("类型选择器也叫做标签选择器或者元素选择器，例如"),r("code",[e._v("h1、p、span、div")]),e._v("。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("h1{\n   color:red;\n}\n")])])]),r("h5",{attrs:{id:"全局选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#全局选择器"}},[e._v("#")]),e._v(" 全局选择器")]),e._v(" "),r("p",[e._v("全局选择器用"),r("code",[e._v("*")]),e._v("号表示，用来表示文档的所有内容。也可用于选择器列表中让选择器更易读，例如"),r("code",[e._v("p :first-child")]),e._v("（中间带空格）容易与"),r("code",[e._v("p:first-child")]),e._v("混淆，前者表示 p 后代的任何第一个子元素，而后者表示作为其他元素的第一子元素的"),r("code",[e._v("p")]),e._v("元素。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("*{\n    margin:0;\n}\n")])])]),r("h5",{attrs:{id:"类选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#类选择器"}},[e._v("#")]),e._v(" 类选择器")]),e._v(" "),r("p",[e._v("类选择器以"),r("code",[e._v(".")]),e._v("起头，后面带一个类名。可以单独使用，也可指向特定元素，例如"),r("code",[e._v("h1.special")]),e._v("（其间不带空格）")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("h1.special{\n   background-color: pink;\n}\n")])])]),r("h5",{attrs:{id:"id-选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#id-选择器"}},[e._v("#")]),e._v(" ID 选择器")]),e._v(" "),r("p",[e._v("ID 选择器以"),r("code",[e._v("#")]),e._v("起头，后面带一个 id 名。与类相似也可指向特定元素"),r("code",[e._v("h1#special")]),e._v("。但 id 选择器通常用来作为唯一的标识而使用，也就是只用一次不会改变，所以更通常我们会用类选择器。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("h1#special{\n  background-color: pink;\n}\n")])])]),r("h4",{attrs:{id:"_2-属性选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-属性选择器"}},[e._v("#")]),e._v(" 2.属性选择器")]),e._v(" "),r("p",[e._v("在编写"),r("code",[e._v("html")]),e._v("元素时我们知道元素可以带有属性，那么我们便可以凭借此来选择某些元素。下面我们通过一个列表来展示。")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("选择器")]),e._v(" "),r("th",[e._v("示例")]),e._v(" "),r("th",[e._v("描述")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("[*attr*]")])]),e._v(" "),r("td",[r("code",[e._v("li[class]")])]),e._v(" "),r("td",[e._v("匹配带有一个名为"),r("em",[e._v("class")]),e._v("的属性的"),r("code",[e._v("li")]),e._v("元素。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("[*attr*=*value*]")])]),e._v(" "),r("td",[r("code",[e._v('li[class="special"]')])]),e._v(" "),r("td",[e._v("匹配带有一个名为"),r("em",[e._v("class")]),e._v("的属性的"),r("code",[e._v("li")]),e._v("元素，其值为"),r("em",[e._v("special")]),e._v("。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("[*attr*~=*value*]")])]),e._v(" "),r("td",[r("code",[e._v('li[class~="special"]')])]),e._v(" "),r("td",[e._v("匹配带有一个名为"),r("em",[e._v("class")]),e._v("的属性的"),r("code",[e._v("li")]),e._v("元素，其值为"),r("em",[e._v("special")]),e._v("，或者匹配带有一个"),r("em",[e._v("class")]),e._v("属性的元素，其值有一个或者更多至少有一个和"),r("em",[e._v("special")]),e._v("匹配。例如"),r("code",[e._v('<p class="a b c special">')]),e._v("（注意，在一列中的好几个值，是用空格隔开的）。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("[*attr*^=*value*]")])]),e._v(" "),r("td",[r("code",[e._v('li[class^="box-"]')])]),e._v(" "),r("td",[e._v("匹配带有一个名为"),r("em",[e._v("class")]),e._v("的属性的元素，其值开头为*box-*子字符串。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("[*attr*$=*value*]")])]),e._v(" "),r("td",[r("code",[e._v('li[class$="-box"]')])]),e._v(" "),r("td",[e._v("匹配带有一个名为"),r("em",[e._v("class")]),e._v("的属性的元素，其值结尾为*-box*子字符串")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("*attr**=*value*]")])]),e._v(" "),r("td",[r("code",[e._v('li[class*="box"]')])]),e._v(" "),r("td",[e._v("匹配带有一个名为"),r("em",[e._v("class")]),e._v("的属性的元素，其值的字符串中的任何地方，至少出现了一次"),r("em",[e._v("box")]),e._v("子字符串。")])])])]),e._v(" "),r("p",[e._v("我们通过表格中的示例来实操一下")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('<ul>\n    <li class="special">Item 1</li>\n    <li class="a special">Item 2</li>\n    <li class="bca">Item 3</li>\n    <li class="bcabc">Item 4</li>\n</ul>\n')])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('li[class] {\n    font-size: 20px;\n}\n​\nli[class="special"] {\n    background-color: yellow;\n}\n​\nli[class~="special"] {\n    color: red;\n}\n    li[class^="a"] {\n    font-size: 30px;\n}\n​\nli[class$="a"] {\n    background-color: blue;\n}\n​\nli[class*="a"] {\n    color: green;\n}\n')])])]),r("p",[r("strong",[e._v("效果：")])]),e._v(" "),r("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a417149dc032475b83c36f567487ff6d~tplv-k3u1fbpfcp-watermark.image?",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),r("h4",{attrs:{id:"_3-伪类与伪元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-伪类与伪元素"}},[e._v("#")]),e._v(" 3.伪类与伪元素")]),e._v(" "),r("h5",{attrs:{id:"什么是伪类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是伪类"}},[e._v("#")]),e._v(" 什么是伪类？")]),e._v(" "),r("p",[e._v("类一般是对对象行为与方法的具体概括。伪类也类似，它用于特定状态下的元素，例如鼠标悬浮，链接访问等。")]),e._v(" "),r("p",[r("code",[e._v("li:first-child")]),e._v("选择了紧靠"),r("code",[e._v("li")]),e._v("的第一个子元素，"),r("code",[e._v("first-child")]),e._v("表示第一子元素的一种状态。与之相对的"),r("code",[e._v("last-child")]),e._v("就表示最后一个子元素。")]),e._v(" "),r("h5",{attrs:{id:"用户行为伪类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用户行为伪类"}},[e._v("#")]),e._v(" 用户行为伪类")]),e._v(" "),r("p",[e._v("当一个链接从点击到点击后时有好几种状态，例如")]),e._v(" "),r("p",[r("code",[e._v("a:hover")]),e._v("：鼠标悬浮于"),r("code",[e._v("a")]),e._v("上时")]),e._v(" "),r("p",[r("code",[e._v("a:link")]),e._v("：未访问链接时的状态")]),e._v(" "),r("p",[r("code",[e._v("a:visited")]),e._v("：访问链接后的状态")]),e._v(" "),r("p",[r("code",[e._v("a:active")]),e._v("：鼠标点击时的状态")]),e._v(" "),r("h5",{attrs:{id:"什么是伪元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是伪元素"}},[e._v("#")]),e._v(" 什么是伪元素？")]),e._v(" "),r("p",[e._v("伪元素表现得像你往"),r("code",[e._v("html")]),e._v("文件中加入新的元素一样，通常以"),r("code",[e._v("::")]),e._v("+伪类名来表示。")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("备注：")]),e._v(" 一些早期的伪元素曾使用单冒号的语法，所以你可能会在代码或者示例中看到。现代的浏览器为了保持后向兼容，支持早期的带有单双冒号语法的伪元素。")])]),e._v(" "),r("p",[e._v("下面是一些伪类与伪元素的参考")]),e._v(" "),r("h5",{attrs:{id:"伪类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#伪类"}},[e._v("#")]),e._v(" 伪类")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("选择器")]),e._v(" "),r("th",[e._v("描述")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":active")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("在用户激活（例如点击）元素的时候匹配。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:any-link",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":any-link")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配一个链接的"),r("code",[e._v(":link")]),e._v("和"),r("code",[e._v(":visited")]),e._v("状态。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:blank",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":blank")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配空输入值的"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",target:"_blank",rel:"noopener noreferrer"}},[e._v("``元素"),r("OutboundLink")],1),e._v("。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:checked",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":checked")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配处于选中状态的单选或者复选框。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":current")]),e._v(" (en-US)"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配正在展示的元素，或者其上级元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:default",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":default")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配一组相似的元素中默认的一个或者更多的 UI 元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:dir",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":dir")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("基于其方向性（HTML"),r("code",[e._v("dir")]),e._v("属性或者 CSS"),r("code",[e._v("direction")]),e._v("属性的值）匹配一个元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:disabled",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":disabled")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配处于关闭状态的用户界面元素")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":empty")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配除了可能存在的空格外，没有子元素的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:enabled",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":enabled")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配处于开启状态的用户界面元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":first")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Paged_Media",target:"_blank",rel:"noopener noreferrer"}},[e._v("分页媒体"),r("OutboundLink")],1),e._v("的第一页。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-child",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":first-child")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配兄弟元素中的第一个元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-of-type",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":first-of-type")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配兄弟元素中第一个某种类型的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":focus")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("当一个元素有焦点的时候匹配。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-visible",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":focus-visible")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("当元素有焦点，且焦点对用户可见的时候匹配。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-within",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":focus-within")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配有焦点的元素，以及子代元素有焦点的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:future",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":future")]),e._v(" (en-US)"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配当前元素之后的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":hover")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("当用户悬浮到一个元素之上的时候匹配。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:indeterminate",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":indeterminate")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配未定态值的 UI 元素，通常为"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",target:"_blank",rel:"noopener noreferrer"}},[e._v("复选框"),r("OutboundLink")],1),e._v("。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:in-range",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":in-range")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("用一个区间匹配元素，当值处于区间之内时匹配。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:invalid",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":invalid")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配诸如"),r("code",[e._v("<input>")]),e._v("的位于不可用状态的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:lang",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":lang")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("基于语言（HTML"),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/lang",target:"_blank",rel:"noopener noreferrer"}},[e._v("lang"),r("OutboundLink")],1),e._v("属性的值）匹配元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":last-child")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配兄弟元素中最末的那个元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-of-type",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":last-of-type")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配兄弟元素中最后一个某种类型的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:left",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":left")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("在"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Pages",target:"_blank",rel:"noopener noreferrer"}},[e._v("分页媒体 (en-US)"),r("OutboundLink")],1),e._v("中，匹配左手边的页。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:link",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":link")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配未曾访问的链接。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:local-link",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":local-link")]),e._v(" (en-US)"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配指向和当前文档同一网站页面的链接。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:is",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":is()")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配传入的选择器列表中的任何选择器。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":not")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配作为值传入自身的选择器未匹配的物件。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":nth-child")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配一列兄弟元素中的元素——兄弟元素按照 an+b 形式的式子进行匹配（比如 2n+1 匹配元素 1、3、5、7 等。即所有的奇数个）。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":nth-of-type")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配某种类型的一列兄弟元素（比如，"),r("code",[e._v("<p>")]),e._v("元素）——兄弟元素按照 an+b 形式的式子进行匹配（比如 2n+1 匹配元素 1、3、5、7 等。即所有的奇数个）。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-child",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":nth-last-child")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配一列兄弟元素，从后往前倒数。兄弟元素按照 an+b 形式的式子进行匹配（比如 2n+1 匹配按照顺序来的最后一个元素，然后往前两个，再往前两个，诸如此类。从后往前数的所有奇数个）。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-of-type",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":nth-last-of-type")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配某种类型的一列兄弟元素（比如，"),r("code",[e._v("<p>")]),e._v("元素），从后往前倒数。兄弟元素按照 an+b 形式的式子进行匹配（比如 2n+1 匹配按照顺序来的最后一个元素，然后往前两个，再往前两个，诸如此类。从后往前数的所有奇数个）。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-child",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":only-child")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配没有兄弟元素的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-of-type",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":only-of-type")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配兄弟元素中某类型仅有的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:optional",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":optional")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配不是必填的 form 元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:out-of-range",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":out-of-range")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("按区间匹配元素，当值不在区间内的的时候匹配。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:past",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":past")]),e._v(" (en-US)"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配当前元素之前的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:placeholder-shown",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":placeholder-shown")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配显示占位文字的 input 元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:playing",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":playing")]),e._v(" (en-US)"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配代表音频、视频或者相似的能“播放”或者“暂停”的资源的，且正在“播放”的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:paused",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":paused")]),e._v(" (en-US)"),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配代表音频、视频或者相似的能“播放”或者“暂停”的资源的，且正在“暂停”的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-only",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":read-only")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配用户不可更改的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-write",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":read-write")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配用户可更改的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:required",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":required")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配必填的 form 元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:right",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":right")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("在"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Pages",target:"_blank",rel:"noopener noreferrer"}},[e._v("分页媒体 (en-US)"),r("OutboundLink")],1),e._v("中，匹配右手边的页。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":root")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配文档的根元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":scope")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配任何为参考点元素的的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:valid",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":valid")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配诸如"),r("code",[e._v("<input>")]),e._v("元素的处于可用状态的元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:target",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":target")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配当前 URL 目标的元素（例如如果它有一个匹配当前"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Fragment_identifier",target:"_blank",rel:"noopener noreferrer"}},[e._v("URL 分段"),r("OutboundLink")],1),e._v("的元素）。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v(":visited")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配已访问链接。")])])])]),e._v(" "),r("h5",{attrs:{id:"伪元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#伪元素"}},[e._v("#")]),e._v(" 伪元素")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("选择器")]),e._v(" "),r("th",[e._v("描述")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("::after")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配出现在原有元素的实际内容之后的一个可样式化元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("::before")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配出现在原有元素的实际内容之前的一个可样式化元素。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("::first-letter")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配元素的第一个字母。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("::first-line")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配包含此伪元素的元素的第一行。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::grammar-error",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("::grammar-error")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配文档中包含了浏览器标记的语法错误的那部分。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("::selection")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配文档中被选择的那部分。")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::spelling-error",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("::spelling-error")]),r("OutboundLink")],1)]),e._v(" "),r("td",[e._v("匹配文档中包含了浏览器标记的拼写错误的那部分。")])])])]),e._v(" "),r("h4",{attrs:{id:"_4-关系选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-关系选择器"}},[e._v("#")]),e._v(" 4.关系选择器")]),e._v(" "),r("h5",{attrs:{id:"什么是关系选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是关系选择器"}},[e._v("#")]),e._v(" 什么是关系选择器？")]),e._v(" "),r("p",[e._v("通过关系符，我们可以将前后两种元素建立联系，通过这样建立的选择器叫做关系选择器。")]),e._v(" "),r("h5",{attrs:{id:"后代选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后代选择器"}},[e._v("#")]),e._v(" 后代选择器")]),e._v(" "),r("p",[e._v("通过``空格来组合选择器。例如"),r("code",[e._v("A B")]),e._v("表示的关系是选择所有以 A 选择器为祖先（父亲、父亲的父亲等等..）的 B 选择器。我们通过一个简单的小例子来说明。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("<p>\n    <em>aaaa</em>\n    bbbb\n    <em>aaaaa</em>\n</p>\n<p>\n    <em>ccccc</em>\n    <span>dddd <em>eeee</em> dddd</span>\n</p>\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("p em {\n    color: red;\n}\n")])])]),r("p",[e._v("结果是"),r("code",[e._v("p")]),e._v("元素里的所有"),r("code",[e._v("em")]),e._v("都被选择到了")]),e._v(" "),r("h5",{attrs:{id:"子代关系选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#子代关系选择器"}},[e._v("#")]),e._v(" 子代关系选择器")]),e._v(" "),r("p",[e._v("通过 "),r("code",[e._v(">")]),e._v("来组合选择器。例如"),r("code",[e._v("A>B")]),e._v("表示的关系是选择所有以 A 选择器为父亲的 B 选择器。")]),e._v(" "),r("h5",{attrs:{id:"邻接兄弟选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#邻接兄弟选择器"}},[e._v("#")]),e._v(" 邻接兄弟选择器")]),e._v(" "),r("p",[e._v("通过 "),r("code",[e._v("+")]),e._v("来组合选择器。例如 "),r("code",[e._v("A+B")]),e._v("表示的关系是选择所有紧随 A 选择器之后的 B 选择器。")]),e._v(" "),r("h5",{attrs:{id:"通用兄弟选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通用兄弟选择器"}},[e._v("#")]),e._v(" 通用兄弟选择器")]),e._v(" "),r("p",[e._v("通过 "),r("code",[e._v("~")]),e._v("来组合选择器。例如 "),r("code",[e._v("A~B")]),e._v("表示的关系是选择所有 A 选择器之后的同级 B 选择器")]),e._v(" "),r("h3",{attrs:{id:"选择器的权重"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择器的权重"}},[e._v("#")]),e._v(" 选择器的权重")]),e._v(" "),r("p",[e._v("从上面我们已知道了有哪些选择器，但有时候他们组合成一个选择器列表时我们会不知道哪个优先，这个时候就需要引入一个"),r("strong",[e._v("权重")]),e._v("的概念以此计算选择器的优先级。")]),e._v(" "),r("ul",[r("li",[e._v("第一等：代表内联样式，如: style=””，权值为 1000。")]),e._v(" "),r("li",[e._v("第二等：代表 ID 选择器，如：#content，权值为 0100。")]),e._v(" "),r("li",[e._v("第三等：代表类，伪类和属性选择器，如.content，权值为 0010。")]),e._v(" "),r("li",[e._v("第四等：代表类型选择器和伪元素选择器，如 div p，权值为 0001。")]),e._v(" "),r("li",[e._v("通配符、子选择器、相邻选择器等的。如*、>、+,权值为 0000。")]),e._v(" "),r("li",[e._v("继承的样式没有权值。")])]),e._v(" "),r("p",[r("strong",[e._v("比较优先级时，需要将所有的选择器的优先级进行相加计算，最后优先级越高，则越优先显示")])]),e._v(" "),r("p",[e._v("例如"),r("code",[e._v("div #span>.class>.class1")]),e._v("有 1 个 ID 选择器，2 个类选择器，一个类型选择器，他的权重就是 0121。")]),e._v(" "),r("p",[r("strong",[e._v("当权重相同时则越后面优先级越高")]),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),r("p",[e._v("以上就是所有关于"),r("code",[e._v("CSS")]),e._v("选择器的内容了，下面我们将会针对"),r("code",[e._v("CSS")]),e._v("的盒模型进行讲解。")])])}),[],!1,null,null,null);r.default=a.exports}}]);