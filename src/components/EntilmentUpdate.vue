<template>
  <div
    v-show="value.authorization.roleid===16||value.authorization.roleid===17||value.authorization.roleid===29"
  >
    <el-row class="ibm-font" style="margin:2% 0 0 0;">
      <el-col class="osam-page-subtitle" :span="24">
        <div class="subtitle-content grid-content ibm-font ibm-bold">Entitlement information</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="title-col" :span="24">
        <p>
          Choose at least one entitlement type and enter the entitlement numbers to build or modify your profile.
          <br />(To enter multiple numbers, separate them by commas)
        </p>
        <p>
          Please select the country (or countries) you would like to associate with the entitlement.
          Please Note you may select an entire geography by checking the box immediately below the column head.
        </p>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-between" :gutter="4">
      <!--inac-->
      <el-col class="card-container">
        <el-card shadow="hover">
          <el-row>
            <el-col>
              <div class="grid-content col-title">INAC</div>
            </el-col>
          </el-row>
          <el-row>
            <div v-for="(item,index) in inacArray" :key="index">
              <el-row class="const-role" type="flex" justify="space-between">
                <el-link
                  :underline="false"
                  class="link"
                  @click.native.prevent="updateContent(index, inacArray)"
                >
                  <b class="font">{{item.value}}</b>
                </el-link>
                <el-button
                  icon="el-icon-close"
                  type="text"
                  size="small"
                  :disabled="edited"
                  @click.native.prevent="deleteContent(index, inacArray)"
                ></el-button>
                <!-- </el-col> -->
              </el-row>

              <div class="country-font">
                -{{inacArray[index].country.length>=16?
                `${inacArray[index].country.substring(0,16)}...`:inacArray[index].country}}
              </div>
            </div>
          </el-row>
          <el-row v-if="this.inacArray.length === 0">
            <el-col>
              <div class="grid-content"></div>
            </el-col>
          </el-row>
          <div style="margin-top:3%">
            <hr />
          </div>
          <el-link
            :underline="false"
            class="addnew"
            icon="el-icon-plus"
            type="primary"
            :disabled="edited"
            @click="add(inacTitle)"
          >Add new numbers</el-link>
        </el-card>
      </el-col>

      <!--Company-->
      <el-col class="card-container">
        <el-card shadow="hover">
          <el-row>
            <el-col>
              <div class="grid-content col-title">Company</div>
            </el-col>
          </el-row>
          <el-row>
            <div v-for="(item,index) in compArray" :key="index">
              <el-row class="const-role" type="flex" justify="space-between">
                <el-link
                  :underline="false"
                  class="link"
                  @click.native.prevent="updateContent(index, compArray)"
                >
                  <b class="font">{{item.value}}</b>
                </el-link>

                <el-button
                  icon="el-icon-close"
                  type="text"
                  size="small"
                  :disabled="edited"
                  @click.native.prevent="deleteContent(index, compArray)"
                ></el-button>
              </el-row>
              <div class="country-font">
                -{{compArray[index].country.length>=16?
                `${compArray[index].country.substring(0,16)}...`:compArray[index].country}}
              </div>
            </div>
          </el-row>
          <el-row v-if="this.compArray.length === 0">
            <el-col>
              <div class="grid-content"></div>
            </el-col>
          </el-row>
          <div style="margin-top:3%">
            <hr />
          </div>
          <el-link
            :underline="false"
            class="addnew"
            icon="el-icon-plus"
            type="primary"
            :disabled="edited"
            @click="add(compTitle)"
          >Add new numbers</el-link>
        </el-card>
      </el-col>

      <!--Enterprise-->
      <el-col class="card-container">
        <el-card shadow="hover">
          <el-row>
            <el-col>
              <div class="grid-content col-title">Enterprise</div>
            </el-col>
          </el-row>
          <el-row>
            <div v-for="(item,index) in enterpArray" :key="index">
              <el-row class="const-role" type="flex" justify="space-between">
                <el-link
                  :underline="false"
                  class="link"
                  @click.native.prevent="updateContent(index, enterpArray)"
                >
                  <b class="font">{{item.value}}</b>
                </el-link>

                <el-button
                  icon="el-icon-close"
                  type="text"
                  size="small"
                  :disabled="edited"
                  @click.native.prevent="deleteContent(index, enterpArray)"
                ></el-button>
              </el-row>
              <div class="country-font">
                -{{enterpArray[index].country.length>=16?
                `${enterpArray[index].country.substring(0,16)}...`:enterpArray[index].country}}
              </div>
            </div>
          </el-row>
          <el-row v-if="this.enterpArray.length === 0">
            <el-col>
              <div class="grid-content"></div>
            </el-col>
          </el-row>
          <div style="margin-top:3%">
            <hr />
          </div>
          <el-link
            :underline="false"
            class="addnew"
            icon="el-icon-plus"
            type="primary"
            :disabled="edited"
            @click="add(enterptTitle)"
          >Add new numbers</el-link>
        </el-card>
      </el-col>

      <!--Customer-->
      <el-col class="card-container">
        <el-card shadow="hover">
          <el-row>
            <el-col>
              <div class="grid-content col-title">Customer</div>
            </el-col>
          </el-row>
          <el-row>
            <div v-for="(item,index) in custArray" :key="index">
              <el-row class="const-role" type="flex" justify="space-between">
                <el-link
                  :underline="false"
                  class="link"
                  @click.native.prevent="updateContent(index, custArray)"
                >
                  <b class="font">{{item.value}}</b>
                </el-link>

                <el-button
                  icon="el-icon-close"
                  type="text"
                  size="small"
                  :disabled="edited"
                  @click.native.prevent="deleteContent(index, custArray)"
                ></el-button>
              </el-row>
              <div class="country-font">
                -{{custArray[index].country.length>=16?
                `${custArray[index].country.substring(0,16)}...`:custArray[index].country}}
              </div>
            </div>
          </el-row>
          <el-row v-if="this.custArray.length === 0">
            <el-col>
              <div class="grid-content"></div>
            </el-col>
          </el-row>
          <div style="margin-top:3%">
            <hr />
          </div>
          <el-link
            :underline="false"
            class="addnew"
            icon="el-icon-plus"
            type="primary"
            :disabled="edited"
            @click="add(custTitle)"
          >Add new numbers</el-link>
        </el-card>
      </el-col>

      <!--All Entitlement-->

      <el-col class="card-container" v-show="value.authorization.roleid===17">
        <el-card shadow="hover">
          <el-row>
            <el-col>
              <div class="grid-content col-title">All Entitlement</div>
            </el-col>
          </el-row>
          <el-row>
            <div v-for="(item,index) in allEntitlement" :key="index">
              <el-row class="const-role" type="flex" justify="space-between">
                  <el-link
                    :underline="false"
                    class="link"
                    @click.native.prevent="updateContent(index, allEntitlement)"
                  >
                    <b class="font">All Entitlement</b>
                    <!-- <span class="font-enitlment">{{allEntitlement[index].country}}</span> -->
                  </el-link>

                  <el-button
                    icon="el-icon-close"
                    type="text"
                    size="small"
                    :disabled="edited"
                    @click.native.prevent="deleteContent(index, allEntitlement)"
                  ></el-button>
              </el-row>
              <div class="country-font">
                -{{allEntitlement[index].country.length>=16?
                `${allEntitlement[index].country.substring(0,16)}...`:allEntitlement[index].country}}
              </div>
            </div>
          </el-row>
          <el-row v-if="this.allEntitlement.length === 0">
            <el-col>
              <div class="grid-content"></div>
            </el-col>
          </el-row>
          <div style="margin-top:3%">
            <hr />
          </div>
          <el-link
            :underline="false"
            class="addnew"
            icon="el-icon-plus"
            type="primary"
            :disabled="edited"
            @click="add(allEntTitle)"
          >Add Countries</el-link>
        </el-card>
      </el-col>
    </el-row>
    <!-- {{appViewer}} {{appUser}} {{admin}} -->
    <el-row class="entitlement-style" v-if="(appViewer||appUser||admin)&&requestEditable" type="flex" justify="end">
      <el-link
        v-if="edited"
        type="primary"
        :underline="false"
        icon="el-icon-edit"
        @click="updateEntitlement"
      >Update Entitlement</el-link>
      <el-row class="edit-btn"
      v-else
      type="flex"
      justify="start">
      <el-link :underline="false" type="primary" icon="el-icon-edit" @click="submitEntitlement">Save</el-link>
      <el-link type="primary" style="margin-left:15px;"
      :underline="false"
      icon="el-icon-circle-close" @click="cancelEdit">Cannel</el-link>
      </el-row>
    </el-row>

    <el-dialog :visible.sync="dialogVisible" center width="70%">
      <span slot="title">{{diaTitle}}</span>
      <div v-if="!edit">
        <span>Please enter the entitlement numbers</span>
        <br />
        <span>(To enter multiple numbers, separate them by commas)</span>
        <br />
        <br />
      </div>
      <el-form :model="form" :rules="rules" ref="form" label-position="top">
        <el-form-item label="Number:" prop="inputVal">
          <el-input
            type="textarea"
            :rows="2"
            :placeholder="placeHolder"
            :disabled="inputDisable"
            v-model="form.inputVal"
          ></el-input>
        </el-form-item>
        <br />
        <br />
        <GeoToCountry
          v-model="form.hqcountry"
          :countryData="form.hqcountry"
          :countryTitle="ctyTitle"
          :editable="!edited"
          v-on:selectedCountry="selectedCountry"
        ></GeoToCountry>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" v-if="addFlag" @click="addContent(diaTitle)">Add</el-button>
        <el-button type="primary"
        :disabled="edited"
        v-if="edit" @click="update(diaTitle)"
        >Update</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import GeoMutipleAttr from '../components/GeoMutipleAttr'
