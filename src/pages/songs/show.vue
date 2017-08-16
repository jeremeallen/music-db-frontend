<template>
  <v-layout>
    <v-grid variant="container">
      <v-row>
        <v-col>
          <v-card if="songs">
            <v-card-heading>
              <v-card-title>{{ song.title }} </v-card-title>
            </v-card-heading>
            <v-card-body>
              <v-definition>
                <v-definition-term>Title</v-definition-term>
                <v-definition-description>{{ song.title }}</v-definition-description>
              </v-definition>
            </v-card-body>
            <v-card-footer>
              <v-button
                variant='minimal'
                @click.native='redirectToEditPage()'
              >Edit</v-button>
              <v-button
                :variants="['minimal', 'minimal--danger']"
                @click.native='destroySong()'
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
    name: 'songs-show',
    props: {
      songId: {
        type: [String, Number],
        required: true,
      },
    },
    data() {
      return {
        song: {
          title: 'Lorem Ipsum',
        },
      };
    },
    methods: {
      fetchSong(id) {
        console.log(id);
      },
      redirectToEditPage() {
        this.$router.push({
          name: 'songs.edit',
          props: {
            songId: this.songId,
          },
        });
      },
      destroySong() {

      },
    },
    components: {
      VLayout: require('@/layouts/base'),
    },

    mounted() {
      this.fetchSong(this.songId);
    },

    watch: {
      artistId(id) {
        this.fetchSong(id);
      },
    },
  };
</script>