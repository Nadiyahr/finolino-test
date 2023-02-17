import { Order, State } from './types';
import { createStore } from 'vuex'
// import axios from 'axios'

import data from '@/api/finolino_dresses.json'

export default createStore<State>({
  state: {
    goods: data.sort((prev, next) => Date.parse(next.update_date) - Date.parse(prev.update_date)),
    filters: {
      ordering: 'Newest',
      bySize: [],
      bySeason: [],
      byPrice: []
    }
  },
  getters: {
    getOrderFilter: (state) => state.filters.ordering,
    // getfilteredGoods: (state) => state.goods,
  },
  actions: {
    SET_ORDERING: function ({commit}, payload) {
     commit('SET_ORDERING', payload)
     commit('SET_GOODS', payload)
    },
  },
  mutations: {
    SET_ORDERING(state, payload) {
      state.filters.ordering = payload
    },
    SET_GOODS(state, payload: Order) {
      const sortBy = {
        'Newest': data.sort((prev, next) => Date.parse(next.update_date) - Date.parse(prev.update_date)),
        'A-Z': data.sort((prev, next) => prev.title.localeCompare(next.title)),
        'Z-A': data.sort((prev, next) => next.title.localeCompare(prev.title))
      }

      state.goods = sortBy[payload]
    }
  }
})
