<script>
import * as d3 from 'd3';

export default {
  name: 'BarChart',

  data() {
    return {
      gdpData: undefined, // placeholder for fetch'ed gdp data
      widthChart: 1000, // width of svg area
      heightChart: 500, // height of svg area
      padding: 50, // padding of chart
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

      // setup y-axis (dollars in billions)
      const yScale = d3.scaleLinear()
        .domain([
          d3.min(this.gdpData, (d) => d[1]),
          d3.max(this.gdpData, (d) => d[1]),
        ])
        .range([this.heightChart - this.padding, this.padding]);

      // setup x-axis (year)
      const xScale = d3.scaleLinear()
        .domain([
          d3.min(this.gdpData, (d) => d[0]),
          d3.max(this.gdpData, (d) => d[1]),
        ])
        .range([this.widthChart - this.padding, this.padding]);

      // d3 method for drawing bottom axis
      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale);

      // compute and draw bars for data
      svg.selectAll('rect')
        .data(this.gdpData)
        .enter()
        .append('rect')
        .attr('x', (d, i) => this.padding + (i * 3)) // make just a little bigger than x value for margin
        .attr('y', (d) => this.heightChart - (d[1] / 41) - this.padding) // divide to fit large values, container
        .attr('height', (d) => d[1])
        .attr('width', 2)
        .attr('class', 'bar') // class required for project
        // hover to show value with tootip
        .append('title')
        .attr('id', 'tooltip') // id required for project
        .text((d) => `${d[0]},\n $${d[1]} Billion`);

      // draw x-axis
      svg.append('g')
        .attr('transform', `translate(0, ${this.heightChart - this.padding})`)
        .attr('id', 'x-axis') // id required for project
        .call(xAxis);

      svg.append('g')
        .attr('transform', `translate(${this.padding}, 0)`)
        .attr('id', 'y-axis') // id required for project
        .call(yAxis);
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
  width: 1000px;
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
  width: 900px;
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
