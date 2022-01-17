<template>
  <div id="TAB">
    <HeaderComponentShort :theme="'SONO'"></HeaderComponentShort>
    <LoadingScreenComponent v-show="loading"></LoadingScreenComponent>
    <TabReaderComponent :hidden="loading"></TabReaderComponent>
  </div>
</template>

<script>
import HeaderComponentShort from "../../components/Ukulele/HeaderComponentShort";
import TabReaderComponent from "../../components/Ukulele/TabReaderComponent";
import LoadingScreenComponent from "../../components/Ukulele/LoadingScreenComponent";

export default {
  name: 'TAB',
  components: {
    HeaderComponentShort,
    TabReaderComponent,
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