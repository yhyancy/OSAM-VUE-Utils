<template>
  <div class="osam-page-ibm-font">
    <p style="font-size:0.85rem; padding:0; font-style:italic; margin-left:20px">
      {{$t("message.copy.application_selected")}}
      <b
        style="font-style:normal; font-size:0.85rem;"
      >&nbsp; {{ appDisplay }}</b>
    </p>
    <p style="font-size:0.85rem ; font-style:italic; margin-left:20px">
      {{$t("message.copy.role_selected")}} &nbsp;
      <b
        style="font-style:normal; font-size:0.85rem;"
      >{{ roleDisplay }}</b>
    </p>
    <!-- {{$t("register.instruction15")}}
    <br />
    <br />-->
    <!-- <div v-if="this.$store.state.register.authorization.roleid === 20">
      <el-form-item :label="$t('message.label.cso_center') +':'" prop="csoid">
        <el-select
          v-model="attributes.csoid"
          @change="handleCsoChange"
          :placeholder="$t('message.question.cso_center')"
        >
          <el-option v-for="item in csoOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
    </div>-->

    <!-- <div
      v-if="this.$store.state.register.authorization.roleid === 20 ||
               this.$store.state.register.authorization.roleid === 21 ||
               this.$store.state.register.authorization.roleid === 28 ||
               this.$store.state.register.authorization.roleid === 29"
    >
      <GeoMutipleAttr v-on:GeoCtryEvent="handleGeoAttr" :ctryCodeProp="attributes.hqcountry"></GeoMutipleAttr>
    </div>-->

    <el-card shadow="hover">
      <div
        v-if="this.$store.state.register.authorization.roleid === 16 ||
               this.$store.state.register.authorization.roleid === 17"
      >
        <!-- get GeoSingleAttr -->
        <!-- <GeoSingleAttr v-on:GeoCtryEvent="handleGeoAttr" :ctryCodeProp="attributes.hqcountry"></GeoSingleAttr> -->

        <!-- select relationship -->

        <!-- <el-form-item :label="$t('message.label.relationship') + ':'" prop="relationship">
        <el-radio-group v-model="rlsVal" size="medium" @change="handleRlsChange">
          <el-radio :label="val" :key="key" v-for="(val,key) in relationship"></el-radio>
        </el-radio-group>
        </el-form-item>-->

        <el-form-item
          class="registerAttrContent"
          :label="$t('message.label.relationship') + ':'"
          prop="relationship"
        >
          <el-select
            ref="relationship"
            style="width: 30%"
            v-model="rlsVal"
            @change="handleRlsChange"
            :placeholder="$t('message.select_one')"
          >
            <el-option v-for="item in relationship" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>

        <!-- select access type -->
        <!-- <el-form-item :label="$t('message.label.accesstype') + ':'" prop="usage"> -->
        <!-- // TODO: if use slect but not radio, don't need to do this convert... -->
        <!-- <el-radio-group v-model="actVal" size="medium" @change="handleActChange">
          <el-radio :label="val" :key="key" v-for="(val,key) in accesstype"></el-radio>
        </el-radio-group>
        </el-form-item>-->

        <el-form-item
          class="registerAttrContent"
          :label="$t('message.label.accesstype') + ':'"
          prop="usage"
        >
          <el-select
            style="width: 30%"
            v-model="actVal"
            @change="handleActChange"
            :placeholder="$t('message.select_one')"
          >
            <el-option v-for="item in accesstype" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>

        <!-- select  Orders -->
        <!-- <el-form-item label="Orders:">
        <el-checkbox-group v-model="orderVal" @change="handleOrderChange">
          <el-checkbox :label="val" :key="key" v-for="(val,key) in ordersOption"></el-checkbox>
        </el-checkbox-group>
        </el-form-item>-->

        <!-- date format -->
        <el-form-item
          class="registerAttrContent"
          :label="$t('message.label.dateformat')+ ':'"
          prop="dateformat"
        >
          <el-select
            style="width: 30%"
            v-model="attributes.dateformat"
            placeholder="please select date format"
            @change="handleDfChange"
          >
            <el-option v-for="item in dfOption" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>

        <!-- select optional details -->
        <el-form-item
          class="registerAttrContent"
          :label="$t('register.field.optionaldetails.value') + ':'"
        >
          <!-- price -->
          <el-checkbox
            v-model="priceChecked"
            @change="handlePriceChange"
          >{{$t('register.field.optionaldetails.option1')}}</el-checkbox>
          <br />
          <!-- federal -->
          <el-checkbox
            v-model="federalChecked"
            @change="handleFederalChange"
          >{{$t('register.field.optionaldetails.option2')}}</el-checkbox>
        </el-form-item>
      </div>
    </el-card>
  </div>
</template>

<style>
</style>

