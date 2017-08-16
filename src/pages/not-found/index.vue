<template>
  <v-layout>
    <v-grid variant='container'>
      <v-row>
        <v-col>
          <v-card>
            <v-card-heading>
              <v-card-title>404</v-card-title>
            </v-card-heading>
            <v-card-body>This page does not exist ...</v-card-body>
          </v-card>
        </v-col>
      </v-row>
    </v-grid>
  </v-layout>
</template>
<script>
  export default {
    name: 'not-found-index',
    components: {
      VLayout: require('@/layouts/base'),
    },
  };
</script>