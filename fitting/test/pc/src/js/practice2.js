
/*
	原生JS-网页换肤
 */
/*practice2 start*/
console.log("aaaaaa");
var skin = document.querySelector('.skin');
var main_Div = document.getElementsByTagName('body');
var nav = document.querySelector('.subnav li');
function delegateEvent(delegateElement, targetTag, eventName, handler) {
	delegateElement.addEventListener(eventName,function(event) {
		var target = event.target;
		if(target.nodeName.toLowerCase() === targetTag.toLowerCase()){
			return handler(event);
		}
	});
}

function changeSkinStyle(event){
	var target = event.target;
	var className = target.className;
	var link = document.getElementById('theme');
	switch(className){
		case('red') :
			link.href = 'dest/css/red.css';

			break;
		case('green') :
			link.href = 'dest/css/green.css';
			break;
		case('black') :
			link.href = 'dest/css/black.css';
			break;
	}
}

delegateEvent(skin,'li','click',changeSkinStyle);

/*practice2 end*/