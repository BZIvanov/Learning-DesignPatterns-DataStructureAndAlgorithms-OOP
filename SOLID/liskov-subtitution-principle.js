// we know that every square is rectangle, but not every rectangle is square
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function addOneToWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

// the issue here is, that if we replace/substitute Rectangle with Square, we get incorrect results
// in the above function we increased the width, but because the square is of same width and height now we get incorrect result
const rectangle = new Rectangle(5, 5);
const square = new Square(5, 5);

addOneToWidth(rectangle);
addOneToWidth(square);

console.log(rectangle.getArea());
console.log(square.getArea());
