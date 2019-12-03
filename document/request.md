# REQUEST

## URL: 

```
GET /user/profile/${ibmuniqueId}
```

## Response 200:

```js
{
  iruser: {
    firstname: 'Good',
    lastname: 'Job',
    jobtitle: 'test',
    company: 'test',
    email: 'test',
    phone: 'test',
    street1: 'test',
    street2: 'test',
    city: 'test',
    state: 'test',
    zipcode: 'test',
    country: 'test',
    status: 1 // 0-inactive/1-active

  },
  data: {
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
      application: '',
      internal: '',
      roleid: '28'
    },
    entitlement: [
      { entitlementtypeid: 5, value: '1234', country: 'CN,US,UK,GB' },
      { entitlementtypeid: 5, value: '2345', country: 'CN,US,UK,GB' },
      { entitlementtypeid: 20, value: '20123', country: 'CN,US,UK,GB' },
      { entitlementtypeid: 22, value: '22345', country: 'CN,US,UK,GB' },
      { entitlementtypeid: 23, value: '2345', country: 'CN,US,UK,GB' },
      { entitlementtypeid: 26, value: '', country: 'CN,US,UK,GB' }
    ],
    emaildomains: ['', '', '', '']// domains
  }
}
```