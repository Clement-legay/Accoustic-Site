<template>
  <v-hover v-slot="{ hover }" close-delay="200">
    <v-card class="pa-sm-0 pa-md-2 pa-lg-4" :elevation="hover ? 16 : 2" outlined height="450" max-width="300" color="green lighten-5">
      <h1 class="text-h4 pa-2 ma-0">{{ accord.name }}</h1>
      <v-main style="background-image: url('./Img/virginDiagram.png'); background-size: cover; background-position: center;height: 80%; width: 60%">
        <v-row cols="12" style="height: 100%">
          <v-col class="pa-1" sm="3">
            <v-spacer :style="'height:' + accord.data[0] * 21 + '%'"></v-spacer>
            <v-btn small fab dark class="pa-0 ma-0" @click="playNote(accord.data[0], 1)"></v-btn>
          </v-col>
          <v-col class="pa-1" sm="3" style="height: 100%">
            <v-spacer :style="'height:' + accord.data[1] * 21 + '%'"></v-spacer>
            <v-btn small fab dark class="pa-0 ma-0" @click="playNote(accord.data[1], 2)"></v-btn>
          </v-col>
          <v-col class="pa-1" sm="3" style="height: 100%">
            <v-spacer :style="'height:' + accord.data[2] * 21 + '%'"></v-spacer>
            <v-btn small fab dark class="pa-0 ma-0" @click="playNote(accord.data[2], 3)"></v-btn>
          </v-col>
          <v-col class="pa-1" sm="3" style="height: 100%">
            <v-spacer :style="'height:' + accord.data[3] * 21 + '%'"></v-spacer>
            <v-btn small fab dark class="pa-0 ma-0" @click="playNote(accord.data[3], 4)"></v-btn>
          </v-col>
        </v-row>
      </v-main>
      <v-row>
        <v-col align="right">
          <v-btn fab dark @click="playAccord(accord.data)">Play</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-hover>
</template>

<script>
import Accords from "../assets/js/Accords";
import frettes from "../assets/js/frettes";

export default {
  name: "DiagramComponent",
  data() {
    return {
      accords: Array,
      notes: Array,
    }
  },
  props:['accord'],
  methods: {
    playNote(note, corde) {
      let result = this.makeASound(note, corde)
      result.sound.play()
    },
    playAccord(accord) {
      let sound = []
      for (let i = 1; i <= 4; i++) {
        let obj = accord[i-1]
        sound.push(this.makeASound(obj, i))
        for (let j = 0; j < sound.length; j++) {
          setTimeout(() => {sound[j].sound.play()}, (i * 250))
        }
      }
    },
    makeASound(note, corde) {
      if (corde === 1) {
        return this.notes.cor1[note]
      } else if (corde === 2) {
        return this.notes.cor2[note]
      } else if (corde === 3) {
        return this.notes.cor3[note]
      } else {
        return this.notes.cor4[note]
      }
    },
  },
  mounted() {
    this.accords = Accords.data().Accords
    this.notes = frettes.data()
    this.choice = this.accords[this.gamme]
  }
}
</script>

<style scoped>

</style>