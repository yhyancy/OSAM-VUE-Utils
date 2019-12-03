<template>
  <el-container>
    <el-header style="height: 15%; !important;">
      <div class="big-title">{{$t("message.title.am")}}</div>
      <p class="small-title" v-show="activeStep===0">{{$t("osiam.subtitle.profile")}}</p>
      <p class="small-title" v-show="activeStep===1">{{$t("osiam.subtitle.register")}}</p>
      <p class="small-title" v-show="activeStep===2">{{$t("osiam.subtitle.register")}}</p>
      <p class="small-title" v-show="activeStep===3">{{$t("osiam.subtitle.register")}}</p>
    </el-header>
    <el-tabs v-model="activeTabName" type="card" style="width: 100%; " @tab-click="handleTabClick">
      <el-tab-pane label="OSAM Registration" name="first">
        <el-form ref="formData" :model="formData" hide-required-asterisk label-width="120px">
          <el-steps
            :active="activeStep"
            finish-status="success"
            simple
            align-center
            style="padding: 0px 3%"
          >
            <el-step
              style="flex-basis: 23%; !important; font-size=1 rem; !important"
              title="Verify profile"
            ></el-step>
            <el-step
              style="flex-basis: 26%; !important; font-size=1 rem; !important"
              title="Request access"
            ></el-step>
            <el-step style="flex-basis: 34%; !important;" title="Provide entitlement"></el-step>
            <el-step style="flex-basis: 15%; !important;" title="Review & submit"></el-step>
          </el-steps>
          <br />
          <div v-show="activeStep===0">
            <el-row>
              <el-col :span="5">
                <div class="grid-content" style="font-weight:700; font-size:0.95rem;">Name:</div>
              </el-col>
              <el-col :span="19">
                <div class="grid-content">{{ fullName }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <div class="grid-content" style="font-weight:700; font-size:0.95rem">Telephone:</div>
              </el-col>
              <el-col :span="19">
                <div class="grid-content">{{ formData.iruser.phone }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <div class="grid-content" style="font-weight:700; font-size:0.95rem">E-mail:</div>
              </el-col>
              <el-col :span="19">
                <div class="grid-content">{{ formData.iruser.email }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <div class="grid-content" style="font-weight:700; font-size:0.95rem">Company:</div>
              </el-col>
              <el-col :span="19">
                <div class="grid-content">{{ formData.iruser.company }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <div class="grid-content" style="font-weight:700; font-size:0.95rem">Address:</div>
              </el-col>
              <el-col :span="19">
                <div class="grid-content">{{ formData.iruser.street1 }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <div class="grid-content" style="font-weight:700; font-size:0.95rem">City:</div>
              </el-col>
              <el-col :span="19">
                <div class="grid-content">{{ formData.iruser.city }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <div class="grid-content" style="font-weight:700; font-size:0.95rem">Postal Code:</div>
              </el-col>
              <el-col :span="19">
                <div class="grid-content">{{ formData.iruser.zipcode }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <div class="grid-content" style="font-weight:700; font-size:0.95rem">State/Province:</div>
              </el-col>
              <el-col :span="19">
                <div class="grid-content">{{ formData.iruser.state }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <div class="grid-content" style="font-weight:700; font-size:0.95rem">Country:</div>
              </el-col>
              <el-col :span="19">
                <div class="grid-content">{{ formData.iruser.country }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6" :offset="20">
                <el-button type="primary" @click="nextStep">NextStep</el-button>
              </el-col>
            </el-row>
          </div>
          <div v-show="activeStep===1">
            <el-form-item label="Application[?] *" style="margin-top: 1%;">
              <el-select
                v-model="formData.authorization.applicationid"
                @change="handleAppChange"
                clearable
                placeholder="Please select Application"
              >
                <el-option
                  v-for="item in appOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Role *">
              <el-select
                v-model="formData.authorization.roleid"
                @change="handleRoleChange"
                clearable
                placeholder="Please select role"
              >
                <el-option
                  v-for="item in roleOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-row>
              <el-col :span="6">
                <el-button type="primary" @click="prevStep">PrevStep</el-button>
              </el-col>
              <el-col :span="6" :offset="12">
                <el-button type="primary" @click="nextStep" :disabled="btnDisabled">NextStep</el-button>
              </el-col>
            </el-row>
          </div>
          <div v-show="activeStep===2">
            You have selected application: {{ appDisplay }}
            <br />
            You have selected role: {{ roleDisplay }}
            <br />Choose the country, countries, geography or geographies for which you require view capability. When approved, you will be able to view reqeusts that have been submitted with this/these country/geography choices as the headquarters location.
            <br />
            <br />
            <el-form-item label="CSO Center:">
              <el-select
                v-model="amSelectedVal"
                value-key="countrycode"
                @change="handleAmChange"
                clearable
                placeholder="Select one ..."
              >
                <el-option
                  v-for="item in csoOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Americas: " style="margin-top:2%">
              <el-select
                style="width: 100%"
                v-model="amSelectedVal"
                value-key="countrycode"
                @change="handleAmChange"
                multiple
                clearable
                placeholder="Please select Americas cities..."
              >
                <el-option
                  v-for="item in amOptions"
                  :key="item.countrycode"
                  :label="item.countryname"
                  :value="item"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Europe: ">
              <el-select
                style="width: 100%"
                v-model="euSelectedVal"
                value-key="countrycode"
                @change="handleEuChange"
                multiple
                clearable
                placeholder="Please select Europe cities..."
              >
                <el-option
                  v-for="item in euOptions"
                  :key="item.countrycode"
                  :label="item.countryname"
                  :value="item"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Asia-Pacific: ">
              <el-select
                style="width: 100%"
                v-model="apSelectedVal"
                value-key="countrycode"
                @change="handleApChange"
                multiple
                clearable
                placeholder="Please select Asia-Pacific cities..."
              >
                <el-option
                  v-for="item in apOptions"
                  :key="item.countrycode"
                  :label="item.countryname"
                  :value="item"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-row>
              <el-col :span="6">
                <el-button type="primary" @click="prevStep">PrevStep</el-button>
              </el-col>
              <el-col :span="6" :offset="12">
                <el-button type="primary" @click="nextStep">NextStep</el-button>
              </el-col>
            </el-row>
          </div>
          <div v-show="activeStep===3">
            <!-- <hr /> -->
            <el-row>
              <el-col :span="24">
                <div
                  class="grid-content bg-purple-light"
                  style="line-height:2; font-family:bold;"
                >{{$t("AM009.subtitle1")}}</div>
              </el-col>
            </el-row>
            <!-- <hr /> -->
            <el-row style="margin-top:1%">
              <el-col :span="6">
                <div
                  class="grid-content bg-purple"
                  style="font-weight:700; font-size:0.95rem;"
                >Name:</div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content">{{ fullName }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">Telephone:</div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content">{{ formData.iruser.phone }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">E-mail:</div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content">{{ formData.iruser.email }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">Company:</div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content">{{ formData.iruser.company }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">Address:</div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content">{{ formData.iruser.street1 }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">City:</div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content">{{ formData.iruser.city }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">State/Province:</div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content">{{ formData.iruser.state }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">Country:</div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content">{{ formData.iruser.country }}</div>
              </el-col>
            </el-row>
            <!-- <hr /> -->
            <el-row>
              <el-col :span="24">
                <div
                  class="grid-content bg-purple-light"
                  style="line-height:2; font-family:bold;"
                >Entitlement information</div>
              </el-col>
            </el-row>
            <!-- <hr /> -->
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">Application:</div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content">{{ appDisplay }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">Role:</div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content">{{ roleDisplay }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">Your Country:</div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content">{{ hqCtryDisplay }}</div>
              </el-col>
            </el-row>
            <br />
            <el-row>
              <el-col :span="6">
                <el-button type="primary" @click="prevStep">PrevStep</el-button>
              </el-col>
              <el-col :span="6" :offset="12">
                <el-button type="primary" @click="submitForm('formData')">Submit</el-button>
              </el-col>
            </el-row>
          </div>
          <div v-show="activeStep===4">
            <hr />Submit Successfully...
            <hr />
            <!-- <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple">Confirmation number:</div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content ">{{ entitlementrequestid }}</div>
              </el-col>
            </el-row>-->
          </div>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Help" name="second">Help guide</el-tab-pane>
    </el-tabs>
  </el-container>
</template>

<style>
</style>

<script>
import { get, post } from '@/common/request'

export default {
  data () {
    return {
      activeTabName: 'first',
      activeStep: 0,
      btnDisabled: true,
      appOptions: [
        {
          value: '27',
          label: 'Order Status OnLine'
        },
        {
          value: '3',
          label: 'Order Status Authorization Manager'
        }
      ],
      roleOptions: [],
      allRoleOptions: {
        internal: {
          osol: [
            { value: '17', label: 'AppViewer' },
            { value: '18', label: 'AppOwner' }
          ],
          osam: [
            { value: '20', label: 'Center Coordinator' },
            {
              value: '21',
              label: 'Customer Support OnLine Entitlement Coordinator'
            },
            { value: '22', label: 'AM Owner' },
            { value: '28', label: 'Entitlement Manager' }
          ]
        },

        external: {
          osol: [{ value: '16', label: 'AppUser' }],
          osam: [{ value: '29', label: 'External Admin' }]
        }
      },
      csoOptions: [
        {
          value: '24',
          label: 'Business Partners'
        },
        {
          value: '25',
          label: 'Commercial/State and Local'
        },
        {
          value: '26',
          label: 'Federal Government'
        }
      ],
      amOptions: [],
      amSelectedVal: [],
      amOldSelTmp: [],
      amAllCtryOption: {
        countrycode: 'ALLAM',
        countryname: 'All Americas Countries',
        geoid: 0
      },
      euOptions: [],
      euSelectedVal: [],
      euOldSelTmp: [],
      euAllCtryOption: {
        countrycode: 'ALLEU',
        countryname: 'All Europe Countries',
        geoid: 0
      },
      apOptions: [],
      apSelectedVal: [],
      apOldSelTmp: [],
      apAllCtryOption: {
        countrycode: 'ALLAP',
        countryname: 'All Asia-Pacific Countries',
        geoid: 0
      },
      hqCtryDisplay: '',
      formData: {
        iruser: {
          ibmuniqueid: '',
          firstname: '',
          lastname: '',
          jobtitle: '',
          company: '',
          email: '',
          phone: '',
          street1: '',
          street2: '',
          city: '',
          state: '',
          zipcode: '',
          country: '',
          status: 0
        },
        attributes: {
          usage: '',
          channels: '',
          dateformat: '',
          price: '',
          relationship: '',
          segment: '',
          federal: '',
          csoid: '',
          hqcountry: ''
        },
        authorization: {
          applicationid: '',
          internal: '',
          roleid: ''
        },
        entitlement: [],
        emaildomains: []
      },
      entitlementrequestid: ''
    }
  },
  created: function () {
    if (this.$store.state.currUser) {
      const currUser = this.$store.state.currUser
      this.formData.iruser.ibmuniqueid = currUser.iruser.ibmuniqueid
      this.formData.iruser.firstname = currUser.iruser.firstname
      this.formData.iruser.lastname = currUser.iruser.lastname
      this.formData.iruser.jobtitle = currUser.iruser.jobtitle
      this.formData.iruser.company = currUser.iruser.company
      this.formData.iruser.email = currUser.iruser.email
      this.formData.iruser.phone = currUser.iruser.phone
      this.formData.iruser.street1 = currUser.iruser.street1
      this.formData.iruser.street2 = currUser.iruser.street2
      this.formData.iruser.city = currUser.iruser.city
      this.formData.iruser.state = currUser.iruser.state
      this.formData.iruser.zipcode = currUser.iruser.zipcode
      this.formData.iruser.country = currUser.iruser.country
      this.formData.iruser.status = currUser.iruser.status
      const domain = this.formData.iruser.email.split('@')[1]
      if (
        domain.split('.')[1].toUpperCase() === 'IBM' ||
        domain.split('.')[0].toUpperCase() === 'IBM'
      ) {
        this.formData.authorization.internal = '1'
      } else {
        this.formData.authorization.internal = '3'
      }
    }
    // get countrycode/name information
    this.setCoutryOptions()
  },
  computed: {
    fullName: function () {
      return (
        this.formData.iruser.firstname + ' ' + this.formData.iruser.lastname
      )
    },
    appDisplay: function () {
      if (this.formData.authorization.applicationid) {
        return this.getAppRoleLabel(
          this.formData.authorization.applicationid,
          this.appOptions
        )
      } else {
        return ''
      }
    },
    roleDisplay: function () {
      if (this.formData.authorization.roleid) {
        return this.getAppRoleLabel(
          this.formData.authorization.roleid,
          this.roleOptions
        )
      } else {
        return ''
      }
    }
  },
  methods: {
    handleTabClick (tab, event) {
      console.log(tab, event)
    },
    prevStep () {
      if (this.activeStep >= 1) {
        this.activeStep--
      }
    },
    nextStep () {
      if (this.activeStep <= 3) {
        this.activeStep++
      }
    },
    getAppRoleLabel (key, arr) {
      let res = ''
      for (let i = 0; i < arr.length; i++) {
        if (key === arr[i].value) {
          res = arr[i].label
          break
        }
      }
      return res
    },
    handleAppChange (val) {
      if (val === '27' && this.formData.authorization.internal === '1') {
        // for internal OSOL register
        this.roleOptions = this.allRoleOptions.internal.osol
        this.formData.authorization.roleid = ''
      } else if (val === '27' && this.formData.authorization.internal === '3') {
        // for external OSOL register
        this.roleOptions = this.allRoleOptions.external.osol
        this.formData.authorization.roleid = ''
      } else if (val === '3' && this.formData.authorization.internal === '1') {
        // for internal OSAM register
        this.roleOptions = this.allRoleOptions.internal.osam
        this.formData.authorization.roleid = ''
      } else if (val === '3' && this.formData.authorization.internal === '3') {
        // for external OSAM register
        this.roleOptions = this.allRoleOptions.external.osam
        this.formData.authorization.roleid = ''
      } else {
        this.roleOptions = []
        this.formData.authorization.roleid = ''
        this.btnDisabled = true
      }
    },
    handleRoleChange (val) {
      if (val) {
        this.btnDisabled = false
      } else {
        this.btnDisabled = true
      }
    },
    async setCoutryOptions () {
      this.amOptions.push(this.amAllCtryOption)
      this.euOptions.push(this.euAllCtryOption)
      this.apOptions.push(this.apAllCtryOption)

      // let result = await get('/setting/geotocountry')
      let result = await get('/app/setting/all')
      const amRes = result.data['osam-app-setting'].geotocountry.Americas
      const euRes = result.data['osam-app-setting'].geotocountry.Europe
      const apRes = result.data['osam-app-setting'].geotocountry['Asia Pacific']
      for (let key in amRes) {
        this.amOptions.push(amRes[key])
      }
      for (let key in euRes) {
        this.euOptions.push(euRes[key])
      }
      for (let key in apRes) {
        this.apOptions.push(apRes[key])
      }
    },
    handleAmChange (val) {
      // used to store the previous val
      const oldVal = this.amOldSelTmp.length === 1 ? this.amOldSelTmp[0] : []
      // if select all
      if (val.includes(this.amAllCtryOption)) {
        this.amSelectedVal = this.amOptions
      }
      // if unselect all
      if (
        oldVal.includes(this.amAllCtryOption) &&
        !val.includes(this.amAllCtryOption)
      ) {
        this.amSelectedVal = []
      }
      // if select all the others
      if (
        !oldVal.includes(this.amAllCtryOption) &&
        !val.includes(this.amAllCtryOption)
      ) {
        if (val.length === this.amOptions.length - 1) {
          this.amSelectedVal = this.amOptions
        }
      }
      // save current val for next usage
      this.amOldSelTmp[0] = this.amSelectedVal

      const hqCtryRes = this.getHqCountry()
      this.formData.attributes.hqcountry = hqCtryRes.countrycode
      this.hqCtryDisplay = hqCtryRes.countryname
    },
    handleEuChange (val) {
      // used to store the previous val
      const oldVal = this.euOldSelTmp.length === 1 ? this.euOldSelTmp[0] : []
      // if select all
      if (val.includes(this.euAllCtryOption)) {
        this.euSelectedVal = this.euOptions
      }
      // if unselect all
      if (
        oldVal.includes(this.euAllCtryOption) &&
        !val.includes(this.euAllCtryOption)
      ) {
        this.euSelectedVal = []
      }
      // if select all the others
      if (
        !oldVal.includes(this.euAllCtryOption) &&
        !val.includes(this.euAllCtryOption)
      ) {
        if (val.length === this.euOptions.length - 1) {
          this.euSelectedVal = this.euOptions
        }
      }
      // save current val for next usage
      this.euOldSelTmp[0] = this.euSelectedVal

      const hqCtryRes = this.getHqCountry()
      this.formData.attributes.hqcountry = hqCtryRes.countrycode
      this.hqCtryDisplay = hqCtryRes.countryname
    },
    handleApChange (val) {
      // used to store the previous val
      const oldVal = this.apOldSelTmp.length === 1 ? this.apOldSelTmp[0] : []
      // if select all
      if (val.includes(this.apAllCtryOption)) {
        this.apSelectedVal = this.apOptions
      }
      // if unselect all
      if (
        oldVal.includes(this.apAllCtryOption) &&
        !val.includes(this.apAllCtryOption)
      ) {
        this.apSelectedVal = []
      }
      // if select all the others
      if (
        !oldVal.includes(this.apAllCtryOption) &&
        !val.includes(this.apAllCtryOption)
      ) {
        if (val.length === this.apOptions.length - 1) {
          this.apSelectedVal = this.apOptions
        }
      }
      // save current val for next usage
      this.apOldSelTmp[0] = this.apSelectedVal

      const hqCtryRes = this.getHqCountry()
      this.formData.attributes.hqcountry = hqCtryRes.countrycode
      this.hqCtryDisplay = hqCtryRes.countryname
    },
    getHqCountry () {
      let ctryNameAll = []
      let ctryCodeAll = []
      // concat country name to amCtryDisplay
      for (let i = 0; i < this.amSelectedVal.length; i++) {
        ctryNameAll.push(this.amSelectedVal[i].countryname)
        ctryCodeAll.push(this.amSelectedVal[i].countrycode)
      }
      for (let i = 0; i < this.euSelectedVal.length; i++) {
        ctryNameAll.push(this.euSelectedVal[i].countryname)
        ctryCodeAll.push(this.euSelectedVal[i].countrycode)
      }
      for (let i = 0; i < this.apSelectedVal.length; i++) {
        ctryNameAll.push(this.apSelectedVal[i].countryname)
        ctryCodeAll.push(this.apSelectedVal[i].countrycode)
      }

      if (
        this.amSelectedVal.length === this.amOptions.length &&
        this.euSelectedVal.length === this.euOptions.length &&
        this.apSelectedVal.length === this.apOptions.length
      ) {
        return { ctryCodeAll: ctryCodeAll.join(','), ctryNameAll: 'World Wide' }
      } else {
        return {
          ctryCodeAll: ctryCodeAll.join(','),
          ctryNameAll: ctryNameAll.join(',')
        }
      }
    },
    async postRegister (bodyData) {
      console.log('bodyData=======', bodyData)
      const ibmUniqueId = this.$store.state.ibmUniqueId
      // let ibmuniqueid = this.$state.ibmuniqueid
      const result = await post(
        '/request/new/' +
          this.formData.authorization.roleid +
          '/' +
          ibmUniqueId,
        bodyData
      )
      this.entitlementrequestid = result.data.entitlementrequestid
    },
    submitForm (formName) {
      if (this.activeStep <= 3) {
        this.activeStep++
      }
      // submit form
      this.postRegister(this.formData)
    }
  }
}
</script>
<style scoped>
.big-title {
  font-size: 1.5rem;
  font-family: bold;
}
.small-title {
  font-size: 1rem;
  color: #57636e;
  margin-top: 0.5%;
}
.grid-content {
  border-radius: 4px;
  min-height: 30px;
  font-size: 0.95rem;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>
