<template>
<div class="validation-container">
  <el-header style="height: 30px;" class="validation-title">
    <p class="osam-page-big-title ibm-h2 ibm-bold">
      {{$t('AM006.label.linkDescription.AM021.3')}}
    </p>
  </el-header>

    <el-row class="osam-page-subtitle">
      <div class="grid-content ibm-font ibm-bold">{{time}}</div>
      <div class="grid-content ibm-font ibm-bold">{{$t('validation.instruction')}}</div>
    </el-row>

    <el-card class="osam-page-el-card" shadow="hover">
      <el-form ref="searchForm" :model="searchForm">
        <el-form-item :label="$t('validation.field1.value')" >
          <el-radio-group v-model="searchForm.usertype" @change="changeUsertype">
            <el-radio :label="1">{{$t('validation.field1.value1')}}</el-radio>
            <el-radio :label="3">{{$t('validation.field1.value2')}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('entitlementsummary.section2.field2.value')" style="width:80%">
          <el-select v-model="searchForm.reportAppId" @change="changeApplication" style="width:44%">
          <el-option v-for="item in entitledAppList" :key="item.value" :label="$t(item.label)" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-link type="primary" :underline="false" @click="onRevalidation" icon="el-icon-message">Send Revalidation Email to All Users</el-link>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" @click="onSubmit">Submit</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <br />
    <br />
    <el-card class="osam-page-el-card" shadow="hover"  v-if="total_nums > 0 && dataReady">
      <div class="grid-content ibm-font ibm-bold">Use the scroll bar below or place cusor focus in table and use right/left arrow keys to view all table data.</div>
      <hr/>
       <el-table :data="currUserList" style="width: 100%" max-height="500" height="300" label-position="left">
       <el-table-column fixed prop="company" label="Company" width="150"></el-table-column>
        <el-table-column prop="firstname" label="User name" width="120" :formatter="setUserName"></el-table-column>
        <el-table-column prop="email" label="e-Mail address" width="250"></el-table-column>
        <el-table-column prop="application" label="Application" width="250"></el-table-column>
        <el-table-column prop="role" label="Role" width="120"></el-table-column>
        <el-table-column prop="activatedtimestamp" label="Date" width="120"></el-table-column>
      </el-table>
      <el-pagination
        :background="true"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[20, 30, 40, 50]"
        :page-size="pageCount"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total_nums">
      </el-pagination>
    </el-card>
    </div>

</template>

<script>
import { get } from '../../common/request'

export default {
  props: {},
  name: 'ValidationReport',
  data () {
    return {
      time: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
      currUserList: [],
      dataReady: false,
      loading: false,
      entitledAppList:
      [
        { value: -1, label: 'entitlementsummary.section2.field2.value1' },
        { value: 27, label: 'entitlementsummary.section2.field2.value2' },
        { value: 3, label: 'entitlementsummary.section2.field2.value3' }
      ],
      searchForm: {
        usertype: 1,
        reportAppId: -1
      },
      currentPage: 1,
      pageCount: 20,
      total_nums: 0,
      msg: ''
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    init () {
      get('/uservalidation').then((res) => {
        this.currUserList = res.userList
      })
    },
    changeUsertype (event) {
      if (event === 1) {
        // Internal
        this.searchForm.usertype = 1
      } else if (event === 3) {
        // External
        this.searchForm.usertype = 3
      }
    },
    changeApplication (event) {
      if (event === 3) {
        // Authorization Manager
        this.searchForm.reportAppId = 3
      } else if (event === 27) {
        // OSOL
        this.searchForm.reportAppId = 27
      } else if (event === -1) {
        // ALL
        this.searchForm.reportAppId = -1
      }
    },
    setUserName (row, column, cellValue, index) {
      return row.firstname + row.lastname
    },
    onSubmit () {
      this.dataReady = true
      this.$refs.searchForm.validate(async valid => {
        if (valid) {
          this._getTableData(this.currentPage, this.pageCount, this.searchForm)
        }
      })
    },
    async _getTableData (start, count, data = {}) {
      const result = await get('/uservalidation',
        {
          offset: start,
          limit: count,
          usertype: this.searchForm.usertype,
          reportAppId: this.searchForm.reportAppId
        })
      this.total_nums = result.data.total
      this.currUserList = result.data.validationusers
    },
    async handleCurrentChange (val) {
      this.currentPage = val
      this.loading = true
      setTimeout(() => {
        this._getTableData(this.currentPage, this.pageCount, this.searchForm)
        this.loading = false
      }, 300)
    },
    handleSizeChange (val) {
      this.pageCount = val
      this._getTableData(this.currentPage, this.pageCount, this.searchForm)
    },
    resetForm (searchForm) {
      this.$refs[searchForm].resetFields()
    },
    async onRevalidation () {
      const result = await get('/revalidation', {})
      this.msg = result.msg
      this.$message(result.msg)
    }
  }
}
</script>
<style scoped>
.form-class .el-form-item__label{
    font-weight: bold;
}
.validation-title{
  padding: 0;
}
.osam-page-subtitle{
  margin: 3% 0 0 0;
  padding-bottom: 0px;
}
.validation-container {
  margin: 0 0 0 10px;
  padding: 0 2% 2% 1%;
}
.hide{
    display:none;
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
.el-form-item {
  margin-bottom: 2% !important;
  width: 100% !important;
}
.el-form-item__label {
  font: bold !important;
  font-size: 16px;
}
.submitbutton {
  float: left;
}
.el-pagination {
  padding: 2% 0 !important;
}
#nav a {
  color: #66b1ff;
}

</style>
