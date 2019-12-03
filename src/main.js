import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import '../theme/osam-base.css'
import App from './App.vue'
import '@/components/_globals'
import createRouter from '@/router'
import store from '@/store'
// import '../vender/js/v18.js'
// import '../vender/style/v18.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import i18n from './i18n/index'
import OsamUtils from './common/utils'
import './mock'
import {
  getLocale,
  //  createOSOLCookie,
  getIBMUNIQUEID
} from './common/cookie'
import VueRouter from 'vue-router'
// import { get } from './common/request'
import Permission from './common/permission'
Vue.prototype.Base64 = require('js-base64').Base64

// Vue.config.productionTip = false
// 1.执行添加language到cookie，初次运行时执行，之后可注释
// createOSOLCookie()

// 2.get language
const localeStr = getLocale() || { cc: 'US', lc: 'en' }
console.log('2.Get Locale:', localeStr)
const localeCookie = localeStr
store.commit('SET_LANGUAGE', localeCookie)

// 3.get token
// fake uniqueId
// const ibmUniqueIds = {
//   'newRegisterI': '0000',
//   'newRegisterE': '0001',
//   'appViewer': '17',
//   'appOwner': '18',
//   'amOwner': '22',
//   'entitlementManager': '28',
//   'centerCoordinator': '20',
//   'customerSupport': '21',
//   'appUser': '16',
//   'externalAdmin': '29'
// }
const tempIUI = process.env.NODE_ENV === 'production' ? '05000004KA' : '0000'
const iui = getIBMUNIQUEID() || tempIUI
console.log('3.Get IUI:', iui)
store.commit('SET_IBM_UNIQUE_ID', iui)
// if 没有iui去登录页面{locaiton;  return;}
// 4加载路由，获取当前用户，生成权限并设置导航首位
Vue.use(VueRouter)
const router = createRouter()
const permission = new Permission(router, iui)
permission.generatePermission()

Vue.use(i18n)
// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

const appVue = new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#ibm-content-wrapper')

Vue.prototype.$Utils = OsamUtils(appVue)
