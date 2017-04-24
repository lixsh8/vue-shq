<template>
  <div class="index">
    我是主页index
    <img src="../common/images/loading.png" alt="">
    <img src="../common/images/timg.jpg" alt="">
    <span @click="jian(2)">---</span>  {{count}}   <span @click='add()'>++++</span>
    <div>
      foods length:{{foodsLen}}
    </div>
    <Hello />
  </div>
</template>

<script>
// import {mapState, mapActions} from 'vuex'
import Hello from '../components/Hello'
import {getData, jia} from '../store/actions'

export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    Hello
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    foodsLen () {
      return this.$store.getters.foodsLength
    }
  },
  methods: {
    add () {
      this.$store.dispatch('jia', {num: 1})
    },
    jian (n) {
      this.$store.dispatch('jian', n)
    }
  },
  vuex: {
    getters: {
      foods: state => state.foods
    },
    actions: {
      getData,
      jia
    }
  },
  created () {
    this.$store.dispatch('getData')
  }
}
</script>
<style lang="css" scoped>
</style>
