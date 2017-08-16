<template>
  <v-layout>
    <v-grid variant='container'>
      <v-row>
        <v-col>
          <v-card>
            <v-card-heading>
              <v-card-title>Login</v-card-title>
            </v-card-heading>
            <v-card-body>
              <v-form @submit.prevent.native="login">
                <v-form-group>
                    <v-text-field 
                      placeholder="Email"
                      variant="block"
                      v-model="user.username"
                      type="email"
                    />
                </v-form-group>
                <v-form-group>
                  <v-text-field 
                      placeholder="Password"
                      variant="block"
                      v-model="user.password"
                      type="password"
                    />
                </v-form-group>
                <v-form-group>
                  <v-button 
                      @click.native="login"
                      variant="block"
                  >Login</v-button>
                </v-form-group>
              </v-form>
            </v-card-body>
          </v-card>
        </v-col>
      </v-row>
    </v-grid>
  </v-layout>
</template>
<script>
  export default {
    name: 'login-index',
    data() {
      return {
        user: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      login() {},
    },
    components: {
      VLayout: require('@/layouts/minimal'),
    },
  };
</script>