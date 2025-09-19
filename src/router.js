import { createWebHashHistory, createRouter } from 'vue-router';
import Main from '@/views/Main.vue';
import { CRMstore } from './stores/CRMstore';
const isAuthForProject6 = JSON.parse(localStorage.getItem("auth"))
const ifNotAuthenticated = (to, from, next) => {
	if (!isAuthForProject6) {
		next()
		return
	}
	next('/todo')
}

const ifAuthenticated = (to, from, next) => {
	if (isAuthForProject6) {
		next()
		return
	}
	next({ name: 'LoginView' })
}


const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main,
	},
	{
		path: '/project1',
		name: 'Project1',
		component: () => import(/*webpackChunkName: "project1" */ '@/views/Project1.vue'),
	},
	{
		path: '/project2',
		name: 'Project2',
		component: () => import(/*webpackChunkName: "project2" */ '@/views/Project2.vue'),
	},
	{
		path: '/project2/post/:id',
		name: 'PostId',
		props: true,
		component: () => import(/* webpackChunkName: "Post.vue", webpackMode: "lazy" */'./components/Project2/Post.vue')
	},
	{
		path: '/project3',
		name: 'Project3',
		component: () => import(/*webpackChunkName: "project3" */ '@/views/Project3.vue'),
	},
	{
		path: '/project3/main',
		name: 'main',
		component: () => import(/*webpackChunkName: "main" */ '@/components/Project3/Main.vue'),
	},
	{
		path: '/project3/form',
		name: 'Form',
		component: () => import(/*webpackChunkName: "form" */ '@/components/Project3/Form.vue'),
	},
	{
		path: '/project3/product/:id',
		name: 'ProductId',
		props: true,
		component: () => import(/* webpackChunkName: "Product.vue", webpackMode: "lazy" */'./components/Project3/Product.vue')
	},
	{
		path: '/project4',
		name: 'Project4',
		component: () => import(/*webpackChunkName: "project4" */ '@/views/Project4.vue'),
	},
	{
		path: '/project4/main',
		name: 'p4main',
		component: () => import(/*webpackChunkName: "P4Main" */ '@/components/Project4/Main.vue'),
	},
	{
		path: '/project4/data-processing',
		name: 'p4main-data-processing',
		component: () => import(/*webpackChunkName: "DataProcessing" */ '@/components/Project4/DataProcessing.vue'),
	},
	{
		path: '/project4/get-data',
		name: 'p4main-get-data',
		component: () => import(/*webpackChunkName: "GetData" */ '@/components/Project4/GetData.vue'),
	},
	{
		path: '/project5',
		name: 'Project5',
		meta: { layout: 'main', auth: false },
		props: true,
		component: () => import(/* webpackChunkName: "Project5.vue", webpackMode: "lazy" */'@/views/Project5.vue'),
		children: [

			{
				path: '',
				name: 'Home',
				meta: { layout: 'main', auth: false },
				//beforeEnter: ifAuthenticated,
				component: () => import(/* webpackChunkName: "Home.vue", webpackMode: "lazy" */'@/components/Project5/Views/Home.vue')
			},
			{
				path: '/login',
				name: 'Login',
				meta: { layout: 'empty', auth: false },
				//beforeEnter: ifNotAuthenticated,
				component: () => import(/* webpackChunkName: "Login.vue", webpackMode: "lazy" */'@/components/Project5/Views/Login.vue')
			},
			{
				path: '/categories',
				name: 'Categories',
				meta: { layout: 'main', auth: true },
				//beforeEnter: ifAuthenticated,
				component: () => import(/* webpackChunkName: "Categories.vue", webpackMode: "lazy" */'@/components/Project5/Views/Categories.vue')
			},
			{
				path: '/detail-record',
				name: 'Detail-record',
				meta: { layout: 'main', auth: true },
				//beforeEnter: ifAuthenticated,
				component: () => import(/* webpackChunkName: "Detail-record.vue", webpackMode: "lazy" */'@/components/Project5/Views/Detail-record.vue')
			},
			{
				path: '/history',
				name: 'History',
				meta: { layout: 'main', auth: true },
				//beforeEnter: ifAuthenticated,
				component: () => import(/* webpackChunkName: "History.vue", webpackMode: "lazy" */'@/components/Project5/Views/History.vue')
			},
			{
				path: '/planning',
				name: 'Planning',
				meta: { layout: 'main', auth: true },
				//beforeEnter: ifAuthenticated,
				component: () => import(/* webpackChunkName: "Planning.vue", webpackMode: "lazy" */'@/components/Project5/Views/Planning.vue')
			},
			{
				path: '/profile',
				name: 'Profile',
				meta: { layout: 'main', auth: true },
				//beforeEnter: ifAuthenticated,
				component: () => import(/* webpackChunkName: "Profile.vue", webpackMode: "lazy" */'@/components/Project5/Views/Profile.vue')
			},
			{
				path: '/record',
				name: 'Record',
				meta: { layout: 'main', auth: true },
				//beforeEnter: ifAuthenticated,
				component: () => import(/* webpackChunkName: "Record.vue", webpackMode: "lazy" */'@/components/Project5/Views/Record.vue')
			},
			{
				path: '/register',
				name: 'Register',
				meta: { layout: 'empty', auth: false },
				//beforeEnter:ifNotAuthenticated,
				component: () => import(/* webpackChunkName: "Register.vue", webpackMode: "lazy" */'@/components/Project5/Views/Register.vue')
			},
		],
	},
	{
		path: '/project6',
		name: 'Project6',
		component: () => import(/* webpackChunkName: "Project6.vue", webpackMode: "lazy" */'@/views/Project6.vue'),
		children: [
			{
				path: '',
				name: 'LoginView',
				component: () => import(/* webpackChunkName: "LoginView.vue", webpackMode: "lazy" */'@/components/Project6/views/LoginView.vue'),
				beforeEnter: ifNotAuthenticated,
			},
			{
				path: '/todo',
				name: 'ToDoView',
				component: () => import(/* webpackChunkName: "ToDoView.vue", webpackMode: "lazy" */'@/components/Project6/views/ToDoView.vue'),
				beforeEnter: ifAuthenticated,
			},
		]
	},
	{
		path: '/project7',
		name: 'Project7',
		component: () => import(/* webpackChunkName: "Project7.vue", webpackMode: "lazy" */'@/views/Project7.vue'),
		children: [
			{
				path: '',
				name: 'HomeView',
				component: () => import(/* webpackChunkName: "HomeView.vue", webpackMode: "lazy" */'@/components/Project7/views/HomeView.vue'),
			},
			{
				path: '/about',
				name: 'AboutView',
				component: () => import(/* webpackChunkName: "AboutView.vue", webpackMode: "lazy" */'@/components/Project7/views/AboutView.vue'),
			},
		]
	},
	{
		path: '/project9',
		name: 'Project9',
		component: () => import(/* webpackChunkName: "Project9.vue", webpackMode: "lazy" */'@/views/Project9.vue'),
		
	},
	{
		path: '/project10',
		name: 'Project-10',
		component: () => import(/* webpackChunkName: "Project-10.vue", webpackMode: "lazy" */'@/views/Project-10.vue'),
		
	},
	{
		path: '/auth',
		name: 'Authorization',
		component: () => import(/*webpackChunkName: "auth" */ '@/views/Authorization.vue'),
	},
	{
		path: '/user',
		name: 'User',
		component: () => import(/*webpackChunkName: "User" */ '@/views/User.vue'),
	},
	{
		path: '/:catchAll(.*)*',
		name: "PageNotFound",
		component: () => import(/* webpackChunkName: "PageNotFound.vue", webpackMode: "lazy" */'@/components/PageNotFound.vue'),
	},
]
const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const crmStore = CRMstore()
	const requireAuth = to.matched.some(record => record.meta.auth)
	//console.log(requireAuth + ' ' + crmStore.userUid)
	if (requireAuth && !crmStore.userUid) {
		next({ name: 'Login' })
	} else {
		next()
	}
})

export default router;