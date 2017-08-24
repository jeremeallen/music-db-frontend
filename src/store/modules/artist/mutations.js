import { ALL } from './mutation-types';

export default {
  [ALL](state, { artists, pagination }) {
    state.all = artists;
    state.pagination = pagination;
  },
};
