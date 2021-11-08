<template>
<body id="top" :style="$vuetify.breakpoint.lgAndUp? 'null' : 'padding-top: 200px; position: relative; z-index: 0'">
  <div class="wrapper row3">
    <main class="hoc container clear">
      <section id="introblocks">
        <ul class="nospace group">
          <li class="one_third">
            <figure>
              <router-link to="/quiz">
                <a class="imgover">
                  <img src="Img/uku1.jpg" alt="">
                </a>
              </router-link>
              <figcaption>
                <h6 class="heading">Entraîne ton oreil musicale</h6>
                <p>Ipsum eu ipsum donec ac orci sed lectus elementum fringilla nullam dictum nisi nec mauris phasellus ut lacus.</p>
              </figcaption>
            </figure>
          </li>
          <li class="one_third">
            <figure>
              <router-link to="/training">
                <a class="imgover">
                  <img src="Img/uku2.jpg" alt="">
                </a>
              </router-link>
              <figcaption>
                <h6 class="heading">Découvre les accords</h6>
                <p>Vel nisi semper adipiscing maecenas sodales elit cras porttitor diam aliquam turpis quisque rhoncus tincidunt.</p>
              </figcaption>
            </figure>
          </li>
          <li class="one_third">
            <figure>
              <router-link to="/master'sTraining">
                <a class="imgover">
                  <img src="Img/uku3.jpg">
                </a>
              </router-link>
              <figcaption>
                <h6 class="heading">DEVIENT UNE ROCKSTAR</h6>
                <p>Arcu ut auctor nunc ac mi vivamus aliquam maecenas in lorem vel tellus porttitor placerat quisque tellus nulla.</p>
              </figcaption>
            </figure>
          </li>
          </ul>
      </section>
      <div class="clear"></div>
    </main>
  </div>
</body>
</template>

<script>
export default {
  name: "Article"
}
</script>

<style scoped>

</style>