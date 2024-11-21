//your JS code here. If required.
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Your promise should be created here
	let age = document.getElementById('age').value;
let name = document.getElementById('name').value;

	age = Number(age);

	let firstpromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    if(age >= 18){
      resolve (`Welcome ${name}. You can vote.`)
    } else {
      reject (`Oh sorry ${name} You aren't old enough.`)
    }
  }, 4000)
});

firstpromise.then((message)=>{
  console.log(message);
}).catch((message)=>{
  console.log(message);
});
});