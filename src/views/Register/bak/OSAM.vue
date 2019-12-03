<template>
  <el-container>
    <el-header style="height: 100px; !important;">
      <div class="line">{{$t("message.title.am")}}</div>
      <p v-show="active===0">{{$t("osiam.subtitle.profile")}}</p>
      <p v-show="active===1">{{$t("osiam.subtitle.register")}}</p>
      <p v-show="active===2">{{$t("osiam.subtitle.register")}}</p>
      <p v-show="active===3">{{$t("osiam.subtitle.register")}}</p>
    </el-header>
    <el-main>
      <!-- tab标签页 -->
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <!-- OSAM Registration tab -->
        <el-tab-pane :label="$t('tab.registration.lable')" name="first">
          <!-- steps步骤条 -->
          <el-steps
            :active="active"
            finish-status="success"
            simple
            style="margin-top: 10px; margin-bottom: 10px;"
            align-center
          >
            <!-- Verify profile -->
            <el-step
              @click.native="on_click(0, e)"
              style="flex-basis: 25%; !important;"
              :title="$t('chevron.verifyprofile')"
            ></el-step>
            <!-- Request access -->
            <el-step
              @click.native="on_click(1, e)"
              style="flex-basis: 25%; !important;"
              :title="$t('chevron.requestedaccess')"
            ></el-step>
            <!-- Provide entitlement -->
            <el-step
              @click.native="on_click(2, e)"
              style="flex-basis: 35%; !important;"
              :title="$t('chevron.entitlements')"
            ></el-step>
            <!-- Review & submit -->
            <el-step
              @click.native="on_click(3, e)"
              style="flex-basis: 15%; !important;"
              :title="$t('chevron.reviewandsubmit')"
            ></el-step>
          </el-steps>
          <div class="steps show">
            <p v-show="active===0" style="text-align:left">
              <Profile />
            </p>
            <p v-show="active===1" style="text-align:left">
              <Access
                v-on="{setApplication:setApplication,
                       setRole:setRole}"
              />
            </p>
            <p v-show="active===2" style="text-align:left">
              <Entitlement
                v-on="{entileClick:handleEntitleClick,
                       getallAmCitiesCode:getallAmCitiesCode,
                       getAmCitiesCode:getAmCitiesCode,
                       getallEuCitiesCode:getallEuCitiesCode,
                       getEuCitiesCode:getEuCitiesCode,
                       getallApCitiesCode:getallApCitiesCode,
                       getApCitiesCode:getApCitiesCode}"
                :flag="errorflag"
                :appName="appValName"
                :roleName="roleValname"
              />
            </p>
            <p v-show="active===3" style="text-align:left">
              <Review
                :appName="appValName"
                :roleName="roleValname"
                :entitlementrequestid="entitlementrequestid"
                :hqcountry="hqcountry"
              />
            </p>
          </div>
          <!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button> -->
        </el-tab-pane>
        <!-- Help tab -->
        <el-tab-pane :label="$t('AM006.label.help')" name="second">Help guide</el-tab-pane>
      </el-tabs>
    </el-main>
    <el-footer style="height: 100px; !important;">
      <!-- <el-button style="margin-top: 12px;" @click="prev">Previous</el-button>
      <el-button style="margin-top: 12px;" @click="next">Continue</el-button>-->
      <el-row>
        <el-button
          type="primary"
          plain
          v-show="active!=0 && active!=3 && activeName !='second' "
          style="margin-top: 12px;float:left;"
          @click="prev"
        >Previous</el-button>
        <el-button
          type="primary"
          plain
          v-show="active!=2 && active!=3 && activeName !='second'"
          style="margin-top: 12px;float:right;"
          @click="continue1"
          :disabled="btnDisable"
        >{{$t("common.continue")}}</el-button>
        <el-button
          type="success"
          plain
          v-show="active===2 && activeName !='second'"
          style="margin-top: 12px;float:right;"
          @click="submit"
        >Submit</el-button>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
import Profile from '@/views/Register/Profile.vue'
import Access from '@/views/Register/Access.vue'
import Entitlement from '@/views/Register/Entitlement.vue'
import Review from '@/views/Register/Review.vue'
import { post } from '../../common/request'

