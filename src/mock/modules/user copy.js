
const newRegisterI = {
  iruser: {
    ibmuniqueid: '0000',
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
    country: 'IT',
    status: 0 // 0-inactive/1-active

  },
  attributes: null,
  authorization: {
    applicationid: '',
    internal: '',
    roleid: ''
  },
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

const newRegisterE = {
  iruser: {
    ibmuniqueid: '0000',
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
    status: 0 // 0-inactive/1-active

  },
  attributes: null,
  authorization: {
    applicationid: '',
    internal: '',
    roleid: ''
  },
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
    lastname: 'appViewer',
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
    status: 1 // 0-inactive/1-active

  },
  attributes: {
    usage: 'C',
    channels: 'B',
    dateformat: 'MM/dd/yyyy',
    price: 'Y',
    relationship: 'E',
    segment: 'Y',
    federal: 'N',
    hqcountry: 'CN',
    csoid: ''
  },
  authorization: {
    applicationid: 27,
    internal: 1,
    roleid: 17
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
    id: 32423,
    status: 0,
    resolveremail: 'xxx@cn.ibm.com'
  }
}

const appOwner = {
  iruser: {
    ibmuniqueid: '18',
    firstname: 'Mark',
    lastname: 'appOwner',
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
    status: 1 // 0-inactive/1-active

  },
  attributes: {
    usage: '',
    channels: '',
    dateformat: '',
    price: '',
    relationship: '',
    segment: '',
    federal: '',
    hqcountry: 'CN,US',
    csoid: ''
  },
  authorization: {
    applicationid: 27,
    internal: 1,
    roleid: 18

  },
  entitlement: [
    { entitlementtypeid: 5, value: '1234', country: 'CN,US,GB' },
    { entitlementtypeid: 5, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 20, value: '', country: 'CN,US,GB' },
    { entitlementtypeid: 22, value: '22345', country: 'CN,US,GB' },
    { entitlementtypeid: 23, value: '', country: 'CN,US,GB' },
    { entitlementtypeid: 26, value: '3111', country: 'CN,US,GB' }
  ],
  emaildomains: ['', '', '', '']// domains
}

const amOwner = {
  iruser: {
    ibmuniqueid: '22',
    firstname: 'Alex',
    lastname: 'amOwner',
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
    status: 1 // 0-inactive/1-active

  },
  attributes: {
    usage: '',
    channels: '',
    dateformat: '',
    price: '',
    relationship: '',
    segment: '',
    federal: '',
    hqcountry: 'CN,US',
    csoid: ''
  },
  authorization: {
    applicationid: 3,
    internal: 1,
    roleid: 22

  },
  entitlement: [
    { entitlementtypeid: 5, value: '1234', country: 'CN,US,GB' },
    { entitlementtypeid: 5, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 20, value: '20123', country: 'CN,US,GB' },
    { entitlementtypeid: 22, value: '22345', country: 'CN,US,GB' },
    { entitlementtypeid: 23, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 26, value: '3111', country: 'CN,US,GB' }
  ],
  emaildomains: ['', '', '', ''], // domains
  userlist: [
    { ibmuniqueid: '10001', firstname: 'Yizheng', lastname: 'Cao', email: 'yzcaodl@cn.ibm.com', rolename: 'AppViewer' },
    { ibmuniqueid: '10002', firstname: 'Songnan', lastname: 'Shang', email: 'snshang@cn.ibm.com', rolename: 'AppViewer' },
    { ibmuniqueid: '10003', firstname: 'Yoko', lastname: 'Iwami', email: 'yokoiwami@jp.ibm.com', rolename: 'AppViewer' },
    { ibmuniqueid: '10004', firstname: 'Benedetta', lastname: 'Nardi', email: 'benedetta_nardi@it.ibm.co', rolename: 'AppViewer' }
  ],
  userlist_add: [
    { ibmuniqueid: '10001', firstname: 'Yizheng', lastname: 'Cao', email: 'yzcaodl@cn.ibm.com', rolename: 'AppViewer' },
    { ibmuniqueid: '10002', firstname: 'Songnan', lastname: 'Shang', email: 'snshang@cn.ibm.com', rolename: 'AppViewer' },
    { ibmuniqueid: '10003', firstname: 'Yoko', lastname: 'Iwami', email: 'yokoiwami@jp.ibm.com', rolename: 'AppViewer' },
    { ibmuniqueid: '10004', firstname: 'Benedetta', lastname: 'Nardi', email: 'benedetta_nardi@it.ibm.com', rolename: 'AppViewer' },
    { ibmuniqueid: '10005', firstname: 'Yuzhu', lastname: 'Qin', email: 'qinyuzhu@cn.ibm.com', rolename: 'AppViewer' }
  ]
}

