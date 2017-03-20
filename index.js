function Point (x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function(){
  return `${this.x}, ${this.y}`
}

function Shape(){
}

Shape.prototype.addToPlane = function(x, y){
  return this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y){
  this.position.x = x
  this.position.y = y
  return this.position
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle

Circle.prototype.area = function() {
  return Math.PI * this.radius^2
}

Circle.prototype.diameter = function() {
  return this.radius * 2
}

Circle.prototype.circumference = function() {
  return Math.PI * this.radius * 2
}

function Side(length){
  this.length = length
}

function Polygon(sides){
  this.sides = sides
  Shape.call(this)
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function() {
  return this.sides.reduce( function(total, current) {
    return total + current.length
  }, 0)
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Quadrilateral(side1, side2, side3, side4) {
  this.sides = [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]
  Polygon.call(this, this.sides)
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle(width, height) {
  this.width = width
  this.height = height
  Quadrilateral.call(this, width, width, height, height)
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.width * this.height;
}

function Square(length) {
  this.length = length
  Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  return this.hasOwnProperty()
}

function Triangle(side1, side2, side3){
  this.sides = [new Side(side1), new Side(side2), new Side(side3)]
  Polygon.call(this, this.sides)
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle
