import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';

import Axios from 'axios';

Axios.defaults.baseURL = process.env.API_LOCATION;
Axios.defaults.headers.common.Accept = 'application/json';

Vue.$http = Axios;

Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  },
});

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = {
  broadcaster: 'pusher',
  key: process.env.PUSHER_KEY,
  cluster: process.env.PUSHER_CLUSTER,
  authEndpoint: process.env.BROADCAST_AUTH_ENDPOINT,
};

Vue.$echo = echo;
Object.defineProperty(Vue.prototype, '$echo', {
  get() {
    return Echo;
  },
});

import VueRouterSync from 'vuex-router-sync';

import VueRouter from 'vue-router';
import routes from '@/routes';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
});

import store from '@/store';

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth) && !store.state.auth.authenticated) {
    next({
      name: 'login.index',
    });
  } else if (to.matched.some(m => m.meta.guest) && store.state.auth.authenticated) {
    next({
      name: 'artists.index',
    });
  } else {
    next();
  }
});


VueRouterSync.sync(store, router);

store.dispatch('auth/check');

Vue.router = router;

import MusicDbComponents from 'music-db-components';

Vue.use(MusicDbComponents);

import '@/assets/stylus/app.styl';

export default {
  router,
};

