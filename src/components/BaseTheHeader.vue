<template>

  <!-- <el-tabs v-model="activeTab" @tab-click="handleClick">
    <el-tab-pane :label="$t('message.title.am')" name="first"></el-tab-pane>
    <el-tab-pane :label='changeCountry' name="second"></el-tab-pane>
  </el-tabs> -->
  <header role="banner" aria-labelledby="ibm-pagetitle-h1">
    <!-- L1 NAVIGATION START -->
    <nav role="navigation" aria-label="__REPLACE_ME__">
      <div class="ibm-sitenav-menu-container">
        <div class="ibm-sitenav-menu-name ">
          <a href="/">{{ $t("message.title.am") }}</a>
        </div>
        <div class="ibm-sitenav-menu-list">
          <ul role="menubar">
            <li role="presentation" class="ibm-sitenav-menu-item-right">
              <a class="" role="menuitem" href="#" @click="changeLocaleMethod()">{{changeCountry}}</a>
              <!-- <el-tab-pane :label='changeCountry' name="second"></el-tab-pane> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- L1 NAVIGATION END -->
  </header>
</template>
<script>
import supportedCountry from '@/common/supportedCountry'
import { get } from '../common/request'

export default {
  data () {
    return {
      locale: this.$store.getters.language.lc + '_' + this.$store.getters.language.cc || 'en_US',
      country: supportedCountry
    }
  },
  beforeCreate: function () {
    let iui = this.$store.state.ibmUniqueId
    get(`/user/profile/${iui}`).then((res) => {
      // 将当前用户对象存入store
      // console.log('4.Get CurrentUser:', res.data)
      this.$store.commit('SET_CURRENT_USER', res.data)
    })
  },
  methods: {
    handleClick (tab, event) {
      if (tab.name === 'first') {
        this.$router.push({ path: '/' })
      } else if (tab.name === 'second') {
        this.$router.push({ path: '/selectLocale' })
      }
    },

    changeLocaleMethod () {
      this.$router.push({ path: '/selectLocale' })
    }
  },
  computed: {
    changeCountry: function () {
      const currectCC = this.$store.getters.language.cc
      return this.country[currectCC]
    },
    activeTab: {
      get () {
        return this.$store.state.header_tab
      },
      set (value) {
        this.$store.dispatch('setCurrHeaderTab', value)
      }
    }
  }
}
</script>
