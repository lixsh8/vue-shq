<template>
  <div class="like">
    <cHeader />
    <section class="act-like" v-show="likes.length > 0">
      <ul id="list">
        <li class="exce-flex-wrap" v-for="item in likes">
          <div class="user-avator"><img :src="item.headPhoto" /></div>
          <div class="user-bd">
            <div class="user-name">{{item.userName}}</div>
            <div class="time">{{item.createTime | lDate}}</div>
          </div>
        </li>
        <!--<li class="exce-flex-wrap">
          <div class="user-avator"><img src="/Content/assets/images/pro1.png" /></div>
          <div class="user-bd">
            <div class="user-name">王保保</div>
            <div class="time">1月12日 12:12</div>
          </div>
        </li>
        <li class="exce-flex-wrap">
          <div class="user-avator"><img src="/Content/assets/images/pro1.png" /></div>
          <div class="user-bd">
            <div class="user-name">王保保</div>
            <div class="time">1月12日 12:12</div>
          </div>
        </li>-->
      </ul>
    </section>
    <div class="noData " id="noData1" v-show="this.likes && this.likes.length === 0"><img src="../../common/images/nodata.png" />
      <h6>暂无数据</h6></div>
  </div>
</template>

<script type="text/javascript">
import cHeader from '../../components/CommonHeader'
import {formatTime} from '../../common/js/common.js'

export default {
  name: 'Like',
  data() {
    return {
      likes: [],
      id: this.$route.query.id
    }
  },
  mounted() {
    this.$http.get(this.$url + '/DbCenter/bbsApp/getAppOperatingList?token=' + this.$token + '&operating=like&pageIndex=1&pageSize=10&objectId=' + this.id)
      .then(res => {
        if (res.data.data) {
          this.likes = res.data.data
        }
      }, err => {
        alert(err)
      })
  },
  filters: {
    lDate (v) {
      return formatTime(v, 'MM月dd日 hh:mm')
    }
  },
  components: {
    cHeader
  }
}

</script>

<style lang='less' scoped>
@import '../../common/less/common.less';

.act-like {
  padding-top: .5rem;

  ul {
    padding-left: .75rem;
    background: white;
  }

  li {
    padding: .5rem 0;
    border-bottom: 1px solid #c8c7cc;
  }

  li .user-avator {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: .5rem;
    overflow: hidden;
  }

  li .user-avator img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  li .user-name {
    padding-top: .4rem;
    overflow: hidden;
    font-size: .8rem;
    color: #000;
  }

  li .time {
    padding-top: .4rem;
    font-size: .6rem;
    color: #c8c7cc;
  }
}
</style>