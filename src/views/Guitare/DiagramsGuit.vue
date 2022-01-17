<template>
  <div id="Diagrams">
    <HeaderGuitShort theme="Diagrams"></HeaderGuitShort>
    <LoadingScreenComponent v-show="loading"></LoadingScreenComponent>
    <DiagListGuit :hidden="loading" :gamme="gamme"></DiagListGuit>
  </div>
</template>

<script>
import LoadingScreenComponent from "../../components/Ukulele/LoadingScreenComponent";
import HeaderGuitShort from "../../components/Guitare/HeaderGuitShort";
import DiagListGuit from "../../components/Guitare/DiagListGuit";


export default {
  name: "Diagrams",
  data() {
    return {
      loading : true
    }
  },
  components: {
    LoadingScreenComponent,
    HeaderGuitShort,
    DiagListGuit
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