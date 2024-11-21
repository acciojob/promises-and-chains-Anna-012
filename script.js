//your JS code here. If required.
let firstpromise = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		if{
		resolve alert(`Welcome ${name}. You can vote.`)
	},4000)
}else{
	reject alert(`Oh sorry ${name} You aren't old enough.`)
}

firstpromise.then((message)=>{
     console.log(message);
})

})