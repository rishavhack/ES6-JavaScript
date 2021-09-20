

function Shape(color) {
    this.color = color;
}
Shape.prototype.duplicate = function() {
    console.log('duplicate')
}

function Circle(radius,color){
	new Shape(color)
    this.radius = radius;

}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.contructor = Circle

Circle.prototype.draw = function() {
    console.log('draw')
}



const s = new Shape()
const c = new Circle(1,'blue')