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

export default {
  addAlert,
  removeAlert,
};
