**Spread**
Used to split array elements OR object properties
const newArray = [...oldArray,1,2] //it will add all value of old array
const newObject = {..oldObject,newProp:5}//it will add all key value & mjethod


**Rest**
Used to merge a list of function argumenrs into an array
function sortArgs(...argument) {
	return argument.sort()
}



const number = [1,2,3];
const newNumber = [...numbers,4,5];
console.log(newNumber) // [1,2,3,4,5]


const Person = {
	name : 'Ris'
}

const newPerson = {
	...Person,
	age:28
}

console.log(newPerson);//{name:'Ris',age:28}


const filter = (...args) => {
	return args.filter(el => el === 1);
}

console.log(filter(1,2,3)); //[1]