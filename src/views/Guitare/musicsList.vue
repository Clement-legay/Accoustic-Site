<template>
  <div id="musics">
    <HeaderGuitShort></HeaderGuitShort>
    <Musics></Musics>
  </div>
</template>

<script>
import HeaderGuitShort from "../../components/Guitare/HeaderGuitShort";
import Musics from "../../components/Guitare/musics";

export default {
  name: "musicsList",
  components: {
    Musics,
    HeaderGuitShort
  }
}
</script>

<style scoped>

</style>