import { createRouter, createWebHistory } from 'vue-router';
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/Error404.vue')
        },
        MainRoutes,
        ...AuthRoutes
    ]
});
