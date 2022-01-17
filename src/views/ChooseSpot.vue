<template>
  <div id="app" style="background-image: url('/Img/buoutifoul.jpg'); background-position: center; background-size: cover">
    <v-container>
      <v-row align="center" justify="center" style="height: 100vh">
        <v-spacer></v-spacer>
        <v-col cols="2">
          <router-link to="/ukulele/accueil">
            <v-btn outlined color="white">
              Ukulele
            </v-btn>
          </router-link>
        </v-col>
        <v-col cols="2">
          <router-link to="/guitare/accueil">
            <v-btn outlined color="white">
              Guitare
            </v-btn>
          </router-link>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ChooseSpot"
}
</script>

<style scoped>

</style>