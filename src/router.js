import { createRouter, createWebHistory } from 'vue-router'
import PostForm from '@/components/PostForm.vue';

const routes = [
    {
        path: '/post-assignment',
        component: PostForm,
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
