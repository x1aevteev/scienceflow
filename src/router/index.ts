import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import ProfileView from "@/views/Profile/ProfileView.vue";
import TicketsView from "@/views/Tickets/TicketsView.vue";
import NewsPageView from "@/views/News/NewsPageView.vue";
import NewsItemView from "@/views/News/NewsItemView.vue";
import EventsView from "@/views/Events/EventsView.vue";
import EventsItemView from "@/views/Events/EventsItemView.vue";
import LectionsView from "@/views/Lections/LectionsView.vue";
import LectionsItemView from "@/views/Lections/LectionsItemView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/:parent/:slug',
    name: 'news-item',
    component: NewsItemView,
    props: true,
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView,
  },
  {
    path: '/:parent/:slug',
    name: 'events-item',
    component: EventsItemView,
    props: true,
  },
  {
    path: '/lections',
    name: 'lections',
    component: LectionsView
  },
  {
    path: '/:parent/:slug',
    name: 'lections-item',
    component: LectionsItemView,
    props: true,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
