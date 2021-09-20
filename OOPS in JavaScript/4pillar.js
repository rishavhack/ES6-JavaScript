
//procedural programming
let baseSalary = 300;
let overtime = 10;
let rate = 20

function getWage(baseSalary,overtime,rate) {
	
	return baseSalary + (overtime*rate)
}


//Encapsulation
//The best function are those with no parameter
let employee = {
	baseSalary: 300,
	overtime: 10,
	rate : 20,
	getWage: function() {
		return this.baseSalary + (this.overtime * this.rate)
	}
} 

//Abstraction
//Hidding some property are hidden

// 1.Simpler Interface
// 2. REduce the impact of change(Inner changes does't affect )

//Inheritance

//TextBox, Select,CheckBox
//they all contain hidden,innerHTML,click(),focus()
// Put into one file
//So it helps us to eliminate redundant code.


//Poly - Many
//Morphism - Form

// Refactor ugly switch/case statements
