import { Order, State } from './types';
import { createStore } from 'vuex'
// import axios from 'axios'

import data from '@/api/finolino_dresses.json'

export default createStore<State>({
  state: {
    goods: data,
    sortedGoods: [],
    filters: {
      ordering: 'Newest',
      bySize: [],
      bySeason: [],
      byPrice: []
    }
  },
  getters: {
    getOrderFilter: (state) => state.filters.ordering,
  },
  actions: {
    SET_ORDERING: function ({commit}, payload) {
     commit('SET_ORDERING', payload)
     commit('SORT_GOODS', payload)
    },
  },
  mutations: {
    SET_ORDERING(state, payload) {
      state.filters.ordering = payload
    },
    SORT_GOODS(state, payload: Order) {
      const clone = [...state.goods]
      const sortBy = {
        'Newest': () => clone.sort((prev, next) => Date.parse(next.update_date) - Date.parse(prev.update_date)),
        'A-Z': () => clone.sort((prev, next) => prev.title.localeCompare(next.title)),
        'Z-A': () => clone.sort((prev, next) => next.title.localeCompare(prev.title))
      }
      
      state.sortedGoods = sortBy[payload]()
    }
  }
})
