new Swiper('.slider', {
	direction: "horizontal",
	speed: 2400,
	mousewheel:{
		enabled: true,
		sensitivity:7
	},
	spaceBetween: 7,
	parallax:true,
	//freeMode:true
	
})

window.addEventListener('load', init);
function init(){
	
	document.getElementsByClassName('night-theme-btn')[0].addEventListener('click', ()=>{
		document.getElementById('day-theme').setAttribute('href', 'css/day-theme.css');
	});
	document.getElementsByClassName('day-theme-btn')[0].addEventListener('click', ()=>{
		document.getElementById('day-theme').setAttribute('href', 'css/main.css');
	});
	
}
