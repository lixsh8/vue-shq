import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Detail from '../views/detail/Detail'
import Like from '../views/like/Like.vue'
import Comments from '../views/comments/Comments.vue'
import Vote from '../views/vote/Vote.vue'
import Join from '../views/join/Join.vue'

Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/like',
      name: 'like',
      component: Like
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments
    },
    {
      path: '/vote',
      name: 'vote',
      component: Vote
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    }
  ]
})
