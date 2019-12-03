<template>
  <div>
    <p
      class="osam-page-ibm-font"
      style="font-size: 0.85rem;font-style:italic; margin-left:20px"
    >Please select an application and role you would like entitlement for:</p>

    <el-card shadow="hover">
      <el-form-item prop="applicationid">
        <span slot="label">
          <b>{{$t("message.label.application")}}</b>
          <el-tooltip effect="light" content="Help regarding application" placement="bottom-start">
            <el-link :underline="false" type="primary" @click="openDialog('Application')">[?]:</el-link>
          </el-tooltip>
        </span>
        <el-select
          ref="authorization"
          style="width: 43% "
          :disabled="disableApp"
          v-model="authorization.applicationid"
          @change="handleAppChange"
          :placeholder="$t('find.field6.value1')"
        >
          <el-option v-for="item in appOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="roleid">
        <span slot="label">
          <b>{{$t("message.label.role")}}</b>
          <el-tooltip effect="light" content="Help regarding role" placement="bottom-start">
            <el-link :underline="false" type="primary" @click="openDialog('Role')">[?]:</el-link>
          </el-tooltip>
        </span>
        <el-select
          style="width: 43%"
          :disabled="disableRole"
          v-model="authorization.roleid"
          @change="handleRoleChange"
          :placeholder="$t('find.field7.value1')"
        >
          <el-option v-for="item in roleOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <div v-if="this.$store.state.register.authorization.roleid === 20 && forceUpd">
        <el-form-item prop="csoid">
          <span slot="label">
            <b>{{$t('message.label.cso_center')}}:</b>
          </span>
          <el-select
            style="width: 43%"
            v-model="authorization.csoid"
            @change="handleCsoChange"
            :placeholder="$t('message.question.cso_center')"
          >
            <el-option
              v-for="item in csoOptions"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>

      <div
        v-if="
        ( this.$store.state.register.authorization.roleid === 20 ||
          this.$store.state.register.authorization.roleid === 21 ||
          this.$store.state.register.authorization.roleid === 28 ||
          this.$store.state.register.authorization.roleid === 29 ) && forceUpd
      "
      >
        <!-- <GeoMutipleAttr v-on:GeoCtryEvent="handleGeoAttr" :ctryCodeProp="authorization.hqcountry"></GeoMutipleAttr> -->
        <GeoToCountry
          v-model="authorization.hqcountry"
          :countryData="authorization.hqcountry"
          :countryTitle="ctyTitle"
          :editable="true"
          v-on:selectedCountry="selectedCountry"
        ></GeoToCountry>
      </div>

      <div
        v-if="
        (this.$store.state.register.authorization.roleid === 16 ||
          this.$store.state.register.authorization.roleid === 17) && forceUpd
      "
      >
        <!-- get GeoSingleAttr -->
        <GeoSingleAttr v-on:GeoCtryEvent="handleGeoAttr" :ctryCodeProp="authorization.hqcountry"></GeoSingleAttr>
      </div>

      <el-dialog :visible.sync="dialogVisible" :before-close="handleClose" width="50%">
        <!-- application -->
        <div v-if="this.dialogHelp==='Application'">
          <p slot="title" class="osam-page-ibm-font" style="font-size:1.15rem; font-weight:600">Help</p>
          <span class="osam-page-ibm-font" style="font-size:0.9rem; font-weight:600">
            <b>Application</b>
          </span>
          <p style="margin-top:1%; padding:0px" class="osam-page-ibm-font font-style">
            <b>Order Status Online</b> (OSOL) provides access to the order status information in our database for orders you have placed with IBM US. The database contains the order, manufacturing, and distribution information for all hardware and software orders, across all product platforms, for all countries around the world, where you do business with us. These orders include both IBM and Lenovo products and the database makes thirteen months of data available to you. This is the default for most users requesting access to OSOL.
          </p>
          <p class="osam-page-ibm-font font-style" style="padding:0px">
            <b>Order Status Authorization Manager</b> (OSAM) provides processing capability for personnel who receive and process OSOL access requests from other users within their country. If the choice is applicable to you, you are directed specifically to this selection and provided instructions.
          </p>
        </div>
        <!-- role  -->
        <div v-if="this.dialogHelp==='Role'">
          <p slot="title" class="osam-page-ibm-font" style="font-size:1rem; font-weight:600">Help</p>
          <span class="osam-page-ibm-font" style="font-size:0.9rem; font-weight:600;">
            <b>Role</b>
          </span>
          <p style="margin-top:1%; padding:0px" class="osam-page-ibm-font font-style">
            <b>Application Viewer:</b> This is the default role for majority of our users. Unless you have been directed to select another role, click Continue to proceed as an application viewer.
          </p>
          <p class="osam-page-ibm-font font-style" style="padding:0px">
            <b>Application Owner:</b> Chose this option only if you have been directed to do so as it carries many application relationships.
          </p>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { register } from '../../common/globalObj'

