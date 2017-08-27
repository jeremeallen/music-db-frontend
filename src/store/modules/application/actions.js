/* ============
 * Application Actions
 * ============
 *
 * The actions available for the Application module.
 */
import * as types from './mutation-types';

const toggleDrawer = ({ commit }) => {
  commit(types.TOGGLE_DRAWER);
};

const showDrawer = ({ commit }) => {
  commit(types.SHOW_DRAWER);
};

const hideDrawer = ({ commit }) => {
  commit(types.HIDE_DRAWER);
};

const addAlert = ({ commit }, payload) => {
  commit(types.ADD_ALERT, payload);
};

const removeAlert = ({ commit }, payload) => {
  commit(types.REMOVE_ALERT, payload);
};

export default {
  toggleDrawer,
  showDrawer,
  hideDrawer,
  addAlert,
  removeAlert,
};
