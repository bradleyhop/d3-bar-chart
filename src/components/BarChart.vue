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
      // choose element to put our svg element
      const svg = d3.select('#bar-chart')
        .append('svg')
        .attr('width', this.widthChart)
        .attr('height', this.heightChart);

      // setup y-axis (dollars in billions)
      const yScale = d3.scaleLinear()
        .domain([
          0,
          d3.max(this.gdpData, (d) => d[1]),
        ])
        .range([
          this.heightChart - this.padding,
          this.padding,
        ]);

      // setup x-axis (year)
      const xScale = d3.scaleTime()
        .domain([
          d3.min(this.gdpData, (d) => new Date(d[0])),
          d3.max(this.gdpData, (d) => new Date(d[0])),
        ])
        .range([
          this.padding,
          this.widthChart - this.padding,
        ]);

      // d3 method for drawing x- & y-axis
      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale);

      // function declaration for tooltip div
      const divTool = d3.select('#bar-chart')
        .append('div')
        .attr('class', 'tooltip')
        .attr('id', 'tooltip')
        .style('opacity', 0);

      // compute and draw bars for data
      svg.selectAll('rect')
        .data(this.gdpData)
        .enter()
        .append('rect')
        .attr('x', (d) => xScale(new Date(d[0])))
        .attr('y', (d) => yScale(d[1]))
        .attr('width', this.widthChart / this.gdpData.length)
        .attr('height', (d) => (this.heightChart - this.padding) - yScale(d[1]))
        .attr('class', 'bar') // class required for project
        .attr('data-date', (d) => d[0]) // properties required for project
        .attr('data-gdp', (d) => d[1]) // properties required for project
        // hover to show value with tooltip as defined in divTool above
        .on('mouseover', (event, d) => {
          divTool
            .attr('data-date', d[0])
            .html(`<p>${d[0]},\n$${d[1]} Billion</p>`)
            .style('opacity', '1')
            .style('display', 'block')
            .style('top', `${event.pageY - 50}px`)
            .style('left', `${event.pageX + 4}px`);
        })
        .on('mouseout', () => {
          divTool
            .style('opacity', 0)
            .style('display', 'none');
        });

      // draw x-axis
      svg.append('g')
        .attr('transform', `translate(0, ${this.heightChart - this.padding})`)
        .attr('id', 'x-axis') // id required for project
        .call(xAxis);

      // draw y-axis
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
      UNITED STATES GDP 1947 - 2015
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
  width: 1050px;
  height: 550px;
  margin: auto;
  background-color: $chart-background;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.chart-title {
  padding-top: 1rem;
  margin-bottom: 0;
  color: $text-gray;
}

.bar-chart {
  width: 1000px;
  height: 500px;
  margin: auto;
}

// svg rect
.bar {
  fill: $bar-fill;

  &:hover {
    fill: $mouseover;
  }
}

// axises
.tick {
  color: $text-gray;
}

.tooltip {
  position: absolute;
  width: 7rem;
  height: 3.5rem;
  font: 12px sans-serif;
  color: #fff;
  text-align: center;
  background: $mouseover;
  border-style: none;
  border-radius: 8px;
}
</style>
