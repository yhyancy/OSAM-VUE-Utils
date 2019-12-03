<template>
  <div>
    <el-form-item label="Country: " prop="hqcountry">
      <el-select
        style="margin-right:20px; width:35%"
        v-model="conSelectedVal"
        multiple
        clearable
        placeholder="Please select Continent..."
        @change="handleConChange"
      >
        <el-option
          v-for="item in conOptions"
          :key="item"
          :label="item"
          :value="item"></el-option>
      </el-select>
      <span> - </span>
      <el-select
        style="margin-left:20px; width:35%"
        v-model="ctrySelectedVal"
        filterable
        multiple
        collapse-tags
        clearable
        @change="handleCtryChange"
        placeholder="Please select country..."
      >
        <el-option
          v-for="(value, key) in ctryOptons"
          :key="key"
          :label="value.countryname"
          :value="key"
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
      amOptions: {},
      euOptions: {},
      apOptions: {},
      conOptions: ['ALL', 'All Americas', 'All Europe', 'All Asia Pacific'],
      conSelectedVal: [],
      ctryOptons: {},
      ctrySelectedVal: []
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

    if (this.ctryCodeProp !== '') {
      this.ctrySelectedVal = this.ctryCodeProp.split(',')
    }
  },
  methods: {
    getAppSetting () {
      this.wwOption = this.$Utils.geotocountry['World Wide']
      this.amOptions = this.$Utils.geotocountry['Americas']
      this.euOptions = this.$Utils.geotocountry['Europe']
      this.apOptions = this.$Utils.geotocountry['Asia Pacific']
      this.ctryOptons = { ...this.wwOption, ...this.amOptions, ...this.euOptions, ...this.apOptions }
    },
    handleConChange (val) {
      this.ctrySelectedVal = []
      if (val.includes('ALL')) {
        this.conSelectedVal = ['ALL']
        this.ctrySelectedVal = Object.keys(this.wwOption)
      } else {
        if (val.includes('All Europe')) {
          this.ctrySelectedVal = Object.keys(this.euOptions).concat(this.ctrySelectedVal)
        }
        if (val.includes('All Americas')) {
          this.ctrySelectedVal = Object.keys(this.amOptions).concat(this.ctrySelectedVal)
        }
        if (val.includes('All Asia Pacific')) {
          this.ctrySelectedVal = Object.keys(this.apOptions).concat(this.ctrySelectedVal)
        }
        if (this.conSelectedVal.length === 3) {
          this.conSelectedVal = ['ALL']
          this.ctrySelectedVal = Object.keys(this.wwOption)
        }
      }
      this.$emit('GeoCtryEvent', this.ctrySelectedVal.toString())
    },
    handleCtryChange (val) {
      this.conSelectedVal = []
      if (val.includes('WW')) {
        this.conSelectedVal = ['ALL']
        this.ctrySelectedVal = Object.keys(this.wwOption)
      } else {
        if (Object.keys(this.amOptions).every(option => val.includes(option))) {
          this.conSelectedVal.push('All Americas')
        }
        if (Object.keys(this.euOptions).every(option => val.includes(option))) {
          this.conSelectedVal.push('All Europe')
        }
        if (Object.keys(this.apOptions).every(option => val.includes(option))) {
          this.conSelectedVal.push('All Asia Pacific')
        }
        if (val.length === (Object.keys(this.ctryOptons).length - 1)) {
          this.conSelectedVal = ['ALL']
          this.ctrySelectedVal = Object.keys(this.wwOption)
        }
      }
      this.$emit('GeoCtryEvent', this.ctrySelectedVal.toString())
    }
  }
}
</script>
