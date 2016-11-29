var check = document.getElementById('check');
var tips = document.getElementById('tips');
console.log(check);
function hasClass(element, className) {
	return (new RegExp('(\\s|^)' + className + '(\\s|$)').test(element.className));
}

function addClass(element, newClassName) {
	if(!hasClass(element, newClassName)) {
		element.className = element.className ? (element.className + ' ' + newClassName) : newClassName;
	}
}

function removeClass(element, oldClassName) {
		if (hasClass(element, oldClassName)) {
		element.className = element.className.replace(new RegExp('(\\s|^)'+oldClassName+'(\\s|$)'), ' ').trim();
	}
}

check.addEventListener('mouseenter', function() {
	addClass(tips, 'active');
},false);
check.addEventListener('mouseleave', function() {
	removeClass(tips, 'active');
},false);