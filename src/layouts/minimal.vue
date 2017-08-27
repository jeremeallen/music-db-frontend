<template>
  <div>
    <v-aligner :variants="['bottom', 'right']">
      <transition-group name="fade">
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
    <v-grid variant='container'>
      <v-col :variants="['md-6', 'md-offset-3']">
        <slot></slot>
      </v-col>
    </v-grid>
  </div>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    name: 'minimal-layout',
    computed: {
      ...mapState('application', {
        application: state => state,
      }),
    },
    methods: {
      removeAlert(alert) {
        this.$store.dispatch('application/removeAlert', alert);
      },
    },
  };
</script>
