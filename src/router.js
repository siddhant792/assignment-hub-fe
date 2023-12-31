import { createRouter, createWebHistory } from 'vue-router'
import PostForm from '@/components/PostForm.vue';
import UserPosts from '@/components/UserPosts.vue'
import PostDetails from '@/components/PostDetails.vue'
import UserChat from '@/components/UserChat.vue'
import UserAuthentication from '@/components/UserAuthentication.vue'
import AssignmentFeed from '@/components/AssignmentFeed.vue'
import SendProposal from '@/components/SendProposal.vue'

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
    {
        path: '/auth',
        name: 'auth',
        component: UserAuthentication,
    },
    {
        path: '/home',
        name: 'home',
        component: AssignmentFeed,
    },
    {
        path: '/assignment/:id/add-proposal',
        name: 'add-proposal',
        component: SendProposal,
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
