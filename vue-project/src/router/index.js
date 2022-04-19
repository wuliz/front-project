import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/TheLogin'
import DicList from "@/views/DicList";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/dic',
      name: 'dic',
      component: DicList
    },
  ]
})