import { entitlementType, role } from '../common/enum'
import GeoToCountry from '../components/GeoToCountry'
import { post } from '../common/request'
import { mapGetters } from 'vuex'
// import Utils from '../common/utils'
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
      edited: true,
      ctyTitle: this.$t('message.label.country') + ':',
      opIui: '',
      submit: false,
      inputDisable: false,
      activeNames: ['1'],
      inacTitle: 'INAC number(s)',
      compTitle: 'Company Number(s)',
      enterptTitle: 'Enterprise Number(s)',
      custTitle: 'Customer Number(s)',
      allEntTitle: 'All Entitlement',
      dialogVisible: false,
      diaTitle: '',
      edit: false,
      addFlag: true,
      // inputVal: '',
      // hqcountry: '',
      clickIndex: 0,
      inacArray: [],
      compArray: [],
      enterpArray: [],
      custArray: [],
      allEntitlement: [],
      entitlementArr: [],
      placeHolder: '',
      form: {
        inputVal: '',
        hqcountry: '',
        entitlementtypeid: ''
      },
      rules: {
        inputVal: [
          { required: true, message: 'Number cannot be null!', trigger: 'blur' }
        ],
        hqcountry: [
          {
            required: true,
            message: 'Country cannot be null!',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      currUser: 'currUser'
    }),
    appViewer () {
      if (
        this.value.authorization.roleid === role.APPVIEWER &&
        (this.currUser.authorization.roleid === role.CUSTOMERSUPPORT ||
          this.currUser.authorization.roleid === role.AMOWNER)
      ) {
        return true
      }
      return false
    },
    admin () {
      return this.appViewer
    },
    appUser () {
      if (
        this.value.authorization.roleid === role.APPUSER &&
        (this.currUser.authorization.roleid === role.CENTERCOORDINATOR ||
          this.currUser.authorization.roleid === role.AMOWNER)
      ) {
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
    console.log('en creeated', this.value)
    this.init(this.value)
  },
  mounted () {},
  watch: {
    // 父组件传入数据时 监听传入值变化 正确获得初始值
    value: {
      deep: true,
      handler (nv, ov) {
        console.log('watch', nv)
        this.init(nv)
      }
    }
  },
  methods: {
    cancelEdit () {
      this.edited = !this.edited
    },
    add (val) {
      if (val === this.allEntTitle) {
        this.form.inputVal = val
        this.inputDisable = true
        this.form.hqcountry = ''
        this.dialogVisible = true
        this.diaTitle = val
        this.addFlag = true
        this.edit = false
      } else {
        this.form.inputVal = ''
        this.form.hqcountry = ''
        this.dialogVisible = true
        this.diaTitle = val
        this.addFlag = true
        this.edit = false
        this.inputDisable = false
        this.placeHolder = 'Please enter the ' + val
      }
    },
    handleGeoAttr: function (val) {
      this.form.hqcountry = val
    },
    addContent (val) {
      switch (val) {
        case this.inacTitle:
          this._addContentToArr(
            this.form.inputVal.split(','),
            this.inacArray,
            23
          )
          break
        case this.compTitle:
          this._addContentToArr(
            this.form.inputVal.split(','),
            this.compArray,
            22
          )
          break
        case this.enterptTitle:
          this._addContentToArr(
            this.form.inputVal.split(','),
            this.enterpArray,
            20
          )
          break
        case this.custTitle:
          this._addContentToArr(
            this.form.inputVal.split(','),
            this.custArray,
            5
          )
          break
        case this.allEntTitle:
          this.form.country = ''
          if (this.form.hqcountry === '') {
            this.$message.error('Country is required')
            return
          }
          this.allEntitlement.splice(0, 1, {
            value: 'All Entitlement',
            country: this.form.hqcountry,
            entitlementtypeid: 26
          })
          this.submit = true
          this.dialogVisible = false
          break
        default:
          console.log('no this entitlement type')
          break
      }
    },
    _addContentToArr (inputArr, targetArr, type) {
      if (this.form.inputVal === '') {
        this.$message.error('Number is required')
        return
      }
      if (this.form.hqcountry === '') {
        this.$message.error('Country is required')
        return
      }
      inputArr.forEach((item, index, arr) => {
        let tarIndex = targetArr.findIndex((item, index, arr) => {
          return item.value === this.form.inputVal
        })
        console.log('tarIndex', tarIndex)
        if (tarIndex >= 0) {
          targetArr.splice(tarIndex, 1, {
            country: this.form.hqcountry,
            entitlementtypeid: type,
            value: this.form.inputVal
          })
          inputArr[index].country === this.form.hqcountry
            ? (this.submit = false)
            : (this.submit = true)
          console.log('this.submit ', this.submit)
        } else {
          targetArr.push({
            value: this.form.inputVal,
            country: this.form.hqcountry,
            entitlementtypeid: type
          })
          this.submit = true
        }
      })
      this.dialogVisible = false
    },
    update (val) {
      switch (val) {
        case this.inacTitle:
          this._updateContent(this.inacArray, entitlementType.INACNUM)
          break
        case this.compTitle:
          this._updateContent(this.compArray, entitlementType.COMPANYNUM)
          break
        case this.enterptTitle:
          this._updateContent(this.enterpArray, entitlementType.ENTERPRISENUM)
          break
        case this.custTitle:
          this._updateContent(this.custArray, entitlementType.CUSTOMERNUM)
          break
        default:
          this._updateContent(
            this.allEntitlement,
            entitlementType.ALLENTITLEMENT
          )
          break
      }
    },
    _updateContent (inputArr, typeNum) {
      if (this.form.hqcountry === '') {
        this.$message.error('Country is required')
        return
      }
      if (inputArr[this.clickIndex].country !== this.form.hqcountry) {
        inputArr[this.clickIndex].country = this.form.hqcountry
        // this.form.hqcountry = ''
        // this.form.inputVal = ''
        this.submit = true
      }
      this.dialogVisible = false
      // let index = inputArr.findIndex((item, index, arr) => {
      //   return item.value === this.form.inputVal
      // })
      // if (index >= 0) {
      //   inputArr.splice(index, 1, {
      //     country: this.form.hqcountry,
      //     entitlementtypeid: typeNum,
      //     value: this.form.inputVal
      //   })
      //   inputArr[index].country === this.form.hqcountry
      //     ? (this.submit = false)
      //     : (this.submit = true)
      //   console.log('this.submit ', this.submit)
      // } else {
      //   inputArr.push({
      //     value: this.form.inputVal,
      //     country: this.form.hqcountry,
      //     entitlementtypeid: typeNum
      //   })
      //   this.submit = true
      // }
    },
    updateEntitlement () {
      this.edited = false
    },
    async submitEntitlement () {
      console.log(this.submit)
      let url = ''
      let postData = {}
      const entitlementArr = [
        ...this.inacArray,
        ...this.compArray,
        ...this.custArray,
        ...this.enterpArray,
        ...this.allEntitlement
      ]
      console.log('entitlementArr', entitlementArr)
      postData.entitlement = entitlementArr
      if (this.submit) {
        if (
          this.value.entitlementrequest &&
          this.value.entitlementrequest.status === 4
        ) {
          url = `/manage/request/update/entitlement`
          postData.entitlementrequest = {
            id: this.value.entitlementrequest.id,
            creatoribmuniqueid: this.opIui,
            processoribmuniqueid: this.currUser.iruser.ibmuniqueid
          }
        } else {
          if (this.pageType === 'RequestDetail') {
            url = `/manage/request/update/entitlement`
            postData.entitlementrequest = {
              id: this.value.entitlementrequest.id,
              creatoribmuniqueid: this.opIui,
              processoribmuniqueid: this.currUser.iruser.ibmuniqueid
            }
          } else {
            url = `/manage/user/update/entitlement/${this.currUser.iruser.ibmuniqueid}/${this.opIui}`
          }
        }
        const result = await post(url, postData)
        if (result.status === 7002) {
          this.$message({
            showClose: true,
            message: result.msg,
            type: 'error'
          })
          this.dialogVisible = false
        } else {
          this.$message({
            showClose: true,
            message: result.msg,
            type: 'success'
          })
        }

        this.submit = false
        this.edited = true
        return ''
      } else {
        this.$message({
          showClose: true,
          message: 'Please update or add entitlements',
          type: 'warning'
        })
      }
    },
    deleteContent (index, enterpArray) {
      enterpArray.splice(index, 1)
      this.submit = true
    },

    updateContent (index, arr) {
      this.form.inputVal = ''
      this.form.hqcountry = ''
      this.form.inputVal = arr[index].value
      this.form.hqcountry = arr[index].country
      this.form.entitlementtypeid = arr[index].entitlementtypeid
      console.log('srr[index]', arr[index])
      console.log('this.form', this.form)
      this.dialogVisible = true
      this.edit = true
      this.addFlag = false
      this.inputDisable = true
      this.clickIndex = index
      switch (arr[index].entitlementtypeid) {
        case entitlementType.CUSTOMERNUM:
          this.diaTitle = this.custTitle
          break
        case entitlementType.ENTERPRISENUM:
          this.diaTitle = this.enterptTitle
          break
        case entitlementType.COMPANYNUM:
          this.diaTitle = this.compTitle
          break
        case entitlementType.INACNUM:
          this.diaTitle = this.inacTitle
          break
        case entitlementType.ALLENTITLEMENT:
          this.diaTitle = this.allEntTitle
          this.inputDisable = true
          break
        default:
          console.log('email domain')
          break
      }
    },
    handleCollaspeChange (val) {
      console.log('handleCollaspeChange===', val)
    },
    init (oneUser) {
      console.log('entielement oneUser=====', oneUser)
      let tempObj = {}
      this.opIui = oneUser.iruser.ibmuniqueid
      oneUser.entitlement.forEach((item, index, arr) => {
        tempObj = {}
        switch (item.entitlementtypeid) {
          case entitlementType.CUSTOMERNUM:
            tempObj['value'] = item.value
            tempObj['country'] = item.country
            tempObj['entitlementtypeid'] = item.entitlementtypeid
            this.custArray.push(tempObj)
            break
          case entitlementType.ENTERPRISENUM:
            tempObj['value'] = item.value
            tempObj['country'] = item.country
            tempObj['entitlementtypeid'] = item.entitlementtypeid
            this.enterpArray.push(tempObj)
            break
          case entitlementType.COMPANYNUM:
            tempObj['value'] = item.value
            tempObj['country'] = item.country
            tempObj['entitlementtypeid'] = item.entitlementtypeid
            this.compArray.push(tempObj)
            break
          case entitlementType.INACNUM:
            tempObj['value'] = item.value
            tempObj['country'] = item.country
            tempObj['entitlementtypeid'] = item.entitlementtypeid
            this.inacArray.push(tempObj)
            break
          case entitlementType.ALLENTITLEMENT:
            tempObj['value'] = 'All Entitlement'
            tempObj['country'] = item.country
            tempObj['entitlementtypeid'] = item.entitlementtypeid
            this.allEntitlement.push(tempObj)
            break
          default:
            console.log('email domain')
            break
        }
      })
    },
    selectedCountry (country) {
      if (country === 'WW') {
        this.form.hqcountry = country
      } else {
        this.form.hqcountry = country.join(',')
      }
      console.log('this.form.hqcountry', this.form.hqcountry)
    }
  },
  components: {
    // GeoMutipleAttr,
    GeoToCountry
  }
}
</script>

<style scoped lang="scss">
.card-container {
  width: 18%;
}

.country-font {
  width: 100%;
  word-wrap: break-word;
  margin-left: 8%;
  font-size: 0.85vw;
}
.delete_button {
  // padding: 1px 1px;
  border-radius: 10px;
}

.el-form-item__label {
  text-align: left;
}
.errorflag {
  color: red;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: thin solid #ebeef5;
}

.el-card__body {
  padding: 0px;
}
.bg-purple-dark {
  background: #ebeef5;
  padding: 6px 0;
}

/* ------------------------- */

.bg-purple-light {
  background: #e5e9f2;
}
.col-title {
  background: #dfe9e9;
  text-align: center;
  line-height: 36px;
}
.subtitle-content{
  font-size: 1.15rem;
}
.grid-content {
  border-radius: 4px;
  min-height: 25px;
}
// .el-col-24 {
//   // width: auto;
// }
.addnew {
  margin-left: 20%;
  margin-bottom: 5%;
}

.title-row {
  margin-bottom: 1% !important;
  padding: 2% 2% 0 2% !important;
}

.title-col {
  border-radius: 2%;
}

.row {
  margin-left: 3%;
  margin-right: 3%;
}
.font {
  font-size: 0.85vw;
}
.bg-purple-dark {
  font-family: bold !important;
  line-height: 180% !important;
  font-size: 1vw !important;
  background-color: #e5e9f2 !important;
  padding: 0 !important;
  /* box-shadow: 0 2px 4px #9693c5, 0 0 6px #9693c5 */
}
.font-enitlment {
  margin-left: 10%;
  font-size: 0.85vw;
  word-break: break-all;
}

.dialog-footer .el-button {
  /* background-color: #333; */
  padding: 8px 12px;
}

.grid-title {
  /* border-radius: 4px !important; */
  min-height: 90% !important;
  text-align: left;
}
.addnew {
  margin-left: 0% !important;
}
.entitlement-style{
  padding: 0 2% 0 0;
}
.el-form-item {
  margin-bottom: 2% !important;
  width: 100% !important;
  font-weight:bold;}
</style>
