<template>
<!-- Attribute information start -->
<div>
    <el-row class="ibm-font" style="margin:2% 0 0 0;">
      <el-col class="osam-page-subtitle" :span="24">
        <div class="subtitle-content grid-content ibm-font ibm-bold">{{$t('section.attribinfo')}}</div>
      </el-col>
    </el-row>

    <el-card class="osam-page-el-card" shadow="hover">
        <!-- Access Type(usage) -->
        <el-row v-if="attData.authorization.roleid === 17 || attData.authorization.roleid === 16 ">
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.accesstype')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{accesstype[attData.attributes.usage]}}</div>
          </el-col>
        </el-row>
        <!-- Channels -->
        <!-- <el-row v-if="attData.authorization.roleid === 17 || attData.authorization.roleid === 16 ">
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.channels')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{channels[attData.attributes.channels]}}</div>
          </el-col>
        </el-row> -->
        <!-- Relationship -->
        <el-row v-if="attData.authorization.roleid === 17 || attData.authorization.roleid === 16 ">
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.relationship')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{relationship[attData.attributes.relationship]}}</div>
          </el-col>
        </el-row>
        <!-- orders(segment) -->
        <!-- <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.orders')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{segment[attData.attributes.segment]}}</div>
          </el-col>
        </el-row> -->
        <!-- price -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('register.field.optionaldetails.option1')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{price[attData.attributes.price]}}</div>
          </el-col>
        </el-row>
        <!-- federal -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('register.field.optionaldetails.option2')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{federal[attData.attributes.federal]}}</div>
          </el-col>
        </el-row>
        <!-- dataformat -->
        <el-row>
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.dateformat')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{attData.attributes.dateformat}}</div>
          </el-col>
        </el-row>
        <!-- hqcountry -->
        <!-- <el-row v-if="attData.authorization.roleid === 21 || attData.authorization.roleid === 20|| attData.authorization.roleid === 28||attData.authorization.roleid === 29 || attData.authorization.roleid === 17||attData.authorization.roleid === 16">
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.headquarters')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{this.formatCountry(attData.attributes.hqcountry)}}</div>
          </el-col>
        </el-row> -->
        <!-- cso center -->
        <!-- <el-row v-if="attData.authorization.roleid === 20 ">
          <el-col class="row-title" :span="6">
            <div class="border">{{$t('message.label.cso_center')}}:</div>
          </el-col>
          <el-col class="row-field" :span="18">
            <div class="border">{{attData.attributes.csoid===0?'':csocenter[attData.attributes.csoid].name}}</div>
          </el-col>
        </el-row> -->
        <!-- <div v-if="(appUser || appViewer)&&requestEditable"> -->
        <el-row  v-if="(appUser || appViewer)&&requestEditable" type="flex" justify="end">
        <el-link type="primary" icon="el-icon-edit" :underline="false" @click="editAtt">{{$t('message.modifyattrib')}}</el-link>
        </el-row>
    </el-card>
        <!-- </div> -->
        <!-- update dialog -->
        <el-dialog :title="$t('approve.updateattributes')" center :visible.sync="dialogVisible">
        <el-form ref="form" :model="formData.attributes" label-position="left" label-width="25%" label-height="5%" class="form-class">
          <!-- Access type -->
          <el-form-item :label="$t('message.label.accesstype')" v-if="attData.authorization.roleid === 17 || attData.authorization.roleid === 16 " >
            <el-select v-model="formData.attributes.usage" >
            <el-option v-for="(val,key) in accesstype" :key="key" :label="val" :value="key"></el-option>
          </el-select>
          </el-form-item>
          <!-- Channels -->
          <!-- <el-form-item :label="$t('message.label.channels')" v-if="attData.authorization.roleid === 17 || attData.authorization.roleid === 16 ">
            <el-select v-model="formData.attributes.channels" >
            <el-option v-for="(val,key) in channelsOptions" :key="key" :label="val" :value="key"></el-option>
          </el-select>
          </el-form-item> -->
          <!-- Relationship -->
          <el-form-item :label="$t('message.label.relationship')" v-if="attData.authorization.roleid === 17 || attData.authorization.roleid === 16 ">
            <el-select v-model="formData.attributes.relationship" >
              <el-option v-for="(val,key) in relationship" :key="key" :label="val" :value="key"></el-option>
            </el-select>
          </el-form-item>
          <!-- Optional details -->
          <el-form-item :label="$t('register.field.optionaldetails.value')">
            <el-checkbox v-model="formData.attributes.price" :label="$t('register.field.optionaldetails.option1')" true-label="Y" false-label="N"></el-checkbox>
            <el-checkbox v-model="formData.attributes.federal" :label="$t('register.field.optionaldetails.option2')" true-label="Y" false-label="N"></el-checkbox>
          </el-form-item>
          <!-- Dataformat -->
          <el-form-item :label="$t('register.field.dateformat')">
            <el-select v-model="formData.attributes.dateformat" >
              <el-option v-for="item in dateformat" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <!-- hqcountry -->
          <!-- <el-form-item :label="$t('message.label.headquarters')">
            <el-select v-model="country" multiple >
            <el-option v-for="item in ctryOptons" :key="item.countrycode" :label="item.countryname" :value="item.countrycode"></el-option>
          </el-select>
          </el-form-item> -->
          <!-- <el-form-item>
            <div style="float:right">
            <el-button type="primary" @click="attSave" >save</el-button>
            <el-button type="primary" @click="attCancel" >cancel</el-button>
            </div>
          </el-form-item> -->
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="attCancel">Cancel</el-button>
        <el-button type="primary" @click="attSave">Save</el-button>
      </span>
    </el-dialog>

 </div>
 <!-- Attribute information end -->
