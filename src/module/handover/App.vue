<template>
  <transition name="slideLeft">
    <div id="app">
      <div class="content" @spreadStatus="spread" :class="spreadStatus?'spread':'off'">
        <left-nav></left-nav>
        <router-view :spreadStatus="spreadStatus"></router-view>
      </div>
    </div>
  </transition>
</template>
<style lang="less" rel="stylesheet/less">
  #app {
    height: 100%;
    overflow: hidden;
    .content{
      display: flex;
      transform: translateX(-140px);
      width: -webkit-calc(~"100% + 140px");
      &.spread {
        transition: transform 0.4s;
        transform: translateX(0);
      }
      &.off {
        transition: transform 0.4s;
        transform: translateX(-140px);
      }
    }
  }

  &.leftSlide-enter, &.leftSlide-leave-active {
    .content{
      transform: translateX(0);
    }
  }

  &.leftSlide-enter-active, &.leftSlide-leave {
    .content{
      transform: translateX(-140px);
    }
  }
</style>
<script type="text/ecmascript-6">
  import 'common/css/common.less';
  import leftNav from 'components/leftNav/leftNav';
  export default{
    data () {
      return {

      };
    },
    components: {
      leftNav
    },
    methods: {
      spread(bool){
        console.log(bool)
        this.spreadStatus = bool
      }
    }
  };

</script>
