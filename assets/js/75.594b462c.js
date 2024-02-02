(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{483:function(e,t,n){"use strict";n.r(t);var s=n(2),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("头部区域完成后，侧边栏区域主要就是展示菜单，之前我们存储了用户动态路由在全局状态中，我们在前面拼接上首页菜单然后还要转化为菜单项的格式。菜单项包含图标和标题，我们需要做对应的处理。内容区域根据当前菜单项展示 Layout 页面的子路由页面即可")]),e._v(" "),t("h2",{attrs:{id:"layout-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#layout-模块"}},[e._v("#")]),e._v(" Layout 模块")]),e._v(" "),t("h3",{attrs:{id:"侧边栏区域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#侧边栏区域"}},[e._v("#")]),e._v(" 侧边栏区域")]),e._v(" "),t("h4",{attrs:{id:"实现-svg-图标组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现-svg-图标组件"}},[e._v("#")]),e._v(" 实现 svg 图标组件")]),e._v(" "),t("p",[e._v("由于"),t("code",[e._v("Antd")]),e._v("的图标没法完全满足我的需求，所以菜单的图标我是自己封装了"),t("code",[e._v("svg")]),e._v("图标组件去实现的。")]),e._v(" "),t("h5",{attrs:{id:"_1-安装-svg-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-svg-插件"}},[e._v("#")]),e._v(" 1.安装 svg 插件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("npm install svg-sprite-loader svgo-loader --dev\n")])])]),t("blockquote",[t("p",[t("code",[e._v("svg-sprite-loader")]),e._v(" 会把"),t("code",[e._v("SVG")]),e._v(" 塞到一个个 "),t("code",[e._v("symbol")]),e._v(" 中,合成一个大的 "),t("code",[e._v("SVG")]),e._v("。最后将这个"),t("code",[e._v("SVG")]),e._v("放入到 body 中，symbol 的"),t("code",[e._v("id")]),e._v("如果不特别指定，就是你的文件名。")]),e._v(" "),t("p",[t("code",[e._v("svgo-loader")]),e._v(" 是基于 "),t("code",[e._v("SVG Optimizer")]),e._v(" 的一个加载器,而 "),t("code",[e._v("SVG Optimizer")]),e._v(" 是一个基于"),t("code",[e._v("node.js")]),e._v("的工具，用于优化"),t("code",[e._v("SVG")]),e._v("矢量图形文件，它可以删除和修改"),t("code",[e._v("SVG")]),e._v("元素，折叠内容，移动属性等")])]),e._v(" "),t("h5",{attrs:{id:"_2-准备好-svg-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-准备好-svg-文件"}},[e._v("#")]),e._v(" 2.准备好 svg 文件")]),e._v(" "),t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abf7b9e37a454c828bdb4a19ef2a86dc~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=402&h=513&s=38805&e=png&b=23272d",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),t("h5",{attrs:{id:"_3-craco-config-js-配置以及-svgicon-组件封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-craco-config-js-配置以及-svgicon-组件封装"}},[e._v("#")]),e._v(" 3.craco.config.js 配置以及 SvgIcon 组件封装")]),e._v(" "),t("p",[e._v("安装好之后，我们还得在"),t("code",[e._v("webpack")]),e._v("的配置文件中定义 loader，这个我们直接在"),t("code",[e._v("craco.config.js")]),e._v("文件下定义就行")]),e._v(" "),t("p",[t("strong",[e._v("craco.config.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("const path = require('path')\nconst resolve = (dir) => path.resolve(__dirname, dir)\nmodule.exports = {\n  webpack: {\n    alias: {\n      '@': resolve('src')\n    },\n    configure: (webpackConfig, { env, paths }) => {\n      webpackConfig.module.rules[1].oneOf = [\n        ...[\n          {\n            test: /.svg$/,\n            // 存放svg的文件夹\n            include: resolve('./src/assets/Icon/svg'),\n            use: [\n              { loader: 'svg-sprite-loader', options: {} },\n              { loader: 'svgo-loader', options: {} }\n            ]\n          }\n        ],\n        ...webpackConfig.module.rules[1].oneOf\n      ]\n      return webpackConfig\n    }\n  }\n}\n")])])]),t("p",[e._v("现在为了不每次都写 svg 标签，我们可以用封装一个组件来使用 svg 文件")]),e._v(" "),t("p",[t("code",[e._v("src/components/SvgIcon/index.jsx")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("import React from 'react'\nimport './SvgIcon.scss'\n​\nconst SvgIcon = React.memo(({ width, height, name, color, className }) => {\n  return (\n    <svg className={className || 'icon-svg'} aria-hidden=\"true\" width={width} height={height}>\n      <use xlinkHref={'#icon-' + name} fill={color}></use>\n    </svg>\n  )\n})\n​\nexport default SvgIcon\n")])])]),t("p",[e._v("这样子编写例如"),t("code",[e._v('<SvgIcon name="404" />')]),e._v("就能够使用")]),e._v(" "),t("h5",{attrs:{id:"_4-全局导入所有-svg-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-全局导入所有-svg-文件"}},[e._v("#")]),e._v(" 4.全局导入所有 svg 文件")]),e._v(" "),t("p",[e._v("但是"),t("code",[e._v("SvgIcon")]),e._v("组件只能一个一个导入 svg 文件访问，能不能一次性导入全部呢？这里我们可以在 assets 的 Icon 文件夹下新建"),t("code",[e._v("index.js")]),e._v("文件来导入所有"),t("code",[e._v("svg")]),e._v("文件。这里我们使用到的是"),t("code",[e._v("webpack")]),e._v("方法是"),t("code",[e._v("require.context(directory,useSubdirectories = false, regExp = /^.//))")])]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("directory")]),e._v("：要引入的文件目录")]),e._v(" "),t("p",[t("code",[e._v("useSubdirectories")]),e._v(" ：代表是否查询目录下的子目录")]),e._v(" "),t("p",[t("code",[e._v("regExp")]),e._v("：匹配要引入文件的正则表达式")]),e._v(" "),t("p",[e._v("返回值为一个函数，函数接收一个 request 参数。执行后"),t("strong",[e._v("返回 request 所对应文件暴露的 Module 对象")]),e._v("。而返回值函数也是一个对象，对象有三个属性：")]),e._v(" "),t("p",[t("code",[e._v("resolve")]),e._v("：是一个函数，它返回 request 被解析后得到的模块 id")]),e._v(" "),t("p",[t("code",[e._v("keys")]),e._v("：也是一个函数，返回的是匹配成功模块的名字组成的数组")]),e._v(" "),t("p",[t("code",[e._v("id")]),e._v("：context module 的模块 id")]),e._v(" "),t("p",[e._v("经常用到的其实是 keys()函数返回的数组")])]),e._v(" "),t("p",[e._v("我们依据这个来编写一个方法，参数为"),t("code",[e._v("require.context")]),e._v("的返回值。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 使用 require.context 获取指定文件夹下的所有 SVG 文件\nconst importAll = (r) => {\n  // r为require.context执行后的返回函数，接收一个request参数，同时也是一个对象，有keys、resolve、id属性\n  const svgs = {}\n  r.keys().map((key) => {\n    // 用svg对象接收svg文件暴露的Module对象\n    console.log(r(key));\n    return (svgs[key] = r(key))\n  })\n  return Object.keys(svgs)\n}\nconst iconList = importAll(require.context('@/assets/Icon/svg', false, /.svg$/))\n​\n// 获取图标名称为icon-(*).svg数组, 例如[icon-shouye, icon-xitong, icon-zhedie, ...]\nexport const getNameList = () => {\n  const regex = /icon-(.*?).svg/\n  return iconList.map((item) => item.match(regex)[1])\n}\n")])])]),t("p",[e._v("得到"),t("code",[e._v("Module")]),e._v("对象就是如下的结构")]),e._v(" "),t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2fa4f384b13347f09f8fd3a7b6db9a37~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=757&h=420&s=54939&e=png&b=fefdfd",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),t("p",[e._v("然后我们在入口文件中导入这个 index 文件")]),e._v(" "),t("p",[t("strong",[e._v("src/index.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 全局导入svg图标\nimport '@/assets/Icon'\n")])])]),t("p",[e._v("我们就可以在"),t("code",[e._v("body")]),e._v("中看到所有 svg 文件被导入了")]),e._v(" "),t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c219ad7bd474754874f8dde5927c370~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=793&h=585&s=96184&e=png&b=ffffff",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),t("h4",{attrs:{id:"转换菜单数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转换菜单数据结构"}},[e._v("#")]),e._v(" 转换菜单数据结构")]),e._v(" "),t("p",[e._v("侧边栏用得是 Menu 组件，与下拉菜单类似，"),t("code",[e._v("items")]),e._v("数据用来指定菜单项。我们就先设置一个方法转化一下数据格式。要递归遍历嵌套的路由，有子菜单就递归，无则直接返回单个菜单。")]),e._v(" "),t("blockquote",[t("p",[e._v("把全局状态存储的 React Router 结构"),t("code",[e._v("{ path, element, title, children }")]),e._v("转换成"),t("code",[e._v("Antd Menu")]),e._v("提供的方法"),t("code",[e._v("getItem(label,key,icon,children,type){key,icon,children,label,type}")]),e._v("返回值结构，用到了递归，具体可以参考"),t("a",{attrs:{href:"https://ant-design.antgroup.com/components/menu-cn#itemtype",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ant Design Menu"),t("OutboundLink")],1),e._v("的示例")])]),e._v(" "),t("p",[t("strong",[e._v("src/utils/common.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('/**\n * 内置一些工具类函数\n */\n\n// 导入图标组件\nimport SvgIcon from \'@/components/Icon/SvgIcon\'\n/** 获取菜单项 */\nexport function getItem(label, key, icon, children, type) {\n  return { key, icon, children, label, type}\n}\n/**\n * 获取侧边栏菜单项\n * @param {*} menuData 嵌套的路由数组\n * @returns\n */\nexport const getTreeMenu = (menuData) => {\n  if (!menuData || !menuData.length) return\n  const menuItems = menuData.map((item) => {\n    if (!item.hidden) {\n      // 如果有子菜单\n      if (item.children && item.children.length > 0) {\n        return getItem(\n          item.title, \'/\' + item.path,\n          <SvgIcon name={item.icon ?? \'component\'} width="14" height="14" color="#ccc" />,\n          getTreeMenu(item.children)\n        )\n      }\n      // 无子菜单\n      return getItem(\n        item.title,item.redirect,\n        <SvgIcon name={item.icon ?? \'component\'} width="14" height="14" color="#ccc" />\n      )\n    }\n  })\n  return menuItems\n}\n')])])]),t("h4",{attrs:{id:"在-layout-组件中渲染侧边栏菜单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-layout-组件中渲染侧边栏菜单"}},[e._v("#")]),e._v(" 在 layout 组件中渲染侧边栏菜单")]),e._v(" "),t("p",[e._v("我们直接用动态路由的数据作为参数传入上述"),t("code",[e._v("getTreeMenu")]),e._v("方法拼接上首页的菜单，然后在"),t("code",[e._v("Antd")]),e._v("的"),t("code",[e._v("Menu")]),e._v("组件中使用")]),e._v(" "),t("p",[t("strong",[e._v("src/Layout/index.jsx")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('/** 侧边栏菜单 */\nconst permissionRoutes = useSelector((state) => state.permission.permissionRoutes)\nconst menuItems = useMemo(() => {\nreturn [\n  getItem(\n    <Link to="/home">首页</Link>,\n    \'/home\',\n    <SvgIcon name="component" width="14" height="14" color="#ccc"></SvgIcon>\n  )\n].concat(getTreeMenu(permissionRoutes, themeVari))\n}, [permissionRoutes, themeVari])\nconst handleMenuClick = (menuitem) => {\nnavigate(menuitem.key)\n}\n...\nreturn(\n  ...\n  <Sider ...>\n    ...\n    <Menu theme={themeVari} mode="inline" items={menuItems} onClick={handleMenuClick} />\n  </Sider>\n)\n')])])]),t("p",[e._v("这样侧边栏菜单就能够正常展示")]),e._v(" "),t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f622e01c2ce94c15b6ecb14a48d4e925~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1740&h=1206&s=39279&e=png&b=fefefe",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),t("p",[e._v("但是现在存在一个情况"),t("strong",[e._v("刷新后当前访问路径的菜单高亮消失并且菜单全部收缩")]),e._v("。")]),e._v(" "),t("h4",{attrs:{id:"解决刷新后的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决刷新后的问题"}},[e._v("#")]),e._v(" 解决刷新后的问题")]),e._v(" "),t("h5",{attrs:{id:"当前访问路径的菜单高亮消失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当前访问路径的菜单高亮消失"}},[e._v("#")]),e._v(" 当前访问路径的菜单高亮消失")]),e._v(" "),t("p",[e._v("Antd 的 Menu 组件有一个属性"),t("code",[e._v("selectedKeys")]),e._v("代表当前选中的菜单项的 key 的数组")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 当前访问路径\nconst { pathname} = useLocation()\n...\n+   <Menu ... selectedKeys={[pathname]}  />\n")])])]),t("h5",{attrs:{id:"菜单全部收缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#菜单全部收缩"}},[e._v("#")]),e._v(" 菜单全部收缩")]),e._v(" "),t("p",[e._v("Antd 的 Menu 组件有一个属性"),t("code",[e._v("openKeys")]),e._v("代表当前展开的"),t("code",[e._v("SubMenu")]),e._v("菜单项的 key 的数组")]),e._v(" "),t("p",[e._v("我们获取到当前访问路径，例如说/system/user，system 就是我们需要展开的菜单项的 key，现在我们就去取出这个 key。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("// 获取当前路径数组片段\nconst pathSnippets=pathname.split('/').filter(i=>i)\n// 获取除最后一个元素外的数组，并且每个元素前加上/\nconst [subMenuKeys, setSubMenuKeys] = useState(pathSnippets.slice(0, -1).map((item) => '/' + item))\n​\n+  <Menu openKeys={subMenuKeys}/>\n")])])]),t("p",[e._v("现在刷新后就能菜单就会在当前菜单项的目录上逐级展开了。但又发现了一个新的问题，现在点击下拉菜单没反应了，我们得在"),t("code",[e._v("Menu")]),e._v("组件添加一个"),t("code",[e._v("onOpenChange")]),e._v("配置监测下拉菜单改变重新设置"),t("code",[e._v("下拉菜单key数组")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("+  <Menu onOpenChange={(openKeys) =>{setSubMenuKeys(openKeys)}}/>\n")])])]),t("p",[e._v("这样侧边栏区域就算完成了")]),e._v(" "),t("h3",{attrs:{id:"内容区域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容区域"}},[e._v("#")]),e._v(" 内容区域")]),e._v(" "),t("p",[e._v("内容区域我们直接用"),t("code",[e._v("<Outlet />")]),e._v("标签展现 layout 子路由页面即可")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("...\n<Content\n  style={{\n    margin: '24px 16px',\n    padding: 24,\n    minHeight: 280,\n    background: colorBgContainer\n  }}>\n  <Outlet />\n</Content>\n...\n")])])]),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6854573215646875655",target:"_blank",rel:"noopener noreferrer"}},[e._v("# 使用 svg-sprite-loader、svgo-loader 优化项目中的 Icon"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[e._v("#")]),e._v(" 代码")]),e._v(" "),t("p",[e._v("上述实现的代码都放在"),t("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FAlan-222%2Freact-antd5-admin",title:"https://github.com/Alan-222/react-antd5-admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-antd5-admin"),t("OutboundLink")],1),e._v("，大家可自行查阅")])])}),[],!1,null,null,null);t.default=a.exports}}]);