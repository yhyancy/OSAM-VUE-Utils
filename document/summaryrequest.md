# SummaryRequest-List

## URL: 

```
POST /request/list?offset=0
```
## POST Data

```js
data: {
    status: [1,2,3]												
		applicationid: 27,												
		startdate: mm/dd/yyyy												
		enddate: mm/dd/yyyy												
		roleid: 16,												
		relationship: "B",												
		csoid: 24,												
		myrequestonly: Y,
		country[]
  }
```
## Response 200:

```js
{
  data: {
      requestlist: [
        { status: '1', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company1', hqcountry: 'country1', firstname: 'firstname1', lastname: 'lastname1', email: 'email1', roleid: '16', relationship: 'B', id: 'XXXX1' },
        { status: '2', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company2', hqcountry: 'country2', firstname: 'firstname2', lastname: 'lastname2', email: 'email2', roleid: '17', relationship: 'S', id: 'XXXX2' },
        { status: '4', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company3', hqcountry: 'country3', firstname: 'firstname3', lastname: 'lastname3', email: 'email3', roleid: '18', relationship: 'E', id: 'XXXX3' },
        { status: '7', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company4', hqcountry: 'country4', firstname: 'firstname4', lastname: 'lastname4', email: 'email4', roleid: '20', relationship: 'I', id: 'XXXX4' },
        { status: '8', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company5', hqcountry: 'country5', firstname: 'firstname5', lastname: 'lastname5', email: 'email5', roleid: '20', relationship: 'L', id: 'XXXX5' },
        { status: '5', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company6', hqcountry: 'country6', firstname: 'firstname6', lastname: 'lastname6', email: 'email6', roleid: '21', relationship: '', id: 'XXXX6' },
        { status: '6', createtimestamp: '2019-09-11 11:11:11.11', processtimestamp: '2019-09-11 11:11:11.11', company: 'company7', hqcountry: 'country7', firstname: 'firstname7', lastname: 'lastname7', email: 'email7', roleid: '22', relationship: 'B', id: 'XXXX7' }
      ]
    }
}
```

# SummaryRequest-Detail

## URL: 

```
GET /request/detail/{id}
```

## Response 200:

```js
{
  status:200,
  msg:'ok',  
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
        ibmuniqueid: '11111'
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
        federal: 'N',
        hqcountry: 'CN,AI',
        csoid: 0
      },
      authorization: {
        applicationid: 27,
        internal: 1,
        roleid: 17,
        hqcountry: 'CN,AI',
        csoid: 0
      },
      entitlement: [
        { entitlementtypeid: 5, value: '1234', country: 'CN,US,UK,GB' },
        { entitlementtypeid: 5, value: '2345', country: 'CN,US,UK,GB' },
        { entitlementtypeid: 20, value: '20123', country: 'CN,US,UK,GB' },
        { entitlementtypeid: 22, value: '22345', country: 'CN,US,UK,GB' },
        { entitlementtypeid: 23, value: '2345', country: 'CN,US,UK,GB' },
        { entitlementtypeid: 26, value: '', country: 'CN,US,UK,GB' }
      ]
    }
}
```
## Response 7001:

```js
{ 
  status:7001,
  msg:'No record found for your query'
}

```

# SummaryRequest-Approve

## URL: 

```
POST /manage/request/approve
```

## POST Data

```js
data:		{									
				entitlementrequest: {								
					id: ''							
					creatoribmuniqueid:'' 							
					processoribmuniqueid:''
					processcomment:''
        }
				}	
```
## Response 200:

```js
{
  status:200,
  msg:'ok', 
}
```

## Response 500:

```js
{
  status:500,
  msg:'Failed to approve request: {id}', 
}
```



# SummaryRequest-Deny

## URL: 

```
POST manage/request/deny
```

## POST Data

```js
data:		{									
				entitlementrequest: {								
					id: ''							
					creatoribmuniqueid:'' 							
					processoribmuniqueid:''
					processcomment:''
        }
					
				}	
```
## Response 200:

```js
{
  status:200,
  msg:'ok', 
}
```

## Response 500:

```js
{
  status:500,
  msg:'Failed to deny request: {id}', 
}
```

# SummaryRequest-Update Attributes

## URL: 

```
POST /manage/request/update/attributes
```

## POST Data

```js
data:		{									
														
						entitlementrequest: {								
							id: 231,							
							creatoribmuniqueid: ""							
							processoribmuniqueid: ""							
						},								
														
						attributes:  {	
							usage: 'C',
							dateformat: 'MM/dd/yyyy',
							price: 'Y',
							relationship: 'E',
							segment: 'Y',
							federal: 'N'		              											
						},												
						authorization:  {												
							applicationid : 27,											
							internal : 1,											
							roleid : 17,											
						}	
					
				}	
```
## Response 200:

```js
{
  status:200,
  msg:'ok', 
}
```
