
//create a scatter plot that represents each state with circle elements

//read in data from data.csv
//include state abbreviation sin circles
//create and situate your axes and labels to the left & bottom of chart




    //clear chart is there is one already there
    //var svgArea = d3.select("svg");
    //if(!svgArea.empty()){
        //svgArea.remove();
    //}
    //set up svg dimensions
    var svgWidth=960;
    var svgHeight=500;
    var margin= {top: 20, right: 20, bottom: 20, left:20};
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;
    //svg
    var svg = d3.select("#scatter")
        .append("svg")
        .attr("height", svgHeight)
        .attr("width", svgWidth)

    var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

//import data
d3.csv("./data/data.csv").then(function(data) {
    //parse data
    data.forEach(function(data){
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;
    });

    //create scale functions
    var xLinearScale = d3.scaleLinear()
        .domain([d3.max(data, d=> d.healthcare)])
        .range([0, width]);
        

    var yLinearScale = d3.scaleLinear()
        .domain([d3.max(data, d=> d.poverty)])
        .range([height, 0]);

    //create axis functions
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis= d3.axisLeft(yLinearScale);

    //append axes
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);
    chartGroup.append("g")
        .call(leftAxis);
        
    //create cicles
    var circlesGroup = chartGroup.append("g")
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.healthcare))
        .attr("cy", d => yLinearScale(d.poverty))
        .attr("r", "10")
        .attr("fill", "blue")
        .attr("opacity", "0.5");

    //axes labels
    chartGroup.append("g")
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text(d=d.abbr)
        .attr("x", d=> xLinearScale(d.healthcare))
        .attr("y", d=> yLinearScale(d.poverty))

    //tooltip
    //var tooltip = d3.tip()
    //.attr("class", "tooltip")
    //.offset([0,0])
    //.html(function(d))

    //chartGroup.call(tooltip);

    //circles.on("click")
    }).catch(function(error) {
        console.log(error);
    });

