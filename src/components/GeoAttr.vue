<template>
  <div>
    <el-form-item label="Americas: " prop="hqcountry">
      <el-select
        style="width: 97%"
        v-model="amSelectedVal"
        value-key="countrycode"
        @change="handleAmChange"
        multiple
        collapse-tags
        clearable
        placeholder="Please select Americas Countries..."
      >
        <el-option
          v-for="item in amOptions"
          :key="item.countrycode"
          :label="item.countryname"
          :value="item"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Europe: " prop="hqcountry">
      <el-select
        style="width: 97%"
        v-model="euSelectedVal"
        value-key="countrycode"
        @change="handleEuChange"
        multiple
        collapse-tags
        clearable
        placeholder="Please select Europe Countries..."
      >
        <el-option
          v-for="item in euOptions"
          :key="item.countrycode"
          :label="item.countryname"
          :value="item"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Asia-Pacific: " prop="hqcountry">
      <el-select
        style="width: 97%"
        v-model="apSelectedVal"
        value-key="countrycode"
        @change="handleApChange"
        multiple
        collapse-tags
        clearable
        placeholder="Please select Asia-Pacific Countries..."
      >
        <el-option
          v-for="item in apOptions"
          :key="item.countrycode"
          :label="item.countryname"
          :value="item"
        ></el-option>
      </el-select>
    </el-form-item>
  </div>
</template>

<style>
</style>

<script>

