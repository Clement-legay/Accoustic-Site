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
              :items="accN"
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
          <v-col v-for="accord in accords" :key="accord.id" align="center" cols="12" sm="6" md="4" lg="4" xl="3">
            <DiagramGuit :accord="accord.data[choice.id]"></DiagramGuit>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import Accords from "../../assets/js/AccordsGuit";
import DiagramGuit from "./DiagramGuit";

export default {
  name: "DiagListComponent",
  components: {
    DiagramGuit
  },
  data() {
    return {
      accords: Array,
      choice: null,
      accN: [
        {
          name: "Majeur",
          id: 0
        },
        {
          name: "Mineur",
          id: 1
        },
        {
          name: "Quinte",
          id: 2
        },
        {
          name: "Augmented",
          id: 3
        },
        {
          name: "Diminued",
          id: 4
        },
        {
          name: "Suspended Second",
          id: 5
        },
        {
          name: "Suspended Fourth",
          id: 6
        },
        {
          name: "Major Sixth",
          id: 7
        },
        {
          name: "Minor Sixth",
          id: 8
        },
        {
          name: "Seventh",
          id: 9
        },
        {
          name: "Mineur Seventh",
          id: 10
        },
        {
          name: "Major Seventh",
          id: 11
        },
        {
          name: "Seventh Suspended Fourth",
          id: 12
        },
        {
          name: "Minor Seventh Flat Five",
          id: 13
        },
        {
          name: "Ninth",
          id: 14
        },
        {
          name: "Major Ninth",
          id: 15
        },
        {
          name: "Minor Ninth",
          id: 16
        },
        {
          name: "Eleventh",
          id: 17
        },
        {
          name: "Thirteen",
          id: 18
        }
      ]
    }
  },
  props: ['gamme'],
  mounted() {
    this.accords = Accords.data().Accords
    if (this.gamme != null) {
      this.choice = this.gamme
    }
    else {
      this.choice = {
        name: "Majeur",
        id: 0
      }
    }
  }
}
</script>

<style scoped>

</style>