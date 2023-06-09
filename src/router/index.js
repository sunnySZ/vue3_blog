import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '../views/Details.vue'
import Create from '../views/Create.vue'
import Tag from '../views/Tag.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/details/:id',
      name: 'Details',
      component:Details,
      props:true
    },
    {
      path: '/create',
      name: 'Create',
      component:Create,
    },
    {
      path: '/tags/:tag',
      name: 'Tag',
      component:Tag,
    }
  ]
})

export default router
