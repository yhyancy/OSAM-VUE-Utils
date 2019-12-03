<template>
<div>
  <!-- Authorization information start -->
  <!-- <el-row class="ibm-font"  style="padding:2%;"> -->
  <el-row class="ibm-font" style="margin:2% 0 0 0;">
    <el-col class="osam-page-subtitle" :span="24">
      <div class="subtitle-content grid-content ibm-font ibm-bold">{{$t('approve.currentauthorization')}}</div>
    </el-col>
  </el-row>
  <!-- Application information -->
  <el-card class="osam-page-el-card" shadow="hover">
    <el-row>
    <el-col class="row-title" :span="6">
      <div class="border">{{$t('register.field.application')}}:</div>
    </el-col>
    <el-col class="row-field" :span="18">
     <!-- applicationid {{newapplication[authoData.authorization.applicationid]}} -->
      <div class="border">{{newapplication[authoData.authorization.applicationid].name}}</div>
    </el-col>
  </el-row>
<!-- Requested Role information -->
  <el-row>
    <el-col class="row-title" :span="6">
      <div class="border">Requested Role:</div>
    </el-col>
    <el-col class="row-field" :span="18">
     <!-- roleid {{requestedrole[authoData.authorization.roleid]}} -->
      <div class="border">{{requestedrole[authoData.authorization.roleid].name}}</div>
    </el-col>
  </el-row>
<!-- Your Country information -->
  <el-row v-if="authoData.authorization.roleid === 16 || authoData.authorization.roleid === 17 || authoData.authorization.roleid === 20 || authoData.authorization.roleid === 21 || authoData.authorization.roleid === 28 || authoData.authorization.roleid === 29">
    <el-col class="row-title" :span="6">
      <div class="border">{{$t('message.label.headquarters')}}:</div>
    </el-col>
    <el-col class="row-field" :span="18">
      <div class="border">{{this.authoData.authorization.hqcountry}}</div>
    </el-col>
  </el-row>
<!-- Cso Center information -->
  <el-row v-if="(authoData.authorization.csoid === 30 || authoData.authorization.roleid === 20) && authoData.authorization.csoid !== 0">
    <el-col class="row-title" :span="6">
      <div class="border">Cso Center:</div>
    </el-col>
    <el-col class="row-field" :span="18">
     <!-- csoid {{csocenter[authoData.authorization.csoid]}} -->
      <div class="border">{{csocenter[authoData.authorization.csoid].name}}</div>
    </el-col>
  </el-row>
  <!-- csosenter=30 -->
  <!-- <el-row v-show="authoData.authorization.csoid === 30"> -->
    <!-- <el-col class="row-title" :span="6">
      <div class="border">Cso Center:</div>
    </el-col>
    <el-col class="row-field" :span="18"> -->
     <!-- csoid {{csocenter[authoData.authorization.csoid]}} -->
      <!-- <div class="border">Lenovo</div>
    </el-col>
  </el-row> -->
  <!-- <div v-if="(amOwner || entitlementManager || centerCoordinator || CSOL || externalAdmin)&&requestEditable"> -->
    <el-row  v-if="(amOwner || entitlementManager || centerCoordinator || CSOL || externalAdmin)&&requestEditable" type="flex" justify="end">
    <el-link type="primary" icon="el-icon-edit" @click="editAutho">Modify authorization</el-link>
    </el-row>
    <!-- </div> -->
  </el-card>
<!-- <el-main>

</el-main> -->
<el-dialog :title="$t('misc.authorization')" center :visible.sync="dialogVisible">
<el-form ref="form" :model="authorizationData" label-position="left" label-width="25%" label-height="5%" class="form-class">
  <el-form-item :label="$t('register.field.application')">
   <!-- applicationid {{newapplication[authorizationData.authorization.applicationid]}} -->
    <el-input v-model="newapplication[authorizationData.authorization.applicationid].name" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item :label="$t('approve.field.requestedrole')">
    <el-select v-model="authorizationData.authorization.roleid"
    @change="getValue"
    v-bind:disabled="authorizationData.authorization.roleid === 16 || authorizationData.authorization.roleid === 17 || authorizationData.authorization.roleid === 18 || authorizationData.authorization.roleid === 29">
    <el-option v-for="val in roleArr" :key="val.id" :label="val.name" :value="val.id"></el-option>
      </el-select>
    </el-form-item>
  <el-form-item :label="$t('message.label.headquarters')" v-show="this.getrole === 16 || this.getrole === 17 || this.getrole === 20 || this.getrole === 21 || this.getrole === 28 || this.getrole === 29">
    <el-select v-model="country" multiple v-show="this.getrole === 16 || this.getrole === 17 || this.getrole === 20 || this.getrole === 21 || this.getrole === 28 || this.getrole === 29"
     :disabled='hqcountry'>
    <el-option v-for="item in ctryOptons" :key="item.countrycode" :label="item.countryname" :value="item.countrycode"></el-option>
      </el-select>
    </el-form-item>
  <el-form-item :label="$t('message.label.cso_center')" v-show="this.getrole === 20 && authorizationData.authorization.csoid !== 0">
    <el-select v-model="csoModel" @change="handleChange" :disabled='csoid' v-show="this.getrole === 20 && authorizationData.authorization.csoid !== 0">
    <el-option   label="Business Partners" :value="24"></el-option>
    <el-option   label="Commercial/State and Local" :value="25"></el-option>
    <el-option   label="Federal Government" :value="26"></el-option>
      </el-select>
    </el-form-item>
  <!-- <el-form-item>
    <div style="float:right">
    <el-button type="primary" @click="authoSave" >save</el-button>
    <el-button type="primary" @click="authoCancel" >cancel</el-button>
    </div>
  </el-form-item> -->
  </el-form>
  <span slot="footer" class="dialog-footer">
        <el-button @click="authoCancel">Cancel</el-button>
        <el-button type="primary" @click="authoSave">Save</el-button>
      </span>
  </el-dialog>
  </div>
