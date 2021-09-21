console.log("Before");
const user = getUSer(1);
conosle.log(user)
console.log('After')
function getUSer(id) {
	setTimeout(()=>{
		console.log("Reading....")
	return {id: id, githubUsername:'rishavhack'}
	},2000);
}