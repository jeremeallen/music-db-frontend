import Vue from 'vue';

import {
  CHECK,
  LOGIN,
  LOGOUT,
} from './mutation-types';

export default {
  [CHECK](state) {
    const accessToken = localStorage.getItem('access_token');
    state.authenticated = !!accessToken;

    if (state.authenticated) {
      Vue.$http.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }
  },

  [LOGIN](state, token) {
    state.authenticated = true;

    localStorage.setItem('access_token', token);

    Vue.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  [LOGOUT](state) {
    state.authenticated = false;

    localStorage.removeItem('access_token');

    Vue.$http.defaults.headers.common.Authorization = '';
  },
};
