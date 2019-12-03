<template>
  <div
    v-if="this.$store.state.register.authorization.roleid === 16 || this.$store.state.register.authorization.roleid === 17 || this.$store.state.register.authorization.roleid === 29"
  >
    <el-row class="errorflag osam-page-ibm-font">{{ flag }}</el-row>

    <p style="font-size:0.85rem; font-style:italic; margin-left:20px" class="osam-page-ibm-font">
      Choose at least one entitlement type, click add new numbers and enter the entitlement numbers to build or modify your profile.
      <br />(To enter multiple numbers, separate them by commas)
    </p>

    <el-card
      shadow="hover"
      style="margin-bottom:2%"
      v-if="this.$store.state.register.authorization.roleid === 17"
    >
      <GeoToCountry
        v-model="ctryCodeVal2"
        :countryData="ctryCodeVal2"
        :countryTitle="ctyTitle"
        v-on:selectedCountry="selectedCountry2"
        :editable="true"
      ></GeoToCountry>
    </el-card>
    <el-row :gutter="20">
      <!-- INAC -->
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <el-row>
            <el-col style="width:100%">
              <div class="grid-content col-title">INAC Number(s)</div>
            </el-col>
          </el-row>
          <!-- show data -->
          <el-row>
            <div v-for="(item, index) in inacArray" :key="index">
              <el-row class="row">
                <el-col style="margin-top:3%">
                  <el-link
                    :underline="false"
                    class="link"
                    @click.native.prevent="editEntItem(index, inacArray)"
                  >
                    <b class="fontnumber">{{item.value}}</b>
                  </el-link>
                </el-col>
                <el-col :span="1" style="margin-top:1%">
                  <el-button
                    class="delete"
                    icon="el-icon-close"
                    type="text"
                    size="small"
                    @click.native.prevent="delEntItem(index, inacArray)"
                  ></el-button>
                </el-col>
              </el-row>

              <el-row class="fontcountry" style="margin-left:10%">-{{ inacArray[index].country }}</el-row>
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
          <el-row class="addnew">
            <el-link
              :underline="false"
              class="addnew"
              icon="el-icon-plus"
              type="primary"
              @click="openEntDialog(inacTitle)"
            >Add new numbers</el-link>
          </el-row>
        </el-card>
      </el-col>
      <!-- Company -->
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <el-row>
            <el-col style="width:100%">
              <div class="grid-content col-title">Company Number(s)</div>
            </el-col>
          </el-row>
          <!-- show data -->
          <el-row>
            <div v-for="(item, index) in compArray" :key="index">
              <el-row class="row">
                <el-col style="margin-top:3%">
                  <el-link
                    :underline="false"
                    class="link"
                    @click.native.prevent="editEntItem(index, compArray)"
                  >
                    <b class="fontnumber">{{item.value}}</b>
                  </el-link>
                </el-col>

                <el-col :span="1" style="margin-top:1%">
                  <el-button
                    class="delete"
                    icon="el-icon-close"
                    type="text"
                    size="small"
                    @click.native.prevent="delEntItem(index, compArray)"
                  ></el-button>
                </el-col>
              </el-row>

              <el-row class="fontcountry" style="margin-left:10%">-{{ compArray[index].country }}</el-row>
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
          <el-row class="addnew">
            <el-link
              :underline="false"
              class="addnew"
              icon="el-icon-plus"
              type="primary"
              @click="openEntDialog(compTitle)"
            >Add new numbers</el-link>
          </el-row>
        </el-card>
      </el-col>
      <!-- enterprise -->
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <el-row>
            <el-col style="width:100%">
              <div class="grid-content col-title">Enterprise Number(s)</div>
            </el-col>
          </el-row>
          <!-- show data -->
          <el-row>
            <div v-for="(item, index) in enterpArray" :key="index">
              <el-row class="row">
                <el-col style="margin-top:3%">
                  <el-link
                    :underline="false"
                    class="link"
                    @click.native.prevent="editEntItem(index, enterpArray)"
                  >
                    <b class="fontnumber">{{item.value}}</b>
                  </el-link>
                </el-col>
                <el-col :span="1" style="margin-top:1%">
                  <el-button
                    class="delete"
                    icon="el-icon-close"
                    type="text"
                    size="small"
                    @click.native.prevent="delEntItem(index, enterpArray)"
                  ></el-button>
                </el-col>
              </el-row>

              <el-row class="fontcountry" style="margin-left:10%">-{{ enterpArray[index].country }}</el-row>
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
          <el-row class="addnew">
            <el-link
              :underline="false"
              class="addnew"
              icon="el-icon-plus"
              type="primary"
              @click="openEntDialog(enterptTitle)"
            >Add new numbers</el-link>
          </el-row>
        </el-card>
      </el-col>
      <!-- customer -->
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <el-row>
            <el-col style="width:100%">
              <div class="grid-content col-title">Customer Number(s)</div>
            </el-col>
          </el-row>
          <!-- show data -->
          <el-row>
            <div v-for="(item, index) in custArray" :key="index">
              <el-row class="row">
                <el-col style="margin-top:3%">
                  <el-link
                    :underline="false"
                    class="link"
                    @click.native.prevent="editEntItem(index, custArray)"
                  >
                    <b class="fontnumber">{{item.value}}</b>
                  </el-link>
                </el-col>
                <el-col :span="1" style="margin-top:1%">
                  <el-button
                    class="delete"
                    icon="el-icon-close"
                    type="text"
                    size="small"
                    @click.native.prevent="delEntItem(index, custArray)"
                  ></el-button>
                </el-col>
              </el-row>

              <el-row class="fontcountry" style="margin-left:10%">-{{ custArray[index].country }}</el-row>
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
          <el-row class="addnew">
            <el-link
              :underline="false"
              class="addnew"
              icon="el-icon-plus"
              type="primary"
              @click="openEntDialog(custTitle)"
            >Add new numbers</el-link>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <!--
    <el-row>
      <el-button
        type="primary"
        round
        :span="4"
        @click="openEntDialog(inacTitle)"
      >+ {{$t("AM009.subtitle3")}}</el-button>
      <el-button
        type="primary"
        round
        :span="4"
        @click="openEntDialog(compTitle)"
      >+ {{$t("AM009.subtitle5")}}</el-button>
      <el-button
        type="primary"
        round
        :span="4"
        @click="openEntDialog(enterptTitle)"
      >+ {{$t("AM009.subtitle4")}}</el-button>
      <el-button
        type="primary"
        round
        :span="4"
        @click="openEntDialog(custTitle)"
      >+ {{$t("AM009.subtitle6")}}</el-button>
      <el-button
        v-if="this.$store.state.register.authorization.roleid === 17"
        type="primary"
        round
        :span="4"
        @click="openEntDialog(allEntTitle)"
      >+ {{$t("entitlement.method.AllEntitlement")}}</el-button>
    </el-row>

    <br />
    <el-row>
      <el-col :span="16">
        <el-card shadow="hover">
          inac
          <div>
            <el-row style="margin:2%">
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">{{$t("AM009.subtitle3")}}</div>
              </el-col>
            </el-row>

    <el-table :data="inacArray">-->
    <!-- <el-table-column label="INAC"></el-table-column> -->
    <!-- <el-table-column label=" Number(s)" prop="value" width="120%"></el-table-column>
              <el-table-column label="Country" min-width="100%">
                <template slot-scope="scope">{{ codeToCtryName(inacArray[scope.$index].country) }}</template>
              </el-table-column>
              <el-table-column width="60%">
                <template slot-scope="scope">
                  <el-button
                    icon="el-icon-edit"
                    type="text"
                    size="small"
                    @click.native.prevent="editEntItem(scope.$index, inacArray)"
                  ></el-button>
                </template>
              </el-table-column>
              <el-table-column width="60%">
                <template slot-scope="scope">
                  <el-button
                    icon="el-icon-delete"
                    type="text"
                    size="small"
                    @click.native.prevent="delEntItem(scope.$index, inacArray)"
                  ></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
    <br />-->
    <!-- Company -->
    <!-- <div>
            <el-row style="margin:2%">
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">{{$t("AM009.subtitle5")}}</div>
              </el-col>
            </el-row>
    <el-table :data="compArray">-->
    <!-- <el-table-column label="Company"></el-table-column> -->
    <!-- <el-table-column label="Number(s)" prop="value" width="120%"></el-table-column>
              <el-table-column label="Country" min-width="100%">
                <template slot-scope="scope">{{ codeToCtryName(compArray[scope.$index].country) }}</template>
              </el-table-column>
              <el-table-column width="60%">
                <template slot-scope="scope">
                  <el-button
                    icon="el-icon-edit"
                    type="text"
                    size="small"
                    @click.native.prevent="editEntItem(scope.$index, compArray)"
                  ></el-button>
                </template>
              </el-table-column>
              <el-table-column width="60%">
                <template slot-scope="scope">
                  <el-button
                    icon="el-icon-delete"
                    type="text"
                    size="small"
                    @click.native.prevent="delEntItem(scope.$index, compArray)"
                  ></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
    <br />-->
    <!-- enterprise number -->
    <!-- <div>
            <el-row style="margin:2%">
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">{{$t("AM009.subtitle4")}}</div>
              </el-col>
            </el-row>
    <el-table :data="enterpArray" style="margin:2%">-->
    <!-- <el-table-column label="Enterprise"></el-table-column> -->
    <!-- <el-table-column label="Number(s)" prop="value" width="120%"></el-table-column>
              <el-table-column label="Country" min-width="100%">
                <template slot-scope="scope">{{ codeToCtryName(enterpArray[scope.$index].country) }}</template>
              </el-table-column>
              <el-table-column width="60%">
                <template slot-scope="scope">
                  <el-button
                    icon="el-icon-edit"
                    type="text"
                    size="small"
                    @click.native.prevent="editEntItem(scope.$index, enterpArray)"
                  ></el-button>
                </template>
              </el-table-column>
              <el-table-column width="60%">
                <template slot-scope="scope">
                  <el-button
                    icon="el-icon-delete"
                    type="text"
                    size="small"
                    @click.native.prevent="delEntItem(scope.$index, enterpArray)"
                  ></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
    <br />-->
    <!-- customer numbers -->
    <!-- <div>
            <el-row style="margin:2%">
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">{{$t("AM009.subtitle6")}}</div>
              </el-col>
            </el-row>
    <el-table :data="custArray" style="margin:2%">-->
    <!-- <el-table-column label="Customer"></el-table-column> -->
    <!-- <el-table-column label="Number(s)" prop="value" width="120%"></el-table-column>
              <el-table-column label="Country" min-width="100%">
                <template slot-scope="scope">{{ codeToCtryName(custArray[scope.$index].country) }}</template>
              </el-table-column>
              <el-table-column width="60%">
                <template slot-scope="scope">
                  <el-button
                    icon="el-icon-edit"
                    type="text"
                    size="small"
                    @click.native.prevent="editEntItem(scope.$index, custArray)"
                  ></el-button>
                </template>
              </el-table-column>
              <el-table-column width="60%">
                <template slot-scope="scope">
                  <el-button
                    icon="el-icon-delete"
                    type="text"
                    size="small"
                    @click.native.prevent="delEntItem(scope.$index, custArray)"
                  ></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
    <br />-->
    <!-- all entitlement -->
    <!-- <div v-if="this.$store.state.register.authorization.roleid === 17">
            <el-row style="margin:2%">
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">{{$t("entitlement.method.AllEntitlement")}}</div>
              </el-col>
            </el-row>
    <el-table :data="allEntArray" style="margin:2%">-->

    <!-- <el-table-column label="All entitlement" prop="value"></el-table-column> -->
    <!-- <el-table-column label="Country" min-width="100%">
                <template slot-scope="scope">{{ codeToCtryName(allEntArray[scope.$index].country) }}</template>
              </el-table-column>
              <el-table-column width="60%">
                <template slot-scope="scope">
                  <el-button
                    icon="el-icon-edit"
                    type="text"
                    size="small"
                    @click.native.prevent="editEntItem(scope.$index, allEntArray)"
                  ></el-button>
                </template>
              </el-table-column>
              <el-table-column width="60%">
                <template slot-scope="scope">
                  <el-button
                    icon="el-icon-delete"
                    type="text"
                    size="small"
                    @click.native.prevent="delEntItem(scope.$index, allEntArray)"
                  ></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <br />
    <br />-->
    <div v-if="dialogVisible">
      <el-dialog :visible.sync="dialogVisible" center>
        <span slot="title" style="align:center">{{diaTitle}}</span>
        <span style="font-size: 0.85rem; font-style:italic">Please enter the entitlement numbers.</span>
        <br />
        <span
          style="font-size: 0.85rem; font-style:italic"
        >(To enter multiple numbers, separate them by commas)</span>

        <el-form-item label label-width="0px" prop="entitemval" style="margin-left:0">
          <el-input
            style="margin-top: 2%;"
            v-if="diaTitle === 'INAC number(s)' || diaTitle === 'Company Number(s)' || diaTitle === 'Enterprise Number(s)' || diaTitle === 'Customer Number(s)'"
            type="textarea"
            :rows="2"
            :placeholder="placeHolder"
            v-model="entitemval"
            :disabled="entitemflag"
          ></el-input>
        </el-form-item>

        <!-- <GeoAttr v-on:GeoAttrEvent="handleGeoAttr"></GeoAttr> -->
        <!-- <GeoMutipleAttr v-on:GeoCtryEvent="handleGeoAttr" :ctryCodeProp="ctryCodeVal"></GeoMutipleAttr> -->
        <GeoToCountry
          v-model="ctryCodeVal"
          :countryData="ctryCodeVal"
          :countryTitle="ctyTitle"
          v-on:selectedCountry="selectedCountry"
          :editable="true"
        ></GeoToCountry>
        <span slot="footer" class="dialog-footer">
          <el-button @click="closeEntDialog(diaTitle)">Cancel</el-button>
          <el-button type="primary" @click="addEntitlement(diaTitle)">Save</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import GeoMutipleAttr from '../../components/GeoMutipleAttr'
