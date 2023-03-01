import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import About from '../views/pages/About.vue'
import Contact from '../views/pages/Contact.vue'
import Service from '../views/pages/Service.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/about/',
    name: 'About',
    component: About
  },
  {
    path: '/contact/',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/service/',
    name: 'Service',
    component: Service
  },


]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
