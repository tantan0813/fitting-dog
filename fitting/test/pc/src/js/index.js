 /*原生JS练习			*/
/*practice1原生JS-控制div属性通过事件监听实现 start*/

var btn = document.querySelector('.btn');//document.getElementById('btn')
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
		case('red') :
			main_Div.style['background'] = redStyle_main['background'];
			nav.style['background'] = redStyle_nav['background'];
			break;

	}
}


/*delegateEvent(btn, 'button', 'click', changeStyle);*/
/*practice1 end*/

/*
	原生JS-网页换肤
 */
/*practice2 start*/
var skin = document.querySelector('.skin');
var main_Div = document.getElementById("main");
var nav = document.querySelector('.subnav li');
var redStyle_main = {
	background:'#f44336'
}
var redStyle_nav = {
	background:'red'
};

/*function delegateEvent(delegateElement, targetTag, eventName, handler) {
	delegateElement.addEventListener(eventName,function(event) {
		var target = event.target;
		if(target.nodeName.toLowerCase() === targetTag.toLowerCase()){
			return handler(event);
		}
	});
}*/

function changeSkinStyle(event){
	var target = event.target;
	var className = target.className;
	switch(className){
		case('red') :
			main_Div.style['background'] = redStyle_main['background'];
			nav.style['background'] = redStyle_nav['background'];
			break;
		
	}
}

delegateEvent(skin,'li','click',changeSkinStyle);

/*practice2 end*/