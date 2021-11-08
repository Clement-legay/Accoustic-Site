<template>
  <div id="Quiz">
    <HeaderComponentShort :theme="'SONO'"></HeaderComponentShort>
    <LoadingScreenComponent v-show="loading"></LoadingScreenComponent>
    <QuizComponent :hidden="loading"></QuizComponent>
  </div>
</template>

<script>
import HeaderComponentShort from "../components/HeaderComponentShort";
import QuizComponent from "../components/QuizComponent";
import LoadingScreenComponent from "../components/LoadingScreenComponent";

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