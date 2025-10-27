import { createRouter, createWebHistory } from 'vue-router'

const App = () => import('../App.vue')
const Home = () => import('../views/Home.vue')
const stepCont = () => import('../components/stepCont.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: 'onepiece',
          name: 'onepiece',
          component: stepCont
        },
        {
          path: 'naruto',
          name: 'naruto',
          component: stepCont
        },
        {
          path: 'attacktitan',
          name: 'attacktitan',
          component: stepCont
        },
        {
          path: 'jjk',
          name: 'jjk',
          component: stepCont
        },
        {
          path: 'anime/:animeName',
          name: 'parasyte',
          component: stepCont,
          props :true
        }
      ]
    }
  ]}
)

export default router