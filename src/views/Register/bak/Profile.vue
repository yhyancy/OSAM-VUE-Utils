<template>
  <div>
    {{$t("message.copy.review")}}
    <br />
    <br />
    {{$t("message.copy.update_profile")}}
    <br />
    <br />
    <!-- <el-divider></el-divider> -->
    <div class="ibm-rule"></div>
    <!-- name -->
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple" style="font-weight:700;">{{$t("AM009.label.Name")}}:</div>
      </el-col>
      <el-col :span="18">
        <div
          class="grid-content bg-purple-light"
        >{{ currUser.iruser.firstname + currUser.iruser.lastname }}</div>
      </el-col>
    </el-row>
    <!-- telphone -->
    <el-row>
      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          style="font-weight:700;"
        >{{$t("AM009.label.Telephone")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light">{{ currUser.iruser.phone }}</div>
      </el-col>
    </el-row>
    <!-- e-mail -->
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple" style="font-weight:700;">{{$t("AM009.label.E-mail")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light">{{ currUser.iruser.email }}</div>
      </el-col>
    </el-row>
    <!-- company -->
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple" style="font-weight:700;">{{$t("AM009.label.Company")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light">{{ currUser.iruser.company }}</div>
      </el-col>
    </el-row>
    <!-- address-->
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple" style="font-weight:700;">{{$t("AM009.label.Address")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light">{{ currUser.iruser.street1 }}</div>
      </el-col>
    </el-row>
    <!-- city -->
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple" style="font-weight:700;">{{$t("AM009.label.City")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light">{{ currUser.iruser.city }}</div>
      </el-col>
    </el-row>
    <!-- postal code -->
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple" style="font-weight:700;">{{$t("register.postalcode")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light">{{ currUser.iruser.zipcode }}</div>
      </el-col>
    </el-row>
    <!-- state/province -->
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple" style="font-weight:700;">{{$t("AM009.label.State")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light">{{ currUser.iruser.state }}</div>
      </el-col>
    </el-row>
    <!-- country -->
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple" style="font-weight:700;">{{$t("AM009.label.Country")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light">{{ currUser.iruser.country }}</div>
      </el-col>
    </el-row>
    <div class="ibm-rule"></div>
  </div>
</template>

<script>
// import { post } from '../../common/request'
// const baseURL = `${process.env.VUE_APP_BASE_URL}`
export default {
  name: 'Profile',
  currUser: [],
  data () {
    return {
      // data: []
      // name: 'sssssss',
      // data: {
      //   name: 'yancy',
      //   telphone: '123456',
      //   email: 'dlyhua@cn.ibm.com',
      //   company: 'IBM',
      //   address: 'huangnichuan',
      //   city: 'DL',
      //   postalcode: '116000',
      //   stateprovince: 'Liaoning',
      //   country: 'China'
      // }
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      // const result = await post('http://localhost:9000/request/new/appviewer')
      // const users = {
      //   '17': 'appViewer',
      //   '18': 'appOwner',
      //   '22': 'amOwner',
      //   '28': 'entitlementManager',
      //   '20': 'centerCoordinator',
      //   '21': 'customerSupport',
      //   '16': 'appUser',
      //   '29': 'externalAdmin'
      // }
      this.currUser = this.$store.state.currUser
      console.log('currUser', this.currUser)
      // mock
      // const role = users[this.currUser.data.authorization.roleid]
      // const id = '1717'
      // console.log('role', role)
      // const result = await post(baseURL + `/request/new/${role}/${id}`)
      // this.data = result.data.info
      // console.log(result)
      // console.log(
      //   'result:',
      //   result.data.entitlementrequestid,
      //   '::',
      //   result.data.info.name,
      //   '::',
      //   this.data
      // )
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
  /* &:last-child {
      margin-bottom: 0;
    } */
}
.el-col {
  border-radius: 4px;
}
/* .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  } */
.grid-content {
  border-radius: 4px;
  min-height: 30px;
}
</style>
