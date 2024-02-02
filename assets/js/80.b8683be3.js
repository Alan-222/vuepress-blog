(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{486:function(e,t,n){"use strict";n.r(t);var s=n(2),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("之前我们提到了"),t("code",[e._v("token")]),e._v("的全局状态存储，对于后台管理系统而言，业务信息接口带上请求头 token 是有必要的，故我们在此对 http 请求工具库"),t("code",[e._v("axios")]),e._v("做一下封装。当然，首先需要安装。")]),e._v(" "),t("h2",{attrs:{id:"http-请求工具-axios-封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-请求工具-axios-封装"}},[e._v("#")]),e._v(" Http 请求工具 axios 封装")]),e._v(" "),t("h3",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),t("blockquote",[t("p",[e._v("Axios 是一个基于 "),t("strong",[e._v("promise")]),e._v(" 网络请求库，作用于"),t("code",[e._v("node.js")]),e._v(" 和浏览器中。 它是 同构的(即同一套代码可以运行在浏览器和 node.js 中)。在服务端它使用原生 node.js "),t("code",[e._v("http")]),e._v(" 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。")])]),e._v(" "),t("h3",{attrs:{id:"安装-axios-与-antd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-axios-与-antd"}},[e._v("#")]),e._v(" 安装 axios 与 antd")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install axios\nnpm install antd --save\n")])])]),t("h3",{attrs:{id:"封装-axios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#封装-axios"}},[e._v("#")]),e._v(" 封装 axios")]),e._v(" "),t("p",[e._v("src 下创建 utils 文件夹，在其下新建"),t("code",[e._v("request.js")]),e._v("文件。随后设置请求拦截器，如果请求的是业务接口那么请求头带上 token，如果不是的话加入白名单。响应拦截器则需要对返回 blob 文件流和正常业务数据做判断，文件流直接返回，而业务数据返回 data 数据。")]),e._v(" "),t("h4",{attrs:{id:"设置拦截器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置拦截器"}},[e._v("#")]),e._v(" 设置拦截器")]),e._v(" "),t("p",[t("strong",[e._v("src/utils/request.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import Axios from 'axios'\nimport { getToken } from '../utils/auth'\n// 用axios的message来提示接口响应状况\nimport { message } from 'antd'\n​\n​\nconst BASE_URL = process.env.NODE_ENV==='production'?'':'/api' //请求接口url 如果不配置 则默认访问链接地址\nconst TIME_OUT = 20000 // 接口超时时间\n​\nconst instance = Axios.create({\n  baseURL: BASE_URL,\n  timeout: TIME_OUT\n})\n​\n// 不需要token的接口白名单\nconst whiteList = ['/user/login', '/user/checkCode']\n​\n// 添加请求拦截器\ninstance.interceptors.request.use(\n  (config) => {\n    if (config.url && typeof config.url === 'string') {\n      if (!whiteList.includes(config.url)) {\n        let Token = getToken()\n        if (Token && Token.length > 0) {\n          config.headers && (config.headers['Authorization'] = Token)\n        }\n      }\n    }\n    return config\n  },\n  (error) => {\n    return Promise.reject(error)\n  }\n)\n// 添加响应拦截器\ninstance.interceptors.response.use(\n  (response) => {\n    // 如果返回的类型为二进制文件类型\n    if (response.config.responseType === 'blob') {\n      if (response.status !== 200) {\n        message.error('请求失败' + response.status)\n        return Promise.reject()\n      } else if (!response.headers['content-disposition']) {\n        message.error('暂无接口访问权限')\n        return Promise.reject()\n      }\n      return response\n    } else {\n      // 如果接口请求失败\n      if (response.data.code !== 0) {\n        let errMsg = response.data.message || '系统错误'\n        return Promise.reject(errMsg)\n      }\n      return response.data\n    }\n  },\n  (error) => {\n    return Promise.reject(error)\n  }\n)\n")])])]),t("h2",{attrs:{id:"测试接口服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试接口服务"}},[e._v("#")]),e._v(" 测试接口服务")]),e._v(" "),t("h3",{attrs:{id:"所需准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#所需准备"}},[e._v("#")]),e._v(" 所需准备")]),e._v(" "),t("h4",{attrs:{id:"后端服务及接口文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后端服务及接口文档"}},[e._v("#")]),e._v(" 后端服务及接口文档")]),e._v(" "),t("p",[e._v("接下来要测试接口服务的话，这里就要用到之前给大家提供的 node 后端服务器")]),e._v(" "),t("p",[e._v("【"),t("a",{attrs:{href:"https://github.com/Alan-222/Vue3_Ts_NodeJs_management_system_server",target:"_blank",rel:"noopener noreferrer"}},[e._v("node 后端服务器"),t("OutboundLink")],1),e._v("】：")]),e._v(" "),t("p",[e._v("1.克隆到本地后新建 mysql 数据库并运行 sql 目录下的 database.sql 文件")]),e._v(" "),t("p",[e._v("2.修改 model 目录下 init.js 中的数据库信息")]),e._v(" "),t("p",[e._v("2."),t("code",[e._v("npm install")]),e._v("安装依赖")]),e._v(" "),t("p",[e._v("3."),t("code",[e._v("npm start")]),e._v("启动服务")]),e._v(" "),t("p",[e._v("【"),t("a",{attrs:{href:"https://github.com/tporadowski/redis/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis"),t("OutboundLink")],1),e._v("】：用于验证码的缓存")]),e._v(" "),t("p",[e._v("1.点击链接并安装 msi 后缀的版本")]),e._v(" "),t("p",[e._v("2.设置默认端口 6379，密码 123456")]),e._v(" "),t("p",[e._v("【"),t("a",{attrs:{href:"https://github.com/Alan-222/Vue3_Ts_NodeJs_management_system_server/blob/master/vue_ts-server/vue3%2Bts%2BnodeJS%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3%EF%BC%88%E6%8E%A5%E5%8F%A3%E5%9C%B0%E5%9D%80%2B%E5%8F%82%E6%95%B0%EF%BC%89.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("接口文档"),t("OutboundLink")],1),e._v("】：提供了接口 url 信息及所需请求参数")]),e._v(" "),t("h4",{attrs:{id:"前端跨域配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端跨域配置"}},[e._v("#")]),e._v(" 前端跨域配置")]),e._v(" "),t("p",[e._v("1.安装 http-proxy-middleware 模块")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm i http-proxy-middleware --save\n")])])]),t("p",[e._v("2."),t("code",[e._v("src")]),e._v("下新建"),t("code",[e._v("setupProxy.js")]),e._v("文件（文件名必须一致）")]),e._v(" "),t("p",[t("strong",[e._v("src/setupProxy.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const { createProxyMiddleware } = require('http-proxy-middleware')\nmodule.exports = function (app) {\n  app.use(\n    '/api',\n    createProxyMiddleware({\n      target: 'http://127.0.0.1:9999', // 后台服务地址以及端口号\n      changeOrigin: true, // 是否开启代理\n      pathRewrite: {\n        '/api': '' // 代理前缀重写\n      }\n    })\n  )\n}\n")])])]),t("p",[e._v("3.重启项目（"),t("strong",[e._v("必须")]),e._v("）")]),e._v(" "),t("h3",{attrs:{id:"测试接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试接口"}},[e._v("#")]),e._v(" 测试接口")]),e._v(" "),t("p",[e._v("完成跨域配置之后，我们就可以在项目中尝试是否能够连通接口。我们把之前 Home 组件测试 redux 的代码删掉，开始编写接口方法。")]),e._v(" "),t("p",[e._v("1.引入封装的"),t("code",[e._v("axios")]),e._v("实例")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import request from '@/utils/request'\n")])])]),t("p",[e._v("2.编写"),t("code",[e._v("axios")]),e._v("连接接口方法（这里以获取验证码为例）")]),e._v(" "),t("p",[t("strong",[e._v("src/pages/Home/index.jsx")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import React, { useEffect } from 'react'\nimport request from '@/utils/request'\nconst Home = () => {\n  useEffect(() => {\n    const fetchCode = async () => {\n      const code = await request({\n        url: 'http://127.0.0.1:9999/user/checkCode',\n        method: 'get',\n        params: {\n          // 用当前时间戳作为验证码的id\n          uuid: new Date().getTime()\n        }\n      })\n      console.log(code)\n    }\n    fetchCode()\n  }, [])\n  return <div>Home</div>\n}\nexport default Home\n")])])]),t("p",[e._v("3.连接成功")]),e._v(" "),t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0fb7a094035a4e988feabd5801a42f3c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1215&h=204&s=18976&e=png&b=fcfcfc",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),t("h3",{attrs:{id:"封装接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#封装接口"}},[e._v("#")]),e._v(" 封装接口")]),e._v(" "),t("p",[e._v("测试成功后大家应该会发现一个问题，每次编写接口方法都要引入"),t("code",[e._v("axios")]),e._v("封装文件，然后一步一步地编写方法，显得十分麻烦。所以接下来我们就要对所有的接口进行封装（参考上面的接口文档）。我们用一个对象管理模块对应的 api 方法然后导出，使用的时候在组件中导入"),t("code",[e._v("import Api from '...'")]),e._v("，通过"),t("code",[e._v("Api.xxModule.add()")]),e._v("调用接口方法即可，代码示例：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// xxApi.js\nconst apiMap={\n  xxModule:{\n    add:xxaddFunc()\n    get:xxGetFunc()\n  }\n  xxModule:{}\n}\nexport default apiMap\nxxaddFunc(){}\nxxGetFunc(){}\n​\n// xx.jsx\nimport Api from '...'\n...\nconst add=()=>{\n  const res=await Api.xxModule.add()\n  console.log(res)\n}\n")])])]),t("p",[e._v("然后我们以用户模块的封装为例，总共分为三个模块：登录模块、用户模块和用户中心模块，然后编写对应的接口方法再导出即可。")]),e._v(" "),t("p",[t("strong",[e._v("src/api/user/index.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 导入axios实例\nimport request from '@/utils/request'\n// 导入获取refreshToken的方法\nimport { getRefreshToken } from '@/utils/auth'\nconst apiMap = {\n  // 登录\n  login: {\n    get: getCheckCode,\n    login: userLogin,\n    refresh: refreshToken\n  },\n  // 用户管理\n  manage: {\n    add: addUser,\n    update: updateUser,\n    del: delUser,\n    query: listUser,\n    queryById: getUserById,\n    reset: updatePwd // 重置密码\n  },\n  // 用户中心\n  center: {\n    get: getUserInfo,\n    update: updateUserInfo\n  }\n}\nexport default apiMap\n​\n// 获取图形验证码\nfunction getCheckCode(uuid) {\n  return request({\n    url: '/user/checkCode?uuid=' + uuid,\n    method: 'get'\n  })\n}\n// 刷新过期token\nfunction refreshToken() {\n  ...\n}\n// 添加用户登录请求\nfunction userLogin(form) {\n  ...\n}\n// 获取用户列表\nfunction listUser(params) {\n ...\n}\n...\n")])])]),t("p",[e._v("最后我们修改下上面 Home 组件写的获取验证码的方法")]),e._v(" "),t("p",[t("strong",[e._v("src/pages/Home/index.jsx")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import React, { useEffect } from 'react'\nimport userApi from '@/api/user'\nconst Home = () => {\n  useEffect(() => {\n    const fetchCode = async () => {\n      const code = await userApi.login.get()\n      console.log(code)\n    }\n    fetchCode()\n  }, [])\n  return <div>Home</div>\n}\nexport default Home\n")])])]),t("p",[e._v("也能正常响应")]),e._v(" "),t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7df399adec1242099f670e455ea7dd09~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=816&h=75&s=15347&e=png&b=f8f7f7",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),t("h2",{attrs:{id:"代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[e._v("#")]),e._v(" 代码")]),e._v(" "),t("p",[e._v("上述实现的代码都放在"),t("a",{attrs:{href:"https://github.com/Alan-222/react-antd5-admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-antd5-admin"),t("OutboundLink")],1),e._v("，大家可自行查阅")])])}),[],!1,null,null,null);t.default=r.exports}}]);