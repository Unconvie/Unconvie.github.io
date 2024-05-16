window.addEventListener('load', init);
function init(){
	
	if(localStorage.getItem('theme')==='day-theme'){
		document.getElementById('day-theme').setAttribute('href', 'arts-day.css');
	}
	else if(localStorage.getItem('theme')==='night-theme'){
		document.getElementById('day-theme').setAttribute('href', 'arts-night.css');
	}
}