const entitlementManager = {
  iruser: {
    ibmuniqueid: '28',
    firstname: 'Applo',
    lastname: 'entitlementManager',
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
    status: 1 // 0-inactive/1-active

  },
  attributes: {
    usage: '',
    channels: '',
    dateformat: '',
    price: '',
    relationship: '',
    segment: '',
    federal: '',
    hqcountry: 'CN,US',
    csoid: ''
  },
  authorization: {
    applicationid: 3,
    internal: 1,
    roleid: 28
  },
  entitlement: [
    { entitlementtypeid: 5, value: '1234', country: 'CN,US,GB' },
    { entitlementtypeid: 5, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 20, value: '20123', country: 'CN,US,GB' },
    { entitlementtypeid: 22, value: '22345', country: 'CN,US,GB' },
    { entitlementtypeid: 23, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 26, value: '3111', country: 'CN,US,GB' }
  ],
  emaildomains: ['', '', '', ''], // domains
  entitlementrequest: null
}

const centerCoordinator = {
  iruser: {
    ibmuniqueid: '20',
    firstname: 'York',
    lastname: 'centerCoordinator',
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
    status: 1 // 0-inactive/1-active

  },
  attributes: {
    usage: '',
    channels: '',
    dateformat: '',
    price: '',
    relationship: '',
    segment: '',
    federal: '',
    hqcountry: '',
    csoid: 24
  },
  authorization: {
    applicationid: 3,
    internal: 1,
    roleid: 20
  },
  entitlement: [
    { entitlementtypeid: 5, value: '1234', country: 'CN,US,GB' },
    { entitlementtypeid: 5, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 20, value: '20123', country: 'CN,US,GB' },
    { entitlementtypeid: 22, value: '22345', country: 'CN,US,GB' },
    { entitlementtypeid: 23, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 26, value: '3111', country: 'CN,US,GB' }
  ],
  emaildomains: ['', '', '', ''], // domains
  entitlementrequest: null
}

const customerSupport = {
  iruser: {
    ibmuniqueid: '21',
    firstname: 'Bruce',
    lastname: 'customerSupport',
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
    status: 1 // 0-inactive/1-active

  },
  attributes: {
    usage: '',
    channels: '',
    dateformat: '',
    price: '',
    relationship: '',
    segment: '',
    federal: '',
    hqcountry: '',
    csoid: ''
  },
  authorization: {
    applicationid: 3,
    internal: 1,
    roleid: 21
  },
  entitlement: [
    { entitlementtypeid: 5, value: '1234', country: 'CN,US,GB' },
    { entitlementtypeid: 5, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 20, value: '20123', country: 'CN,US,GB' },
    { entitlementtypeid: 22, value: '22345', country: 'CN,US,GB' },
    { entitlementtypeid: 23, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 26, value: '3111', country: 'CN,US,GB' }
  ],
  emaildomains: ['', '', '', ''], // domains
  entitlementrequest: null
}

const appUser = {
  iruser: {
    ibmuniqueid: '16',
    firstname: 'Julie',
    lastname: 'appUser',
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
    status: 1 // 0-inactive/1-active

  },
  attributes: {
    usage: '',
    channels: '',
    dateformat: '',
    price: '',
    relationship: '',
    segment: '',
    federal: '',
    hqcountry: 'GB',
    csoid: ''
  },
  authorization: {
    applicationid: 27,
    internal: 3,
    roleid: 16
  },
  entitlement: [
    { entitlementtypeid: 5, value: '1234', country: 'CN,US,GB' },
    { entitlementtypeid: 5, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 20, value: '20123', country: 'CN,US,GB' },
    { entitlementtypeid: 22, value: '22345', country: 'CN,US,GB' },
    { entitlementtypeid: 23, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 26, value: '3111', country: 'CN,US,GB' }
  ],
  emaildomains: ['', '', '', ''], // domains
  entitlementrequest: null
}

const externalAdmin = {
  iruser: {
    ibmuniqueid: '29',
    firstname: 'Galle',
    lastname: 'externalAdmin',
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
    status: 1 // 0-inactive/1-active

  },

  attributes: {
    usage: '',
    channels: '',
    dateformat: '',
    price: '',
    relationship: '',
    segment: '',
    federal: '',
    hqcountry: '',
    csoid: ''
  },
  authorization: {
    applicationid: 3,
    internal: 3,
    roleid: 29
  },
  entitlement: [
    { entitlementtypeid: 5, value: '1234', country: 'CN,US,GB' },
    { entitlementtypeid: 5, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 20, value: '20123', country: 'CN,US,GB' },
    { entitlementtypeid: 22, value: '22345', country: 'CN,US,GB' },
    { entitlementtypeid: 23, value: '2345', country: 'CN,US,GB' },
    { entitlementtypeid: 26, value: '3111', country: 'CN,US,GB' }
  ],
  emaildomains: ['', '', '', ''], // domains
  entitlementrequest: null
}

export {
  newRegisterI, newRegisterE, appViewer, appOwner, amOwner, entitlementManager, centerCoordinator,
  customerSupport, appUser, externalAdmin
}
