var slider = document.getElementsByClassName('slider')[0];
var photos = slider.getElementsByTagName('li');
var controller =  document.getElementsByClassName('controller')[0];
var lis = controller.getElementsByTagName('li');

function delegateEvent(delegateElement, targetTag, eventName, handler) {
	delegateElement.addEventListener(eventName, function (event) {
		var target = event.target;
		if (target.nodeName.toLowerCase() === targetTag.toLowerCase()) {
			return handler(event);
		}
	}, false);
}

function hasClass(element, className) {
	return (new RegExp('(\\s|^)' + className + '(\\s|$)')).test(element.className);
}

function addClass(element, newClassName) {
	if (!hasClass(element, newClassName)) {
		element.className = element.className ? (element.className + ' ' + newClassName) : newClassName;
	}
}

function removeClass(element, oldClassName) {
	if (hasClass(element, oldClassName)) {
		element.className = element.className.replace((new RegExp('(\\s|^)' + oldClassName + '(\\s|$)')), ' ').trim();
	}
}


function getControllerIndex(li) {
	for (var i = 0; i < lis.length; i++) {
		if (lis[i] === li) {
			return i;
		}
	}
	return -1;
}

autoSlider = function () {
	var timer, transitionTimer;
	return {
		init: function () {
			this.showPhoto(photos[0]);
			addClass(lis[0], 'current');
			this.autoPlay();
		},
		autoPlay: function () {
			var that = this;
			timer = setInterval(function () {
				var currentLi = controller.getElementsByClassName('current')[0];
				var index = getControllerIndex(currentLi);
				var nextIndex = (index + 1) % lis.length;
				removeClass(currentLi, 'current');
				that.hidePhoto(photos[index]);
				addClass(lis[nextIndex], 'current');
				that.showPhoto(photos[nextIndex]);
			}, 2000);
		},
		stop: function () {
			var currentLi = controller.getElementsByClassName('current')[0];
			var index = getControllerIndex(currentLi);
			removeClass(currentLi, 'current');
			this.hidePhoto(photos[index]);
			clearInterval(timer);
		}, 
		showPhoto: function (photo) {
			photo.style.zIndex = 1;
			transitionTimer = setInterval(function () {
				var alpha = photo.style.opacity * 100;
				if (alpha >= 100) {
					clearInterval(transitionTimer);
				} else {
					alpha = (alpha + 2) > 100 ? 100 : alpha + 2;
					photo.style.opacity = alpha / 100;
				}
			}, 20);
		},
		hidePhoto: function (photo) {
			photo.style = '';
			clearInterval(transitionTimer);
		}
	};
}();

delegateEvent(controller, 'li', 'mouseover', function (event) {
	var target = event.target;
	var index = getControllerIndex(target);
	autoSlider.stop();
	addClass(target, 'current');
	autoSlider.showPhoto(photos[index]);
});

delegateEvent(controller, 'li', 'mouseout', function (event) {
	autoSlider.autoPlay();
});

autoSlider.init();