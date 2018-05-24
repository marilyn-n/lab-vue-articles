import Vue from 'vue';
import Router from 'vue-router';
import Articles from './components/Articles.vue';
import Dashboard from './components/Dashboard.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Articles',
      component: Articles,
    },
    {
      path: '/dashboard-new',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
});
