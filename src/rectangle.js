class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get perimeter() {
    return (this.width * 2) + (this.height * 2);
  };

  get area() {
    return this.width * this.height;
  };
}

module.exports = Rectangle;
