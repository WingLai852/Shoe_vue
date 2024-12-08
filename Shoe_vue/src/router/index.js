import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';

// Definieer de routes
const routes = [
  { path: '/', redirect: '/login' }, // Redirect naar login
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];

// Maak een router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
