<template>
  <h1 id="project-title">Data Visualization Projects - Visualize Data with a Bar Chart</h1>
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
body {
  background-color: lightblue;
}

#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
