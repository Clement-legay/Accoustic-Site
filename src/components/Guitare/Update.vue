<template>
  <v-container>
    <v-form ref="form" lazy-validation v-model="valid">
      <v-row>
        <v-col cols="6">
          <v-text-field v-model="band" label="Band" required :rules="[v => !!v || 'Band is required', v => (v && v.length <= 50 && v.length >= 2) || 'Band must be valid']"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="name" label="Music Name" required :rules="[v => !!v || 'Name is required',v => (v && v.length <= 50 && v.length >= 2) || 'Name must be valid']"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-sheet>
            <v-slide-group show-arrows :next-icon="icon.right" :prev-icon="icon.left">
              <v-slide-item class="my-3 mx-1" v-for="(accord, index) in accords" :key="index" cols="3">
                <v-card height="110" width="150" class="pa-3">
                  <v-card-text class="pa-0 ma-0">
                    <v-menu  ref="menu" v-model="accord.menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="accord.picker.name" :rules="[v => !!v || 'Accord is required']" label="Accord" readonly v-bind="attrs" v-on="on"></v-text-field>
                      </template>
                      <v-card height="200" width="400">
                        <template>
                          <v-card-title>
                            <v-col cols="6">
                              <v-select class="pa-0 mt-5" v-model="select" @change="update" item-text="name" :items="accordsList" menu-props="auto" label="Select Tab"></v-select>
                            </v-col>
                            <v-col cols="6">
                              <v-text-field  class="pa-0 ma-0" v-model="accord.search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                            </v-col>
                          </v-card-title>
                            <v-data-table :search="accord.search" :headers="header" :items="tabAcc" :items-per-page="5">
                              <template v-slot:item.actions="{ item }">
                                <v-icon small class="mr-2" @click="accord.picker=item; accord.menu=false">{{icon.select}}</v-icon>
                              </template>
                            </v-data-table>
                        </template>
                      </v-card>
                    </v-menu>
                  </v-card-text>
                  <v-card-actions class="pa-0 ma-0 mr-2">
                    <v-row justify="end">
                      <v-btn x-small fab @click="deleteThis(accords.indexOf(accord))">
                        <v-icon>{{ icon.poubelle }}</v-icon>
                      </v-btn>
                    </v-row>
                  </v-card-actions>
                </v-card>
              </v-slide-item>
              <v-slide-item class="mt-11 ml-2">
                <v-btn @click="addAccord" small fab>
                  <v-icon>
                    {{ icon.plus }}
                  </v-icon>
                </v-btn>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>

        <v-col cols="12" v-for="(loop, indexL) in loops" :key="indexL">
          <v-card>
            <v-card-title>
              <v-col cols="6">
                <v-text-field class="mr-1" label="Loop Title" v-model="loop.name" required></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field class="ml-1" label="Repeat" v-model="loop.repeat" required></v-text-field>
              </v-col>
              <v-col col="1">
                <v-btn small icon v-on:click="up(loops, loop, indexL)"><v-icon>{{rythmIcon[1]}}</v-icon></v-btn>
                <v-btn small icon v-on:click="down(loops, loop, indexL)"><v-icon>{{rythmIcon[2]}}</v-icon></v-btn>
              </v-col>
              <v-col cols="1">
                <v-btn x-small fab v-on:click="copy(loops ,loop, indexL)"><v-icon>{{icon.copy}}</v-icon></v-btn>
              </v-col>
              <v-col cols="1">
                <v-btn fab x-small v-on:click="deleteLoop(indexL)"><v-icon>{{ icon.poubelle }}</v-icon></v-btn>
              </v-col>
            </v-card-title>
            <v-card-text>
              <v-col cols="12" v-for="(piece, indexP) in loop.pieces" :key="indexP">
                <v-card>
                  <v-card-title>
                    <v-col cols="6">
                      <v-select v-model="piece.accord" item-text="name" label="Accord" :items="chosenAccord"></v-select>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field @input="rythmState(indexL, indexP)" v-model="piece.rythm" label="Size" required :rules="[v => !!v || 'Rythm is required',v => (v && v.length <= 3 && v.length > 0) || 'Rythm must be valid']"></v-text-field>
                    </v-col>
                  </v-card-title>
                  <v-card-text>
                    <v-row justify="center">
                      <v-col v-if="piece.rythm > 0" cols="10">
                        <v-row>
                          <v-col v-for="(num, index) in piece.rythmArray" :key="index">
                            <v-btn icon x-small @click="change(indexL, indexP, index)">
                              <v-icon>{{ rythmIcon[num] }}</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions>
                    <v-row align="center">
                      <v-col cols="9"></v-col>
                      <v-col col="1">
                        <v-btn small icon v-on:click="up(loop.pieces, piece, indexP)"><v-icon>{{rythmIcon[1]}}</v-icon></v-btn>
                        <v-btn small icon v-on:click="down(loop.pieces, piece, indexP)"><v-icon>{{rythmIcon[2]}}</v-icon></v-btn>
                      </v-col>
                      <v-col cols="1">
                        <v-btn x-small fab v-on:click="copy(loop.pieces, piece, indexP)"><v-icon>{{icon.copy}}</v-icon></v-btn>
                      </v-col>
                      <v-col cols="1">
                        <v-btn fab x-small v-on:click="deletePiece(indexL ,indexP)"><v-icon>{{ icon.poubelle }}</v-icon></v-btn>
                      </v-col>
                    </v-row>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-card-text>
            <v-card-actions>
              <v-btn text @click="addPiece(indexL)">ADD</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-btn text :disabled="accords[0] === undefined" @click="addLoop">ADD LOOP</v-btn>
        </v-col>
        <v-col cols="2">
          <v-switch
              v-model="isdone"
              label="Done ?"
              @change="update"
          ></v-switch>
        </v-col>
        <v-col cols="3">
          <v-btn outlined @click="post">POST</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn outlined @click="update">Update</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import Accords from "../../assets/js/AccordsGuit";
