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
    ordering: 'Newest',
    bySize: [],
    bySeason: [],
    byPrice: []
  },
  getters: {
    getOrderFilter: (state) => state.ordering,
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
      state.ordering = payload
    },
    SORT_GOODS(state, payload) {
      const clone = [...payload]
      const order = state.ordering

      const sortBy = {
        'Newest': () => clone.sort((prev, next) => Date.parse(next.update_date) - Date.parse(prev.update_date)),
        'A-Z': () => clone.sort((prev, next) => prev.title.localeCompare(next.title)),
        'Z-A': () => clone.sort((prev, next) => next.title.localeCompare(prev.title))
      }

      state.sortedGoods = sortBy[order]()
    },
    SET_FILTER_GOODS(state, payload: {type: Filters, value: string | number[]}) {
      if (typeof payload.value !== 'string') {
        state[payload.type] = payload.value as (string[] & number[])
        return
      }

      let arr = [...state[payload.type]]

      if (arr.includes(payload.value as string)) {
        arr = arr.filter((el) => el !== payload.value);
      } else {
        arr.push(payload.value as string);
      }

      state[payload.type] = arr as (string[] & number[])
    },
    SET_APPLAY(state) {
      const priceFilter = state.byPrice.length ? [state.byPrice.join('-')] : []
      state.filterTags = { bySize: state.bySize, bySeason: state.bySeason, byPrice: priceFilter }

      let goods = [...state.goods]

      const bySize = state.filterTags.bySize
      const bySeason = state.filterTags.bySeason
      const byPrice = state.byPrice

      const filtred = goods.filter(({sizes, seasons}) => {
        const filterBy = (arr: string[], sizeArr: string[]) => arr.some((el) => sizeArr.indexOf(el) >= 0)

        if (bySize.length && bySeason.length) {
          return filterBy(sizes, bySize) && filterBy(seasons, bySeason)
        }

        if (bySeason.length && !bySize.length) {
          return filterBy(seasons, bySeason)
        }

        if (bySize.length && !bySeason.length) {
          return filterBy(sizes, bySize)
        }

        return true
      })

      const fitredByPrice = filtred.filter(({ price }) => Number(price) >= byPrice[0] && Number(price) <= byPrice[1])

      state.sortedGoods = fitredByPrice.length ? fitredByPrice : filtred
    }
  }
})
