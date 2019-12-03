<template>
  <div>
    <el-row style="padding-left:20px;">
      <p
        class="osam-page-ibm-font registerProfileContent"
        v-html="$t('message.500.osi').replace('{0}',entitlementrequestid)"
      ></p>
    </el-row>
    <el-row style="padding-left:20px">
      <el-col :span="6">
        <div>
          <b
            class="grid-content registerProfileContent osam-page-ibm-font"
          >{{$t("message.label.confirmation_number")}}</b>:
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content">{{ entitlementrequestid }}</div>
      </el-col>
    </el-row>
    <!-- Authorization information -->

    <el-row style="padding-top:3%;">
      <p class="osam-page-big-title osam-page-ibm-font ibm-h4 ibm-bold">
        <span class="line">Authorization information</span>
      </p>
    </el-row>

    <el-card shadow="hover">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple registerProfileContent">
            <b class="registerProfileContent osam-page-ibm-font">{{$t("AM009.label.Application")}}</b>:
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content registerProfileContent osam-page-ibm-font">{{ appDisplay }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <b class="registerProfileContent osam-page-ibm-font">{{$t("AM009.label.Role")}}</b>:
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content registerProfileContent osam-page-ibm-font">{{ roleDisplay }}</div>
        </el-col>
      </el-row>
      <el-row v-if="this.$store.state.register.authorization.csoid">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <b class="registerProfileContent osam-page-ibm-font">{{$t("message.label.cso_center")}}</b>:
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content registerProfileContent osam-page-ibm-font">{{ csoDisplay }}</div>
        </el-col>
      </el-row>
      <el-row v-if="this.$store.state.register.authorization.hqcountry">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <b
              class="registerProfileContent osam-page-ibm-font"
            >{{$t("message.label.headquarters")}}</b>:
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content registerProfileContent osam-page-ibm-font">{{ hqCtryDisplay }}</div>
        </el-col>
      </el-row>
    </el-card>

    <!-- Attributes information -->
    <div
      v-if="this.$store.state.register.authorization.roleid == 16
            && this.$store.state.register.authorization.roleid == 17"
    >
      <el-row style="padding-top:3%;">
        <p class="osam-page-big-title osam-page-ibm-font ibm-h4 ibm-bold">
          <span class="line">{{$t('update.attributeinfo')}}</span>
        </p>
      </el-row>

      <el-row v-if="this.$store.state.register.attributes.relationship">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <b
              class="registerProfileContent osam-page-ibm-font"
            >{{$t("message.label.relationship")}}</b>:
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content registerProfileContent osam-page-ibm-font">{{ rlShipDisplay }}</div>
        </el-col>
      </el-row>
      <el-row v-if="this.$store.state.register.attributes.usage">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <b class="registerProfileContent osam-page-ibm-font">{{$t("message.label.accesstype")}}</b>:
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content registerProfileContent osam-page-ibm-font">{{ usageDisplay }}</div>
        </el-col>
      </el-row>
      <el-row v-if="this.$store.state.register.attributes.dateformat">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <b class="registerProfileContent osam-page-ibm-font">{{$t("message.label.dateformat")}}</b>:
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content registerProfileContent osam-page-ibm-font">{{ dfDisplay }}</div>
        </el-col>
      </el-row>
      <el-row v-if="this.$store.state.register.attributes.price">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <b
              class="registerProfileContent osam-page-ibm-font"
            >{{$t("register.field.optionaldetails.option1")}}</b>:
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content registerProfileContent osam-page-ibm-font">{{ priceDisplay }}</div>
        </el-col>
      </el-row>
      <el-row v-if="this.$store.state.register.attributes.federal">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <b
              class="registerProfileContent osam-page-ibm-font"
            >{{$t("register.field.optionaldetails.option2")}}</b>:
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content registerProfileContent osam-page-ibm-font">{{ federalDisplay }}</div>
        </el-col>
      </el-row>
    </div>
    <!-- Entitlement information -->
    <div
      v-if="this.$store.state.register.authorization.roleid === 16
            || this.$store.state.register.authorization.roleid === 17
            || this.$store.state.register.authorization.roleid === 29"
    >
      <!-- Entitlement title -->
      <el-row style="padding-top:3%;">
        <p class="osam-page-big-title osam-page-ibm-font ibm-h4 ibm-bold">
          <span class="line">{{$t('AM009.subtitle2')}}</span>
        </p>
      </el-row>

      <!-- <el-row v-if="this.allent.length >0">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <b class="registerProfileContent osam-page-ibm-font">{{$t("message.label.locations")}}</b>:
          </div>
        </el-col>
        <el-col
          :span="18"
          v-for="item in allent"
          :key="item.value + item.country"
          :label="item.country"
          :value="item.entitlementtypeid"
        >
          <span
            class="grid-content registerProfileContent osam-page-ibm-font"
          >{{ codeToCtryName(item.country) }}</span>
        </el-col>
      </el-row>-->
      <!-- Entitlement -->
      <el-card shadow="hover">
        <!-- ALL entitlement -->
        <el-row v-if="this.allent.length >0">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <b
                class="registerProfileContent osam-page-ibm-font"
              >{{$t("entitlement.method.AllEntitlement")}}</b>:
            </div>
          </el-col>
          <el-col
            :span="18"
            v-for="item in allent"
            :key="item.value + item.country"
            :label="item.country"
            :value="item.entitlementtypeid"
          >
            <span
              class="grid-content registerProfileContent osam-page-ibm-font"
            >{{ codeToCtryName(item.country) }}</span>
          </el-col>
        </el-row>
        <el-row v-if="this.inac.length > 0">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <b
                class="registerProfileContent osam-page-ibm-font"
              >{{$t("entitlement.method.INAC_s")}}</b>:
            </div>
          </el-col>
          <el-col
            :span="18"
            v-for="item in inac"
            :key="item.value + item.country"
            :label="item.country"
            :value="item.entitlementtypeid"
          >
            <span
              class="grid-content registerProfileContent osam-page-ibm-font"
            >{{ item.value }} - {{ codeToCtryName(item.country) }}</span>
          </el-col>
        </el-row>

        <el-row v-if="this.comp.length>0">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <b class="registerProfileContent osam-page-ibm-font">{{$t("AM009.subtitle5")}}</b>:
            </div>
          </el-col>
          <el-col
            :span="18"
            v-for="item in comp"
            :key="item.value + item.country"
            :label="item.country"
            :value="item.entitlementtypeid"
          >
            <span
              class="grid-content registerProfileContent osam-page-ibm-font"
            >{{ item.value }} - {{ codeToCtryName(item.country) }}</span>
          </el-col>
        </el-row>
        <el-row v-if="this.enterp.length >0">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <b class="registerProfileContent osam-page-ibm-font">{{$t("AM009.subtitle4")}}</b>:
            </div>
          </el-col>
          <el-col
            :span="18"
            v-for="item in enterp"
            :key="item.value + item.country"
            :label="item.country"
            :value="item.entitlementtypeid"
          >
            <span
              class="grid-content registerProfileContent osam-page-ibm-font"
            >{{ item.value }} - {{ codeToCtryName(item.country) }}</span>
          </el-col>
        </el-row>
        <el-row v-if="this.cust.length >0">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <b class="registerProfileContent osam-page-ibm-font">{{$t("AM009.subtitle6")}}</b>:
            </div>
          </el-col>
          <el-col
            :span="18"
            v-for="item in cust"
            :key="item.value + item.country"
            :label="item.country"
            :value="item.entitlementtypeid"
          >
            <span
              class="grid-content registerProfileContent osam-page-ibm-font"
            >{{ item.value }} - {{ codeToCtryName(item.country) }}</span>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <div v-if="this.$store.state.register.authorization.roleid === 29">
      <el-row style="padding-top:3%;">
        <p class="osam-page-big-title osam-page-ibm-font ibm-h4 ibm-bold">
          <span class="line">EmailDomains information</span>
        </p>
      </el-row>
      <el-card class="osam-page-el-card" shadow="hover">
        <el-row v-if="this.$store.state.register.emaildomains">
          <el-col :span="6">
            <div class="grid-content">
              <b
                class="registerProfileContent osam-page-ibm-font"
              >{{$t("register.field.emaildomain")}}</b>:
            </div>
          </el-col>
          <el-col :span="18">
            <div
              class="grid-content registerProfileContent osam-page-ibm-font"
            >{{ emdomainDisplay }}</div>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <br />
    <!-- <div>

      Dear Valued Customer,
      <br />
      <br />Thank you for registering for access to Order Status OnLine. We will now have your authorization request reviewed by an IBM/Lenovo Representative.
      This process should take no longer than two business days, and you will receive a confirmation e-mail.
      Please refer to Entitlement Request ID#
      <strong>{{ entitlementrequestid }}</strong> should you need to inquire about your request.
      Click on the Customer support link to the left to obtain contact information for your team.
      <br />
      <br />Thank you
    </div>-->
  </div>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      inac: [],
      comp: [],
      enterp: [],
      cust: [],
      allent: []
    }
  },
  props: ['entitlementrequestid'],
  created: function () {
    this.entDisplay()
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
    },
    csoDisplay: function () {
      return this.$Utils.csocenter[
        this.$store.state.register.authorization.csoid
      ].name
    },
    hqCtryDisplay: function () {
      return this.$Utils.codeToCtryName(
        this.$store.state.register.authorization.hqcountry
      )
    },
    rlShipDisplay: function () {
      return this.$Utils.relationship[
        this.$store.state.register.attributes.relationship
      ]
    },
    usageDisplay: function () {
      return this.$Utils.usage[this.$store.state.register.attributes.usage]
    },
    priceDisplay: function () {
      if (this.$store.state.register.attributes.price === 'Y') {
        return this.$Utils.price['Y']
      } else {
        return ''
      }
    },
    federalDisplay: function () {
      if (this.$store.state.register.attributes.federal === 'Y') {
        return this.$Utils.federal['Y']
      } else {
        return ''
      }
    },
    dfDisplay: function () {
      return this.$store.state.register.attributes.dateformat
    },
    emdomainDisplay: function () {
      return this.$store.state.register.emaildomains.toString()
    }
  },
  methods: {
    codeToCtryName (code) {
      return this.$Utils.codeToCtryName(code)
    },
    entDisplay: function () {
      let ent = this.$store.state.register.entitlement
      for (let i = 0; i < ent.length; i++) {
        if (ent[i].entitlementtypeid === 23) {
          this.inac.push(ent[i])
        } else if (ent[i].entitlementtypeid === 22) {
          this.comp.push(ent[i])
        } else if (ent[i].entitlementtypeid === 20) {
          this.enterp.push(ent[i])
        } else if (ent[i].entitlementtypeid === 5) {
          this.cust.push(ent[i])
        } else if (ent[i].entitlementtypeid === 26) {
          this.allent.push(ent[i])
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

<style scoped>
.grid-content {
  border-radius: 8px;
  min-height: 25px;
}
.bg-purple-light {
  background: #ebeef5;
}
/* .el-row {
  margin-bottom: 20px;
} */
.el-col {
  border-radius: 4px;
}
.title {
  line-height: 35px;
  /* margin-left: 5px; */
}
.line {
  margin-left: 20px;
}
.grid-content[data-v-78eec5f7] {
  border-radius: 8px;
  min-height: 25px;
}
.el-form-item {
  /* margin-bottom: 2% !important;
  width: 100% !important; */
  font-weight: bold;
}
.registerProfileContent {
  font-size: 0.9rem;
  font-family: ibm-plex-sans, 'Helvetica Neue', Arial, sans-serif;
}
</style>
