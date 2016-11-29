/*practice3 函数接收参数*/
var input = document.querySelector('.input');
input.addEventListener('click',function(){
	var country = document.getElementById('country').value;
	var province = document.getElementById('province').value;
	alert("国家："+country+" 省份："+province);
},false);
