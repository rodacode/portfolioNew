<template>
  <div class="home">
    <Gallery/>
    <div class="explanation-switch">
      <span class="explanation-text">Explanation</span>
      <md-switch v-model="$store.state.explanation"></md-switch>
    </div>
    <div class="explanation-state" v-if="getExplanation">
      <p>
        {{ getExplanation }}
        <span class="explanation">the one and only source of truth</span>
      </p>
    </div>
    <div v-if="getExplanation" class="explanation-router">
      <p class="explanation">vue-router outlet</p>
    </div>
    <div v-if="getExplanation" class="explanation-component">
      <p class="explanation">item component</p>
    </div>
  </div>
</template>

<script>
import Gallery from "../components/Gallery.vue";

export default {
  name: "home",
  components: {
    Gallery
  },
  computed: {   
    getExplanation() {
      return this.$store.getters.getExplanation;
    }
  }
};
</script>
<style lang="scss">
.explanation-switch {
  position: absolute;
  top: 70px;
  left: 25px;
}
.explanation-text {
  padding-right: 10px;
}
.explanation-router {
  position: absolute;
  top: 80px;
  right: 25px;
}
.explanation-state {
  position: absolute;
  top: 55px;
  right: 10px;
  margin-bottom: 10px;
}
.explanation-component {
  position: absolute;
  top: 120px;
  right: 15px;
}
</style>
