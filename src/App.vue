<template>
  <v-app id="app">
    <router-view style="z-index: 10"></router-view>
    <back-to-top style="z-index: 10"></back-to-top>
  </v-app>
</template>

<script>
import backToTop from "./components/backToTop";

export default {
  name: 'App',
  components: {
    backToTop
  },
  data: () => ({
    //
  }),
};
</script>
