<template>
  <div id="Quiz">
    <HeaderComponentShort :theme="'Finger\'s Training'"></HeaderComponentShort>
    <LoadingScreenComponent v-show="loading"></LoadingScreenComponent>
    <Training :style="loading? 'opacity: 0' : ''"></Training>
  </div>
</template>

<script>
import HeaderComponentShort from "../components/HeaderComponentShort";
import Training from "../components/Training2";
import LoadingScreenComponent from "../components/LoadingScreenComponent";

export default {
  name: "fingerPick",
  components: {
    HeaderComponentShort,
    Training,
    LoadingScreenComponent
  },
  data() {
    return {
      loading : true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, (1000))
  }
}

</script>

<style scoped>
</style>