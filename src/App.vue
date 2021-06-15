<template>
  <div
    class="content"
    role="main"
   >
    <h1 class="project-title">Data Visualization Projects - Visualize Data with a Bar Chart</h1>
    <BarChart />
  </div>

  <footer>
    <Footer />
  </footer>
</template>

<script>
import BarChart from './components/BarChart.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    BarChart,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;

  &::before {
    box-sizing: border-box;
  }

  &::after {
    box-sizing: border-box;
  }
}

html {
  background-color: #fff;
}

#app {
  display: flex; // boilerplate to keep footer down below
  height: 100vh; // needed to stick the footer to bottom
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: $text-gray;
  text-align: center;
  flex-direction: column; // footer at the bottom ;)
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex: 1 0 auto; // grow page space to content
}

.project-title {
  margin: 1rem 0 2rem 0;
}

footer {
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their
  content's default minimum size. */
  flex-shrink: 0;
}
</style>
