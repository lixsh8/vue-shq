<template>
  <div>
    <div id="body" class="body">
        <!-- 内容 -->
        <section class="act-comments">
            <div class="comments-wrapper">
                <h1>评论（<span id="commentsNum">0</span>）</h1>
                <ul id="list">
                    <li class="comments" onclick="reply('id')">
                        <div class="comments-hd exce-flex-wrap">
                            <div class="user-avator"><img src="/Content/images/pro/pic_license@2x.png" /></div>
                            <div class="exce-flex-item txt-ellipsis">
                                <div style="width:100%">
                                    <div class="txt-ellipsis user-name"><span id="">宝宝</span><i>回复</i><span>baobao</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="comments-bd">上次参加，遇到现在的女友，很欢乐，很开心。上次参加，遇到现在的女友，很欢乐，很开心。</div>
                        <div class="time">1月18日 12:12</div>
                    </li>
                    <!--<li class="comments" onclick="reply()">
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
                    </li>
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
                    </li>
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
                    </li>
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
                    </li>
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
    </div>
    <div class="fixed-btn fixed-btn-comments">
        <div class="commentBtn" onclick="showCommentBox()">写评论</div>
    </div>

    <div class="ui-dialogC ui-dialogCmt" style="">
        <div class="ui-dialogC-cnt">
            <div class="ui-dialogC-hd">评论</div>
            <div class="ui-dialogC-bd">
                <textarea id="cInput"></textarea>
            </div>
            <div class="ui-dialogC-ft ui-btn-group">
                <button type="button" data-role="button" onclick="closeDialog()" class="select" id="dialogButton0">确认</button>
                <button type="button" data-role="button" onclick="closeDialog()" id="dialogButton1">取消</button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Commcents',
  data() {
    return {}
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

.fixed-btn-comments {
  background: #fafafa;
  padding: .3rem .75rem;
}

.commentBtn {
  height: 1.8rem;
  padding-left: .75rem;
  line-height: 1.8rem;
  background: #FFFFFF;
  border: 1px solid #C8C7CC;
  font-size: .7rem;
  color: #C8C7CC;
  border-radius: 5px;
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
</style>