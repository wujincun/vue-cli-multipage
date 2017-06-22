<template>
  <div id="handover">
    <div class="handoverHead">
        <div class="leftNavBtn" @click="navSpread">btn</div>
        <div class="title">交接班</div>
        <div class="goLogBtn">交接班记录</div>
    </div>
    <router-link to="/handoverList">handover</router-link>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  #handover{
    width: 960px;
    .handoverHead{
      display: flex;
      width: 100%;
      height: 64px;
      .leftNavBtn{
/*
        .bg-image('head_cedaohang')
*/
      }
      .title{
        flex: 1;
        text-align: center;
      }
    }
  }
</style>
<script type="text/ecmascript-6">
    export default{
        data () {
            return{

            };
        },
        props:{
          spreadStatus:Boolean
        },
        methods:{
          navSpread(){
            this.leftNavStatus = !this.spreadStatus;
            console.log('child'+ this.leftNavStatus)
            this.$emit('spreadStatus',this.leftNavStatus)
          }
        },
    };

</script>
