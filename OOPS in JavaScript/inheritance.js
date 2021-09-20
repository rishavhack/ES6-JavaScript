function Circle(radius) {
	this.radius = radius;
	this.defaultLocation = {x:0,y:0}
	this.computeOptimumLocation = function (factor) {
		// body...
	}

	this.draw = function(){
		this.computeOptimumLocation(0.1);
		console.log('draw');
	}
}

const circle = new Circle(10);


function Circle(radius) {
	this.radius = radius;
	let defaultLocation = {x:0,y:0}
	let computeOptimumLocation = function (factor) {
		// body...
	}

	this.draw = function(){
		computeOptimumLocation(0.1);
		console.log('draw');
	}
}

//We can acccess but not redefine
function Circle(radius) {
	this.radius = radius;
	let defaultLocation = {x:0,y:0}
	
	this.getDefaultLocation = function () {
		return defaultLocation
	}

	this.draw = function(){
		computeOptimumLocation(0.1);
		console.log('draw');
	}

	Object.defineProperty(this,'defaultLocation',{
		get: function() {
			return defaultLocation
		},
		set: function (value) {
			defaultLocation = value;
		}
	});
	//readonly
	//circle.defaultLocation
}

const circle = new Circle(10);
circle.getDefaultLocation();
circle.defaultLocation = 0;(not accessable)
circle.draw();
