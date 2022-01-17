<template>
  <div id="gammes">
    <HeaderGuitShort></HeaderGuitShort>
    <v-container>
      <v-row>
        <v-col>
          <v-select
              v-model="select"
              :items="items"
              item-text="note"
              item-value="abbr"
              label="Select note"
              return-object
              single-line
              @change="test()"
          ></v-select>
        </v-col>
        <v-col>
          <v-select
              v-model="select2"
              item-text="name"
              :items="items2"
              menu-props="auto"
              label="Select Gamme"
              return-object
              @change="test2"
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <p class="pa-4" v-for="(note, index) in finalGamme" :key="index">{{note}}</p>
      </v-row>
      <v-row>
        <v-col cols="12" style="background-image:url('/Img/Guitare/tableau-guitar.jpeg') !important;background-position: center; height: 30vh; background-size: cover;">
          <v-row class="ml-xl-16 pl-12 pl-xl-12">
            <v-col class="ml-16" cols="9" xl="7">
              <v-row v-for="(corde, index) in cordes" :key="index" class="mt-3 pr-4">
                <v-col class="ml-xl-3 pr-7 pr-xl-16 pb-xl-5 pb-4" v-for="(frette, index) in corde.notes.slice(0,5)" :key="index">
                  <v-row>
                    <v-avatar :size="$vuetify.breakpoint.xl   ? 35 : 20" v-if="test4(frette)" color="blue">
                      {{ frette.note }}
                    </v-avatar>
                  </v-row>
                </v-col>
                <v-col class="pr-xl-12 pb-xl-5 pb-4" v-for="(frette, index) in corde.notes.slice(5,7)" :key="index">
                  <v-row>
                    <v-avatar :size="$vuetify.breakpoint.xl ? 35 : 20" v-if="test4(frette)" color="blue">
                      {{ frette.note }}
                    </v-avatar>
                  </v-row>
                </v-col>
                <v-col class="pb-xl-5 pb-4" v-for="(frette, index) in corde.notes.slice(7,8)" :key="index">
                  <v-row>
                    <v-avatar :size="$vuetify.breakpoint.xl ? 35 : 20" v-if="test4(frette)" color="blue">
                      {{ frette.note }}
                    </v-avatar>
                  </v-row>
                </v-col>
                <v-col class=" pb-xl-5 pb-4" style="position: relative; margin-left: 30px" v-for="(frette, index) in corde.notes.slice(8,9)" :key="index">
                  <v-row>
                    <v-avatar :size="$vuetify.breakpoint.xl ? 35 : 20" v-if="test4(frette)" color="blue">
                      {{ frette.note }}
                    </v-avatar>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <p>C = Do</p><br>
          <p>D = Ré</p><br>
          <p>E = Mi</p><br>
          <p>F = Fa</p><br>
          <p>G = Sol</p><br>
          <p>A = La</p><br>
          <p>B = Si</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HeaderGuitShort from "../../components/Guitare/HeaderGuitShort";

export default {
  name: "Gammes",
  components: {
    HeaderGuitShort
  },
  methods: {
    test() {
      this.finalGamme = []
      let indexOfSelect = this.items.indexOf(this.select)
      let before = this.items
      let after = this.items
      if (indexOfSelect === -1) this.chosenGamme = [...after.slice(indexOfSelect +1, 12)]
      else this.chosenGamme = [...after.slice(indexOfSelect, 12), ...before.slice(0, indexOfSelect)]

      this.test3()
    },
    test2() {
      this.test()
    },
    test3(index=0) {
      console.log(this.chosenGamme)
      if (this.select2.gamme.length !== index) {
        this.finalGamme.push(this.chosenGamme[this.select2.gamme[index]].note)
        this.test3(index +1)
      }
    },
    test4(note) {
      return this.finalGamme.includes(note.note)
    }
  },
  data() {
    return {
      cordes: [
        {
          name: 'Mi',
          notes: [
            {note : 'Fa'},
            {note : 'Fa#'},
            {note : 'Sol'},
            {note : 'Sol#'},
            {note : 'La'},
            {note : 'La#'},
            {note : 'Si'},
            {note: 'Do'},
            {note : 'Do#'},
          ]
        },
        {
          name: 'Si',
          notes: [
            {note: 'Do'},
            {note : 'Do#'},
            {note : 'Ré'},
            {note : 'Ré#'},
            {note : 'Mi'},
            {note : 'Fa'},
            {note : 'Fa#'},
            {note: 'Sol'},
            {note : 'Sol#'},
          ]
        },
        {
          name: 'Sol',
          notes: [
            {note : 'Sol#'},
            {note : 'La'},
            {note : 'La#'},
            {note : 'Si'},
            {note : 'Do'},
            {note : 'Do#'},
            {note : 'Ré'},
            {note: 'Ré#'},
            {note : 'Mi'},
          ]
        },
        {
          name: 'Ré',
          notes: [
            {note : 'Ré#'},
            {note : 'Mi'},
            {note : 'Fa'},
            {note : 'Fa#'},
            {note : 'Sol'},
            {note : 'Sol#'},
            {note : 'La'},
            {note: 'La#'},
            {note : 'Si'},
          ]
        },
        {
          name: 'La',
          notes: [
            {note : 'La#'},
            {note : 'Si'},
            {note : 'Do'},
            {note : 'Do#'},
            {note : 'Ré'},
            {note : 'Ré#'},
            {note : 'Mi'},
            {note: 'Fa'},
            {note : 'Fa#'},
          ]
        },
        {
          name: 'Mi',
          notes: [
            {note : 'Fa'},
            {note : 'Fa#'},
            {note : 'Sol'},
            {note : 'Sol#'},
            {note : 'La'},
            {note : 'La#'},
            {note : 'Si'},
            {note: 'Do'},
            {note : 'Do#'},
          ]
        },
      ],
      finalGamme: [ 'Si', 'Do#', 'Ré', 'Mi', 'Fa#', 'Sol', 'La'],
      select: {note: 'Do'},
      chosenGamme: [],
      items: [
        {note : 'Do'},
        {note : 'Do#'},
        {note : 'Ré'},
        {note : 'Ré#'},
        {note : 'Mi'},
        {note : 'Fa'},
        {note : 'Fa#'},
        {note : 'Sol'},
        {note : 'Sol#'},
        {note : 'La'},
        {note : 'La#'},
        {note : 'Si'}
      ],
      items2: [
        {
          name: 'Mineur',
          gamme: [0, 2, 3, 5, 7, 8, 10],
        },
        {
          name: 'Majeur',
          gamme: [0, 2, 4, 5, 7, 9, 11]
        },
        {
          name: 'Pentatonique Mineur',
          gamme: [0, 3, 5, 7, 10]
        },
      ],
      select2: {name: 'Mineur', gamme: [0, 2, 3, 5, 7, 8, 10]},
    }
  },
  mounted() {
    this.test()
  }
}
</script>

<style scoped>

</style>