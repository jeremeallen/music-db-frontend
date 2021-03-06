/* ============
 * Song Actions
 * ============
 *
 * The actions available for the song module.
 */

import Vue from 'vue';
import * as types from './mutation-types';
import store from '@/store';
import Proxy from '@/proxies/SongProxy';
import SongTransformer from '@/transformers/SongTransformer';
import PaginationTransformer from '@/transformers/PaginationTransformer';

const proxy = new Proxy();

/**
 * Action fired when all songs will be fetched.
 *
 * @param {function} commit Commit function to update the store.
 * @param {function} fn     Callback to edit the parameters on the proxy.
 */
const all = ({ commit }, fn = null) => {
  if (typeof fn === 'function') {
    fn(proxy);
  }

  proxy.all()
    .then((response) => {
      const data = {
        songs: SongTransformer.fetchCollection(response.data),
        pagination: PaginationTransformer.fetch(response.pagination),
      };

      commit(types.ALL, data);
    });
};

/**
 * Action fired when a song will be created.
 *
 * @param {function} commit Commit function to update the store.
 * @param {Object}   song   The song that will be created.
 */
const create = ({ commit }, song) => {
  const transformedSong = SongTransformer.send(song);

  proxy.create(transformedSong)
    .then(() => {
      store.dispatch('application/addAlert', {
        type: 'success',
        message: 'Song has been created!',
      });

      Vue.router.push({
        name: 'songs.index',
      });
    })
    .catch(() => {
      store.dispatch('application/addAlert', {
        type: 'danger',
        message: 'The song could not be created',
      });
    });
};

/**
 * Action fired when a song will be updated.
 *
 * @param {function} commit Commit function to update the store.
 * @param {Object}   song   The song that will be updated.
 */
const update = ({ commit }, song) => {
  const transformedSong = SongTransformer.send(song);

  proxy.update(song.id, transformedSong)
    .then(() => {
      store.dispatch('application/addAlert', {
        type: 'success',
        message: 'Song has been updated!',
      });

      Vue.router.push({
        name: 'songs.show',
        params: {
          songId: song.id,
        },
      });
    })
    .catch(() => {
      store.dispatch('application/addAlert', {
        type: 'danger',
        message: 'The song could not be updated',
      });
    });
};

/**
 * Action fired when a song will be destroyed.
 *
 * @param {function} commit  Commit function to update the store.
 * @param {Object}   songId  The song that will be destroyed.
 */
const destroy = ({ commit }, songId) => {
  proxy.destroy(songId)
    .then(() => {
      store.dispatch('application/addAlert', {
        type: 'success',
        message: 'Song has been destroyed!',
      });

      Vue.router.push({
        name: 'songs.index',
      });
    })
    .catch(() => {
      store.dispatch('application/addAlert', {
        type: 'danger',
        message: 'The song could not be destroyed',
      });
    });
};

export default {
  all,
  create,
  update,
  destroy,
};
