<template>
  <div id="ibm-content-wrapper">
    <BaseTheHeader></BaseTheHeader>
    <BaseLeftNavBar  v-if="this.$store.state.currUser.iruser"></BaseLeftNavBar>
      <div class="osam-loading" v-else>
        <img src="./assets/loading.gif" alt="Loading..." width="100rem" height="100rem">
      </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  padding: 15px;
  padding-top:10px;
}

ul>li::before{
      content: unset;
    // display: inline-block;
    // font-size: 1rem;
    // margin-left: auto;
    // position: sticky;
    font-family: unset;
    display: contents;
}
.osam-loading {
  width: 100%;
  height: 320px;
  text-align: center
}
.osam-loading-spinner {
  text-align: center
}
</style>

<script>

export default {
  components: {
    'BaseTheHeader': () => import('./components/BaseTheHeader'),
    'BaseLeftNavBar': () => import('./components/BaseLeftNavBar')
  }
}
</script>
