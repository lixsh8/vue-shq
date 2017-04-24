import axios from 'axios'

export default{
  getData ({commit, state}) {
    axios.get('/static/data/data.json').then(res => {
      // var rs = res.data.data
      commit('GET_DATA', {res: res.data.data})
    })
  },
  jia ({commit, state}) {
    commit('JIA', {num: 1})
  },
  jian ({commit, state}, num) {
    commit('JIAN', num)
  }
}
