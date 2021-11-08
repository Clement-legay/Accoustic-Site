<template>
  <div id="Quiz">
    <HeaderComponentShort :theme="''"></HeaderComponentShort>
    <main class="hoc container clear">
      <div class="content">
        <div class="group">
          <div class="one first">
            <p id="big-text" class="center">404</p>
          </div>
          <div class="one">
            <p class="center font-x1">Désolé mais... ce que vous chercher n'est pas ici</p>
            <br>
            <div class="center">
              <router-link to="/">
                <button class="btn">Accueil</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderComponentShort from "../components/HeaderComponentShort";

export default {
  name : '404',
  components: {
    HeaderComponentShort,
  }
}
</script>

<style scoped>
#big-text
{
  font-size: 105px;
  color: #30995c;
  background: #FFFFFF;
  text-shadow: 1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC;
  background: #FFFFFF;
}
</style>