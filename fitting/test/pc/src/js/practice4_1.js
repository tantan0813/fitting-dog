var links = {
	'行业资讯': {
		'业界动态': 'javascript:void(0);',
		'收购融资': 'javascript:void(0);',
		'门户动态': 'javascript:void(0);',
		'搜索引擎': 'javascript:void(0);',
		'网络游戏': 'javascript:void(0);',
		'电子商务': 'javascript:void(0);',
		'广告传媒': 'javascript:void(0);',
		'厂商开发': 'javascript:void(0);'
	},
	'站长在线': {
		'站长报道': 'javascript:void(0);',
		'好站推荐': 'javascript:void(0);',
		'站长聚会': 'javascript:void(0);',
		'站长访谈': 'javascript:void(0);',
		'站长茶馆': 'javascript:void(0);',
		'网站排行': 'javascript:void(0);'
	},
	'网站运营': {
		'建站经验': 'javascript:void(0);',
		'策划盈利': 'javascript:void(0);',
		'搜索优化': 'javascript:void(0);',
		'网站推广': 'javascript:void(0);',
		'免费资源': 'javascript:void(0);'
	},
	'设计在线': {
		'酷站推荐': 'javascript:void(0);',
		'网页设计': 'javascript:void(0);',
		'WEB标准': 'javascript:void(0);',
		'视频处理': 'javascript:void(0);',
		'设计活动': 'javascript:void(0);'
	},
	'网络编程': {
		'Asp编程': 'javascript:void(0);',
		'Php编程': 'javascript:void(0);',
		'.Net编程': 'javascript:void(0);',
		'Xml编程': 'javascript:void(0);',
		'Access': 'javascript:void(0);',
		'Mssql': 'javascript:void(0);',
		'Mysql': 'javascript:void(0);'
	},
	'联盟资讯': {
		'联盟动态': 'javascript:void(0);',
		'联盟介绍': 'javascript:void(0);',
		'联盟点评': 'javascript:void(0);',
		'网赚技巧': 'javascript:void(0);'
	},
	'服务器': {
		'Web服务器': 'javascript:void(0);',
		'Ftp服务器': 'javascript:void(0);',
		'Mail服务器': 'javascript:void(0);',
		'Dns服务器': 'javascript:void(0);',
		'Win服务器': 'javascript:void(0);',
		'Linux服务器': 'javascript:void(0);',
		'安全防护': 'javascript:void(0);',
		'虚拟主机': 'javascript:void(0);'
	}
};

var nav = document.getElementById('nav');
var lis = nav.getElementsByTagName('li');
var subNavs = nav.getElementsByClassName('sub-nav');
var timer;

function initLinks() {
	for (var i = 0; i < subNavs.length; i++) {
		var parentLinkName = subNavs[i].previousElementSibling.textContent;
		var subLinks = links[parentLinkName];
		var span = subNavs[i].getElementsByTagName('span')[0];
		for (var subLinkName in subLinks) {
			span.innerHTML += '<a href="' + subLinks[subLinkName] + '">' + subLinkName + '</a>|';
		}
		span.innerHTML = span.innerHTML.replace(/\|$/, '');
	}
}

initLinks();

for (var i = 0, len = lis.length; i < len; i++) {
	lis[i].addEventListener('mouseover', function (event) {
		var li = this;
		var subNav = li.getElementsByClassName('sub-nav')[0];
		// 一hover就让所有子选单强行消失
		for (var j = 0; j < subNavs.length; j++) {
			subNavs[j].style.display = "none";
		}
		if (subNav) {
			var em = subNav.getElementsByTagName('em')[0];
			//判断右侧空间能否容得下子菜单，由此决定子菜单居左还是居右
			subNav.style.display = 'block';
			if (nav.offsetWidth - li.offsetLeft  > subNav.offsetWidth) {
				subNav.style.left = li.offsetLeft + "px";
			} else {
				subNav.style.right = 0;
				//计算指标箭头显示位置，向右偏移子菜单左侧宽度
				em.style.left = li.offsetLeft - subNav.offsetLeft + 50 + "px";
			}

			clearTimeout(timer);
		}
	}, false);

	lis[i].addEventListener('mouseout', function (event) {
		var li = this;
		var subNav = li.getElementsByClassName('sub-nav')[0];
		if (subNav) {
		    timer = setTimeout(function () {
		        subNav.style.display = "none";
		    },300);
		}
	}, false);
}