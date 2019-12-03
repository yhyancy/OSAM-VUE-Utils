<template>
  <div class="osam-page-ibm-font">
    <!-- <el-header>       -->
    <!-- <h1>{{$t("message.title.am")}}</h1>
    <h2 v-show="activeStep===0">{{$t("osiam.subtitle.profile")}}</h2>
    <h2 v-show="activeStep===1">{{$t("osiam.subtitle.register")}}</h2>
    <h2 v-show="activeStep===2">{{$t("osiam.subtitle.register")}}</h2>
    <h2 v-show="activeStep===3">{{$t("osiam.subtitle.register")}}</h2>-->
    <!-- </el-header> -->
    <el-container>
      <el-tabs v-model="activeTabName" type="card" style="width: 100%" @tab-click="handleTabClick">
        <el-tab-pane :label="$t('tab.registration.lable')" name="first">
          <el-form
            ref="ruleForm"
            :rules="rules"
            hide-required-asteris:true
            label-position="left"
            label-width="15%"
            label-height="5%"
            style="width: 100%"
          >
            <el-steps :active="activeStep" finish-status="success" simple>
              <el-step :title="$t('chevron.verifyprofile')"></el-step>
              <el-step :title="$t('chevron.requestedaccess')"></el-step>
              <el-step :title="$t('chevron.entitlements')"></el-step>
              <el-step :title="$t('chevron.reviewandsubmit')"></el-step>
            </el-steps>
            <br />

            <div v-if="activeStep===0">
              <!-- profile modula -->
              <Profile :activeStep="activeStep"></Profile>
              <el-row style="margin-top:1%">
                <el-button
                  style="float: right; margin-right:3%; width:11%"
                  type="primary"
                  @click="profileNextStep"
                >
                  {{$t("common.continue")}}
                  <i class="el-icon-arrow-right el-icon--right"></i>
                </el-button>
              </el-row>
            </div>
            <div v-if="activeStep===1">
              <div v-if="accessStep===1">
                <!-- Authorization modula -->
                <Authorization></Authorization>
                <!-- <el-row type="flex" justify="end" style="margin-top:2%">
                  <el-col :span="6">
                    <el-button
                      style="width: 60%"
                      type="primary"
                      @click="authPrevStep"
                    >{{$t("register.button.back")}}</el-button>
                  </el-col>
                  <el-col :span="6" :offset="16">
                    <el-button
                      style="float: right; margin-right:2%"
                      type="primary"
                      @click="authNextStep('ruleForm')"
                    >{{$t("common.continue")}}</el-button>
                  </el-col>
                </el-row>-->
                <el-button-group style="float: right; margin-top:2%;">
                  <el-button
                    type="primary"
                    icon="el-icon-arrow-left"
                    style="width:50%"
                    @click="authPrevStep"
                  >{{$t("register.button.back")}}</el-button>
                  <el-button type="primary" style="width:50%" @click="authNextStep('ruleForm')">
                    {{$t("common.continue")}}
                    <i class="el-icon-arrow-right el-icon--right"></i>
                  </el-button>
                </el-button-group>
              </div>
              <div v-if="accessStep===2">
                <!-- Attributes modula -->
                <Attributes></Attributes>
                <!-- <el-row type="flex" justify="end" style="margin-top:2%">
                  <el-col :span="6">
                    <el-button
                      style="width: 60%"
                      type="primary"
                      @click="attrPrevStep"
                    >{{$t("register.button.back")}}</el-button>
                  </el-col>
                  <el-col :span="6" :offset="16">
                    <el-button
                      type="primary"
                      style="float: right; margin-right:2%;"
                      @click="attrNextStep('ruleForm')"
                    >{{$t("common.continue")}}</el-button>
                  </el-col>
                </el-row>-->
                <el-button-group style="float: right; margin-top:2%;">
                  <el-button
                    type="primary"
                    icon="el-icon-arrow-left"
                    style="width:50%"
                    @click="attrPrevStep"
                  >{{$t("register.button.back")}}</el-button>
                  <el-button type="primary" style="width:50%" @click="attrNextStep('ruleForm')">
                    {{$t("common.continue")}}
                    <i class="el-icon-arrow-right el-icon--right"></i>
                  </el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="activeStep===2">
              <div v-if="entStep===1">
                <Emaildomain></Emaildomain>
                <!-- <el-row type="flex" justify="end">
                  <el-col :span="6">
                    <el-button type="primary" @click="emailPrevStep">{{$t("register.button.back")}}</el-button>
                  </el-col>
                  <el-col :span="6" :offset="16">
                    <el-button
                      type="primary"
                      @click="emailNextStep('ruleForm')"
                    >{{$t("common.continue")}}</el-button>
                  </el-col>
                </el-row>-->
                <el-button-group style="float: right; margin-top:2%;">
                  <el-button
                    type="primary"
                    icon="el-icon-arrow-left"
                    style="width:50%"
                    @click="emailPrevStep"
                  >{{$t("register.button.back")}}</el-button>
                  <el-button type="primary" style="width:50%" @click="emailNextStep('ruleForm')">
                    {{$t("common.continue")}}
                    <i class="el-icon-arrow-right el-icon--right"></i>
                  </el-button>
                </el-button-group>
              </div>
              <!-- entitlement module -->
              <div v-if="entStep===2">
                <Entitlement :flag="errorFlag"></Entitlement>
                <!-- <el-row type="flex" justify="end" style="margin-top:1%">
                  <el-col :span="6">
                    <el-button
                      style="width:60%"
                      class="button"
                      type="primary"
                      @click="entPrevStep"
                    >{{$t("register.button.back")}}</el-button>
                  </el-col>
                  <el-col :span="6" :offset="16">
                    <el-button
                      style="float: right; margin-right:2%;"
                      class="button"
                      type="primary"
                      @click="entNextStep"
                    >{{$t("common.continue")}}</el-button>
                  </el-col>
                </el-row>-->
                <el-button-group style="float: right; margin-top:2%;">
                  <el-button
                    type="primary"
                    icon="el-icon-arrow-left"
                    style="width:50%"
                    @click="entPrevStep"
                  >{{$t("register.button.back")}}</el-button>
                  <el-button type="primary" style="width:50%" @click="entNextStep">
                    {{$t("common.continue")}}
                    <i class="el-icon-arrow-right el-icon--right"></i>
                  </el-button>
                </el-button-group>
              </div>
            </div>
            <div v-if="activeStep===3">
              <Review></Review>
              <br />
              <!-- <el-row type="flex" justify="end">
                <el-col :span="6">
                  <el-button
                    style="width:60%"
                    type="primary"
                    @click="revPrevStep"
                  >{{$t("register.button.back")}}</el-button>
                </el-col>
                <el-col :span="6" :offset="20">
                  <el-button
                    style="float: right; margin-right:2%;"
                    type="primary"
                    @click="submitForm"
                  >{{$t("switchid.ci162.submit")}}</el-button>
                </el-col>
              </el-row>-->
              <el-button-group style="float: right; ">
                <el-button
                  type="primary"
                  icon="el-icon-arrow-left"
                  style="width:50%"
                  @click="revPrevStep"
                >{{$t("register.button.back")}}</el-button>
                <el-button type="primary" style="width:50%" @click="submitForm">
                  {{$t("switchid.ci162.submit")}}
                  <i class="el-icon-arrow-right el-icon--right"></i>
                </el-button>
              </el-button-group>
            </div>
            <div v-if="activeStep===4">
              <Confirmation :entitlementrequestid="entitlementrequestid"></Confirmation>
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane :label="$t('AM006.label.help')" name="second">
          <div v-if="activeStep===0">
            <ProfileHelp></ProfileHelp>
          </div>
          <div v-if="activeStep !==0">
            <RequestHelp></RequestHelp>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-container>
  </div>
