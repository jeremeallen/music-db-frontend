/* ============
 * Album Mutations
 * ============
 *
 * The mutations available for the album module.
 */

import {
  ALL,
} from './mutation-types';

export default {
  /**
   * Mutation to update the store with the fetched albums.
   *
   * @param {Object} state      The current state of the store.
   * @param {Array}  albums     The fetched albums.
   * @param {Object} pagination The fetched pagination.
   */
  [ALL](state, { albums, pagination }) {
    state.all = albums;
    state.pagination = pagination;
  },
};
