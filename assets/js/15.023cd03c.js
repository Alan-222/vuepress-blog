(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{419:function(a,e,t){"use strict";t.r(e);var s=t(2),v=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("媒体查询是响应式设计中常用的一种手段。它由一个媒体类型、一个媒体表达式、一组"),e("code",[a._v("CSS")]),a._v("规则组成，仅在浏览器和设备的环境与你指定的规则相匹配的时候你所写的 "),e("code",[a._v("CSS")]),a._v(" 才会被应用。")]),a._v(" "),e("h2",{attrs:{id:"基础的媒体查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础的媒体查询"}},[a._v("#")]),a._v(" 基础的媒体查询")]),a._v(" "),e("h3",{attrs:{id:"基本语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[a._v("#")]),a._v(" 基本语法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@media [media-type] and ([media-feature-rule]) {\n  /* [CSS rules] */\n}\n")])])]),e("ul",[e("li",[e("code",[a._v("[media-type]")]),a._v("是媒体类型，告诉浏览器是应用于什么媒体类型（例如 screen）")]),a._v(" "),e("li",[e("code",[a._v("[media-feature-rule]")]),a._v("是下方所写"),e("code",[a._v("[CSS rules]")]),a._v("生效所需的规则或测试")]),a._v(" "),e("li",[e("code",[a._v("[CSS rules]")]),a._v("是"),e("code",[a._v("CSS")]),a._v("规则，仅在上方规则都符合才被应用")])]),a._v(" "),e("h4",{attrs:{id:"媒体类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#媒体类型"}},[a._v("#")]),a._v(" 媒体类型")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("all")])]),a._v(" "),e("li",[e("code",[a._v("print")])]),a._v(" "),e("li",[e("code",[a._v("screen")])]),a._v(" "),e("li",[e("code",[a._v("speech")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@media screen {\n    body {\n        font-size: 16px;\n    }\n}\n")])])]),e("blockquote",[e("p",[e("strong",[a._v("备注：")]),a._v(" 媒体类型是可选的，如果你没有在媒体查询中指示一个媒体类型的话，那么媒体查询默认会设为用于全部媒体类型。")])]),a._v(" "),e("h4",{attrs:{id:"媒体规则特征"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#媒体规则特征"}},[a._v("#")]),a._v(" 媒体规则特征")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("宽、高：我们最常设置的规则即为视口宽高，例如"),e("code",[a._v("width")]),a._v("、"),e("code",[a._v("height")]),a._v("、"),e("code",[a._v("min-width")]),a._v("、"),e("code",[a._v("min-height")]),a._v("，设置大于或小于某个视口宽高时，应用所写的"),e("code",[a._v("CSS")]),a._v("规则 例如：在宽度大于"),e("code",[a._v("760px")]),a._v("时，字体大小变为 12 像素")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@media screen and (width> 760px) {\n    body {\n        font-size:12px;\n    }\n}\n")])])])]),a._v(" "),e("li",[e("p",[a._v("朝向："),e("code",[a._v("orientation")]),a._v("，我们可以用它测得竖放（portrait mode）和横放（landscape mode）模式")])])]),a._v(" "),e("h2",{attrs:{id:"复杂的媒体查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复杂的媒体查询"}},[a._v("#")]),a._v(" 复杂的媒体查询")]),a._v(" "),e("p",[a._v("几个媒体查询可以混合起来采用相同的样式。")]),a._v(" "),e("h3",{attrs:{id:"媒体查询中的-与"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询中的-与"}},[a._v("#")]),a._v(" 媒体查询中的“与”")]),a._v(" "),e("p",[a._v("可以采取"),e("code",[a._v("and")]),a._v("混合媒体类型和特征，但要"),e("code",[a._v("and")]),a._v("左右两个规则都匹配。例如，我们可能会想要"),e("code",[a._v("min-width")]),a._v("和"),e("code",[a._v("orientation")]),a._v("，在视口至少为 400 像素宽，并在设备横放时变为红色。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@media screen and (min-width: 400px) and (orientation: landscape) {\n    body {\n        color: red;\n    }\n}\n")])])]),e("h3",{attrs:{id:"媒体查询中的-或-逻辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询中的-或-逻辑"}},[a._v("#")]),a._v(" 媒体查询中的“或”逻辑")]),a._v(" "),e("p",[a._v("如果要其中的任何一个都可以匹配的话，那么你可以使用逗号分开这些查询。例如，在视口至少为 400 像素宽的时候"),e("strong",[a._v("或者")]),a._v("设备处于横放状态的时候变为蓝色。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@media screen and (min-width: 400px), screen and (orientation: landscape) {\n    body {\n        color: blue;\n    }\n}\n")])])]),e("h3",{attrs:{id:"媒体查询中的-非-逻辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询中的-非-逻辑"}},[a._v("#")]),a._v(" 媒体查询中的“非”逻辑")]),a._v(" "),e("p",[a._v("如果想要反着逻辑来，例如横向变竖向。可以采用"),e("code",[a._v("not")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@media not all and (orientation: landscape) {\n    body {\n        color: blue;\n    }\n}\n")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);