<script>
export default {
  components: {
    // GeoSingleAttr: () => import('../../components/GeoSingleAttr'),
    // GeoMutipleAttr: () => import('../../components/GeoMutipleAttr')
  },
  data () {
    return {
      attributes: {
        usage: 'C',
        channels: '',
        dateformat: 'MM/dd/yyyy',
        price: 'N',
        relationship: '',
        segment: '',
        federal: 'N'
        // csoid: '',
        // hqcountry: ''
      },
      // csocenter: {},
      // csoOptions: [],
      rlsVal: '',
      relationship: {},
      actVal: 'Casual',
      accesstype: {},
      // orderVal: [], // no use in OSAM anymore
      // ordersOption: {}, // no use in OSAM anymore
      priceChecked: false,
      price: {},
      federalChecked: false,
      federal: {},
      dfOption: []
    }
  },
  props: {
    attrProp: {
      type: Object
    }
  },
  created: function () {
    // get countrycode/name information
    this.getAppSetting()

    // UpdateAppAuth
    if (this.attrProp) {
      // UpdateAppAuth - use attributes from register(when prevStep)
      if (this.$store.state.register.attributes.relationship) {
        // TODO: change hqcountry to relationship when moved csoid&hqcountry to authorization
        this.reloadAttributes(this.$store.state.register.attributes)
      } else {
        // UpdateAppAuth - use attributes from props
        this.reloadAttributes(this.attrProp)
        this.$store.commit('SET_REGISTER_ATTRIBUTES', this.attributes)
      }
    } else {
      // RegisterPortal - use attributes from register(when prevStep)
      if (this.$store.state.register.attributes.relationship) {
        // TODO: change hqcountry to relationship when moved csoid&hqcountry to authorization
        this.reloadAttributes(this.$store.state.register.attributes)
      } else {
        // RegisterPortal - set attributes initially
        // do nothing here
      }
    }
  },
  computed: {
    appDisplay: function () {
      return this.$Utils.application[
        this.$store.state.register.authorization.applicationid
      ].name
    },
    roleDisplay: function () {
      return this.$Utils.irrole[this.$store.state.register.authorization.roleid]
        .name
    }
  },
  watch: {
    // 'attributes.csoid': function (newVal, oldVal) {
    //   if (this.attributes.csoid) {
    //     this.$parent.clearValidate('csoid')
    //   }
    // },
    // 'attributes.hqcountry': function (newVal, oldVal) {
    //   if (this.attributes.hqcountry) {
    //     this.$parent.clearValidate('hqcountry')
    //   }
    // },
    'attributes.relationship': function (newVal, oldVal) {
      if (this.attributes.relationship) {
        this.$parent.clearValidate('relationship')
      }
    },
    'attributes.usage': function (newVal, oldVal) {
      if (this.attributes.usage) {
        this.$parent.clearValidate('usage')
      }
    },
    'attributes.dateformat': function (newVal, oldVal) {
      if (this.attributes.dateformat) {
        this.$parent.clearValidate('dateformat')
      }
    }
  },
  mounted () {
    // 定位焦点focus(relationship)
    this.$refs.relationship.focus()
  },
  methods: {
    getAppSetting () {
      // this.csocenter = Utils.csocenter
      this.relationship = this.$Utils.relationship
      this.accesstype = this.$Utils.usage
      this.ordersOption = this.$Utils.segment
      this.price = this.$Utils.price
      this.federal = this.$Utils.federal
      this.dfOption = this.$Utils.dateformat

      // for (let key in this.csocenter) {
      //   this.csoOptions.push(this.csocenter[key])
      // }
      // external appuser can not choose 'E': 'IBM or Lenovo employee'
      if (this.$store.state.register.authorization.roleid === 16) {
        delete this.relationship['E']
      }
    },
    // handleCsoChange (val) {
    //   this.$store.commit('SET_REGISTER_ATTRIBUTES', this.attributes)
    // },
    handleRlsChange (val) {
      for (let key in this.relationship) {
        if (this.relationship[key] === val) {
          this.attributes.relationship = key
        }
      }
      this.$store.commit('SET_REGISTER_ATTRIBUTES', this.attributes)
    },
    handleActChange (val) {
      for (let key in this.accesstype) {
        if (this.accesstype[key] === val) {
          this.attributes.usage = key
        }
      }
      this.$store.commit('SET_REGISTER_ATTRIBUTES', this.attributes)
    },
    // handleOrderChange (val) {
    //   for (let key in this.ordersOption) {
    //     if (this.ordersOption[key] === val) {
    //       this.attributes.segment = key
    //     }
    //   }
    // },
    handlePriceChange () {
      if (this.priceChecked) {
        this.attributes.price = 'Y'
        this.$store.commit('SET_REGISTER_ATTRIBUTES', this.attributes)
      } else {
        this.attributes.price = 'N'
        this.$store.commit('SET_REGISTER_ATTRIBUTES', this.attributes)
      }
    },
    handleFederalChange () {
      if (this.federalChecked) {
        this.attributes.federal = 'Y'
        this.$store.commit('SET_REGISTER_ATTRIBUTES', this.attributes)
      } else {
        this.attributes.federal = 'N'
        this.$store.commit('SET_REGISTER_ATTRIBUTES', this.attributes)
      }
    },
    handleDfChange (val) {
      this.$store.commit('SET_REGISTER_ATTRIBUTES', this.attributes)
    },
    // handleGeoAttr: function (val) {
    //   this.attributes.hqcountry = val
    //   this.$store.commit('SET_REGISTER_ATTRIBUTES', this.attributes)
    // },
    reloadAttributes (attrVal) {
      this.attributes = { ...attrVal }
      if (attrVal.relationship) {
        this.rlsVal = this.$Utils.relationship[attrVal.relationship]
      }
      if (attrVal.usage) {
        this.actVal = this.$Utils.usage[attrVal.usage]
      }
      if (attrVal.price) {
        if (attrVal.price === 'Y') {
          this.priceChecked = true
        }
      }
      if (attrVal.federal) {
        if (attrVal.federal === 'Y') {
          this.federalChecked = true
        }
      }
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
.registerAttrContent {
  font-size: 0.9rem;
}
.el-form-item__label {
  font-size: 0.9rem !important;
  /* text-align: left; */
}
.el-form-item {
  /* margin-bottom: 2% !important;
  width: 100% !important; */
  font-weight: bold;
}
</style>
