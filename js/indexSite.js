//animateUserMenu
const user = document.querySelector('.user h3');
user.addEventListener('click',function(){
	console.log('a');
	const userControl = document.querySelector('.user-control');
	userControl.classList.toggle('active');
});