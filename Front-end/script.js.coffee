$(document).ready -> 
  container = $('#container')
  $.ajax
    url: 'http://localhost:80'
    method: 'get'
    dataType: 'jsonp'
    jsonpCallback: 'matt'
    success: (data) ->
      svg = d3.select('div#chartContainer svg')
      height = 500
      # debugger
      scaler = (height*.95)/_.max(data)
      # debugger
      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr("width", 125)
        .attr("x", (value, i) -> i*150 + 100)  
        .attr("y", height)
        .attr("height", 0)
        .style("fill", "red")
        .transition()
        .duration(3000)
        .attr("y", (value) -> height - value*scaler)
        .attr("height", (value) -> value*scaler)
            
  