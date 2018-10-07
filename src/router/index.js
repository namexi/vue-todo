import Vue from 'vue'
import Router from 'vue-router'
import TodoApp from '../component/todoApp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: TodoApp }
  ]
})
