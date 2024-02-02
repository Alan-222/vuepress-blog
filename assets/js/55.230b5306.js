(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{461:function(e,t,n){"use strict";n.r(t);var r=n(2),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("上文用前端写的路由实现了侧边栏的展示，但是除了首页、登录页及错误页面（404 页面等），其它页面在后台管理系统中应该都是要受到"),t("strong",[e._v("权限的控制")]),e._v("的。所以前端我们只留一些"),t("strong",[e._v("静态的、不受权限控制的")]),e._v("路由，其它由后端返回给我们来拼接。由于很多组件都可能要用到这些路由信息，所以这些后端返回的路由信息应该存储在"),t("strong",[e._v("vuex")]),e._v("中。还有"),t("strong",[e._v("vuex")]),e._v("主要是对全局的状态进行管理，我们所需要全局管理的数据有登录用户的用户信息、权限、按钮等。")]),e._v(" "),t("h2",{attrs:{id:"设置前端静态路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置前端静态路由"}},[e._v("#")]),e._v(" 设置前端静态路由")]),e._v(" "),t("p",[e._v("静态路由除了登录页、首页及错误页面外，还应该设置默认路由"),t("strong",[e._v("重定向")]),e._v("至首页。除此之外此系统的默认跳转都是到达首页或者用户通过其它有效 url 跳转的页面，我们还应当在路由拦截时判断是否有 token 存在客户端中，有则直接跳转，无则跳转登录页并在 query 参数中带上未跳转的"),t("strong",[e._v("路由 path")]),e._v("。然后在登录页面中我们要获得 query 信息，然后跳转至重定向的页面。")]),e._v(" "),t("blockquote",[t("p",[e._v("不能直接将路由 path 为'/'的路由直接设为首页例如{path:'/',component:'xxx',name:'xxx'}，要设置重定向至首页。原因主要为直接设 component 为首页跳转地址的 url 只会是'xxx:xx/xxxx/'只显示/会有问题。")])]),e._v(" "),t("p",[t("strong",[e._v("router/index.ts")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';\nimport Layout from '@/components/layout/index.vue';\n//静态路由\nexport const constantRoutes: Array<RouteRecordRaw> = [\n  {\n    path: '/login',\n    component: () => import('@/views/login.vue'),\n    meta: { hidden: true }\n  },\n  {\n    path: '/',\n    component: Layout,\n    redirect: '/home',\n    children: [\n      {\n        path: '/home',\n        component: () => import('@/views/home/index.vue'),\n        name: 'Home',\n        meta: { title: '首页', icon: 'dashboard' }\n      }\n    ]\n  },\n  {\n    path: '/404',\n    component: () => import('@/views/errorPage/404.vue'),\n    meta: { hidden: true }\n  },\n  {\n    path: '/401',\n    component: () => import('@/views/errorPage/401.vue'),\n    meta: { hidden: true }\n  }\n];\n​\nconst router = createRouter({\n  history: createWebHashHistory(),\n  routes: constantRoutes,\n  // 刷新时，滚动条位置还原\n  scrollBehavior: () => ({ left: 0, top: 0 })\n});\n​\n// 重置路由\nexport function resetRouter() {\n  store.state.permission.routes.forEach((route: any) => {\n    const name = route.name;\n    if (name) {\n      router.hasRoute(name) && router.removeRoute(name);\n    }\n  });\n}\nexport default router;\n")])])]),t("p",[e._v("上面的"),t("code",[e._v("resetRouter")]),e._v("方法中用到了 vuex 的 permission 模块会报错，接下来我们在 vuex 中将这些静态路由拼接上后端路由即为完整的路由。")]),e._v(" "),t("h2",{attrs:{id:"vuex-全局状态管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuex-全局状态管理"}},[e._v("#")]),e._v(" vuex 全局状态管理")]),e._v(" "),t("p",[e._v("首先是登录用户的信息，我们从后端得到已登录用户的信息后，存储下用户名、昵称、邮箱、用户角色、权限菜单、权限按钮等信息，然后在"),t("code",[e._v("vuex")]),e._v("的 mutations 属性设置对应的 set 函数以便修改。同时，登录、退出登录的操作也应该放在"),t("code",[e._v("vuex")]),e._v("的 actions 属性中以便进行全局状态的操作，登录主要是获取 token 等、退出登录清空所有用户信息。")]),e._v(" "),t("p",[e._v("由于用的是"),t("code",[e._v("TypeScript")]),e._v("来编写"),t("code",[e._v("vue")]),e._v("组件，所以需要遵循一些步骤提供正确的类型声明。")]),e._v(" "),t("blockquote",[t("p",[e._v("参考"),t("code",[e._v("vuex")]),e._v("官方文档"),t("a",{attrs:{href:"https://vuex.vuejs.org/zh/guide/typescript-support.html#%E7%AE%80%E5%8C%96-usestore-%E7%94%A8%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeScript 支持"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("主要的做法就是 1.提供类型化的 key 2.定义自己的 useStore 组合式函数来检索类型化的 store，这样每次 vue 组件导入 store 时就不用类型化的 key")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("首先我们先编写各个 store 模块的类型。在 types 目录下创建 store 文件夹，创建 user、permission 模块的和整体 store 的类型文件。并在 store 目录也建立对应的模块文件夹及文件。如下图所示目录结构")]),e._v(" "),t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5116b5b69a474c46a095b7f3c6c8b0fd~tplv-k3u1fbpfcp-watermark.image?",alt:"img.png",referrerpolicy:"no-referrer"}}),e._v(" "),t("p",[e._v("然后编写各自 store 模块的类型")]),e._v(" "),t("p",[t("strong",[e._v("types/store/user.d.ts")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * 用户类型声明\n */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("userState")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("token")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("undefined")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("refreshToken")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("undefined")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("roles")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Array"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("string"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("menus")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Array"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("MenuItem"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("buttons")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Array"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("string"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("user_id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("nickname")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("email")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("user_pic")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[t("strong",[e._v("types/store/permission.d.ts")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * 权限类型声明\n */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("permissionState")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("routes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" RouteRecordRaw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("addRoutes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" RouteRecordRaw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * 菜单meta类型\n */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("meta")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  hidden"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" boolean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("title")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  icon"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[t("strong",[e._v("types/store/root.d.ts")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 定义state类型，将所有模块的类型导入")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("rootState")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" userState"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("permission")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" permissionState"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("编写 user 模块，主要是在"),t("strong",[e._v("mutations")]),e._v("中设置各个 state 属性值的 set 函数，在 actions 中编写登录、获取用户信息和退出登录的异步函数，如下述代码 "),t("strong",[e._v("store/module/user.ts")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import { Module } from 'vuex';\n// 导入api\nimport { userLogin } from '@/utils/API/user/user';\nimport { getUserInfo } from '@/utils/Api/user/personalCenter';\n// 导入重置路由的函数\nimport { resetRouter } from '@/router';\n// 导入操作token的方法\nimport { getToken, setToken, removeToken, setRefreshToken, removeRefreshToken, getRefreshToken } from '@/utils/auth';\nimport { ElMessage } from 'element-plus';\n// 导入store类型\nimport { userState } from '@/types/store/user';\nimport { rootState } from '@/types/store/root';\nexport const user: Module<userState, rootState> = {\n  // 开启命名空间\n  namespaced: true,\n  state: (): userState => ({\n    token: getToken() || '',\n    refreshToken: getRefreshToken() || '',\n    roles: [],\n    menus: [],\n    buttons: [],\n    user_id: 0,\n    username: '',\n    nickname: '',\n    email: '',\n    user_pic: ''\n  }),\n  // 同步操作函数\n  mutations: {\n    SET_TOKEN: (state, token) => {\n      state.token = token;\n    },\n    SET_REFRESHTOKEN: (state, refreshToken) => {\n      state.refreshToken = refreshToken;\n    },\n    SET_ROLES: (state, roles) => {\n      state.roles = roles;\n    },\n    SET_MENUS: (state, menus) => {\n      state.menus = menus;\n    },\n    SET_BUTTONS: (state, buttons) => {\n      state.buttons = buttons;\n    },\n    SET_USERID: (state, user_id) => {\n      state.user_id = user_id;\n    },\n    SET_USERNAME: (state, username) => {\n      state.username = username;\n    },\n    SET_NICKNAME: (state, nickname) => {\n      state.nickname = nickname;\n    },\n    SET_EMAIL: (state, email) => {\n      state.email = email;\n    },\n    SET_USER_PIC: (state, user_pic) => {\n      state.user_pic = user_pic;\n    }\n  },\n  // 异步操作函数\n  actions: {\n    login({ commit }, data) {\n      return new Promise((resolve, reject) => {\n        userLogin(data)\n          .then((res) => {\n            commit('SET_TOKEN', res.data.token);\n            commit('SET_REFRESHTOKEN', res.data.refreshToken);\n            setToken(res.data.token);\n            setRefreshToken(res.data.refreshToken);\n            ElMessage.success('登录成功');\n            resolve(null);\n          })\n          .catch((error) => {\n            reject(error);\n          });\n      });\n    },\n    // 获取用户信息\n    GetInfo({ commit, state }) {\n      return new Promise((resolve, reject) => {\n        getUserInfo()\n          .then((res) => {\n            const { data } = res;\n​\n            if (!data || data.length <= 0) {\n              reject('验证失败，请重新登录');\n            }\n            // 解构后端值\n            const { roles, user_id, name, nickname, email, avatar, menus, buttons } = data;\n​\n            // 角色数组必须有值\n            if (!roles || roles.length <= 0) {\n              reject('此用户无分配角色或角色不可用，请重新登录');\n            }\n            commit('SET_ROLES', roles);\n            commit('SET_USERID', user_id);\n            commit('SET_USERNAME', name);\n            commit('SET_NICKNAME', nickname);\n            commit('SET_EMAIL', email);\n            commit(\n              'SET_USER_PIC',\n              avatar ? 'http://127.0.0.1:3007/' + avatar : '/src/assets/avatar/default_avatar.jpg'\n            );\n            commit('SET_MENUS', menus);\n            commit('SET_BUTTONS', buttons);\n            resolve(data);\n          })\n          .catch((error) => {\n            reject(error);\n          });\n      });\n    },\n    // 退出登录\n    FedLogOut({ commit }) {\n      return new Promise((resolve) => {\n        commit('SET_TOKEN', '');\n        commit('SET_REFRESHTOKEN', '');\n        commit('SET_ROLES', []);\n        commit('SET_MENUS', []);\n        commit('SET_BUTTONS', []);\n        commit('SET_USERID', -1);\n        commit('SET_USERNAME', '');\n        commit('SET_NICKNAME', '');\n        commit('SET_EMAIL', '');\n        commit('SET_USER_PIC', '');\n        resetRouter();\n        removeToken();\n        removeRefreshToken();\n        resolve(null);\n      });\n    },\n    // 重置token\n    resetToken({ commit }) {\n      return new Promise((resolve) => {\n        commit('SET_TOKEN', '');\n        commit('SET_REFRESHTOKEN', '');\n        removeToken();\n        removeRefreshToken();\n        resolve(null);\n      });\n    }\n  }\n};\n")])])])]),e._v(" "),t("li",[t("p",[e._v("编写 permission 模块，主要是为了将后端提供的菜单转为前端的 router 结构并拼接静态路由。有一个重点就是 vue2 路由导入文件一般是通过 require，但 vite 不支持 require，所以官网中提供了一个从文件中导入模块的函数 "),t("code",[e._v("import.meta.glob")]),e._v(" ，参考"),t("a",{attrs:{href:"https://cn.vitejs.dev/guide/features.html#glob-import",target:"_blank",rel:"noopener noreferrer"}},[e._v("vite 官方文档 glob 导入"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import { Module } from 'vuex';\nimport { constantRoutes } from '@/router';\nimport { RouteRecordRaw } from 'vue-router';\nimport Layout from '@/layout/index.vue';\nimport { meta, permissionState } from '@/types/store/permission';\nimport { rootState } from '@/types/store/root';\n// 懒加载view文件夹下的vue文件\nconst modules = import.meta.glob('../../views/**/**.vue');\n// 得到后端路由经转换后的路由结构\nexport function filterAsyncRoutes(routes: any) {\n  const res: RouteRecordRaw[] = [];\n  // 遍历得到的路由转换为前端router结构\n  routes.forEach((route: any) => {\n    const component = route.component;\n    const tmp: any = {\n      path: route.path,\n      // 通过import.meta.glob懒加载获取文件模块，注意文件结构！！！\n      component: route.component === 'Layout' ? Layout : modules[/* @vite-ignore */ `../../views${component}.vue`],\n      redirect: route.redirect || undefined,\n      name: route.name,\n      meta: {} as meta,\n      children: route.children || undefined\n    };\n    tmp.meta.title = route.title;\n    tmp.meta.hidden = !!route.hidden;\n    if (route.icon) {\n      tmp.meta.icon = route.icon;\n    }\n    if (tmp.children && tmp.children.length) {\n      tmp.children = filterAsyncRoutes(tmp.children);\n    }\n    res.push(tmp);\n  });\n  return res;\n}\nexport const permission: Module<permissionState, rootState> = {\n      // 开启命名空间\n  namespaced: true,\n  state: (): permissionState => ({\n    routes: [],\n    addRoutes: []\n  }),\n​\n  mutations: {\n    // 前端的静态路由拼接转换后的路由\n    SET_ROUTES: (state, routes) => {\n      state.addRoutes = routes;\n      state.routes = constantRoutes.concat(routes);\n    }\n  },\n​\n  actions: {\n    // 生成路由\n    generateRoutes({ commit }, menus) {\n      return new Promise((resolve) => {\n        const accessedRoutes = filterAsyncRoutes(menus);\n        commit('SET_ROUTES', accessedRoutes);\n        resolve(accessedRoutes);\n      });\n    }\n  }\n};\n")])])])]),e._v(" "),t("li",[t("p",[e._v("编写整体的 store 文件。要提供正确的类型声明，步骤如上说的是 1.提供类型化的 key 2.定义自己的 useStore 组合式函数来检索类型化的 store，这样每次 vue 组件导入 store 时就不用类型化的 key")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import { createStore, Store, useStore as baseUseStore } from 'vuex';\n// 定义类型化的key\nimport { InjectionKey } from 'vue';\n// 导入整体模块store的类型\nimport { rootState } from '@/types/store/root';\n// 导入模块\nimport { user } from './module/user';\nimport { permission } from './module/permission';\n​\n// 提供 injection key\nexport const key: InjectionKey<Store<rootState>> = Symbol();\nexport const store: Store<rootState> = createStore({\n  // 模块\n  modules: { user, permission }\n});\n// 定义自己的useStore组合式函数\nexport function useStore() {\n  return baseUseStore(key);\n}\n")])])]),t("p",[e._v("vuex 模块到这里就封装完毕了。")]),e._v(" "),t("h2",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[e._v("#")]),e._v(" 测试")]),e._v(" "),t("p",[e._v("通过引入 store 模块下主文件的 useStore 方法，就能够有正确的类型声明，且能够获得全局状态")]),e._v(" "),t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e1911f12797547a193ab453d4a2e300c~tplv-k3u1fbpfcp-watermark.image?",alt:"img.png",referrerpolicy:"no-referrer"}})])]),e._v(" "),t("h2",{attrs:{id:"路由拦截"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由拦截"}},[e._v("#")]),e._v(" 路由拦截")]),e._v(" "),t("p",[e._v("在 src 目录下新建一个 permission 路由模块，主要是进行路由拦截。")]),e._v(" "),t("p",[e._v("步骤有")]),e._v(" "),t("ol",[t("li",[e._v("看 vuex 中"),t("strong",[e._v("是否存在 token 及角色")]),e._v("，如果有的话判断是跳转到登录页还是其它页面。如果是登录页让用户跳转到首页，其它页面判断是否有此角色是否存在此路由的权限，无则跳到 404 页面，有则继续跳转。但是若"),t("strong",[e._v("不存在角色却有 token")]),e._v("的话就是还没获取用户信息，通过 vuex 用户模块的 GetInfo 的异步方法获取信息继续跳转即可。")]),e._v(" "),t("li",[t("strong",[e._v("没有 token")]),e._v("的话判断是否是白名单页面（无需 token 也可访问的页面），是可跳转，不是跳转登录页再重定向到要去的页面。")])]),e._v(" "),t("p",[e._v("代码如下：")]),e._v(" "),t("p",[e._v("由于页面有各自的标题存在路由元信息 meta 中所以先封装了一个公共获取标题的方法")]),e._v(" "),t("p",[t("strong",[e._v("src/utils/get-title.ts")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const title = 'Vue3后台管理系统';\n​\nexport default function getPageTitle(pageTitle: string) {\n  if (pageTitle) {\n    return `${pageTitle} - ${title}`;\n  }\n  return `${title}`;\n}\n")])])]),t("p",[t("strong",[e._v("src/permission.ts")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import router from '@/router';\nimport { ElMessage } from 'element-plus';\n// 不是vue组件直接引入store即可，不用带key\nimport { store } from '@/store';\n// 进度条组件\nimport NProgress from 'nprogress';\nimport getPageTitle from '@/utils/get-title';\nimport 'nprogress/nprogress.css';\n​\nNProgress.configure({ showSpinner: false }); // 进度环显示/隐藏\n​\n// 白名单路由\nconst whiteList = ['/login'];\n​\nrouter.beforeEach(async (to, from, next) => {\n  NProgress.start();\n  // 设置页面标题\n  document.title = getPageTitle(to.meta?.title);\n  // 判断是否有token\n  const hasToken = store.state.user.token;\n  if (hasToken) {\n    // console.log('有token');\n​\n    // 登录成功，跳转到首页\n    if (to.path === '/login') {\n      next({ path: '/' });\n      NProgress.done();\n    } else {\n      const hasGetUserInfo = store.state.user.roles.length > 0;\n      if (hasGetUserInfo) {\n        if (to.matched.length === 0) {\n          // from.name ? next({ name: from.name as any }) : next('/404');\n          next('/404');\n        } else {\n          next();\n        }\n      } else {\n        try {\n          await store.dispatch('user/GetInfo');\n          const menus = store.state.user.menus;\n          const accessRoutes: any = await store.dispatch('permission/generateRoutes', menus);\n          accessRoutes.forEach((route: any) => {\n            router.addRoute(route);\n          });\n          next({ ...to, replace: true });\n        } catch (error) {\n          console.log(error);\n​\n          // 移除 token 并跳转登录页\n          await store.dispatch('user/resetToken');\n          ElMessage.error((error as any) || '系统异常');\n          next(`/login?redirect=${to.path}`);\n          NProgress.done();\n        }\n      }\n    }\n  } else {\n    // 未登录可以访问白名单页面(登录页面)\n    if (whiteList.indexOf(to.path) !== -1) {\n      next();\n    } else {\n      next(`/login?redirect=${to.path}`);\n      NProgress.done();\n    }\n  }\n});\n​\nrouter.afterEach(() => {\n  NProgress.done();\n});\n")])])]),t("p",[e._v("测试一下发现能正常跳到登录页（因为还没有写登录模块），是正常的")]),e._v(" "),t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/321df50124624c7abca3cf1e7a69de92~tplv-k3u1fbpfcp-watermark.image?",alt:"img.png",referrerpolicy:"no-referrer"}})])}),[],!1,null,null,null);t.default=s.exports}}]);