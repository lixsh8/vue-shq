<template>
  <div>
    <div class="fixed-btn fixed-btn-comments">
      <div class="commentBtn" @click="showCommentBox()">写评论</div>
    </div>
  
    <div class="ui-dialogC ui-dialogCmt" ref="dialog">
      <div class="ui-dialogC-cnt">
        <div class="ui-dialogC-hd">评论</div>
        <div class="ui-dialogC-bd">
          <textarea id="cInput"></textarea>
        </div>
        <div class="ui-dialogC-ft ui-btn-group">
          <button type="button" data-role="button" @click="closeDialog('1')" class="select" id="dialogButton0">确认</button>
          <button type="button" data-role="button" @click="closeDialog()" id="dialogButton1">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {alert} from '../common/js/common.js'

export default {
  name: 'FixedBottomInput',
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    showCommentBox() {
      let $dialog = this.$refs.dialog
      $dialog.style.display = 'block'

      $dialog.addEventListener('touchmove', function(e) {
        e.stopPropagation()
        e.preventDefault()
      }, false)
    },
    closeDialog(n) {
      let text = this.$refs.dialog.querySelector('textarea').value
      console.log(this.$props.objectId)
      
      if (n === '1' && this.$props.type === 'comment') {
        this.$http({
          url: this.$url + '/DbCenter/bbsApp/addAppraisal?token=' + this.$token + '&objectId=' + this.$props.objectId + '&content=' + text,
          method: 'post'
        })
          .then(res => {
            if (res.data.code === '000') {
              alert('评论成功')
            }
          }, err => {
            alert(err)
          })
      }
      this.$refs.dialog.style.display = 'none'
    }
  },
  props: ['type', 'objectId']
}
</script>
<style lang="less" scoped>
.fixed-btn-comments {
  padding: .3rem .75rem;
  background: #fafafa;
  box-sizing: border-box;
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
</style>