</template>

<style scope>
.el-step.is-simple .el-step__title {
  font-size: 13px;
}
.el-step.is-simple:not(:last-of-type) .el-step__title {
  max-width: 100%;
  word-break: normal;
}
</style>

<script>
import { register } from '../../common/globalObj'
import { post } from '../../common/request'

export default {
  components: {
    Profile: () => import('./Profile'),
    Authorization: () => import('./Authorization'),
    Attributes: () => import('./Attributes'),
    Emaildomain: () => import('./Emaildomain'),
    Entitlement: () => import('./Entitlement'),
    Review: () => import('./Review'),
    Confirmation: () => import('./Confirmation'),
    ProfileHelp: () => import('./ProfileHelp'),
    RequestHelp: () => import('./RequestHelp')
  },
  data () {
    // var checkEntItem = (rule, value, callback) => {
    //   console.log('checkEntItem rule========', rule)
    //   console.log('checkEntItem value========', value)
    //   console.log('checkEntItem callback========', callback)
    //   if (!value) {
    //     callback(new Error('Please input entitlement...'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      activeTabName: 'first',
      activeStep: 0,
      accessStep: 0,
      entStep: 0,
      entitlementrequestid: '',
      errorFlag: '',
      rules: {
        applicationid: [
          {
            required: true,
            message: 'Please select Application...',
            trigger: 'blur'
          }
        ],
        roleid: [
          { required: true, message: 'Please select Role...', trigger: 'blur' }
        ],
        csoid: [
          {
            required: true,
            message: 'Please select CSO Center...',
            trigger: 'blur'
          }
        ],
        relationship: [
          {
            required: true,
            message: 'Please select RelationShip...',
            trigger: 'blur'
          }
        ],
        // usage: [
        //   {
        //     required: true,
        //     message: 'Please select Access Type...',
        //     trigger: 'blur'
        //   }
        // ],
        // dateformat: [
        //   {
        //     required: true,
        //     message: 'Please select Date format...',
        //     trigger: 'blur'
        //   }
        // ],
        hqcountry: [
          {
            required: true,
            message: 'Please select Country...',
            trigger: 'blur'
          }
        ],
        entitemval: [
          {
            required: true,
            message: 'Please input correct entitlement..',
            trigger: 'change'
          }
          // {
          //   validator: checkEntItem,
          //   trigger: 'blur'
          // }
        ],
        emaildomainval: [
          {
            required: true,
            message: 'Please input correct emaildomain...',
            trigger: 'change'
          }
        ]
      }
    }
  },
  created: function () {
    // TODO: investigate how to use dispatch here, seems it's async and can not get store back right away
    // this.$store.dispatch('SET_REGISTER', register)
    // console.log('store.state.register=======', this.$store.state.register)
    this.$store.commit('SET_REGISTER', register)
  },
  computed: {},
  methods: {
    handleTabClick (tab, event) {
      console.log(tab, event)
    },

    profileNextStep () {
      this.activeStep = 1
      this.accessStep = 1
    },
    authPrevStep () {
      this.activeStep = 0
    },
    authNextStep (formName) {
      if (this.$store.state.register.authorization.roleid) {
        this.$refs[formName].clearValidate(['applicationid', 'roleid'])
        if (
          this.$store.state.register.authorization.roleid === 18 ||
          this.$store.state.register.authorization.roleid === 22
        ) {
          this.activeStep = 3
        } else if (this.$store.state.register.authorization.roleid === 20) {
          if (
            this.$store.state.register.authorization.csoid &&
            this.$store.state.register.authorization.hqcountry
          ) {
            this.$refs[formName].clearValidate(['csoid', 'hqcountry'])
            this.activeStep = 3
          } else {
            if (!this.$store.state.register.authorization.csoid) {
              this.$refs[formName].validateField(['csoid'])
            }
            if (!this.$store.state.register.authorization.hqcountry) {
              this.$refs[formName].validateField(['hqcountry'])
            }
          }
        } else if (
          this.$store.state.register.authorization.roleid === 16 ||
          this.$store.state.register.authorization.roleid === 17
        ) {
          if (this.$store.state.register.authorization.hqcountry) {
            this.$refs[formName].clearValidate(['hqcountry'])
            this.accessStep = 2
          } else {
            this.$refs[formName].validateField(['hqcountry'])
          }
        } else if (this.$store.state.register.authorization.roleid === 29) {
          if (this.$store.state.register.authorization.hqcountry) {
            this.$refs[formName].clearValidate(['hqcountry'])
            this.activeStep = 2
            this.entStep = 1
          } else {
            this.$refs[formName].validateField(['hqcountry'])
          }
        } else if (
          this.$store.state.register.authorization.roleid === 21 ||
          this.$store.state.register.authorization.roleid === 28
        ) {
          if (this.$store.state.register.authorization.hqcountry) {
            this.$refs[formName].clearValidate(['hqcountry'])
            this.activeStep = 3
          } else {
            this.$refs[formName].validateField(['hqcountry'])
          }
        }
      } else {
        if (!this.$store.state.register.authorization.applicationid) {
          this.$refs[formName].validateField('applicationid')
        }
        if (!this.$store.state.register.authorization.roleid) {
          this.$refs[formName].validateField('roleid')
        }
      }
    },
    attrPrevStep () {
      this.accessStep = 1
    },
    attrNextStep (formName) {
      if (
        this.$store.state.register.authorization.roleid === 16 ||
        this.$store.state.register.authorization.roleid === 17
      ) {
        if (
          this.$store.state.register.attributes.relationship &&
          this.$store.state.register.attributes.usage &&
          this.$store.state.register.attributes.dateformat
        ) {
          this.$refs[formName].clearValidate([
            'relationship',
            'usage',
            'dateformat'
          ])
          this.activeStep = 2
          this.entStep = 2
        } else {
          if (!this.$store.state.register.attributes.relationship) {
            this.$refs[formName].validateField('relationship')
          }
          if (!this.$store.state.register.attributes.usage) {
            this.$refs[formName].validateField('usage')
          }
          if (!this.$store.state.register.attributes.dateformat) {
            this.$refs[formName].validateField('dateformat')
          }
        }
      }
    },
    emailPrevStep () {
      // TODO: steps should be changed according to different role
      this.activeStep = 1
    },
    emailNextStep (formName) {
      if (this.$store.state.register.emaildomains.length > 0) {
        this.$refs[formName].clearValidate(['emaildomainval'])
        this.entStep = 2
      } else {
        this.$refs[formName].validateField(['emaildomainval'])
      }
    },
    entPrevStep () {
      if (this.$store.state.register.authorization.roleid === 29) {
        this.entStep = 1
      } else if (
        this.$store.state.register.authorization.roleid === 16 ||
        this.$store.state.register.authorization.roleid === 17
      ) {
        this.activeStep = 1
        this.accessStep = 2
      }
    },
    entNextStep (formName) {
      if (this.$store.state.register.entitlement.length > 0) {
        this.activeStep = 3
      } else {
        // this.errorFlag = 'Please input at least one entitlement.'
        this.$message.error('Please input at least one entitlement.')
      }
      scrollTo(0, 0)
    },
    revPrevStep () {
      if (
        this.$store.state.register.authorization.roleid === 18 ||
        this.$store.state.register.authorization.roleid === 22
      ) {
        this.activeStep = 1
      } else if (
        this.$store.state.register.authorization.roleid === 16 ||
        this.$store.state.register.authorization.roleid === 17
      ) {
        this.activeStep = 2
        this.entStep = 2
      } else if (
        this.$store.state.register.authorization.roleid === 20 ||
        this.$store.state.register.authorization.roleid === 21 ||
        this.$store.state.register.authorization.roleid === 28
      ) {
        this.activeStep = 1
        this.accessStep = 1
      } else if (this.$store.state.register.authorization.roleid === 29) {
        this.activeStep = 2
        this.entStep = 2
      }
    },
    async postRegister (bodyData) {
      console.log('RegisterPortal-postRegister-bodyData=======', bodyData)
      const result = await post(
        `/manage/request/new/${this.$store.state.currUser.iruser.ibmuniqueid}`,
        bodyData
      )
      console.log('RegisterPortal-postRegister-result=======', result)
      this.entitlementrequestid = result.data.entitlementrequestid
    },
    submitForm () {
      // submit form
      this.postRegister(this.$store.state.register)

      if (this.activeStep <= 3) {
        this.activeStep++
      }
    }
  }
}
</script>

<style scoped>
.button {
  margin-top: 10%;
}
</style>
