<template>
  <v-hover v-slot="{ hover }" close-delay="200">
    <v-card class="pa-sm-0 pa-md-2 pa-lg-4" :elevation="hover ? 16 : 2" outlined height="520" max-width="350" color="green lighten-5">
      <h1 class="text-h4 pa-2 ma-0">{{ accord.name }}</h1>
      <v-main style="background-image: url('/Img/Guitare/Capture.png'); background-size: cover; background-position: center;height: 425px; width: 232px">
        <v-row v-if="accord.frette !== 0" justify="end" class="mb-0 pb-0">
          <v-col :cols="accord.cordes * 2" class="mb-0 pb-0">
            <v-card color="black" class="mt-3 mb-0 pa-0" style="height: 40px; width: 100%;border-bottom-left-radius: 40px; border-top-left-radius: 40px">
              <p class="pa-0 ma-0 pt-2" style="color: white">{{ accord.frette }}</p>
            </v-card>
          </v-col>
        </v-row>
        <v-row cols="12" style="height: 100%" :class="accord.frette !== 0 ? '' : 'pt-3'">
          <v-col v-for="(test, index) in accord.data.slice(0, 6)" :key="index" class="pa-1" sm="2">
            <v-spacer :style="'height:' + heights[test] + 'px'"></v-spacer>
            <v-btn v-show="test !== 0" x-small fab dark class="pa-0 ma-0" @click="playNote(accord.data[0], 1)"></v-btn>
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
import Accords from "../../assets/js/Accords";
import frettes from "../../assets/js/frettes";

export default {
  name: "DiagramComponent",
  data() {
    return {
      accords: Array,
      notes: Array,
      heights: [0, 17, 87, 160, 230, 302, 370]
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