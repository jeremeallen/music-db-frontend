<template>
  <div>
      <v-header>
        <v-toolbar>
            <v-nav-icon @click.native="toggleDrawer" />
            <v-toolbar-title>Music DB</v-toolbar-title>
            <v-toolbar-actions>
              <v-toolbar-action @click.native='logout'>
                <v-icon>exit_to_app</v-icon>
              </v-toolbar-action>
            </v-toolbar-actions>
        </v-toolbar>
        <transition name="slide-left">
          <v-drawer v-if="drawerActive">
            <v-drawer-header>
              <v-nav-icon 
                variant="green" 
                @click.native="toggleDrawer"
              />
              <v-drawer-title>Music DB</v-drawer-title>
            </v-drawer-header>
            <v-drawer-body>
              <v-navigation>
                <v-navigation-item>
                  <v-navigation-link :route="{ name: 'artists.index' }" >
                    <v-navigation-content>Artists</v-navigation-content>
                  </v-navigation-link>
                  <v-navigation-link :route="{ name: 'albums.index' }" >
                    <v-navigation-content>Albums</v-navigation-content>
                  </v-navigation-link>
                  <v-navigation-link :route="{ name: 'songs.index' }" >
                    <v-navigation-content>Songs</v-navigation-content>
                  </v-navigation-link>
                </v-navigation-item>
              </v-navigation>
            </v-drawer-body>
            <v-drawer-footer>For education purposes only</v-drawer-footer>
          </v-drawer>>
        </transition>
      </v-header>
      <v-content>
        <v-aligner :variants="['top', 'right']">
          <transition-group name="fade-left">
            <v-alert
              v-for="alert in application.alerts"
              :variant="alert.type"
              :key="alert">
              <v-alert-body>
                {{ alert.message }}
              </v-alert-body>
              <v-alert-close @click.native="removeAlert(alert)">
                <v-icon>
                  close
                </v-icon>
              </v-alert-close>
            </v-alert>
          </transition-group>
        </v-aligner>
        <slot></slot>
      </v-content>
      <transition name="fade">
        <v-overlay
          v-show="drawerActive"
          @click.native="hideDrawer"
        />
      </transition>
  </div>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    name: 'base-layout',
    data() {
      return {
        drawerActive: false,
      };
    },
    computed: {
      ...mapState('application', {
        application: state => state,
      }),
    },
    methods: {
      hideDrawer() {
        this.drawerActive = false;
      },

      toggleDrawer() {
        this.drawerActive = !this.drawerActive;
      },

      logout() {
        this.$store.dispatch('auth/logout');
      },
      removeAlert(alert) {
        this.$store.dispatch('application/removeAlert', alert);
      },
    },
  };
</script>