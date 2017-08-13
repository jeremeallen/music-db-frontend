<template>
  <v-layout>
    <v-grid variant="container">
      <v-row>
        <v-col>
          <v-card>
              <v-card-heading>
                <v-card-title>Create a new artist</v-card-title>
              </v-card-heading>
              <v-card-body>
                <v-form @submit.prevent.native="createArtist">
                  <v-row>
                    <v-col variant="md-6">
                      <v-text-field
                        placeholder="First name"
                        variant="block"
                        v-model="artist.firstName"
                      />
                    </v-col>
                    <v-col variant="md-6">
                      <v-text-field
                        placeholder="Last name"
                        variant="block"
                        v-model="artist.lastName"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col variant="md-6">
                      <v-text-field
                        placeholder="Birthday"
                        variant="block"
                        v-model="artist.birthday"
                      />
                    </v-col>
                    <v-col variant="md-6">
                      <v-select
                        v-model="artist.gender"
                        :items="sexes"
                      />
                    </v-col>
                  </v-row>
                  <v-form-group>
                    <v-text-area 
                      placeholder="Biography"
                      v-model="artist.biography"
                    />
                  </v-form-group>
                </v-form>
              </v-card-body>
              <v-card-footer>
                <v-button
                  variant="minimal"
                  @click.native="createArtist"
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
    name: 'artists-create',
    data() {
      return {
        sexes: [
          'Male',
          'Female',
        ],
        artist: {
          gender: null,
          firstName: null,
          lastName: null,
          birthday: null,
          biography: null,
        },
      };
    },
    methods: {
      createArtist() {

      },
      goBack() {
        this.$router.push({
          name: 'artists.index',
        });
      },
    },
    components: {
      VLayout: require('@/layouts/base'),
    },
  };
</script>