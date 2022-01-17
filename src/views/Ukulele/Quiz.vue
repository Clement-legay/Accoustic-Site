<template>
  <div id="Quiz">
    <HeaderComponentShort :theme="'SONO'"></HeaderComponentShort>
    <LoadingScreenComponent v-show="loading"></LoadingScreenComponent>
    <QuizComponent :hidden="loading"></QuizComponent>
  </div>
</template>

<script>
import HeaderComponentShort from "../../components/Ukulele/HeaderComponentShort";
import QuizComponent from "../../components/Ukulele/QuizComponent";
import LoadingScreenComponent from "../../components/Ukulele/LoadingScreenComponent";

export default {
  name: 'Quiz',
  components: {
    HeaderComponentShort,
    QuizComponent,
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