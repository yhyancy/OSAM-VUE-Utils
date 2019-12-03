<template>
  <div class="edit-container">
    <el-row>
      <p class="ibm-h2 ibm-bold">{{$t("AM006.label.linkDescription.AM036.3")}}</p>
    </el-row>
    <el-row class="ibm-font">
      <el-col class="osam-page-subtitle" :span="24">
        <div class="grid-content ibm-font ibm-bold">{{$t("switchenable.instruction")}}</div>
      </el-col>
      <el-card class="osam-page-el-card" shadow="hover">
        <el-form ref="addIdForm" :model="addIdForm" :rules="rules" label-position="left" label-width="25%" label-height="5%" class="form-class">
            <el-form-item :label="$t('switchid.field1')" prop="input">
            <el-input type="input" v-model.number="addIdForm.input" prefix-icon="el-icon-search" style="width:60%"></el-input>
            <el-button type="primary" style="float:right" @click="submit">{{$t("switchid.ci162.submit")}}</el-button>
            </el-form-item>
        </el-form>
        </el-card>
    </el-row>
      <!-- <br />
      <el-alert title="snshang@cn.ibm.com is already switch enabled" type="success"></el-alert>
      <br /> -->
      <el-row class="ibm-font">

      </el-row>
      <div style="width:100%">
        <!-- <table class="ibm-results-table" cellspacing="0" cellpadding="0">
          <tbody>
            <tr style="height:50px">
              <td style="width:100px">
                {{$t('switchid.field1')}}:
                <span class="ibm-required">*</span>
              </td>
              <td style="width:250px" align="left">
                <el-input v-model="input" clearable></el-input>
              </td>
              <td  align="right">
                <el-button style="margin-left:10px" @click="submit">{{$t("switchid.ci162.submit")}}</el-button>
              </td>
            </tr>
          </tbody>
        </table> -->
        <!-- <el-divider></el-divider> -->
        <div class="grid-content ibm-font ibm-bold" style="padding-bottom: 10px;">{{$t("switchenable.section.title")}}</div>
        <el-card class="osam-page-el-card" shadow="hover">
        <el-table :data="tableData" style="width: 100%" max-height="500" height="380">
          <el-table-column prop="firstname" :label="$t('switchenable.section.field1')" width="150"></el-table-column>
          <el-table-column prop="lastname" :label="$t('switchenable.section.field2')" width="120"></el-table-column>
          <el-table-column prop="email" :label="$t('switchenable.section.field3')" width="250"></el-table-column>
          <el-table-column prop="roid" :label="$t('switchenable.section.field4')" width="120">
          <template slot-scope="scope">{{irrole[scope.row.roid].name}}</template>
          </el-table-column>
          <el-table-column prop="ibmuniqueid" label width="120">
            <!-- <el-button type="text" @click="dialogVisible=true" size="small">Disable</el-button> -->
            <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          {{$t("switchenable.button")}}
        </el-button>
      </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
        <el-pagination
          :background="true"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="pageCount"
          :current-page="currentPage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total_nums"
        ></el-pagination>
      </div>
        </el-card>
        <!-- <el-dialog title="Enable Switch" :visible.sync="dialogVisible" width="30%">
          <span>Are you sure you want to disable switching for "user"</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">OK</el-button>
          </span>
        </el-dialog> -->
      </div>
    </div>
</template>

<script>
import { get } from '@/common/request'

export default {
  name: 'SwitchId',
  data () {
    return {
      tableData: [],
      dialogVisible: false,
      input: '',
      irrole: this.$Utils.irrole,
      currentPage: 1,
      pageCount: 5,
      total_nums: 0,
      addIdForm: {
        input: ''
      },
      rules: {
        input: [
          { required: true, message: 'Please enter the userid', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async handleCurrentChange (val) {
      this.currentPage = val
      this.loading = true
      setTimeout(() => {
        this.showUserList(this.currentPage, this.pageCount)
        this.loading = false
      }, 300)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageCount = val
      this.loading = true
      setTimeout(() => {
        this.showUserList(this.currentPage, this.pageCount)
        this.loading = false
      }, 300)
    },
    async showUserList (start, count) {
      const result = await get('/swich/list',
        {
          offset: start,
          limit: count
        })
      this.total_nums = result.data.total
      this.tableData = result.data.userList
      console.log(result.data)
    },
    // submit
    submit () {
      console.log('----submit start---')
      this.$refs['addIdForm'].validate((valid) => {
        if (valid) {
          this.addUserId()
        } else {
          console.log('error submit!!')
          return false
        }
      })
      console.log('----submit end  ---')
    },
    async addUserId () {
      console.log(this.addIdForm.input)
      const res = await get(`/swich/add/${this.addIdForm.input}`)
      console.log(res)
      if (res.status === 200) {
        // OK
        this.$message({
          message: 'Enable Successfully!',
          type: 'success'
        })
        this.showUserList(this.currentPage, this.pageCount)
      } else if (res.status === 8001) {
        // Invalid user id
        this.$message.error(this.addIdForm.input + ' ' + this.$i18n.t('switch.err.notexist'))
      } else if (res.status === 8002) {
        // No registration found in OSOL
        this.$message.error(this.addIdForm.input + ' ' + this.$i18n.t('switch.err.notregistered'))
      } else if (res.status === 8003) {
        // Switch already enabled
        this.$message.error(this.addIdForm.input + ' ' + this.$i18n.t('switch.err.enabled'))
      } else if (res.status === 8004) {
        // Switch is not active
        this.$message.error(this.addIdForm.input + ' ' + this.$i18n.t('switch.err.notactive'))
      } else if (res.status === 8005) {
        // Switch already enabled
        this.$message.error(this.addIdForm.input + ' ' + res.msg)
      }
    },
    // disabled
    deleteRow (index, tableData) {
      console.log(index)
      console.log(tableData[index].ibmuniqueid)
      const alertContent = this.$i18n.t('switch.err.disableswitch') + tableData[index].firstname
      const alertTitle = this.$i18n.t('AM006.label.linkDescription.AM036.3')
      this.$confirm(alertContent, alertTitle, {
        confirmButtonText: this.$i18n.t('message.yes'),
        cancelButtonText: this.$i18n.t('message.no')
      }).then(async () => {
        // const base64Input = this.Base64.encode(tableData[index].ibmuniqueid)
        const res = await get(`/swich/remove/${tableData[index].ibmuniqueid}`)
        console.log('status', res.status)
        if (res.status === 200) {
          tableData.splice(index, 1)
          this.showUserList(this.currentPage, this.pageCount)
          this.$message({ message: 'Disable Successfully!', type: 'success' })
        }
      }).catch(() => {
      })
    }
  },
  created: function () {
    console.log('------created start-------')
    this.showUserList(this.currentPage, this.pageCount)
    console.log('------created   end-------')
  }
}
</script>
<style scoped lang="scss">
.edit-container {
  margin: 0 0 0 10px;
  padding: 0 2% 2% 1%;
}
.hide{
    display:none;
}
.el-main {
  font-size: 1.3vw;
}
.el-button {
  margin-right: 10%;
  width: 15%;
}
.el-row {
  margin-top: 2%;
  /* border-radius: 30px; */
}

.el-col {
  border-radius: 2%;
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
.el-pagination {
  padding: 2% 0 !important;
}
</style>