import { mdiPlus, mdiContentCopy, mdiArrowRight, mdiArrowLeft, mdiTrashCan, mdiCheck, mdiArrowUp, mdiArrowDown, mdiMinus } from "@mdi/js";

export default {
  name: "Update",
  components: {

  },
  watch: {
    accords :function () {
      this.update()
    },
    loops :function () {
      this.update()
    }
  },
  data() {
    return {
      chosenAccord: [],
      loops: [],
      select: "A",
      tabAcc: [],
      rythmIcon: [mdiMinus, mdiArrowUp, mdiArrowDown],
      header: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: "name",
        },
        { text: '', value: 'actions', sortable: false },
      ],
      icon: {
        plus: mdiPlus,
        left: mdiArrowLeft,
        right: mdiArrowRight,
        poubelle: mdiTrashCan,
        select: mdiCheck,
        copy:mdiContentCopy,
      },
      valid: true,
      accords: [],
      band: "",
      name: "",
      accordsList: [],
      date: "",
      id: "",
      isdone: false,

      finalElement: {}
    }
  },
  methods: {
    copy(array, item, index) {
      let val = JSON.parse(JSON.stringify(item))
      val.name += ' - copy'
      array.splice(index + 1, 0, val)
    },
    down(array, item, index) {
      array.splice(index, 1)
      array.splice(index + 1, 0, item)
    },
    up(array, item, index) {
      array.splice(index, 1)
      array.splice(index - 1, 0, item)
    },
    update() {
      this.tabAcc = this.accordsList.find(o => o.name === this.select).data

      this.chosenAccord = []
      for (let i = 0; i < this.accords.length; i++) {
        this.chosenAccord.push(this.accords[i].picker)
      }

      if (this.isdone) {
        this.finalElement = {
          id_music: this.id,
          accords_music: JSON.stringify(this.chosenAccord),
          loops_music: JSON.stringify(this.loops),
          name_music: this.name,
          date_music: this.date,
          isdone_music: this.isdone,
          band_music: this.band,
        }
      }
    },
    move(down, loop, indexL, indexP=0) {
      if (loop === true) {
        let val = this.loops.slice(indexL, 1)
        console.log(val, indexP)
      }
    },
    change(loop, piece, index) {
      let test = this.loops[loop].pieces[piece].rythm
      this.loops[loop].pieces[piece].rythm = 0
      this.loops[loop].pieces[piece].rythmArray[index] = this.loops[loop].pieces[piece].rythmArray[index] === 0 ? this.loops[loop].pieces[piece].rythmArray[index] = 1 : this.loops[loop].pieces[piece].rythmArray[index] === 1 ? this.loops[loop].pieces[piece].rythmArray[index] = 2 : this.loops[loop].pieces[piece].rythmArray[index] = 0
      this.loops[loop].pieces[piece].rythm = test

      this.update()
    },
    rythmState(loop, piece) {
      if (this.loops[loop].pieces[piece].rythm > 1 && this.loops[loop].pieces[piece].rythm < 128) {
        let tab = []
        for (let i = 0; i < this.loops[loop].pieces[piece].rythm; i++) {
          tab.push(0)
        }
        this.loops[loop].pieces[piece].rythmArray = tab
      } else {
        //pass
      }
      this.update()
    },
    deleteLoop(item) {
      if (this.loops.length === 1) this.loops = []
      else this.loops.splice(item, 1)
    },
    deleteThis(item) {
      if (this.accords.length === 1) this.accords = []
      else this.accords.splice(item, 1)
    },
    deletePiece(loop, piece) {
      if (this.loops[loop].pieces.length === 1) this.loops[loop].pieces = []
      else this.loops[loop].pieces.splice(piece, 1)
    },
    addPiece(loop) {
      this.loops[loop].pieces.push({rythm: 0, rythmArray: [], accord: this.chosenAccord[0].name})
    },
    addAccord() {
      this.accords.push({search: "", picker: "", menu: false,})
    },
    addLoop() {
      this.loops.push({name:'', pieces: [{rythm: 0, repeat: 0, rythmArray: [], accord: this.chosenAccord[0].name}]})
    },
    createWorking() {
      this.name = this.$store.getters.selected.name_music
      this.date = this.$store.getters.selected.date_music
      this.band = this.$store.getters.selected.band_music
      this.id = this.$store.getters.selected.id_music

      if (this.$store.getters.selected.loops_music !== null) this.loops = this.$store.getters.selected.loops_music
      if (this.$store.getters.selected.accords_music !== null)this.accords = this.$store.getters.selected.accords_music.map(v => v = {search:"", picker: v, menu:false})
    },
    post() {
      this.$store.dispatch('udMusic', this.finalElement)
      this.$router.push('/guitare/musics')
    }
  },
  mounted() {
    if (this.$store.getters.selected === null) this.$router.push('/guitare/musics')

    else {
      this.accordsList = Accords.data().Accords
      this.createWorking()
      this.update()
    }
  }
}
</script>

<style scoped>

</style>