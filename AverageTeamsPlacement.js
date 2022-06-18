    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 30, bottom: 30, left: 40},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
    
        var svg2 = d3.select("#my_dataviz2")
        .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
      
      // get the data
          d3.csv("priceV3.csv", function(data1) {
              var svg = d3.select("#my_dataviz")
          .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
          .append("g")
              .attr("transform",
                  "translate(" + margin.left + "," + margin.top + ")");
  
              // X axis
              var x = d3.scaleBand()
              .range([ 0, width ])
              .domain(data1.map(function(d) { return d.team; }))
              .padding(0.2);
              svg.append("g")
              .attr("transform", "translate(0," + height + ")")
              .call(d3.axisBottom(x))
  
              // Add Y axis
              var y = d3.scaleLinear()
              .domain([0, 20])
              .range([ height, 0]);
              svg.append("g")
              .attr("class", "myYaxis")
              .call(d3.axisLeft(y));
  
              // A function that create / update the plot for a given variable:
              function update(data) {
  
              var u = svg.selectAll("rect")
                  .data(data)
  
              u
                  .enter()
                  .append("rect")
                  .merge(u)
                  .transition()
                  .duration(1000)
                  .attr("x", function(d) { return x(d.team); })
                  .attr("y", function(d) { return y(d.place); })
                  .attr("width", x.bandwidth())
                  .attr("height", function(d) { return height - y(d.place); })
                  .attr("fill", "#69b3a2")
              }
  
              // Initialize the plot with the first dataset
              update(data1)
          });
     