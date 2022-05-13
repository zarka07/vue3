import { createWebHistory, createRouter } from 'vue-router';

import Main from '@/views/Main.vue';

//import UserItem from '@/components/User.vue';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main,
	},
	{
		path: '/project1',
		name: 'Project1',
		component: () => import (/*webpackChunkName: "project1" */ '@/views/Project1.vue'),
	},
	{
		path: '/project2',
		name: 'Project2',
		component: () => import (/*webpackChunkName: "project2" */ '@/views/Project2.vue'),
	},
	{
		path: '/project3',
		name: 'Project3',
		component: () => import (/*webpackChunkName: "project3" */ '@/views/Project3.vue'),
	},
	{
		path: '/project3/main',
		name: 'main',
		component: () => import (/*webpackChunkName: "main" */ '@/components/Project3/Main.vue'),
	},
	{
		path: '/project3/form',
		name: 'Form',
		component: () => import (/*webpackChunkName: "form" */ '@/components/Project3/Form.vue'),
	},
	{
		path: '/project3/product/:id',
		name: 'ProductId',
		props: true,
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "Product.vue", webpackMode: "lazy" */'./components/Project3/Product.vue')
	},
	{
		path: '/project4',
		name: 'Project4',
		component: () => import (/*webpackChunkName: "project4" */ '@/views/Project4.vue'),
	},
	{
		path: '/project4/p4main',
		name: 'p4main',
		component: () => import (/*webpackChunkName: "P4Main" */ '@/components/Project4/Main.vue'),
	},
	{
		path: '/project4/p4main/data-processing',
		name: 'p4main-data-processing',
		component: () => import (/*webpackChunkName: "DataProcessing" */ '@/components/Project4/DataProcessing.vue'),
	},
	{
		path: '/project4/p4main/get-data',
		name: 'p4main-get-data',
		component: () => import (/*webpackChunkName: "GetData" */ '@/components/Project4/GetData.vue'),
	},
	{
		path: '/auth',
		name: 'Authorization',
		component: () => import (/*webpackChunkName: "auth" */ '@/views/Authorization.vue'),
	},
	{
		path: '/user',
		name: 'User',
		component: () => import (/*webpackChunkName: "User" */ '@/views/User.vue'),
	},
	{
		path: '/post/:id',
		name: 'PostId',
		props: true,
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "Post.vue", webpackMode: "lazy" */'./components/Project2/Post.vue')
	},
    
	
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;