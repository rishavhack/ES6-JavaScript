const number = 1; //Primitive
const num2 = number //Reference

const person = {
	name :"Max"
}

const secondPerson = person //WHat ever you change in person it will change into perosn
const secondPerson = {
	...person (Now this object will not chnage above object value)
}