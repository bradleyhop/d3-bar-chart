<script>
// import * as d3 from 'd3';

export default {
  name: 'BarChart',

  data() {
    return {
      gdpData: undefined, // placeholder for fetch'ed gdp data
      widthChart: 700,
      heightChart: 500,
      paddingChart: 50,
    };
  },

  mounted() {
    fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
      .then((response) => response.json())
      .then((data) => {
        this.gdpData = data;
        console.log(this.gdpData.data);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<template>
  <div class="container-bar-chart">
    <h2 id="title" class="chart-title">
      United States GDP 1947 - 2015
    </h2>
    <div id="bar-chart" class="bar-chart">
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-bar-chart {
  background-color: lightblue;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin: auto;
  width: 750px;
  height: 600px;
}

.chart-title {
  color: #fff;
  font-family: Helvetica, Arial, sans-serif;
  padding-top: 1rem;
  text-shadow: 1px 1px 1px #000;
}

.bar-chart {
  border: 1px solid red;
  width: 700px;
  height: 500px;
  margin: auto;
}
</style>
