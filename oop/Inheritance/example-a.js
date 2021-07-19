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

Square.prototype.squaresPrint = function () {
  console.log('I am square');
};

const shape = new Shape();
const square = new Square(3, 4);

square.shapesPrint();
square.squaresPrint();
