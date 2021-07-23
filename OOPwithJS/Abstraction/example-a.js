function Square(width, height) {
  // this variables are public and we can access them from outside
  this.width = width;
  this.height = height;

  // this variable is internal for the Square and we don't have access to it outside
  const id = Math.floor(Math.random() * 10);

  // this function is internal for the Square and we don't have access to it outside
  calcArea = () => {
    return this.width * this.height;
  };

  // this method is public and we can access it outside to print info for our square
  this.draw = function draw() {
    console.log(`The square with id ${id} has the following sizes:`);
    console.log(`width: ${width}, height: ${height} and area: ${calcArea()}.`);
  };
}

const mySquare = new Square(4, 5);

mySquare.draw(); // The square with id 1 has the following sizes: width: 4, height: 5 and area: 20.

console.log(mySquare.width); // 4
console.log(mySquare.height); // 5
console.log(mySquare.id); // undefined
console.log(mySquare.calcArea); // undefined
console.log(mySquare.draw); // [Function: draw]
