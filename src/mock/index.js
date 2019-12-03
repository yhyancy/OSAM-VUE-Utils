import Mock from 'mockjs'
// import Utils from '../common/utils'
import {
  newRegisterI, oldRegisterI, newRegisterE, appViewer, appOwner, amOwner, entitlementManager, centerCoordinator,
  customerSupport, appUser, externalAdmin, bugFixer
} from './modules/user'

// import { appViewer, appOwner, amOwner, entitlementManager, centerCoordinator,
//   customerSupport, appUser, externalAdmin } from './modules/user'
import { userlist } from './modules/AllUserList'
const baseURL = 'http://localhost:9000'

const users = {
  '0000': newRegisterI,
  '0001': oldRegisterI,
  '0002': newRegisterE,
  '17': appViewer,
  '18': appOwner,
  '22': amOwner,
  '28': entitlementManager,
  '20': centerCoordinator,
  '21': customerSupport,
  '16': appUser,
  '29': externalAdmin,
  '2700003BYG': bugFixer
}
// const entitlementrequestid = 9901
/**
 *
 * @param {*} url
 * @param {*} param
 * @return 返回url？后对应的参数值
 * 重要！！该方法内的注释不可删除
 */
function _getURLParam (url = '', param = '') {
  const regStr = `/(\\?|\\&)${param}=([^\\&]+)/`
  // eslint-disable-next-line no-eval
  let reg = eval(regStr)
  return url.match(reg)[2]
}
// model1
Mock.mock(RegExp(baseURL + '/user/list*'), 'post', (option) => {
  const offset = parseInt(_getURLParam(option.url, 'offset')) || 1
  const limit = _getURLParam(option.url, 'limit') || 20
  const dataResource = userlist
  let resultList = []
  let tempArr = []
  for (let i = 1; i <= 201; i++) {
    let randNum = parseInt(Math.random() * 8, 10)
    tempArr.push(dataResource[randNum])
  }
  resultList = tempArr.filter((item, index, arr) => {
    return index >= (offset - 1) * limit && index < limit * offset
  })
  // console.log('mock /user/list?offset=0 ====', option.userList)
  return {
    status: 200,
    data: {
      total: tempArr.length,
      userlist: resultList
    },
    msg: 'successfully!'
  }
})
// Nancy--revoke access
Mock.mock(RegExp(baseURL + '/manage/user/revoke/*'), 'get', (option) => {
  return {
    status: 200,
    data: {},
    msg: 'Revoke user successfully!'
  }
})

Mock.mock(RegExp(baseURL + '/manage/request/update/emaildomains'), 'post', (option) => {
  return {
    status: 200,
    data: {},
    msg: 'Update email domains successfully!'
  }
})

Mock.mock(RegExp(baseURL + '/manage/user/update/emaildomains/*'), 'post', (option) => {
  return {
    status: 200,
    data: {},
    msg: 'Update email domains successfully!'
  }
})

Mock.mock(RegExp(baseURL + '/manage/user/delete/*'), 'get', (option) => {
  return {
    status: 200,
    data: {},
    msg: 'Delete user successfully!'
  }
})

// Nancy--authorization update（entitlementrequest.status=4）
Mock.mock(RegExp(baseURL + '/manage/request/update/authorization'), 'post', (option) => {
  return {
    status: 200,
    msg: 'ok'
  }
})

// Nancy--authorization update
Mock.mock(RegExp(baseURL + '/manage/user/update/authorization/*'), 'post', (option) => {
  return {
    status: 200,
    msg: 'ok'
  }
})

Mock.mock(RegExp(baseURL + '/manage/request/update/entitlement'), 'post', (option) => {
  // console.log('mock /user/list?offset=0 ====', option.userList)
  return {
    status: 200,
    data: {},
    msg: 'update request entitlement successfully!'
  }
})

