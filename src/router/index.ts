import Catalog from '@/views/Catalog.vue';
import Home from '@/views/Home.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      // children: [
      //   {
      //     path: 'catalog',
      //     name: 'Catalog',
      //     component: Catalog,
      //   }
      // ]
    },
    {
      path: '/woman/clothing/dresses',
      name: 'Catalog',
      component: Catalog,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { x: 0, y: 0 };
  },
})

export default router
