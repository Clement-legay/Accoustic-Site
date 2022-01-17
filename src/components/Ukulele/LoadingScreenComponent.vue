<template>
  <div id="loader">
    <v-container>
      <v-row>
        <v-col sm="6">
          <v-skeleton-loader type="card" class="mx-auto"></v-skeleton-loader>
        </v-col>
        <v-col sm="6">
          <v-skeleton-loader type="card" class="mx-auto"></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12">
          <v-skeleton-loader type="card" class="mx-auto"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LoadingScreenComponent"
}
</script>

<style scoped>

</style>