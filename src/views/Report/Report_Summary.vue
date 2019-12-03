<template>
 <el-container class="main" direction="vertical">
     <el-header class="elheader">
        <p class="title">{{$t('message.title.am')}} </p>
        <p class="subtitle">{{$t('AM006.label.erlist')}}</p>
    </el-header>
    <el-main>
        <div>
          <p style="font-size: 20px;">Select row to view detail: </p>
          <p>Use the scrollbar below or place cursor focus in table and use right/left arrow keys to view all table data.</p>
        </div>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="statusofreq" label="Status of request" width="180">
                <template slot-scope="scope">
                    <a href="#" @click="handle(scope.row.email,scope.row.statusofreq)">{{scope.row.statusofreq}}</a>
                </template>
            </el-table-column>
            <el-table-column prop="datecreated" label="Date Created"></el-table-column>
            <el-table-column prop="dateproden" label="Date processed/denied"  width="200"> </el-table-column>
            <el-table-column prop="companyname" label="Company name"> </el-table-column>
            <el-table-column prop="cc" label="CC"> </el-table-column>
            <el-table-column prop="uname" label="User name"> </el-table-column>
            <el-table-column prop="email" label="e-Mail address"> </el-table-column>
            <el-table-column prop="role" label="Role"> </el-table-column>
            <el-table-column prop="relation" label="Relation"> </el-table-column>
        </el-table>
    </el-main>
 </el-container>

</template>

<script>
import { get } from '../../common/request'
export default {
  name: 'summaryReport',
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    handle (email, statusofreq) {
      this.$router.push('/requestdetail')
    },
    init () {
      get('/requestsummary').then((res) => {
        this.tableData = res.tableData
      })
    }
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.init()
  }
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
