import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// this cookie contains token
const tokenCookieName = 'XSRF-TOKEN'

// this cookie contains locale for switching language in OSAM webpage
const localeCookieName = 'OSOL-LOCALE'

// this cookie contains ibmuniqueid
const ibmUniqueIdCookieName = 'OSOL-CURRENT-IUI'

// get OSAM token from OSAM cookie[XSRF-TOKEN]
function getOSAMToken () {
  return Vue.cookies.get(tokenCookieName) == null ? '' : Vue.cookies.get(tokenCookieName)
}

// get IBMUNIQUEID from ibmuniqueid cookie
function getIBMUNIQUEID () {
  return Vue.cookies.get(ibmUniqueIdCookieName) == null ? '' : Vue.cookies.get(ibmUniqueIdCookieName)
}

// temporary function to mock OSOL Cookie for integration test
function createOSOLCookie () {
  let tempCookieName = 'OSOL-LOCALE'
  let tempCookieContent = '{"cc":"US","lc":"en"}'
  document.cookie = tempCookieName + '=' + tempCookieContent
}

// get language from OSOL Cookie[OSOL-LOCALE]
function getLocale () {
  return Vue.cookies.get(localeCookieName) == null ? '' : Vue.cookies.get(localeCookieName)
}

function setLocale (val) {
  Vue.cookies.set(localeCookieName, val)
  console.log('cookie中的locale', Vue.cookies.get(localeCookieName))
}

export { getOSAMToken, getIBMUNIQUEID, createOSOLCookie, getLocale, setLocale }

// ********************* Do NOT remove the comments below, which is for troubleshooting *********************
// var cookie1Content = 'cookie1_values_xewrr'
// var cookie2Content = '{XSRF-TOKEN="token_dafsfdsf_id",IBMUNIQUEID="ibmunique_id"}'
// var cookie3Content = 'cookie3_values'
// document.cookie = 'name1=' + cookie1Content
// document.cookie = 'XSRF-TOKEN=' + cookie2Content
// document.cookie = 'name3=' + cookie3Content
// createOSOLCookie()
// ********************* Do NOT remove the comments above, which is for troubleshooting *********************
