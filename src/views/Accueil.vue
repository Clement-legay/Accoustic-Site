<template>
  <div class="Accueil">
    <HeaderComponent/>
    <Article/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../components/HeaderComponent";
import Article from "../components/Article";

export default {
  name: 'Quiz',
  components: {
    HeaderComponent,
    Article,
  },
}
</script>
