<template>
  <div id="updater">
    <HeaderGuitShort></HeaderGuitShort>
    <Update></Update>
  </div>
</template>

<script>
import HeaderGuitShort from "../../components/Guitare/HeaderGuitShort";
import Update from "../../components/Guitare/Update";

export default {
  name: "updateMusic",
  components: {
    Update,
    HeaderGuitShort
  }
}
</script>

<style scoped>

</style>