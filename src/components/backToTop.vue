<template>
  <v-fade-transition>
    <v-btn v-scroll="onScroll" v-show="fab" small fab dark fixed bottom right color="green darken-2" @click="toTop">
      <v-icon color="black" class="fas fa-angle-up"></v-icon>
    </v-btn>
  </v-fade-transition>
</template>

<script>
export default {
  name: "backToTop",
  data() {
    return {
      fab: false
    }
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style scoped>

</style>