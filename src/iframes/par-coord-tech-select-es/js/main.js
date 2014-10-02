
// quantitative color scale
var parcoords;
// load csv file and create the chart
d3.csv('data/landing-page-software-alternatives.csv', function(data) {
    var d3_categoryAB=['#00ADB5','#FF636E','#71B862','#8000C1','#FFE263','#655A98','#FF7600','#78FF63'];
    d3.scale.categoryAB = function() {
        return d3.scale.ordinal().range(d3_categoryAB);
    };
    var colorgen = d3.scale.categoryAB();
    console.log("colores "+colorgen(0));
    var colors = {};
    data.map(function(data) { return data.Alternativa; }).forEach(function(d,i){
        colors[d] = colorgen(i);
    });

    var types={
        "Alternativa":"string",
        "Precio (USD/m)":"price",
        "Rank Alexa":"price",
        "Viral":"quality",
        "Pruebas A/B":"quality",
        "Constructor":"quality",
        "Estadisticas":"quality"
    };
    var color = function(d) { return colors[d.Alternativa]; };

    parcoords = d3.parcoords()("#example")
    .color(color);
    parcoords
        .margin({ top: 24, right: 0, bottom: 22, left: 42 })
        .alpha(1);

    parcoords.dimensions(["Alternativa","Precio (USD/m)","Rank Alexa","Viral","Pruebas A/B","Constructor","Estadisticas"]);

    parcoords
        .data(data)
      .types(types)
        .render()
        //.reorderable()
        .brushable();
// Prefinery,99,613836,Poor,Fair,Bad,Good


});

d3.select('#btnReset').on('click', function() {parcoords.brushReset();})
