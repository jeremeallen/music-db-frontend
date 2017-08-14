<template>
  <v-layout>
    <v-grid variant="container">
      <v-row>
        <v-col>
          <v-card if="artists">
            <v-card-heading>
              <v-card-title>{{ album.title }} </v-card-title>
            </v-card-heading>
            <v-card-body>
              <v-definition>
                <v-definition-term>Release Date</v-definition-term>
                <v-definition-description>{{ album.releaseDate }}</v-definition-description>
              </v-definition>
            </v-card-body>
            <v-card-footer>
              <v-button
                variant='minimal'
                @click.native='redirectToEditPage()'
              >Edit</v-button>
              <v-button
                :variants="['minimal', 'minimal--danger']"
                @click.native='destroyAlbum()'
              >Delete</v-button>
            </v-card-footer>
          </v-card>
        </v-col>
      </v-row>
    </v-grid>
  </v-layout>
</template>
<script>
  export default {
    name: 'albums-show',
    props: {
      albumId: {
        type: [String, Number],
        required: true,
      },
    },
    data() {
      return {
        album: {
          title: 'Hello World!',
          releaseDate: '01-01-2000',
        },
      };
    },
    methods: {
      fetchAlbum(id) {
        console.log(id);
      },
      redirectToEditPage() {
        this.$router.push({
          name: 'albums.edit',
          props: {
            albumId: this.albumId,
          },
        });
      },
      destroyAlbum() {

      },
    },
    components: {
      VLayout: require('@/layouts/base'),
    },

    mounted() {
      this.fetchAlbum(this.albumId);
    },

    watch: {
      albumId(id) {
        this.fetchAlbum(id);
      },
    },
  };
</script>