<template>
  <div>
    <vHead></vHead>
    <section class="act-detail">
      <div class="banner"><img id="bannerImg" :src="info.converImage" /></div>
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
      <a class="list-sec like-sec" href="like.html">
        <div class="list-sec-item exce-flex-wrap">
          <i class="iconfont icon-pic_people"></i>
          <div class="list-sec-item-t">他们也感兴趣</div>
          <div class="exce-flex-item">
            <ul id="likeList">
              <li v-for="like in likes"><img :src="like.headPhoto|| '/static/images/300x300.jpg'" /></li>
              <li class="like-num" v-if="this.info.likeNum >= 5">{{this.info.likeNum}}</li>
            </ul>
          </div>
        </div>
      </a>
      <div class="det">
        <h1>活动介绍</h1>
        <div class="det-bd" id="actDet">
          {{this.info.actDesc}}
        </div>
      </div>
      <div class="det comments-wrapper">
        <h1>评论（<span id="commentsNum">{{this.info.appraisalNum}}</span>）</h1>
        <div class="det-bd comments" id="comments">
          <div class="comments-hd exce-flex-wrap">
            <div class="user-avator"><img :src="comments.headPhoto" /></div>
            <div class="exce-flex-item">
              <div style="width:100%">
                <div class="txt-ellipsis user-name">宝宝</div>
              </div>
            </div>
          </div>
          <div class="comments-bd">{{this.comments.appraisalContent}}</div>
          <div class="time">{{this.comments.createTime | cDate}}</div>
          <router-link :to="{name:'comments', query: {id: id}}">
            <div class="view-all">查看全部评论</div>
          </router-link>
        </div>
      </div>
      <router-link :to="{name: 'comments'}">
        <div class="list-sec vote-sec" id="voteLink">
          <div class="list-sec-item exce-flex-wrap">
            <div class="list-sec-item-t">投票啦~</div>
          </div>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
  import '../../common/less/detail.less'
  import vHead from '../../components/CommonHeader'
  import { formatTime } from '../../common/js/common.js'

  export default {
    name: 'Detail',
    data() {
      return {
        id: this.$route.params.id,
        datetime: '',
        info: {},
        likes: [],
        comments: []
      }
    },
    mounted() {
      this.$http.get(this.$url + '/DbCenter/bbsApp/getAppActivityDetail?token=' + this.$token + '&actId=' + this.id)
        .then(res => {
          console.log(res.data)
          this.info = res.data.data.activityInfo
          this.likes = res.data.data.operatingList
          this.comments = res.data.data.appraisalList[0]
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
    components: {
      vHead
    },
    computed: {

    },
    filters: {
      cDate(value) {
        return formatTime(value, 'MM-dd hh:mm')
      }
    }
  }

</script>
