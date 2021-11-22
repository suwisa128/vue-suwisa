import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import main from './pages/main.vue';
import Detail from './pages/detail.vue';

const routes = [
  { path: '/', name: 'home', component: main },
  { path: '/device/:id', name: 'device', component: Detail },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
