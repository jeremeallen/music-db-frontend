<template>
  <v-layout>
      {{ pageName }}
  </v-layout>
</template>
<script>
  export default {
    data() {
      return {
        pageName: 'albums.index',
      };
    },
    components: {
      VLayout: require('@/layouts/base'),
    },
  };
</script>