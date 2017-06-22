<template>
  <transition name="slideLeft">
    <div id="handover" :class="spreadStatus?'spread':'off'">
      <left-nav></left-nav>
      <div class="content">
        <div class="handoverHead">
          <div class="leftNavBtn" @click="spreadStatus = !spreadStatus">btn</div>
          <div class="title">交接班</div>
          <router-link to="/handoverList">交接班记录</router-link>
        </div>
      </div>
    </div>
  </transition>

</template>
<style lang="less" rel="stylesheet/less">
  #handover {
    display: flex;
    transform: translateX(-140px);
    width: -webkit-calc(~"100% + 140px");
    height: 100%;
    &.spread {
      transition: transform 0.4s;
      transform: translateX(0);
    }
    &.off {
      transition: transform 0.4s;
      transform: translateX(-140px);
    }
    &.leftSlide-enter, &.leftSlide-leave-active {
      .content {
        transform: translateX(0);
      }
    }
    &.leftSlide-enter-active, &.leftSlide-leave {
      .content {
        transform: translateX(-140px);
      }
    }
    .content {
      width: 960px;
      .handoverHead {
        display: flex;
        width: 100%;
        height: 64px;
        .leftNavBtn {
          /*
                  .bg-image('head_cedaohang')
          */
        }
        .title {
          flex: 1;
          text-align: center;
        }
      }
    }

  }
</style>
<script type="text/ecmascript-6">
  import leftNav from 'components/leftNav/leftNav';
  export default{
    data () {
      return {
        spreadStatus:false
      };
    },
    props: {
      spreadStatus: Boolean
    },
    components: {
      leftNav
    },
    methods: {

    },
  };

</script>
