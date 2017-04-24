const JIA = 'JIA'
const JIAN = 'JIAN'
const GET_DATA = 'GET_DATA'

export default{
  [GET_DATA] (state, payload) {
    state.count = payload.res.count
  },

  [JIA] (state, payload) {
    state.count += payload.num
    state.foods.push('food')
  },

  [JIAN] (state, payload) {
    state.count -= payload
  }
}
