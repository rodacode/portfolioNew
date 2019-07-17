<template>
  <div class="content">
    <div class="name">
      <h1 class="title">Nicolas Hardmeier</h1>
      <h4 class="subtitle">Front-end Developer</h4>
    </div>
    <div class="social-links">
      <ul>
        <li>
          <a href="https://github.com/nicohardmeier">
            <i class="fa fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nicolas-h-0812baa9/">
            <i class="fa fa-linkedin fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
    <div v-if="getExplanation" class="explanation-div">
      <p class="explanation">header component</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    getExplanation() {
      return this.$store.getters.getExplanation;
    }
  }
};
</script>

<style lang="scss">
.social-links {
  li {
    display: inline-block;
    padding:0 5px;
  }
  i {
    color: #fff;
    font-size: 1.4rem;
    margin: 0 5px;
  }
}
.content {
  width: 100%;
  margin: -30px auto 0;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  .title {
    margin: 0;
    font-size: 16px;
  }
  .subtitle {
    margin: 0;
    font-size: 12px;
  }
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: inline-block;
  padding: 0 20px;
}

.explanation-div {
  position: absolute;
  top: -15px;
  right: 0px;
}
@media (min-width: 1024px) {
  .content {
    .title {
      margin: 0;
      font-size: 24px;
    }
    .subtitle {
      margin: 0;
      font-size: 16px;
    }
  }
}
</style>