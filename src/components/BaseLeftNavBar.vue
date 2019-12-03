<template>
  <main role="main" aria-labelledby="ibm-pagetitle-h1">
    <div id="ibm-pcon">
      <div id="ibm-content">
        <div id="ibm-content-body">
          <div id="ibm-content-main">
            <!-- CONTENT & COMPONENTS START -->
            <div class="ibm-fluid">
              <div class="ibm-col-12-3 ibm-hidden-small">
                <nav role="navigation" aria-label="__REPLACE_ME__">
                  <div id="ibm-navigation">
                    <ul id="ibm-primary-links" role="tree" aria-labelledby="ibm-pagetitle-h1">
                      <li role="presentation" id="ibm-overview">
                        <a role="treeitem" href="/">{{ $t("AM006.label.application.OSAM") }}</a>
                      </li>
                      <li role="presentation">
                        <ul>
                          <li role="presentation" v-if="showOrNot('register')">
                            <router-link to="/register">{{ $t("osiam.subtitle.register") }}</router-link>
                          </li>
                          <li role="presentation" v-if="showOrNot('updateappauth')">
                            <router-link
                              to="/updateappauth"
                            >{{ $t("AM006.label.linkDescription.AM009.3") }}</router-link>
                          </li>
                          <li role="presentation" v-if="showOrNot('allusers')">
                            <router-link to="/allusers">{{ $t("AM006.label.finduser") }}</router-link>
                          </li>
                          <li role="presentation" v-if="showOrNot('summaryRequest')">
                            <router-link to="/summaryRequest">{{ $t("AM006.label.erlist") }}</router-link>
                          </li>
                          <li role="presentation" v-if="showOrNot('ValidationReport')">
                            <router-link
                              to="/ValidationReport"
                            >{{ $t("AM006.label.linkDescription.AM021.3") }}</router-link>
                          </li>
                          <li role="presentation" v-if="showOrNot('newsflash')">
                            <router-link to="/newsflash/viewNews">{{ $t("leftnav.newsflash") }}</router-link>
                          </li>
                          <li role="presentation" v-if="showOrNot('switchid')">
                            <router-link
                              to="/switchid"
                            >{{ $t("AM006.label.linkDescription.AM036.3") }}</router-link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div id="ibm-secondary-navigation" style="padding-left:25px;">
                      <h2 style="padding:0">{{ $t("leftnav.support")}}</h2>
                      <ul id="ibm-related-links">
                        <li role="presentation">
                          <a
                            target="_blank"
                            href="https://www.ibm.com/account/orderstatus/myorders/guestusersignin"
                          >{{ $t("message.application.osi") }}</a>
                        </li>
                        <li role="presentation">
                          <a
                            target="_blank"
                            href="https://www.ibm.com/customersupport/us/en"
                          >{{ $t("leftnav.customersupport") }}</a>
                        </li>
                      </ul>
                    </div>
                    <br />
                    <div id="ibm-secondary-navigation" style="padding-left:25px;">
                      <h2 style="padding:0">{{ $t("leftnav.etools") }}</h2>
                      <ul id="ibm-related-links">
                        <li role="presentation">
                          <a
                            target="_blank"
                            href="https://www.ibm.com/support/operations/contracts/us/en/index.wss"
                          >{{ $t("leftnav.COL") }}</a>
                        </li>
                        <li role="presentation">
                          <a
                            target="_blank"
                            href="https://www.ibm.com/support/operations/inventory"
                          >{{ $t("leftnav.inventoryonline") }}</a>
                        </li>
                        <li role="presentation">
                          <a
                            target="_blank"
                            href="https://www.ibm.com/support/customer/invoices/welcome"
                          >{{ $t("leftnav.invoicesonline") }}</a>
                        </li>
                      </ul>
                    </div>
                    <br />
                    <div id="ibm-secondary-navigation" style="padding-left:25px;">
                      <h2 style="padding:0">{{ $t("leftnav.relatedlinks") }}</h2>
                      <ul id="ibm-related-links">
                        <li role="presentation">
                          <a
                            target="_blank"
                            href="https://www.ibm.com/account/orderstatus/myorders/siteleaving"
                          >{{ $t("leftnav.updatepassword") }}</a>
                        </li>
                        <li role="presentation">
                          <a
                            target="_blank"
                            href="https://www.ibm.com/account/orderstatus/myorders/siteleaving"
                          >{{ $t("AM006.label.updateprofile") }}</a>
                        </li>
                        <li role="presentation">
                          <a
                            target="_blank"
                            href="https://www.ibm.com/account/orderstatus/myorders/siteleaving"
                          >{{ $t("leftnav.statusofIBMusedEquipment") }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <!-- -->
              <div class="ibm-col-12-9 ibm-col-medium-12-8">
                <router-view></router-view>
              </div>
            </div>
            <!-- CONTENT & COMPONENTS END -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.el-menu-item::after,
.el-menu-item::before {
  display: none;
}
.el-submenu::after,
.el-submenu::before {
  display: none;
}
</style>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      openeds: ['1'],
      breadcrumbItems: new Set(),
      leftNavWidth: '23%'
    }
  },
  created: function () {
    if (this.$store.state.currUser.iruser) {
      let userStatus = this.$store.state.currUser.iruser.status
      let entitlementrequest = this.$store.state.currUser.entitlementrequest
      if (userStatus === 0 && !entitlementrequest) {
        this.$router.push({ path: '/register' })
      }
    }
  },
  computed: {
    // move showOrNot check logic to router level, and this module show what it get from router
    showOrNot: function () {
      return function (val) {
        if (this.$store.state.currUser.iruser) {
          let userStatus = this.$store.state.currUser.iruser.status
          let entitlementrequest = this.$store.state.currUser.entitlementrequest
          if (userStatus === 0) {
            if (entitlementrequest) {
              return false
            } else {
              if (val === 'register') {
                return true
              } else {
                return false
              }
            }
          } else {
            if (val === 'register') {
              return false
            } else {
              let userRoleId = this.$store.state.currUser.authorization.roleid
              let routers = this.$router.options.routes
              let rolesTmp = {}
              routers.forEach(route => {
                if (
                  route.meta &&
                  route.meta.title === val &&
                  route.meta.roles
                ) {
                  rolesTmp[val.toString()] = route.meta.roles
                }
              })
              if (rolesTmp[val.toString()]) {
                // return rolesIdArray.some(role => rolesTmp[val.toString()].includes(role))
                return rolesTmp[val.toString()].includes(userRoleId)
              } else {
                return true
              }

              // can use this.$route to do the permission check later on
              // if (this.$route.meta.roles) {
              //   return this.userRole.some(role => this.$route.meta.roles.includes(role))
              // } else {
              //   return true
              // }
            }
          }
        } else {
          return false
        }
      }
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    radioChange () {
      if (this.leftNavWidth === '23%') {
        this.leftNavWidth = '10%'
      } else {
        this.leftNavWidth = '23%'
      }
    },
    handleSelect (key, keyPath) {
      this.$store.dispatch('setCurrHeaderTab', 'first')
    }
  }
}
</script>
