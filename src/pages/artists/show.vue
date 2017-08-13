<template>
  <v-layout>
    <v-grid variant="container">
      <v-row>
        <v-col>
          <v-card if="artists">
            <v-card-heading>
              <v-card-title>{{ artist.fullName }} </v-card-title>
            </v-card-heading>
            <v-card-body>
              <v-definition>
                <v-definition-term>Gender</v-definition-term>
                <v-definition-description>{{ artist.gender }}</v-definition-description>
                <v-definition-term>Birthday</v-definition-term>
                <v-definition-description>{{ artist.birthday }}</v-definition-description>
                <v-definition-term>Biography</v-definition-term>
                <v-definition-description>{{ artist.biography }}</v-definition-description>
              </v-definition>
            </v-card-body>
            <v-card-footer>
              <v-button
                variant='minimal'
                @click.native='redirectToEditPage()'
              >Edit</v-button>
              <v-button
                :variants="['minimal', 'minimal--danger']"
                @click.native='destroyArtist()'
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
    name: 'artists-show',
    props: {
      artistId: {
        type: [String, Number],
        required: true,
      },
    },
    data() {
      return {
        artist: {
          fullName: 'John Doe',
          firstName: 'John',
          lastName: 'Doe',
          gender: 'Male',
          birthday: '01-01-2000',
          biography: 'Lorem Ipsum',
        },
      };
    },
    methods: {
      fetchArtist(id) {
        console.log(id);
      },
      redirectToEditPage() {
        this.$router.push({
          name: 'artists.edit',
          props: {
            artistId: this.artistId,
          },
        });
      },
      destroyArtist() {

      },
    },
    components: {
      VLayout: require('@/layouts/base'),
    },

    mounted() {
      this.fetchArtist(this.artistId);
    },

    watch: {
      artistId(id) {
        this.fetchArtist(id);
      },
    },
  };
</script>