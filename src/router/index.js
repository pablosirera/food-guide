import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { name: 'Home', path: '/', component: () => import('@/pages/HomePage.vue') },
  {
    name: 'AuthPage',
    path: '/auth',
    // redirect: '/auth/login',
    component: () => import('@/pages/auth/AuthPage.vue'),
    children: [
      {
        path: 'register',
        component: () => import('@/pages/auth/RegisterPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
