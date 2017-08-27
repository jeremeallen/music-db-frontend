/* ============
 * Application Mutations
 * ============
 *
 * The mutations available for the application module.
 */

import {
  ADD_ALERT,
  REMOVE_ALERT,
  TOGGLE_DRAWER,
  SHOW_DRAWER,
  HIDE_DRAWER,
} from './mutation-types';

export default {
  [TOGGLE_DRAWER](state) {
    state.drawerActive = !state.drawerActive;
  },

  [SHOW_DRAWER](state) {
    state.drawerActive = true;
  },

  [HIDE_DRAWER](state) {
    state.drawerActive = false;
  },

  [ADD_ALERT](state, alert) {
    state.alerts.push(alert);
  },

  [REMOVE_ALERT](state, alert) {
    state.alerts = state
      .alerts
      .filter(item => item !== alert);
  },
};
