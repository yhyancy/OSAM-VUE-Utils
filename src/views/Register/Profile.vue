<template>
  <div>
    <p
      style="padding: 0;margin-left:20px;font-size: 0.85rem; font-style:italic"
      v-if="this.activeStep===0"
      class="osam-page-ibm-font"
    >{{$t("message.copy.review")}}</p>
    <p
      style="font-size: 0.85rem; font-style:italic; margin-left:20px;"
      v-if="this.activeStep===0"
      class="osam-page-ibm-font"
    >{{$t("message.copy.update_profile")}}</p>
    <!-- <div v-if="this.activeStep===0" class="ibm-rule osam-page-ibm-font"></div> -->
    <el-card shadow="hover">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <b class="registerProfileContent">{{$t("search.searchresults.field1")}}</b>:
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content registerProfileContent">{{ fullName }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple registerProfileContent">
            <b>{{$t("AM001.id")}}</b>:
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content registerProfileContent">{{ iruser.userid }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple registerProfileContent">
            <b>{{$t("message.label.telephone")}}</b>:
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content registerProfileContent">{{ iruser.phone }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple registerProfileContent">
            <b>{{$t("message.label.email")}}</b>:
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content registerProfileContent">{{ iruser.email }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple registerProfileContent">
            <b>{{$t("message.label.company")}}</b>:
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content registerProfileContent">{{ iruser.company }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple registerProfileContent">
            <b>{{$t("message.label.address")}}</b>:
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content registerProfileContent">{{ iruser.street1 }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple registerProfileContent">
            <b>{{$t("message.label.city")}}</b>:
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content registerProfileContent">{{ iruser.city }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple registerProfileContent">
            <b>{{$t("register.postalcode")}}</b>:
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content registerProfileContent">{{ iruser.zipcode }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple registerProfileContent">
            <b>{{$t("message.label.state_province")}}</b>:
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content registerProfileContent">{{ iruser.state }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple registerProfileContent">
            <b>{{$t("message.label.country")}}</b>:
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content registerProfileContent">{{ iruser.country }}</div>
        </el-col>
      </el-row>

      <el-row>
        <el-link
          :underline="true"
          style="float: right; margin-right:1%"
          icon="el-icon-edit"
          type="primary"
          target="_blank"
          href="https://wwwstage.ibm.com/ibmweb/myibm/profile/profile-edit.jsp"
        >
          <u>{{ $t("register.button.updateprofile")}}</u>
        </el-link>
      </el-row>
    </el-card>
    <!-- <div v-if="this.activeStep===0" class="ibm-rule"></div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      iruser: {}
    }
  },
  props: {
    iruserProp: {
      type: Object
    },
    activeStep: Number
  },
  created: function () {
    if (this.iruserProp) {
      this.iruser = { ...this.iruserProp }
    } else {
      if (this.$store.state.currUser) {
        this.iruser = this.$store.state.currUser.iruser
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
<style >
.grid-content {
  border-radius: 4px;
  min-height: 25px;
}
.el-link [class*='el-icon-'] + span {
  margin-left: 0px;
}
.registerProfileContent {
  font-size: 0.9rem;
  font-family: ibm-plex-sans, 'Helvetica Neue', Arial, sans-serif;
}
</style>
