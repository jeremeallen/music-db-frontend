/* ============
 * Application Actions
 * ============
 *
 * The actions available for the Application module.
 */
import * as types from './mutation-types';

const addAlert = ({ commit }, payload) => {
  commit(types.ADD_ALERT, payload);
};

const removeAlert = ({ commit }, payload) => {
  commit(types.REMOVE_ALERT, payload);
};

const toggleDrawer = ({ commit }) => {
  commit(types.TOGGLE_DRAWER);
};

const showDrawer = ({ commit }) => {
  commit(types.SHOW_DRAWER);
};

const hideDrawer = ({ commit }) => {
  commit(types.HIDE_DRAWER);
};

export default {
  addAlert,
  removeAlert,
  toggleDrawer,
  showDrawer,
  hideDrawer,
};
