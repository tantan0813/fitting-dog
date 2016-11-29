 /*原生JS练习			*/
/*practice1原生JS-控制div属性通过事件监听实现 start*/

var btn = document.querySelector('.btn');
var mainDiv = document.querySelector(".container");
var bigerStyle = {
	width:'200px',
	height:'200px'
};
var smallerStyle = {
	width:'50px',
	height:'50px'
};
var newStyle = {
	background:'#000'
};

function delegateEvent(delegateElement, targetTag, eventName, handler) {
	delegateElement.addEventListener(eventName,function(event) {
		var target = event.target;
		if(target.nodeName.toLowerCase() === targetTag.toLowerCase()){
			return handler(event);
		}
	});
}

function changeStyle(event){
	var target = event.target;
	var className = target.className;
	switch(className){
		case('btn-1') :
			mainDiv.style['width'] = bigerStyle['width'];
			mainDiv.style['height'] = bigerStyle['height'];
			break;
		case('btn-2') :
			mainDiv.style['width'] = smallerStyle['width'];
			mainDiv.style['height'] = smallerStyle['height'];
			break;
		case('btn-3') :
			mainDiv.style['background'] = newStyle['background'];
			break;
		case('btn-4') :
			mainDiv.style.cssText = '';
			break;
	}
}


delegateEvent(btn, 'button', 'click', changeStyle);
/*practice1 end*/
/*practice4 循环改变div颜色*/
var sub = document.querySelector('.btn-5');
sub.addEventListener('click',function(){
	var red = document.getElementsByClassName('red');
	for (var i = 0,len = red.length; i < len; i++) {
	red[i].style.backgroundColor = 'red';
	}
},false);
