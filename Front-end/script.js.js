// Generated by CoffeeScript 1.6.2
(function() {
  $(document).ready(function() {
    var container;

    container = $('#container');
    return $.ajax({
      url: 'http://localhost:80',
      method: 'get',
      dataType: 'jsonp',
      jsonpCallback: 'matt',
      success: function(data) {
        var height, scaler, svg;

        svg = d3.select('div#chartContainer svg');
        height = 500;
        scaler = (height * .95) / _.max(data);
        return svg.selectAll('rect').data(data).enter().append('rect').attr("width", 125).attr("x", function(value, i) {
          return i * 150 + 100;
        }).attr("y", height).attr("height", 0).style("fill", "red").transition().duration(3000).attr("y", function(value) {
          return height - value * scaler;
        }).attr("height", function(value) {
          return value * scaler;
        });
      }
    });
  });

}).call(this);