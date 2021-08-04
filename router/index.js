import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'


const routes = [
    {
        path: '/',
        name: 'post.index',
        component: () => import('@/views/post/Index.vue')
    },
    {
        path: '/create',
        name: 'post.create',
        component: () => import('@/views/post/Create.vue')
    },
    {
        path: '/edit',
        name: 'post.edit',
        component: () => import('@/views/post/Edit.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  NProgress.set(0.5)
  next()
})
router.afterEach(() => {
  setTimeout(() => NProgress.done(), 20)
})

export default router