export default {
  name: 'OSAM',
  components: {
    Profile,
    Access,
    Entitlement,
    Review
  },
  data () {
    return {
      activeName: 'first',
      active: 0,
      checklength: 0,
      checklength1: 0,
      checklength2: 0,
      errorflag: '',
      appVal: '',
      roleVal: '',
      internal: '',
      // checkedAmericasCities: [],
      // checkedEuropeCities: [],
      // checkedApCities: [],
      appValName: '',
      roleValname: '',
      btnDisable: false,
      entitlementrequestid: '',
      hqcountry: '',
      ckAmCitiesCode: [],
      ckEuCitiesCode: [],
      ckApCitiesCode: []
    }
  },
  created () {
    this.postInfo()
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    prev () {
      --this.active
      if (this.active < 0) this.active = 0
    },
    continue1 () {
      if (this.active++ > 3) this.active = 3
      if (this.active === 3) this.status = 'success'
      console.log('active=============', this.active)
      console.log('this.appValName===========', this.appValName)
      if (this.active === 1) {
        if (this.appValName === '' || this.roleValname === '') {
          this.btnDisable = true
        }
      }
      // if (this.active === 2) {
      //   this.appValName = this.appVal.name
      //   this.roleValname = this.roleVal.name
      //   console.log('this.appValName', this.appValName)
      //   console.log('this.roleValName', this.roleValname)
      // }
    },
    async postRegister (bodyData) {
      // let ibmuniqueid = this.$state.ibmuniqueid
      const result = await post(
        'http://localhost:9000/request/new/csol/123456',
        { bodyData }
      )
      console.log(result)
      console.log(
        'entitlementrequestid===========',
        result.data.entitlementrequestid
      )
      this.entitlementrequestid = result.data.entitlementrequestid
    },
    submit () {
      // TODO: use email to decide internal or external
      let currUser = this.$store.state.currUser
      let email = currUser.profile.email
      console.log('currUser.profile.email: ', currUser.profile.email)
      if (
        email
          .split('@')[1]
          .split('.')[1]
          .toUpperCase() === 'IBM' ||
        email
          .split('@')[1]
          .split('.')[0]
          .toUpperCase() === 'IBM'
      ) {
        this.internal = 1
        console.log('internal', this.internal)
      } else {
        this.internal = 3
        console.log('external', this.internal)
      }

      if (
        this.checklength === 0 &&
        this.checklength1 === 0 &&
        this.checklength2 === 0
      ) {
        this.errorflag = 'Order Status is required!'
        console.log('errorflag', this.errorflag)
        // console.log('error', this.checklength)
        // alert('error')
      } else {
        if (this.active++ > 3) this.active = 3
        if (this.active === 3) this.status = 'success'
      }

      let bodyData = {}
      let attributes = {}
      let authorization = {}

      bodyData['attributes'] = attributes
      bodyData['authorization'] = authorization

      attributes['hqcountry'] =
        this.checkedApCities.toString('') +
        this.checkedEuropeCities.toString('') +
        this.checkedAmericasCities.toString('')
      console.log('qwertyui', attributes['hqcountry'])
      this.hqcountry = attributes['hqcountry']

      authorization['applicationid'] = this.appVal.id
      authorization['internal'] = this.internal
      authorization['roleid'] = this.roleVal.id
      console.log('bodyData========', bodyData)
      this.postRegister(bodyData)
    },
    handleEntitleClick (data) {
      this.checklength = data
      this.checklength1 = data
      this.checklength2 = data

      console.log('checklength', this.checklength)
      // console.log('checkedAmericasCities', this.checkedAmericasCities)
    },
    setApplication (data) {
      this.appVal = data
      console.log('OSAM-appVal', this.appVal)
      this.appValName = this.appVal.name
      console.log('OSAM-appValName', this.appValName)
    },
    setRole (data) {
      this.roleVal = data
      this.roleValname = this.roleVal.name
      console.log('OSAM-roleVal', this.roleVal)
      console.log('OSAM-roleVal-name', this.roleVal.name)
      console.log('OSAM-roleValname', this.roleValname)

      this.btnDisable = false
    },
    // getallAmericasCities (data) {
    //   this.checkedAmericasCities = data
    //   console.log('getallAmericasCities', this.checkedAmericasCities)
    // },
    getallAmCitiesCode (data) {
      this.ckAmCitiesCode = data
      console.log('OSAM_all_this.ckAmCitiesCode', this.ckAmCitiesCode)
    },
    // getAmericasCities (data) {
    //   this.checkedAmericasCities = data
    //   console.log('getAmericasCities', this.checkedAmericasCities)
    // },
    getAmCitiesCode (data) {
      this.ckAmCitiesCode = data
      console.log('OSAM_this.ckAmCitiesCode', this.ckAmCitiesCode)
    },
    // getallEuropeCities (data) {
    //   this.checkedEuropeCities = data
    //   console.log('checkedEuropeCities', this.checkedEuropeCities)
    // },
    getallEuCitiesCode (data) {
      this.ckEuCitiesCode = data
      console.log('OSAM_all_this.ckEuCitiesCode', this.ckEuCitiesCode)
    },
    // getEuropeCities (data) {
    //   this.checkedEuropeCities = data
    //   console.log('checkedEuropeCities', this.checkedEuropeCities)
    // },
    getEuCitiesCode (data) {
      this.ckEuCitiesCode = data
      console.log('OSAM_this.ckEuCitiesCode', this.ckEuCitiesCode)
    },
    // getallApCities (data) {
    //   this.checkedApCities = data
    //   console.log('checkedApCities', this.checkedApCities)
    // },
    getallApCitiesCode (data) {
      this.ckApCitiesCode = data
      console.log('OSAM_all_this.ckApCitiesCode', this.ckApCitiesCode)
    },
    // getApCities (data) {
    //   this.checkedApCities = data
    //   console.log('checkedApCities', this.checkedApCities)
    // }
    getApCitiesCode (data) {
      this.ckApCitiesCode = data
      console.log('OSAM_this.ckApCitiesCode', this.ckApCitiesCode)
    }
    // on_click (id, e) {
    //   console.log(e)
    //   if (this.status === 'wait') {
    //     return
    //   }

    //   this.active = id
    // }
  }
}
</script>

<style scoped>
.el-container {
  background-color: #fafcfd;
}
.el-header {
  /* background-color: #B3C0D1; */
  color: #333;
  text-align: left;
  line-height: 100px;
}
.el-footer {
  /* background-color: #B3C0D1; */
  color: #333;
  text-align: right;
  line-height: 100px;
}
.el-main {
  /* background-color: #E9EEF3; */
  color: #333;
  text-align: center;
  /* line-height: 400px; */
}
.line {
  text-align: left;
  /* font-family: "Helvetica Neue"; */
  font-size: 30px;
  line-height: 50px;
  font-weight: 700;
  margin-top: 10px;
}
.el-step_head:hover {
  color: #67c23a;
  border-color: #67c23a;
}

/* body > .el-container {
    margin-bottom: 100px;
  } */

/* .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>
