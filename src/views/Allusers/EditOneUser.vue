<template>
  <div class="edit-container">
    <el-row>
      <p class="ibm-h2 ibm-bold">{{$t('AM006.label.finduser')}}</p>
    </el-row>

    <el-row class="edit-title">
      <el-col class="osam-page-subtitle" :span="24">
        <div class="grid-content ibm-font ibm-bold">Profile information</div>
      </el-col>
    </el-row>

    <el-card class="osam-page-el-card" shadow="hover">
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">Name:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{fullname}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">Telephone:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{oneuser.iruser.phone}}</div>
        </el-col>
        <!-- <el-col class="row-field" :span="19" prop="email" label="E-mail"><div class="border"></div></el-col> -->
      </el-row>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">E-mail:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{oneuser.iruser.email}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">Company:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{oneuser.iruser.company}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">Address:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{oneuser.iruser.address}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">City:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{oneuser.iruser.city}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">State/Province:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{oneuser.iruser.state}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">Country:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{oneuser.iruser.country}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">Status:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{statusMap[oneuser.iruser.status]}}</div>
        </el-col>
      </el-row>
    </el-card>
    <!-- profile finished -->
    <el-row v-if="authRender">
      <AuthorizationUpdate v-bind:authoData="oneuser" @authoUpdateData="authoUpdateData" :pageType="pageType"></AuthorizationUpdate>
    </el-row>

    <el-row v-if="attrShow">
      <attribute-info :attData="oneuser" :pageType="pageType" @attUpdateData="attUpdateData"></attribute-info>
    </el-row>

    <el-row v-if="emailShow">
      <email-admin :value="oneuser" :pageType="pageType"></email-admin>
    </el-row>

    <el-row v-if="entitShow">
      <entitlement-update :value="oneuser" :pageType="pageType"></entitlement-update>
    </el-row>

    <el-row :gutter="24" class="btn-container" type="flex" justify="space-between">
      <el-button class="button" @click.native.prevent="deleteReq" type="primary">Delete</el-button>
      <el-button
        class="button"
        type="primary"
        @click.native.prevent="handleDelete"
      >{{$t("edit.button.revoke")}}</el-button>
    </el-row>

    <el-dialog :visible.sync="deldialogVisible">
      <div>Do you confirm to delete this requirement?</div>
      <br />
      <br />
      <el-button @click="deldialogVisible = false">cancel</el-button>
      <el-button type="primary" @click="confirmDelete()">confirm</el-button>
    </el-dialog>
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
// import GeoAttr from '../../components/GeoAttr.vue'
import { get } from '../../common/request'
import { mapGetters } from 'vuex'
import EmailAdmin from '../../components/EmailAdmin'
import EntitlementUpdate from '../../components/EntilmentUpdate.vue'
import AuthorizationUpdate from '../../components/AuthorizationUpdate'
import AttributesInfo from '../../components/AttributesInfo'
export default {
  name: 'EditOneUser',
  components: {
    'entitlement-update': EntitlementUpdate,
    'email-admin': EmailAdmin,
    AuthorizationUpdate: AuthorizationUpdate,
    'attribute-info': AttributesInfo
  },
  data () {
    return {
      pageType: 'EditOneUser',
      dialogVisible: false,
      deldialogVisible: false,
      attrShow: false,
      authRender: false,
      emailShow: false,
      entitShow: false,
      oneuser: {
        iruser: {
          city: '',
          country: '',
          email: '',
          firstname: '',
          ibmuniqueid: '',
          jobtitle: '',
          lastname: '',
          phone: '',
          state: '',
          status: '',
          street1: '',
          street2: '',
          userid: '',
          zipcode: ''
        },
        attributes: {},
        entitlement: [],
        authorization: {},
        emaildomains: []
      },
      statusMap: {
        0: 'INACTIVE',
        1: 'ACTIVE'
      }
    }
  },
  mounted () {
    // this.getOneIruser()
  },
  async created () {
    this.init()
  },
  computed: {
    ...mapGetters({
      currUser: 'currUser'
    }),
    fullname: function () {
      return this.oneuser.iruser.firstname + this.oneuser.iruser.lastname
    }
  },
  methods: {
    deleteReq () {
      this.deldialogVisible = true
    },
    authoUpdateData (data) {
      console.log('authoUpdateData111', data)
      this.oneuser = {}
      this.oneuser = data
    },
    attUpdateData (data) {
      this.oneuser.attributes = data.attributes
    },
    async init () {
      const id = this.$route.query.userid
      const res = await get('/user/profile/' + id)
      this.oneuser = res.data
      console.log('editoneuser的Curruser', this.currUser.authorization.roleid)
      if (this.oneuser.attributes) this.attrShow = true
      if (this.oneuser.authorization) this.authRender = true
      if (this.oneuser.emaildomains && this.oneuser.emaildomains.length > 0) { this.emailShow = true }
      if (this.oneuser.entitlement && this.oneuser.entitlement.length > 0) { this.entitShow = true }
    },
    handleDelete () {
      this.dialogVisible = true
    },
    async confirmDelete () {
      const result = await get(`/manage/user/delete/${this.oneuser.iruser.ibmuniqueid}`)
      if (result.msg) {
        this.$message(result.msg)
        this.$router.push({ path: '/allusers' })
      }
      this.deldialogVisible = false
    },
    async confirmRevoke () {
      const result = await get(
        `/manage/user/revoke/${this.oneuser.iruser.ibmuniqueid}`
      )
      this.$message(`Revoke user ${this.oneuser.iruser.userid} successfully!`)
      this.dialogVisible = false
      console.log('Revoke user successfully!', result)
    }
  }
}
</script>
<style scoped lang="scss">
$left:10px !default;
.edit-container {
  margin: 0 0 0 left;
  padding: 0 2% 2% 1%;
  // background-color: aqua;
}
.el-header {
  color: #333;
  text-align: left;
  line-height: 400% !important;
  height: 12% !important;
}

.edit-title {
  margin: 2% 0 0 0;
}
.edit-iruser-card {
  margin: 10px 0 0 0;
}
.btn-container{
  margin: 20px 0px 0 5px !important;
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
  vertical-align: center;
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
  font-size: 1.15rem;
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
  width: 14%;
  float: right;
}
.updatebutton {
  text-align: center !important;
}
.el-card__body {
  padding: 0 !important;
}

/* .dialog-footer {
  background-color: #333;
} */
.dialog-footer .el-button {
  /* background-color: #333; */
  padding: 8px 12px;
}
</style>
