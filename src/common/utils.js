import osamAppSettingResults from './osamAppSetting'
const OsamUtils = function (inst) {
  let Utils = {}
  const osamAppSetting = osamAppSettingResults(inst)
  Utils.sleep = function (d) {
    for (let t = Date.now(); Date.now() - t <= d;);
  }

  Utils.entitlementType_findUser = {
    '22': 'Company Number(s)',
    '27': 'EmailDomain',
    '5': 'Customer Number(s)',
    '23': 'INAC Number(s)',
    '26': 'All Entitlements',
    '20': 'Enterprise Number(s)'
  }

  Utils.roleMap = {
    '17': 'appViewer',
    '18': 'appOwner',
    '22': 'amOwner',
    '28': 'entitlementManager',
    '20': 'centerCoordinator',
    '21': 'customerSupport',
    '16': 'appUser',
    '29': 'externalAdmin'
  }

  Utils.codeToCountry = (code = '') => {
    let geoToCountry = { ...Utils.geotocountry['World Wide'],
      ...Utils.geotocountry['Americas'],
      ...Utils.geotocountry['Asia Pacific'],
      ...Utils.geotocountry['Europe'] }
    let countryArr = []
    if (code) {
      let tempArr = code.split(',')
      tempArr.forEach((item) => {
        countryArr.push(geoToCountry[item])
      })
      return countryArr
    }
  }

  Utils.codeToCtryName = function (code) {
    if (code) {
      let codeArr = code.split(',')
      let countries = { ...Utils.geotocountry['World Wide'],
        ...Utils.geotocountry['Americas'],
        ...Utils.geotocountry['Asia Pacific'],
        ...Utils.geotocountry['Europe']
      }
      let valArr = codeArr.map((value, index, array) => {
        return countries[value].countryname
      })
      return valArr.toString()
    } else {
      return ''
    }
  }

  Utils.usage = osamAppSetting.usage
  Utils.channels = osamAppSetting.channels
  Utils.channelsOptions = osamAppSetting.channelsOptions
  Utils.price = osamAppSetting.price
  Utils.relationship = osamAppSetting.relationship
  Utils.segment = osamAppSetting.segment
  Utils.swich = osamAppSetting.swich
  Utils.federal = osamAppSetting.federal
  Utils.dateformat = osamAppSetting.dateformat
  Utils.application = osamAppSetting.application
  Utils.irrole = osamAppSetting.irrole
  Utils.entitlementtype = osamAppSetting.entitlementtype
  Utils.csocenter = osamAppSetting.csocenter
  Utils.roletoapplication = osamAppSetting.roletoapplication
  Utils.roleapprovalauthority = osamAppSetting.roleapprovalauthority
  Utils.roletoentitlementtype = osamAppSetting.roletoentitlementtype
  Utils.geotocountry = osamAppSetting.geotocountry
  Utils.relation = osamAppSetting.relation
  Utils.erstatus = osamAppSetting.erstatus
  Utils.geo = osamAppSetting.geo
  Utils.americasCountryCode = osamAppSetting.americasCountryCode
  Utils.europeCountryCode = osamAppSetting.europeCountryCode
  Utils.apCountryCode = osamAppSetting.apCountryCode

  Utils.getCtryOptions = function (val) {
    const amOptions = []
    const euOptions = []
    const apOptions = []
    const wwOption = Utils.geotocountry['World Wide']['WW']
    const amRes = Utils.geotocountry.Americas
    const euRes = Utils.geotocountry.Europe
    const apRes = Utils.geotocountry['Asia Pacific']
    for (let key in amRes) {
      amOptions.push(amRes[key])
    }
    for (let key in euRes) {
      euOptions.push(euRes[key])
    }
    for (let key in apRes) {
      apOptions.push(apRes[key])
    }

    if (!val) {
    // return array with all countries which are sorted
      return euOptions.concat(amOptions, apOptions).sort((optA, optB) => {
        return optA.countrycode < optB.countrycode ? -1 : 1
      })
    } else if (val.toUpperCase() === 'AMERICAS' || val.toUpperCase() === 'AM') {
    // return array
      return amOptions
    } else if (val.toUpperCase() === 'EUROPE' || val.toUpperCase() === 'EU') {
    // return array
      return euOptions
    } else if (val.toUpperCase() === 'ASIA PACIFIC' || val.toUpperCase() === 'AP') {
    // return array
      return apOptions
    } else if (val.toUpperCase() === 'WORLD WIDE' || val.toUpperCase() === 'WW') {
    // return ww object {countrycode: "WW", countryname: "World Wide", geoid: 4}
      return wwOption
    } else {
      return []
    }
  }

  return Utils
}
export default OsamUtils
