// Your D3.js script goes here
var margin = { top: 20, right: 20, bottom: 30, left: 50 },
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// Create SVG element
var svg = d3.select("#chart-container")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Set up scales
var x = d3.scaleBand().range([0, width]).padding(0.1);
var y = d3.scaleLinear().range([height, 0]);

// Define color
var color = "steelblue";

// Process the data
mort_value_data.forEach(function(d) {
    d.value = +d.value;
});

// Set the domains of the scales
x.domain(mort_value_data.map(function(d) { return d.year; }));
y.domain([0, d3.max(mort_value_data, function(d) { return d.value; })]);

// Create bars
svg.selectAll(".bar")
    .data(mort_value_data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.year); })
    .attr("width", x.bandwidth())
    .attr("y", function(d) { return y(d.value); })
    .attr("height", function(d) { return height - y(d.value); })
    .attr("fill", color);

// Add x-axis
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

// Add y-axis
svg.append("g")
    .call(d3.axisLeft(y));



    var chartTitle = svg.append("text")
    .attr("x", width / 2)
    .attr("y", -margin.top / 2) // Adjust this to move the title higher or lower
    .attr("text-anchor", "middle") // Center the text
    .style("font-size", "14px") // Adjust font size as needed
    .text("Average Mortgage Value per Province");


    