export default {
  components: {
    GeoSingleAttr: () => import('../../components/GeoSingleAttr'),
    // GeoMutipleAttr: () => import('../../components/GeoMutipleAttr'),
    GeoToCountry: () => import('../../components/GeoToCountry')
  },
  data () {
    return {
      ctyTitle: this.$t('message.label.country') + ':',
      oldRoleId: 0,
      forceUpd: true,
      authorization: {
        applicationid: '',
        internal: '',
        roleid: '',
        csoid: '',
        hqcountry: ''
      },
      appOptions: [],
      roleOptions: [],
      allApps: {},
      allRoles: {},
      roleToApp: {},
      disableApp: false,
      disableRole: false,
      csocenter: {},
      csoOptions: [],
      dialogVisible: false,
      dialogHelp: ''
    }
  },
  props: {
    authProp: {
      type: Object
    }
  },
  created: function () {
    // TODO: get application, irrole, roletoapplication from BackEnd
    this.getAppSetting()

    // for RegisterPortal: <Authorization></Authorization>
    // for RegisterPortal-firsttime: 1> this.$store.state.register.authorization.roleid = ''
    //                               2> this.$store.state.currUser.authorization = '' = this.authProp
    // for RegisterPortal-prevstep:  1> this.$store.state.register.authorization.roleid = xxxx
    //                               2> this.$store.state.currUser.authorization = '' = this.authProp

    // for updateAppAuth: <Authorization :authProp="this.$store.state.currUser.authorization"></Authorization>
    // for updateAppAuth-firsttime:  1> this.$store.state.register.authorization.roleid = ''
    //                               2> this.$store.state.currUser.authorization.roleid = xxxx = this.authProp.roleid
    // for updateAppAuth-prevstep:   1> this.$store.state.register.authorization.roleid = xxxx
    //                               2> this.$store.state.currUser.authorization.roleid = xxxx = this.authProp.roleid

    // for updateOthers: <Authorization :authProp="this.$store.state.others.authorization"></Authorization> // NO reuse for this scenario now
    // for updateOthers-firsttime:   1> this.$store.state.register.authorization.roleid = ''
    //                               2> this.$store.state.others.authorization.roleid = xxxx = this.authProp.roleid
    //                               3> this.$store.state.currUser.authorization !~= this.authProp
    // for updateOthers-prevstep:    1> this.$store.state.register.authorization.roleid = xxxx
    //                               2> this.$store.state.others.authorization.roleid = xxxx = this.authProp.roleid
    //                               3> this.$store.state.currUser.authorization !~= this.authProp

    // UpdateAppAuth
    if (this.authProp && this.authProp.roleid) {
      // Application can not be changed any more
      this.disableApp = true
      // OSOL roles and External Admin role can not be changed any more
      if (
        this.authProp.roleid === 20 ||
        this.authProp.roleid === 21 ||
        this.authProp.roleid === 22 ||
        this.authProp.roleid === 28
      ) {
        this.disableRole = false
      } else {
        this.disableRole = true
      }
      // UpdateAppAuth - use authorization from register(when prevStep)
      if (this.$store.state.register.authorization.roleid) {
        this.oldRoleId = this.$store.state.register.authorization.roleid
        this.reloadAuth(this.$store.state.register.authorization)
      } else {
        // UpdateAppAuth - use authorization from props
        this.reloadAuth(this.authProp)
      }
    } else {
      // RegisterPortal - use authorization from register(when prevStep)
      if (this.$store.state.register.authorization.roleid) {
        this.oldRoleId = this.$store.state.register.authorization.roleid
        this.reloadAuth(this.$store.state.register.authorization)
      } else {
        // RegisterPortal - set authorization initially
        if (this.$store.state.currUser.iruser) {
          const domain = this.$store.state.currUser.iruser.email.split('@')[1]
          if (
            domain.split('.')[1].toUpperCase() === 'IBM' ||
            domain.split('.')[0].toUpperCase() === 'IBM'
          ) {
            this.authorization.internal = 1
          } else {
            this.authorization.internal = 3
          }
        }
      }
    }
  },
  computed: {},
  mounted () {
    // 定位焦点focus(authorization)
    this.$refs.authorization.focus()
  },
  watch: {
    'authorization.applicationid': function (newVal, oldVal) {
      if (this.authorization.applicationid) {
        this.$parent.clearValidate('applicationid')
      }
    },
    'authorization.roleid': function (newVal, oldVal) {
      if (this.authorization.roleid) {
        this.$parent.clearValidate('roleid')
      }
    },
    'authorization.csoid': function (newVal, oldVal) {
      if (this.authorization.csoid) {
        this.$parent.clearValidate('csoid')
      }
    },
    'authorization.hqcountry': function (newVal, oldVal) {
      if (this.authorization.hqcountry) {
        this.$parent.clearValidate('hqcountry')
      }
    }
  },
  methods: {
    getAppSetting () {
      this.allApps = this.$Utils.application
      this.allRoles = this.$Utils.irrole
      this.roleToApp = this.$Utils.roletoapplication
      this.csocenter = this.$Utils.csocenter

      for (let key in this.allApps) {
        this.appOptions.push(this.allApps[key])
      }

      for (let key in this.csocenter) {
        this.csoOptions.push(this.csocenter[key])
      }
    },
    handleAppChange (val) {
      // for OSOL&OSAM internal register
      if (this.authorization.internal === 1) {
        this.roleOptions = []
        for (let key in this.roleToApp) {
          if (
            this.roleToApp[key].applicationid === val &&
            this.roleToApp[key].internal === 1
          ) {
            this.roleOptions.push(this.allRoles[key])
          }
        }
        this.authorization.roleid = ''
        this.$store.commit('SET_REGISTER_AUTHORIZATION', this.authorization)
      } else {
        // for OSOL&OSAM external register
        this.roleOptions = []
        for (let key in this.roleToApp) {
          if (
            this.roleToApp[key].applicationid === val &&
            this.roleToApp[key].internal === 3
          ) {
            this.roleOptions.push(this.allRoles[key])
          }
        }
        this.authorization.roleid = ''
        this.$store.commit('SET_REGISTER_AUTHORIZATION', this.authorization)
      }
    },
    handleRoleChange (val) {
      this.authorization.roleid = val
      // clear all the other register information if the role id changed when prev step
      if (this.oldRoleId !== 0 && this.oldRoleId !== val) {
        this.$store.commit('SET_REGISTER', register)
        // remove cso/geo component and try to render it again
        this.forceUpd = false
        // remove binding data from cso/geo component
        this.authorization.csoid = ''
        this.authorization.hqcountry = ''
        // this.$nextTick can excute methods after DOM updated
        this.$nextTick(() => {
          this.forceUpd = true
        })
      }
      // store register.authorization
      this.$store.commit('SET_REGISTER_AUTHORIZATION', this.authorization)
    },
    handleCsoChange (val) {
      this.$store.commit('SET_REGISTER_AUTHORIZATION', this.authorization)
    },
    handleGeoAttr: function (val) {
      this.authorization.hqcountry = val
      this.$store.commit('SET_REGISTER_AUTHORIZATION', this.authorization)
    },
    reloadAuth (authVal) {
      this.authorization = { ...authVal }
      // pass applicationid to reassign the role options
      this.handleAppChange(authVal.applicationid)
      // pass roleid as once issued handleAppChange, the this.authorization.roleid will be empty
      this.handleRoleChange(authVal.roleid)

      this.handleCsoChange(authVal.csoid)
      this.handleGeoAttr(authVal.hqcountry)
    },
    selectedCountry (country) {
      if (country === 'WW') {
        this.authorization.hqcountry = country
      } else {
        this.authorization.hqcountry = country.join(',')
      }
      // this.authorization.hqcountry = country.join(',')
      this.$store.commit('SET_REGISTER_AUTHORIZATION', this.authorization)
      console.log('this.authorization.hqcountry', this.authorization.hqcountry)
    },
    openDialog (val) {
      if (val === 'Application') {
        this.dialogHelp = 'Application'
        this.dialogVisible = true
      }
      if (val === 'Role') {
        this.dialogHelp = 'Role'
        this.dialogVisible = true
      }
    }
  }
}
// block browser rollback
history.pushState(null, null, document.URL)
window.addEventListener('popstate', function () {
  history.pushState(null, null, document.URL)
})
</script>

<style >
/* .registerProfileContent {
  font-size: 0.9rem;
} */

.el-form-item__label {
  text-align: left;
  font-size: 0.9rem !important;
}

.el-form-item {
  /* margin-bottom: 2% !important;
  width: 100% !important; */
  font-weight: bold;
}
.font-style {
  font-size: 0.85rem;
}
.el-dialog__body {
  padding: 20px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
.el-dialog__header {
  padding: 0px 20px 10px;
}
</style>