import GeoToCountry from '../../components/GeoToCountry'

export default {
  components: {
    GeoToCountry
    // GeoMutipleAttr
  },
  data () {
    return {
      ctyTitle: this.$t('entitlement.method.AllEntitlement') + ':',
      activeNames: ['1', '2', '3', '4', '5'],
      inacTitle: 'INAC number(s)', // 23
      compTitle: 'Company Number(s)', // 22
      enterptTitle: 'Enterprise Number(s)', // 20
      custTitle: 'Customer Number(s)', // 5
      allEntTitle: 'All Entitlement', // 26
      dialogVisible: false,
      diaTitle: '',
      entitemflag: false,
      entitemval: '',
      ctryCodeVal: '',
      ctryCodeVal2: '',
      inacArray: [],
      compArray: [],
      enterpArray: [],
      custArray: [],
      allEntArray: [],
      placeHolder: ''
    }
  },
  watch: {
    // entitemval: function (newVal, oldVal) {
    //   if (newVal) {
    //     this.$parent.clearValidate('entitemval')
    //   }
    // },
    ctryCodeVal: function (newVal, oldVal) {
      if (newVal) {
        this.$parent.clearValidate('hqcountry')
      }
    }
  },
  props: {
    entProp: {
      type: Array,
      default: function () {
        return []
      }
    },
    flag: String
  },

  created: function () {
    // for RegisterPortal: <Entitlement></Entitlement>
    // for RegisterPortal-firsttime: 1> this.$store.state.register.entitlement.length === (0 || undefined)
    //                               2> this.$store.state.currUser.entitlement.length === (0 || undefined) = this.entProp.length
    // for RegisterPortal-prevstep:  1> this.$store.state.register.entitlement.length > (0 || undefined)
    //                               2> this.$store.state.currUser.entitlement.length === (0 || undefined) = this.entProp.length

    // for updateAppAuth: <Entitlement :entProp="this.$store.state.currUser.entitlement"></Entitlement>
    // for updateAppAuth-firsttime:  1> this.$store.state.register.entitlement.length === (0 || undefined)
    //                               2> this.$store.state.currUser.entitlement.length > (0 || undefined) < this.entProp.length
    // for updateAppAuth-prevstep:   1> this.$store.state.register.entitlement.length > (0 || undefined)
    //                               2> this.$store.state.currUser.entitlement.length > (0 || undefined) < this.entProp.length

    // UpdateAppAuth
    if (this.entProp.length > 0) {
      // UpdateAppAuth - use entitlement from register(when prevStep)
      if (this.$store.state.register.entitlement.length > 0) {
        this.reloadEntitlement(this.$store.state.register.entitlement)
      } else {
        // UpdateAppAuth - use entitlement from props
        this.reloadEntitlement(this.entProp)
        // save entitlement into register
        this.saveEntitlement()
      }
    } else {
      // RegisterPortal - use entitlement from register(when prevStep)
      if (this.$store.state.register.entitlement.length > 0) {
        this.reloadEntitlement(this.$store.state.register.entitlement)
      } else {
        // RegisterPortal - set entitlement initially
        // do nothing here for now
      }
    }
  },
  updated: function () {
    if (this.entitemval) {
      this.$parent.clearValidate('entitemval')
    }
  },
  methods: {
    // getEntitlement () {
    //   this.entitlementtype = Utils.entitlementtype
    //   console.log('getEntitlement===========', this.entitlementtype)
    //   for (let key in this.entitlementtype) {
    //     this.entitlementOptions.push(this.entitlementtype[key])
    //   }
    // },
    // handleEntChange () {
    //   this.$store.commit('SET_REGISTER_ENTITLEMENT', this.checkedEntitlement)
    // },
    handleCollaspeChange (val) {
      // console.log('handleCollaspeChange===', val)
    },
    codeToCtryName (code) {
      return this.$Utils.codeToCtryName(code)
    },
    handleGeoAttr: function (val) {
      this.ctryCodeVal = val
    },
    openEntDialog (val) {
      this.ctyTitle = this.$t('message.label.country') + ':'
      this.entitemflag = false
      this.entitemval = ''
      this.ctryCodeVal = ''
      this.dialogVisible = true
      this.diaTitle = val
      this.placeHolder = 'Please enter the ' + val
    },
    closeEntDialog (val) {
      this.entitemval = ''
      this.ctryCodeVal = ''
      this.dialogVisible = false
    },
    addEntItem: function (entArr, entId) {
      let pass = true
      if (!this.entitemval) {
        pass = false
        this.$parent.validateField('entitemval')
      }
      if (!this.ctryCodeVal) {
        pass = false
        this.$parent.validateField('hqcountry')
      }

      if (pass) {
        this.$parent.clearValidate(['hqcountry', 'entitemval'])
        // Adding first time, just push into array
        if (entArr.length === 0) {
          let arrTmp = this.entitemval.split(',').filter(item => item)
          for (let i = 0; i < arrTmp.length; i++) {
            entArr.push({
              entitlementtypeid: entId,
              value: arrTmp[i],
              country: this.ctryCodeVal
            })
          }
        } else {
          // Adding into existing array, check to see if it's already there..
          let arrTmp = this.entitemval.split(',').filter(item => item)
          for (let i = 0; i < arrTmp.length; i++) {
            let itemIndex = entArr.findIndex(
              (item, index, array) => item.value === arrTmp[i]
            )
            if (itemIndex < 0) {
              entArr.push({
                entitlementtypeid: entId,
                value: arrTmp[i],
                country: this.ctryCodeVal
              })
            } else {
              entArr.splice(itemIndex, 1, {
                entitlementtypeid: entId,
                value: arrTmp[i],
                country: this.ctryCodeVal
              })
            }
          }
        }
        this.dialogVisible = false
      }
    },
    addEntitlement (val) {
      if (val === 'INAC number(s)') {
        this.addEntItem(this.inacArray, 23)
      } else if (val === 'Company Number(s)') {
        this.addEntItem(this.compArray, 22)
      } else if (val === 'Enterprise Number(s)') {
        this.addEntItem(this.enterpArray, 20)
      } else if (val === 'Customer Number(s)') {
        this.addEntItem(this.custArray, 5)
      } else if (val === 'All Entitlement') {
        let pass = true
        if (!this.ctryCodeVal) {
          pass = false
          this.$parent.validateField('hqcountry')
        }
        if (pass) {
          this.$parent.clearValidate(['hqcountry'])
          this.allEntArray = [
            {
              entitlementtypeid: 26,
              value: '',
              country: this.ctryCodeVal
            }
          ]
          this.dialogVisible = false
        }
      }

      this.saveEntitlement()
    },
    saveEntitlement () {
      // if (this.allEntArray.length > 0) {
      //   this.$store.commit('SET_REGISTER_ENTITLEMENT', this.allEntArray)
      // } else {
      //   this.$store.commit(
      //     'SET_REGISTER_ENTITLEMENT',
      //     this.inacArray.concat(
      //       this.compArray,
      //       this.enterpArray,
      //       this.custArray
      //     )
      //   )
      // }
      this.$store.commit(
        'SET_REGISTER_ENTITLEMENT',
        this.allEntArray.concat(
          this.inacArray,
          this.compArray,
          this.enterpArray,
          this.custArray
        )
      )
      console.log(
        '============test==========',
        this.$store.state.register.entitlement
      )
    },
    editEntItem (index, entArr) {
      this.entitemflag = true
      if (entArr[index].entitlementtypeid === 26) {
        this.ctryCodeVal = this.allEntArray[index].country
        this.dialogVisible = true
        this.diaTitle = this.allEntTitle
        this.placeHolder = 'Please enter the ' + this.allEntTitle
      } else {
        this.entitemval = entArr[index].value
        this.ctryCodeVal = entArr[index].country
        this.dialogVisible = true
        if (entArr[index].entitlementtypeid === 23) {
          this.diaTitle = this.inacTitle
          this.placeHolder = 'Please enter the ' + this.inacTitle
        } else if (entArr[index].entitlementtypeid === 22) {
          this.diaTitle = this.compTitle
          this.placeHolder = 'Please enter the ' + this.compTitle
        } else if (entArr[index].entitlementtypeid === 20) {
          this.diaTitle = this.enterptTitle
          this.placeHolder = 'Please enter the ' + this.enterptTitle
        } else {
          this.diaTitle = this.custTitle
          this.placeHolder = 'Please enter the ' + this.custTitle
        }
      }
    },
    delEntItem (index, entArr) {
      // there is only one record for allEnt section, if it's delete, then store the others instead
      if (entArr[index].entitlementtypeid === 26) {
        this.allEntArray = []
      } else {
        entArr.splice(index, 1)
      }
      this.saveEntitlement()
    },
    reloadEntitlement (entVal) {
      for (let i = 0; i < entVal.length; i++) {
        if (entVal[i].entitlementtypeid === 5) {
          this.custArray.push(entVal[i])
        } else if (entVal[i].entitlementtypeid === 20) {
          this.enterpArray.push(entVal[i])
        } else if (entVal[i].entitlementtypeid === 22) {
          this.compArray.push(entVal[i])
        } else if (entVal[i].entitlementtypeid === 23) {
          this.inacArray.push(entVal[i])
        } else if (entVal[i].entitlementtypeid === 26) {
          this.allEntArray.push(entVal[i])
          this.ctryCodeVal2 = entVal[i].country
        } else {
          // do nothing
        }
      }
    },
    selectedCountry (country) {
      if (country === 'WW') {
        this.ctryCodeVal = country
      } else {
        this.ctryCodeVal = country.join(',')
      }
      // this.ctryCodeVal = country.join(',')
      console.log('this.ctryCodeVal', this.ctryCodeVal)
    },
    selectedCountry2 (country) {
      console.log('selectedCountry2-country: ', country)
      if (country === 'WW') {
        this.ctryCodeVal2 = country
      } else {
        this.ctryCodeVal2 = country.join(',')
      }
      // this.ctryCodeVal2 = country.join(',')
      // Empty allEntArray, avoid the allEntArray has a value(entitlementtypeid:26) when deselecting geotocountry
      if (country.length > 0) {
        this.allEntArray = [
          {
            entitlementtypeid: 26,
            value: '',
            country: this.ctryCodeVal2
          }
        ]
      } else {
        this.allEntArray = []
      }
      this.saveEntitlement()
    }
  }
}
// block browser rollback
history.pushState(null, null, document.URL)
window.addEventListener('popstate', function () {
  history.pushState(null, null, document.URL)
})
</script>
<style >
.el-dialog__header {
  padding: 10px 20px 10px;
}
.el-dialog--center .el-dialog__body {
  text-align: initial;
  padding: 25px 25px 8px;
}
.el-collapse-item__header {
  background-color: #ebeef5;
  height: 36px;
  padding-left: 1%;
  border-radius: 8px;
}
.el-button {
  margin-top: 1%;
  padding: 10px 18px;
}
.el-button.is-round {
  padding: 9px 13px;
}
.delete_button {
  padding: 1px 1px;
  border-radius: 10px;
}

