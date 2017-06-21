<template>
  <div id="app">
    <left-nav></left-nav>
    <router-view ></router-view>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import leftNav from 'components/leftNav/leftNav'

  export default {
    name: 'app',
    components: {
      leftNav
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
