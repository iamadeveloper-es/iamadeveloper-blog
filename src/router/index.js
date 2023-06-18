import Vue from 'vue'
import VueRouter from 'vue-router'
import AppViewCategory from '../components/templates/app-view-category.vue'
import AppViewHome from '../components/templates/app-view-home.vue'
import AppViewSinglePost from '../components/templates/app-view-single-post.vue'
import Test from '../components/templates/test-vue-3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppViewHome
  },
  {
    path: '/post/:slug',
    name: 'SinglePost',
    component: AppViewSinglePost,
    props: true
  },
  {
    path: '/posts/category/:slug',
    name: 'Category',
    component: AppViewCategory,
    props: true
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
