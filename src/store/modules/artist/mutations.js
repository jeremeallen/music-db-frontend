/* ============
 * Artist Mutations
 * ============
 *
 * The mutations available for the artist module.
 */

import {
  ALL,
  CREATED,
  UPDATED,
} from './mutation-types';

export default {
  /**
   * Mutation to update the store with the fetched artists.
   *
   * @param {Object} state      The current state of the store.
   * @param {Array}  artists    The fetched artists.
   * @param {Object} pagination The fetched pagination.
   */
  [ALL](state, { artists, pagination }) {
    state.all = artists;
    state.pagination = pagination;
  },

  [CREATED](state, artist) {
    const {
      totalCount,
      limit,
    } = state.pagination;

    state.pagination.totalCount += 1;

    if (totalCount % limit === 0) {
      state.pagination.totalPages += 1;
    }

    if (limit > state.all.length) {
      state.all.push(artist);
    }
  },

  [UPDATED](state, artist) {
    state.all = state.all.map((item) => {
      if (item.id === artist.id) {
        return artist;
      }

      return item;
    });
  },
};
