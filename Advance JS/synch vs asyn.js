console.log("Before");
const user = getUSer(1);
console.log(user)
console.log('After')
function getUSer(id) {
	setTimeout(()=>{
		console.log("Reading....")
	return {id: id, githubUsername:'rishavhack'}
	},2000)	
}
//To solve this problem
//1. Call back
//2. await
//3. Promise
