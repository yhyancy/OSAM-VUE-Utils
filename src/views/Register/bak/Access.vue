<template>
  <div>
    {{$t("message.question.application")}}
    <br />

    <br />
    <el-row>
      <el-col :span="4">
        <!-- select选择器select appliction -->
        {{$t("AM009.label.Application")}}[
        <el-tooltip effect="light" content="Help regarding application" placement="bottom-start">
          <span class="questionmark">
            <el-link href="https://www.baidu.com" target="_blank">?</el-link>
          </span>
        </el-tooltip>]
        <span class="asterrisk">*</span>
      </el-col>
      <el-col :span="20">
        <!-- Application selector -->
        <el-select v-model="appName" @change="setApplication" placeholder="application">
          <el-option v-for="item in application" :key="item.id" :label="item.name" :value="item"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :span="4">
        <!-- select Role -->
        {{$t("AM009.label.Role")}}
        <span class="asterrisk">*</span>
      </el-col>
      <el-col :span="20">
        <el-select v-model="roleName" @change="setRole" placeholder="role">
          <el-option v-for="item in irroleOrg" :key="item.id" :label="item.name" :value="item"></el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Access',
  data () {
    return {
      //  application
      application: [
        {
          id: '27',
          name: 'Order Status OnLine'
        },
        {
          id: '3',
          name: 'Order Status Authorization Manager'
        }
      ],
      appName: 'please select application',
      //    role
      irroleOSAM: [
        {
          id: '17',
          name: 'AM Owner'
        },
        {
          id: '28',
          name: 'Entitlement Manager'
        },
        {
          id: '20',
          name: 'Center Coordinator'
        },
        {
          id: '21',
          name: 'Customer Support OnLine Entitlement Coordinator'
        }
      ],
      irroleOSOL: [
        {
          id: '17',
          name: 'Application Viewer'
        },
        {
          id: '18',
          name: 'Application Owner'
        }
      ],
      irroleOrg: [],
      roleName: 'please select role'
    }
  },

  methods: {
    setApplication (value) {
      console.log('value.name=========', value.name)
      this.appName = value.name
      this.$emit('setApplication', value)
      if (value.name === 'Order Status OnLine') {
        this.irroleOrg = this.irroleOSOL
      } else {
        this.irroleOrg = this.irroleOSAM
      }
    },
    setRole (value) {
      console.log(value)
      this.roleName = value.name
      this.$emit('setRole', value)
    }
  }
}
</script>

<style scoped>
/* .item {
  margin: 4px;
} */
.left .el-tooltip__popper,
.right .el-tooltip__popper {
  padding: 8px 10px;
}
.bottom {
  clear: both;
  text-align: center;
}
.left {
  float: left;
  width: 6px;
}
.asterrisk {
  color: red;
}
</style>