export default {
  data () {
    return {
      worldWide: {},
      amOptions: [],
      amSelectedVal: [],
      amOldSelTmp: [],
      amAllCtryOption: {
        countrycode: 'ALLAM',
        countryname: 'All Americas Countries',
        geoid: 0
      },
      euOptions: [],
      euSelectedVal: [],
      euOldSelTmp: [],
      euAllCtryOption: {
        countrycode: 'ALLEU',
        countryname: 'All Europe Countries',
        geoid: 0
      },
      apOptions: [],
      apSelectedVal: [],
      apOldSelTmp: [],
      apAllCtryOption: {
        countrycode: 'ALLAP',
        countryname: 'All Asia-Pacific Countries',
        geoid: 0
      }
    }
  },
  props: {
    ctryCodeProp: {
      type: String,
      default: () => {
        return ''
      }
    }
  },

  created: function () {
    // get countrycode/name information
    this.getAppSetting()
  },
  methods: {
    getAppSetting () {
      this.worldWide = this.$Utils.getCtryOptions('World Wide')
      this.amOptions = this.$Utils.getCtryOptions('Americas')
      this.amOptions.unshift(this.amAllCtryOption)
      this.euOptions = this.$Utils.getCtryOptions('Europe')
      this.euOptions.unshift(this.euAllCtryOption)
      this.apOptions = this.$Utils.getCtryOptions('Asia Pacific')
      this.apOptions.unshift(this.apAllCtryOption)

      if (this.ctryCodeProp !== '') {
        let tempArr = this.$Utils.codeToCountry(this.ctryCodeProp)
        const self = this
        tempArr.forEach((item, index, arr) => {
          switch (item['geoid']) {
            case 1:
              self.amSelectedVal.push(item)
              break
            case 2:
              self.euSelectedVal.push(item)
              break
            case 3:
              self.apSelectedVal.push(item)
              break
            default:
              self.amSelectedVal = this.amOptions
              self.euSelectedVal = this.euOptions
              self.apSelectedVal = this.apOptions
              break
          }
        })
      } else {
        console.log(this.amSelectedVal)
        this.amSelectedVal = []
        this.euSelectedVal = []
        this.apSelectedVal = []
      }
    },
    handleAmChange (val) {
      // used to store the previous val
      const oldVal = this.amOldSelTmp.length === 1 ? this.amOldSelTmp[0] : []
      // if select all
      if (val.includes(this.amAllCtryOption)) {
        this.amSelectedVal = this.amOptions
      }
      // if unselect all
      if (
        oldVal.includes(this.amAllCtryOption) &&
        !val.includes(this.amAllCtryOption)
      ) {
        this.amSelectedVal = []
      }
      // if select all the others
      if (
        !oldVal.includes(this.amAllCtryOption) &&
        !val.includes(this.amAllCtryOption)
      ) {
        if (val.length === this.amOptions.length - 1) {
          this.amSelectedVal = this.amOptions
        }
      }
      // save current val for next usage
      this.amOldSelTmp[0] = this.amSelectedVal

      const hqCtryRes = this.getHqCountry()
      this.$emit('GeoAttrEvent', hqCtryRes)
    },
    handleEuChange (val) {
      // used to store the previous val
      const oldVal = this.euOldSelTmp.length === 1 ? this.euOldSelTmp[0] : []
      // if select all
      if (val.includes(this.euAllCtryOption)) {
        this.euSelectedVal = this.euOptions
      }
      // if unselect all
      if (
        oldVal.includes(this.euAllCtryOption) &&
        !val.includes(this.euAllCtryOption)
      ) {
        this.euSelectedVal = []
      }
      // if select all the others
      if (
        !oldVal.includes(this.euAllCtryOption) &&
        !val.includes(this.euAllCtryOption)
      ) {
        if (val.length === this.euOptions.length - 1) {
          this.euSelectedVal = this.euOptions
        }
      }
      // save current val for next usage
      this.euOldSelTmp[0] = this.euSelectedVal

      const hqCtryRes = this.getHqCountry()
      this.$emit('GeoAttrEvent', hqCtryRes)
    },
    handleApChange (val) {
      // used to store the previous val
      const oldVal = this.apOldSelTmp.length === 1 ? this.apOldSelTmp[0] : []
      // if select all
      if (val.includes(this.apAllCtryOption)) {
        this.apSelectedVal = this.apOptions
      }
      // if unselect all
      if (
        oldVal.includes(this.apAllCtryOption) &&
        !val.includes(this.apAllCtryOption)
      ) {
        this.apSelectedVal = []
      }
      // if select all the others
      if (
        !oldVal.includes(this.apAllCtryOption) &&
        !val.includes(this.apAllCtryOption)
      ) {
        if (val.length === this.apOptions.length - 1) {
          this.apSelectedVal = this.apOptions
        }
      }
      // save current val for next usage
      this.apOldSelTmp[0] = this.apSelectedVal

      const hqCtryRes = this.getHqCountry()
      this.$emit('GeoAttrEvent', hqCtryRes)
    },
    getHqCountry () {
      let ctryNameAll = []
      let ctryCodeAll = []
      // concat country name to amCtryDisplay
      for (let i = 0; i < this.amSelectedVal.length; i++) {
        if (this.amSelectedVal[i].countrycode !== 'ALLAM') {
          ctryNameAll.push(this.amSelectedVal[i].countryname)
          ctryCodeAll.push(this.amSelectedVal[i].countrycode)
        }
      }
      // concat country name to euCtryDisplay
      for (let i = 0; i < this.euSelectedVal.length; i++) {
        if (this.euSelectedVal[i].countrycode !== 'ALLEU') {
          ctryNameAll.push(this.euSelectedVal[i].countryname)
          ctryCodeAll.push(this.euSelectedVal[i].countrycode)
        }
      }
      // concat country name to apCtryDisplay
      for (let i = 0; i < this.apSelectedVal.length; i++) {
        if (this.apSelectedVal[i].countrycode !== 'ALLAP') {
          ctryNameAll.push(this.apSelectedVal[i].countryname)
          ctryCodeAll.push(this.apSelectedVal[i].countrycode)
        }
      }
      // if select all countries, use 'ww - World Wide'
      if (
        this.amSelectedVal.length === this.amOptions.length &&
        this.euSelectedVal.length === this.euOptions.length &&
        this.apSelectedVal.length === this.apOptions.length
      ) {
        return {
          countrycode: this.worldWide.countrycode,
          countryname: this.worldWide.countryname
        }
      } else {
        return {
          countrycode: ctryCodeAll.join(','),
          countryname: ctryNameAll.join(',')
        }
      }
    }
  }
}
</script>