Mock.mock(RegExp(baseURL + '/manage/user/update/entitlement/*'), 'post', (option) => {
  // console.log('mock /user/list?offset=0 ====', option.userList)
  return {
    status: 200,
    data: {},
    msg: 'update user entitlement successfully!'
  }
})
// neo --------
Mock.mock(RegExp(baseURL + '/user/profile/.*'), 'get', (option) => {
  const url = option.url
  const reg = new RegExp(/([^/]+)$/)
  const ibmId = url.match(reg)[1]
  return {
    status: 200,
    msg: 'Mock user profile OK',
    data: users[ibmId]
  }
})

Mock.mock(RegExp(baseURL + '/user/detail/.*'), 'get', (option) => {
  const url = option.url
  const reg = new RegExp(/([^/]+)$/)
  const ibmId = url.match(reg)[1]
  return {
    status: 200,
    msg: 'Mock OK',
    data: users[ibmId]
  }
})

Mock.mock(RegExp(baseURL + '/request/detail/.*'), 'get', (option) => {
  const url = option.url
  const reg = new RegExp(/([^/]+)$/)
  const ibmId = url.match(reg)[1]
  return {
    status: 200,
    msg: 'Mock OK',
    data: users[ibmId]
  }
})

Mock.mock(`${baseURL}/app/setting/entitlementtype`, 'get', (option) => {
  return {
    status: 200,
    msg: 'Mock entitlement type',
    data: this.$Utils.entitlementtype
  }
})

Mock.mock(`${process.env.VUE_APP_BASE_URL}/learnning/1`, 'get', (option) => {
  console.log('get option', option)
  return {
    status: 200,
    msg: 'success',
    data: {
      a: 1, b: 2
    }
  }
})

Mock.mock(`${process.env.VUE_APP_BASE_URL}/learnning/2`, 'post', (option) => {
  console.log('post option', option)
  return option
})

// neo end------

// Yancy
// RegisterPortal - for new register
Mock.mock(RegExp(baseURL + '/manage/request/new/.*'), 'post', (option) => {
  // simulate delay
  // Utils.sleep(500)
  return {
    status: 200,
    msg: 'Mock OK',
    data: { entitlementrequestid: 'Register-RequestId-123456' }
  }
})

// Linna Start ------
Mock.mock(RegExp(baseURL + '/uservalidation'), 'get', (option) => {
  const offset = _getURLParam(option.url, 'offset') || 1
  const limit = _getURLParam(option.url, 'limit') || 5
  // const offset = 1
  // const limit = 2
  // console.log('index里的当前页', offset)
  // console.log('index里的limit', limit)
  // console.log('开始开始', option.url)
  let userListall = [{
    company: 'Arrow',
    firstname: 'Linna001',
    lastname: 'Sun',
    // username: 'Arrow, A',
    email: 'arrow_a@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser1',
    activatedtimestamp: '2016-05-01'
  }, {
    company: 'Arrow',
    firstname: 'Linna002',
    lastname: 'Sun',
    // username: 'Arrow, B',
    email: 'arrow_b@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser2',
    activatedtimestamp: '2016-05-02'
  }, {
    company: 'Arrow',
    firstname: 'Linna003',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser3',
    activatedtimestamp: '2016-05-03'
  }, {
    company: 'Arrow',
    firstname: 'Linna004',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser4',
    activatedtimestamp: '2016-05-04'
  }, {
    company: 'Arrow',
    firstname: 'Linna005',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser5',
    activatedtimestamp: '2016-05-05'
  }, {
    company: 'Arrow',
    firstname: 'Linna006',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser6',
    activatedtimestamp: '2016-05-06'
  }, {
    company: 'Arrow',
    firstname: 'Linna007',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser7',
    activatedtimestamp: '2016-05-07'
  }, {
    company: 'Arrow',
    firstname: 'Linna008',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser8',
    activatedtimestamp: '2016-05-08'
  }, {
    company: 'Arrow',
    firstname: 'Linna009',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser9',
    activatedtimestamp: '2016-05-09'
  }, {
    company: 'Arrow',
    firstname: 'Linna010',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser10',
    activatedtimestamp: '2016-05-10'
  }, {
    company: 'Arrow',
    firstname: 'Linna011',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser11',
    activatedtimestamp: '2016-05-11'
  }, {
    company: 'Arrow',
    firstname: 'Linna012',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser12',
    activatedtimestamp: '2016-05-12'
  }, {
    company: 'Arrow',
    firstname: 'Linna013',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser13',
    activatedtimestamp: '2016-05-13'
  }, {
    company: 'Arrow',
    firstname: 'Linna014',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser14',
    activatedtimestamp: '2016-05-14'
  }, {
    company: 'Arrow',
    firstname: 'Linna015',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser15',
    activatedtimestamp: '2016-05-15'
  }, {
    company: 'Arrow',
    firstname: 'Linna016',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser16',
    activatedtimestamp: '2016-05-16'
  }, {
    company: 'Arrow',
    firstname: 'Linna017',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser17',
    activatedtimestamp: '2016-05-17'
  }, {
    company: 'Arrow',
    firstname: 'Linna018',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser18',
    activatedtimestamp: '2016-05-18'
  }, {
    company: 'Arrow',
    firstname: 'Linna019',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser19',
    activatedtimestamp: '2016-05-19'
  }, {
    company: 'Arrow',
    firstname: 'Linna020',
    lastname: 'Sun',
    // username: 'Arrow, C',
    email: 'arrow_c@arrow.com',
    application: 'Order Status Online',
    role: 'AppUser20',
    activatedtimestamp: '2016-05-20'
  }]
  let tempArr = []
  let userList = []
  for (let i = 1; i <= 100; i++) {
    let randNum = parseInt(Math.random() * 8, 10)
    tempArr.push(userListall[randNum])
  }
  userList = tempArr.filter((item, index, arr) => {
    return index >= (offset - 1) * limit && index < limit * offset
  })
  // console.log('userList', userList)
  return {
    status: 200,
    msg: 'get data successfully',
    data: {
      validationusers: userList,
      total: userListall.length
    }
  }
})

