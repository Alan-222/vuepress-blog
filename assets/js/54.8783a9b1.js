(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{460:function(e,n,r){"use strict";r.r(n);var t=r(2),s=Object(t.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),n("p",[e._v("至此我们后端的用户、角色、权限模块就已经都完成了，感兴趣的小伙伴还可以去扩展实现更多的模块。那么现在就要开始实现此系统的前端部分。")]),e._v(" "),n("h2",{attrs:{id:"前端系统设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端系统设计"}},[e._v("#")]),e._v(" 前端系统设计")]),e._v(" "),n("p",[n("strong",[e._v("前端部分")]),e._v("主要分为三个模块，一是登录模块，二是 layout 页面布局模块，三是管理页面模块。登录模块的表单包含用户名密码及图形验证码防止恶意登录，layout 页面布局模块包含页头、侧边栏（显示用户的权限菜单），管理页面模块即点击权限菜单所展示的内容。layout 及管理页面模块如下所示：")]),e._v(" "),n("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a62f78d2fe8f4562bf028224249caa94~tplv-k3u1fbpfcp-watermark.image?",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),n("p",[e._v("确认完系统所需模块后，该系统主要逻辑的流程大致如下：登录后根据用户名判断登录用户的角色权限，然后跳转获取登录用户的信息并渲染出该用户角色所对应的"),n("strong",[e._v("权限页面")]),e._v("，且该用户只能在他的"),n("strong",[e._v("权限页面")]),e._v("上看到它的角色所拥有的权限按钮，其余按钮皆不可见。在权限页面实现对应的增删改查功能，还有添加个人中心以便用户对个人信息进行修改。")]),e._v(" "),n("h3",{attrs:{id:"设置代理解决跨域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置代理解决跨域"}},[e._v("#")]),e._v(" 设置代理解决跨域")]),e._v(" "),n("p",[e._v("但完成上述的前提是需要后端接口。所以我们首先先看一下接口文档，确定需要的接口及后端服务信息。")]),e._v(" "),n("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c0f0eb6a935434e9dd5084a6e40348d~tplv-k3u1fbpfcp-watermark.image?",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),n("blockquote",[n("p",[e._v("由于文章篇幅原因，只能展示一些，详见我系统的接口文档"),n("a",{attrs:{href:"https://github.com/Alan-222/Vue3_Ts_NodeJs_management_system_server/tree/master/vue_ts-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue3+ts+nodeJs 后台管理系统接口文档"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("然后由于端口号的不同，涉及到跨域，所以我们通过代理解决跨域的问题。")]),e._v(" "),n("p",[n("strong",[e._v("vite.config.ts")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export default defineConfig({\n  ...\n  server: {\n    // 系统端口号\n    port: 8080,\n    // 是否自动打开浏览器\n    open: true,\n    // 代理跨域\n    proxy: {\n      '/user': {\n        target: 'http://127.0.0.1:9999',\n        changeOrigin: true,\n        rewrite: (path) => path.replace('//user$/', '')\n      }\n    }\n  }\n}）\n")])])]),n("h3",{attrs:{id:"配置-axios"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-axios"}},[e._v("#")]),e._v(" 配置 axios")]),e._v(" "),n("p",[e._v("首先我们需要知道，登录后请求过来的 token 是需要存储在客户端的，然后每次请求时都要带上 token。本系统选择将 token 存储在 cookie 中，所以我们添加获取、设置 token 的配置文件")]),e._v(" "),n("p",[e._v("先安装"),n("code",[e._v("js-cookie")]),e._v("插件便于对 cookie 的操作")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm i js-cookie@3.0.1\n")])])]),n("p",[n("strong",[e._v("utils/auth.ts")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import Cookies from 'js-cookie';\n// 设置token键值\nconst TokenKey = 'Access-Token';\n/**\n * 获取token\n */\nexport function getToken() {\n  return Cookies.get(TokenKey);\n}\n/**\n * 设置token\n * @param token\n */\nexport function setToken(token: string) {\n  return Cookies.set(TokenKey, token);\n}\n/**\n * 移除token\n */\nexport function removeToken() {\n  return Cookies.remove(TokenKey);\n}\n// refreshToken键值\nconst RefreshTokenKey = 'Refresh-Token';\n​\nexport function getRefreshToken() {\n  return Cookies.get(RefreshTokenKey);\n}\n​\nexport function setRefreshToken(token: string) {\n  return Cookies.set(RefreshTokenKey, token, { expires: 7 });\n}\n​\nexport function removeRefreshToken() {\n  return Cookies.remove(RefreshTokenKey);\n}\n​\n")])])]),n("p",[e._v("然后我们在 axios 的配置文件拦截器中存在请求拦截和响应拦截")]),e._v(" "),n("ul",[n("li",[e._v("请求拦截时，我们对需要 token 请求头的接口带上请求头")]),e._v(" "),n("li",[e._v("响应拦截时，先判断是否为二进制文件 blob 类型，不是则判断 code 是否为 0（接口请求成功），否则返回响应失败信息，是则返回数据。但响应拦截时，后端可能发现 token 过期，而此时又该返回信息，所以我们应该调用刷新 token 的接口，并进行完之前的请求。除非 refreshToken 也过期，我们才跳转登录页重新登录（当然我们路由还没有写）")])]),e._v(" "),n("p",[n("strong",[e._v("utils/http.ts")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';\nimport router from '../router/index.js';\nimport { getToken, setToken, removeToken, setRefreshToken, removeRefreshToken, getRefreshToken } from '../utils/auth';\nimport { ElMessage } from 'element-plus';\nconst BASE_URL = ''; //请求接口url 如果不配置 则默认访问链接地址\nconst TIME_OUT = 20000; // 接口超时时间\n​\n// 是否正在刷新的标记\nlet isRefreshing = false;\n// 重试队列，每一项将是一个待执行的函数形式\nlet requests: any[] = [];\n​\nconst instance = Axios.create({\n  baseURL: BASE_URL,\n  timeout: TIME_OUT\n});\n// 不需要token的接口白名单\nconst whiteList = ['/user/login', '/user/refreshToken', '/user/checkCode'];\n​\n// 添加请求拦截器\ninstance.interceptors.request.use(\n  (config: AxiosRequestConfig) => {\n    console.log(config);\n​\n    if (!whiteList.includes(config.url)) {\n      let Token = getToken();\n      if (Token && Token.length > 0) {\n        config.headers['Authorization'] = Token;\n      }\n    }\n    return config;\n  },\n  (error) => {\n    return Promise.reject(error);\n  }\n);\n​\n// 添加响应拦截器\ninstance.interceptors.response.use(\n  (response: AxiosResponse) => {\n    // 如果返回的类型为二进制文件类型\n    if (response.config.responseType === 'blob') {\n      if (response.status != 200) {\n        ElMessage.error('请求失败' + response.status);\n        return Promise.reject();\n      } else if (!response.headers['content-disposition']) {\n        ElMessage.error('暂无接口访问权限');\n        return Promise.reject();\n      }\n      return response;\n    } else {\n      // 如果接口请求失败\n      if (response.data.code !== 0) {\n        let errMsg = response.data.message || '系统错误';\n        // token过期\n        if (response.data.code == 401) {\n          const config = response.config;\n          // token失效,判断请求状态\n          if (!isRefreshing) {\n            isRefreshing = true;\n            // 刷新token\n            return instance({\n              url: 'http://127.0.0.1:9999/user/refreshToken',\n              method: 'post',\n              data: { refreshToken: getRefreshToken() }\n            })\n              .then((res) => {\n                // 刷新token成功，更新最新token\n                const { token, refreshToken } = res.data;\n                setToken(token);\n                setRefreshToken(refreshToken);\n                //已经刷新了token，将所有队列中的请求进行重试\n                requests.forEach((cb) => cb(token));\n                // 重试完了别忘了清空这个队列\n                requests = [];\n                return instance(config);\n              })\n              .catch(() => {\n                removeToken();\n                removeRefreshToken();\n                // 重置token失败，跳转登录页\n                router.replace({\n                  path: '/login',\n                  query: {\n                    redirect: router.currentRoute.fullPath //登录成功后跳入浏览的当前页\n                  }\n                });\n              })\n              .finally(() => {\n                isRefreshing = false;\n              });\n          } else {\n            // 返回未执行 resolve 的 Promise\n            return new Promise((resolve) => {\n              // 用函数形式将 resolve 存入，等待刷新后再执行\n              requests.push(() => {\n                resolve(instance(config));\n              });\n            });\n          }\n        } else {\n          ElMessage.error(errMsg);\n        }\n        return Promise.reject(errMsg);\n      }\n      return response.data;\n    }\n  },\n  (error: AxiosError) => {\n    return Promise.reject(error);\n  }\n);\n​\nexport default instance;\n​\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);