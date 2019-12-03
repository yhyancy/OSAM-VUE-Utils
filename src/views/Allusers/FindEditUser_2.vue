<template>
  <div class="find-edit-container">
    <el-row class="eidt-header">
      <div class="ibm-h2 ibm-bold">{{$t('AM006.label.finduser')}}</div>
    </el-row>

    <el-row class="filter-container">
      <div class="grid-content ibm-font ibm-bold">Search for user profile information</div>
    </el-row>

    <el-card class="osam-page-el-card" shadow="hover">
      <el-row>
        <el-form
          :inline="true"
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          style="width: 100%"
          label-position="top"
        >
          <el-row class="const-role">
            <el-form-item prop="firstname" label=" User first name:" size="small">
              <el-input v-model="ruleForm.firstname"></el-input>
            </el-form-item>
            <el-form-item prop="lastname" label="User last name:" size="small">
              <el-input v-model="ruleForm.lastname"></el-input>
            </el-form-item>
            <el-form-item prop="company" label="Company name:" size="small">
              <el-input v-model="ruleForm.company"></el-input>
            </el-form-item>
            <el-form-item prop="email" label="E-mail address:" size="small">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item prop="phone" label="Telephone number:" size="small">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </el-row>
          <el-row class="async-role">
            <el-form-item prop="applicationid" label="Application:" size="small">
              <el-select
                v-model="ruleForm.applicationid"
                @change="handleAppChange"
                clearable
                placeholder
              >
                <el-option
                  v-for="item in appOptions"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="roleid" label="Role:" size="small">
              <el-select v-model="ruleForm.roleid" v-bind:disabled="isAble" @change="handleRoleChange" clearable placeholder>
                <el-option
                  v-for="item in roleOptions"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              prop="relationship"
              label="Type:"
              v-if="ruleForm.roleid === 20"
              size="small"
            >
              <el-select v-model="ruleForm.csoid" clearable label="Type:">
                <el-option
                  v-for="item in CenterCoordinator"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              prop="relationship"
              v-if="ruleForm.roleid === 16"
              label="Please select an account type"
              size="small"
            >
              <el-select v-model="ruleForm.relationship" clearable placeholder>
                <el-option
                  v-for="item in AppUser"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              prop="relationship"
              v-if="ruleForm.roleid === 17"
              label="Please select an account type:"
              size="small"
            >
              <el-select v-model="ruleForm.relationship" clearable placeholder>
                <el-option
                  v-for="item in AppViewer"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-row>
        </el-form>
      </el-row>

      <el-row class="btn-container" type="flex" justify="end">
        <!-- <el-col> -->
        <el-button
          class="filter-item"
          type="primary"
          icon="el-icon-search"
          @click="handleFilter"
        >Search</el-button>
        <!-- </el-col>
        <el-col>-->
        <el-button class="filter-item" type="primary" @click="resetForm('ruleForm')">Clear form</el-button>
        <!-- </el-col> -->
      </el-row>
    </el-card>
    <br />
    <br />
    <el-card class="osam-page-el-card" shadow="hover" v-if="total_nums > 0 && dataReady">
      <el-table :data="userlist" height="380" v-loading="loading"
       header-align="center"
       :row-style="rowStyle">
        <el-table-column  prop="fullName" label="Name" width="80"></el-table-column>
        <el-table-column prop="userid" label="Ibmid" align="center" header-align="center" ></el-table-column>
        <el-table-column prop="email" label="E-mail" align="center" header-align="center" ></el-table-column>
        <el-table-column prop="company" label="Company" align="center" header-align="center" ></el-table-column>
        <el-table-column prop="country" label="Country" align="center" header-align="center" ></el-table-column>
        <el-table-column prop="phone" label="Telephone" align="center" header-align="center" ></el-table-column>
        <el-table-column prop="displayRoleid" label="Role" align="center"  header-align="center" ></el-table-column>
        <el-table-column prop="displayStatus" label="Status" align="center" header-align="center" ></el-table-column>
        <el-table-column prop="displayCsoid" label="Cso" align="center" header-align="center" ></el-table-column>
        <el-table-column prop="ibmuniqueid" align="center" header-align="center" label="Action" width="80">
          <template slot-scope="scope">
            <el-row type="flex" justify="center">
              <el-button
                icon="el-icon-edit"
                @click.native.prevent="editRow(scope.$index, userlist)"
                type="text"
                size="medium"
              ></el-button>

              <el-button
                icon="el-icon-delete"
                @click.native.prevent="deleteRow(scope.$index, userlist)"
                type="text"
                size="medium"
              ></el-button>
            </el-row>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          :background="true"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[20, 30, 40, 50]"
          :page-size="pageCount"
          :current-page="currentPage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total_nums"
        ></el-pagination>
      </div>
    </el-card>

    <el-dialog :visible.sync="dialogVisible">
      <div>Do you confirm to revoke this user?</div>
      <br />
      <br />
      <el-button @click="dialogVisible = false">cancel</el-button>
      <el-button type="primary" @click="confirmRevoke()">confirm</el-button>
    </el-dialog>
  </div>