</template>

<script>
import { post } from '../common/request'
import { role } from '../common/enum'
export default {
  name: 'AttributesInfo',
  props: ['attData', 'pageType'],
  data () {
    return {
      accesstype: this.$Utils.usage,
      relationship: this.$Utils.relationship,
      price: this.$Utils.price,
      federal: this.$Utils.federal,
      segment: this.$Utils.segment,
      channels: this.$Utils.channels,
      channelsOptions: this.$Utils.channelsOptions,
      dateformat: this.$Utils.dateformat,
      csocenter: this.$Utils.csocenter,
      ctryOptons: this.$Utils.getCtryOptions(),
      dialogVisible: false,
      formData: {
        attributes: {
          usage: '',
          channels: '',
          dateformat: '',
          price: '',
          relationship: '',
          segment: '',
          federal: '',
          hqcountry: '',
          csoid: 0
        },
        entitlement: [],
        entitlementrequest: {},
        authorization: {}
      },
      country: []
    }
  },
  methods: {
    editAtt: function (val) {
      this.init()
      this.dialogVisible = true
    },
    async attSave () {
      // this.formData.attributes.hqcountry = this.country.join(',')
      if (this.formData.entitlementrequest && this.formData.entitlementrequest.status === 4) {
        this.formData.entitlementrequest.processoribmuniqueid = this.$store.getters.ibmUniqueId
        console.log('attributeformData', this.formData)
        const result = await post(`/manage/request/update/attributes`, this.formData)
        console.log('result status is 4', result)
        this.$emit('attUpdateData', this.formData)
        this.dialogVisible = false
      } else {
        if (this.pageType === 'RequestDetail') {
          this.formData.entitlementrequest.processoribmuniqueid = this.$store.getters.ibmUniqueId
          console.log('attributeformData', this.formData)
          const result = await post(`/manage/request/update/attributes`, this.formData)
          if (result.status === 7002) {
            this.$message({
              dangerouslyUseHTMLString: true,
              message: result.msg,
              type: 'error'
            })
          }
          this.dialogVisible = false
        } else {
          console.log(this.attData)
          const processoribmuniqueid = this.$store.getters.ibmUniqueId
          const creatoribmuniqueid = this.attData.iruser.ibmuniqueid
          console.log('processoribmuniqueid', processoribmuniqueid)
          console.log('creatoribmuniqueid', creatoribmuniqueid)
          const result = await post(`/manage/user/update/attributes/${processoribmuniqueid}/${creatoribmuniqueid}`, this.formData)
          console.log('result status is not 4', result)
          this.$emit('attUpdateData', this.formData)
          this.dialogVisible = false
        }
      }
    },
    attCancel: function () {
      this.dialogVisible = false
    },
    formatCountry: function (countryStr) {
      let countryList = countryStr.split(',')
      let countrys = countryList.map(x => this.$Utils.codeToCountry(x)[0].countryname)
      return countrys.join(',')
    },
    init () {
      this.formData.attributes = JSON.parse(JSON.stringify(this.attData.attributes))
      this.formData.entitlementrequest = this.attData.entitlementrequest
      this.formData.authorization = this.attData.authorization
      // this.country = this.formData.attributes.hqcountry.split(',')
      console.log('this.$store.getters.currUser', this.$store.getters.currUser)
    }
  },
  created: function () {
    // deepclone

    console.log('------AttributesInfo created start------')
    this.init()
  },
  computed: {
    appViewer () {
      console.log(this.attData.authorization.roleid)
      console.log(this.$store.getters.currUser.authorization.roleid)
      if (this.attData.authorization.roleid === role.APPVIEWER &&
        (this.$store.getters.currUser.authorization.roleid === role.CUSTOMERSUPPORT ||
        this.$store.getters.currUser.authorization.roleid === role.AMOWNER)) {
        return true
      }
      return false
    },
    appUser () {
      if (this.attData.authorization.roleid === role.APPUSER &&
      (this.$store.getters.currUser.authorization.roleid === role.CENTERCOORDINATOR ||
        this.$store.getters.currUser.authorization.roleid === role.AMOWNER)) {
        return true
      }
      return false
    },
    requestEditable () {
      if (this.attData.entitlementrequest && this.attData.entitlementrequest.status === 4) {
        return true
      } else {
        if (this.pageType === 'RequestDetail') {
          return false
        } else {
          return true
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.el-container {
  background-color: #fafcfd;
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
.bg-purple-dark {
  font-family: bold !important;
  line-height: 180% !important;
  font-size: 1vw !important;
  background-color: #e5e9f2 !important;
  padding: 0 !important;
  /* box-shadow: 0 2px 4px #9693c5, 0 0 6px #9693c5 */
}
.subtitle-content{
  font-size: 1.15rem;
}
.grid-content {
  border-radius: 4px;
  min-height: 25px;
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
.dialog-footer .el-button {
  /* background-color: #333; */
  padding: 8px 12px;
}
.el-form-item {
  margin-bottom: 2% !important;
  width: 100% !important;
  font-weight:bold;
}
</style>
