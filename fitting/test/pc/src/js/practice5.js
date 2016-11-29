var play = document.getElementById('container');
console.log(play);
function hasClass(element, className) {
	return (new RegExp('(\\s|^)' + className + '(\\s|$)')).test(element.className);
}

function addClass(element, newClassName) {
	if (!hasClass(element, newClassName)) {
		element.className = element.className ? (element.className + " " + newClassName) : newClassName;
	}
}

function removeClass(element,oldClassName) {
	if (hasClass(element, oldClassName)) {
		element.className = element.className.replace(new RegExp('(\\s|^)'+ oldClassName + '(\\s|$)'), " ").trim();
	}
}

play.addEventListener('mouseenter', function() {
	addClass(play,'hover');
},false);

play.addEventListener('mouseleave', function() {
	removeClass(play,'hover');
},false);