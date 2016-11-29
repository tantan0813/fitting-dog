var btn = document.getElementById('btn');
var close_btn = document.getElementById('close-btn');
var layer = document.getElementById('layer');
var layer_h = document.getElementById('layer_h');

btn.addEventListener('click', function() {
	console.log(layer.style.display);
	
		console.log(1);
		layer.style.display = 'block';
		layer_h.style.display = 'block';
	
},false);
close_btn.addEventListener('click', function() {
	console.log(layer.style.display);
	
		console.log(1);
		layer.style.display = 'none';
		layer_h.style.display = 'none';
	
},false);