// send email to users
Mock.mock(RegExp(baseURL + '/revalidation'), 'get', (option) => {
  console.log('开始发送邮件', option.url)
  return {
    status: 200,
    msg: 'Revalidation Email Sent Successfully',
    data: []
  }
})
// Linna end --------

// UpdateAppAuth - for user Updating application authorization
Mock.mock(RegExp(baseURL + '/user/update/.*'), 'post', (option) => {
  // simulate delay
  // Utils.sleep(500)
  return {
    status: 200,
    msg: 'Mock OK',
    data: { entitlementrequestid: 'Update-RequestId-123456' }
  }
})

// Entitlement -get geo
Mock.mock(RegExp(baseURL + '/app/setting/geotocountry'), 'get', (option) => {
  return {
    status: 200,
    msg: 'Mock OK',
    data: this.$Utils.geotocountry
  }
})

// OSAM -post application/role/internal/geo
Mock.mock(RegExp(baseURL + '/app/setting/all'), 'get', (option) => {
  console.log('mock setting all========', option)
  return {
    status: 200,
    msg: 'Mock OK',
    data: this.$Utils
  }
})

console.log('---mock switch id start -----')
console.log(amOwner.userlist)
Mock.mock(RegExp(baseURL + '/swich/list*'), 'get', (option) => {
  console.log('---swich- list start -----')
  console.log(option)
  const offset = parseInt(_getURLParam(option.url, 'offset')) || 0
  const limit = _getURLParam(option.url, 'limit') || 20
  console.log(offset)
  console.log(limit)
  const dataResource = amOwner.userlist
  let userList = []
  let tempArr = []
  for (let i = 1; i <= 200; i++) {
    let randNum = parseInt(Math.random() * 3, 10)
    tempArr.push(dataResource[randNum])
  }
  userList = tempArr.filter((item, index, arr) => {
    return (index >= offset * limit && index < limit * (offset + 1))
  })
  console.log('switch userList', userList)
  return {
    status: 200,
    msg: 'Mock OK',
    data: {
      total: tempArr.length,
      userList: userList
    }
  }
})

