<template>
<el-container>
  <el-header>
    <div class="big-title">{{$t('message.title.am')}}</div>
    <p class="small-title">{{$t('osiam.subtitle.logout')}}</p>
  </el-header>
  <el-main style="width:100%;height:100%;overflow:hidden;">
    <el-row style="height: 7%; !important;">
      <el-col :span="24">
        <div class="grid-content" style="font-family: bold; font-size: 1.3vw;"><bold>{{'Revalidation Process Started'}}</bold></div>
      </el-col>
    </el-row>
    <hr/>
    <el-row style="height: 7%; !important;">
      <el-col :span="24">
        <div class="grid-content grid-content">{{'Process has been started, Please log off'}}</div>
      </el-col>
    </el-row>
    <el-row style="height: 7%; !important;">
      <el-col :span="24">
        <div class="grid-content grid-content">Revalidation SQL: Select ibmuniqueid, hqcountry, email, first name, last namefrom am.iruser where status=1 and email='{{content}}'</div>
      </el-col>
    </el-row>
  </el-main>
</el-container>

</template>
<script>
export default {
  data () {
    return {
      content: 'jezreel@cn.ibm.com'
    }
  }
}
</script>
<style scoped>
.hide{
    display:none;
    }
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
  padding-left:5px
}
.el-form-item {
  margin-bottom: 2% !important;
  width: 100% !important;
}
.el-form-item__label {
  font-size: 1vw !important;
}
.el-input__inner {
  border-color: #8495c2fa !important;
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
