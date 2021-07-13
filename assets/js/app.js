
//set up svg dimensions
var svgWidth=960;
var svgHeight=500;
var margin= {top: 20, right: 20, bottom: 20, left:20};
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;
//label area?
//create svg wrapper
var svg = d3.select("#scatter")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .attr("class", "chart");

//import data
d3.csv("./assets/data/data.csv").then(function(data) {
    //parse data
    data.forEach(function(data){
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;

    //set up axes
    var xLinearScale=d3.scaleLinear()
        .domain([d3.min(data.poverty), d3.max(data.poverty)])
        .range([0, width]);
    
    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(data.healthcare), d3.max(data.healthcare)])
        .range([height, 0]);
    
    var xAxis = d3.axisBottom(xLinearScale);
    var yAxis = d3.axisLeft(yLinearScale);

    var chartGroup= svg.append("g")
        //.attr("transform", `translate(${margin.left}, ${margin.top})`)
        //.attr("transform", `translate(0, ${height})`)
        .call(xAxis)
        .call(yAxis);







    });

    
    
    
    
    
    //create axis functions
    //var bottomAxis = d3.axisBottom(xLinearScale);
    //var leftAxis= d3.axisLeft(yLinearScale);

    //append axes
    //chartGroup.append("g")
        //.attr("transform", `translate(0, ${height})`)
        //.call(bottomAxis);
    //chartGroup.append("g")
        //.call(leftAxis);
        
    //create cicles
    //var circlesGroup = chartGroup.append("g")
        //.selectAll("circle")
        //.data(data)
        //.enter()
        //.append("circle")
        //.attr("cx", d => xLinearScale(d.healthcare))
        //.attr("cy", d => yLinearScale(d.poverty))
        //.attr("r", "10")
        //.attr("fill", "blue")
        //.attr("opacity", "0.5");

    //axes labels
    //chartGroup.append("g")
        //.selectAll("text")
        //.data(data)
        //.enter()
        //.append("text")
        //.text(d=>d.abbr)
        //.attr("x", d=> xLinearScale)
        //.attr("y", d=> yLinearScale)


    }).catch(function(error) {
        console.log(error);
    });

