var sum = document.getElementById('sum');
var sum_input = document.getElementById('sum-input');
var result = document.getElementById('result');
//console.log(sum_input);
sum.addEventListener('click', function() {
	var num = sum_input.value;
	console.log(num.length);
	var num_sum = 0;
	for(var i = 0,len = num.length; i < len; i++) {
		if(new RegExp('^[0-9]*$').exec(num[i])) {
			num_sum += parseInt(num[i]); 			
		}
	}
	console.log(num_sum);
	result.innerHTML = num_sum;

},false);