<template>
  <v-layout>
    <v-grid variant="container">
      <v-row variant="xs-center">
        <v-col :variants="['xs-9', 'md-4', 'lg-3']">
          <v-card>
            <v-card-body>
              <v-form @submit.prevent.native="setQuery(query)">
                <v-input-group>
                  <v-icon variant="signifier">search</v-icon>
                  <v-text-field 
                    variant="with-signifier"
                    v-model="query"
                    placeholder="Find artist"
                  />
                </v-input-group>
              </v-form>
            </v-card-body>
          </v-card>
        </v-col>
        <v-col :variants="['xs-3', 'md-4', 'lg-3', 'md-offset-4', 'lg-offset-6']">
          <v-button 
            variant="circle"
            @click.native="redirectToCreatePage"
            class="pull-right"
          >
            <v-icon>add</v-icon>
          </v-button>
        </v-col>
      </v-row>
      <v-row>
        <v-col variant="sm">
          <v-table>
            <v-table-header>
              <v-table-row>
                <v-table-head>Name</v-table-head>
                <v-table-head>Birthday</v-table-head>
              </v-table-row>
            </v-table-header>
            <v-table-body>
              <v-table-row
                v-for="artist in artist.all"
                :key="artist"
                variant="body"
              >
                <v-table-cell>
                  <router-link :to="getArtistRoute(artist.id)">
                    {{ artist.fullName }}
                  </router-link>
                </v-table-cell>
                <v-table-cell>
                  {{ artist.birthday }}
                </v-table-cell>
              </v-table-row>
              <v-table-row v-if="artist.all.length === 0">
                <v-table-cell colspan="3">Artists not found .... </v-table-cell>
              </v-table-row>
            </v-table-body>
          </v-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col variant="xs-justiry">
          <v-card variant="inline">
            <v-card-body>
              <v-pagination
                :pagination="artist.pagination"
                :switch-page-function="setPage"
                variant="small"
              />
            </v-card-body>
          </v-card>
          <v-card variant="inline">
            <v-card-body>
              <v-select
                v-model="artist.pagination.limit"
                :items="pageNumbers"
              />
            </v-card-body>
          </v-card>
        </v-col>
      </v-row>
    </v-grid>
  </v-layout>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    name: 'artist-index',
    data() {
      return {
        query: null,
        pageNumbers: [
          5,
          10,
          15,
        ],
      };
    },

    computed: {
      ...mapState('artist', {
        artist: state => state,
      }),
    },

    methods: {
      getArtistRoute(id) {
        return {
          name: 'artists.show',
          params: { artistId: id },
        };
      },

      setPage() {},

      setLimit() {},

      setQuery() {},

      redirectToCreatePage() {
        this.$router.push({
          name: 'artists.create',
        });
      },

    },
    watch: {
      query(query) {
        this.setQuery(query);
      },
    },

    components: {
      VLayout: require('@/layouts/base'),
    },
  };
</script>