</template>
<script>
import { post } from '../common/request'
import { mapGetters } from 'vuex'
import { role } from '../common/enum'
export default {
  name: 'AuthorizationUpdate',
  props: ['authoData', 'pageType'],
  data () {
    return {
      newapplication: this.$Utils.application,
      requestedrole: this.$Utils.irrole,
      csoModel: '',
      csocenter: this.$Utils.csocenter,
      ctryOptons: this.$Utils.getCtryOptions(),
      roleToApp: this.$Utils.roletoapplication,
      roleArr: [],
      input: '',
      getrole: '',
      csoid: true,
      hqcountry: true,
      dialogVisible: false,
      authorizationData: {
        authorization: {
          application: '',
          roleid: '',
          hqcountry: '',
          csoid: ''
        }
      },
      entitledAppList:
      [
        { value: 27, label: 'entitlementsummary.section2.field2.value2' },
        { value: 3, label: 'entitlementsummary.section2.field2.value3' }
      ],
      country: []
      // getValue: ''
    }
  },
  methods: {
    editAutho: function (val) {
      this.init()
      if (this.authorizationData.authorization.roleid === 20 || this.authorizationData.authorization.roleid === 21 ||
      this.authorizationData.authorization.roleid === 29) {
        this.hqcountry = false
      }
      this.dialogVisible = true
    },
    async authoSave () {
      this.authorizationData.authorization.hqcountry = this.country.join(',')
      if (this.authorizationData.entitlementrequest && this.authorizationData.entitlementrequest.status === 4) {
        const result = await post(`/manage/request/update/authorization`, this.authorizationData)
        console.log('Authorization Update!', result)
        this.$emit('authoUpdateData', this.authorizationData)
        this.dialogVisible = false
      } else {
        const result = await post(`/manage/user/update/authorization/${this.currUser.iruser.ibmuniqueid}/${this.authoData.iruser.ibmuniqueid}`, this.authorizationData)
        this.$emit('authoUpdateData', this.authorizationData)
        console.log('result status is not 4', result)
        this.dialogVisible = false
      }
      this.init()
    },
    authoCancel: function () {
      this.dialogVisible = false
    },
    formatCountry: function (countryStr) {
      let countryList = countryStr.split(',')
      let countrys = countryList.map(x => this.$Utils.codeToCountry(x)[0].countryname)
      return countrys.join(',')
    },
    init () {
      this.csocenter[30] = { id: 30, name: 'Lenovo' }
      // this.csocenterOrginal = this.$Utils.csocenter
      this.authorizationData = JSON.parse(JSON.stringify(this.authoData))
      this.csoModel = this.authorizationData.authorization.csoid === 30 ? ''
        : this.authorizationData.authorization.csoid
      this.country = this.authorizationData.authorization.hqcountry.split(',')
      this.getrole = this.authorizationData.authorization.roleid
      if (this.authorizationData.authorization.roleid &&
      this.authorizationData.authorization.roleid === 20) {
        this.csoid = false
      }
      if (this.authorizationData.authorization.roleid &&
      (this.authorizationData.authorization.roleid === 20 || this.authorizationData.authorization.roleid === 21)) {
        this.hqcountry = true
      }
      this.roleArr.length = 0
      let osolArr = []
      let osamArr = []
      // 循环配置文件
      for (let key in this.roleToApp) {
        if (this.roleToApp[key].applicationid === 27) {
          osolArr.push(this.requestedrole[key])
        } else {
          osamArr.push(this.requestedrole[key])
        }
      }
      // 根据当前被编辑对象的身份初始化下拉列表
      if (this.authorizationData.authorization.applicationid === 27) {
        this.roleArr = osolArr
      } else if (this.authorizationData.authorization.roleid === 29) {
        this.roleArr = osamArr
      } else {
        this.roleArr = osamArr
        this.roleArr.pop()
      }
      console.log('roleArr', this.roleArr)
    },
    getValue: function (event) {
      if (event === 20) {
        this.getrole = event
        this.csoid = false
      } else {
        this.getrole = event
        this.csoid = true
      }
      if (event === 20 || event === 21 || event === 29) {
        this.getrole = event
        this.hqcountry = false
      } else {
        this.getrole = event
        this.hqcountry = true
      }
    },
    handleChange (val) {
      console.log('val', val)
      this.authorizationData.authorization.csoid = val
    }
  },
  computed: {
    ...mapGetters({
      currUser: 'currUser'
    }),
    appViewer () {
      if (this.authoData.authorization.roleid === role.APPVIEWER &&
        (this.currUser.authorization.roleid === role.CUSTOMERSUPPORT ||
        this.currUser.authorization.roleid === role.AMOWNER)) {
        return true
      }
      return false
    },
    appOwner () {
      if (this.authoData.authorization.roleid === role.APPOWNER &&
        this.currUser.authorization.roleid === role.AMOWNER) {
        return true
      }
      return false
    },
    amOwner () {
      if (this.authoData.authorization.roleid === role.AMOWNER &&
        this.currUser.authorization.roleid === role.AMOWNER) {
        return true
      }
      return false
    },
    entitlementManager () {
      if (this.authoData.authorization.roleid === role.EMTITLEMENTMANAGER &&
        (this.currUser.authorization.roleid === role.CUSTOMERSUPPORT ||
        this.currUser.authorization.roleid === role.AMOWNER)) {
        return true
      }
      return false
    },
    centerCoordinator () {
      if (this.authoData.authorization.roleid === role.CENTERCOORDINATOR &&
        (this.currUser.authorization.roleid === role.CUSTOMERSUPPORT ||
        this.currUser.authorization.roleid === role.AMOWNER)) {
        return true
      }
      return false
    },
    CSOL () {
      if (this.authoData.authorization.roleid === role.CUSTOMERSUPPORT &&
        this.currUser.authorization.roleid === role.AMOWNER) {
        return true
      }
      return false
    },
    appUser () {
      if (this.authoData.authorization.roleid === role.APPUSER &&
        (this.currUser.authorization.roleid === role.CENTERCOORDINATOR ||
        this.currUser.authorization.roleid === role.AMOWNER)) {
        return true
      }
      return false
    },
    externalAdmin () {
      if (this.authoData.authorization.roleid === role.EXTERNALADMIN &&
        (this.currUser.authorization.roleid === role.CUSTOMERSUPPORT ||
        this.currUser.authorization.roleid === role.AMOWNER)) {
        return true
      }
      return false
    },
    requestEditable () {
      if (this.authorizationData.entitlementrequest && this.authorizationData.entitlementrequest.status === 4) {
        return true
      } else {
        if (this.pageType === 'RequestDetail') {
          return false
        } else {
          return true
        }
      }
    }
  },
  created: function () {
    // deepclone
    this.init()
  }
}

