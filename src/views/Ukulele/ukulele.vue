<template>
  <div id="ukulele">
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from "../../components/Ukulele/FooterComponent";
export default {
  name: "ukulele",
  components: {FooterComponent}
}
</script>

<style scoped>

</style>