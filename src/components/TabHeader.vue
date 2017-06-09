<template>
  <div class="tabheader">
    <!-- 头部 -->
    <header class="tab-header" ref="headDom">
      <div class="tab">
        <a href="/" class="active">社区活动</a>
        <a href="">跳蚤市场</a>
      </div>
    </header>
    <div class="header-cover"></div>
  </div>
</template>

<script>
  export default {
    name: 'tabHeader',
    methods: {
      getHeaderHeight () {
        return this.$refs.headDom.offsetHeight
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../common/less/variable.less";

  .tab-header {
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    background: @headerBgColor;
    z-index: 8;
  }
  .native-header{
    padding-top: 1rem;
  }
  .tab {
    width: 10rem;
    padding: .2rem 0;
    margin: 0 auto;
  }
  
  .tab a {
    display: inline-block;
    width: 3.8rem;
    line-height: 1.2rem;
    padding: .3rem 0;
    font-size: @fontSize;
    color: #fff;
    border-bottom: .15rem solid @headerBgColor;
  }
  
  .tab a:last-child {
    margin-left: 1.8rem;
  }
  
  .tab a.active {
    border-bottom: .15rem solid #fff;
  }
  
  .header-cover {
    height: 2.2rem;
  }
  .native-header-cover{
    height: 3.4rem;
  }
  
</style>
