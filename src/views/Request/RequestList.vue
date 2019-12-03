<template>
  <el-table :data="formData" style="width: 100%;height:100%" @row-click="showCurrentRow">
    <el-table-column prop="status" fixed="left" :label="$t('search.results.field1')" >
      <template slot-scope="scope">
        <el-button @click="showDetail(scope.row)" type="text" >{{erstatus[scope.row.status]}}</el-button>
      </template>
    </el-table-column>
    <el-table-column fixed prop="id" :label="$t('entitlementsummary.section1.field1')" >
    </el-table-column>
    <el-table-column prop="createtimestamp" :label="$t('search.results.field2')" :formatter="dateFormat" >
    </el-table-column>
    <el-table-column prop="processtimestamp" :label="$t('search.results.field3')" :formatter="dateFormat" >
    </el-table-column>
    <el-table-column prop="company" :label="$t('search.results.field4')" >
    </el-table-column>
    <el-table-column prop="hqcountry" :label="$t('search.cc')" >
    </el-table-column>
    <el-table-column prop="firstname" :label="$t('search.results.field5')"  :formatter="setUserName">
    </el-table-column>
    <el-table-column prop="email" :label="$t('search.results.field6')" >
    </el-table-column>
    <el-table-column prop="roleid" :label="$t('search.results.field7')" >
      <template slot-scope="scope">
        {{scope.row.roleid===''?'':irrole[scope.row.roleid].name}}
      </template>
    </el-table-column>
    <el-table-column prop="relationship" :label="$t('search.relation')" :formatter="setRelation" >
    </el-table-column>
  </el-table>
</template>
Vue.use(i18n)

<script>
// import { get } from '@/common/request'
export default {
  props: ['formData'],
  methods: {
    async showDetail (data) {
      // const result = await get(`/request/detail/${data.id}`)
      console.log(data)
      this.$router.push({ path: '/summaryRequestDetail', query: { queryId: data.id } })
    },
    showCurrentRow (row, column, event) {
      this.showDetail(row)
    },
    dateFormat (row, column, cellValue, index) {
      if (cellValue === null || cellValue === '') return ''
      let date = new Date(cellValue)
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return year + '/' + month + '/' + day
    },
    setUserName (row, column, cellValue, index) {
      return row.firstname + row.lastname
    },
    setRelation (row, column, cellValue, index) {
      let showValue = ''
      if (row.roleid === 20) {
        // relation shows CSO center
        showValue = ''
        if(this.csocenter[row.csoid]!=null)
          showValue = this.csocenter[row.csoid].name
      } else {
        if (row.relationship === ' ' || row.relationship === '' || row.relationship === null || row.relationship === 'null') {
          showValue = ''
        } else {
          showValue = this.relation[row.relationship].name
        }
      }
      return showValue
    }
  },
  data () {
    return {
      irrole: this.$Utils.irrole,
      relation: this.$Utils.relation,
      erstatus: this.$Utils.erstatus,
      csocenter: this.$Utils.csocenter
    }
  }

}
</script>
