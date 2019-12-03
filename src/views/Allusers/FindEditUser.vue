/* eslint-disable vue/valid-template-root */
<template>
  <el-container>
    <el-header>
      <div class="big-title">{{$t('message.title.am')}}</div>
      <p class="small-title">{{$t('AM006.label.finduser')}}</p>
    </el-header>
    <el-row style="height: 7%; !important;">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">{{$t('find.section.title')}}</div>
      </el-col>
    </el-row>
    <el-main>
      <!-- form表单 -->
      <form style="width: 100%">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="25%" label-height="5%">
          <el-form-item prop="firstname" label="User first name:">
            <el-input size="larger" v-model="ruleForm.firstname"></el-input>
          </el-form-item>
          <el-form-item  prop="lastname" label="User last name:">
            <el-input v-model="ruleForm.lastname"></el-input>
          </el-form-item>
          <el-form-item prop="company" label="Company name:">
            <el-input v-model="ruleForm.company"></el-input>
          </el-form-item>
          <el-form-item prop="email" label="E-mail address:">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item prop="phone" label="Telephone number:">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item prop="applicationid" label="Application:">
            <el-select style="width: 50%"
                v-model="ruleForm.applicationid"
                @change="handleAppChange"
                clearable
                placeholder="Please select an application">
              <el-option v-for="item in appOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="roleid" label="Role:">
            <el-select
                style="width: 50%"
                v-model="ruleForm.roleid"
                @change="handleRoleChange"
                clearable
                placeholder="Please select a role">
              <el-option
                v-for="item in roleOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="relationship" label="Account type:" v-if="ruleForm.roleid==='20'">
            <el-select
                style="width: 50%"
                v-model="ruleForm.relationship"
                clearable
                placeholder="Please select an account type">
              <el-option
                v-for="item in CenterCoordinator"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="relationship" label="Account type:" v-if="ruleForm.roleid==='16'">
            <el-select
                style="width: 50%"
                v-model="ruleForm.relationship"
                clearable
                placeholder="Please select an account type">
              <el-option
                v-for="item in AppUser"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="relationship" label="Account type:" v-if="ruleForm.roleid==='17'">
            <el-select
                style="width: 50%"
                v-model="ruleForm.relationship"
                clearable
                placeholder="Please select an account type">
              <el-option
                v-for="item in AppViewer"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        </form>
        <el-row><el-col>If last name is unkown, fill in another search field and put an * in the user last name filed.</el-col></el-row>
      <el-button class="submitbutton" @click="submitForm()">Submit</el-button>
      <el-button class="button" @click="resetForm('ruleForm')">Clear form</el-button>
    </el-main>
  </el-container>
</template>
<script>

import { post } from '../../common/request'
export default {
  name: 'FindEditUser',
  data () {
    return {
      appOptions: [
        {
          value: '27',
          label: 'Order Status OnLine'
        },
        {
          value: '3',
          label: 'Authorization Manager'
        }
      ],
      roleOptions: [],
      allRoleOptions: {
        osol: [
          { value: '16', label: 'AppUser' },
          { value: '17', label: 'AppViewer' },
          { value: '18', label: 'AppOwner' }
        ],
        AuthorizationManager: [
          { value: '20', label: 'Center Coordinator' },
          { value: '21', label: 'Customer Support OnLine Entitlement Coordinator' },
          { value: '22', label: 'AM Owner' },
          { value: '28', label: 'Entitlement Manager' },
          { value: '29', label: 'External Admin' }
        ]
      },
      CenterCoordinator: [],
      allCenterCoordinator:
        [
          { value: '24', label: 'Business Partners' },
          { value: '25', label: 'Commercial/State and Local' },
          { value: '26', label: 'Federal' },
          { value: '30', label: 'Lenovo' }
        ],
      AppUser: [],
      allAppUser: [
        { value: 'I', label: 'Individual' },
        { value: 'S', label: 'Smaller Medium Businuss' },
        { value: 'L', label: 'Large Enterprise' },
        { value: 'B', label: 'Businuss Partner' }
      ],
      AppViewer: [],
      allAppViewer: [
        { value: 'I', label: 'Individual' },
        { value: 'S', label: 'Smaller Medium Businuss' },
        { value: 'L', label: 'Large Enterprise' },
        { value: 'B', label: 'Businuss Partner' },
        { value: 'E', label: 'IBM or Lenovo employee' }
      ],
      ruleForm: {
        firstname: '',
        lastname: '',
        company: '',
        email: '',
        phone: '',
        applicationid: '',
        roleid: '',
        relationship: '',
        csoid: ''
      },
      rules: {
        lastname: [
          { required: true, message: 'Please input your last name', trigger: 'blur' }
        ]
      },
      email: [{
        trigger: 'blur'
      }],
      currentPage: 1,
      pageCount: 20
    }
  },
  computed: {
    fullname () {
      return this.ruleForm.lastname + this.ruleForm.firstname
    }
  },
  methods: {
    submitForm () {
      this.$refs.ruleForm.validate(async (valid) => {
        const result = await post('/user/list?offset=0', this.ruleForm)
        console.log('findEditUser userlist result=======', result)
        if (valid) {
          if (result.data.userlist) {
            this.$router.push({ path: '/displaylist', query: { userlist: result.data.userlist, inputname: this.fullname } })
          } else if (result.data.iruser) {
            this.$router.push({ path: '/editoneuser', query: { oneuserprofile: result.data, inputname: this.fullname } })
          } else {
            console.log('NO USER FOUND!!')
          }
        }
      })
    },
    async _getTableData (start, count) {
      // const url = '/user/list'
    },
    handleAppChange (val) {
      if (val === '27') {
        this.roleOptions = this.allRoleOptions.osol
        this.ruleForm.roleid = ''
      } else if (val === '3') {
        this.roleOptions = this.allRoleOptions.AuthorizationManager
        this.ruleForm.roleid = ''
      }
    },
    handleRoleChange (val) {
      if (val === '20') {
        this.CenterCoordinator = this.allCenterCoordinator
        this.ruleForm.relationship = ''
      } else if (val === '16') {
        this.AppUser = this.allAppUser
        this.ruleForm.relationship = ''
      } else if (val === '17') {
        this.AppViewer = this.allAppViewer
        this.ruleForm.relationship = ''
      }
    },
    resetForm (ruleForm) {
      this.$refs[ruleForm].resetFields()
    }
  }
}
</script>
<style scoped>
.el-container {
  background-color: #fafcfd;
}
.el-header {
  color: #333;
  text-align: left;
  line-height: 400% !important;
  height: 12% !important;
}
.el-main {
  text-align: left;
  padding: 2% !important;
  font-size: 1.3vw;
}
.big-title {
  font-size: 2.5vw;
  font-family: bold !important;
}
.small-title {
  font-size: 1.2vw;
  color: #57636e;
}
.el-row {
  margin-bottom: 2%;
  padding: 3%;
}
.el-col {
  border-radius: 2%;
}
.bg-purple-dark {
  font-family: bold !important;
  line-height: 180% !important;
  font-size: 1.5vw !important;
  background-color: #e5e9f2 !important;
}
.grid-content {
  border-radius: 4px !important;
  min-height: 90% !important;
}
.el-form-item {
  margin-bottom: 2% !important;
  width: 70% !important;
}
.el-input__inner {
  border-color: #8495c2fa !important;
}
.el-form-item__label {
  font-size: 1vw !important;
}

.el-button {
  background-color: #99a9bf;
  border-color: #99a9bf;
  color: #333 !important;
}
.submitbutton {
  float: left;
}
.button {
  float: right;
}
</style>
