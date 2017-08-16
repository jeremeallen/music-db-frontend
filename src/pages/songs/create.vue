<template>
  <v-layout>
    <v-grid variant="container">
      <v-row>
        <v-col>
          <v-card>
              <v-card-heading>
                <v-card-title>Create a new song</v-card-title>
              </v-card-heading>
              <v-card-body>
                <v-form @submit.prevent.native="createSong">
                  <v-form-group>
                    <v-text-field
                      placeholder="Title"
                      variant="block"
                      v-model="song.title"
                    />
                  </v-form-group>
                  <v-form-group>
                    <v-auto-complete
                      v-model="album.selected"
                      :items="album.items"
                      @change="fetchAlbums"
                      placeholder="Search albums..."
                    />
                  </v-form-group>
                </v-form>
              </v-card-body>
              <v-card-footer>
                <v-button
                  variant="minimal"
                  @click.native="createSong"
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
    name: 'songs-create',
    data() {
      return {
        song: {
          title: null,
        },
        album: {
          selected: null,
          items: [],
        },
      };
    },
    methods: {
      createSong() {

      },
      goBack() {
        this.$router.push({
          name: 'songs.index',
        });
      },
      fetchAlbums() {
      },
    },
    components: {
      VLayout: require('@/layouts/base'),
    },
  };
</script>