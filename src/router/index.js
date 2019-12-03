// import Vue from 'vue'
// import store from '@/store'
import Router from 'vue-router'
import RouterConfig from './modules/routes' // 引入业务逻辑模块

// Vue.use(Router)

// const vueRouter = new Router({
//   // scrollBehavior: () => ({ y: 0 }),
//   mode: 'history',
//   fallback: true,
//   scrollBehavior (to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition
//     } else {
//       return { x: 0, y: 0 }
//     }
//   },
//   routes: RouterConfig
// })

// vueRouter.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.state.currUser.iruser) {
//       console.log('store.state.currUser.iruser.status', store.state.currUser.iruser.status)
//       console.log('store.state.currUser.entitlementrequest', store.state.currUser.entitlementrequest)
//       if (store.state.currUser.iruser.status === 0 &&
//         to.path !== '/') {
//         next({
//           path: '/',
//           query: { redirect: to.fullPath } // 把要跳转的地址作为参数传到下一步
//         })
//       } else if (store.state.currUser.iruser.status === 1 &&
//         to.path === '/register') {
//         next({
//           path: '/',
//           query: { redirect: to.fullPath } // 把要跳转的地址作为参数传到下一步
//         })
//       } else {
//         next()
//       }
//     } else {
//       if (to.path !== '/') {
//         next({
//           path: '/',
//           query: { redirect: to.fullPath } // 把要跳转的地址作为参数传到下一步
//         })
//       } else {
//         next()
//       }
//     }
//   } else {
//     if (store.state.currUser.iruser) {
//       if (store.state.currUser.iruser.status === 0 &&
//         store.state.currUser.entitlementrequest &&
//         to.path !== '/regwarning') {
//         next({
//           path: '/regwarning',
//           query: { redirect: to.fullPath } // 把要跳转的地址作为参数传到下一步
//         })
//       } else if (store.state.currUser.iruser.status === 1 &&
//         to.path === '/register') {
//         next({
//           path: '/',
//           query: { redirect: to.fullPath } // 把要跳转的地址作为参数传到下一步
//         })
//       } else {
//         next()
//       }
//     } else {
//       if (to.path !== '/') {
//         next({
//           path: '/',
//           query: { redirect: to.fullPath } // 把要跳转的地址作为参数传到下一步
//         })
//       } else {
//         next()
//       }
//     }
//   }
// })

export default () => {
  return new Router({
    // scrollBehavior: () => ({ y: 0 }),
    // mode: 'history',
    // fallback: true,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    routes: RouterConfig
  })
}
