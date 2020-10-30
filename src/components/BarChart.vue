<script>
import * as d3 from 'd3';

export default {
  name: 'BarChart',

  data() {
    return {
      gdpData: undefined, // placeholder for fetch'ed gdp data
      widthChart: 1100, // width of svg area
      heightChart: 500, // height of svg area
      dataTest: [21, 51, 61, 18, 12, 31, 34, 22, 5],
    };
  },

  mounted() {
    fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
      .then((response) => response.json())
      .then((data) => {
        this.gdpData = data.data;
      })
      .then(() => this.init())
      .catch((error) => console.log(error));
  },

  methods: {
    // called by mounted() after async data is fetch'ed
    init() {
      const svg = d3.select('#bar-chart')
        .append('svg')
        .attr('width', this.widthChart)
        .attr('height', this.heightChart);

      svg.selectAll('rect')
        .data(this.gdpData)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 4) // make just a little bigger than x value for margin
        .attr('y', (d) => this.heightChart - (d[1] / 37)) // divide to fit large values
        .attr('height', (d) => d[1])
        .attr('width', 3)
        .attr('class', 'bar') // class required for project
        // hover to show value with tootip
        .append('title')
        .attr('id', 'tooltip') // id required for project
        .text((d) => `${d[0]},\n $${d[1]} Billion`);
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
  width: 1200px;
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
  width: 1100px;
  height: 500px;
  margin: auto;
  // border: 1px solid red;
  text-align: left; // pushes bars/graph to left instead of inheriting center
}

.bar {
  fill: #fff; // background-color for svg

  &:hover {
    fill: #000;
  }
}
</style>
