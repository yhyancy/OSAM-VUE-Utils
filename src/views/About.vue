<template>
  <div class="about">
    <h1>{{ $t("page.title") }}</h1>
    <el-select v-model="selectValue" @change="handleSetLanguage" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="englishSupportedList.indexOf(item.value)>-1?$t(item.label2)+' - '+$t(item.label1)+'('+$t('update.locale.view.currently.supported.in')+' '+$t('language.display.en')+')':$t(item.label2)+' - '+$t(item.label1)"
      :value="item.value"
      >
    </el-option>
  </el-select>
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line no-undef
// console.log('IBMCore', IBMCore)
// eslint-disable-next-line no-undef
// import { getReq, postReq } from '@/common/axios'
import { get, post } from '../common/request'
const bodyData = {}
export default {
  name: 'about',
  data () {
    return {
      options: [{
        value: 'en_UK',
        label1: 'language.display.en',
        label2: 'country.UK'
      }, {
        value: 'zh_CN',
        label1: 'language.display.zh',
        label2: 'country.CN'
      }, {
        value: 'da_DK',
        label1: 'language.display.da',
        label2: 'country.DK'
      }],
      englishSupportedList: ['nl_BE', 'bg_BG', 'hr_HR', 'cs_CZ', 'da_DK', 'et_EE', 'fi_FI', 'el_GR', 'hu_HU', 'iw_IL', 'lv_LV', 'lt_LT', 'nl_NL', 'no_NO', 'pl_PL', 'ro_RO', 'ru_RU', 'sk_SK', 'sl_SL', 'sv_SE', 'tr_TR'],
      value: ''
    }
  },
  created () {
    // eslint-disable-next-line no-undef
    IBMCore.common.util.config.set({
      footer: {
        type: 'default'
      }
    })
    // let that = this
    // console.log(localStorage.lang)
    // that.selectValue = localStorage.lang === undefined ? 'en' : localStorage.lang
    // this.$i18n.locale = that.selectValue
  },
  components: {},
  computed: {
  },
  methods: {
    handleSetLanguage (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      localStorage.setItem('lang', lang)
    },
    async getData () {
      const result = await get('/learning/1')
      console.log(result)
    },

    async getUserInfo () {
      const result = await post('/user/info', bodyData)
      console.log(result)
    }

  }
}
</script>
