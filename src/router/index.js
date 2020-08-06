import Vue from 'vue'
import Router from 'vue-router'

import accountShow from "../pages/accountShow"
import addAccount from "../pages/addAccount"

Vue.use(Router)

export default new Router({
		routes: [
			{path: '/', redirect: '/accountShow'},
			{path: '/accountShow', component: accountShow},
			{path: '/addaccount', component: addAccount},
		]
	}
)
