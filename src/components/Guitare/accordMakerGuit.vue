<template>
  <div id="maker">
    <v-container>
      <v-row justify="center" class="mb-6">
        <v-col cols="2" v-if="$vuetify.breakpoint.smAndDown"></v-col>
        <v-col cols="4" md="2">
          <v-row justify="center">
            <v-col v-for="(num, indexR) in btn" :key="indexR" cols="4">
              <v-btn :disabled="accord.length >= 18" color="black" v-on:click="push(num)" style="color: white">
                {{ num }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" md="2">
          <v-btn color="black" style="color: white" v-on:click="back()">
            Back
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="6">
              <v-text-field class="mt-2" outlined label="Name" v-model="name"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field class="mt-2" outlined label="Frette" v-model="frette"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn v-on:click="corde = '0'" outlined color="black">
                0
              </v-btn>
            </v-col>
            <v-col v-for="(btn2, index) in btn.slice(0,6)" :key="index">
              <v-btn v-on:click="corde = btn2" outlined color="black">
                {{ btn2 }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="1">
          <v-row justify="center">
            <v-btn color="purple lighten-4" :disabled="!accord.length > 1" v-on:click="reset()" small fab>RES</v-btn>
          </v-row>
        </v-col>
        <v-col cols="1">
          <v-row justify="center">
            <v-btn color="teal darken-3" :disabled="!state" v-on:click="addIt()" small fab>ADD</v-btn>
          </v-row>
        </v-col>
        <v-col cols="1">
          <v-row justify="center">
            <v-btn color="purple darken-4" :disabled="array1.length === 0" v-on:click="rmIt()" small fab>RM</v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          Result :
          <v-card>
            <v-card class="pa-3" outlined color="black">
              <p class="pa-0 ma-0" style="color: white" v-html="test()"></p>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-3" justify="center">
        <v-col cols="8">
          <v-card>
            <v-card class="pa-3" outlined color="black">
              <p class="pa-0 ma-0" v-for="(text, index) in array1" :key="index" style="color: white">
                {{ text }}
              </p>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "accordMakerGuit",
  data() {
    return {
      result: "",
      array1: [],
      accord: "[",
      btn: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      name: "",
      frette: "0",
      corde: 0,
      occurence: 0,
      state: false,
    }
  },
  methods: {
    push(val) {
      this.occurence += 1
      if (this.occurence < 6)
        this.accord += val + ', '
      else {
        this.accord += val + ']'
      }
    },
    back() {
      if (this.occurence === 6) {
        this.accord = this.accord.slice(0, this.accord.length - 2)
        this.occurence -= 1
      } else if (this.occurence === 0) {
        //pass
      } else {
        this.accord = this.accord.slice(0, this.accord.length - 3)
        this.occurence -= 1
      }
    },
    test() {
      if (this.accord.length === 18) {
        if (this.name.length > 0) {
          this.state = true
          this.result = '{data: ' + this.accord + ', name: "' + this.name + '", frette: ' + this.frette + ', cordes: ' + this.corde + '},'
          return this.result
        } else {
          this.state = false
          this.result = '{data: ' + this.accord + ', name: ' + this.name
          return this.result
        }
      } else {
        this.state = false
        this.result = '{data: ' + this.accord
        return this.result
      }
    },
    addIt() {
      this.array1.push(this.result)
      this.reset()
    },
    rmIt() {
      this.array1.pop()
    },
    reset() {
      this.accord = "["
      this.frette = "0"
      this.corde = 0
      this.name = ""
      this.occurence = 0
      this.result = ""
    }
  }
}
</script>

<style scoped>

</style>