<template>
  <div id="Diagrams">
    <HeaderComponentShort theme="Diagrams"></HeaderComponentShort>
    <LoadingScreenComponent v-show="loading"></LoadingScreenComponent>
    <DiagListComponent :hidden="loading" :gamme="gamme"></DiagListComponent>
  </div>
</template>

<script>
import LoadingScreenComponent from "../../components/Ukulele/LoadingScreenComponent";
import HeaderComponentShort from "../../components/Ukulele/HeaderComponentShort";
import DiagListComponent from "../../components/Ukulele/DiagListComponent";


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