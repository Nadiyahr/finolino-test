import { Good } from '@/vite-env'
import { type } from 'os'

export interface State {
  goods: Good[],
  sortedGoods: Good[],
  filterTags: filterTags,
    filters: {
      ordering: Order,
      bySize: string[],
      bySeason: string[],
      byPrice: string[]
    }
}

export type Order = 'Newest' | 'A-Z' | 'Z-A'
export type Filters = 'bySize' | 'bySeason' | 'byPrice'
export type filterTags = {
  bySize: string[];
  bySeason: string[];
  byPrice: string[];
}
