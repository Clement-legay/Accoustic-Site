<template>
  <div class="bgded overlay" style="background-image:url('./Img/ukulele.jpg');  background-position: center ">
    <div v-if="$vuetify.breakpoint.lgAndUp">
      <header id="header" class="hoc clear">
        <div  id="logo" class="one_quarter first">
          <h1><router-link to="/">Acoustic</router-link></h1>
        </div>
      </header>
      <section id="navwrapper" class="hoc clear">
        <nav id="mainav">
          <ul class="clear">
            <li class="active"><router-link to="/">Home</router-link></li>
            <li><router-link to="/accords" class="drop">Accords</router-link>
              <ul>
                <li><router-link v-bind:to="{name: 'accords', params: {gamme: '0'}}">Simple</router-link></li>
                <li><router-link v-bind:to="{name: 'accords', params: {gamme: '2'}}">Mineures</router-link></li>
                <li><router-link v-bind:to="{name: 'accords', params: {gamme: '1'}}">Septièmes</router-link></li>
                <li><router-link v-bind:to="{name: 'accords', params: {gamme: '3'}}">Septièmes Majeures</router-link></li>
                <li><router-link v-bind:to="{name: 'accords', params: {gamme: '4'}}">Septièmes Mineures</router-link></li>
              </ul>
            </li>
            <li><router-link to="/quiz">Sono</router-link></li>
            <li><router-link to="/training">Finger's training</router-link></li>
            <li><router-link to="/">tips</router-link></li>
            <li><router-link to="/">Super training</router-link></li>
            <li><router-link to="/tabs">TABS</router-link></li>
          </ul>
        </nav>
      </section>
    </div>

    <div v-else>
    <v-toolbar style="position: fixed; width: 100%; z-index: 1030;" color="black">
      <v-row>
        <v-col sm="4">
          <v-btn x-small color="black" @click="test = true" style="padding-top: 3vh">
            <v-icon @click="test" color="white" class="fas fa-align-justify"></v-icon>
          </v-btn>
        </v-col>
        <v-col sm="4" align="center">
          <router-link to="/">
            <v-toolbar-title style="font-family: 'Font Awesome 5 Free'; font-size: 32px; color: white">
              Acoustic
            </v-toolbar-title>
          </router-link>
        </v-col>
        <v-col sm="4">
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-toolbar>
    </div>

    <v-navigation-drawer style="position: fixed ;height: 100vh" absolute left color="teal lighten-4" class="px-3 py-3" v-model="test">
      <v-item-group v-model="test2" style="padding-top: 50px" multiple color="grey" class="text-button">
        <v-list-item><router-link style="color: black" to="/">Home</router-link></v-list-item>
        <v-list-item><router-link style="color: black" to="/accords" class="drop">Accords</router-link></v-list-item>
        <v-list-item><router-link style="color: black" to="/quiz">Sono</router-link></v-list-item>
        <v-list-item><router-link style="color: black" to="/training">Finger's training</router-link></v-list-item>
        <v-list-item><router-link style="color: black" to="/">tips</router-link></v-list-item>
        <v-list-item><router-link style="color: black" to="/">Super training</router-link></v-list-item>
        <v-list-item><router-link style="color: black" to="/tabs">TABS</router-link></v-list-item>
      </v-item-group>
    </v-navigation-drawer>

    <div id="pageintro" class="hoc clear">
      <article>
        <p>DEVIENS UN PROFESSIONEL</p>
        <h3 class="heading">Le Ukulélé</h3>
        <p>Rejoins le panthéon des plus grands Ukuléliste en cliquant sur ce simple bouton !</p>
        <footer><router-link class="btn" to="/quiz" style="color: black">La solution</router-link></footer>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accueil",
  data() {
    return {
      test: false,
      test2: 0
    }
  }
}
</script>

<style scoped>
</style>