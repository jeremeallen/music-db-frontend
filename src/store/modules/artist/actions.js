import Vue from 'vue';
import * as types from './mutation-types';
import ArtistProxy from '@/proxies/ArtistProxy';
import ArtistTransformer from '@/transformers/ArtistTransformer';
import PaginationTransformer from '@/transformers/PaginationTransformer';

const proxy = new ArtistProxy();

export const all = ({ commit }, fn = null) => {
  if (typeof fn === 'function') {
    fn(proxy);
  }

  proxy.all()
    .then((response) => {
      console.log(response);
      const data = {
        artists: ArtistTransformer.fetchCollection(response.data),
        pagination: PaginationTransformer.fetch(response.pagination),
      };

      commit(types.ALL, data);
    });
};

export const create = ({ commit }, artist) => {
  const trasnformedArtist = ArtistTransformer.send(artist);

  proxy.create(trasnformedArtist)
    .then(() => {
      Vue.router.push({
        name: 'artists.index',
      });
    });
};

export default {
  all,
  create,
};
