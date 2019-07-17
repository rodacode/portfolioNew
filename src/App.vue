<template>
  <div id="app" class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <div v-if="getExplanation" class="explanation-sidenav">
        <p class="explanation">material sidenav</p>
      </div>
      <Header/>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Works</span>
      </md-toolbar>
      <div class="menu">
        <div class="menu-item-container">
          <span class="menu-item">
            <i class="devicon-code-plain"></i>All
          </span>
          <md-switch v-model="$store.state.selectedTag" value="all" class="md-primary"></md-switch>
        </div>
        <div class="menu-item-container">
          <span class="menu-item">
            <i class="devicon-vuejs-plain"></i>Vue
          </span>
          <md-switch v-model="$store.state.selectedTag" value="vue" class="md-primary"></md-switch>
        </div>
        <div class="menu-item-container">
          <span class="menu-item">
            <i class="devicon-angularjs-plain"></i>Angular
          </span>
          <md-switch v-model="$store.state.selectedTag" value="angular" class="md-primary"></md-switch>
        </div>
        <div class="menu-item-container">
          <span class="menu-item">
            <i class="devicon-javascript-plain"></i>Javascript
          </span>
          <md-switch v-model="$store.state.selectedTag" value="javascript" class="md-primary"></md-switch>
        </div>
        <div class="menu-item-container">
          <span class="menu-item">
            <i class="fa fa-shopping-cart"></i>Prestashop
          </span>
          <md-switch v-model="$store.state.selectedTag" value="prestashop" class="md-primary"></md-switch>
        </div>
        <div class="menu-item-container">
          <span class="menu-item">
            <i class="fa fa-male"></i>About
          </span>
          <md-switch v-model="$store.state.selectedTag" value="about" class="md-primary"></md-switch>
        </div>
        <div v-if="getExplanation" class="explanation-menu">
          <p class="explanation">material switches & menu</p>
        </div>
      </div>
    </md-drawer>
    <md-content>
      <router-view/>
    </md-content>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  data: () => ({
    showNavigation: false,
    showSidepanel: false
  }),
  components: {
    Header
  },
  computed: {
    getExplanation() {
      return this.$store.getters.getExplanation;
    },
    getSelectedTag() {
      return this.$store.getters.getSelectedTag;
    }
  }
};
</script>
<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    primary: #257aa6,
    // The primary color of your brand
      accent: #00bdaa // The secondary color of your brand
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme

body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.page-container {
  min-height: 300px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, 0.12);
}
.md-drawer {
  background: #fff;
  width: 200px;
  max-width: 200px !important;
}
.md-title{
    margin: 0 auto!important;
}
.md-content {
  padding: 16px;
  height: 100%;
  overflow-y: auto;
}
.menu-item {
  min-width: 138px;
  margin: 10px 0;
  font-size: 1.1rem;
}

.menu-item-container {
  display: flex;
  justify-content: space-around;
}
li {
  display: list-item;
}

.vuejs,
.devicon-vuejs-plain {
  color: #47b784;
}

.devicon-angularjs-plain {
  color: #da0b37;
}

.devicon-javascript-plain {
  color: #f4dc38;
}

.fa-shopping-cart {
  color: #72259e;
}

.fa-male {
  color: #0903b2;
}

.works-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.explanation {
  font-family: "Covered By Your Grace", cursive;
  font-size: 14px;
}
.explanation::before {
  background-image: url("./assets/arrow.png");
  background-size: 30px 30px;
  display: inline-block;
  width: 30px;
  height: 30px;
  content: "";
  vertical-align: -95%;
  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
  animation-name: example;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.explanation-sidenav {
  position: absolute;
  top: -15px;
  left: 35px;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes example {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}

/* Standard syntax */
@keyframes example {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}
@media (min-width: 30rem) {
  .md-drawer {
    background: #fff;
    width: 300px;
    max-width: 300px !important;
  }
  .menu {
    display: block;
    margin: 40px 0;
  }
  .mobile-menu {
    display: none;
  }
  .mobile-menu-icon {
    display: none;
  }
  .container {
    flex-direction: row;
  }
  .works-container {
    width: 80vw;
  }
}

@media (min-width: 48rem) {
  .menu {
    display: block;
    margin: 40px 0;
    width: 20vw;
  }
  .mobile-menu-icon {
    display: none;
  }
  .menu-item {
    min-width: 138px;
    margin: 14px 20px;
    font-size: 1.2rem;
  }

  .container {
    flex-direction: row;
    width: 100%;
    margin-left: 28px;
  }
  .works-container {
    width: 79vw;
  }
  .explanation {
    font-size: 16px;
  }
  .explanation-sidenav {
    position: absolute;
    top: 0px;
    left: 45px;
  }
}
</style>
