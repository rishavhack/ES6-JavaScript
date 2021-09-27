const p1 = new Promise((resolve)=>{
	setTimeout(()=>{
		console.log("ASyn opertaion 1");
		resolve(1)
	},2000)
});

const p2 = new Promise((resolve)=>{
	setTimeout(()=>{
		console.log("ASyn opertaion 2....");
		resolve(2)
	},1000)
});

const p3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		console.log("ASyn opertaion 3....");
		resolve(new Error("failed"))
	},1000)
});


Promise.all([p1,p2,p3]).then(result=>console.log(result))
.catch(err=>console.log(err.message))


