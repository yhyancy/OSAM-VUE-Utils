<template>
  <div align="center">
    <br />
    <hr />
    <h1>{{ userName }} {{ $t("AM000.welcome") }}</h1>
    <hr />
    <div align="left">
      {{ $t("AM000.p1") }}
      <br />
      <br />
      {{ $t("AM000.p2") }}
    </div>
    <hr />
    <div>
      ====== FOR DEV/TEST ONLY ======
      <br />
      <br />
      <el-select
        v-model="roleId"
        placeholder="Pleae select new role"
        size="medium"
        @change="handleRoleChange"
      >
        <el-option
          v-for="item in roleOptions"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import { get } from '@/common/request'

export default {
  name: 'welcome',
  data () {
    return {
      roleId: '',
      roleOptions: [
        {
          id: '0000',
          name: 'New Register Internal(0000)'
        },
        {
          id: '0001',
          name: 'Old Register Internal(0001)'
        },
        {
          id: '0002',
          name: 'New Register External(0002)'
        },
        {
          id: '16',
          name: 'External-OSOL->AppUser(16)'
        },
        {
          id: '17',
          name: 'Internal-OSOL->AppViewer(17)'
        },
        {
          id: '18',
          name: 'Internal-OSOL->AppOwner(18)'
        },
        {
          id: '20',
          name: 'Internal-OSAM->Center Coordinator(20)'
        },
        {
          id: '21',
          name:
            'Internal-OSAM->Customer Support OnLine Entitlement Coordinator(21)'
        },
        {
          id: '22',
          name: 'Internal-OSAM->AM Owner(22)'
        },
        {
          id: '28',
          name: 'Internal-OSAM->Entitlement Manager(28)'
        },
        {
          id: '29',
          name: 'External-OSAM->External Admin(29)'
        }
      ]
    }
  },
  computed: {
    userName: function () {
      if (this.$store.state.currUser.iruser) {
        const fullName =
          this.$store.state.currUser.iruser.firstname +
          ' ' +
          this.$store.state.currUser.iruser.lastname
        return fullName
      } else {
        const fullName = ''
        return fullName
      }
    }
  },
  methods: {
    handleRoleChange: function (val) {
      this.$store.commit('REMOVE_CURRENT_USER')
      get(`/user/profile/${val}`).then(res => {
        this.$store.commit('SET_CURRENT_USER', res.data)
      })
    }
  }
}
</script>
