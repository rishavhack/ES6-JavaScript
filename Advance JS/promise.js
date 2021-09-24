const p = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(1);
	},2000)
});

p.then((val)=>console.log(val))