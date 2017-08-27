/* ============
 * Application Mutations
 * ============
 *
 * The mutations available for the application module.
 */

import {
  ADD_ALERT,
  REMOVE_ALERT,
} from './mutation-types';

export default {
  [ADD_ALERT](state, alert) {
    state.alerts.push(alert);
  },

  [REMOVE_ALERT](state, alert) {
    state.alerts = state
      .alerts
      .filter(item => item !== alert);
  },
};
