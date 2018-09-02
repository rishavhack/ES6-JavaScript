var rishav = {
	name:'Rishav',
	yearOfBirth : 1995,
	job:'Developer'
}

var Person = function(name,yearOfBirth,job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	/*this.calculateAge = function(){
		console.log(2018 - this.yearOfBirth);
	}*/
}
Person.prototype.calculateAge = function() {
	console.log(2018 - this.yearOfBirth);
};
var john = new Person('JOhn',1990,'teacher');
var john3 = new Person('Herioen',1994,'Hero');
john.calculateAge();
john3.calculateAge();
console.log(john);