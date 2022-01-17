import Vue from 'vue'
import VueRouter from 'vue-router'
import quiz from '../views/Ukulele/Quiz'
import fingerPick from "../views/Ukulele/fingerPick";
import NotFound from "../views/NotFound";
import Tab from "../views/Ukulele/Tab";
import tabs_maker from "../components/Ukulele/tabs_maker";
import Diagrams from "../views/Ukulele/Diagrams"
import Gammes from "../views/Guitare/Gammes";
import Accueil from "../views/Ukulele/Accueil";
import chooseSpot from "../views/ChooseSpot";
import ukulele from "../views/Ukulele/ukulele";
import guitare from "../views/Guitare/guitare";
import AccueilGuit from "../views/Guitare/AccueilGuit";
import DiagramsGuit from "../views/Guitare/DiagramsGuit";
import accordMakerGuit from "../components/Guitare/accordMakerGuit";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: chooseSpot
  },
  {
    path: '/test',
    name: 'makesitgood',
    component: accordMakerGuit
  },
  {
    path: '/ukulele/',
    name: "Ukulele",
    component: ukulele,
    children: [
      {
        path: 'accueil',
        name: 'Accueil',
        component: Accueil
      },
      {
        path: 'quiz',
        name: 'quiz',
        component: quiz
      },
      {
        path: 'training',
        name: 'train',
        component: fingerPick
      },
      {
        path: "tabs",
        name: "TABS",
        component: Tab
      },
      {
        path: "tabmaker",
        name: "TM",
        component: tabs_maker
      },
      {
        path: "accords",
        name: "accords",
        props: true,
        component: Diagrams
      },
    ]
  },
  {
    path: '/Guitare/',
    name: 'Guitare',
    component: guitare,
    children: [
      {
        path: 'gammes',
        name: 'Gammes',
        component: Gammes
      },
      {
        path: 'accueil',
        name: 'AccueilGuit',
        component: AccueilGuit
      },
      {
        path: 'gammes',
        name: 'Gammes',
        component: Gammes
      },
      {
        path: 'accords',
        name: 'accordsGuit',
        props: true,
        component: DiagramsGuit
      }
    ]
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
