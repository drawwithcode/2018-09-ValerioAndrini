var myLoc;
var myMap;
var canvas;

var duomoLat = 45.4640271;
var duomoLon = 9.1911473;

var petraLat = 30.31983;
var petraLon = 35.47416;

var colosseoLat = 41.890251;
var colosseoLon = 12.492373;

var muraLat = 39.9075;
var muraLon = 116.39723;

var chichenLat = 20.6666700;
var chichenLon = -88.5666700;

var machuLat = -13.158330;
var machuLon = -72.5313900;

var tajLat = 27.174921;
var tajLon = 78.042115;

var cristoLat = -22.7052;
var cristoLon = -45.5493;

var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoidmFsZXJpb2FuZHJpbmkiLCJhIjoiY2pvcXo2NWtsMGE3YTNqcHRuc215MWhydyJ9.wCaa1JvAjgydJhCOWtwNDg');

var options = {
  lat : duomoLat,
  lng : duomoLon,
  zoom: 1,
  style: 'mapbox://styles/valerioandrini/cjox2h4841rwr2snhzawaqbpq',
  pitch: 50
}

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
}

function setup() {
  // put setup code here
  canvas = createCanvas(windowWidth, windowHeight);

  options.lat = myLoc.latitude;
  options.lng = myLoc.longitude;

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  fill('slategrey');
  noStroke();

  var distance1 = calcGeoDistance(myLoc.latitude, myLoc.longitude, cristoLat, cristoLon, "km");
  console.log(distance1);
  text('distance1',width/2,50);
  var distance2 = calcGeoDistance(myLoc.latitude, myLoc.longitude, petraLat, petraLon, "km");
  console.log(distance2);
  var distance3 = calcGeoDistance(myLoc.latitude, myLoc.longitude, colosseoLat, colosseoLon, "km");
  console.log(distance3);
  var distance4 = calcGeoDistance(myLoc.latitude, myLoc.longitude, muraLat, muraLon, "km");
  console.log(distance4);
  var distance5 = calcGeoDistance(myLoc.latitude, myLoc.longitude, chichenLat, chichenLon, "km");
  console.log(distance5);
  var distance6 = calcGeoDistance(myLoc.latitude, myLoc.longitude, machuLat, machuLon, "km");
  console.log(distance6);
  var distance7 = calcGeoDistance(myLoc.latitude, myLoc.longitude, tajLat, tajLon, "km");
  console.log(distance7);

}

function draw() {
  // put drawing code here
  clear();

  fill('black');
  textSize(22);
  text('Here are located the new seven wonders of the world', 50, 100);

  fill('blue');
  textSize(18);
  var point1 = myMap.latLngToPixel(cristoLat, cristoLon);
  ellipse(point1.x, point1.y, 20);
  var point2 = myMap.latLngToPixel(petraLat, petraLon);
  ellipse(point2.x, point2.y, 20);
  var point3 = myMap.latLngToPixel(colosseoLat, colosseoLon);
  ellipse(point3.x, point3.y, 20);
  var point4 = myMap.latLngToPixel(muraLat, muraLon);
  ellipse(point4.x, point4.y, 20);
  var point5 = myMap.latLngToPixel(chichenLat, chichenLon);
  ellipse(point5.x, point5.y, 20);
  var point6 = myMap.latLngToPixel(machuLat, machuLon);
  ellipse(point6.x, point6.y, 20);
  var point7 = myMap.latLngToPixel(tajLat, tajLon);
  ellipse(point7.x, point7.y, 20);

  fill('black');
  text('Cristo Redentore', point1.x, point1.y - 12);
  text('Petra', point2.x, point2.y - 12);
  text('Colosseo', point3.x, point3.y - 12);
  text('Grande muraglia cinese', point4.x, point4.y - 12);
  text('Chichen Itza', point5.x, point5.y - 12);
  text('Machu Picchu', point6.x, point6.y - 12);
  text('Taj Mahal', point7.x, point7.y - 12);
}
