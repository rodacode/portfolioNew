<template>
  <div class="card-expansion">
    <md-card>
      <md-card-media>
        <img class="img-responsive" v-bind:src="imgSrc">
        <md-card-actions md-alignment="space-between">
          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
          <div class="md-title">{{title}}</div>
        </md-card-actions>
      </md-card-media>

      <md-card-expand>
        <md-card-expand-content>
          <md-card-content>
            <p>{{text}}</p>
            <div>
              <h4>Stack:</h4>
              <ul>
                <li v-for="tech in stack" :key="tech.id">
                  <i v-bind:class="tech.icon"></i>
                  {{tech.name}}
                </li>
              </ul>
              <div>
                <p v-if="$store.state.selectedTag != 'about'">
                  <a v-bind:href="url" >Visit site</a>
                </p>
              </div>
            </div>
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>
<script>
export default {
  name: "Item",
  props: ["title", "imgSrc", "url", "tag", "stack", "text"],
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  },
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card-expansion {
  margin: 20px;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-card-media + .md-card-header {
  padding: 0;
}
.md-card {
  .md-title {
    margin-top: -24px;
    text-align: center;
    margin: 0 auto;
  }
}
@media (min-width: 30rem) {
}
</style>