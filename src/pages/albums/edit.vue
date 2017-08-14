<template>
  <v-layout>
      <v-grid variant='container'>
        <v-row>
          <v-col>
            <v-card v-if='album'>
              <v-card-heading>
                <v-card-title>Update album {{ album.title }}</v-card-title>
              </v-card-heading>
              <v-card-body>
                <v-form @submit.prevent.native="updateAlbum">
                  <v-form-group>
                    <v-text-field
                      placeholder="Title"
                      variant="block"
                      v-model="album.title"
                    />
                  </v-form-group>
                  <v-row>
                    <v-col variant="md">
                      <v-text-field
                        placeholder="Release dat"
                        variant="block"
                        v-model="album.releaseDate"
                      />
                    </v-col>
                     <v-col variant="md">
                      <v-auto-complete
                        v-model="artist.selected"
                        :items="artist.items"
                        @change="fetchArtists"
                        placeholder="Search artists..."
                      />
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-body>
              <v-card-footer>
                <v-button
                  variant="minimal"
                  @click.native="updateAlbum"
                >
                  Save
                </v-button>
                <v-button
                  :variants="['minimal', 'minimal--danger']"
                  @click.native="goBack"
                >
                  Cancel
                </v-button>
              </v-card-footer>
            </v-card>
          </v-col>
        </v-row>
      </v-grid>
  </v-layout>
</template>
<script>
  export default {
    name: 'albums-edit',
    props: {
      albumId: {
        type: [String, Number],
        required: true,
      },
    },
    data() {
      return {
        artist: {
          items: [],
          selected: {
            id: 1,
            content: 'John Doe',
          },
        },
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
      updateArtist() {

      },
      goBack() {
        this.$router.push({
          name: 'albums.show',
          props: {
            artistId: this.artistId,
          },
        });
      },
      fetchArtists() {
      },
      fetchArtist(albumId) {
        console.log(albumId);
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