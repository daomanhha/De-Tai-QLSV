// animate textFormLogin
let input = document.querySelectorAll('input.form-control');
for(let i of input){
	i.addEventListener('focus',function(event){  
		event.target.previousElementSibling.classList.add('activeInput');
	});
	i.addEventListener('focusout',function(event){ 
		if(event.target.value == ''){ 
		event.target.previousElementSibling.classList.remove('activeInput');
	}
	});
} 