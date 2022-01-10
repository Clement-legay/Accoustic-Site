import Vue from 'vue'
import VueRouter from 'vue-router'
import accueil from '../views/Accueil.vue'
import quiz from '../views/Quiz'
import fingerPick from "../views/fingerPick";
import NotFound from "../views/NotFound";
import Tab from "../views/Tab";
import tabs_maker from "../components/tabs_maker";
import Diagrams from "../views/Diagrams"
import Gammes from "../views/Gammes";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: accueil
  },
  {
    path: '/gammes',
    name: 'Gammes',
    component: Gammes
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: quiz
  },
  {
    path: '/training',
    name: 'train',
    component: fingerPick
  },
  {
    path: "/tabs",
    name: "TABS",
    component: Tab
  },
  {
    path: "/tabmaker",
    name: "TM",
    component: tabs_maker
  },
  {
    path: "/accords",
    name: "accords",
    props: true,
    component: Diagrams
  },

    // error 404

  {
    path: "/:catchAll(.*)",
    name: 'Not Found',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
