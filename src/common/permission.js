import { get } from './request'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })
class Permission {
  constructor (routerObj, iuiString) {
    this.router = routerObj
    this.iui = iuiString
  }
  async generatePermission () {
    const res = await get(`/user/profile/${this.iui}`)
    const currUser = res.data
    store.commit('SET_CURRENT_USER', currUser)
    console.log('4.Get CurrentUser:', currUser)

    this.router.beforeEach(async (to, from, next) => {
      NProgress.start()

      // 2019-11-14: Originally this block is used for the email notification link routing(with front link),
      // However it's more convenient that just expose the backend link in the email directly as the user need to login when click the link.
      // And backend will redirect to the front detail page link directly.
      // 没有登录 转到后台redirect
      if (!currUser.iruser) {
        window.location.href = `${process.env.VUE_APP_BASE_URL}/main`
        console.log('未登录用户登录返回结果')
        return
      }

      // 未找到路由 跳转到404
      if (!to.matched.some(record => record)) {
        // console.log('未登录用户登录返回结果', to)
        window.location.href = process.env.VUE_APP_404_URL
        return
      }

      // a 判断是否校验权限
      if (to.matched.some(record => record.meta.requiresAuth)) {
        console.log('currUser.iruser.status', currUser.iruser.status)
        console.log('currUser.entitlementrequest', currUser.entitlementrequest)
        // b 判断iruser.status是否等于0
        if (currUser.iruser.status === 0) {
          // window.location.href = 'https://tdyfraiost101.sl.bluecloud.ibm.com/403'
          window.location.href = process.env.VUE_APP_403_URL
        } else {
          let routerRoles = to.meta.roles
          let roleId = currUser.authorization.roleid
          // c.判断是否有访问权限
          if (routerRoles.includes(roleId)) {
            // 新老用户都不能提交多个request
            if (to.path === '/updateappauth' && currUser.entitlementrequest && currUser.entitlementrequest.id !== 0) {
              next({
                path: '/regwarning',
                query: { redirect: to.fullPath } // 把要跳转的地址作为参数传到下一步
              })
            } else {
              next()
              NProgress.done()
            }
          } else {
            // window.location.href = 'https://tdyfraiost101.sl.bluecloud.ibm.com/403'
            window.location.href = process.env.VUE_APP_403_URL
          }
        }
      } else {
        // b 判断iruser.status是否等于0
        if (currUser.iruser.status === 0) {
          // c 判断是否有iruser.entitlementrequest
          if (currUser.entitlementrequest) {
            // d 判断是否访问注册的路由
            if (to.path === '/register') {
              next({
                path: '/regwarning',
                query: { redirect: to.fullPath } // 把要跳转的地址作为参数传到下一步
              })
              NProgress.done()
            } else {
              next()
              NProgress.done()
            }
          } else {
            next()
            NProgress.done()
          }
        } else {
          if (to.path === '/register' || to.path === '/regwarning') {
            next({
              redirect: '/',
              query: { redirect: to.fullPath } // 把要跳转的地址作为参数传到下一步
            })
            NProgress.done()
          } else {
            console.log('welcome')
            next()
            NProgress.done()
          }
        }
      }
    })

    this.router.afterEach(() => {
      // finish progress bar
      NProgress.done()
    })
  }
}

export default Permission
