const assert = require('assert');
const Rectangle = require('./');

describe('Rectangle', function () {

  it('should be a function', function () {
    assert.equal(typeof Rectangle, 'function');
  });

  it('should take four arguments', function () {
    assert.equal(Rectangle.length, 4);
  });

  it('should instantiate an instance', function () {
    var rect = new Rectangle(0, 0, 10, 10);
    assert.equal(typeof rect, 'object');
  });

  describe('instance', function () {

    beforeEach(function () {
      this.rect = new Rectangle(1, 2, 3, 4);
    });

    it('should have an "x" property based on the first argument', function () {
      assert(this.rect.x, 'Instance does not have "x" property');
      assert.equal(this.rect.x, 1);
    });

    it('should have an "y" property based on the first argument', function () {
      assert(this.rect.y, 'Instance does not have "y" property');
      assert.equal(this.rect.y, 2);
    });

    it('should have an "width" property based on the first argument', function () {
      assert(this.rect.width, 'Instance does not have "width" property');
      assert.equal(this.rect.width, 3);
    });

    it('should have an "height" property based on the first argument', function () {
      assert(this.rect.height, 'Instance does not have "height" property');
      assert.equal(this.rect.height, 4);
    });

  });

  describe('#perimeter', function () {

    it('should have a perimeter property', function () {
      var rect = new Rectangle(0, 0, 10, 10);
      assert.ok(rect.perimeter, 'Prototype does not have a perimeter method.');
    });

    it('should return the perimeter of the rectangle', function () {
      var rect = new Rectangle(0, 0, 10, 10);
      assert.equal(rect.perimeter, 40);
    });

  });

  describe('#area', function () {

    it('should have a area property', function () {
      var rect = new Rectangle(0, 0, 10, 10);
      assert.ok(rect.area, 'Prototype does not have a area method.');
    });

    it('should return the area of the rectangle', function () {
      var rect = new Rectangle(0, 0, 10, 10);
      assert.equal(rect.area, 100);
    });

  });

});
