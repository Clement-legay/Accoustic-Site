<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-sheet class="pa-6">
          <h6>C'EST L'HEURE DE JOUER</h6>
          <p class="font-x1 text-justify">
            Appuyez sur le bouton play pour écouter l'accord. En suite, choisissez quel note correspond au son, selon vous.<br/>
            N'aillez pas peur plus vous pratiquer et plus vous accoutumer votre oreil musicale !
          </p>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="6">
        <v-container cols="12">
          <v-select
              v-model="choice"
              item-text="name"
              :items="accords"
              menu-props="auto"
              label="Select Gamme"
              return-object
              @change="next(); score = 0"
          ></v-select>
          <v-card elevation="2" outlined shaped color="grey lighten-3">
            <v-row>
              <v-spacer></v-spacer>
              <v-col sm="4">
                <accords class="pa-2 center" :notes="theOne"></accords>
              </v-col>
              <v-col sm="4">
                <h6 class="text-right pa-md-2">Score: {{ score }}</h6>
              </v-col>
            </v-row>
            <br>
            <br>
            <v-row>
              <v-col sm="4" v-for="(answer, index) in answers" :key="index" class="pa-6 center">
                <v-btn color="green lighten-2" elevation="2" class="font-weight-black" v-on:click="checkIf(index)">{{answer.name}}</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Accords from "../assets/js/Accords";
import accords from "./Accord";

export default {
  name: 'QuizComponent',
  components: {
    accords
  },
  data() {
    return {
      choice: Accords.data().Accords[0],
      accords: Accords.data().Accords,
      theOne: Audio,
      answers: Array,
      Finally: false,
      score: 0
    }
  },
  methods: {
    next() {
      this.theOne = this.rand(this.choice.data)
      this.answers = [this.rand(this.choice.data), this.theOne, this.rand(this.choice.data)]
      this.answers = this.shuffle(this.answers)
      this.Finally = false
    },
    rand(accord) {
      return accord[Math.floor(Math.random() * accord.length)]
    },
    checkIf(index) {
      if (this.Finally !== true) {
        if (this.answers[index].name === this.theOne.name) {
          this.Finally = true
          this.score++
          this.next()
        } else {
          this.Finally = false
          this.score--
        }
      }
    },
    shuffle(a) {
      let j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
  },
  mounted() {
    this.theOne = this.rand(this.choice.data)
    this.answers = [this.rand(this.choice.data), this.theOne, this.rand(this.choice.data)]
    this.answers = this.shuffle(this.answers)
  }
}
</script>

<style scoped>

</style>