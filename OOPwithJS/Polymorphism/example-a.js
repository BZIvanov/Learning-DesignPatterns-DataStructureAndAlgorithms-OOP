function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

function Square(width, height) {
  this.width = width;
  this.height = height;
}
extend(Shape, Square);

Square.prototype.print = function () {
  console.log('I am a square');
};

function Circle(radius) {
  this.radius = radius;
}
extend(Shape, Circle);

Circle.prototype.print = function () {
  console.log('I am a circle');
};

const shapes = [new Square(2, 3), new Circle(5)];

for (const shape of shapes) {
  shape.print();
}
