const p = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(1);
	},2000)
});


const r = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		reject(new Error("Hacker"));
	},2000)
});

p.then((val)=>console.log(val));

r
  .then((val)=>console.log(val))
  .catch(err => console.log(err.message))