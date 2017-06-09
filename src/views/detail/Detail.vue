<template>
  <div>
    <vHead></vHead>
    <section class="act-detail">
      <div class="banner"><img id="bannerImg" :src="this.info.converImage" /></div>
      <div class="title">
        <h1 class="dbline-ellipsis" id="title">{{this.info.title}}</h1>
      </div>
      <div class="list-sec">
        <div class="list-sec-item exce-flex-wrap">
          <i class="iconfont icon-pic_date"></i>
          <div class="exce-flex-item list-sec-item-t">{{this.datetime}}</div>
        </div>
        <div class="list-sec-item exce-flex-wrap">
          <i class="iconfont icon-pic_location"></i>
          <div class="exce-flex-item list-sec-item-t txt-ellipsis">
            <div style="width:100%">
              <div class="txt-ellipsis" id="actAddr">{{this.info.actAddr}}</div>
            </div>
          </div>
        </div>
      </div>
      <router-link :to="{name: 'like', query:{id:id}}">
        <div class="list-sec like-sec">
          <div class="list-sec-item exce-flex-wrap">
            <i class="iconfont icon-pic_people"></i>
            <div class="list-sec-item-t">他们也感兴趣</div>
            <div class="exce-flex-item">
              <ul id="likeList">
                <li v-for="item in likes"><img :src="item.headPhoto|| '/static/images/300x300.jpg'" /></li>
                <li class="like-num" v-if="this.info.likeNum >= 5">{{this.info.likeNum}}</li>
              </ul>
            </div>
          </div>
        </div>
      </router-link>
      <div class="det">
        <h1>活动介绍</h1>
        <div class="det-bd" id="actDet">
         {{this.info.actDesc}}
        </div>
      </div>
      <div class="det comments-wrapper">
        <h1>评论（<span id="commentsNum">{{this.cNum}}</span>）</h1>
        <div class="det-bd comments" id="comments">
          <div class="comments-hd exce-flex-wrap">
            <div class="user-avator"><img :src="this.comments.headPhoto" /></div>
            <div class="exce-flex-item">
              <div style="width:100%">
                <div class="txt-ellipsis user-name">{{this.comments.userName}}</div>
              </div>
            </div>
          </div>
          <div class="comments-bd">{{this.comments.appraisalContent}}</div>
          <div class="time">{{this.ctime}}</div>
          <router-link :to="{name: 'comments', query:{id:id}}">
            <div class="view-all">查看全部评论</div>
          </router-link>
        </div>
      </div>
      
      <router-link :to="{name: 'vote', query:{id:id}}">
        <div class="list-sec vote-sec" >
          <div class="list-sec-item exce-flex-wrap">
            <div class="list-sec-item-t">投票啦~</div>
          </div>
        </div>
      </router-link>
    </section>
    <div class="fixed-btn">
        <div class="exce-flex-wrap">
            <div class="like-btn" @click="like()">
                <i class="iconfont icon-btn_like_default" ref="likeBtn" :class="{'icon-btn_like_select':this.info.likeStatus === '2'}"></i>
                <span>喜欢</span>
            </div>
            <router-link :to="{name:'comments', query:{id:id}}">
              <span class="comment-btn" href="comments.html?fcs=1">
                  <i class="iconfont icon-btn_comment_select1"></i>
                  <span>评论</span>
              </span>
            </router-link>
            <div class="exce-flex-item">
              <router-link :to="{name: 'join', query:{id:id}}">
                <div class="jion-btn">我要报名</div>
              </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import '../../common/less/detail.less'
import vHead from '../../components/CommonHeader'
import { formatTime, alert } from '../../common/js/common.js'

export default {
  name: 'List',
  data() {
    return {
      id: this.$route.params.id,
      datetime: '',
      info: {},
      likes: [],
      cNum: 0,
      comments: {}
    }
  },
  mounted() {
    this.$http.get(this.$url + '/DbCenter/bbsApp/getAppActivityDetail?token=' + this.$token + '&actId=' + this.id)
      .then(res => {
        this.info = res.data.data.activityInfo
        this.likes = res.data.data.operatingList
        this.comments = res.data.data.appraisalList[0]
        this.cNum = this.info.appraisalNum

        if ((this.info.startTime + '').substring(0, 10) === (this.info.endTime + '').substring(0, 10)) {
          formatTime(this.info.startTime + ':00', 'MM-dd hh:mm')
          this.datetime = formatTime(this.info.startTime + ':00', 'MM月dd日 hh:mm') + '至' + formatTime(this.info.endTime + 'MM月dd日 hh:mm')
        } else {
          this.datetime = formatTime(this.info.startTime + ':00', 'MM月dd日 hh:mm') + '至' + formatTime(this.info.endTime + ':00', 'MM月dd日 hh:mm')
        }
      }, err => {
        alert(err)
      })
  },
  methods: {
    like () {
      var me = this
      me.$http.get(me.$url + '/DbCenter/bbsApp/addOperating?token=' + me.$token + '&operating=like&objectId=' + me.id)
      .then(res => {
        if (res.data && res.data.data.isCancel === '1') {
          me.$refs.likeBtn.className = 'iconfont icon-btn_like_default'
          me.info.likeNum = me.info.likeNum - 1
        } else if (res.data && res.data.data.isCancel === '2') {
          me.$refs.likeBtn.className = 'iconfont icon-btn_like_default icon-btn_like_select'
          me.info.likeNum = me.info.likeNum * 1 + 1
        }
        me.likes = res.data.data.operatingList
        // me.likes = [{id: 'E1FCC71673634AD191213263DB09F3E0', userName: '李家洁', createTime: '2017-04-21 17:54:08'}]
        
      }, err => {
        alert(err)
      })
    }
  },
  components: {
    vHead
  },
  computed: {
    ctime () {
      return formatTime(this.comments.createTime, 'MM月dd日')
    }
  }
}

</script>
