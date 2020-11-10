<template>
  <h1 class="project-title">Data Visualization Projects - Visualize Data with a Bar Chart</h1>
  <BarChart />
</template>

<script>
import BarChart from './components/BarChart.vue';

export default {
  name: 'App',
  components: {
    BarChart,
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
  color: $text-gray;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 2rem;
  text-align: center;
}

.project-title {
  margin-bottom: 2rem;
}
</style>
