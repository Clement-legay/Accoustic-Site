<template>
  <div class="Accueil">
    <HeaderComponent/>
    <Article/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../../components/Ukulele/HeaderComponent";
import Article from "../../components/Ukulele/Article";

export default {
  name: 'Quiz',
  components: {
    HeaderComponent,
    Article,
  },
}
</script>
