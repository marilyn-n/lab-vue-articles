import Vue from 'vue';
import Router from 'vue-router';
import Articles from './components/Articles.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Articles',
      component: Articles,
    },
  ],
});
