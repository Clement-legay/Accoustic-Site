<template>
  <div id="Diagrams">
    <HeaderComponentShort theme="Diagrams"></HeaderComponentShort>
    <LoadingScreenComponent v-show="loading"></LoadingScreenComponent>
    <DiagListComponent :hidden="loading" :gamme="gamme"></DiagListComponent>
  </div>
</template>

<script>
import LoadingScreenComponent from "../components/LoadingScreenComponent";
import HeaderComponentShort from "../components/HeaderComponentShort";
import DiagListComponent from "../components/DiagListComponent";


export default {
  name: "Diagrams",
  data() {
    return {
      loading : true
    }
  },
  components: {
    LoadingScreenComponent,
    HeaderComponentShort,
    DiagListComponent
  },
  props: ['gamme'],
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, (1000))
  }
}
</script>

<style scoped>

</style>