.el-form-item__label {
  text-align: left;
}
.errorflag {
  color: #f56c6c;
  font-weight: bold;
}

.el-table td,
.el-table th.is-leaf {
  border-bottom: thin solid #ebeef5;
}

/* .el-card__body {
  padding: 0px;
} */
.bg-purple-dark {
  background: #ebeef5;
  padding: 6px 0;
}

/* ------------------------- */

.bg-purple-light {
  background: #e5e9f2;
}
.col-title {
  background: #f0f2f4;
  text-align: center;
  line-height: 36px;
  font-size: 0.9rem;
  font-weight: 600;
}
.grid-content {
  border-radius: 4px;
  min-height: 25px;
}
.el-col-24 {
  width: auto;
}
.addnew {
  /* margin-left: 15%;
  margin-bottom: 5%; */
  text-align: center;
  margin-bottom: 2%;
  font-size: 0.85rem;
}

/* .link {
  margin-left: 5%;
  margin-bottom: 5%;
} */
/* .linkallent {
  margin-bottom: 5%;
} */

.row {
  margin-left: 3%;
  margin-right: 3%;
}
.fontcountry {
  font-size: 0.85vw;
  word-break: break-all;
  margin-right: 3%;
}
.fontnumber {
  font-size: 0.85vw;
}
.allent_delete {
  margin-top: 0%;
  margin-bottom: 0%;
  padding: 0px 8px;
}
.delete {
  padding: 10px 6px;
}
.el-form-item {
  /* margin-bottom: 2% !important;
  width: 100% !important; */
  font-weight: bold;
}
</style>
