<template>
  <div>
    <router-view />
  </div>
</template>

<script>
  /* ============
   * Entry Point
   * ============
   *
   * This is the entry point of the application.
   */
  import store from '@/store';
  import { router } from './bootstrap';

  export default {
    /**
     * The name of the application.
     */
    name: 'music-db',

    /**
     * The Vuex store.
     */
    store,

    /**
     * The router.
     */
    router,

    /**
     * This method will be fired once the application has been mounted.
     */
    mounted() {
      this.$store.watch((state) => {
        if (state.auth.authenticated) {
          store.dispatch('artist/all');
          this.$echo
            .channel('artist')
            .listen('Artist.Created', artist => store.dispatch('artist/created', artist))
            .listen('Artist.Updated', artist => store.dispatch('artist/updated', artist));

          store.dispatch('album/all');
          store.dispatch('song/all');
        }
      });
    },
  };
</script>
