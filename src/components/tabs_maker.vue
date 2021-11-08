<template>
  <div id="finger'sTraining">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-container cols="12">
            <v-card elevation="6" outlined shaped color="grey lighten-3">
              <div id="handle" class="center">
                <v-slide-group v-for="(corde, index) in 4" :key="index" mandatory style="height: 25%">
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card :color="active ? 'secondary' : 'transparent'" style="width: 14%" @click="toggle" v-on:click="play(index, 0)">
                      <v-scale-transition>
                        <v-icon v-if="active" v-text="'mdi-close-circle-outline'"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card :color="active ? 'secondary' : 'transparent'" style="width: 17%" @click="toggle" v-on:click="play(index, 1)">
                      <v-scale-transition>
                        <v-icon v-if="active" v-text="'mdi-close-circle-outline'"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card :color="active ? 'secondary' : 'transparent'" style="width: 15%" @click="toggle" v-on:click="play(index, 2)">
                      <v-scale-transition>
                        <v-icon v-if="active" v-text="'mdi-close-circle-outline'"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card :color="active ? 'secondary' : 'transparent'" style="width: 15%" @click="toggle" v-on:click="play(index, 3)">
                      <v-scale-transition>
                        <v-icon v-if="active" v-text="'mdi-close-circle-outline'"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card :color="active ? 'secondary' : 'transparent'" style="width: 13.5%" @click="toggle" v-on:click="play(index, 4)">
                      <v-scale-transition>
                        <v-icon v-if="active" v-text="'mdi-close-circle-outline'"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card :color="active ? 'secondary' : 'transparent'" style="width: 13%" @click="toggle" v-on:click="play(index, 5)">
                      <v-scale-transition>
                        <v-icon v-if="active" v-text="'mdi-close-circle-outline'"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card :color="active ? 'secondary' : 'transparent'" style="width: 12.5%" @click="toggle" v-on:click="play(index, 6)">
                      <v-scale-transition>
                        <v-icon v-if="active" v-text="'mdi-close-circle-outline'"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                </v-slide-group>

              <!--              c'est fini-->
              </div>
              <br>
              <div class="right">
                <v-btn class="ma-2" v-on:click="tab = []" outlined color="dark lighten-2">reset</v-btn>
              </div>
            </v-card>
            <v-card class="pa-2">
              <h1 class="pa-2">Result</h1>
              <v-card class="pa-2">
                <p>{{tab}}</p>
              </v-card>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import frettes from "../assets/js/frettes";

export default {
  name: "Training",
  data() {
    return {
      sound: Object,
      corde1: Array,
      corde2: Array,
      corde3: Array,
      corde4: Array,
      model: null,

      tab: []
    }
  },
  methods: {
    play(Cor, Not) {
      if (Cor === 0) {
        this.sound = this.corde1[Not].sound
        this.sound.play()
      } else if (Cor === 1) {
        this.sound = this.corde2[Not].sound
        this.sound.play()
      } else if (Cor === 2) {
        this.sound = this.corde3[Not].sound
        this.sound.play()
      } else {
        this.sound = this.corde4[Not].sound
        this.sound.play()
      }
      this.tab.push([Not, Cor + 1])
    },
  },
  mounted() {
    this.corde1 = frettes.data().cor1
    this.corde2 = frettes.data().cor2
    this.corde3 = frettes.data().cor3
    this.corde4 = frettes.data().cor4
  }
}
</script>

<style scoped>
#handle
{
  height: 100px;
  width: 300px;
  background-image:url('../../public/Img/manche.png');
  background-position: center;
  background-size: cover;
  margin: 0 auto;
}
.cor
{
  display: inline;
}
.note
{
  display: inline;
}
.note > button
{
  float: left;
  background-color: transparent;
  border: none;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
@media (min-width: 1920px) and (max-width: 2560px){
  #handle
  {
    height: 200px;
    width: 600px;
  }
}
@media (min-width: 750px) and (max-width: 1920px){
  #handle
  {
    height: 150px;
    width: 450px;
  }
}
</style>