console.log("Before");
getUSer(1, function(user){
	getRepo(user.githubUsername,(repos)=>{
		console.log('Repo',repos)
	})
});
console.log('After')
function getUSer(id,callback) {
	setTimeout(()=>{
		console.log("Reading....")
		callback({id: id, githubUsername:'rishavhack'})
	},2000)	
}
function getRepo(username,callback){
	setTimeout(()=>{
		console.log('Calling Github API...');
		callback(['repo1','repo2','repo3'])
	});
}





