<template>
  <div>
    <tabHeader ref="head"></tabHeader>
    <div class="act-list list-wrapper list-wrapper-hook" ref="listWrapper" id="wrapper">
      <ul class="list-content list-content-hook" ref="listContent">
        <!--<li class="list-item">
          <a href="detail.html">
            <div class="banner"><img src="../common/images/activity1.png" /></div>
            <h1 class="txt-ellipsis">寻找最幸福的家庭 5月1日蔚蓝海岸不见不散寻找最幸福的家庭 5月1日蔚蓝海岸不见不散最幸福的家庭 5月1日蔚蓝海岸不见不散最幸福的家庭 5月1日蔚蓝海岸不见不散</h1>
            <h6><i class="iconfont icon-pic_location"></i><span>深圳东部蔚蓝海岸</span><i class="ml-20 iconfont icon-pic_date"></i><span>未开始</span></h6>
          </a>
        </li>
        <li class="list-item">
          <a href="detail.html">
            <div class="banner"><img src="../common/images/activity1.png" /></div>
            <h1 class="txt-ellipsis">寻找最幸福的家庭 5月1日蔚蓝海岸不见不散寻找最幸福的家庭 5月1日蔚蓝海岸不见不散最幸福的家庭 5月1日蔚蓝海岸不见不散最幸福的家庭 5月1日蔚蓝海岸不见不散</h1>
            <h6><i class="iconfont icon-pic_location"></i><span>深圳东部蔚蓝海岸</span><i class="ml-20 iconfont icon-pic_date"></i><span>未开始</span></h6>
          </a>
        </li>
        <li class="list-item">
          <a href="detail.html">
            <div class="banner"><img src="../common/images/activity1.png" /></div>
            <h1 class="txt-ellipsis">寻找最幸福的家庭 5月1日蔚蓝海岸不见不散寻找最幸福的家庭 5月1日蔚蓝海岸不见不散最幸福的家庭 5月1日蔚蓝海岸不见不散最幸福的家庭 5月1日蔚蓝海岸不见不散</h1>
            <h6><i class="iconfont icon-pic_location"></i><span>深圳东部蔚蓝海岸</span><i class="ml-20 iconfont icon-pic_date"></i><span>未开始</span></h6>
          </a>
        </li>-->
        <li class="list-item" v-for="item in items">
          <router-link :to="{name: 'detail', params: {id: item.id}}">
            <div class="banner"><img :src="item.converImage" /></div>
            <h1 class="txt-ellipsis">{{item.title}}</h1>
            <h6><i class="iconfont icon-pic_location"></i><span>{{item.actAddr}}</span><i class="ml-20 iconfont icon-pic_date"></i><span>{{item.actStatus}}</span></h6>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="load-complete" id="loadComplete">数据已经加载完成</div>
    <div class="ui-dialog" id="dialog">
      <div class="ui-loading">
        <i class="iconfont icon-loading"></i><p>数据加载中...</p>
      </div>
    </div>
  </div>
</template>

<script>
  import tabHeader from '../components/TabHeader'
  import '../common/less/index.less'
  import BScroll from '../../static/js/bScroll.js'

  export default {
    name: 'Index',
    data() {
      return {
        items: [], // 返回数据
        headerH: 0, // 头部高度
        contentH: 0, // 内容高度
        wh: 0,        // 屏幕高度
        pageIndex: 1,  // 页码
        pageSize: 6,  // 分页大小
        total: 0, // 
        oldPosY: 0,  // 上一次上拉的位置
        scrollOffset: 50,  // 滚动超过值才会加载数据
        toQuery: true,  // 是否要去查询 
        timer: null   // 定时器
      }
    },
    mounted () {
      this.$http.get(this.$url + '/DbCenter/bbsApp/getAppActivityList?pageIndex=1&pageSize=' + this.pageSize + '&projectId=8527c7ca-0a89-11e5-b693-000c29a11092&token=' + this.$token)
        .then(res => {
          this.items = res.data.data
          this.total = this.items.length
          this.$nextTick(() => {
            this.initScroll()
          })
        })
      this.headerH = this.$refs.head.getHeaderHeight()
      this.listWrapperH = this.$refs.listWrapper.offsetHeight
    },
    components: {
      tabHeader
    },
    methods: {
      initScroll () {
        var me = this
        me.scroll = new BScroll(me.$refs.listWrapper, {
          probeType: 3,
          click: true
        })

        me.scroll.on('touchend', function (pos) {
          if ((Math.abs(pos.y) + me.listWrapperH > me.listContentH * me.total + me.scrollOffset) && (pos.y - me.scrollOffset < me.oldPosY)) {
            me.reloadData()
          } 
          
          if (!me.toQuery && (Math.abs(pos.y) + me.listWrapperH > me.listContentH * me.total) && (pos.y - me.scrollOffset < me.oldPosY)) {
            document.getElementById('loadComplete').style.display = 'block'
          } else {
            document.getElementById('loadComplete').style.display = 'none'
          }
          
          me.oldPosY = pos.y
        })
      },
      reloadData () {
        var dialog = document.getElementById('dialog')
        clearTimeout(this.timer)
        if (this.toQuery) {
          dialog.style.visibility = 'visible'
          this.$http.get(this.$url + '/DbCenter/bbsApp/getAppActivityList?pageIndex=' + this.pageIndex + '&pageSize=' + this.pageSize + '&projectId=8527c7ca-0a89-11e5-b693-000c29a11092&token=' + this.$token)
          .then(res => {
            var len = res.data.data.length
            this.total += len
            if (len > 0) {
              var arr = res.data.data
              var html = ''
              for (var i = 0; i < arr.length; i++) {
                html += '<li class="list-item">' +
                          '<a href="detail.html">' +
                            '<div class="banner"><img src="../common/images/activity1.png" /></div>' +
                            '<h1 class="txt-ellipsis">' + arr[i].title + '</h1>' +
                            '<h6><i class="iconfont icon-pic_location"></i><span>深圳东部蔚蓝海岸</span><i class="ml-20 iconfont icon-pic_date"></i><span>未开始</span></h6>' +
                          '</a>' +
                        '</li>'
              }
              this.$refs.listContent.innerHTML = this.$refs.listContent.innerHTML + html
              this.timer = setTimeout(function () {
                dialog.style.visibility = 'hidden'
              }, 1000)
              this.scroll.refresh()
              if (this.pageSize > len) {
                // document.getElementById('loadComplete').style.display = 'block'
                this.toQuery = false
                return
              }
              this.pageIndex++
            } else {
              document.getElementById('loadComplete').style.display = 'block'
            }
          })
        }
        
      },
      getContentHeight () {
        return this.$refs.listContent.scrollHeight
      }
    },
    computed: {
      listContentH () {
        return this.$refs.listContent.scrollHeight / this.pageSize
      }
    }
  }

</script>
