let button = document.querySelector ('#button');
let vper = document.querySelector ('#vper');
let per = document.querySelector ('#per');
let pl = document.querySelector ('#pl');
let res = document.querySelector ('#res');


button.addEventListener ('click', function func (){
	let a = vper.value;
	console.log (a);
	per.innerHTML = a*a;
	pl.innerHTML = 4*a;

})

res.addEventListener ('click', function func1 (){
	vper.value = '';
})