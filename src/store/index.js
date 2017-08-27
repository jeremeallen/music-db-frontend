import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import application from './modules/application';
import auth from './modules/auth';
import artist from './modules/artist';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    application,
    auth,
    artist,
  },
  strict: debug,
  plugins: debug ? [createLogger] : [],

});
