
const newRegisterI = {
  iruser: {
    ibmuniqueid: '16',
    firstname: 'new',
    lastname: 'RegisterInternal',
    jobtitle: 'Java Developer',
    company: 'IBM',
    email: 'nobody@xx.ibm.com',
    phone: '11122223333',
    street1: '12434',
    street2: 'good street',
    city: 'GODCITY',
    state: 'INTERNAL',
    zipcode: '116044',
    country: 'AI',
    userid: 'test user',
    status: 0 // 0-inactive/1-active

  },
  attributes: null,
  authorization: null,
  entitlement: [],
  emaildomains: [],
  entitlementrequest: null
}

const oldRegisterI = {
  iruser: {
    ibmuniqueid: '17',
    firstname: 'OLD',
    lastname: 'RegisterInternal',
    jobtitle: 'Java Developer',
    company: 'IBM',
    email: 'nobody@xx.ibm.com',
    phone: '11122223333',
    street1: '12434',
    street2: 'good street',
    city: 'GODCITY',
    state: 'INTERNAL',
    zipcode: '116044',
    country: 'IT',
    userid: 'test user',
    status: 0 // 0-inactive/1-active

  },
  attributes: null,
  authorization: null,
  entitlement: [],
  emaildomains: [],
  entitlementrequest: {
    id: 42,
    creatoribmuniqueid: '2800008648',
    resolveribmuniqueid: '05000004KA',
    createtimestamp: '2019-09-20 00:00:00 EST',
    lastreviewedtimestamp: '2019-09-21 08:00:00 EST',
    processtimestamp: '2019-09-21 10:00:00 EST',
    type: 0,
    status: 3,
    processcomment: 'this is process comment...',
    action: 0,
    processoribmuniqueid: '280000PROS'
  }
}

const newRegisterE = {
  iruser: {
    ibmuniqueid: '0002',
    firstname: 'new',
    lastname: 'RegisterExternal',
    jobtitle: 'Java Developer',
    company: 'EXTERNAL COM',
    email: 'nobody@xx.ext.com',
    phone: '11122223333',
    street1: '12434',
    street2: 'good street',
    city: 'GODCITY',
    state: 'EXTERNAL',
    zipcode: '116044',
    country: 'ET',
    userid: 'test user',
    status: 0 // 0-inactive/1-active

  },
  attributes: null,
  authorization: null,
  entitlement: [],
  emaildomains: [],
  entitlementrequest: null
  // entitlementrequest: {
  //   id: 42,
  //   creatoribmuniqueid: '2800008648',
  //   resolveribmuniqueid: '05000004KA',
  //   createtimestamp: 1567581788691,
  //   lastreviewedtimestamp: null,
  //   processtimestamp: null,
  //   type: 0,
  //   status: 3,
  //   processcomment: null,
  //   action: 0,
  //   processoribmuniqueid: null
  // }
}

const appViewer = {
  iruser: {
    ibmuniqueid: '17',
    firstname: 'Hua',
    lastname: 'Yang',
    jobtitle: 'Java Developer',
    company: 'IBM',
    email: 'yuzn@cn.ibm.com',
    phone: '11122223333',
    street1: '12434',
    street2: 'tesgdt',
    city: 'DaLian',
    state: 'LiaoNing',
    zipcode: '116044',
    country: 'CN',
    userid: 'test user',
    status: 1 // 0-inactive/1-active
  },
  attributes: {
    usage: 'C',
    channels: 'B',
    dateformat: 'MM/dd/yyyy',
    price: 'Y',
    relationship: 'E',
    segment: 'Y',
    federal: 'N'
  },
  authorization: {
    applicationid: 27,
    internal: 1,
    roleid: 17,
    hqcountry: 'CN',
    csoid: null
  },
  entitlement: [
    { entitlementtypeid: 5, value: '1234', country: 'CN,US,GB' },
    { entitlementtypeid: 5, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 20, value: '20123', country: 'CN,US,GB' },
    { entitlementtypeid: 22, value: '22345', country: 'CN,US,GB' },
    { entitlementtypeid: 23, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 26, value: '3111', country: 'CN,US,GB' }
  ],
  // emaildomains: ['qq.com', '163.com', 'sina.com', 'ibm.com'], // domains
  emaildomains: [null, null, null, null], // domains
  entitlementrequest: {
    id: 1111,
    status: 4,
    processtimestamp: null,
    processoremail: null
  }
}

