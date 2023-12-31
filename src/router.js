import { createRouter, createWebHistory } from 'vue-router'
import PostForm from '@/components/PostForm.vue';
import UserPosts from '@/components/UserPosts.vue'
import PostDetails from '@/components/PostDetails.vue'
import UserChat from '@/components/UserChat.vue'

const routes = [
    {
        path: '/post-assignment',
        name: 'post-assignment',
        component: PostForm,
    },
    {
        path: '/my-assignments',
        name: 'my-assignments',
        component: UserPosts,
    },
    {
        path: '/assignment/:id',
        name: 'assignment-detail',
        component: PostDetails,
    },
    {
        path: '/chats',
        name: 'chats',
        component: UserChat,
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
