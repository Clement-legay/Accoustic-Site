<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-row justify="center">
              <h1 class="text-h4">{{ music.name_music }} by {{ music.band_music }}</h1>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-col v-for="(loop,index) in music.loops_music" :key="index">
              <v-row>
                <p class="text-h5 pa-0 ma-0">{{ loop.name }}</p>
              </v-row>
              <v-row>
                <v-col :cols="piece.rythm > 10 ? 12 : 6" v-for="(piece, indexP) in loop.pieces" :key="indexP">
                  <v-card>
                    <v-card-title>
                      <v-row justify="center">
                        <p @click="openDiagram(piece.accord.name !== undefined ? piece.accord.name : piece.accord)" v-html="piece.accord.name !== undefined ? piece.accord.name : piece.accord"></p>
                      </v-row>
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col :key="indexM" v-for="(move, indexM) in piece.rythmArray">
                          <v-icon small>{{ rythmIcon[move] }}</v-icon>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="diagram" max-width="320px">
      <v-card color="white darken-3">
        <v-col justify="center" align="center">
          <diagram-guit :accord="selectedAccord"></diagram-guit>
        </v-col>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import diagramGuit from "./DiagramGuit";
import { mdiMinus, mdiArrowUp, mdiArrowDown } from "@mdi/js";

export default {
  name: "player",
  components: {
    diagramGuit
  },
  data() {
    return {
      rythmIcon: [mdiMinus, mdiArrowUp, mdiArrowDown],
      music: this.$store.getters.selected,
      selectedAccord: [],
      diagram: false
    }
  },
  methods: {
    openDiagram(val) {
      this.selectedAccord = this.music.accords_music.find(v => v.name === val)
      this.diagram = true
    },
  },
  mounted() {
    console.log(this.music)
  }
}
</script>

<style scoped>

</style>