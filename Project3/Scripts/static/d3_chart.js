 // Set up SVG dimensions
 var margin = { top: 20, right: 20, bottom: 50, left: 50 },
 width = 600 - margin.left - margin.right,
 height = 300 - margin.top - margin.bottom;

// Create SVG element
var svg = d3.select("#chart-container")
 .append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom)
 .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

 var chartTitle = svg.append("text")
    .attr("x", width / 2)
    .attr("y", -margin.top / 2) // Adjust this to move the title higher or lower
    .attr("text-anchor", "middle") // Center the text
    .style("font-size", "14px") // Adjust font size as needed
    .text("Average Income vs. Average Housing Prices");

// Set up scales
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// Set up color scale
var color = d3.scaleOrdinal(d3.schemeCategory10);

// Process the data
provinces.forEach(province => {
    groupedData[province].forEach(function(d) {
        d.ref_date = new Date(+d.ref_date, 0, 1); // Convert to number and assuming ref_date is the year
        d.value = +d.value;
    });
   });

   const avg_prices = avg_house_prices_data.map(x => {
    return { ref_date: new Date(x.date, 0, 1), value: +x.avg_price };
});
console.log(avg_prices);
console.log(groupedData);

// Set the domains of the scales
x.domain(d3.extent(income_data, function(d) { return d.ref_date; }));
y.domain([0, d3.max(avg_prices, function(d) { return d.value; })]);

// Create lines
var line = d3.line()
 .x(function(d) { return x(d.ref_date); })
 .y(function(d) { return y(d.value); });

provinces.forEach(province => {
 svg.append("path")
     .data([groupedData[province]])
     .attr("class", "line")
     .attr("d", line)
     .style("stroke", color(province))
     .style("fill", "none");
 // Add labels to the lines
 svg.append("text")
     .datum(groupedData[province][groupedData[province].length - 1])
     .attr("transform", function(d) {
         return "translate(" + x(d.ref_date) + "," + y(d.value) + ")";
     })
     .attr("x", 3)
     .attr("dy", "0.35em")
     .style("font", "10px sans-serif")
     .text(province);
});

svg.append("path")
  .data([avg_prices])
  .attr("class", "line")
  .attr("d", line)
  .style("stroke", color('province')) // You can set a specific color for avg_prices
  .style("fill", "none");

  // Add labels to the lines
 svg.append("text")
 .datum(avg_prices.length - 1)
 .attr("transform", function(d) {
     return "translate(" + x(d.ref_date) + "," + y(d.value) + ")";
 })
 .attr("x", 3)
 .attr("dy", "0.35em")
 .style("font", "10px sans-serif")
 .text('Average');
  
// Add x-axis
svg.append("g")
 .attr("transform", "translate(0," + height + ")")
 .call(d3.axisBottom(x));

// Add y-axis
svg.append("g")
 .call(d3.axisLeft(y));

// Add legend
var legend = svg.selectAll(".legend")
  .data(provinces.concat(["Avg house price"]))
  .enter().append("g")
  .attr("class", "legend")
  .attr("transform", function(d, i) {
    return "translate(0," + i * 20 + ")";
  });

legend.append("rect")
 .attr("x", width - 18)
 .attr("width", 18)
 .attr("height", 18)
 .style("fill", function(d) { return color(d); });

legend.append("text")
 .attr("x", width - 24)
 .attr("y", 9)
 .attr("dy", ".35em")
 .style("text-anchor", "end")
 .text(function(d) { return d; });