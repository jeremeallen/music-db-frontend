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

  methods: {
    login() {
      this.$store.dispatch('auth/login');
    },
    logout() {
      this.$store.dispatch('auth/logout');
    },
  },
};
</script>
