
//create a scatter plot that represents each state with circle elements

//read in data from data.csv
//include state abbreviation sin circles
//create and situate your axes and labels to the left & bottom of chart

//set up svg dimensions
var svgWidth=960;
var svgHeight=500;
var margin= {top: 20, right: 20, bottom: 20, left:20};
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;
//svg
var svg = d3.select(".scatter")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth)

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

//import data
d3.csv("data.csv").then(function(data) {
    data.forEach(function(data))

});