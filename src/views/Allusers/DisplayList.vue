<template>
  <el-container>
    <el-header style='height: 12%; !important;'>
      <div class="big-title">{{$t('message.title.am')}}</div>
      <p class="small-title">{{$t('AM006.label.finduser')}}</p>
    </el-header>
    <el-row style='height: 3%; !important;'>
      <el-col :span="24"><div class="grid-content bg-purple">Duplicate records found.Please narrow your search by selecting of the following:</div></el-col>
      <el-col :span="24"><div class="grid-content bg-purple-light">Use the scrollbar below or place cursor focus in table and use right/light arrow keys to view all table data.</div></el-col>
    </el-row>
    <el-main>
      <el-table :data="userlist" style="width: 100%" height="380">
        <el-table-column fixed prop="ibmuniqueid" label width="120">
          <template slot-scope="scope">
           <el-button @click.native.prevent="editRow(scope.$index, userlist)" type="text" size="medium">{{$t("osiam.subtitle.edit")}}
           </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="fullName" label="Name" width="180"></el-table-column>
        <el-table-column prop="email" label="E-mail" width="180"></el-table-column>
        <el-table-column prop="company" label="Company" width="180"></el-table-column>
        <el-table-column prop="country" label="Your country" width="180"></el-table-column>
        <el-table-column prop="phone" label="Telephone" width="180"></el-table-column>
        <el-table-column prop="roleid" label="Role" width="180"></el-table-column>
        <el-table-column prop="status" label="Status" width="180"></el-table-column>
        <el-table-column prop="csoid" label="Cso" width="180"></el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>
<script>
import { get } from '../../common/request'
export default {
  name: 'DisplayList',
  data () {
    return {
      userlist: [],
      roleMap: {
        '17': 'appViewer',
        '18': 'appOwner',
        '22': 'amOwner',
        '28': 'entitlementManager',
        '20': 'centerCoordinator',
        '21': 'customerSupport',
        '16': 'appUser',
        '29': 'externalAdmin'
      }
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    getUserList () {
      let tempList = this.$route.query.userlist
      tempList.forEach(item => {
        if (typeof item.roleid === 'number' && !isNaN(item.roleid)) {
          item['roleid'] = this.roleMap[item['roleid']]
          item['fullName'] = item['firstname'] + item['lastname']
        }
      })
      this.userlist = tempList
      console.log('转换过的userlist', this.userlist)
    },
    async editRow (index, userlist) {
      const result = await get('/user/profile/' + userlist[index].ibmuniqueid)
      console.log('DisplayList user result======', result.data)
      this.$router.push({ path: '/editoneuser', query: { userid: userlist[index].ibmuniqueid } })
    }
  }
}
</script>
<style scoped>
.el-container{
    background-color: #FAFCFD
}
.el-header {
    color: #333;
    text-align: left;
    line-height: 400%;
    height: 12% !important;
  }
  .big-title{
    font-size: 2.5vw;
    font-family: bold !important;
  }
  .small-title{
    font-size: 1.2vw;
    color: #57636e;
  }
  .el-row {
    /* margin-bottom: 2%; */
    padding: 2% 0 0 2%;
    }
  .grid-content {
    border-radius: 4px !important;
    min-height: 90% !important;
  }
  .bg-purple {
    font-family: bold !important;
    line-height: 150% !important;
    font-size: 1.2vw !important;
    padding: 0.5% 0 !important;
  }
  .bg-purple-light {
    line-height: 180% !important;
    font-size: 1.2vw !important;
    color: #7f8b96 !important;
    padding: 0.5% 0 !important;
  }
 .el-button{
    background-color: #99a9bf !important;
    border-color: #99a9bf !important;
    color: #333 !important;
    padding: 5% !important;
 }
  </style>
