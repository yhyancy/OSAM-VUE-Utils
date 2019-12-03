<template>
<el-container>
  <el-main style="width:100%;height:100%;overflow:hidden;">
    <div class="block">
    <span class="demonstration">Use the scroll bar below or place cusor focus in table and use right/left arrow keys to view all table data.</span>
    <hr/>
  </div>
    <el-table :data="tableData" style="width: 100%" max-height="500" height="300" label-position="left">
     <el-table-column fixed prop="company" label="Company" width="150"></el-table-column>
      <el-table-column prop="username" label="User name" width="120"></el-table-column>
      <el-table-column prop="email" label="e-Mail address" width="250"></el-table-column>
      <el-table-column prop="application" label="Application" width="250"></el-table-column>
      <el-table-column prop="role" label="Role" width="120"></el-table-column>
      <el-table-column prop="activatedtimestamp" label="Date" width="120"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageCount"
      layout="total, prev, pager, next, jumper"
      :total="total_nums">
    </el-pagination>
  </el-main>
</el-container>
</template>
<script>
import { get } from '../../common/request'
export default {
  // props: ['userList'],
  props: {
    title: String,
    likes: Number,
    applicationid: Number,
    views: String,
    userList: Array
  },
  created () {
    console.log('子组件接受父组件的值', this.title)
    console.log('数字测试', this.likes)
    console.log('APPID', this.applicationid)
    console.log('Views', this.views)
    this.tableData = this.$route.query.userList
  },
  methods: {
    async _getTableData (start, count, data = {}) {
      // const result = await get(`/validation/list?limit=${start}&offset=${count}&applicationid=${this.applicationid}&viewid=${this.views}`)
      const result = await get('/validation/list', {},
        {
          offset: start,
          limit: count,
          applicationid: this.applicationid,
          views: this.views
        })
      this.total_nums = result.data.total
      await this.setCurrUserList(result.data.userList)
      this.userList = this.currUserList
    },
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    async handleCurrentChange (val) {
      this.currentPage = val
      this.loading = true
      setTimeout(() => {
        this._getTableData(
          (this.currentPage - 1) * this.pageCount,
          this.pageCount
        )
        this.loading = false
      }, 200)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    }
  },
  data () {
    return {
      currentPage: 1,
      pageCount: 20,
      total_nums: 0,
      tableData: ''
    }
  }
}
</script>
