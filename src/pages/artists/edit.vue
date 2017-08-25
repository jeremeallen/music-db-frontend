<template>
  <v-layout>
      <v-grid variant='container'>
        <v-row>
          <v-col>
            <v-card v-if='artist'>
              <v-card-heading>
                <v-card-title>Update artist {{ artist.fullName }}</v-card-title>
              </v-card-heading>
              <v-card-body>
                <v-form @submit.prevent.native='updateArtist'>
                  <v-row>
                    <v-col variant='md-6'>
                      <v-text-field 
                        placeholder='First name'
                        variant='block'
                        v-model='artist.firstName'
                      />
                    </v-col>
                    <v-col variant='md-6'>
                      <v-text-field 
                        placeholder='Last name'
                        variant='block'
                        v-model='artist.lastName'
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col variant='md-6'>
                      <v-text-field 
                        placeholder='Birthday'
                        variant='block'
                        v-model='artist.birthday'
                      />
                    </v-col>
                    <v-col variant='md-6'>
                      <v-select 
                        v-model='artist.gender'
                        :items='sexes'
                      />
                    </v-col>
                  </v-row>
                  <v-form-group>
                    <v-text-area 
                      placeholder='Biography'
                      v-model='artist.biography'
                    />
                  </v-form-group>
                </v-form>
              </v-card-body>
              <v-card-footer>
                <v-button
                  variant="minimal"
                  @click.native="updateArtist"
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
  import ArtistProxy from '@/proxies/ArtistProxy';
  import ArtistTransformer from '@/transformers/ArtistTransformer';

  const proxy = new ArtistProxy();

  export default {
    name: 'artists-edit',
    props: {
      artistId: {
        type: [String, Number],
        required: true,
      },
    },
    data() {
      return {
        sexes: [
          'Male',
          'Female',
        ],
        artist: null,
      };
    },
    methods: {
      fetchArtist(id) {
        proxy.find(id)
          .then((data) => {
            this.artist = ArtistTransformer.fetch(data);
          });
      },
      updateArtist() {
        this.$store.dispatch('artist/update', this.artist);
      },
      goBack() {
        this.$router.push({
          name: 'artists.show',
          props: {
            artistId: this.artistId,
          },
        });
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