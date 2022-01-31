<template>
  <div id="choose">
    <HeaderGuitShort></HeaderGuitShort>
    <player></player>
  </div>
</template>

<script>
import Player from "../../components/Guitare/player";
import HeaderGuitShort from "../../components/Guitare/HeaderGuitShort";

export default {
  name: "chooseMusic",
  components: {
    Player,
    HeaderGuitShort
  }
}
</script>

<style scoped>

</style>