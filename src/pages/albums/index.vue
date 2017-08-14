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
                    placeholder="Find album"
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
                <v-table-head>Release Date</v-table-head>
              </v-table-row>
            </v-table-header>
            <v-table-body>
              <v-table-row
                v-for="album in album.all"
                :key="album"
                variant="body"
              >
                <v-table-cell>
                  <router-link :to="getAlbumRoute(album.id)">
                    {{ album.title }}
                  </router-link>
                </v-table-cell>
                <v-table-cell>
                  {{ album.releaseDate }}
                </v-table-cell>
              </v-table-row>
              <v-table-row v-if="album.all.length === 0">
                <v-table-cell colspan="2">Albums not found .... </v-table-cell>
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
                :pagination="album.pagination"
                :switch-page-function="setPage"
                variant="small"
              />
            </v-card-body>
          </v-card>
          <v-card variant="inline">
            <v-card-body>
              <v-select
                v-model="album.pagination.limit"
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
    name: 'album-index',
    data() {
      return {
        album: {
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
      getAlbumRoute() {},

      setPage() {},

      setLimit() {},

      setQuery() {},

      redirectToCreatePage() {
        this.$router.push({
          name: 'albums.create',
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