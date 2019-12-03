/* eslint-disable vue/valid-template-root */
<template>
<div class="edit-container">
    <el-row>
      <p class="ibm-h2 ibm-bold">{{$t('AM006.label.erlist')}}</p>
    </el-row>
    <!-- quick search form-->
    <el-row>
      <div class="grid-content ibm-font ibm-bold">{{$t('entitlementsummary.section1.title.value')}}</div>
      <el-card class="osam-page-el-card" shadow="hover" body-style="padding-bottom:1%">
        <el-form ref="qSearchForm" :model="qSearchForm" label-position="left" label-width="25%" label-height="5%"  style="width: 100%">
            <el-form-item :label="$t('entitlementsummary.section1.field1')" prop="input" :rules="[{ type: 'number', message: 'Entitlement request id should be number'}]">
            <el-input type="input" v-model.number="qSearchForm.input" prefix-icon="el-icon-search" style="width:60%"></el-input>
            <el-button type="primary" style="float:right" @click="clickGo">Go</el-button>
            </el-form-item>
        </el-form>
      </el-card>
    </el-row>
    <!-- narrow search form -->
    <el-row>
      <!-- title -->
      <el-col class="osam-page-subtitle">
        <div class="grid-content ibm-font ibm-bold">{{$t('entitlementsummary.section2.title.value')}}</div>
      </el-col>
      <el-card class="osam-page-el-card" shadow="hover" body-style="padding-bottom:1%">
        <el-form ref="form" :model="searchForm" label-position="left" label-width="25%" label-height="5%" class="form-class">
          <!-- Request status -->
          <el-form-item :label="$t('entitlementsummary.section2.field1.value')" >
            <el-checkbox-group v-model="searchForm.status">
            <el-checkbox v-for="item in statusList" :label="item.value" :key="item.value">{{$t(item.label)}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- Entitled applications -->
          <el-form-item :label="$t('entitlementsummary.section2.field2.value')" style="width:100px">
            <el-select v-model="searchForm.applicationid" @change="changeApplication">
            <el-option v-for="item in entitledAppList" :key="item.value" :label="$t(item.label)" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <!-- Date range (mm/dd/yyyy) -->
          <el-form-item :label="$t('entitlementsummary.section2.field3.value')" >
            <!-- <el-col :span="2">{{$t('entitlementsummary.section2.field3.value1')}}</el-col>
            <el-col :span="9">
              <el-date-picker type="date" v-model="searchForm.startdate" :value-format="dateformat"></el-date-picker>
            </el-col>
            <el-col :span="2">{{$t('entitlementsummary.section2.field3.value2')}}</el-col>
            <el-col :span="9">
              <el-date-picker type="date" v-model="searchForm.enddate" :value-format="dateformat"></el-date-picker>
            </el-col> -->
            <el-date-picker v-model="dateValue" style="width:74%" type="daterange" align="right" unlink-panels
            range-separator="to" start-placeholder="startdate" end-placeholder="enddate"
              :picker-options="pickerOptions" value-format="MM/dd/yyyy" @change="changeDatePicker">
            </el-date-picker>
          </el-form-item>

          <!-- Role -->
          <el-form-item :label="$t('entitlementsummary.section2.field4.value')" style="width:100px">
            <el-select v-model="searchForm.roleid" @change="changeRole" :disabled="isDisabled">
            <el-option v-for="item in roleList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <!-- relationship -->
          <div :class="[showRelation ? '' : 'hide']" >
          <el-form-item :label="$t('entitlementsummary.section2.field5.value')" style="width:100px">
            <el-select v-model="searchForm.relationship">
            <el-option v-for="item in relationList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          </div>
          <!-- csoid -->
          <div :class="[showCsoid ? '' : 'hide']" >
          <el-form-item :label="$t('entitlementsummary.section2.field5.value')" style="width:100px">
            <el-select v-model="searchForm.csoid">
            <el-option v-for="item in csoList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          </div>
          <div :class="[isDisabled ? '' : 'hide']" >
          <el-form-item :label="$t('entitlementsummary.section2.field6')" >
            <el-select v-model="searchForm.country1" :disabled="isDisabled">
            <el-option
              v-for="item in countryList1"
              :key="item.geoid"
              :label="item.geoname"
              :value="item.geoid">
            </el-option>
          </el-select>
          </el-form-item>
          </div>
          <!-- country -->
          <!-- <el-form-item :label="$t('entitlementsummary.section2.field6')">
            <el-select v-model="searchForm.country1" multiple @change="changeGeo" @remove-tag="removeGeo" :disabled="isDisabled">
            <el-option
              v-for="item in countryList1"
              :key="item.geoid"
              :label="item.geoname"
              :value="item.geoid">
            </el-option>
          </el-select>
          <el-select v-model="searchForm.country" multiple collapse-tags @visible-change="changeCity" style="margin-left: 20px;width:250px" :disabled="isDisabled">
            <el-option
              v-for="item in countryList2"
              :key="item.countrycode"
              :label="item.countryname"
              :value="item.countrycode">
            </el-option>
          </el-select>
          </el-form-item> -->

          <!-- country component start-->
          <!-- <el-form-item label="Country" style="margin-bottom:0%">
            <el-checkbox-group v-model="selectedGeo">
            <el-checkbox @change="changeGeoCheck(item)" style="width:30%" v-for="item in countryList1.filter(item => item.geoid>0)" :label="item.geoid" :key="item.geoid">{{$t(item.geoname)}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
          <el-select v-model="AmericasCountry" multiple collapse-tags @change="changeGeo" @remove-tag="removeGeo" placeholder="select Americas countries" style="width:32%;padding-right:10px">
            <el-option
              v-for="item in city1"
              :key="item.countrycode"
              :label="item.countryname"
              :value="item.countrycode">
            </el-option>
          </el-select>
          <el-select v-model="EuropeCountry" multiple collapse-tags @change="changeGeo" @remove-tag="removeGeo" placeholder="select Europe countries" style="width:32%;padding-right:10px">
            <el-option
              v-for="item in city2"
              :key="item.countrycode"
              :label="item.countryname"
              :value="item.countrycode">
            </el-option>
          </el-select>
          <el-select v-model="APCountry" multiple collapse-tags @change="changeGeo" @remove-tag="removeGeo" placeholder="select AP countries" style="width:31%;padding-right:10px">
            <el-option
              v-for="item in city3"
              :key="item.countrycode"
              :label="item.countryname"
              :value="item.countrycode">
            </el-option>
          </el-select>
            </el-form-item> -->
          <!-- country component end-->
          <div :class="[isDisabled ? 'hide' : '']" >
          <geoToCountry v-model="searchForm.country" :countryData="countryData" :editable="true" :countryTitle="$t('entitlementsummary.section2.field6')" v-on:selectedCountry="selectedCountry"></geoToCountry>
          </div>
          <div :class="[isDisabled ? 'hide' : '']" >
          <el-checkbox v-model="searchForm.myrequestonly" true-label="Y" false-label="N">{{$t('entitlementsummary.section2.field7')}}</el-checkbox>
          </div>
          <br>
          <br>
          <el-form-item>
            <el-button type="primary" style="float:right" @click="submit" >Submit</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>

    <!-- <div class="dync mount"> -->
    <div :class="[isVisible ? '' : 'hide']" >
      <el-card class="osam-page-el-card" shadow="hover">
      <requestList v-bind:formData="formData"></requestList>
      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          :background="true"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageCount"
          :current-page="currentPage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total_nums"
        ></el-pagination>
      </div>
      </el-card>
      <br>
      <br/>
      </div>
</div>
</template>
<script>

import { post, get } from '../../common/request'
import requestList from './RequestList'
import geoToCountry from '../../components/GeoToCountry'
export default {
  name: 'SummaryRequest',
  components: {
    requestList,
    geoToCountry
  },
  data () {
    return {
      countryData: [],
      // selectedGeo: [],
      // AmericasCountry: '',
      // EuropeCountry: '',
      // APCountry: '',
      americasCountryCode: this.$Utils.americasCountryCode,
      europeCountryCode: this.$Utils.europeCountryCode,
      apCountryCode: this.$Utils.apCountryCode,
      isVisible: false,
      isDisabled: false,
      showRelation: false,
      showCsoid: false,
      quickSearch: '',
      statusList:
      [
        { value: 4, label: 'status.open' },
        { value: 1, label: 'status.approved' },
        { value: 5, label: 'status.processed' },
        { value: 2, label: 'status.denied' }
      ],
      entitledApp: 0,
      entitledAppList:
      [
        { value: 0, label: 'entitlementsummary.section2.field2.value1' },
        { value: 27, label: 'entitlementsummary.section2.field2.value2' },
        { value: 3, label: 'entitlementsummary.section2.field2.value3' }
      ],
      role: 1,
      irrole: this.$Utils.irrole,
      role_i: { 'id': 0, 'name': this.$t('message.application.all') },
      role_a: [],
      roleList: [],
      // roleList: baseData.irrole,
      osamrole: [],
      osolrole: [],
      roleToApp: this.$Utils.roletoapplication,
      account: 1,
      csocenter: this.$Utils.csocenter,
      csoList: [],
      relation: this.$Utils.relation,
      relation_i: { 'id': '', 'name': this.$t('message.application.all') },
      relationList: [],
      countryList1: this.$Utils.geo,
      // countryList2: [],
      // city1: [],
      // city2: [],
      // city3: [],
      qSearchForm: {
        input: ''
      },
      searchForm: {
        status: [4],
        applicationid: 0,
        startdate: '',
        enddate: '',
        roleid: 0,
        account: 0,
        country1: 0,
        country: [],
        myrequestonly: 'N',
        relationship: '',
        csoid: 0
      },
      dateformat: 'MM/dd/yyyy',
      formData: [],
      currentPage: 1,
      pageCount: 10,
      total_nums: 0,
      pickerOptions: {
        shortcuts: [{
          text: 'Last Week',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last Month',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last Three Month',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }],
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      dateValue: ''
    }
  },
  methods: {
    changeApplication (event) {
      if (this.$store.getters.currUser.authorization.roleid !== 29) {
        if (event === 3) {
        // OSAM
          this.roleList = this.osamrole
          this.searchForm.roleid = 0
        } else if (event === 27) {
        // OSOL
          this.roleList = this.osolrole
          this.searchForm.roleid = 0
        } else if (event === 0) {
        // ALL
          this.roleList = this.role_a
          this.searchForm.roleid = 0
        }
      }
    },
    changeRole (event) {
      console.log(event)
      if (event === 16 || event === 17) {
      // when roleid is appviewer/appuser,set account type as relationship
        this.showCsoid = false
        this.searchForm.csoid = 0
        this.showRelation = true
      } else if (event === 19 || event === 21) {
      // when roleid is Center Coordinator/Customer Support OnLine Entitlement Coordinator ,
      // set account type as csocenter
        this.showRelation = false
        this.searchForm.relationship = 0
        this.showCsoid = true
      } else {
        this.showRelation = false
        this.showCsoid = false
        this.searchForm.relationship = 0
        this.searchForm.csoid = 0
      }
    },
    // changeGeo (event) {
    //   console.log('------------changeGeo start----------')
    //   let allFlag = false
    //   this.searchForm.country = []
    //   for (var i = 0; i < event.length; i++) {
    //     if (event[i] === 0) {
    //       // World Wide
    //       allFlag = true
    //     } else if (event[i] === 1) {
    //       this.searchForm.country.push(...this.americasCountryCode)
    //     } else if (event[i] === 2) {
    //       // Europe
    //       this.searchForm.country.push(...this.europeCountryCode)
    //     } else if (event[i] === 3) {
    //       // Aisa Pacific
    //       this.searchForm.country.push(...this.apCountryCode)
    //     }
    //   }
    //   if (allFlag) {
    //     this.searchForm.country = []
    //     this.searchForm.country.push(...this.americasCountryCode)
    //     this.searchForm.country.push(...this.europeCountryCode)
    //     this.searchForm.country.push(...this.apCountryCode)
    //   }
    //   console.log('------------changeGeo  end----------')
    // },
    // removeGeo (event) {
    //   console.log('------------removeGeo start----------')
    //   console.log(event)
    //   console.log('------------removeGeo   end----------')
    // },
    // changeCity (event) {
    //   console.log('------------changeCity  start----------')
    //   console.log('country', this.searchForm.country)
    //   console.log('------------changeCity    end----------')
    // },
    async submit () {
      console.log('---------------submit  start-----------------')
      // var Profile = Vue.extend(requestList)
      // new Profile().$mount('.dync.mount')
      console.log('searchForm', this.searchForm)
      console.log(this.searchForm.status)
      // const result = await post(`/request/list?offset=0`, this.searchForm)
      // this.formData = result.data.requestlist
      // this.isVisible = true
      this._getTableData(this.currentPage, this.pageCount, this.searchForm)
      console.log('formData', this.formData)

      console.log('---------------submit  end-----------------')
    },
    clickGo () {
      console.log(this.qSearchForm.input)
      console.log(this.$refs)
      console.log(this.$refs.qSearchForm)
      this.$refs['qSearchForm'].validate((valid) => {
        if (valid) {
          this.showDetail()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async showDetail () {
      if (this.qSearchForm.input === '') {
        this.$message.error('Please enter a valid request id!')
      } else {
        const result = await get(`/request/detail/${this.qSearchForm.input}`)
        console.log(result)
        if (result.status === 200) {
          this.$router.push({ path: '/summaryRequestDetail', query: { queryId: this.qSearchForm.input } })
        } else if (result.status === 7002) {
          this.$message.error('Request ID: ' + this.qSearchForm.input + ' is invalid')
        }
      }
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
      console.log(`每页 ${val} 条`)
      this.pageCount = val
      this.loading = true
      setTimeout(() => {
        this._getTableData(this.currentPage, this.pageCount, this.searchForm)
        this.loading = false
      }, 300)
    },
    async _getTableData (start, count, data = {}) {
      const result = await post('/request/list', data,
        {
          offset: start,
          limit: count
        })
      this.total_nums = result.data.total
      if (this.total_nums === 0) {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: this.$i18n.t('errors.no_search_result_found'),
          type: 'error'
        })
      } else {
        console.log(result.data)
        this.formData = result.data.requestlist
        console.log('formData', this.formData)
        this.isVisible = true
      }
    },
    changeDatePicker (time) {
      if (time === null) {
        this.searchForm.startdate = ''
        this.searchForm.enddate = ''
      } else {
        this.searchForm.startdate = time[0]
        this.searchForm.enddate = time[1]
      }
      console.log(this.searchForm)
    },
    // changeGeoCheck (item) {
    //   console.log(item)
    //   console.log(this.selectedGeo)
    //   if (item.geoid === 1) {
    //     // Americas
    //     this.AmericasCountry = []
    //     if (this.selectedGeo.includes(1)) {
    //       this.AmericasCountry.push(...this.americasCountryCode)
    //     }
    //   } else if (item.geoid === 2) {
    //     // Europe
    //     this.EuropeCountry = []
    //     if (this.selectedGeo.includes(2)) {
    //       this.EuropeCountry.push(...this.europeCountryCode)
    //     }
    //   } else if (item.geoid === 3) {
    //     // AP
    //     this.APCountry = []
    //     if (this.selectedGeo.includes(3)) {
    //       this.APCountry.push(...this.apCountryCode)
    //     }
    //   }
    // },
    selectedCountry (country) {
      if (country === 'WW') {
        this.searchForm.country = []
      } else {
        this.searchForm.country = country
      }
      console.log('this.searchForm.country', this.searchForm.country)
    }
  },
  created: function () {
    console.log('------created start-------')
    // console.log(this.americasCountryCode)
    // for (let i = 0; i < this.americasCountryCode.length; i++) {
    //   this.city1.push(this.$Utils.geotocountry.Americas[this.americasCountryCode[i]])
    // }
    // for (let i = 0; i < this.europeCountryCode.length; i++) {
    //   this.city2.push(this.$Utils.geotocountry.Europe[this.europeCountryCode[i]])
    // }
    // for (let i = 0; i < this.apCountryCode.length; i++) {
    //   this.city3.push(this.$Utils.geotocountry['Asia Pacific'][this.apCountryCode[i]])
    // }
    // this.countryList2.push(...this.city1)
    // this.countryList2.push(...this.city2)
    // this.countryList2.push(...this.city3)

    // initial rolelist
    this.osamrole.unshift(this.role_i)
    this.osolrole.unshift(this.role_i)
    this.role_a.push(this.role_i)
    for (let key in this.irrole) {
      this.role_a.push(this.irrole[key])
    }
    this.roleList = this.role_a
    // initial accountList
    this.csoList.push(this.role_i)
    for (let key in this.csocenter) {
      this.csoList.push(this.csocenter[key])
    }
    // initial relation
    this.relationList.push(this.relation_i)
    for (let key in this.relation) {
      this.relationList.push(this.relation[key])
    }
    // initial roleto application
    for (let key in this.roleToApp) {
      if (this.roleToApp[key].applicationid === 27) {
        this.osolrole.push(this.irrole[key])
      } else if (this.roleToApp[key].applicationid === 3) {
        this.osamrole.push(this.irrole[key])
      }
    }
    console.log('roleid', this.$store.getters.currUser.authorization.roleid)
    // External Admin
    if (this.$store.getters.currUser.authorization.roleid === 22) {
      // AM Owner

    } else if (this.$store.getters.currUser.authorization.roleid === 29) {
      // External Admin
      this.searchForm.roleid = 16
      // this.changeGeo(this.searchForm.country1)
      this.searchForm.country.push(...this.americasCountryCode)
      this.searchForm.country.push(...this.europeCountryCode)
      this.searchForm.country.push(...this.apCountryCode)
      this.isDisabled = true
    }
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
  font-weight:bold;
}
.el-pagination {
  padding: 2% 0 !important;
}
</style>
