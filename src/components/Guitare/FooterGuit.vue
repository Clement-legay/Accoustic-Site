<template>
  <div class="bgded overlay row4" style="background-color: black">
    <footer id="footer" class="hoc clear">
      <!-- ################################################################################################ -->
      <div class="center btmspace-50">
        <h6 class="heading">Accoustic</h6>

        <p class="nospace">Une autre façon d'appréhender la musique.</p>
      </div>
      <!-- ################################################################################################ -->
      <hr class="btmspace-50">
      <!-- ################################################################################################ -->
      <div class="one_quarter first">
        <h6 class="heading">Nous contacter</h6>
        <form action="#" method="post">
          <fieldset>
            <input class="btmspace-15" type="text" value="" placeholder="Nom">
            <input class="btmspace-15" type="text" value="" placeholder="Email">
            <button type="submit" value="submit">Envoyer</button>
          </fieldset>
        </form>
      </div>
      <div class="one_quarter">
        <h6 class="heading">Informations</h6>
        <ul class="nospace linklist">
          <li>
            <article>
              <p class="nospace btmspace-10"><router-link to="/" style="color: teal">Le site prend forme et j'espère pouvoir le publier prochainement.</router-link></p>
              <time class="block font-xs" datetime="2021-11-08">Lundi, 8 Novembre 2021</time>
            </article>
          </li>
          <li>
            <article>
              <p class="nospace btmspace-10"><router-link to="/" style="color: teal">Tous les systèmes semblent fonctionnels. Enfin !</router-link></p>
              <time class="block font-xs" datetime="2021-10-27">Mercredi, 27 Octobre 2021</time>
            </article>
          </li>
        </ul>
      </div>
      <div class="one_quarter">
        <h6 class="heading">Liens</h6>
        <ul class="nospace linklist">
          <li><router-link style="color: teal" to="/quiz">Affûte ton oreille</router-link></li>
          <li><router-link style="color: teal" to="/accords">Liste des accords</router-link></li>
          <li><router-link style="color: teal" to="/">Tips</router-link></li>
          <li><router-link style="color: teal" to="/training">Entrâine toi à jouer</router-link></li>
          <li><router-link style="color: teal" to="/tabs">Tablatures</router-link></li>
        </ul>
      </div>
      <div class="one_quarter">
        <h6 class="heading">Tips</h6>
        <ul class="nospace clear latestimg">
          <li><router-link to="/" class="imgover"><img src="/Img/uku1.jpg" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="/Img/uku2.jpg" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="/Img/uku3.jpg" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="/Img/01.png" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="/Img/01.png" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="/Img/01.png" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="/Img/01.png" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="/Img/01.png" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="/Img/01.png" alt=""></router-link></li>
        </ul>
      </div>
      <!-- ################################################################################################ -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>

</style>