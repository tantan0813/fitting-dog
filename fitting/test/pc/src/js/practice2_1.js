var close = document.getElementById('close');
var btn = document.getElementById('btn');
var toggle = document.getElementById('toggle');

btn.addEventListener('click', function() {
	if(toggle.style.display === 'none') {

		toggle.style.display = 'block'; 
	}
	else {
		toggle.style.display = 'none'; 
	}
},false);
close.addEventListener('click', function() {
	if(toggle.style.display === 'block') {
		toggle.style.display = 'none';
	}
},false);