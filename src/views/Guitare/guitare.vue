<template>
  <div id="guitare">
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from "../../components/Ukulele/FooterComponent";
export default {
  name: "guitare",
  components: {FooterComponent}
}
</script>

<style scoped>

</style>