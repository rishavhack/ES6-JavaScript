Easily extract array elements or object properties and
store them in variables


**Array Destructing**
[a,b] = ['Hello','Max']
console.log(a) //Hello
console.log(b)//Max

**Object Destructing**
{name} = {name:'Max',age:28}
console.log(name) //Max
console.log(age) // undefined


const numbers = [1,2,3];
[num1,num2] = numbers;
console.log(num1,num2) //1,2
[num1, ,num3] = numbers;
console.log(num1,num3) // 1,3
