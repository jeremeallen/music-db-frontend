<template>
  <router-view />
</template>

<script>

import store from '@/store';
import { router } from './bootstrap';

export default {
  name: 'music-db',
  store,
  router,

  mounted() {
    this.$http.get('/albums')
      .then((data) => {
        console.log(data);
      });
  },
};
</script>
