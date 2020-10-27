<script>
// import * as d3 from 'd3';

export default {
  name: 'BarChart',

  mounted() {
    fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json');
  },
};
</script>

<template>
  <p id="title" class="bar-chart-box">
    Hello, world!
  </p>
</template>

<style scoped lang="scss">
.bar-chart-box {
  background-color: lightgrey;
  margin: auto;
  width: 80vw;
  height: 70vh;
}

.chart-title {
  color: #000;
}
</style>
