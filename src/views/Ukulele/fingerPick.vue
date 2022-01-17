<template>
  <div id="Quiz">
    <HeaderComponentShort :theme="'Finger\'s Training'"></HeaderComponentShort>
    <LoadingScreenComponent v-show="loading"></LoadingScreenComponent>
    <Training :style="loading? 'opacity: 0' : ''"></Training>
  </div>
</template>

<script>
import HeaderComponentShort from "../../components/Ukulele/HeaderComponentShort";
import Training from "../../components/Ukulele/Training2";
import LoadingScreenComponent from "../../components/Ukulele/LoadingScreenComponent";

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