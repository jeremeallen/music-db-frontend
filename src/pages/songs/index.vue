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
                    placeholder="Find song"
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
                <v-table-head>Title</v-table-head>
              </v-table-row>
            </v-table-header>
            <v-table-body>
              <v-table-row
                v-for="song in song.all"
                :key="song"
                variant="body"
              >
                <v-table-cell>
                  <router-link :to="getSongRoute(song.id)">
                    {{ song.title }}
                  </router-link>
                </v-table-cell>
              </v-table-row>
              <v-table-row v-if="song.all.length === 0">
                <v-table-cell colspan="3">Song not found .... </v-table-cell>
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
                :pagination="song.pagination"
                :switch-page-function="setPage"
                variant="small"
              />
            </v-card-body>
          </v-card>
          <v-card variant="inline">
            <v-card-body>
              <v-select
                v-model="song.pagination.limit"
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
  export default {
    name: 'songs-index',
    data() {
      return {
        song: {
          all: [],
          pagination: {
            totalCount: 0,
            totalPages: 0,
            currentPage: 1,
            limit: 5,
          },
        },
        query: null,
        pageNumbers: [
          5,
          10,
          15,
        ],
      };
    },
    methods: {
      getSongRoute() {},

      setPage() {},

      setLimit() {},

      setQuery() {},

      redirectToCreatePage() {
        this.$router.push({
          name: 'songs.create',
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