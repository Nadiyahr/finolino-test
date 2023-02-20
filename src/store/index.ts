import { Good } from '@/vite-env';
import { Filters, Order, State } from './types';
import { createStore } from 'vuex'
// import axios from 'axios'

import data from '@/api/finolino_dresses.json'

export default createStore<State>({
  state: {
    goods: data,
    sortedGoods: [],
    filterTags: {
      bySize: [],
      bySeason: [],
      byPrice: [],
    },
    filters: {
      ordering: 'Newest',
      bySize: [],
      bySeason: [],
      byPrice: []
    }
  },
  getters: {
    getOrderFilter: (state) => state.filters.ordering,
    getFiters: (state) => ({ sizes: state.filters.bySize, seasons: state.filters.bySeason, price: state.filters.byPrice })
  },
  actions: {
    SET_ORDERING: function ({commit}, payload) {
     commit('SET_ORDERING', payload)
     commit('SORT_GOODS')
    },

    APPLY__FILTERS: function ({commit}) {
      commit('SET_APPLAY')
      commit('SORT_GOODS', this.state.sortedGoods)
    }
  },
  mutations: {
    SET_ORDERING(state, payload) {
      state.filters.ordering = payload
    },
    SORT_GOODS(state, payload = state.sortedGoods) {
      const clone = [...payload]
      const order = state.filters.ordering
      const sortBy = {
        'Newest': () => clone.sort((prev, next) => Date.parse(next.update_date) - Date.parse(prev.update_date)),
        'A-Z': () => clone.sort((prev, next) => prev.title.localeCompare(next.title)),
        'Z-A': () => clone.sort((prev, next) => next.title.localeCompare(prev.title))
      }
      
      state.sortedGoods = sortBy[order]()
    },
    FILTER_GOODS(state, payload: {type: Filters, value: string}) {
      let arr = [...state.filters[payload.type]]
      if (arr.includes(payload.value)) {
        arr = arr.filter((el) => el !== payload.value);
      } else {
        arr.push(payload.value);
      }

      state.filters[payload.type] = arr
    },
    SET_APPLAY(state) {
      state.filterTags = { bySize: state.filters.bySize, bySeason: state.filters.bySeason, byPrice: state.filters.byPrice }
      let goods = [...state.goods]

      const bySize = state.filterTags.bySize
      const bySeason = state.filterTags.bySeason

      const filtred = goods.filter(({sizes, seasons}) => {
        if (bySize.length && bySeason.length) {
          return sizes.some((el) => bySize.indexOf(el) >= 0) && seasons.some((el) => bySeason.indexOf(el) >= 0)
        }

        if (bySeason.length && !bySize.length) {
          return seasons.some((el) => bySeason.indexOf(el) >= 0)
        }

        if (bySize.length && !bySeason.length) {
          return sizes.some((el) => bySize.indexOf(el) >= 0)
        }

        return true
      })

      state.sortedGoods = filtred
    }
  }
})
