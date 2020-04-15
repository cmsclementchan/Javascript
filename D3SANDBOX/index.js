
d3.select('h1').style('color','blue')
.attr('id','heading')
.text('Updated hello');


d3.select("body").style("background-color", "grey");

d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42,99])
  .enter().append("p")
    .text(function(d) { return "I’m number " + d + "!"; });