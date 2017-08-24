import * as types from './mutation-types';
import ArtistProxy from '@/proxies/ArtistProxy';
import ArtistTransformer from '@/transformers/ArtistTransformer';
import PaginationTransformer from '@/transformers/PaginationTransformer';

const proxy = new ArtistProxy();

export const all = ({ commit }) => {
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

export default {
  all,
};
