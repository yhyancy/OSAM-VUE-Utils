function isThisType (val) {
  for (let key in this) {
    if (this[key] === val) return true
  }
  return false
}
const entitlementType = {
  CUSTOMERNUM: 5,
  ENTERPRISENUM: 20,
  COMPANYNUM: 22,
  INACNUM: 23,
  ALLENTITLEMENT: 26,
  EMAILDOMAIN: 27,
  isThisType
}

const role = {
  APPUSER: 16,
  APPVIEWER: 17,
  APPOWNER: 18,
  CENTERCOORDINATOR: 20,
  CUSTOMERSUPPORT: 21,
  AMOWNER: 22,
  EMTITLEMENTMANAGER: 28,
  EXTERNALADMIN: 29
}

const erStatus = {
  APPROVED: 1,
  DENIED: 2,
  ERROR: 3,
  OPEN: 4,
  PROCESSED: 5,
  REVIEWED: 6,
  REVOKED: 7,
  DISCARD: 8
}

export { entitlementType, role, erStatus }
