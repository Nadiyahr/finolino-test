import { Good } from '@/vite-env'

export interface State {
  goods: Good[],
  sortedGoods: Good[]
    filters: {
      ordering: Order,
      bySize: string[],
      bySeason: string[],
      byPrice: string[]
    }
}

export type Order = 'Newest' | 'A-Z' | 'Z-A'
