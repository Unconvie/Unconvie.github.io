if(window.innerWidth > window.innerHeight){
	new Swiper('.slider', {
		direction: "horizontal",
		speed: 2400,
		mousewheel:{
			enabled: true,
			sensitivity:9.45
		},
		spaceBetween: 7,
		parallax:true,
		// freeMode:true
	})
}
else{
	new Swiper('.slider', {
		direction: "vertical",
		speed: 2400,
		mousewheel:{
			enabled: true,
			sensitivity:9.45
		},
		spaceBetween: 7,
		parallax:true,
		// freeMode:true
	})
}



if(localStorage.getItem('theme')==='day-theme'){
	document.getElementById('day-theme').setAttribute('href', 'css/day-theme.css');
}
else if(localStorage.getItem('theme')==='night-theme'){
	document.getElementById('day-theme').setAttribute('href', 'css/main.css');
}

window.addEventListener('load', init);
function init(){
	
	document.getElementsByClassName('night-theme-btn')[0].addEventListener('click', ()=>{
		// document.getElementById('arts-day-theme').setAttribute('href', 'arts-more/arts-day.css');
		document.getElementById('day-theme').setAttribute('href', 'css/day-theme.css');

		localStorage.setItem('theme', 'day-theme')
	});
	document.getElementsByClassName('day-theme-btn')[0].addEventListener('click', ()=>{
		document.getElementById('day-theme').setAttribute('href', 'css/main.css');
		// document.getElementById('arts-day-theme').setAttribute('href', 'arts-more/arts-night.css');
		localStorage.setItem('theme', 'night-theme')
	});
	
}
