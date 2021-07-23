function Shape() {}

Shape.prototype.shapesPrint = function () {
  console.log('I am shape');
};

function Square(width, height) {
  this.width = width;
  this.height = height;
}

// with this line we will inherit from the Shape's prototype, not the base Object
Square.prototype = Object.create(Shape.prototype);
// when we reset the prototype we should also reset the constructor
Square.prototype.constructor = Square;

Square.prototype.squaresPrint = function () {
  console.log('I am square');
};

const shape = new Shape();
const square = new Square(3, 4);

square.shapesPrint();
square.squaresPrint();
