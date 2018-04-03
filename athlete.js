var WaterBottle = require('./water_bottle.js');

var Athlete = function(waterBottle){
  this.hydration = 100;
  this.distance = 0;
};

Athlete.prototype.run = function (amount) {
  if (this.hydration >= amount){
    this.hydration -= amount;
    this.distance += amount;
  } else if (this.hydration > 0 && this.hydration < amount){
    this.distance += this.hydration;
    this.hydration = 0;
  } else {
    "Athlete dehydrated. Can't move."
  }
};



Athlete.prototype.drink = function (waterBottle) {
  this.hydration += waterBottle.drink();
};


module.exports = Athlete;
