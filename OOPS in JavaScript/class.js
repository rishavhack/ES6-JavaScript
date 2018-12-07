class Human{
	constructor(){
		this.gender = 'male';
	}
	printGender(){
		console.log(this.gender);
	}
}

class Person extends Human{
	constructor(){
		super(); //To initilize upper human constructor
		this.name = 'Rishav';
	}

	printMyname(){
		console.log(this.name);
	}
}
const person = new Person();
person.printMyname();
person.printGender();


**ES6 && ES7**
class Human{
		this.gender = 'male';
	printGender = () => {
		console.log(this.gender);
	}
}

class Person extends Human{
	name = 'Rishav';

	printMyname = () => {
		console.log(this.name);
	}
}
const person = new Person();
person.printMyname();
person.printGender();





**ES6**
constructor(){
		this.gender = 'male';
	}
**ES7**
gender = 'male'


**ES6**
myMethod(){...}
**ES7**

myMethod = () =>{..}

