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

  &::before {
    box-sizing: border-box;
  }

  &::after {
    box-sizing: border-box;
  }
}

#app {
  display: flex; // boilerplate to keep footer down below
  height: 100vh; // needed to stick the footer to bottom
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  color: $text-gray;
  text-align: center;
  flex-direction: column; // footer at the bottom ;)
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex: 1 0 auto; // grow page space to content
  margin-bottom: 2rem;
}

.project-title {
  margin-bottom: 2rem;
}

footer {
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their
  content's default minimum size. */
  flex-shrink: 0;
}
</style>
