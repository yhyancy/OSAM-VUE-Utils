import allUsers from './allusers'
import newsflash from './newsflash'
import register from './register'
import summaryRequest from './summaryRequest'
import requestReport from './requestReport'
import selectLocale from './selectLocale'
import switchId from './switchId'
import updateAppAuth from './updateAppAuth'
import validationReport from './ValidationReport'
import Welcome from '@/views/Welcome.vue'
let configRouters = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'home',
    meta: { title: 'home', requiresAuth: true, roles: [22, 21, 18] },
    component: () =>
      import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'about', requiresAuth: true, roles: [22, 28, 21, 20] },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  ...allUsers,
  ...newsflash,
  ...register,
  ...requestReport,
  ...selectLocale,
  ...summaryRequest,
  ...switchId,
  ...updateAppAuth,
  ...validationReport

]
console.log('configRouters', configRouters)
export default configRouters

// const manageFiles = require.context('.', true, /\.js$/)

// console.log('router manageFiles', manageFiles.keys()) // 返回一个数组，包含全部文件名
// let configRouters = []
// manageFiles.keys().forEach(key => {
//   if (key === './index.js') return //    如果是当前文件，则跳过
//   configRouters = configRouters.concat(manageFiles(key).default) // 读取出文件中的default模块
// })
// console.log('configRouters', configRouters)
// export default configRouters // 抛出一个Vue-router期待的结构的数组
