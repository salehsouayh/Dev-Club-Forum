import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../components/Home.vue';
import PostDetails from '../components/PostDetails.vue';
import PostCategory from '../components/PostCategory.vue';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Logout from '../components/Logout.vue';
import AdminPanel from '../components/AdminPanel.vue';
import EditPost from '../components/EditPost.vue';
import PrivateChat from '../components/PrivateChat.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/signup',
        component: Signup,
        name: 'signup'
    },
    {
        path: '/logout',
        component: Logout,
        name: 'logout'
    },
    {
        path: '/post/:slug',
        component: PostDetails,
        name: 'postDetails'
    },
    {
        path: '/post/edit/:slug',
        component: EditPost,
        name: 'editPost'
    },
    {
        path: '/posts/category/:slug',
        component: PostCategory,
        name: 'postCategory'
    },
    {
        path: '/admin',
        component: AdminPanel,
        name: 'admin'
    },
    {
        path: '/chat',
        component: PrivateChat,
        name: 'chat'
    },
];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
})

export default router;