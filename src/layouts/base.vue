<template>
  <div>
      <v-header>
        <v-toolbar>
            <v-nav-icon @click.native="toggleDrawer" />
            <v-toolbar-title>Music DB</v-toolbar-title>
            <v-toolbar-actions>
              <v-toolbar-action>
                <v-icon>exit to app</v-icon>
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
              <v-drwaer-title>Music DB</v-drwaer-title>
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
  export default {
    name: 'base-layout',
    data() {
      return {
        drawerActive: false,
      };
    },
    methods: {
      hideDrawer() {
        this.drawerActive = false;
      },

      toggleDrawer() {
        this.drawerActive = !this.drawerActive;
      },
    },
  };
</script>