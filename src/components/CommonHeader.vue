<template>
  <div class="comHeader">
    <!-- 头部 -->
    <header class="header header-native">
      <a href="javascript:void(0)" @click="goback()" class="header-l arr-l"></a>
      <h1 id="">活动详情</h1>
    </header>
    <div class="header-cover header-cover-native"></div>
  </div>
</template>

<script>
export default {
  name: 'tabHeader',
  methods: {
    getHeaderHeight() {
      return this.$refs.headDom.offsetHeight
    },
    goback () {
      this.$router.goBack()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../common/less/variable.less";

.header {
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
  position: fixed;
  background: @headerBgColor;
  color: #fff;
  top: 0;
  left: 0;

  &.header-native {
    padding-top: 1rem;

    .header-l {
      top: 1rem
    }
  }

  .header-l {
    min-width: 2.2rem;
    height: 2.2rem;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0px;
    padding: 0 10px;
    box-sizing: content-box;
    color: #fff;
  }

  .header-r {
    min-width: 2.2rem;
    height: 2.2rem;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0px;
    padding: 0 10px;
    box-sizing: content-box;
    color: #fff;
  }

  h1 {
    text-align: center;
    font-size: .9rem;
  }
}


.header-cover {
  width: 100%;
  height: 2.2rem;

  &.header-cover-native {
    height: 3.2rem;
  }
}
</style>
