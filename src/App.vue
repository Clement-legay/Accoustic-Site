<template>
  <v-app id="app">
    <router-view style="z-index: 10"></router-view>
    <back-to-top style="z-index: 10"></back-to-top>
    <FooterComponent></FooterComponent>
  </v-app>
</template>

<script>
import FooterComponent from "./components/FooterComponent";
import backToTop from "./components/backToTop";

export default {
  name: 'App',
  components: {
    FooterComponent,
    backToTop
  },
  data: () => ({
    //
  }),
};
</script>