Mock.mock(RegExp(baseURL + '/swich/add/.*'), 'get', (option) => {
  console.log('switch—add-200')
  console.log(option)
  const url = option.url
  const reg = new RegExp(/([^/]+)$/)
  console.log(url.match(reg))
  const userId = url.match(reg)[1]
  if (userId === 'MjAw') {
    return {
      status: 200,
      msg: 'Mock OK',
      data: amOwner.data.userlist_add
    }
  } else if (userId === 'ODAwMQ==') {
    return {
      status: 8001,
      msg: 'Invalid user id',
      data: amOwner.data.userlist
    }
  } else if (userId === 'ODAwMg==') {
    return {
      status: 8002,
      msg: 'No registration found in OSOL',
      data: amOwner.data.userlist
    }
  } else if (userId === 'ODAwMw==') {
    return {
      status: 8003,
      msg: 'Switch already enabled',
      data: amOwner.data.userlist
    }
  }
})

Mock.mock(RegExp(baseURL + '/swich/remove/.*'), 'get', (option) => {
  console.log('switch——delete')
  const url = option.url
  console.log(url)
  const reg = new RegExp(/([^/]+)$/)
  const ibmuniqueid = url.match(reg)[1]
  console.log(ibmuniqueid)
  return {
    status: 200,
    msg: 'Mock OK'
  }
})
console.log('---mock switch id end -----')

