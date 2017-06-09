<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    // beforeRouteUpdate (to, from, next) {
    //   let isBack = this.$router.isBack
    //   alert('111')
    //   if (isBack) {
    //     this.transitionName = 'slide-right'
    //   } else {
    //     this.transitionName = 'slide-left'
    //   }
    //   this.$router.isBack = false
    //   next()
    // },
    watch: {
      '$route'(to, from) {
        let isBack = this.$router.isBack
        // console.log(this.$router.isBack)
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        if (isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
    }
  }

</script>
<style lang="less">
  .child-view {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    transition: all .8s cubic-bezier(.55, 0, .1, 1);
  }
  
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate3d(35px, 0, 0);
    transform: translate3d(35px, 0, 0);
  }
  
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate3d(-35px, 0, 0);
    transform: translate3d(-35px, 0, 0);
  }
</style>