</script>
<style scoped lang="scss">
.el-container {
  background-color: #fafcfd;
}
.big-title {
  text-align: left;
  font-size: 2.5vw;
  font-family: bold !important;
}
.small-title {
  font-size: 1.2vw;
}
.row {
  margin-bottom: 1% !important;
  padding: 2% 2% 0 2% !important;
}
.col {
  border-radius: 2%;
}
.el-col {
  border-radius: 0;
  padding: 0 !important;
  text-align: left;
}
.row-title {
  font-size: 1.1vw;
  font-weight: bold;
  line-height: 200%;
}
.row-field {
  font-size: 1.1vw;
  vertical-align: center;
  line-height: 200%;
  /* font-family: bold; */
  /* font-weight: bold; */
}
.bg-purple-dark {
  font-family: bold !important;
  line-height: 180% !important;
  font-size: 1vw !important;
  background-color: #e5e9f2 !important;
  padding: 0 !important;
  /* box-shadow: 0 2px 4px #9693c5, 0 0 6px #9693c5 */
}
.subtitle-content{
  font-size: 1.15rem;
}
.grid-content {
  border-radius: 4px;
  min-height: 25px;
}
.card-content {
  /* min-height: 90% !important; */
  text-align: center;
  padding-left: 0 !important;
  padding-right: 0 !important;
  /* font-size: 1vw */
}
.card-bg {
  font-family: bold !important;
  /* line-height: 180% !important; */
  /* font-size: 1vw !important; */
  background-color: #e5e9f2 !important;
}
.el-card {
  text-align: center;
  padding: 0 !important;
}
.dialog-footer .el-button {
  /* background-color: #333; */
  padding: 8px 12px;
}
.el-form-item {
  margin-bottom: 2% !important;
  width: 100% !important;
  font-weight:bold;
}
</style>
