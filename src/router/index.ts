import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from "@/views/ProfileView.vue";
import TicketsView from "@/views/TicketsView.vue";
import NewsPageView from "@/views/NewsPageView.vue";
import NewsItemView from "@/views/NewsItemView.vue";
import EventsView from "@/views/EventsView.vue";
import EventsItemView from "@/views/EventsItemView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: TicketsView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPageView
  },
  {
    path: '/news/:slug',
    name: 'news-item',
    component: NewsItemView
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView
  },
  {
    path: '/events/:slug',
    name: 'events-item',
    component: EventsItemView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
