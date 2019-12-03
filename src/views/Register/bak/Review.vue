<template>
  <div>
    <!-- Profile information -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">{{$t("AM009.subtitle1")}}</div>
      </el-col>
    </el-row>
    <!-- Confirmation number -->
    <el-row style="height:10px">
      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          style="font-weight:700;"
        >{{$t("message.label.confirmation_number")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">{{ entitlementrequestid }}</div>
      </el-col>
    </el-row>
    <!-- name -->
    <el-row style="height:10px">
      <el-col :span="6">
        <div class="grid-content bg-purple" style="font-weight:700;">{{$t("message.label.name")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">{{ currentUser.profile.firstname + currentUser.profile.lastname }}</div>
      </el-col>
    </el-row>
    <!-- telphone -->
    <el-row style="height:10px">
      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          style="font-weight:700;"
        >{{$t("message.label.telephone")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">{{ currentUser.profile.phone }}</div>
      </el-col>
    </el-row>
    <!-- e-mail -->
    <el-row style="height:10px">
      <el-col :span="6">
        <div class="grid-content bg-purple" style="font-weight:700;">{{$t("message.label.email")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">{{ currentUser.profile.email }}</div>
      </el-col>
    </el-row>
    <!-- company -->
    <el-row style="height:10px">
      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          style="font-weight:700;"
        >{{$t("message.label.company")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">{{currentUser.profile.company}}</div>
      </el-col>
    </el-row>
    <!-- address-->
    <el-row style="height:10px">
      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          style="font-weight:700;"
        >{{$t("message.label.address")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">{{currentUser.profile.street1 }}</div>
      </el-col>
    </el-row>
    <!-- city -->
    <el-row style="height:10px">
      <el-col :span="6">
        <div class="grid-content bg-purple" style="font-weight:700;">{{$t("message.label.city")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">{{ currentUser.profile.city }}</div>
      </el-col>
    </el-row>
    <!-- state/province -->
    <el-row style="height:10px">
      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          style="font-weight:700;"
        >{{$t("message.label.state_province")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">{{ currentUser.profile.state }}</div>
      </el-col>
    </el-row>
    <!-- country -->
    <el-row style="height:10px">
      <el-col :span="6">
        <div class="grid-content bg-purple" style="font-weight:700;">{{$t("message.label.country")}}</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">{{ currentUser.profile.country }}</div>
      </el-col>
    </el-row>
    <!-- Entitlement information -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">{{$t("AM009.subtitle2")}}</div>
      </el-col>
    </el-row>
    <!-- Application -->
    <el-row style="height:10px">
      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          style="font-weight:700;"
        >{{$t("AM009.label.Application")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">{{ appName }}</div>
      </el-col>
    </el-row>
    <!-- Role -->
    <el-row style="height:10px">
      <el-col :span="6">
        <div class="grid-content bg-purple" style="font-weight:700;">{{$t("AM009.label.Role")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">{{ roleName }}</div>
      </el-col>
    </el-row>
    <!-- CSO Center -->
    <!-- Your Country -->
    <el-row style="height:10px">
      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          style="font-weight:700;"
        >{{$t("entitlementsummary.section2.field6")}}:</div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">{{ hqcountry }}</div>
      </el-col>
    </el-row>
    <br />
    <!-- Thank You -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div style="font-weight:700">{{$t("approve.thankyou")}}</div>
          <!-- Dear Valued Customer,
          <br />Thank you for registering for access to Order Status OnLine. We will now have your authorization request reviewed by an IBM/Lenovo Representative. This process should take no longer than two business days, and you will receive a confirmation e-mail.
          <br />Please refer to Entitlement Request ID# 6016 should you need to inquire about your request. Click on the Customer support link to the left to obtain contact information for your team.
          <br />Thank you-->
          <!-- {{$t("message.500.osi")}} -->
          <p v-html="$t('message.500.osi').replace('{0}',entitlementrequestid)"></p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Review',
  currentUser: {},
  data () {
    return {
      // data: {
      //   number: '6001',
      //   name: 'yancy',
      //   telphone: '1234556',
      //   email: 'dlyhua@cn.ibm.com',
      //   company: 'IBM',
      //   address: 'huangnichuan',
      //   city: 'DL',
      //   stateprovince: 'Liaoning',
      //   country: 'China',
      //   application: 'Order Status Authorization Manager',
      //   role: 'AM Owner',
      //   country1: 'China'
      // }
    }
  },
  props: ['appName', 'roleName', 'entitlementrequestid', 'hqcountry'],
  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      this.currentUser = this.$store.state.currUser
      console.log('review-currentUser=========', this.currentUser)
      console.log('review_checkedApCities', this.checkedApCities)
    }
  }
}
</script>>

<style scoped>
.el-row {
  margin-bottom: 20px;
  /* &:last-child {
      margin-bottom: 0;
    } */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
