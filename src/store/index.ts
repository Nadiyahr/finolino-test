import { createStore } from 'vuex'
// import axios from 'axios'

import data from '@/api/finolino_dresses.json'

export default createStore({
  state: {
    goods: data,
    filters: {
      byNewest: false,
      byAZ: false,
      byZA: false,
      bySize: [],
      bySeason: [],
      byPrice: []
    }
  },
  getters: {
    getFiltredGoods: (state) => {
      return {
        
      }
    },
  },
  actions: {
    GET_GOODS: async function ({commit}) {
     
    },
  },
  mutations: {
    SET_LOADING(state) {
    },
  }
})