// summary request - list
Mock.mock(RegExp(baseURL + '/request/list*'), 'post', (option) => {
  console.log('---summary request - list start -----')
  const offset = parseInt(_getURLParam(option.url, 'offset')) || 0
  const limit = _getURLParam(option.url, 'limit') || 20
  console.log(offset)
  console.log(limit)
  const dataResource = [
    { status: '1', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company1', hqcountry: 'country1', firstname: 'firstname1', lastname: 'lastname1', email: 'email1', roleid: '16', relationship: 'B', id: 'XXXX1' },
    { status: '2', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company2', hqcountry: 'country2', firstname: 'firstname2', lastname: 'lastname2', email: 'email2', roleid: '17', relationship: 'S', id: 'XXXX2' },
    { status: '4', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company3', hqcountry: 'country3', firstname: 'firstname3', lastname: 'lastname3', email: 'email3', roleid: '18', relationship: 'E', id: 'XXXX3' },
    { status: '7', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company4', hqcountry: 'country4', firstname: 'firstname4', lastname: 'lastname4', email: 'email4', roleid: '20', relationship: 'I', id: 'XXXX4' },
    { status: '8', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company5', hqcountry: 'country5', firstname: 'firstname5', lastname: 'lastname5', email: 'email5', roleid: '20', relationship: 'L', id: 'XXXX5' },
    { status: '5', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company6', hqcountry: 'country6', firstname: 'firstname6', lastname: 'lastname6', email: 'email6', roleid: '21', relationship: '', id: 'XXXX6' },
    { status: '6', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company7', hqcountry: 'country7', firstname: 'firstname7', lastname: 'lastname7', email: 'email7', roleid: '22', relationship: 'B', id: 'XXXX7' }
  ]
  let requestlist = []
  let tempArr = []
  for (let i = 1; i <= 200; i++) {
    let randNum = parseInt(Math.random() * 7, 10)
    tempArr.push(dataResource[randNum])
  }
  requestlist = tempArr.filter((item, index, arr) => {
    return index >= offset * limit && index < limit * (offset + 1)
  })
  return {
    status: 200,
    msg: 'ok',
    data: {
      total: tempArr.length,
      requestlist: requestlist
    }
  }
})

Mock.mock(RegExp(baseURL + '/request/detail/.*'), 'get', (option) => {
  console.log('request——detail')
  const url = option.url
  console.log(url)
  const reg = new RegExp(/([^/]+)$/)
  const id = url.match(reg)[1]
  console.log('/request/detail', id)
  if (id === '285') {
    return {
      status: 200,
      msg: 'OK',
      data: {

        iruser:
        {
          ibmuniqueid: '2700003BYG',
          firstname: 'lenovo-cso1',
          lastname: 'entitlement hierarchy',
          jobtitle: '',
          company: '',
          email: 'marcelo_c_orosco@br.ibm.com',
          phone: '',
          street1: '',
          street2: '',
          city: '',
          state: '',
          zipcode: '',
          country: '',
          preferedlanguage: '',
          status: 0,
          userId: null
        },
        authorization:
        {
          entitlementrequestid: 285,
          ibmuniqueid: '2700003BYG',
          internal: 1,
          applicationid: 3,
          roleid: 20,
          csoid: 0,
          hqcountry: 'AI,AG,AR,AW,BS,BB,BZ,BM,BO,BV,BR,CA,KY,CL,CO,CR,DM,DO,EC,SV,FK,GL,GD,GP,GU,GT,GY,HT,HN,IS,JM,MH,MQ,MX,FM,MS,AN,NI,MP,PA,PY,PE,PR,RE,KN,LC,PM,VC,GS,SR,SJ,TT,US,UM,UY,VE,VG,VI,AL,DZ,AD,AO,AM,AT,BH,BY,BE,BJ,BA,BW,BG,BF,BI,CM,CV,CF,TD,KM,CG,CD,CI,HR,CY,CZ,DK,DJ,EG,GQ,ER,EE,ET,FO,FI,FR,GF,GA,GM,GE,DE,GH,GI,GR,GN,GW,VA,HU,IE,IL,IT,JO,KZ,KE,KW,KG,LV,LB,LS,LR,LY,LI,LT,LU,MK,MG,MW,ML,MT,MR,MU,YT,MD,MC,MA,MZ,NA,NL,NE,NG,NO,OM,PK,PS,PL,PT,QA,RO,RU,RW,SH,SM,ST,SA,SN,CS,SC,SL,SK,SI,SO,ZA,ES,SZ,SE,CH,TZ,TG,TN,TR,TC,UG,UA,AE,GB,EH,YE,ZM,ZW,AX,AF,AS,AQ,AU,AZ,BD,BT,IO,BN,KH,CN,CX,CC,CK,TP,FJ,PF,TF,HM,HK,IN,ID,JP,KI,KP,KR,LA,MO,MY,MV,MN,MM,NR,NP,NC,NZ,NU,NF,PW,PG,PH,PN,WS,SG,SB,LK,TW,TJ,TH,TL,TK,TO,TM,TV,UZ,VU,VN,WF'
        },
        attributes:
        {
          entitlementrequestid: 285,
          ibmuniqueid: '2700003BYG',
          usage: 'C',
          channels: 'N',
          dateformat: 'MM/dd/yyyy',
          price: 'N',
          relationship: 'E',
          segment: 'B',
          swich: 'N',
          federal: 'N'
        },
        entitlement: [],
        emaildomains: [],
        entitlementrequest: {
          id: 285,
          creatoribmuniqueid: '2700003BYG',
          resolveribmuniqueid: '2700003AYD',
          type: 1,
          status: 4,
          processcomment: '',
          action: 1,
          processoribmuniqueid: ''
        }
      }
    }
  } else {
    return {
      status: 200,
      msg: 'OK',
      data: {
        iruser: {
          firstname: 'zhu',
          lastname: 'zhu',
          jobtitle: 'jobtitle',
          company: 'ibm',
          email: 'XXX@cn.ibm.com',
          phone: '130XXXXXXXX',
          street1: 'street1',
          street2: 'street2',
          city: 'LiaoNing',
          state: 'Asia',
          zipcode: '1116600',
          country: 'China',
          status: 0,
          ibmuniqueid: '20'
        },
        entitlementrequest: {
          id: '111',
          status: 4,
          processtimestamp: 'processtimestamp',
          processoremail: 'processoremail'
        },
        attributes: {
          usage: 'C',
          channels: 'B',
          dateformat: 'MM/dd/yyyy',
          price: 'Y',
          relationship: 'E',
          segment: 'I',
          federal: 'N'
        },
        authorization: {
          applicationid: 3,
          internal: 1,
          roleid: 20,
          hqcountry: 'CN,AI',
          csoid: 30
        },
        entitlement: [
        // { entitlementtypeid: 5, value: '1234', country: 'CN,US,UK,GB' },
        // { entitlementtypeid: 5, value: '2345', country: 'CN,US,UK,GB' },
        // { entitlementtypeid: 20, value: '20123', country: 'CN,US,UK,GB' },
        // { entitlementtypeid: 22, value: '22345', country: 'CN,US,UK,GB' },
          { entitlementtypeid: 23, value: '2345', country: 'CN,US,UK,GB' }
        // { entitlementtypeid: 26, value: '', country: 'CN,US,UK,GB' }
        ],
        emaildomains: ['qq.com', '163.com', 'sina.com', 'ibm.com'] // domains
      }
    }
  }
})

Mock.mock(RegExp(baseURL + '/manage/request/approve'), 'post', (option) => {
  console.log('---approve  request-----')
  console.log(option)
  return {
    status: 200,
    msg: 'ok'
  }
})

Mock.mock(RegExp(baseURL + '/manage/request/deny'), 'post', (option) => {
  console.log('---deny  request-----')
  console.log(option)
  return {
    status: 200,
    msg: 'ok'
  }
})

// attributes（pending）
Mock.mock(RegExp(baseURL + '/manage/request/update/attributes'), 'post', (option) => {
  console.log('---update attributes -----')
  console.log(option)
  return {
    status: 200,
    msg: 'ok'
  }
})

// attributes
Mock.mock(RegExp(baseURL + '/mausernage/user/update/attributes'), 'post', (option) => {
  console.log('---update attributes -----')
  console.log(option)
  return {
    status: 200,
    msg: 'ok'
  }
})

// newsflash list news
Mock.mock(RegExp(baseURL + '/newsflash/list'), 'get', (option) => {
  console.log('--- newsflash list -----')
  console.log(option)
  let list = [{
    ID: '1',
    DESCRIPTION: '上海',
    STARTDATE: '2016-05-03',
    EXPIRYDATE: '2016-05-03'
  }]
  return {
    status: 200,
    msg: 'NewsFlashList processed.',
    data: {
      newsflashlist: list,
      total: 30
    }
  }
})
// news flash add news
Mock.mock(RegExp(baseURL + '/newsflash/add'), 'post', (option) => {
  console.log('--- newsflash add -----')
  console.log(option
  )
  return {
    status: 200,
    msg: 'NewsFlashList processed.',
    data: {
    }
  }
})
// newsflash part finished

// Entitlement activity report function - commented since this function has been abandond in release 1
// added by Frank in Oct 17th
// request report mock data step 1
// Mock.mock(RegExp(baseURL + '/reports/entitlementReqActivityReportListView'), 'get', (option) => {
//   console.log('!!!activity report attribute')
//   console.log(option)
//   let list = [
//     {
//       app: 'Authorization Manager',
//       proreq: '0',
//       denreq: '4',
//       errreq: '0'
//     },
//     {
//       app: 'Order Status Online',
//       proreq: '1',
//       denreq: '1',
//       errreq: '0'
//     }
//   ]

//   return {
//     tableData: list
//   }
// })

// // request report mock data step 2
// Mock.mock(RegExp(baseURL + '/requestsummary'), 'get', (option) => {
//   let list = [{
//     statusofreq: 'Processed',
//     datecreated: '2019-09-14',
//     dateproden: '2019-09-13',
//     companyname: 'IBM',
//     cc: '',
//     uname: 'FrankCao',
//     email: 'yzcaodl@cn.ibm.com',
//     role: 'Appuser',
//     relation: 'IBM employee'
//   },
//   {
//     statusofreq: 'Processed',
//     datecreated: '2019-09-14',
//     dateproden: '2019-09-13',
//     companyname: 'IBM',
//     cc: '',
//     uname: 'FrankCao',
//     email: 'yzcaodl@cn.ibm.com',
//     role: 'Appuser',
//     relation: 'IBM employee'
//   }]

//   return {
//     tableData: list
//   }
// })
