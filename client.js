var Star = function(name, radius, constellation) {
  this.name = name;
  this.radius = radius;
  this.constellation = constellation;

  this.diameter = function() {
    return radius * 2;
  }

  this.circumference = function() {
    return Math.PI * this.diameter;
  }
}
var antares = new Star('Antares', 883, 'Scorpius');
var betelgeuse = new Star('Betelgeuse', 821.3, 'Orion');
var canopus = new Star('Fomalhaut', 49.7, 'Piscis Austrinus');
console.log(antares.diameter());
antares.changeRadius(5);
console.log(antares.diameter());
console.log(canopus);
