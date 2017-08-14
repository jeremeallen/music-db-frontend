<template>
  <v-layout>
    <v-grid variant="container">
      <v-row>
        <v-col>
          <v-card>
              <v-card-heading>
                <v-card-title>Create a new album</v-card-title>
              </v-card-heading>
              <v-card-body>
                <v-form @submit.prevent.native="createAlbum">
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
                  @click.native="createAlbum"
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
    name: 'albums-create',
    data() {
      return {
        album: {
          title: null,
          releaseDate: null,
        },
        artist: {
          selected: null,
          items: [],
        },
      };
    },
    methods: {
      createAlbum() {

      },
      goBack() {
        this.$router.push({
          name: 'albums.index',
        });
      },
      fetchArtists() {
      },
    },
    components: {
      VLayout: require('@/layouts/base'),
    },
  };
</script>