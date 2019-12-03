<template>
  <div>
    <!-- You have selected application: -->
    {{$t("message.copy.application_selected")}}
    <span class="line1">{{ appName }}</span>.
    <br />
    <!-- You have selected role: -->
    {{$t("message.copy.role_selected")}}
    <span class="line1">{{ roleName }}</span>.
    <br />
    <!-- Choose the country, countries, geography or geographies for which you require view capability.
    When approved, you will be able to view reqeusts that have been submitted with this/these country/geography choices
    as the headquarters location.-->
    {{$t("register.instruction15")}}
    <br />
    <br />
    <p class="errorflag">{{ flag }}</p>
    <br />

    <!-- Americas -->
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
        <el-checkbox
          class="line1"
          v-model="checkAllAmericas"
          @change="handleCkAllAmChg"
        >All Americas</el-checkbox>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card" shadow="hover">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Select Americas coutry" name="1">
                <!-- checkbox -->
                <!-- <el-checkbox
                  v-model="checkAllAmericas"
                  @change="handleCheckAllChange"
                  ref="checkall"
                >All Americas</el-checkbox>-->
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedAmCitiesCode" @change="handleCkAmCitiesChg">
                  <el-checkbox
                    style="width:10VW;!important;"
                    v-for="amCity in amCities"
                    :label="amCity.countrycode"
                    :key="amCity.countrycode"
                  >{{ amCity.countryname }}</el-checkbox>
                </el-checkbox-group>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <!-- Europe -->

    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
        <el-checkbox class="line1" v-model="checkAllEurope" @change="handleCkAllEuChg">All Europe</el-checkbox>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card" shadow="hover">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Select Europe country country" name="2">
                <!-- checkbox -->
                <!-- <el-checkbox v-model="checkAllEurope" @change="handleCheckAllChange1">All Europe</el-checkbox> -->
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedEuCitiesCode" @change="handleCkEuCitiesChg">
                  <el-checkbox
                    style="width:10VW;!important;"
                    v-for="euCity in euCities"
                    :label="euCity.countrycode"
                    :key="euCity.countrycode"
                  >{{euCity.countryname}}</el-checkbox>
                </el-checkbox-group>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <!-- AP -->

    <el-row>
      <el-col :span="4" class="line1">
        <div class="grid-content bg-purple"></div>
        <el-checkbox
          class="line1"
          v-model="checkAllAp"
          @change="handleCkAllApChg"
        >All Asia Patific country</el-checkbox>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card" shadow="hover">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Select Asia Pacific" name="3">
                <!-- checkbox -->
                <!-- <el-checkbox
                  v-model="checkAllAp"
                  @change="handleCheckAllChange2"
                >All Asia Patific country</el-checkbox>-->
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedApCitiesCode" @change="handleCkApCitiesChg">
                  <el-checkbox
                    style="width:10VW;!important;"
                    v-for="apCity in apCities"
                    :label="apCity.countrycode"
                    :key="apCity.countrycode"
                  >{{apCity.countryname}}</el-checkbox>
                </el-checkbox-group>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { get } from '../../common/request'