const appOwner = {
  iruser: {
    ibmuniqueid: '18',
    firstname: 'Mark',
    lastname: 'Jie',
    jobtitle: 'Developer',
    company: 'IBM',
    email: 'xxxxxxx@ibm.com',
    phone: '1102339871',
    street1: 'St. 5th 12-097',
    street2: '21-201',
    city: 'NewYork',
    state: 'NY',
    zipcode: '111111',
    country: 'US',
    userid: 'test user',
    status: 1 // 0-inactive/1-active
  },
  attributes: {
    usage: null,
    channels: null,
    dateformat: null,
    price: null,
    relationship: null,
    segment: null,
    federal: null
  },
  authorization: {
    applicationid: 27,
    internal: 1,
    roleid: 18,
    csoid: null,
    hqcountry: null
  },
  entitlement: [
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null }
  ],
  emaildomains: [null, null, null, null], // domains
  entitlementrequest: {
    id: 1112,
    status: 0,
    processtimestamp: null,
    processoremail: null
  }
}

const amOwner = {
  iruser: {
    ibmuniqueid: '22',
    firstname: 'Alex',
    lastname: 'Ali',
    jobtitle: 'Developer',
    company: 'IBM',
    email: 'xxxxxxx@ibm.com',
    phone: '1102339871',
    street1: 'St. 5th 12-097',
    street2: '21-201',
    city: 'NewYork',
    state: 'NY',
    zipcode: '111111',
    country: 'US',
    userid: 'test user',
    status: 1 // 0-inactive/1-active

  },
  attributes: {
    usage: null,
    channels: null,
    dateformat: null,
    price: null,
    relationship: null,
    segment: null,
    federal: null
  },
  authorization: {
    applicationid: 3,
    internal: 1,
    roleid: 22,
    hqcountry: 'null',
    csoid: null
  },
  entitlement: [
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null }
  ],
  emaildomains: [null, null, null, null], // domains
  // entitlementrequest: {
  //   id: 1113,
  //   status: 0,
  //   processtimestamp: null,
  //   processoremail: null
  // },
  userlist: [
    { ibmuniqueid: '16', firstname: 'Yizheng', lastname: 'Cao', email: 'yzcaodl@cn.ibm.com', rolename: 'AppViewer', roid: 18 },
    { ibmuniqueid: '17', firstname: 'Songnan', lastname: 'Shang', email: 'snshang@cn.ibm.com', rolename: 'AppViewer', roid: 18 },
    { ibmuniqueid: '20', firstname: 'Yoko', lastname: 'Iwami', email: 'yokoiwami@jp.ibm.com', rolename: 'AppViewer', roid: 18 },
    { ibmuniqueid: '21', firstname: 'Benedetta', lastname: 'Nardi', email: 'benedetta_nardi@it.ibm.co', rolename: 'AppViewer', roid: 18 }
  ],
  userlist_add: [
    { ibmuniqueid: '22', firstname: 'Yizheng', lastname: 'Cao', email: 'yzcaodl@cn.ibm.com', rolename: 'AppViewer' },
    { ibmuniqueid: '28', firstname: 'Songnan', lastname: 'Shang', email: 'snshang@cn.ibm.com', rolename: 'AppViewer' },
    { ibmuniqueid: '18', firstname: 'Yoko', lastname: 'Iwami', email: 'yokoiwami@jp.ibm.com', rolename: 'AppViewer' },
    { ibmuniqueid: '21', firstname: 'Benedetta', lastname: 'Nardi', email: 'benedetta_nardi@it.ibm.com', rolename: 'AppViewer' },
    { ibmuniqueid: '16', firstname: 'Yuzhu', lastname: 'Qin', email: 'qinyuzhu@cn.ibm.com', rolename: 'AppViewer' }
  ]
}

const entitlementManager = {
  iruser: {
    ibmuniqueid: '28',
    firstname: 'Applo',
    lastname: 'Foi',
    jobtitle: 'Mgr',
    company: 'IBM',
    email: 'xxxx@us.ibm.com',
    phone: '232132132',
    street1: 'st. test',
    street2: 'test',
    city: 'DC',
    state: 'WD',
    zipcode: '232322',
    country: 'US',
    userid: 'test user',
    status: 1 // 0-inactive/1-active

  },
  attributes: {
    usage: null,
    channels: null,
    dateformat: null,
    price: null,
    relationship: null,
    segment: null,
    federal: null
  },
  authorization: {
    applicationid: 3,
    internal: 1,
    roleid: 28,
    hqcountry: 'CN,US',
    csoid: null
  },
  entitlement: [
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null }
  ],
  emaildomains: [null, null, null, null], // domains
  entitlementrequest: {
    id: 1114,
    status: 0,
    processtimestamp: null,
    processoremail: null
  }
}

