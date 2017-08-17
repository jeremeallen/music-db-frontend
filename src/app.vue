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
    this.$store.dispatch('auth/logout');
  },
};
</script>