</template>

<script>
import { role } from '../../common/enum'
import { get, post } from '../../common/request'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {},
  data () {
    return {
      isPaging: false,
      dialogVisible: false,
      isAble: true,
      revokeIndex: 0,
      roleMap: {
        17: 'App Viewer',
        18: 'App Owner',
        22: 'AM Owner',
        28: 'Entitlement Manager',
        20: 'Center Coordinator',
        21: 'Customer Support',
        16: 'App User',
        29: 'External Admin'
      },
      statusMap: {
        0: 'INACTIVE',
        1: 'ACTIVE'
      },
      csoMap: {
        24: 'Business Partners',
        25: 'Commercial/State and Local',
        26: 'Federal Government',
        30: 'Lenovo'
      },
      dataReady: false,
      loading: false,
      ruleForm: {
        firstname: '',
        lastname: '',
        company: '',
        email: '',
        phone: '',
        applicationid: '',
        roleid: '',
        relationship: '',
        csoid: ''
      },
      appOptions: [],
      roleOptions: [],
      allRoleOptions: {
        osol: [],
        AuthorizationManager: []
      },
      CenterCoordinator: [],
      allCenterCoordinator: [],
      AppUser: [],
      allAppUser: [],
      AppViewer: [],
      allAppViewer: [],
      currentPage: 1,
      pageCount: 20,
      // 等后端修改
      total_nums: 10,
      userlist: [],
      rules: {
        lastname: [
          {
            required: true,
            message: 'Please input your last name',
            trigger: 'blur'
          }
        ],
        email: [
          {
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      currUserList: 'currUserList',
      currUser: 'currUser'
    })
  },
  async created () {
    this._findEditUserinit()
  },
  mounted () {},
  watch: {},
  methods: {
    ...mapActions(['setCurrUserList', 'removeCurrUserList']),
    rowStyle (row, rowIndex) {
      return 'font-size: 0.75rem !important;'
    },

    cellStyle (row, rowIndex) {
      return 'background:red;'
    },
    async _findEditUserinit () {
      this._readSetting(this.appOptions, this.$Utils.application)
      this._readSetting([], this.$Utils.irrole, true)
      this._readSetting(this.allCenterCoordinator, this.$Utils.csocenter, false, true)
      this._readSetting(this.allAppViewer, this.$Utils.relation)
      let tempArr = Object.assign([], this.allAppViewer)
      tempArr.pop()
      this.allAppUser = tempArr
      // this._getTableData(this.currentPage, this.pageCount, initForm)
      console.log('findedituser的Curruser', this.currUser.authorization.roleid)
    },
    /**
     * 从setting中读取并组织当前组件的数组
     */
    _readSetting (arr, obj, roleFlag = false, csoFlag = false) {
      if (roleFlag) {
        for (let key in obj) {
          if (parseInt(key) <= role.APPOWNER) {
            this.allRoleOptions.osol.push(obj[key])
          } else {
            this.allRoleOptions.AuthorizationManager.push(obj[key])
          }
        }
      } else {
        for (let key in obj) {
          arr.push(obj[key])
        }
        if (csoFlag) {
          arr.push({ id: 30, name: 'Lenovo' })
        }
      }
    },
    handleFilter () {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          this._getTableData(this.currentPage, this.pageCount, this.ruleForm)
        }
      })
    },
    async _getTableData (start, count, data = {}) {
      let pageCon = {}
      if (this.isPaging) {
        pageCon = {
          offset: start,
          limit: count,
          paging: true
        }
      } else {
        pageCon = {
          offset: start,
          limit: count,
          paging: false
        }
      }
      const result = await post('/user/list', data, pageCon)
      this.total_nums = result.data.total || 20
      await this.setCurrUserList(result.data.userlist)
      if (result.data.userlist.length >= 0) {
        this.userlist = result.data.userlist
        this.dataReady = true
      }
      this.userlist.forEach(item => {
        item.fullName = `${item.firstname} ${item.lastname}`
        item.displayRoleid = this.roleMap[item.roleid]
        item.displayStatus = this.statusMap[item.status]
        item.displayCsoid = this.csoMap[item.csoid]
      })
      this.isPaging = false
    },
    handleAppChange (val) {
      if (val === 27) {
        this.roleOptions = this.allRoleOptions.osol
        this.ruleForm.roleid = ''
      } else if (val === 3) {
        this.roleOptions = this.allRoleOptions.AuthorizationManager
        this.ruleForm.roleid = ''
      } else {
        this.ruleForm.roleid = ''
        this.ruleForm.csoid = ''
        this.ruleForm.relationship = ''
      }
      if (val) {
        this.isAble = false
      } else {
        this.isAble = true
      }
    },
    async handleCurrentChange (val) {
      this.currentPage = val
      this.loading = true
      this.isPaging = true
      setTimeout(() => {
        this._getTableData(this.currentPage, this.pageCount, this.ruleForm)
        this.loading = false
      }, 300)
    },
    handleSizeChange (val) {
      this.pageCount = val
      this._getTableData(this.currentPage, this.pageCount, this.ruleForm)
    },
    handleRoleChange (val) {
      this.ruleForm.csoid = ''
      this.ruleForm.relationship = ''
      if (val === role.CENTERCOORDINATOR) {
        this.CenterCoordinator = this.allCenterCoordinator
      } else if (val === role.APPUSER) {
        this.AppUser = this.allAppUser
      } else if (val === role.APPVIEWER) {
        this.AppViewer = this.allAppViewer
      }
    },
    resetForm (ruleForm) {
      this.$refs[ruleForm].resetFields()
    },
    async editRow (index, userlist) {
      const entitlementrequestid = userlist[index].entitlementrequestid
      if (entitlementrequestid && entitlementrequestid !== 0) {
        this.$router.push({
          path: '/summaryRequestDetail',
          query: {
            queryId: entitlementrequestid
          }
        })
      } else {
        this.$router.push({
          path: '/editoneuser',
          query: {
            userid: userlist[index].ibmuniqueid
          }
        })
      }
    },
    deleteRow (index, userlist) {
      this.revokeIndex = 0
      this.revokeIndex = index
      this.dialogVisible = true
    },
    async confirmRevoke () {
      const result = await get(
        `/manage/user/revoke/${this.userlist[this.revokeIndex].ibmuniqueid}`
      )
      this.$message(
        `Revoke user ${this.userlist[this.revokeIndex].userid} successfully!`
      )
      this.dialogVisible = false
      console.log('Revoke user successfully!', result)
      this._getTableData(this.currentPage, this.pageCount, this.ruleForm)
    }
  }
}
</script>

<style scoped lang="scss">
.find-edit-container {
  margin: 0 0 0 10px;
  padding: 0 2% 2% 1%;
}
.eidt-header {
  margin: 15px 0 20px;
}
.filter-container {
  padding-bottom: 10px;

  .filter-item {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 10px;
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    margin: 20px;
  }
}

.el-pagination {
  padding: 2% 0 !important;
}

.const-role {
  display: flex;
  flex-direction: row;
}
</style>
