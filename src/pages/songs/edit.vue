<template>
  <v-layout>
      <v-grid variant='container'>
        <v-row>
          <v-col>
            <v-card v-if='song'>
              <v-card-heading>
                <v-card-title>Update song {{ song.title }}</v-card-title>
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
                  @click.native="updateSong"
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
    name: 'songs-edit',
    props: {
      songId: {
        type: [String, Number],
        required: true,
      },
    },
    data() {
      return {
        album: {
          items: [],
          selected: {
            id: 1,
            content: 'John Doe',
          },
        },
        song: {
          title: 'Hello World!',
        },
      };
    },
    methods: {
      fetchSong(id) {
        console.log(id);
      },
      updateSong() {

      },
      goBack() {
        this.$router.push({
          name: 'songs.show',
          props: {
            songId: this.songId,
          },
        });
      },
      fetchAlbums() {
      },
      fetchAlbum(songId) {
        console.log(songId);
      },
    },
    components: {
      VLayout: require('@/layouts/base'),
    },
    mounted() {
      this.fetchSong(this.songId);
    },

    watch: {
      songId(id) {
        this.fetchSong(id);
      },
    },
  };
</script>