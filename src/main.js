// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <a class="nav-link"><router-link to="/">Lab Articles</router-link></a>
      </li>
    </ul>
  </div>
</nav>
  <router-view> </router-view>
  
  </div>
  `,
}).$mount('#app');

