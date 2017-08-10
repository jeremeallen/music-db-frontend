import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';

import Axios from 'axios';

Axios.defaults.baseURL = process.env.API_LOCATION;
Axios.defaults.headers.common.accept = 'application/json';

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

import store from '@/store';
import VueRouterSync from 'vuex-router-sync';

import VueRouter from 'vue-router';
import routes from '@/routes';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
});

VueRouterSync.sync(store, router);
Vue.router = router;

import '@/assets/stylus/app.styl';

export default {
  router,
};