const centerCoordinator = {
  iruser: {
    ibmuniqueid: '20',
    firstname: 'York',
    lastname: 'New',
    jobtitle: 'Coordinator',
    company: 'IBM',
    email: 'xxx@cn.ibm.com',
    phone: '213232132',
    street1: 'test',
    street2: 'test',
    city: 'DL',
    state: 'LN',
    zipcode: '116023',
    country: 'CN',
    userid: 'test user',
    status: 1 // 0-inactive/1-active
  },
  attributes: {
    usage: null,
    channels: null,
    dateformat: null,
    price: null,
    relationship: null,
    segment: null,
    federal: null
  },
  authorization: {
    applicationid: 3,
    internal: 1,
    roleid: 20,
    hqcountry: 'CN,US,GB',
    csoid: 24
  },
  entitlement: [
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null }
  ],
  emaildomains: [null, null, null, null], // domains
  entitlementrequest: {
    id: 1115,
    status: 0,
    processtimestamp: null,
    processoremail: null
  }
}

const customerSupport = {
  iruser: {
    ibmuniqueid: '21',
    firstname: 'Bruce',
    lastname: 'Noo',
    jobtitle: 'cs',
    company: 'IBM',
    email: 'xxxx@in.ibm.com',
    phone: '2213213321',
    street1: 'str. dfdtest',
    street2: 'test',
    city: 'BD',
    state: 'ID',
    zipcode: '23232',
    country: 'IN',
    userid: 'test user',
    status: 1 // 0-inactive/1-active

  },
  attributes: {
    usage: null,
    channels: null,
    dateformat: null,
    price: null,
    relationship: null,
    segment: null,
    federal: null
  },
  authorization: {
    applicationid: 3,
    internal: 1,
    roleid: 21,
    hqcountry: 'CN,US',
    csoid: null
  },
  entitlement: [
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null },
    { entitlementtypeid: null, value: null, country: null }
  ],
  emaildomains: [null, null, null, null], // domains
  entitlementrequest: {
    id: 1116,
    status: 0,
    processtimestamp: null,
    processoremail: null
  }
}

const appUser = {
  iruser: {
    ibmuniqueid: '16',
    firstname: 'Julie',
    lastname: 'Kalo',
    jobtitle: 'audev',
    company: 'BH',
    email: 'xxxxx@bh.com',
    phone: '3232321',
    street1: 'street test',
    street2: 'test',
    city: 'LN',
    state: 'BR',
    zipcode: '231232',
    country: 'GB',
    userid: 'test user',
    status: 1 // 0-inactive/1-active

  },
  attributes: {
    usage: 'C',
    channels: 'B',
    dateformat: 'MM/dd/yyyy',
    price: 'N',
    relationship: 'S',
    segment: 'I',
    federal: 'Y'
  },
  authorization: {
    applicationid: 27,
    internal: 3,
    roleid: 16,
    hqcountry: 'GB',
    csoid: null
  },
  entitlement: [
    { entitlementtypeid: 5, value: '1234', country: 'CN,US,GB' },
    { entitlementtypeid: 5, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 20, value: '20123', country: 'CN,US,GB' },
    { entitlementtypeid: 22, value: '22345', country: 'CN,US,GB' },
    { entitlementtypeid: 23, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 26, value: '3111', country: 'CN,US,GB' }
  ],
  emaildomains: [null, null, null, null], // domains
  entitlementrequest: {
    id: 1117,
    status: 0,
    processtimestamp: null,
    processoremail: null
  }
}

const externalAdmin = {
  iruser: {
    ibmuniqueid: '29',
    firstname: 'Galle',
    lastname: 'Aye',
    jobtitle: 'maint',
    company: 'RH',
    email: 'xxxx@us.rh.com',
    phone: '394857398',
    street1: 'street 13332',
    street2: 'test',
    city: 'LA',
    state: 'CA',
    zipcode: '387932',
    country: 'US',
    userid: 'test user',
    status: 1 // 0-inactive/1-active
  },
  attributes: null,
  authorization: {
    applicationid: 3,
    internal: 3,
    roleid: 29,
    hqcountry: 'US',
    csoid: null
  },
  entitlement: [
    { entitlementtypeid: 5, value: '1234', country: 'CN,US,GB' },
    { entitlementtypeid: 5, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 20, value: '20123', country: 'CN,US,GB' },
    { entitlementtypeid: 22, value: '22345', country: 'CN,US,GB' },
    { entitlementtypeid: 23, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 26, value: '3111', country: 'CN,US,GB' }
  ],
  emaildomains: ['qq.com', '163.com', 'sina.com', 'ibm.com'], // domains
  entitlementrequest: {
    id: 1118,
    status: 0,
    processtimestamp: null,
    processoremail: null
  }
}

const bugFixer = { iruser:
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
  status: 1,
  processcomment: '',
  action: 1,
  processoribmuniqueid: ''
} }

export {
  newRegisterI, oldRegisterI, newRegisterE, appViewer, appOwner, amOwner, entitlementManager, centerCoordinator,
  customerSupport, appUser, externalAdmin, bugFixer
}
