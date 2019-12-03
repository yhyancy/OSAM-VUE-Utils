<template>
  <div>
    <el-form-item :label="countryLabel" style="margin-bottom:0%" :required="countryLabel==='Country:'?true:false">
      <el-checkbox-group v-model="selectedGeo" :disabled="!countryEditable">
        <el-checkbox
          @change="changeGeoCheck(item)"
          style="width:29%"
          v-for="item in countryList1.filter(item => item.geoid>0)"
          :label="item.geoid"
          :key="item.geoid"
        >{{$t(item.geoname)}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item prop="hqcountry">
      <el-select
        v-model="AmericasCountry"
        multiple
        collapse-tags
        @change="changeCity1"
        @remove-tag="removeGeo"
        placeholder="select Americas countries"
        style="width:30%;padding-right:10px"
        :disabled="!countryEditable"
      >
        <el-option
          v-for="item in city1"
          :key="item.countrycode"
          :label="item.countryname"
          :value="item.countrycode"
        ></el-option>
      </el-select>
      <el-select
        v-model="EuropeCountry"
        multiple
        collapse-tags
        @change="changeCity2"
        @remove-tag="removeGeo"
        placeholder="select Europe countries"
        style="width:30%;padding-right:10px"
        :disabled="!countryEditable"
      >
        <el-option
          v-for="item in city2"
          :key="item.countrycode"
          :label="item.countryname"
          :value="item.countrycode"
        ></el-option>
      </el-select>
      <el-select
        v-model="APCountry"
        multiple
        collapse-tags
        @change="changeCity3"
        @remove-tag="removeGeo"
        placeholder="select AP countries"
        style="width:30%;padding-right:10px"
        :disabled="!countryEditable"
      >
        <el-option
          v-for="item in city3"
          :key="item.countrycode"
          :label="item.countryname"
          :value="item.countrycode"
        ></el-option>
      </el-select>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: 'GeoToCountry',
  props: ['countryData', 'countryTitle', 'editable'],
  data () {
    return {
      countryEditable: true,
      countryLabel: '',
      selectedGeo: [],
      AmericasCountry: '',
      EuropeCountry: '',
      APCountry: '',
      initAmericas: '',
      initEurope: '',
      initAP: '',
      americasCountryCode: this.$Utils.americasCountryCode,
      europeCountryCode: this.$Utils.europeCountryCode,
      apCountryCode: this.$Utils.apCountryCode,
      countryList1: this.$Utils.geo,
      countryList2: [],
      city1: [],
      city2: [],
      city3: [],
      country: []
    }
  },
  created: function () {
    console.log('------created start-------')
    console.log(this.americasCountryCode)
    console.log('this.editable', this.editable)
    this.countryEditable = this.editable
    this.countryLabel = this.countryTitle
    for (let i = 0; i < this.americasCountryCode.length; i++) {
      this.city1.push(
        this.$Utils.geotocountry.Americas[this.americasCountryCode[i]]
      )
    }
    for (let i = 0; i < this.europeCountryCode.length; i++) {
      this.city2.push(
        this.$Utils.geotocountry.Europe[this.europeCountryCode[i]]
      )
    }
    for (let i = 0; i < this.apCountryCode.length; i++) {
      this.city3.push(
        this.$Utils.geotocountry['Asia Pacific'][this.apCountryCode[i]]
      )
    }
    this.countryList2.push(...this.city1)
    this.countryList2.push(...this.city2)
    this.countryList2.push(...this.city3)
    console.log('init前', this.countryData)
    if (this.countryData.length > 0) {
      this.init()
    }
    console.log('init后', this.countryData)
    console.log('------created   end-------')
  },
  watch: {
    // 父组件传入数据时 监听传入值变化 正确获得初始值
    countryData: {
      deep: true,
      handler (nv, ov) {
        console.log('我是new watch', nv)
        console.log('我是old watch', ov)
        this.init(nv)
      }
    },
    editable:{
      deep: true,
      handler (nv, ov) {
        console.log('我是editable的nv',nv)
        console.log('我是editable的ov',ov)
        this.countryEditable = nv
      }
    }
  },
  methods: {
    changeGeoCheck (item) {
      console.log('item.geoid', item.geoid)
      console.log('selectedGeo1', this.selectedGeo)
      if (item.geoid === 1) {
        console.log('this.initAmericas', this.initAmericas)
        // Americas
        this.AmericasCountry = []
        console.log(this.selectedGeo)
        if (this.selectedGeo.includes(1)) {
          this.AmericasCountry.push(...this.americasCountryCode)
          this.country.push(...this.americasCountryCode)
          // remove duplicate items from array
          this.country = Array.from(new Set(this.country))
        } else {
          this.AmericasCountry = this.initAmericas
          this.country = this.country.filter(
            (value, index) => !this.americasCountryCode.includes(value)
          )
          console.log('test country', this.country)
        }
      } else if (item.geoid === 2) {
        // Europe
        this.EuropeCountry = []
        if (this.selectedGeo.includes(2)) {
          this.EuropeCountry.push(...this.europeCountryCode)
          this.country.push(...this.europeCountryCode)
          // remove duplicate items from array
          this.country = Array.from(new Set(this.country))
        } else {
          this.EuropeCountry = this.initEurope
          this.country = this.country.filter(
            (value, index) => !this.europeCountryCode.includes(value)
          )
        }
      } else if (item.geoid === 3) {
        // AP
        this.APCountry = []
        if (this.selectedGeo.includes(3)) {
          console.log('this.apCountryCode', this.apCountryCode)
          this.APCountry.push(...this.apCountryCode)
          console.log('this.APCountry', this.APCountry)
          this.country.push(...this.apCountryCode)
          console.log('this.country1', this.country)
          // remove duplicate items from array
          this.country = Array.from(new Set(this.country))
          console.log('this.country2', this.country)
        } else {
          this.APCountry = this.initAP
          this.country = this.country.filter(
            (value, index) => !this.apCountryCode.includes(value)
          )
        }
      }
      console.log('切换country', this.country)
      console.log('selectedGeo', this.selectedGeo)
      if (this.selectedGeo.length === 3) {
        console.log('全选返回WW')
        this.$emit('selectedCountry', 'WW')
      } else {
        this.$emit('selectedCountry', this.country)
      }
    },
    removeGeo (event) {
      console.log('------------removeGeo start----------')
      console.log(event)
      console.log('------------removeGeo   end----------')
    },
    changeCity1 (event) {
      console.log('------------changeCity1 start----------')
      console.log(event)
      console.log('step 1', this.country)
      // filter the Americas country already exists
      this.country = this.country.filter(
        v => !this.americasCountryCode.includes(v)
      )
      console.log(event)
      console.log('step 2', this.country)
      if (event.length < this.americasCountryCode.length) {
        // this.selectedGeo.splice(this.selectedGeo.findIndex(item => item === 1), 1)
        this.selectedGeo = this.selectedGeo.filter(item => item !== 1)
      } else {
        this.selectedGeo.push(1)
      }
      console.log('country', this.country)
      this.country.push(...event)
      console.log('step 3', this.country)
      this.$emit('selectedCountry', this.country)
      this.selectedGeo = Array.from(new Set(this.selectedGeo))
      console.log('------------changeCity1   end----------')
    },
    changeCity2 (event) {
      console.log('------------changeCity2 start----------')
      console.log('step 1', this.country)
      // this.europeCountryCode.forEach(item => {
      //   this.country.splice(this.country.findIndex(v => v === item), 1)
      // })
      // filter the Europe country already exists
      this.country = this.country.filter(
        v => !this.europeCountryCode.includes(v)
      )
      console.log('step 2', this.country)
      if (event.length < this.europeCountryCode.length) {
        this.selectedGeo = this.selectedGeo.filter(item => item !== 2)
      } else {
        this.selectedGeo.push(2)
      }
      this.country.push(...event)
      console.log('step 3', this.country)
      this.$emit('selectedCountry', this.country)
      this.selectedGeo = Array.from(new Set(this.selectedGeo))
      console.log('------------changeCity2   end----------')
    },
    changeCity3 (event) {
      console.log('------------changeCity3 start----------')
      console.log('step 1', this.country)
      // filter the AP country already exists
      this.country = this.country.filter(v => !this.apCountryCode.includes(v))
      console.log('step 2', this.country)
      if (event.length < this.apCountryCode.length) {
        this.selectedGeo = this.selectedGeo.filter(item => item !== 3)
      } else {
        this.selectedGeo.push(3)
      }
      this.country.push(...event)
      console.log('step 3', this.country)
      this.$emit('selectedCountry', this.country)
      this.selectedGeo = Array.from(new Set(this.selectedGeo))
      console.log('------------changeCity3   end----------')
    },
    init () {
      console.log('------------------init-----------------')
      console.log('init start countrydata', this.countryData)
      console.log('init start country', this.country)
      if (this.countryData === 'WW') {
        console.log('WWgeo', this.countryData)
        this.selectedGeo = [1, 2, 3]
        this.initAmericas = this.americasCountryCode
        this.initEurope = this.europeCountryCode
        this.initAP = this.apCountryCode
        this.AmericasCountry = this.americasCountryCode
        this.EuropeCountry = this.europeCountryCode
        this.APCountry = this.apCountryCode
        this.country.push(...this.initAmericas)
        this.country.push(...this.initEurope)
        this.country.push(...this.initAP)
        this.selectedGeo = Array.from(new Set(this.selectedGeo))
        this.country = Array.from(new Set(this.country))
      } else {
        this.country = []
        this.selectedGeo = []
        let countryArray = this.countryData.split(',')
        this.AmericasCountry = countryArray.filter((value, index) =>
          this.americasCountryCode.includes(value)
        )
        console.log('init AmericasCountry', this.AmericasCountry)
        this.initAmericas = this.AmericasCountry
        if (this.AmericasCountry.length === this.americasCountryCode.length) {
          this.selectedGeo.push(1)
        }
        console.log('init country', this.country)
        this.country.push(...this.AmericasCountry)
        console.log('init country', this.country)
        console.log(this.AmericasCountry)
        this.EuropeCountry = countryArray.filter((value, index) =>
          this.europeCountryCode.includes(value)
        )
        this.initEurope = this.EuropeCountry
        if (this.EuropeCountry.length === this.europeCountryCode.length) {
          this.selectedGeo.push(2)
        }
        this.country.push(...this.EuropeCountry)
        console.log(this.EuropeCountry)
        this.APCountry = countryArray.filter((value, index) =>
          this.apCountryCode.includes(value)
        )
        this.initAP = this.APCountry
        if (this.APCountry.length === this.apCountryCode.length) {
          this.selectedGeo.push(3)
        }
        this.country.push(...this.APCountry)
        console.log(this.APCountry)
        console.log('init country', this.country)
        this.$emit('selectedCountry', this.country)
        console.log('init end countrydata', this.countryData)
        this.selectedGeo = Array.from(new Set(this.selectedGeo))
        console.log(this.selectedGeo)
      }
    }
  }
}
</script>
<style scoped lang="scss">
.el-form-item {
  margin-bottom: 2% !important;
  width: 100% !important;
  font-weight:bold;}
</style>
