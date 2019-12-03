<template>
  <el-header class="elheader">
    <p class="title">{{$t('message.title.am')}} </p>
    <p class="subtitle">Entitlement request activity report </p>
  </el-header>
</template>

<script>
export default {
  name: 'elheader'
}
</script>
<style scoped>
 .elheader {
   line-height:1.7;
   margin-bottom: 20px;
 }
 .title {

   font-size: 30px;
   font-style: inherit;
   font-family: Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
 }
 .subtitle {
   font-size: 18px;
   font-style: italic;
   font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
 }
</style>
