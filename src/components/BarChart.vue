<script>
import * as d3 from 'd3';

export default {
  name: 'BarChart',

  data() {
    return {
      gdpData: undefined, // placeholder for fetch'ed gdp data
      widthChart: 700,
      heightChart: 500,
      paddingChart: 50,
      dataTest: [21, 51, 61, 18, 12, 31],
    };
  },

  mounted() {
    fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
      .then((response) => response.json())
      .then((data) => {
        this.gdpData = data;
        console.log(this.gdpData.data);
      })
      .then(this.init())
      .catch((error) => console.log(error));
  },

  methods: {
    init() {
      d3.select('#bar-chart')
        .selectAll('div')
        .data(this.dataTest)
        .enter()
        .append('svg')
        .attr('class', 'bar')
        .attr('height', (d) => d * 5);
    },

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

<style lang="scss">
/*
 * NB: Do not scope this component's style! D3 won't be able to see it!!!
 */

.container-bar-chart {
  width: 750px;
  height: 600px;
  margin: auto;
  background-color: lightblue;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.chart-title {
  padding-top: 1rem;
  font-family: Helvetica, Arial, sans-serif;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
}

.bar-chart {
  width: 700px;
  height: 500px;
  margin: auto;
  border: 1px solid red;
}

.bar {
  display: inline-block;
  width: 20px;
  margin: 2px;
  background-color: #fff;
}
</style>
