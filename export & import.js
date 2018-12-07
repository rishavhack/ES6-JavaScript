Suppose there are three files
Name - Person.js, utility.js, app.js

Codes in Person.js
//Start
const person = {
	Name:'max'
}
export default person
//End

Codes in utility.js
//Start
export const clean = () => {...}
export const baseData = 10;
//End


Code in app.js

import person from './person.js'
import prs from './person.js'
Above both code are same
*Import default and only export of the file Name in the receving 
file is up to you


import {baseData} from './utility.js'
import {clean} from './utility.js'

import { clean as smth } from './utility.js';
import * as bundled from './utility.js';
