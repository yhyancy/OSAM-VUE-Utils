<template>

  <el-main>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Application">
          <el-select v-model="form.app" placeholder="All">
            <el-option label="All" value="all"></el-option>
            <el-option label="Authorzation Manager" value="am"></el-option>
            <el-option label="Order Status Online" value="oso"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Report Date">
          <el-col :span="7">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
      </el-form>

     <div >
       <!-- <p>Report as of {{time | formatDate}}</p> -->
       <p id="reporttime" style="display:none">Report as of {{time | formatDate}}</p>
     </div>
     <el-table id="activereport" ref="activereport" :data="tableData" border style="width: 100%; display:none;" >
        <el-table-column
          prop="app"
          label="Application"
          width="200px">

        </el-table-column>
        <el-table-column
          prop="proreq"
          label="Requests Processed"
          width="180">
          <template slot-scope="scope">
              <a href="#" @click="handle(scope.row.app,'proreq', scope.row.proreq)">{{scope.row.proreq}}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="denreq"
          label="Requests Denied">
          <template slot-scope="scope">
              <a href="#" @click="handle(scope.row.app,'denreq', scope.row.denreq)">{{scope.row.denreq}}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="errreq"
          label="Requests with errors">
          <template slot-scope="scope">
              <a href="#" @click="handle(scope.row.app,'errreq',scope.row.errreq )">{{scope.row.errreq}}</a>
          </template>
        </el-table-column>
      </el-table>

  </el-main>
</template>

<script>
import { get } from '../../common/request'
export default {
  name: 'elmain',

  data () {
    return {
      form: {
        name: '',
        app: '',
        date: ''
      },

      time: Date.parse(new Date()),
      tableData: [
        // {
        // app: '',
        // proreq: '<a>0</a>',
        // denreq: '0',
        // errreq: '0'
      // }
      ]
    }
  },

  filters: {
    formatDate: function (value) {
      let date = new Date(value)
      let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? ('0' + MM) : MM
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let m = date.getMinutes()
      m = m < 10 ? ('0' + m) : m
      let s = date.getSeconds()
      s = s < 10 ? ('0' + s) : s
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
    }
  },

  methods: {

    onSubmit () {
      console.log('date: ' + this.form.date)

      if (this.form.date === '') {
        this.$alert('Please select report date', '', {
          confirmButtonText: 'OK'

        })
        return
      }

      if (this.form.app === '' || this.form.app === 'all') {
        this.form.app = 'all'

        // get('/reports/entitlementReqActivityReport', {
        get('/reports/entitlementReqActivityReportListView').then(response => {
          this.tableData = response.tableData
          console.log(response)
        }).catch(function (error) {
          console.log(error)
        })
        // this.tableData = [
        //   {
        //     app: 'Authorization Manager',
        //     proreq: '0',
        //     denreq: '0',
        //     errreq: '0'
        //   },
        //   {
        //     app: 'Order Status Online',
        //     proreq: '1',
        //     denreq: '1',
        //     errreq: '0'
        //   }
        // ]
        document.getElementById('activereport').style.display = ''
      } else if (this.form.app === 'am') {
        this.tableData = [
          {
            app: 'Authorization Manager',
            proreq: '1',
            denreq: '0',
            errreq: '0'
          }
        ]
        document.getElementById('activereport').style.display = ''
      } else if (this.form.app === 'oso') {
        this.tableData = [
          {
            app: 'Order Status Online',
            proreq: '1',
            denreq: '1',
            errreq: '0'
          }
        ]
        document.getElementById('activereport').style.display = ''
      }
    },

    handle (app, str, value) {
      // alert(app);
      // alert(str);
      // alert(value);

      console.log(app)
      console.log(str)
      console.log(value)

      if (value !== '0') {
        this.$router.push('/requestsummary')
      }
    }

  }
}
</script>

<style scoped>
 .elheader {
   line-height:1.7;
   margin-bottom: 20px;
 }
 /* .el-select-dropdown__item {
   display: none;
 } */

 /* .el-scrollbar__view::before  */
 ul li::before {
   display: none;
 }
</style>
