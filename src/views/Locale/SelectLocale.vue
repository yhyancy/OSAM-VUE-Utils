<template>
  <div class="edit-container">
    <el-row>
      <p class="ibm-h2 ibm-bold">{{$t("AM009.update.country.subtitle1")}}</p>

    </el-row>
    <el-row class="ibm-font">
      <el-col class="osam-page-subtitle" :span="24">
        <div class="grid-content ibm-font ibm-bold">{{$t("selectlocale.selectcountry")}}</div>
      </el-col>
      <el-select v-model="value" @change="handleSetLanguage" style="width:60%">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="englishSupportedList.indexOf(item.value)>-1?$t(item.label2)+' - '+$t(item.label1)+'('+$t('update.locale.view.currently.supported.in')+' '+$t('language.display.en')+')':$t(item.label2)+' - '+$t(item.label1)"
          :value="item.value"
        ></el-option>
      </el-select>
       <el-button type="primary" style="margin-top: 12px;margin-left:12px" @click="submit">{{$t("alt.submit")}}</el-button>
    </el-row>
      <!-- <el-select v-model="value" @change="handleSetLanguage">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="englishSupportedList.indexOf(item.value)>-1?$t(item.label2)+' - '+$t(item.label1)+'('+$t('update.locale.view.currently.supported.in')+' '+$t('language.display.en')+')':$t(item.label2)+' - '+$t(item.label1)"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button style="margin-top: 12px;margin-left:12px" @click="submit">{{$t("alt.submit")}}</el-button>
    <el-footer style="height:100px;position:absolute; bottom:0pxst"></el-footer> -->
  </div>
</template>

<script>
import supportedLanguage from '@/common/supportedLanguage'
import { setLocale } from '../../common/cookie'
import Vue from 'vue'
import OsamUtils from '../../common/utils'
export default {
  name: 'SelectLocale',
  components: {},
  data () {
    return {
      options: supportedLanguage.options,
      value: this.$store.getters.language.lc + '_' + this.$store.getters.language.cc || 'en_US',
      englishSupportedList: [
        'nl_BE',
        'bg_BG',
        'hr_HR',
        'cs_CZ',
        'da_DK',
        'et_EE',
        'fi_FI',
        'el_GR',
        'hu_HU',
        'iw_IL',
        'lv_LV',
        'lt_LT',
        'nl_NL',
        'no_NO',
        'pl_PL',
        'ro_RO',
        'ru_RU',
        'sk_SK',
        'sl_SL',
        'sv_SE',
        'tr_TR'
      ]
    }
  },
  methods: {
    handleSetLanguage (event) {
    },
    submit () {
      // update i18n's locale
      this.$i18n.locale = this.value
      Vue.prototype.$Utils = OsamUtils(this.$root)
      const selectLC = this.value.split('_')[0]
      const selectCC = this.value.split('_')[1]
      // update vuex's language
      this.$store.dispatch('setCurrLanguage', { cc: selectCC, lc: selectLC })
      // set first tab to Header
      // this.$store.dispatch('setCurrHeaderTab', 'first')
      setLocale({ cc: selectCC, lc: selectLC })
    }

  }
}
</script>

<style scoped lang="scss">
.edit-container {
  margin: 0 0 0 10px;
  padding: 0 2% 2% 1%;
}
.hide{
    display:none;
}

.el-main {
  font-size: 1.3vw;
}
.el-button {
  margin-right: 10%;
  width: 15%;
}
.el-row {
  margin-top: 2%;
  /* border-radius: 30px; */
}

.el-col {
  border-radius: 2%;
}
.grid-content {
  border-radius: 4px !important;
  min-height: 90% !important;
  padding-left:5px
}
.el-form-item {
  margin-bottom: 2% !important;
  width: 100% !important;
}
</style>
