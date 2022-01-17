<template>
  <div justify="center" class="page">
    <v-btn elevation="7" fab large v-on:click="start(notes.data)" rounded small x-large>
      <i class="fas fa-play fa-2x"></i>
    </v-btn>
  </div>
</template>

<script>
import frettes from "../../assets/js/frettes";

export default {
  name: 'A',
  props: ['notes'],
  methods: {
    start(cor) {
      let corde = []
      for (let i = 1; i <= 4; i++) {
        let note = this.note(i, cor[i-1])
        corde.push(note)
        setTimeout(function (){corde[i-1].play()}, (i * 250))
      }
    },
    note(cor, note) {
      if (cor === 1) {
        return this.corde1[note].sound
      }
      if (cor === 2) {
        return this.corde2[note].sound
      }
      if (cor === 3) {
        return this.corde3[note].sound
      }
      if (cor === 4) {
        return this.corde4[note].sound
      }
    }
  },
  data() {
    return {
      corde1: Array,
      corde2: Array,
      corde3: Array,
      corde4: Array
    }
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
.hover:hover
{
  rotation-point: center;
  rotation: 90deg;
  offset-rotate: 90deg;
  transition-delay: 1ms;
}
</style>