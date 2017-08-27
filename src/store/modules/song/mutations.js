/* ============
 * Song Mutations
 * ============
 *
 * The mutations available for the song module.
 */

import {
  ALL,
} from './mutation-types';

export default {
  /**
   * Mutation to update the store with the fetched songs.
   *
   * @param {Object} state      The current state of the store.
   * @param {Array}  songs      The fetched songs.
   * @param {Object} pagination The fetched pagination.
   */
  [ALL](state, { songs, pagination }) {
    state.all = songs;
    state.pagination = pagination;
  },
};
