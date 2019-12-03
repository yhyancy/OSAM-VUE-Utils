<template>
    <el-container>
        <Navigator/>
        <Summaryrequest/>
    </el-container>
</template>

<script>
import Navigator from '@/components/Navigator.vue'
import Summaryrequest from '@/views/Allusers/Summaryrequest.vue'
export default {
  name: 'Alluserlayout',
  components: {
    Navigator,
    Summaryrequest
  }
}
</script>
