import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: { name: 'Home' } },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router