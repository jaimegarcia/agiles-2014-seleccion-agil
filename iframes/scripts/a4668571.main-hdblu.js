function defaultCumulativeLineChartConfig(a,b,c,d){var e={top:20,right:40,bottom:40,left:80};nv.addGraph(function(){var f=nv.models.lineChart().useInteractiveGuideline(!0).x(function(a){return a[0]}).y(function(a){return a[1]}).color(d3.scale.categoryAB().range()).transitionDuration(300).clipVoronoi(!1),g=function(a){return console.log("date "+moment(a).format("YYYY-MMM")),moment(a).format("YYYY-MMM")};return f.xAxis.axisLabel(c).tickValues(b[0].values.map(function(a){return a[0]})).tickFormat(g),f.yAxis.tickFormat(d3.format("%")),f.margin(e),f.yAxis.axisLabel(d),d3.select("#"+a+" svg").datum(b).call(f),nv.utils.windowResize(f.update),f.dispatch.on("stateChange",function(a){nv.log("New State:",JSON.stringify(a))}),f})}function marketShareData(){return[{key:"HD DVD",values:[[11491632e5,.7],[11517552e5,.67],[11544336e5,.72],[1157112e6,.72],[1159704e6,.71],[11623824e5,.63],[11649744e5,.52],[11676528e5,.33],[11703312e5,.32],[11727504e5,.26],[11754288e5,.38],[11780208e5,.36]]},{key:"Blu-ray",values:[[11491632e5,.3],[11517552e5,.33],[11544336e5,.28],[1157112e6,.28],[1159704e6,.29],[11623824e5,.37],[11649744e5,.48],[11676528e5,.67],[11703312e5,.68],[11727504e5,.74],[11754288e5,.62],[11780208e5,.64]]}]}var d3CategoryAB=["#00ADB5","#FF636E","#71B862","#479537","#FF636E","#32A620","#FF7600","#C42631"];d3.scale.categoryAB=function(){return d3.scale.ordinal().range(d3CategoryAB)},defaultCumulativeLineChartConfig("hdbluChart",marketShareData(),"Fecha","Market Share");