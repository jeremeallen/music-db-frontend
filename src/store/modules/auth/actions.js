import Vue from 'vue';
import * as types from './mutation-types';

export const check = ({ commit }) => {
  commit(types.CHECK);
};

export const login = ({ commit }) => {
  commit(types.LOGIN, 'myRandomAccessToken');
  Vue.router.push({
    name: 'artists.index',
  });
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
  Vue.router.push({
    name: 'login.index',
  });
};

export default {
  check,
  login,
  logout,
};
