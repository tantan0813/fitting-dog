
/**
 * Created by 000228 on 2016/8/24.
 */
$(function() {
    //鼠标点击一次性换六张图
    commonFun.changeGoods(".btnPre", ".btnNext", ".goodList li");
    //鼠标悬停图片上升浮动效果
        //everyone go
    commonFun.imgFloat(".goodList li", ".goodDetial img");
        // each floor
    commonFun.imgFloat("#floor-01 .goodsList li",".goodsList img");
    commonFun.imgFloat("#floor-02 .goodsList li ", "#floor-02 .goodsList img");
    commonFun.imgFloat("#floor-03 .goodsList li", "#floor-03 .goodsList img");
    commonFun.imgFloat("#floor-04 .goodsList li", "#floor-04 .goodsList img");
    commonFun.imgFloat("#floor-05 .goodsList li", "#floor-05 .goodsList img");
    commonFun.imgFloat("#floor-06 .goodsList li", "#floor-06 .goodsList img");
    commonFun.imgFloat("#floor-07 .goodsList li", "#floor-07 .goodsList img");
    commonFun.imgFloat("#floor-08 .goodsList li", "#floor-08 .goodsList img");
    commonFun.imgFloat("#floor-09 .goodsList li", "#floor-09 .goodsList img");
    commonFun.imgFloat("#floor-10 .goodsList li", "#floor-10 .goodsList img");
    //锚点跳转滑动效果
    $('a[href*=#],area[href*=#]').click(function () {
        $(this).addClass("onactive").siblings().removeClass("onactive");
        //滑动速度控制
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 600);
                return false;
            }
        }
    });
//返回顶部
    commonFun.goTop(".goTop");
//右侧导航栏的显示隐藏，居中
    //当窗口宽度变化时，右侧导航栏的吸附效果
    $(window).resize(function() {
        if (window.innerWidth)
            winWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            winWidth = document.body.clientWidth;
        if(winWidth<1700){
            $(".right-bar").css("right","0");
        }else{
            $(".right-bar").css("right","15%");
        }
    });
     barplayH = function() {
        var wst = $(window).scrollTop();
        if (wst >600) {
            $(".right-bar").show(400);
        } else {
            $(".right-bar").hide(400);
         }
    }
    setInterval("barplayH()",1000);
    //屏幕滚动右侧号航高亮跟随效果  （可以优化）
    $(window).scroll(function(){//为页面添加页面滚动监听事件
        var wst =  $(window).scrollTop(); //滚动条距离顶端值
        if(wst>780 && wst<1380){
            $(".right-bar>a").eq(0).addClass("onactive").siblings().removeClass("onactive");
            }
        if(wst>1380 && wst<1980){
            $(".right-bar>a").eq(1).addClass("onactive").siblings().removeClass("onactive");
        }
        if(wst>1980 && wst<2580){
            $(".right-bar>a").eq(2).addClass("onactive").siblings().removeClass("onactive");
        }
        if(wst>2580 && wst<3180){
            $(".right-bar>a").eq(3).addClass("onactive").siblings().removeClass("onactive");
        }
        if(wst>3180 && wst<3780){
            $(".right-bar>a").eq(4).addClass("onactive").siblings().removeClass("onactive");
        }
        if(wst>3780 && wst<4380){
            $(".right-bar>a").eq(5).addClass("onactive").siblings().removeClass("onactive");
        }
        if(wst>4380 && wst<4980){
            $(".right-bar>a").eq(6).addClass("onactive").siblings().removeClass("onactive");
        }
        if(wst>4980 && wst<5580){
            $(".right-bar>a").eq(7).addClass("onactive").siblings().removeClass("onactive");
        }
        if(wst>5580 && wst<6180){
            $(".right-bar>a").eq(8).addClass("onactive").siblings().removeClass("onactive");
        }
        if(wst>6180 && wst<6780){
            $(".right-bar>a").eq(9).addClass("onactive").siblings().removeClass("onactive");
        }
        });
//json调用实现
    $.getJSON("package.json", function(data){
        var myJson=[];
        myJson.push("<li><a href='#'>"+data.name+"</a>"+"<span>+</span></li>");
        myJson.push("<li><a href='#'>"+data.main+"</a>"+"<span>+</span></li>");
        $(".goodsMore ").append(myJson.concat(""));
        //json实现第十一层
        $(window).scroll(function() {//为页面添加页面滚动监听事件
            var wst = $(window).scrollTop(); //滚动条距离顶端值
            var hst = $("body").height();
            if(wst>6000 && hst<8000){
                lazyLoadFloor11();
                commonFun.imgFloat("#floor-11 .goodsList li", "#floor-11 .goodsList img")
            }
        })
        lazyLoadFloor11 =function() {
            var $floor10 = $("#floor-10");
            var code = "";
            var html = "";
            code += "<div class='goodChannel' id='floor-11'> <div class='goodChannelHeader'><h3>" + data.floorName + "</h3></div>";
            code += "<div class='goodChannelBody'><div class='goods'><div class='goodsBig'><img src='" + data.goodsBig.src + " '/>";
            code += "<ul class='goodsMore'>";
            for (var i = 0; i < data.goodsBig.ul.length; i++) {
                html += "<li><a href='#'>" + data.goodsBig.ul[i].li + "<span>+</span></a></li>"
            }
            code += html;
            html = "";
            code += "</ul></div><ul class='goodsList'>";
            for (var j = 0; j < data.goodsList.goodItem.length; j++) {
                html += "<li><div class='goodItem'><div class='goodDetial'><a href='#'><img src='" + data.goodsList.goodItem[j].src + " '/></a></div>";
                html += "<a  href='#'class='textactive'>" + data.goodsList.goodItem[j].detial + "</a>";
                html += "<p class='price'><span>" + data.goodsList.goodItem[j].price + "</span></p></div></li>";
            }
            code += html;
            html = "";
            code += "</ul></div><div class='goodsImg'>"
            for (var k = 0; k < data.goodsList.goodsImg.length; k++) {
                html += "<a href='#'><img src='" + data.goodsList.goodsImg[k].src + "'/></a>"
            }
            code += html;
            code += "</div></div></div>"
            $floor10.after(code);
        }

             });
});
var commonFun= {
    //鼠标点击一次性换六张图片
    "changeGoods":function(pre,next,showList){
        function change() {
            var i = 0;
            var len = $(showList).size();
            if (i < len) {
                i = i + 6;
                $(showList).slice(i - 6, i).hide(100).siblings().show().animate({"margin-left": "-6px"}, 400).animate({"margin-left": "0px"}, 400);
            }
        }
        $(pre).on("click",function(){
            change();
        })
        $(next).on("click",function(){
            change();
        })
    },
//鼠标悬停图片上升浮动效果
   "imgFloat":function(tabObj,floatImg) {
       var curIndex = 0;
       $(tabObj).on("mouseenter", function () {
           $(tabObj).on("mouseover", function () {
                curIndex = $(this).index();
               $(floatImg).eq(curIndex).stop().animate({"width": "166px", "height": "166px"}, 500);
           }).on("mouseleave", function () {
               $(floatImg).eq(curIndex).stop().animate({ "width": "160px", "height": "160px"}, 500);
           })
       })
   },
    //返回top
    "goTop":function(gotop){
        $(gotop).click(function(){
            $("html,body").animate({"scrollTop": "0"}, 800);
            return false;
        })
    },


}