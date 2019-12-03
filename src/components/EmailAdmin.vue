<template>
  <div class="entitlement-container" v-show="value.emaildomains[0]&&
  value.authorization.roleid === 29">
    <el-row class="email-title" >
      <el-col class="osam-page-subtitle" :span="24">
        <div class="grid-content ibm-font ibm-bold">Email Domains</div>
      </el-col>
    </el-row>
    <el-card class="osam-page-el-card" shadow="hover">
      <el-row>
          <el-col class="row-title" :span="5">
            <div class="border">Email Domain:</div>
          </el-col>
          <el-col class="row-field" :span="19">
            <div class="border">{{emailDomain}}</div>
          </el-col>
        </el-row>
        <el-row v-if="externalAdmin&&requestEditable" type="flex" justify="end">
          <el-link type="primary" icon="el-icon-edit" @click="editEmailAdmin">Modify Email Domain</el-link>
        </el-row>
        <div v-if="dialogVisible">
          <el-dialog :visible.sync="dialogVisible" center>
            <span slot="title">Email Domains</span>
            <div>
              <span>Please enter the email domains</span>
              <br />
              <span>(To enter multiple domains, separate them by commas)</span>
              <br />
              <br />
            </div>
            <el-form :model="emailForm" :rules="rules" ref="emailForm">
              <el-form-item label="Domains:" prop="inputVal">
                <el-input type="textarea" :rows="2" v-model="emailForm.inputVal"></el-input>
              </el-form-item>
              <br />
              <br />
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="update()">Update</el-button>
            </span>
          </el-dialog>
        </div>
    </el-card>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { post } from '../common/request'
import { role } from '../common/enum'

export default {
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    pageType: {
      type: String,
      default: () => {}
    }
  },
  data () {
    return {
      opIui: '',
      emailDomain: '',
      dialogVisible: false,
      emailForm: {
        inputVal: ''
      },
      inputDisable: true,
      rules: {
        inputVal: [
          { required: true, message: 'Email domain cannot be null!', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      currUser: 'currUser'
    }),
    externalAdmin () {
      if (this.value.authorization.roleid === role.EXTERNALADMIN &&
        (this.currUser.authorization.roleid === role.CUSTOMERSUPPORT ||
        this.currUser.authorization.roleid === role.AMOWNER)) {
        return true
      }
      return false
    },
    requestEditable () {
      if (this.value.entitlementrequest && this.value.entitlementrequest.status === 4) {
        return true
      } else {
        if (this.pageType === 'RequestDetail') {
          return false
        } else {
          return true
        }
      }
    }
  },
  created () {
    this.init(this.value)
  },
  mounted () {},
  watch: {
    value: {
      deep: true,
      handler (nv, ov) {
        this.init(nv)
      }
    }
  },
  methods: {
    init (user) {
      console.log('emaildomain init', user.emaildomains)
      if (user.emaildomains) {
        this.opIui = user.iruser.ibmuniqueid
        this.emailDomain = user.emaildomains.join(',')
      }
    },
    editEmailAdmin () {
      this.dialogVisible = true
      this.emailForm.inputVal = this.emailDomain
    },
    update () {
      const curIui = this.currUser.iruser.ibmuniqueid
      let postData = {}
      let url = ''
      this.$refs.emailForm.validate(async valid => {
        if (valid) {
          this.emailDomain = this.emailForm.inputVal
          postData.emaildomains = this.emailDomain.trim().split(',')
          if (this.value.entitlementrequest && this.value.entitlementrequest.status === 4) {
            url = '/manage/request/update/emaildomains'
            postData.entitlementrequest = {
              id: this.value.entitlementrequest.id,
              creatoribmuniqueid: this.opIui,
              processoribmuniqueid: curIui
            }
          } else {
            url = `/manage/request/update/emaildomains/${curIui}/${this.opIui}`
          }

          const result = await post(url, postData)
          this.$message({
            showClose: true,
            message: result.msg,
            type: 'success'
          })
          this.dialogVisible = false
        }
      })
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.el-container {
  background-color: #fafcfd;
}

.email-title {
  margin: 20px 0 30px;
}
.el-header {
  color: #333;
  text-align: left;
  line-height: 400% !important;
  height: 12% !important;
}
.big-title {
  text-align: left;
  font-size: 2.5vw;
  font-family: bold !important;
}
.small-title {
  font-size: 1.2vw;
}
.row {
  margin-bottom: 1% !important;
  padding: 2% 2% 0 2% !important;
}
.el-row {
  margin-bottom: 0;
  padding: 0;
  text-align: left;
}
.col {
  border-radius: 2%;
}
.el-col {
  border-radius: 0;
  padding: 0 !important;
  text-align: left;
}
.row-title {
  font-size: 1.1vw;
  font-weight: bold;
  line-height: 200%;
}
.row-field {
  font-size: 1.1vw;
  line-height: 200%;
  /* font-family: bold; */
  /* font-weight: bold; */
}
.el-main {
  padding: 0% 2% !important;
}
.bg-purple-dark {
  font-family: bold !important;
  line-height: 180% !important;
  font-size: 1vw !important;
  background-color: #e5e9f2 !important;
  padding: 0 !important;
  /* box-shadow: 0 2px 4px #9693c5, 0 0 6px #9693c5 */
}
.grid-content {
  /* border-radius: 4px !important; */
  min-height: 90% !important;
  text-align: left;
}

/* .el-button{ */
/* text-align: center !important; */
/* background-color: #99a9bf; */
/* border-color: #99a9bf; */
/* color: #333 !important; */
/* padding: 1% 1% */
/* } */
.card-content {
  /* min-height: 90% !important; */
  text-align: center;
  padding-left: 0 !important;
  padding-right: 0 !important;
  /* font-size: 1vw */
}
.card-bg {
  font-family: bold !important;
  /* line-height: 180% !important; */
  /* font-size: 1vw !important; */
  background-color: #e5e9f2 !important;
}
.bg-purple-dark {
  font-family: bold !important;
  line-height: 180% !important;
  font-size: 1vw !important;
  background-color: #e5e9f2 !important;
  padding: 0 !important;
  /* box-shadow: 0 2px 4px #9693c5, 0 0 6px #9693c5 */
}
.grid-content {
  /* border-radius: 4px !important; */
  min-height: 90% !important;
  text-align: left;
  font-size: 1.15rem;
}
.card-content {
  /* min-height: 90% !important; */
  text-align: center;
  padding-left: 0 !important;
  padding-right: 0 !important;
  /* font-size: 1vw */
}
.card-bg {
  font-family: bold !important;
  /* line-height: 180% !important; */
  /* font-size: 1vw !important; */
  background-color: #e5e9f2 !important;
}
.el-card {
  text-align: center;
  padding: 0 !important;
}
.button {
  float: right;
}
.updatebutton {
  text-align: center !important;
}
.el-card__body {
  padding: 0 !important;
}
.el-button {
  margin-top: 1%;
  padding: 10px 18px;
}
.el-button.is-round {
  padding: 9px 13px;
}

.dialog-footer .el-button {
  /* background-color: #333; */
  padding: 8px 12px;
}
</style>
