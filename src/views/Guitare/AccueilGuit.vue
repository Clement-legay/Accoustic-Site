<template>
  <div id="accueil">
    <HeaderGuit></HeaderGuit>
    <ArticleGuit></ArticleGuit>
  </div>
</template>

<script>
import HeaderGuit from "../../components/Guitare/HeaderGuit";
import ArticleGuit from "../../components/Guitare/ArticleGuit";

export default {
  name: "AccueilGuit",
  components: {
    HeaderGuit,
    ArticleGuit
  }
}
</script>

<style scoped>

</style>