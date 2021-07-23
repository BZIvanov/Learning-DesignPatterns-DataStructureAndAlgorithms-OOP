## OOP with javascript

- **inheritance** - An object (class would be better word in traditional oop) being able to inherit methods and properties from another object. Inheritance also means giving one object access to another object's methods and properties. The main benefit from inheritance is the code reuse.

- **encapsulation** - Enclosing all functionalities of an object (data and methods) within the object, so the objects internal work is hidden from the rest of our application. The main benefit from encapsulation is that it governs the creation of our objects.

- **abstraction** - Shows only essentials and hides unnecessary information.

- **polymorphism** - ability of an object to take many forms.

## Objects

Example for object's property, method and members:

```javascript
// width, height and calcArea are members of square
const square = {
  width: 10, // width is a property of square
  height: 10, // height is a property of square
  // calcArea is a method of square
  calcArea() {
    return this.width * this.height;
  },
};

console.log(square.calcArea());
```
