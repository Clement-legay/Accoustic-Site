<template>
  <v-container>
    <v-card min-height="250">
      <v-card-title>
        <v-row align="center">
          <v-col cols="4">
            <h1>Musics list</h1>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="1">
            <v-btn small fab v-on:click="addMusic = true">
              <v-icon>
                {{ icon.plus }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="3" v-for="(music, index) in this.$store.getters.musics" :key="index">
            <v-card v-on:click="choose(music)">
              <v-card-title>
                {{ music.band_music }} - {{ music.name_music }}
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-on:click="edit(music)" fab x-small>
                  <v-icon>
                    {{ icon.update }}
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-dialog v-model="addMusic" max-width="300">
      <v-card>
        <v-card-title>
          Add Music
        </v-card-title>
        <v-card-text class="pb-0 mb-0">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="band" label="Band" required :rules="[v => !!v || 'Band is required', v => (v && v.length <= 50 && v.length >= 2) || 'Band must be valid']"></v-text-field>
            <v-text-field v-model="name" label="Music Name" required :rules="[v => !!v || 'Name is required',v => (v && v.length <= 50 && v.length >= 2) || 'Name must be valid']"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="pt-0 m-0">
          <v-spacer></v-spacer>
          <v-btn text v-on:click="name = ''; band = ''; addMusic = false">Cancel</v-btn>
          <v-btn text v-on:click="validate">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mdiPlus, mdiPencil } from "@mdi/js"

export default {
  name: "musics",
  data() {
    return {
      valid: true,
      addMusic: false,
      band: "",
      name: "",
      icon: {
        plus: mdiPlus,
        update: mdiPencil
      },
    }
  },
  methods: {
    async refresh() {
      await this.$store.dispatch('getMusic')
    },
    choose(music) {
      this.$store.dispatch('getSelected', music)
      this.$router.push('/guitare/music-player');
    },
    edit(music) {
      this.$store.dispatch('getSelected', music)
      this.$router.push('/guitare/music-maker');
    },
    submit() {
      const music = {
        id_music: this.$store.getters.nextId,
        name_music: this.name,
        date_music: `${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}`,
        band_music: this.band,
        loops_music: [],
        accord_music: [],
        isdone_music: 0,
      }
      this.$store.dispatch('addMusic', music)
      this.$store.dispatch('getSelected', music)
      this.$router.push('/guitare/music-maker');
    },
    validate() {
      if (this.$refs.form.validate()) this.submit()
    },
  },
  mounted() {
    this.refresh()
  }
}
</script>

<style scoped>

</style>