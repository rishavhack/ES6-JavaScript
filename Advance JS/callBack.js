console.log("Before");
getUSer(1, function(user){
	console.log('User',user);
});
console.log('After')
function getUSer(id,callback) {
	setTimeout(()=>{
		console.log("Reading....")
		callback({id: id, githubUsername:'rishavhack'})
	},2000)	
}
