<template>
  <div class="edit-container">
    <el-row v-if="oneuser.entitlementrequest.status===4">
      <p class="ibm-h2 ibm-bold">
        {{$t('osiam.subtitle.review')}}
      </p>
      <p>
        {{$t('approve.newrequestpage')}}
      </p>
    </el-row>
    <el-row v-else>
      <p class="ibm-h2 ibm-bold">
       {{$t('osiam.subtitle.review')}}
      </p>
      <p>
        {{$t('approve.alreadyprocessed2')}}
      </p>
    </el-row>
    <div v-if="showPage">
      <!-- Profile information start -->
      <!-- <el-alert :title="$t('approve.newrequestpage')" type="success" :closable="false"></el-alert> -->
      <el-row class="ibm-font">
        <el-col class="osam-page-subtitle" :span="24">
          <div class="grid-content ibm-font ibm-bold">{{$t('AM009.subtitle1')}}</div>
        </el-col>
      </el-row>
      <!-- Profile -->
      <el-card class="osam-page-el-card" shadow="hover">
        <!-- name -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.name')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{oneuser.iruser.firstname + ' ' + oneuser.iruser.lastname}}</div>
          </el-col>
        </el-row>
        <!-- telephone -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.telephone')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{oneuser.iruser.phone}}</div>
          </el-col>
          <!-- <el-col class="row-field" :span="19" prop="email" label="E-mail"><div class="border"></div></el-col> -->
        </el-row>
        <!-- Email -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.email')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{oneuser.iruser.email}}</div>
          </el-col>
        </el-row>

        <!-- Company -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.company')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{oneuser.iruser.company}}</div>
          </el-col>
        </el-row>
        <!-- Address -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.address')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{oneuser.iruser.address}}</div>
          </el-col>
        </el-row>
        <!-- City -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.city')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{oneuser.iruser.city}}</div>
          </el-col>
        </el-row>
        <!-- Postal Code: -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('register.postalcode')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{oneuser.iruser.zipcode}}</div>
          </el-col>
        </el-row>
        <!-- State/Province: -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.state_province')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{oneuser.iruser.state}}</div>
          </el-col>
        </el-row>
        <!-- Country: -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.country')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{oneuser.iruser.country}}</div>
          </el-col>
        </el-row>

        <!-- Status: -->
        <el-row v-if="oneuser.iruser.status">
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('common.status')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{$t('edit.status.active')}}</div>
          </el-col>
        </el-row>
      </el-card><!-- Profile information end -->
      <!-- Entitlement Reqeust start -->
      <el-row class="ibm-font"  style=" padding-top:2%;">
        <el-col class="osam-page-subtitle" :span="24">
          <div class="grid-content ibm-font ibm-bold">{{$t('approval.entitlement.request')}}</div>
        </el-col>
      </el-row>
      <el-card class="osam-page-el-card" shadow="hover">
        <!-- name -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('approve.field.requestnumber')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
             <div class="border">{{oneuser.entitlementrequest.id}}</div>
          </el-col>
        </el-row>

        <!-- status -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('approve.field.requeststatus')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
             <div class="border">{{erstatus[oneuser.entitlementrequest.status]}}</div>
          </el-col>
        </el-row>
      </el-card>
      <!-- Entitlement Reqeust end -->
      <!-- <el-row class="row">
      <el-col class="col" :span="24">
        <div class="grid-content bg-purple-dark">{{$t('approval.entitlement.request')}}</div>
      </el-col>
    </el-row>
    <el-main>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">{{$t('approve.field.requestnumber')}}:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{oneuser.entitlementrequest.id}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">{{$t('approve.field.requeststatus')}}:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{oneuser.entitlementrequest.status}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">{{$t('approve.field.application')}}:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{appList[oneuser.authorization.applicationid].name}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">{{$t('approve.field.requestedrole')}}:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{roleList[oneuser.authorization.roleid].name}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">Headquarters in:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{oneuser.authorization.headquarter}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="row-title" :span="6">
          <div class="border">IBM Business Partner:</div>
        </el-col>
        <el-col class="row-field" :span="18">
          <div class="border">{{oneuser.authorization.businesspartner}}</div>
        </el-col>
      </el-row>
      </el-main>-->
      <!-- Authorization start -->
      <div v-if="showPage">
        <AuthorizationUpdate v-bind:authoData="authoData" @authoUpdateData="authoUpdateData" :pageType="pageType"></AuthorizationUpdate>
      </div>
      <!-- Authorization end -->
      <!-- Attribute information start  -->
      <div v-if="showAttr">
      <AttributesInfo v-bind:attData="attData" @attUpdateData="attUpdateData" :pageType="pageType"></AttributesInfo>
      </div>
      <!-- Email Domain start -->
      <email-admin :value="attData" :pageType="pageType"></email-admin>
      <!-- Email Domain end -->
      <!-- Entitlement request start -->
    <div v-if="showPage">
      <entitlement-update :value="attData" :pageType="pageType"></entitlement-update>
    </div>
      <!-- Entitlement request end -->
      <!-- Attribute information end -->
      <br />
      <el-row v-if="oneuser.entitlementrequest.status===4" :gutter="24" class="btn-container" type="flex" justify="space-between" style="padding:0 10px 0% 10px;">
          <el-button type="primary" @click="approveRequest" :disabled="isDisabled">{{$t('approve.button.approverequest')}}</el-button>
          <el-button type="primary" @click="denyRequest" :disabled="isDisabled">{{$t('approve.denyrequest')}}</el-button>
      </el-row>
      <!-- approve comment -->
      <el-dialog :title="$t('approve.button.approverequest')" :visible.sync="approveDialogVisible">
        <p>{{$t('approve.confirmapproval')}}</p>
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('approve.reason')}}{{$t('approval.reason.optional')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <el-input
              type="textarea"
              v-model="requestData.entitlementrequest.processcomment"
              :rows="3"
              :placeholder="$t('message.label.comments')"
            ></el-input>
          </el-col>
        </el-row>
        <br />
        <el-row>
          <el-button
            type="primary"
            style="float:right"
            @click="finalApprove"
          >{{$t('approve.button.approverequest')}}</el-button>
        </el-row>
      </el-dialog>
      <!-- deny comment -->
      <el-dialog :title="$t('approve.denyrequest')" :visible.sync="denyDialogVisible">
        <p>{{$t('approve.confirmdeny')}}</p>
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('approve.reason')}}{{$t('approval.reason.optional')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <el-input
              type="textarea"
              v-model="requestData.entitlementrequest.processcomment"
              :rows="3"
              :placeholder="$t('message.label.comments')"
            ></el-input>
          </el-col>
        </el-row>
        <br />
        <el-row>
          <el-button
            type="primary"
            style="float:right"
            @click="finalDeny"
          >{{$t('approve.denyrequest')}}</el-button>
        </el-row>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import AttributesInfo from '../../components/AttributesInfo'
import EmailAdmin from '../../components/EmailAdmin'
import EntitlementUpdate from '../../components/EntilmentUpdate'
import AuthorizationUpdate from '../../components/AuthorizationUpdate'
import { post, get } from '../../common/request'
export default {
  name: 'RequestDetail',
  components: {
    AttributesInfo: AttributesInfo,
    'email-admin': EmailAdmin,
    'entitlement-update': EntitlementUpdate,
    AuthorizationUpdate: AuthorizationUpdate
  },
  data () {
    return {
      pageType: 'RequestDetail',
      isDisabled: false,
      showAttr: false,
      showPage: false,
      accesstype: this.$Utils.usage,
      relationship: this.$Utils.relationship,
      price: this.$Utils.price,
      federal: this.$Utils.federal,
      segment: this.$Utils.segment,
      appList: this.$Utils.application,
      roleList: this.$Utils.irrole,
      erstatus: this.$Utils.erstatus,
      authoData: {
        iruser: {},
        attributes: {},
        entitlement: [],
        authorization: {},
        emailDomain: []
      },
      oneuser: {
        iruser: {
          firstname: '',
          lastname: '',
          jobtitle: '',
          company: '',
          email: '',
          phone: '',
          street1: '',
          street2: '',
          city: '',
          state: '',
          zipcode: '',
          country: '',
          status: 0,
          ibmuniqueid: ''
        },
        entitlementrequest: {
          id: '',
          status: 0,
          processtimestamp: '',
          processoremail: ''
        },
        authorization: {
          applicationid: '',
          internal: '',
          roleid: ''
        },
        entitlement: []
      },
      attData: {
        iruser: {},
        attributes: {},
        entitlement: [],
        authorization: {},
        emailDomain: []
      },
      approveDialogVisible: false,
      denyDialogVisible: false,
      requestData: {
        entitlementrequest: {
          id: '',
          creatoribmuniqueid: '',
          processoribmuniqueid: '',
          processcomment: ''
        }
      }
    }
  },
  async mounted () {
    this.init()
  },
  methods: {
    async init () {
      const queryId = this.$route.query.queryId
      await get(`/request/detail/${queryId}`).then(res => {
        this.oneuser = res.data
        this.attData = res.data
        this.authoData = res.data
        console.log('requestDetail this.attData', this.attData)
        this.showPage = true
        // AppViewer&AppUser will show&update attributes section
        console.log('detail roleid', res.data.authorization.roleid)
        if (res.data.authorization.roleid === 17 || res.data.authorization.roleid === 16) {
          this.showAttr = true
        }
      })
    },
    attUpdateData (data) {
      this.attData.attributes = data.attributes
    },
    authoUpdateData (data) {
      console.log('request detail', data)
      this.authoData = data
    },
    approveRequest () {
      this.approveDialogVisible = true
    },
    denyRequest () {
      this.denyDialogVisible = true
    },
    async finalApprove () {
      this.requestData.entitlementrequest.id = this.oneuser.entitlementrequest.id
      this.requestData.entitlementrequest.creatoribmuniqueid = this.oneuser.iruser.ibmuniqueid
      this.requestData.entitlementrequest.processoribmuniqueid = this.$store.getters.ibmUniqueId
      const result = await post(`/manage/request/approve`, this.requestData)
      if (result.status === 200) {
        this.init()
        this.approveDialogVisible = false
        this.isDisabled = true
        this.$router.push({
          path: '/editoneuser',
          query: { userid: this.oneuser.iruser.ibmuniqueid }
        })
      } else if (result.status === 500) {
        this.$message.error(
          `Failed to approve request: ${this.oneuser.entitlementrequest.id}`
        )
      } else {
        this.$message.error(result.msg)
        this.approveDialogVisible = false
      }
    },
    async finalDeny () {
      this.requestData.entitlementrequest.id = this.oneuser.entitlementrequest.id
      this.requestData.entitlementrequest.creatoribmuniqueid = this.oneuser.iruser.ibmuniqueid
      this.requestData.entitlementrequest.processoribmuniqueid = this.$store.getters.ibmUniqueId
      const result = await post(`/manage/request/deny`, this.requestData)
      if (result.status === 200) {
        this.init()
        this.denyDialogVisible = false
        this.isDisabled = true
      } else if (result.status === 500) {
        this.$message.error(
          `Failed to deny request: ${this.oneuser.entitlementrequest.id}`
        )
      }
    }
  }
}
</script>
<style scoped lang="scss">
.edit-container {
  margin: 0 0 0 10px;
  padding: 0 2% 2% 1%;
  // background-color: aqua;
}
.el-header {
  color: #333;
  text-align: left;
  line-height: 400% !important;
  height: 12% !important;
}
.row {
  margin-bottom: 1% !important;
  padding: 2% 2% 0 2% !important;
}

.profile-el-row {
  padding-left: 4%;
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
.key-disp {
  font-size: 1.3vw;;
  font-family: bold !important;
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
/*
.dialog-footer {
  /* background-color: #333; */

.dialog-footer .el-button {
  /* background-color: #333; */
  padding: 8px 12px;
}
</style>
