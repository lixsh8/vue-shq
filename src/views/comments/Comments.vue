<template>
  <div>
    <vHead :vtitle="vtitle" ref="vhead" />
    <!-- 内容 -->
    <section class="act-comments" ref="content">
      <div class="comments-wrapper">
        <h1>评论（
          <span id="commentsNum">{{this.cNum}}</span>）</h1>
        <ul id="list">
          <li class="comments" onclick="reply('id')" v-for="item in comments">
            <div class="comments-hd exce-flex-wrap">
              <div class="user-avator">
                <img :src="item.headPhoto" />
              </div>
              <div class="exce-flex-item txt-ellipsis">
                <div style="width:100%">
                  <div class="txt-ellipsis user-name">
                    <span>{{item.userName}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="comments-bd">{{item.appraisalContent}}</div>
            <div class="time">{{item.createTime|ctime}}</div>
            <div class="reply" v-if="item.appraisalReplyList.length>0">
              <div v-for="sub in item.appraisalReplyList" class="reply-item">
                <div class="reply-cnt">
                  <div class="l">{{sub.replyName}}回复：</div>
                  <div class="r">{{sub.replyContent}}</div>
                </div>
                <div class="reply-t">{{sub.replyTime | ctime}}</div>
              </div>
            </div>
          </li>
          <!--                    
              <li class="comments" onclick="reply()">
                  <div class="comments-hd exce-flex-wrap">
                      <div class="user-avator"><img src="/Content/images/pro/pic_license@2x.png" /></div>
                      <div class="exce-flex-item txt-ellipsis">
                          <div style="width:100%">
                              <div class="txt-ellipsis user-name">用户AA卓越东部蔚蓝海岸1期卓越东部蔚蓝海岸1期卓越东部蔚蓝海岸1期卓越东部蔚蓝海岸1期</div>
                          </div>
                      </div>
                  </div>
                  <div class="comments-bd">上次参加，遇到现在的女友，很欢乐，很开心。上次参加，遇到现在的女友，很欢乐，很开心。</div>
                  <div class="time">1月18日 12:12</div>
              </li>-->
        </ul>
      </div>
      <div class="footer-cover"></div>
    </section>
  
    <FixedBottomInput :type="'comment'" :objectId='id'></FixedBottomInput>
  </div>
</template>

<script>
import { formatTime, Scroll } from '../../common/js/common.js'
import vHead from '../../components/CommonHeader'
import FixedBottomInput from '../../components/FixedBottomInput'

export default {
  name: 'Commcents',
  data() {
    return {
      vtitle: '评论',
      id: this.$route.query.id,
      cNum: 0,
      index: 1,
      comments: []
    }
  },
  mounted() {
    var me = this
    var query = true
    this.$http.get(this.$url + '/DbCenter/bbsApp/getAppAppraisalList?token=' + this.$token + '&pageIndex=' + this.index + '&pageSize=5&objectId=' + this.id)
      .then(res => {
        if (res.data.data) {
          this.comments = res.data.data.appraisalList
          this.cNum = res.data.data.appraisalNum
        }
      }, err => {
        alert(err)
      })
    this.index++
    /* eslint-disable no-new */
    window.addEventListener('scroll', function (e) {
      var ST = document.body.scrollTop || document.documentElement.scrollTop
      var WH = window.innerHeight - me.$refs.vhead.getHeaderHeight()
      var DH = me.$refs.content.offsetHeight
      if (ST + WH - 10 > DH && query) {
        query = false
        me.$http.get(me.$url + '/DbCenter/bbsApp/getAppAppraisalList?token=' + me.$token + '&pageIndex=' + me.index + '&pageSize=5&objectId=' + me.id)
          .then(res => {
            if (res.data.data) {
              me.comments = me.comments.concat(res.data.data.appraisalList)
              me.index++
            }
            query = true
          }, err => {
            query = true
            alert(err)
          })
        console.log(1)
      }
    })
  },
  filters: {
    ctime(v) {
      return formatTime(v, 'MM月dd日 hh:mm')
    }
  },
  components: {
    vHead,
    FixedBottomInput
  }
}
</script>

<style lang="less" scoped>
@import '../../common/less/common.less';

.comments-wrapper {
  margin-top: .75rem;
  padding: .2rem 0 .5rem .75rem;
  font-size: .8rem;
  background: white;
}

.comments {
  padding: .5rem .75rem .3rem 0;
  line-height: 1.2;
  color: #000;
  border-top: 1px solid #c8c7cc;
}

.user-name span,
.user-name i {
  display: inline-block;
  vertical-align: middle;
}

.user-name span {
  color: #313589;
}

.user-name i {
  margin: 0 5px;
}

.reply {
  position: relative;
  margin-top: 0.5rem;
  padding: 0 .5rem;
  font-size: .7rem;
  background: #f3f3f3;
  border-radius: 5px;

  .reply-item {
    padding-bottom: .5rem;
    border-bottom: 1px solid #fff;

    &:last-child {
      border-bottom: none;
    }

    .reply-cnt {
      padding-top: .5rem;
      line-height: 1.5;

      .l {
        float: left;
        color: #369;
      }

      .r {
        color: #ccc;
        text-indent: 5px;
      }
    }
    .reply-t {
      padding-top: .2rem;
      font-size: .6rem;
    }
  }

  &::before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    position: absolute;
    top: -18px;
    left: 10px;
    border: 10px solid transparent;
    border-bottom: 10px solid #f3f3f3;
  }
}
</style>
