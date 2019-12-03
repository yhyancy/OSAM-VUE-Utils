# SWITCHID-List

## URL: 

```
GET /swich/list
```

## Response 200:

```js
{
  data: {
    userlist: [
      { ibmuniqueid: '10001', firstname: 'Yizheng', lastname: 'Cao', email: 'yzcaodl@cn.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10002', firstname: 'Songnan', lastname: 'Shang', email: 'snshang@cn.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10003', firstname: 'Yoko', lastname: 'Iwami', email: 'yokoiwami@jp.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10004', firstname: 'Benedetta', lastname: 'Nardi', email: 'benedetta_nardi@it.ibm.co', rolename: 'AppViewer' }
    ]
  }
}
```

# SWITCHID-ADD

## URL: 

```
GET /swich/add/${userId}
```

## Response 200:

```js
{
  status:200,
  msg:'ok',  
  data: {
    userlist: [
      { ibmuniqueid: '10001', firstname: 'Yizheng', lastname: 'Cao', email: 'yzcaodl@cn.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10002', firstname: 'Songnan', lastname: 'Shang', email: 'snshang@cn.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10003', firstname: 'Yoko', lastname: 'Iwami', email: 'yokoiwami@jp.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10004', firstname: 'Benedetta', lastname: 'Nardi', email: 'benedetta_nardi@it.ibm.co', rolename: 'AppViewer' }
    ]
  }
}
```
## Response 8001:

```js
{ 
  status:8001,
  msg:'Invalid user id', 
  data: {
    userlist: [
      { ibmuniqueid: '10001', firstname: 'Yizheng', lastname: 'Cao', email: 'yzcaodl@cn.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10002', firstname: 'Songnan', lastname: 'Shang', email: 'snshang@cn.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10003', firstname: 'Yoko', lastname: 'Iwami', email: 'yokoiwami@jp.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10004', firstname: 'Benedetta', lastname: 'Nardi', email: 'benedetta_nardi@it.ibm.co', rolename: 'AppViewer' }
    ]
  }
}

```
## Response 8002:

```js
{ 
  status:8002,
  msg:'No registration found in OSOL', 
  data: {
    userlist: [
      { ibmuniqueid: '10001', firstname: 'Yizheng', lastname: 'Cao', email: 'yzcaodl@cn.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10002', firstname: 'Songnan', lastname: 'Shang', email: 'snshang@cn.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10003', firstname: 'Yoko', lastname: 'Iwami', email: 'yokoiwami@jp.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10004', firstname: 'Benedetta', lastname: 'Nardi', email: 'benedetta_nardi@it.ibm.co', rolename: 'AppViewer' }
    ]
  }
}

```

## Response 8003:

```js
{ 
  status:8003,
  msg:'Switch already enabled', 
  data: {
    userlist: [
      { ibmuniqueid: '10001', firstname: 'Yizheng', lastname: 'Cao', email: 'yzcaodl@cn.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10002', firstname: 'Songnan', lastname: 'Shang', email: 'snshang@cn.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10003', firstname: 'Yoko', lastname: 'Iwami', email: 'yokoiwami@jp.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10004', firstname: 'Benedetta', lastname: 'Nardi', email: 'benedetta_nardi@it.ibm.co', rolename: 'AppViewer' }
    ]
  }
}

```

## Response 8004:

```js
{ 
  status:8004,
  msg:'Id is not active', 
  data: {
    userlist: [
      { ibmuniqueid: '10001', firstname: 'Yizheng', lastname: 'Cao', email: 'yzcaodl@cn.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10002', firstname: 'Songnan', lastname: 'Shang', email: 'snshang@cn.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10003', firstname: 'Yoko', lastname: 'Iwami', email: 'yokoiwami@jp.ibm.com', rolename: 'AppViewer' },
      { ibmuniqueid: '10004', firstname: 'Benedetta', lastname: 'Nardi', email: 'benedetta_nardi@it.ibm.co', rolename: 'AppViewer' }
    ]
  }
}

```
# SWITCHID-REMOVE

## URL: 

```
GET /swich/remove/${ibmuniqueid}
```

## Response 200:

```js
{
  status:200,
  msg:'ok', 
}
```

## Response 8004:

```js
{
  status:500,
  msg:'Failed to remove switch feature with: {ibmuniqueid}', 
}
```