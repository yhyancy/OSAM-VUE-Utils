<template>
  <div v-if=" this.$store.state.register.authorization.roleid === 29">
    <el-form-item :label="$t('register.field.emaildomain') +'*:'" prop="emaildomainval">
      <el-input
        type="textarea"
        style="width:50%"
        autosize
        clearable
        placeholder="Please input email domain"
        v-model="emaildomainval"
        @change="handleEmdomain"
      ></el-input>
    </el-form-item>
  </div>
</template>
<script>
export default {
  data () {
    return {
      emaildomainval: ''
    }
  },
  props: {
    emdomainProp: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  created: function () {
    // for RegisterPortal: <Emaildomain></Emaildomain>
    // for RegisterPortal-firsttime: 1> this.$store.state.register.emaildomains.length === (0 || undefined)
    //                               2> this.$store.state.currUser.emaildomains.length === (0 || undefined) = this.emdomainProp.length
    // for RegisterPortal-prevstep:  1> this.$store.state.register.emaildomains.length > (0 || undefined)
    //                               2> this.$store.state.currUser.emaildomains.length === (0 || undefined) = this.emdomainProp.length

    // for updateAppAuth: <Emaildomain :entProp="this.$store.state.currUser.emaildomains"></Emaildomain>
    // for updateAppAuth-firsttime:  1> this.$store.state.register.emaildomains.length === (0 || undefined)
    //                               2> this.$store.state.currUser.emaildomains.length > (0 || undefined) < this.emdomainProp.length
    // for updateAppAuth-prevstep:   1> this.$store.state.register.emaildomains.length > (0 || undefined)
    //                               2> this.$store.state.currUser.emaildomains.length > (0 || undefined) < this.emdomainProp.length
    // UpdateAppAuth
    if (this.emdomainProp.length > 0) {
      // UpdateAppAuth - use emaildomains from register(when prevStep)
      if (this.$store.state.register.emaildomains.length > 0) {
        // TODO: write reloadEmDomains and saveEmDomains
        this.reloadEmDomains(this.$store.state.register.emaildomains)
      } else {
        // UpdateAppAuth - use emaildomains from props
        this.reloadEmDomains(this.emdomainProp)
        // save emaildomains into register
        this.handleEmdomain(this.emdomainProp.toString())
      }
    } else {
      // RegisterPortal - use emaildomains from register(when prevStep)
      if (this.$store.state.register.emaildomains.length > 0) {
        this.reloadEmDomains(this.$store.state.register.emaildomains)
      } else {
        // RegisterPortal - set emaildomains initially
        this.getEmailDomain()
      }
    }
  },
  updated: function () {
    if (this.emaildomainval) {
      this.$parent.clearValidate('emaildomainval')
    }
  },
  methods: {
    getEmailDomain () {
      this.emaildomainval = this.$store.state.currUser.iruser.email.split(
        '@'
      )[1]
      this.$store.commit('SET_REGISTER_EMAILDOMAINS', [this.emaildomainval])
    },
    handleEmdomain (val) {
      this.$store.commit(
        'SET_REGISTER_EMAILDOMAINS',
        val.split(',').filter(item => item)
      )
    },
    reloadEmDomains (edVal) {
      this.emaildomainval = edVal.toString()
    }
  }
}
// block browser rollback
history.pushState(null, null, document.URL)
window.addEventListener('popstate', function () {
  history.pushState(null, null, document.URL)
})
</script>
<style>
.el-form-item {
  /* margin-bottom: 2% !important;
  width: 100% !important; */
  font-weight: bold;
}
</style>
