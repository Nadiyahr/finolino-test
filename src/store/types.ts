import { Good } from '@/vite-env'

export interface State {
  sortedGoods: Good[],
  filterTags: FilterTags,
  ordering: Order,
  bySize: string[],
  bySeason: string[],
  byPrice: number[]
}

export type Order = 'Newest' | 'A-Z' | 'Z-A'
export type Filters = 'bySize' | 'bySeason' | 'byPrice'
export type FilterTags = {
  bySize: string[];
  bySeason: string[];
  byPrice: string[];
}
