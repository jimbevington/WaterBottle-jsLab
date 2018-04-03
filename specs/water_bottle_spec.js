// IMPORT REQUIRED FILES
var assert = require('assert');   // test object from Mocha
var WaterBottle = require('../water_bottle.js');
var Athlete = require('../athlete.js');
var bottle;
var athlete;


describe('Water Bottle', function(){  //  what we're testing

  beforeEach(function(){
    bottle = new WaterBottle();
  })

  it('should be empty at the start', function(){  // name for the test
    assert.strictEqual(bottle.volume, 0);
  })

  it('should go to 100 when filled', function(){
    bottle.fill();
    assert.strictEqual(bottle.volume, 100);
  })

  it('should go down by 10 when drank', function(){
    bottle.fill();
    bottle.drink();
    assert.strictEqual(bottle.volume, 90);
  });

  it('should go to 0 when emptied', function(){
    bottle.fill();
    bottle.empty();
    assert.strictEqual(bottle.volume, 0);
  })

  it('should not be able to go below 0', function(){
    bottle.fill();
    bottle.empty();
    bottle.drink();
    assert.strictEqual(bottle.volume, 0);
  })

  it('should not be able to go below 0 number 2', function(){
    bottle.volume = 9;
    bottle.drink();
    assert.strictEqual(bottle.volume, 0);
  })

});


describe('Athlete', function(){

  beforeEach(function(){
    athlete = new Athlete();
  })

  it('has a hydration attribute of 100', function(){
    // var athlete = new Athlete();
    assert.strictEqual(athlete.hydration, 100);
  })

  it('has distance of 0', function(){
    // var athlete = new Athlete();
    assert.strictEqual(athlete.distance, 0);
  })

  it('can run 10', function(){
    // var athlete = new Athlete();
    athlete.run(10);
    assert.strictEqual(athlete.distance, 10);
    assert.strictEqual(athlete.hydration, 90);
  })

  it('cant run when dehydrated', function(){
    // var athlete = new Athlete();
    athlete.hydration = 0;
    athlete.run(10);
    assert.strictEqual(athlete.distance, 0);
    assert.strictEqual(athlete.hydration, 0);
  })

  it('if hydration is > 0 but < than run amount', function(){
    // var athlete = new Athlete();
    athlete.hydration = 5;
    athlete.run(10);
    assert.strictEqual(athlete.hydration, 0);
    assert.strictEqual(athlete.distance, 5);
  })

  // it('can drink from WaterBottle', function(){
  //   var athlete = new Athlete();
  //   athlete.waterBottle.fill();
  //   athlete.drink();
  //   var waterBottle = athlete.waterBottle;
  //   assert.strictEqual(waterBottle.volume, 90);
  //   assert.strictEqual(athlete.hydration, 110);
  // })

  it('can drink from WaterBottle', function(){
    // var athlete = new Athlete();
    var waterBottle = new WaterBottle();
    waterBottle.fill();
    athlete.drink(waterBottle);
    assert.strictEqual(waterBottle.volume, 90);
    assert.strictEqual(athlete.hydration, 110);
  })

});

// Use Mocha's beforeEach() to create a new instance of WaterBottle and Athlete before each test.
