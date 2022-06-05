import { createWebHistory, createRouter } from 'vue-router';
import Main from '@/views/Main.vue';
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
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
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
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
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
		meta: { layout: 'main' },
		props: true,
		component: () => import(/* webpackChunkName: "Project5.vue", webpackMode: "lazy" */'@/views/Project5.vue'),
		children: [
			
			{
				path: '',
				name: 'Home',
				meta: { layout: 'main' },
				component: () => import(/* webpackChunkName: "Home.vue", webpackMode: "lazy" */'@/components/Project5/Views/Home.vue')
			},
			{
				path: '/login',
				name: 'Login',
				meta: { layout: 'empty' },
				component: () => import(/* webpackChunkName: "Login.vue", webpackMode: "lazy" */'@/components/Project5/Views/Login.vue')
			},
			{
				path: '/categories',
				name: 'Categories',
				meta: { layout: 'main' },
				component: () => import(/* webpackChunkName: "Categories.vue", webpackMode: "lazy" */'@/components/Project5/Views/Categories.vue')
			},
			{
				path: '/detail-record',
				name: 'Detail-record',
				meta: { layout: 'main' },
				component: () => import(/* webpackChunkName: "Detail-record.vue", webpackMode: "lazy" */'@/components/Project5/Views/Detail-record.vue')
			},
			{
				path: '/history',
				name: 'History',
				meta: { layout: 'main' },
				component: () => import(/* webpackChunkName: "History.vue", webpackMode: "lazy" */'@/components/Project5/Views/History.vue')
			},
			{
				path: '/planning',
				name: 'Planning',
				meta: { layout: 'main' },
				component: () => import(/* webpackChunkName: "Planning.vue", webpackMode: "lazy" */'@/components/Project5/Views/Planning.vue')
			},
			{
				path: '/profile',
				name: 'Profile',
				meta: { layout: 'main' },
				component: () => import(/* webpackChunkName: "Profile.vue", webpackMode: "lazy" */'@/components/Project5/Views/Profile.vue')
			},
			{
				path: '/record',
				name: 'Record',
				meta: { layout: 'main' },
				component: () => import(/* webpackChunkName: "Record.vue", webpackMode: "lazy" */'@/components/Project5/Views/Record.vue')
			},
			{
				path: '/register',
				name: 'Register',
				meta: { layout: 'empty' },
				component: () => import(/* webpackChunkName: "Register.vue", webpackMode: "lazy" */'@/components/Project5/Views/Register.vue')
			},
			{
				path: '/profile',
				name: 'Profile',
				meta: { layout: 'main' },
				component: () => import(/* webpackChunkName: "Register.vue", webpackMode: "lazy" */'@/components/Project5/Views/Profile.vue')
				//   components: {
				// 	default: UserProfile,
				// 	helper: UserProfilePreview,
				//   },
			},
		],
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



];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
// router.beforeEach((to, from, next) => {
// 	if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
// 	else next()
//   })
export default router;