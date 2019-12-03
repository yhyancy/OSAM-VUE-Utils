const osamAppSettingResults = function (inst) {
  var setting = {
    usage: {
      'C': inst.$t('message.casual'), // casual
      'E': inst.$t('message.expert')// expert
    },
    channels: {
      'B': inst.$t('edit.channels.both'), // Both
      'D': inst.$t('edit.channels.direct'), // Direct
      'I': inst.$t('edit.channels.indirect'), // Indirect
      'Y': '',
      'N': inst.$t('edit.channels.na')// N/A
    },
    channelsOptions: {
      'B': inst.$t('edit.channels.both'), // Both
      'D': inst.$t('edit.channels.direct'), // Direct
      'I': inst.$t('edit.channels.indirect') // Indirect
    },
    price: {
      'Y': inst.$t('message.yes'), // Yes
      'N': inst.$t('message.no') // No
    },
    relationship: {
      'B': inst.$t('message.bp'), // Business partners,
      'S': inst.$t('message.smb'), // Small or Medium Business
      'E': inst.$t('message.employee'), // 'IBM employee',----------需要改json 从IBM or Lenovo employee改为 IBM employee
      'I': inst.$t('message.individual'), // 'Individual',
      'L': inst.$t('message.le') // 'Large Enterprise'
    },
    relation: {
      'B': { 'id': 'B', 'name': inst.$t('message.bp') },
      'S': { 'id': 'S', 'name': inst.$t('message.smb') },
      'I': { 'id': 'I', 'name': inst.$t('message.individual') },
      'L': { 'id': 'L', 'name': inst.$t('message.le') },
      'E': { 'id': 'E', 'name': inst.$t('message.employee') }
    },
    segment: {
      'B': 'Both',
      'I': 'IBM',
      'L': 'Lenovo'
    },
    swich: {
      'Y': inst.$t('message.yes'), // Yes
      'N': inst.$t('message.no') // No
    },
    federal: {
      'Y': inst.$t('message.yes'), // Yes
      'N': inst.$t('message.no') // No
    },
    dateformat: [
      'MM/dd/yyyy',
      'dd/MM/yyyy',
      'yyyy.MM.dd',
      'MM.yyyy.dd',
      'MM.dd.yyyy',
      'dd.MM.yyyy',
      'dd.yyyy.MM',
      'yyyy-MM-dd',
      'yyyy-dd-MM',
      'MM-yyyy-dd',
      'MM-dd-yyyy',
      'dd-MM-yyyy',
      'dd-yyyy-MM',
      'yyyy/MM/dd',
      'yyyy/dd/MM',
      'MM/yyyy/dd',
      'dd/yyyy/MM'
    ],
    application: {
      '27': { 'id': 27, 'name': inst.$t('activityreport.field1.value3') }, // Order Status OnLine
      '3': { 'id': 3, 'name': inst.$t('activityreport.field1.value2') }// Authorization Manager
    },
    irrole: {
      '16': { 'id': 16, 'name': inst.$t('entitlementsummary.section2.field4.value9'), 'description': 'View Order Status' }, // AppUser
      '17': { 'id': 17, 'name': inst.$t('entitlementsummary.section2.field4.value8'), 'description': 'View order status (AppViewer)' }, // AppViewer
      '18': { 'id': 18, 'name': inst.$t('entitlementsummary.section2.field4.value7'), 'description': 'Become an application owner (AppOwner)' }, // AppOwner
      '20': { 'id': 20, 'name': inst.$t('entitlementsummary.section2.field4.value4'), 'description': 'Coordinate entitlement requests within a center (Coordinator)' }, // Center Coordinator
      '21': { 'id': 21, 'name': inst.$t('entitlementsummary.section2.field4.value3'), 'description': 'Manage entitlement requests nationwide (Customer Support OnLine)' }, // Customer Support OnLine Entitlement Coordinator
      '22': { 'id': 22, 'name': inst.$t('entitlementsummary.section2.field4.value2'), 'description': 'Become an application owner (AM Owner)' }, // AM Owner
      '28': { 'id': 28, 'name': inst.$t('entitlementsummary.section2.field4.value6'), 'description': 'Entitlement Viewer' }, // Entitlement Manager
      '29': { 'id': 29, 'name': inst.$t('entitlementsummary.section2.field4.value10'), 'description': 'External Admin' }// External Admin
      // '19': { 'id': 19, 'name': 'CSR', 'description': 'Approve and entitle customers within a center (CSR)' },
      // '23': { 'id': 23, 'name': '', 'description': '' },
    },
    entitlementtype: {
      '22': { 'id': 22, 'name': inst.$t('entitlement.method.CompanyNumber') }, // CompanyNumber
      '27': { 'id': 27, 'name': inst.$t('register.field.emaildomain') }, // EmailDomain---json 中为E-mail domain
      '5': { 'id': 5, 'name': inst.$t('entitlement.method.CustomerNumber') }, // CustomerNumber
      '23': { 'id': 23, 'name': inst.$t('register.entitlement.tab1') }, // INAC
      '26': { 'id': 26, 'name': inst.$t('entitlement.method.AllEntitlement') }, // AllEntitlement---json中为All Entitlement
      '20': { 'id': 20, 'name': inst.$t('entitlement.method.EnterpriseNumber') }// EnterpriseNumber---json中为Enterprise number
    },
    csocenter: {
      '24': { 'id': 24, 'name': inst.$t('find.field8.value2') }, // Business Partners
      '26': { 'id': 26, 'name': inst.$t('message.csr_center.federal') }, // Federal Government
      '25': { 'id': 25, 'name': inst.$t('find.field8.value3') }// Commercial/State and Local
    },
    roletoapplication: {
      '16': { 'roleid': 16, 'internal': 3, 'applicationid': 27, 'accesstype': 0 },
      '17': { 'roleid': 17, 'internal': 1, 'applicationid': 27, 'accesstype': 0 },
      '18': { 'roleid': 18, 'internal': 1, 'applicationid': 27, 'accesstype': 0 },
      // '19': { 'roleid': 19, 'internal': 1, 'applicationid': 3, 'accesstype': 0 },
      '20': { 'roleid': 20, 'internal': 1, 'applicationid': 3, 'accesstype': 2 },
      '21': { 'roleid': 21, 'internal': 1, 'applicationid': 3, 'accesstype': 2 },
      '22': { 'roleid': 22, 'internal': 1, 'applicationid': 3, 'accesstype': 2 },
      '28': { 'roleid': 28, 'internal': 1, 'applicationid': 3, 'accesstype': 0 },
      '29': { 'roleid': 29, 'internal': 3, 'applicationid': 3, 'accesstype': 2 }
    },
    roleapprovalauthority: {
      '22': { 'resolverroleid': 22, 'requesterroleid': 22 },
      '19': { 'resolverroleid': 20, 'requesterroleid': 19 },
      '20': { 'resolverroleid': 21, 'requesterroleid': 20 },
      '21': { 'resolverroleid': 22, 'requesterroleid': 21 },
      '17': { 'resolverroleid': 21, 'requesterroleid': 17 },
      '18': { 'resolverroleid': 22, 'requesterroleid': 18 },
      '16': { 'resolverroleid': 20, 'requesterroleid': 16 },
      '28': { 'resolverroleid': 21, 'requesterroleid': 28 },
      '29': { 'resolverroleid': 21, 'requesterroleid': 29 }
    },
    roletoentitlementtype: {
      '17': [{ 'roleid': 17, 'entitlementtypeid': 20 },
        { 'roleid': 17, 'entitlementtypeid': 22 },
        { 'roleid': 17, 'entitlementtypeid': 23 },
        { 'roleid': 17, 'entitlementtypeid': 24 },
        { 'roleid': 17, 'entitlementtypeid': 26 }
      ],
      '16': [{ 'roleid': 16, 'entitlementtypeid': 20 },
        { 'roleid': 16, 'entitlementtypeid': 22 },
        { 'roleid': 16, 'entitlementtypeid': 23 },
        { 'roleid': 16, 'entitlementtypeid': 24 },
        { 'roleid': 16, 'entitlementtypeid': 26 }
      ],
      '29': [{ 'roleid': 29, 'entitlementtypeid': 20 },
        { 'roleid': 29, 'entitlementtypeid': 22 },
        { 'roleid': 29, 'entitlementtypeid': 23 },
        { 'roleid': 29, 'entitlementtypeid': 24 },
        { 'roleid': 29, 'entitlementtypeid': 26 },
        { 'roleid': 29, 'entitlementtypeid': 27 }
      ]
    },
    americasCountryCode: ['AI', 'AG', 'AN', 'AR', 'AS', 'AW', 'BB', 'BM', 'BO', 'BR', 'BS', 'BZ', 'CA', 'CL', 'CO', 'CR', 'DM', 'DO', 'EC', 'FM', 'GD', 'GT', 'GU', 'GY', 'HN', 'HT', 'JM', 'KN', 'KY', 'LC', 'MH', 'MP', 'MS', 'MX', 'NI', 'PA', 'PE', 'PR', 'PY', 'SR', 'SV', 'TT', 'UM', 'US', 'UY', 'VC', 'VE', 'VG', 'VI'],
    europeCountryCode: ['AD', 'AE', 'AF', 'AL', 'AM', 'AO', 'AT', 'AX', 'AZ', 'BA', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BV', 'BW', 'BY', 'CD', 'CF', 'CG', 'CH', 'CI', 'CM', 'CS', 'CV', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DZ', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FK', 'FO', 'FR', 'GA', 'GB', 'GE', 'GF', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GW', 'HR', 'HU', 'IE', 'IL', 'IO', 'IS', 'IT', 'JO', 'KE', 'KG', 'KM', 'KW', 'KZ', 'LB', 'LI', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'MG', 'MK', 'ML', 'MQ', 'MR', 'MT', 'MU', 'MW', 'MZ', 'NA', 'NC', 'NE', 'NG', 'NL', 'NO', 'OM', 'PF', 'PK', 'PL', 'PM', 'PN', 'PS', 'PT', 'QA', 'RE', 'RO', 'RU', 'RW', 'SA', 'SC', 'SE', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'ST', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TJ', 'TM', 'TN', 'TR', 'TZ', 'UA', 'UG', 'UZ', 'VA', 'WF', 'YE', 'YT', 'ZA', 'ZM', 'ZW'],
    apCountryCode: ['AQ', 'AU', 'BD', 'BN', 'BT', 'CC', 'CK', 'CN', 'CX', 'FJ', 'HK', 'HM', 'ID', 'IN', 'JP', 'KH', 'KI', 'KP', 'KR', 'LA', 'LK', 'MM', 'MN', 'MO', 'MV', 'MY', 'NF', 'NP', 'NR', 'NU', 'NZ', 'PG', 'PH', 'PW', 'SB', 'SG', 'TH', 'TK', 'TL', 'TO', 'TP', 'TV', 'TW', 'VN', 'VU', 'WS'],

    geo: [
      {
        'geoid': 0,
        'geoname': inst.$t('message.label.world_wide_entitlement')// World Wide
      },
      {
        'geoid': 1,
        'geoname': inst.$t('report.americas')// 'Americas'
      },
      {
        'geoid': 2,
        'geoname': inst.$t('report.europe')// 'Europe'
      },
      {
        'geoid': 3,
        'geoname': inst.$t('report.ap')// 'Asia Pacific'
      }
    ],
    geotocountry: {
      'World Wide': {
        'WW': { 'countrycode': 'WW', 'countryname': inst.$t('message.label.world_wide_entitlement'), 'geoid': 4 }// World Wide
      },
      'Americas': {
        'AI': { 'countrycode': 'AI', 'countryname': inst.$t('country.AI'), 'geoid': 1 },
        'AG': { 'countrycode': 'AG', 'countryname': inst.$t('country.AG'), 'geoid': 1 },
        'AN': { 'countrycode': 'AN', 'countryname': inst.$t('country.AN'), 'geoid': 1 },
        'AR': { 'countrycode': 'AR', 'countryname': inst.$t('country.AR'), 'geoid': 1 },
        'AS': { 'countrycode': 'AS', 'countryname': inst.$t('country.AS'), 'geoid': 1 },
        'AW': { 'countrycode': 'AW', 'countryname': inst.$t('country.AW'), 'geoid': 1 },
        'BB': { 'countrycode': 'BB', 'countryname': inst.$t('country.BB'), 'geoid': 1 },
        'BM': { 'countrycode': 'BM', 'countryname': inst.$t('country.BM'), 'geoid': 1 },
        'BO': { 'countrycode': 'BO', 'countryname': inst.$t('country.BO'), 'geoid': 1 },
        'BR': { 'countrycode': 'BR', 'countryname': inst.$t('country.BR'), 'geoid': 1 },
        'BS': { 'countrycode': 'BS', 'countryname': inst.$t('country.BS'), 'geoid': 1 },
        'BZ': { 'countrycode': 'BZ', 'countryname': inst.$t('country.BZ'), 'geoid': 1 },
        'CA': { 'countrycode': 'CA', 'countryname': inst.$t('country.CA'), 'geoid': 1 },
        'CL': { 'countrycode': 'CL', 'countryname': inst.$t('country.CL'), 'geoid': 1 },
        'CO': { 'countrycode': 'CO', 'countryname': inst.$t('country.CO'), 'geoid': 1 },
        'CR': { 'countrycode': 'CR', 'countryname': inst.$t('country.CR'), 'geoid': 1 },
        'DM': { 'countrycode': 'DM', 'countryname': inst.$t('country.DM'), 'geoid': 1 },
        'DO': { 'countrycode': 'DO', 'countryname': inst.$t('country.DO'), 'geoid': 1 },
        'EC': { 'countrycode': 'EC', 'countryname': inst.$t('country.EC'), 'geoid': 1 },
        'FM': { 'countrycode': 'FM', 'countryname': inst.$t('country.FM'), 'geoid': 1 },
        'GD': { 'countrycode': 'GD', 'countryname': inst.$t('country.GD'), 'geoid': 1 },
        'GT': { 'countrycode': 'GT', 'countryname': inst.$t('country.GT'), 'geoid': 1 },
        'GU': { 'countrycode': 'GU', 'countryname': inst.$t('country.GU'), 'geoid': 1 },
        'GY': { 'countrycode': 'GY', 'countryname': inst.$t('country.GY'), 'geoid': 1 },
        'HN': { 'countrycode': 'HN', 'countryname': inst.$t('country.HN'), 'geoid': 1 },
        'HT': { 'countrycode': 'HT', 'countryname': inst.$t('country.HT'), 'geoid': 1 },
        'JM': { 'countrycode': 'JM', 'countryname': inst.$t('country.JM'), 'geoid': 1 },
        'KN': { 'countrycode': 'KN', 'countryname': inst.$t('country.KN'), 'geoid': 1 },
        'KY': { 'countrycode': 'KY', 'countryname': inst.$t('country.KY'), 'geoid': 1 },
        'LC': { 'countrycode': 'LC', 'countryname': inst.$t('country.LC'), 'geoid': 1 },
        'MH': { 'countrycode': 'MH', 'countryname': inst.$t('country.MH'), 'geoid': 1 },
        'MP': { 'countrycode': 'MP', 'countryname': inst.$t('country.MP'), 'geoid': 1 },
        'MS': { 'countrycode': 'MS', 'countryname': inst.$t('country.MS'), 'geoid': 1 },
        'MX': { 'countrycode': 'MX', 'countryname': inst.$t('country.MX'), 'geoid': 1 },
        'NI': { 'countrycode': 'NI', 'countryname': inst.$t('country.NI'), 'geoid': 1 },
        'PA': { 'countrycode': 'PA', 'countryname': inst.$t('country.PA'), 'geoid': 1 },
        'PE': { 'countrycode': 'PE', 'countryname': inst.$t('country.PE'), 'geoid': 1 },
        'PR': { 'countrycode': 'PR', 'countryname': inst.$t('country.PR'), 'geoid': 1 },
        'PY': { 'countrycode': 'PY', 'countryname': inst.$t('country.PY'), 'geoid': 1 },
        'SR': { 'countrycode': 'SR', 'countryname': inst.$t('country.SR'), 'geoid': 1 },
        'SV': { 'countrycode': 'SV', 'countryname': inst.$t('country.SV'), 'geoid': 1 },
        'TT': { 'countrycode': 'TT', 'countryname': inst.$t('country.TT'), 'geoid': 1 },
        'UM': { 'countrycode': 'UM', 'countryname': inst.$t('country.UM'), 'geoid': 1 },
        'US': { 'countrycode': 'US', 'countryname': inst.$t('country.US'), 'geoid': 1 },
        'UY': { 'countrycode': 'UY', 'countryname': inst.$t('country.UY'), 'geoid': 1 },
        'VC': { 'countrycode': 'VC', 'countryname': inst.$t('country.VC'), 'geoid': 1 },
        'VE': { 'countrycode': 'VE', 'countryname': inst.$t('country.VE'), 'geoid': 1 },
        'VG': { 'countrycode': 'VG', 'countryname': inst.$t('country.VG'), 'geoid': 1 },
        'VI': { 'countrycode': 'VI', 'countryname': inst.$t('country.VI'), 'geoid': 1 }
      },
      'Asia Pacific': {
        'AQ': { 'countrycode': 'AQ', 'countryname': inst.$t('country.AQ'), 'geoid': 3 },
        'AU': { 'countrycode': 'AU', 'countryname': inst.$t('country.AU'), 'geoid': 3 },
        'BD': { 'countrycode': 'BD', 'countryname': inst.$t('country.BD'), 'geoid': 3 },
        'BN': { 'countrycode': 'BN', 'countryname': inst.$t('country.BN'), 'geoid': 3 },
        'BT': { 'countrycode': 'BT', 'countryname': inst.$t('country.BT'), 'geoid': 3 },
        'CC': { 'countrycode': 'CC', 'countryname': inst.$t('country.CC'), 'geoid': 3 },
        'CK': { 'countrycode': 'CK', 'countryname': inst.$t('country.CK'), 'geoid': 3 },
        'CN': { 'countrycode': 'CN', 'countryname': inst.$t('country.CN'), 'geoid': 3 },
        'CX': { 'countrycode': 'CX', 'countryname': inst.$t('country.CX'), 'geoid': 3 },
        'FJ': { 'countrycode': 'FJ', 'countryname': inst.$t('country.FJ'), 'geoid': 3 },
        'HK': { 'countrycode': 'HK', 'countryname': inst.$t('country.HK'), 'geoid': 3 },
        'HM': { 'countrycode': 'HM', 'countryname': inst.$t('country.HM'), 'geoid': 3 },
        'ID': { 'countrycode': 'ID', 'countryname': inst.$t('country.ID'), 'geoid': 3 },
        'IN': { 'countrycode': 'IN', 'countryname': inst.$t('country.IN'), 'geoid': 3 },
        'JP': { 'countrycode': 'JP', 'countryname': inst.$t('country.JP'), 'geoid': 3 },
        'KH': { 'countrycode': 'KH', 'countryname': inst.$t('country.KH'), 'geoid': 3 },
        'KI': { 'countrycode': 'KI', 'countryname': inst.$t('country.KI'), 'geoid': 3 },
        'KP': { 'countrycode': 'KP', 'countryname': inst.$t('country.KP'), 'geoid': 3 },
        'KR': { 'countrycode': 'KR', 'countryname': inst.$t('country.KR'), 'geoid': 3 },
        'LA': { 'countrycode': 'LA', 'countryname': inst.$t('country.LA'), 'geoid': 3 },
        'LK': { 'countrycode': 'LK', 'countryname': inst.$t('country.LK'), 'geoid': 3 },
        'MM': { 'countrycode': 'MM', 'countryname': inst.$t('country.MM'), 'geoid': 3 },
        'MN': { 'countrycode': 'MN', 'countryname': inst.$t('country.MN'), 'geoid': 3 },
        'MO': { 'countrycode': 'MO', 'countryname': inst.$t('country.MO'), 'geoid': 3 },
        'MV': { 'countrycode': 'MV', 'countryname': inst.$t('country.MV'), 'geoid': 3 },
        'MY': { 'countrycode': 'MY', 'countryname': inst.$t('country.MY'), 'geoid': 3 },
        'NF': { 'countrycode': 'NF', 'countryname': inst.$t('country.NF'), 'geoid': 3 },
        'NP': { 'countrycode': 'NP', 'countryname': inst.$t('country.NP'), 'geoid': 3 },
        'NR': { 'countrycode': 'NR', 'countryname': inst.$t('country.NR'), 'geoid': 3 },
        'NU': { 'countrycode': 'NU', 'countryname': inst.$t('country.NU'), 'geoid': 3 },
        'NZ': { 'countrycode': 'NZ', 'countryname': inst.$t('country.NZ'), 'geoid': 3 },
        'PG': { 'countrycode': 'PG', 'countryname': inst.$t('country.PG'), 'geoid': 3 },
        'PH': { 'countrycode': 'PH', 'countryname': inst.$t('country.PH'), 'geoid': 3 },
        'PW': { 'countrycode': 'PW', 'countryname': inst.$t('country.PW'), 'geoid': 3 },
        'SB': { 'countrycode': 'SB', 'countryname': inst.$t('country.SB'), 'geoid': 3 },
        'SG': { 'countrycode': 'SG', 'countryname': inst.$t('country.SG'), 'geoid': 3 },
        'TH': { 'countrycode': 'TH', 'countryname': inst.$t('country.TH'), 'geoid': 3 },
        'TK': { 'countrycode': 'TK', 'countryname': inst.$t('country.TK'), 'geoid': 3 },
        'TL': { 'countrycode': 'TL', 'countryname': inst.$t('country.TL'), 'geoid': 3 },
        'TO': { 'countrycode': 'TO', 'countryname': inst.$t('country.TO'), 'geoid': 3 },
        'TP': { 'countrycode': 'TP', 'countryname': inst.$t('country.TP'), 'geoid': 3 },
        'TV': { 'countrycode': 'TV', 'countryname': inst.$t('country.TV'), 'geoid': 3 },
        'TW': { 'countrycode': 'TW', 'countryname': inst.$t('country.TW'), 'geoid': 3 },
        'VN': { 'countrycode': 'VN', 'countryname': inst.$t('country.VN'), 'geoid': 3 },
        'VU': { 'countrycode': 'VU', 'countryname': inst.$t('country.VU'), 'geoid': 3 },
        'WS': { 'countrycode': 'WS', 'countryname': inst.$t('country.WS'), 'geoid': 3 }
      },
      'Europe': {
        'AD': { 'countrycode': 'AD', 'countryname': inst.$t('country.AD'), 'geoid': 2 },
        'AE': { 'countrycode': 'AE', 'countryname': inst.$t('country.AE'), 'geoid': 2 },
        'AF': { 'countrycode': 'AF', 'countryname': inst.$t('country.AF'), 'geoid': 2 },
        'AL': { 'countrycode': 'AL', 'countryname': inst.$t('country.AL'), 'geoid': 2 },
        'AM': { 'countrycode': 'AM', 'countryname': inst.$t('country.AM'), 'geoid': 2 },
        'AO': { 'countrycode': 'AO', 'countryname': inst.$t('country.AO'), 'geoid': 2 },
        'AT': { 'countrycode': 'AT', 'countryname': inst.$t('country.AT'), 'geoid': 2 },
        'AX': { 'countrycode': 'AX', 'countryname': inst.$t('country.AX'), 'geoid': 2 },
        'AZ': { 'countrycode': 'AZ', 'countryname': inst.$t('country.AZ'), 'geoid': 2 },
        'BA': { 'countrycode': 'BA', 'countryname': inst.$t('country.BA'), 'geoid': 2 },
        'BE': { 'countrycode': 'BE', 'countryname': inst.$t('country.BE'), 'geoid': 2 },
        'BF': { 'countrycode': 'BF', 'countryname': inst.$t('country.BF'), 'geoid': 2 },
        'BG': { 'countrycode': 'BG', 'countryname': inst.$t('country.BG'), 'geoid': 2 },
        'BH': { 'countrycode': 'BH', 'countryname': inst.$t('country.BH'), 'geoid': 2 },
        'BI': { 'countrycode': 'BI', 'countryname': inst.$t('country.BI'), 'geoid': 2 },
        'BJ': { 'countrycode': 'BJ', 'countryname': inst.$t('country.BJ'), 'geoid': 2 },
        'BV': { 'countrycode': 'BV', 'countryname': inst.$t('country.BV'), 'geoid': 2 },
        'BW': { 'countrycode': 'BW', 'countryname': inst.$t('country.BW'), 'geoid': 2 },
        'BY': { 'countrycode': 'BY', 'countryname': inst.$t('country.BY'), 'geoid': 2 },
        'CD': { 'countrycode': 'CD', 'countryname': inst.$t('country.CD'), 'geoid': 2 },
        'CF': { 'countrycode': 'CF', 'countryname': inst.$t('country.CF'), 'geoid': 2 },
        'CG': { 'countrycode': 'CG', 'countryname': inst.$t('country.CG'), 'geoid': 2 },
        'CH': { 'countrycode': 'CH', 'countryname': inst.$t('country.CH'), 'geoid': 2 },
        'CI': { 'countrycode': 'CI', 'countryname': inst.$t('country.CI'), 'geoid': 2 },
        'CM': { 'countrycode': 'CM', 'countryname': inst.$t('country.CM'), 'geoid': 2 },
        'CS': { 'countrycode': 'CS', 'countryname': inst.$t('country.CS'), 'geoid': 2 },
        'CV': { 'countrycode': 'CV', 'countryname': inst.$t('country.CV'), 'geoid': 2 },
        'CY': { 'countrycode': 'CY', 'countryname': inst.$t('country.CY'), 'geoid': 2 },
        'CZ': { 'countrycode': 'CZ', 'countryname': inst.$t('country.CZ'), 'geoid': 2 },
        'DE': { 'countrycode': 'DE', 'countryname': inst.$t('country.DE'), 'geoid': 2 },
        'DJ': { 'countrycode': 'DJ', 'countryname': inst.$t('country.DJ'), 'geoid': 2 },
        'DK': { 'countrycode': 'DK', 'countryname': inst.$t('country.DK'), 'geoid': 2 },
        'DZ': { 'countrycode': 'DZ', 'countryname': inst.$t('country.DZ'), 'geoid': 2 },
        'EE': { 'countrycode': 'EE', 'countryname': inst.$t('country.EE'), 'geoid': 2 },
        'EG': { 'countrycode': 'EG', 'countryname': inst.$t('country.EG'), 'geoid': 2 },
        'EH': { 'countrycode': 'EH', 'countryname': inst.$t('country.EH'), 'geoid': 2 },
        'ER': { 'countrycode': 'ER', 'countryname': inst.$t('country.ER'), 'geoid': 2 },
        'ES': { 'countrycode': 'ES', 'countryname': inst.$t('country.ES'), 'geoid': 2 },
        'ET': { 'countrycode': 'ET', 'countryname': inst.$t('country.ET'), 'geoid': 2 },
        'FI': { 'countrycode': 'FI', 'countryname': inst.$t('country.FI'), 'geoid': 2 },
        'FK': { 'countrycode': 'FK', 'countryname': inst.$t('country.FK'), 'geoid': 2 },
        'FO': { 'countrycode': 'FO', 'countryname': inst.$t('country.FO'), 'geoid': 2 },
        'FR': { 'countrycode': 'FR', 'countryname': inst.$t('country.FR'), 'geoid': 2 },
        'GA': { 'countrycode': 'GA', 'countryname': inst.$t('country.GA'), 'geoid': 2 },
        'GB': { 'countrycode': 'GB', 'countryname': inst.$t('country.GB'), 'geoid': 2 },
        'GE': { 'countrycode': 'GE', 'countryname': inst.$t('country.GE'), 'geoid': 2 },
        'GF': { 'countrycode': 'GF', 'countryname': inst.$t('country.GF'), 'geoid': 2 },
        'GH': { 'countrycode': 'GH', 'countryname': inst.$t('country.GH'), 'geoid': 2 },
        'GI': { 'countrycode': 'GI', 'countryname': inst.$t('country.GI'), 'geoid': 2 },
        'GL': { 'countrycode': 'GL', 'countryname': inst.$t('country.GL'), 'geoid': 2 },
        'GM': { 'countrycode': 'GM', 'countryname': inst.$t('country.GM'), 'geoid': 2 },
        'GN': { 'countrycode': 'GN', 'countryname': inst.$t('country.GN'), 'geoid': 2 },
        'GP': { 'countrycode': 'GP', 'countryname': inst.$t('country.GP'), 'geoid': 2 },
        'GQ': { 'countrycode': 'GQ', 'countryname': inst.$t('country.GQ'), 'geoid': 2 },
        'GR': { 'countrycode': 'GR', 'countryname': inst.$t('country.GR'), 'geoid': 2 },
        'GS': { 'countrycode': 'GS', 'countryname': inst.$t('country.GS'), 'geoid': 2 },
        'GW': { 'countrycode': 'GW', 'countryname': inst.$t('country.GW'), 'geoid': 2 },
        'HR': { 'countrycode': 'HR', 'countryname': inst.$t('country.HR'), 'geoid': 2 },
        'HU': { 'countrycode': 'HU', 'countryname': inst.$t('country.HU'), 'geoid': 2 },
        'IE': { 'countrycode': 'IE', 'countryname': inst.$t('country.IE'), 'geoid': 2 },
        'IL': { 'countrycode': 'IL', 'countryname': inst.$t('country.IL'), 'geoid': 2 },
        'IO': { 'countrycode': 'IO', 'countryname': inst.$t('country.IO'), 'geoid': 2 },
        'IS': { 'countrycode': 'IS', 'countryname': inst.$t('country.IS'), 'geoid': 2 },
        'IT': { 'countrycode': 'IT', 'countryname': inst.$t('country.IT'), 'geoid': 2 },
        'JO': { 'countrycode': 'JO', 'countryname': inst.$t('country.JO'), 'geoid': 2 },
        'KE': { 'countrycode': 'KE', 'countryname': inst.$t('country.KE'), 'geoid': 2 },
        'KG': { 'countrycode': 'KG', 'countryname': inst.$t('country.KG'), 'geoid': 2 },
        'KM': { 'countrycode': 'KM', 'countryname': inst.$t('country.KM'), 'geoid': 2 },
        'KW': { 'countrycode': 'KW', 'countryname': inst.$t('country.KW'), 'geoid': 2 },
        'KZ': { 'countrycode': 'KZ', 'countryname': inst.$t('country.KZ'), 'geoid': 2 },
        'LB': { 'countrycode': 'LB', 'countryname': inst.$t('country.LB'), 'geoid': 2 },
        'LI': { 'countrycode': 'LI', 'countryname': inst.$t('country.LI'), 'geoid': 2 },
        'LR': { 'countrycode': 'LR', 'countryname': inst.$t('country.LR'), 'geoid': 2 },
        'LS': { 'countrycode': 'LS', 'countryname': inst.$t('country.LS'), 'geoid': 2 },
        'LT': { 'countrycode': 'LT', 'countryname': inst.$t('country.LT'), 'geoid': 2 },
        'LU': { 'countrycode': 'LU', 'countryname': inst.$t('country.LU'), 'geoid': 2 },
        'LV': { 'countrycode': 'LV', 'countryname': inst.$t('country.LV'), 'geoid': 2 },
        'LY': { 'countrycode': 'LY', 'countryname': inst.$t('country.LY'), 'geoid': 2 },
        'MA': { 'countrycode': 'MA', 'countryname': inst.$t('country.MA'), 'geoid': 2 },
        'MC': { 'countrycode': 'MC', 'countryname': inst.$t('country.MC'), 'geoid': 2 },
        'MD': { 'countrycode': 'MD', 'countryname': inst.$t('country.MD'), 'geoid': 2 },
        'MG': { 'countrycode': 'MG', 'countryname': inst.$t('country.MG'), 'geoid': 2 },
        'MK': { 'countrycode': 'MK', 'countryname': inst.$t('country.MK'), 'geoid': 2 },
        'ML': { 'countrycode': 'ML', 'countryname': inst.$t('country.ML'), 'geoid': 2 },
        'MQ': { 'countrycode': 'MQ', 'countryname': inst.$t('country.MQ'), 'geoid': 2 },
        'MR': { 'countrycode': 'MR', 'countryname': inst.$t('country.MR'), 'geoid': 2 },
        'MT': { 'countrycode': 'MT', 'countryname': inst.$t('country.MT'), 'geoid': 2 },
        'MU': { 'countrycode': 'MU', 'countryname': inst.$t('country.MU'), 'geoid': 2 },
        'MW': { 'countrycode': 'MW', 'countryname': inst.$t('country.MW'), 'geoid': 2 },
        'MZ': { 'countrycode': 'MZ', 'countryname': inst.$t('country.MZ'), 'geoid': 2 },
        'NA': { 'countrycode': 'NA', 'countryname': inst.$t('country.NA'), 'geoid': 2 },
        'NC': { 'countrycode': 'NC', 'countryname': inst.$t('country.NC'), 'geoid': 2 },
        'NE': { 'countrycode': 'NE', 'countryname': inst.$t('country.NE'), 'geoid': 2 },
        'NG': { 'countrycode': 'NG', 'countryname': inst.$t('country.NG'), 'geoid': 2 },
        'NL': { 'countrycode': 'NL', 'countryname': inst.$t('country.NL'), 'geoid': 2 },
        'NO': { 'countrycode': 'NO', 'countryname': inst.$t('country.NO'), 'geoid': 2 },
        'OM': { 'countrycode': 'OM', 'countryname': inst.$t('country.OM'), 'geoid': 2 },
        'PF': { 'countrycode': 'PF', 'countryname': inst.$t('country.PF'), 'geoid': 2 },
        'PK': { 'countrycode': 'PK', 'countryname': inst.$t('country.PK'), 'geoid': 2 },
        'PL': { 'countrycode': 'PL', 'countryname': inst.$t('country.PL'), 'geoid': 2 },
        'PM': { 'countrycode': 'PM', 'countryname': inst.$t('country.PM'), 'geoid': 2 },
        'PN': { 'countrycode': 'PN', 'countryname': inst.$t('country.PN'), 'geoid': 2 },
        'PS': { 'countrycode': 'PS', 'countryname': inst.$t('country.PS'), 'geoid': 2 },
        'PT': { 'countrycode': 'PT', 'countryname': inst.$t('country.PT'), 'geoid': 2 },
        'QA': { 'countrycode': 'QA', 'countryname': inst.$t('country.QA'), 'geoid': 2 },
        'RE': { 'countrycode': 'RE', 'countryname': inst.$t('country.RE'), 'geoid': 2 },
        'RO': { 'countrycode': 'RO', 'countryname': inst.$t('country.RO'), 'geoid': 2 },
        'RU': { 'countrycode': 'RU', 'countryname': inst.$t('country.RU'), 'geoid': 2 },
        'RW': { 'countrycode': 'RW', 'countryname': inst.$t('country.RW'), 'geoid': 2 },
        'SA': { 'countrycode': 'SA', 'countryname': inst.$t('country.SA'), 'geoid': 2 },
        'SC': { 'countrycode': 'SC', 'countryname': inst.$t('country.SC'), 'geoid': 2 },
        'SE': { 'countrycode': 'SE', 'countryname': inst.$t('country.SE'), 'geoid': 2 },
        'SH': { 'countrycode': 'SH', 'countryname': inst.$t('country.SH'), 'geoid': 2 },
        'SI': { 'countrycode': 'SI', 'countryname': inst.$t('country.SI'), 'geoid': 2 },
        'SJ': { 'countrycode': 'SJ', 'countryname': inst.$t('country.SJ'), 'geoid': 2 },
        'SK': { 'countrycode': 'SK', 'countryname': inst.$t('country.SK'), 'geoid': 2 },
        'SL': { 'countrycode': 'SL', 'countryname': inst.$t('country.SL'), 'geoid': 2 },
        'SM': { 'countrycode': 'SM', 'countryname': inst.$t('country.SM'), 'geoid': 2 },
        'SN': { 'countrycode': 'SN', 'countryname': inst.$t('country.SN'), 'geoid': 2 },
        'SO': { 'countrycode': 'SO', 'countryname': inst.$t('country.SO'), 'geoid': 2 },
        'ST': { 'countrycode': 'ST', 'countryname': inst.$t('country.ST'), 'geoid': 2 },
        'SZ': { 'countrycode': 'SZ', 'countryname': inst.$t('country.SZ'), 'geoid': 2 },
        'TC': { 'countrycode': 'TC', 'countryname': inst.$t('country.TC'), 'geoid': 2 },
        'TD': { 'countrycode': 'TD', 'countryname': inst.$t('country.TD'), 'geoid': 2 },
        'TF': { 'countrycode': 'TF', 'countryname': inst.$t('country.TF'), 'geoid': 2 },
        'TG': { 'countrycode': 'TG', 'countryname': inst.$t('country.TG'), 'geoid': 2 },
        'TJ': { 'countrycode': 'TJ', 'countryname': inst.$t('country.TJ'), 'geoid': 2 },
        'TM': { 'countrycode': 'TM', 'countryname': inst.$t('country.TM'), 'geoid': 2 },
        'TN': { 'countrycode': 'TN', 'countryname': inst.$t('country.TN'), 'geoid': 2 },
        'TR': { 'countrycode': 'TR', 'countryname': inst.$t('country.TR'), 'geoid': 2 },
        'TZ': { 'countrycode': 'TZ', 'countryname': inst.$t('country.TZ'), 'geoid': 2 },
        'UA': { 'countrycode': 'UA', 'countryname': inst.$t('country.UA'), 'geoid': 2 },
        'UG': { 'countrycode': 'UG', 'countryname': inst.$t('country.UG'), 'geoid': 2 },
        'UZ': { 'countrycode': 'UZ', 'countryname': inst.$t('country.UZ'), 'geoid': 2 },
        'VA': { 'countrycode': 'VA', 'countryname': inst.$t('country.VA'), 'geoid': 2 },
        'WF': { 'countrycode': 'WF', 'countryname': inst.$t('country.WF'), 'geoid': 2 },
        'YE': { 'countrycode': 'YE', 'countryname': inst.$t('country.YE'), 'geoid': 2 },
        'YT': { 'countrycode': 'YT', 'countryname': inst.$t('country.YT'), 'geoid': 2 },
        'ZA': { 'countrycode': 'ZA', 'countryname': inst.$t('country.ZA'), 'geoid': 2 },
        'ZM': { 'countrycode': 'ZM', 'countryname': inst.$t('country.ZM'), 'geoid': 2 },
        'ZW': { 'countrycode': 'ZW', 'countryname': inst.$t('country.ZW'), 'geoid': 2 }
      }
    },
    erstatus: {
      '1': inst.$t('status.approved'), // Approved
      '2': inst.$t('status.denied'), // Denied
      '3': inst.$t('status.error'), // Error
      '4': inst.$t('status.open'), // Open
      '5': inst.$t('status.processed'), // Processed
      '6': inst.$t('status.reviewed'), // Reviewed
      '7': inst.$t('status.revoked'), // Revoked
      '8': 'discard' // Discard  ---json添加一个字段status.discard=discard
    }
  }
  return setting
}
export default osamAppSettingResults
