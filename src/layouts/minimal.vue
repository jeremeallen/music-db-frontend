<template>
  <div>
    <v-grid variant='container'>
      <v-col :variants="['md-6', 'md-offset-3']">
        <slot></slot>
      </v-col>
    </v-grid>
  </div>
</template>
<script>
  export default {
    name: 'minimal-layout',
  };
</script>
