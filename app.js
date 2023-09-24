const {
	createApp
} = Vue;
const {
	createRouter,
	createWebHistory,
	createWebHashHistory
} = VueRouter;

const Home = {
	template: '<h2>Home</h2> '
};
const About = {
	template: '<h2>About</h2>'
};
const table = {
	template: '<h2>table</h2>'
};

const routes = [{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/table',
		component: table
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

const app = createApp({
	data() {
		return {
		
		};
	},
	methods: {
		
	}
});

app.use(router);
app.mount('#app');