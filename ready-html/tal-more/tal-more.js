window.addEventListener('load', init);
function init(){
	
	if(localStorage.getItem('theme')==='day-theme'){
		document.getElementById('day-theme').setAttribute('href', 'tal-day.css');
	}
	else if(localStorage.getItem('theme')==='night-theme'){
		document.getElementById('day-theme').setAttribute('href', 'tal-night.css');
	}
}
