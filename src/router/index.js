import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/pa_home')
	},
	{
		path: '/parametros',
		name: 'parametros',
		component: () => import('@/pa_parametros')
	},
  
]

const router = new VueRouter({
  routes
})

export default router
