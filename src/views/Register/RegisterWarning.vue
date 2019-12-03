<template>
<div>
  <div align="center">
    <br /><br />
    Authorization Manager Sign in
    <hr /><br />
    Your Profile is not activated. If you have a pending registration, please wait until it is approved.
    <hr /><br />
  </div>

  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">Entitlement Request Information</div>
    </el-col>
  </el-row>
  <hr /><br />
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">ID:</div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">{{ entitlementrequest.id }}</div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">Creator IBM Unique ID:</div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">{{ entitlementrequest.creatoribmuniqueid }}</div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">Resolver IBM Unique ID:</div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">{{ entitlementrequest.resolveribmuniqueid }}</div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">Create TimeStamp:</div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">{{ entitlementrequest.createtimestamp }}</div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">Last Reviewed TimeStamp:</div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">{{ entitlementrequest.lastreviewedtimestamp }}</div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">Process TimeStamp:</div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">{{ entitlementrequest.processtimestamp }}</div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">Type:</div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">{{ entitlementrequest.type }}</div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">Status:</div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">{{ entitlementrequest.status }}</div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">Process Comment:</div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">{{ entitlementrequest.processcomment }}</div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">Action:</div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">{{ entitlementrequest.action }}</div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">Processor IBM Unique ID:</div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light">{{ entitlementrequest.processoribmuniqueid }}</div>
    </el-col>
  </el-row>

</div>
</template>

<script>

export default {
  data () {
    return {
      iruser: {},
      entitlementrequest: {}
    }
  },
  // props: {
  //   iruserProp: {
  //     type: Object
  //   },
  //   entReqProp: {
  //     type: Object
  //   }
  // },
  created: function () {
    if (this.$store.state.currUser) {
      this.iruser = this.$store.state.currUser.iruser

      if (this.$store.state.currUser.entitlementrequest) {
        this.entitlementrequest = this.$store.state.currUser.entitlementrequest
      }
    }
  },
  computed: {
    fullName: function () {
      return this.iruser.firstname + ' ' + this.iruser.lastname
    }
  },
  methods: {}
}
</script>