// const baseURL = `${process.env.VUE_APP_BASE_URL}`
// const cityOptions = ['上海', '北京', '广州', '深圳']
// const cityOptions1 = []
// const cityOptions2 = []
export default {
  data () {
    return {
      activeNames: ['1', '2', '3'],
      checkAllAmericas: false,
      checkAllEurope: false,
      checkAllAp: false,
      // checkedAmCities: [],
      // checkedEuCities: [],
      // checkedApcCities: [],
      amCities: [],
      euCities: [],
      apCities: [],
      // checkedAmericasCities: [],
      // checkedEuropeCities: [],
      // checkedApCities: [],
      amCitiesName: [],
      euCitiesName: [],
      apCitiesName: [],
      amCitiesCode: [],
      euCitiesCode: [],
      apCitiesCode: [],
      checkedAmCitiesCode: [],
      checkedEuCitiesCode: [],
      checkedApCitiesCode: [],
      ckAmCitiesCode: [],
      ckEuCitiesCode: [],
      ckApCitiesCode: []
      // errormessage: ''
      // rules: {
      //   checkall: [
      //     { required: true, message: 'w3 ID is required !', trigger: 'change' }
      //     { validator: validateUserid, trigger: 'blur' }
      //   ]
      //   useremail: [
      //     {
      //       required: true,
      //       message: 'Notes mail is required !',
      //       trigger: 'blur'
      //     },
      //     { validator: validateNotesmail, trigger: 'blur' }
      //   ]
      // }

      // isIndeterminate: true
    }
  },
  props: ['flag', 'appName', 'roleName'],
  created () {
    this.getCoutryCode()
  },
  methods: {
    // validate () {
    //   if (this.flag === 'error') {
    //     this.errormessage = 'Order Status is required!'
    //   }
    // },
    // async getUserInfo () {
    //   // const result = await post('http://localhost:9000/request/new/appviewer')
    //   const result = await get(baseURL + '/request/new/amOwner')
    //   console.log('-------test----')
    //   this.amCities = result.data.entilementinfo.cityOptions
    //   this.euCities = result.data.entilementinfo.cityOptions1
    //   this.apCities = result.data.entilementinfo.cityOptions2
    //   console.log(
    //     'resultent:',
    //     result.data.entilementinfo.cityOptions
    //     // '::',
    //     // result.data.info.name,
    //     // '::',
    //     // this.data
    //   )
    // },
    async getCoutryCode () {
      let result = await get('/app/setting/all')
      let americasCountryCode = []
      let europeCountryCode = []
      let apCountryCode = []
      americasCountryCode = result.americasArray
      europeCountryCode = result.europeArray
      apCountryCode = result.apArray

      for (let i = 0; i < americasCountryCode.length; i++) {
        this.amCities[i] =
          result.data.geotocountry.Americas[americasCountryCode[i]]
        this.amCitiesName[i] = this.amCities[i].countryname
        this.amCitiesCode[i] = this.amCities[i].countrycode
      }

      for (let i = 0; i < europeCountryCode.length; i++) {
        this.euCities[i] = result.data.geotocountry.Europe[europeCountryCode[i]]
        this.euCitiesName[i] = this.euCities[i].countryname
        this.euCitiesCode[i] = this.euCities[i].countrycode
      }

      for (let i = 0; i < apCountryCode.length; i++) {
        this.apCities[i] =
          result.data.geotocountry.AsiaPacific[apCountryCode[i]]
        this.apCitiesName[i] = this.apCities[i].countryname
        this.apCitiesCode[i] = this.apCities[i].countrycode
      }
      console.log('result', result)
      console.log('amCities', this.amCities)
    },
    // collapse
    handleChange (val) {
      console.log(val)
    },
    // Americas
    handleCkAllAmChg (amVal) {
      // this.checkedAmCities = val ? this.amCitiesName : []
      this.checkedAmCitiesCode = amVal ? this.amCitiesCode : []
      console.log('checkall', amVal) // true
      if (amVal) {
        // console.log('this.checkedAmCities : ' + this.checkedAmCities)
        console.log('this.checkedAmCitiesCode', this.checkedAmCitiesCode)
      }
      this.ckAmCitiesCode = JSON.stringify(this.checkedAmCitiesCode)
      console.log('this.ckAmCitiesCode ', this.ckAmCitiesCode)
      this.$emit('getallAmCitiesCode', this.ckAmCitiesCode)
      // this.checkedAmericasCities = JSON.stringify(this.checkedAmCities)
      // console.log('this.checkedAmericasCities', this.checkedAmericasCities)
      // this.$emit('getallAmericasCities', this.checkedAmericasCities)

      // const alllength = this.checkedAmCities.length
      // this.$emit('entileClick', alllength)
      // this.isIndeterminate = false
    },
    handleCkAmCitiesChg (amValue) {
      let checkedCount = amValue.length
      this.checkAllAmericas = checkedCount === this.amCitiesCode.length
      console.log('checkedCount:', checkedCount)
      this.$emit('entileClick', checkedCount)

      // this.checkecheckedAmCitiesdCities = value
      // console.log('checkedcities', this.checkedAmCities)
      this.checkedAmCitiesCode = amValue
      console.log('checkedAmCitiesCode', this.checkedAmCitiesCode)
      this.ckAmCitiesCode = JSON.stringify(this.checkedAmCitiesCode)
      this.$emit('getAmCitiesCode', this.ckAmCitiesCode)
      // this.checkedAmericasCities = JSON.stringify(this.checkedAmCities)
      // console.log('checkedAmericasCities', this.checkedAmericasCities)
      // this.$emit('getAmericasCities', this.checkedAmericasCities)
    },
    // Europe
    handleCkAllEuChg (euVal) {
      // this.checkedEuCities = val1 ? this.euCitiesName : []
      this.checkedEuCitiesCode = euVal ? this.euCitiesCode : []
      if (euVal) {
        // console.log('this.checkedEuCities : ' + this.checkedEuCities)
        console.log('this.checkedEuCitiesCode', this.checkedEuCitiesCode)
      }
      this.ckEuCitiesCode = JSON.stringify(this.checkedEuCitiesCode)
      console.log('this.ckEuCitiesCode', this.ckEuCitiesCode)
      this.$emit('getallEuCitiesCode', this.ckEuCitiesCode)
      // this.checkedEuropeCities = JSON.stringify(this.checkedEuCities)
      // console.log('checkedEuropeCities', this.checkedEuropeCities)
      // this.$emit('getallEuropeCities', this.checkedEuropeCities)
      // this.isIndeterminate = false
    },
    handleCkEuCitiesChg (euValue) {
      let checkedCount1 = euValue.length
      this.checkAllEurope = checkedCount1 === this.euCitiesCode.length
      this.$emit('entileClick', checkedCount1)

      this.checkedEuCitiesCode = euValue
      console.log('checkedEuCitiesCode', this.checkedEuCitiesCode)
      this.ckEuCitiesCode = JSON.stringify(this.checkedEuCitiesCode)
      console.log('this.ckEuCitiesCode', this.ckEuCitiesCode)
      this.$emit('getEuCitiesCode', this.ckEuCitiesCode)
      // this.checkedEuropeCities = JSON.stringify(this.checkedCities1)
      // console.log('checkedEuropeCities', this.checkedEuropeCities)

      // this.$emit('getEuropeCities', this.checkedEuropeCities)
      // this.isIndeterminate =
      //   checkedCount > 0 && checkedCount < this.amCities.length
    },
    // AP
    handleCkAllApChg (apVal) {
      this.checkedApCitiesCode = apVal ? this.apCitiesCode : []
      if (apVal) {
        // console.log('this.checkedApcCities : ' + this.checkedApcCities)
        console.log('this.checkedApCitiesCode', this.checkedApCitiesCode)
      }
      this.ckApCitiesCode = JSON.stringify(this.checkedApCitiesCode)
      console.log('this.checkedApCitiesCode', this.checkedApCitiesCode)
      this.$emit('getallApCitiesCode', this.ckApCitiesCode)
      // this.checkedApCities = JSON.stringify(this.checkedApcCities)
      // console.log('checkedApCities', this.checkedApCities)
      // this.$emit('getallApCities', this.checkedApCities)

      // this.isIndeterminate = false
    },
    handleCkApCitiesChg (apValue) {
      let checkedCount2 = apValue.length
      this.checkAllAp = checkedCount2 === this.apCitiesCode.length
      this.$emit('entileClick', checkedCount2)

      this.checkedApCitiesCode = apValue
      console.log('checkedApCitiesCode', this.checkedApCitiesCode)
      this.ckApCitiesCode = JSON.stringify(this.checkedApCitiesCode)
      console.log('this.ckApCitiesCode', this.ckApCitiesCode)
      this.$emit('getApCitiesCode', this.ckApCitiesCode)
      // this.checkedApCities = JSON.stringify(this.checkedApcCities)
      // console.log('checkedApCities', this.checkedApCities)
      // this.$emit('getApCities', this.checkedApCities)
      // this.isIndeterminate =
      //   checkedCount > 0 && checkedCount < this.amCities.length
    }
  }
}
</script>

<style scoped>
.line1 {
  font-weight: 700;
}
/* layout */
.el-row {
  margin-bottom: 20px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
.el-col {
  border-radius: 4px;
}
/* card */
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 900px;
}
.errorflag {
  color: red;
}
</style>
