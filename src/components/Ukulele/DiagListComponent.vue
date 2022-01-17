<template>
  <div id="DiagReader">
    <v-container>
      <v-row cols="12">
        <v-col sm="6">
          <v-spacer></v-spacer>
        </v-col>
        <v-col sm="6">
          <v-select
              v-model="choice"
              item-text="name"
              :items="accords"
              menu-props="auto"
              label="Select Tab"
              return-object
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-sheet elevation="8" class="pa-5">
        <v-row>
          <v-col v-for="accord in choice.data" :key="accord.id" align="center" class="col-12 col-lg-4 col-md-6">
            <DiagramComponent :accord="accord"></DiagramComponent>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import Accords from "../../assets/js/Accords";
import DiagramComponent from "./DiagramComponent";

export default {
  name: "DiagListComponent",
  components: {
    DiagramComponent
  },
  data() {
    return {
      accords: Array,
      choice: null,
    }
  },
  props: ['gamme'],
  mounted() {
    this.accords = Accords.data().Accords
    if (this.gamme != null) {
      this.choice = this.accords[this.gamme]
    }
    else {
      this.choice = this.accords[0]
    }
  }
}
</script>

<style scoped>

</style>