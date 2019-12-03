## 1.Vue-i18n is a plug-in of Vue,which enables the project to support internationalization of multiple languages.We can use npm to install the i18n.
```
npm install vue-i18n
```
## 2.Create a folder for language setting.Directory like below.
```
|___ src
     |___ i18n
          |___ lang
          |    |___ cn.js
          |    |___ en.js
          |___ index.js
```
## 3.According to your requirement,create your own language file.For example.en.js and cn.js is the English language file and Chinese language file.
```
//i18n/lang/cn.js
const cn = {
    message: {
        'text': '你好',
       'sayhi':'{0},你好'

    }
}
export default cn;
```
```
//i18n/lang/en.js
const en = {
    message: {
        'text': 'Hello',
        'sayhi':'{0},Hello'

    }
}
export default en;
```
## 4.import vue-i18n and instantiate i18n
```
//i18n/index.js

import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import language file
import cn from './lang/cn'
import en from './lang/en'
import store from '@/store/index'
// using vue-i18n
Vue.use(VueI18n)

const messages = {
  'en': en,
  'cn': cn
}
// define i18n setting
export default new VueI18n({
  locale: store.getters.language || 'en',
  messages: messages
})
```
## 5.Mount i18n in main.js
```
//main.js

import i18n from './i18n/index'

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```
## 6.How to use i18n 
```
// Use i18n in templete
<span>{{$t("message.text")}}</span>
```
```
//Use i18n in data binding field
<input :placeholder="$t('message.text')"></input> 
```
```
//Use i18n in js data
this.$i18n.t('message.text')
//Or
data:{ 
	msg:this.$t('message.text'); 
}
```
```
//If property contains {0},
<p v-html="$t('message.sayhi',{0:'Vivian'})"></p>
```