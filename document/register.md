## Request new entitlement	 

## URL: 

```

POST //request/new/csol/{ibmuniqueid}
```

## Response 200:

```js	 	 	 	 	 	 	 	 	 	 	 
    Path: /request/new/{role}/{iui}	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	Method: POST	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	Headers:	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	X-XSRF-TOKEN=?	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	Content-Type: application/json	 	 	 	 	 	 	 	 	 	 	 	 	 
 	data:	{	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	attributes:  {	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	 	usage : "",	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	 	channels : "",	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	 	dateformat : "",	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	 	price : "",	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	 	relationship : "",	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	 	segment : "",	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	 	federal : "",	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	 	csoid: ""	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	 	hqcountry : ""	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	},	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	authorization:  {	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	 	applicationid : "",	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	 	internal : "",	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	 	roleid : "",	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	},	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	entitlement: [	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	 	{entitlementtypeid: 5, value: "1234", country: "CN,US,UK,GB"},	 
 	 	 	 	 	{entitlementtypeid: 5, value: "2345", country: "CN,US,UK,GB"},	 
 	 	 	 	 	{entitlementtypeid: 20, value: "20123", country: "CN,US,UK,GB"},
 	 	 	 	 	{entitlementtypeid: 22, value: "22345", country: "CN,US,UK,GB"},
 	 	 	 	 	{entitlementtypeid: 23, value: "2345", country: "CN,US,UK,GB"},	 
 	 	 	 	 	{entitlementtypeid: 26, value: "", country: "CN,US,UK,GB"},	 	 
 	 	 	 	],	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	emaildomains: ["","","",""]	 	 	 	// domains	 	 	 	 	 	 
 	 	 	}	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	Response:	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	status-msg:	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
 	 	 	 	200-ok	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 
        	5001-Failed to deserialize parameter with name: {name}, {name} maybe missing or in the wrong place in body field.			5002-Failed to create new request for {iui} in step {step}																	data:{																													
			entitlementrequestid : ""																															
		}						
	        																																	
																																




