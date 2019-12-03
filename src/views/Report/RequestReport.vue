<template>
<el-container class="main" direction="vertical">
  <elheader></elheader>
  <elmain></elmain>
</el-container>
</template>

<script>
import elheader from '../Report/header'
import elmain from '../Report/elmain'
export default {
  name: 'RequestReport',

  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  },

  components: {
    elheader,
    elmain
  }
}
</script>
