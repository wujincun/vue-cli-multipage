<template>
  <div id="app">
    <transition name="leftSlide">
      <left-nav></left-nav>
      <router-view></router-view>
    </transition>
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
 /*&.leftSlide-enter,&.leftSlide-leave-active{
    .switchBtn{
      transform: translateX(0);
    }
  }
  &.leftSlide-enter-active,&.leftSlide-leave{
    .switchBtn{
      transform: translateX(40px);
    }
  } */
</style>
