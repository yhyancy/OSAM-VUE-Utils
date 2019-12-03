<template>
  <el-form-item label="Country:" prop="hqcountry">
    <el-select
      v-model="ctrySelectedVal"
      value-key="countrycode"
      filterable
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
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      ctryOptons: [],
      ctrySelectedVal: ''
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
      this.ctrySelectedVal = this.ctryCodeProp
    }
  },
  methods: {
    getAppSetting () {
      this.amOptions = this.$Utils.geotocountry['Americas']
      this.euOptions = this.$Utils.geotocountry['Europe']
      this.apOptions = this.$Utils.geotocountry['Asia Pacific']
      this.ctryOptons = { ...this.amOptions, ...this.euOptions, ...this.apOptions }
    },
    handleCtryChange (val) {
      this.$emit('GeoCtryEvent', val)
    }
  }
}
</script>
