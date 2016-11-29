/**
 * Created by 000228 on 2016/8/17.
 */
$(function(){
    //鼠标悬停显示隐藏菜单
    commonFun.navShow(".dd-inner>div",".item-sub","onhover",".concent")
    //鼠标悬停换图片
    commonFun.eqShow(".list li",".image li","active2","#pre","#next",".image img");
    //鼠标移动上下张图片切换按钮显示
    commonFun.showBotton(".image img",".button");
    //json调用
    $.getJSON("package.json", function(data){
        var myJson=[];
        myJson.push("<a href='#'>"+data.author+"</a>");
        myJson.push("<a href='#'>"+data.author+"</a>");
        $(".chan").html(myJson.join(""));
    });
})

var commonFun= {
    //鼠标悬停显示隐藏菜单
    "navShow": function (tabObj, showObj,name,stopPlay) {
        $(tabObj).on("click mouseover", function () {
            $(stopPlay).hide();
            $(this).addClass(name).siblings().removeClass(name);
            var curIndex = $(this).index();
            $(showObj).eq(curIndex).show().hover(function(){$(showObj).eq(curIndex).show();$(stopPlay).hide(); $(tabObj).eq(curIndex).addClass(name).siblings().removeClass(name)},
                                                 function(){$(showObj).eq(curIndex).hide();$(stopPlay).show(); $(tabObj).eq(curIndex).removeClass(name)}).siblings().hide();
        }).on("mouseout",function(){
            $(this).removeClass(name);
            $(showObj).hide();
            $(stopPlay).show();
        })
    },
    //换图片
    "eqShow": function (tabObj, showObj,name,pre,next,p) {
        var i = -1,j;
        play = function() {
            if(i>-2&&i<6){
                i = i+1;
                show();
            }
            if(i>5){
                i=-1;
            }
        }
        //图片自动切换
        j  =  setInterval("play()",3000);
        function show(){
            $(tabObj).eq(i).addClass(name).siblings().removeClass(name);
            $(showObj).eq(i).fadeIn(800).siblings().hide();
        }
        $(p).hover(function(){
            clearInterval(j);
        },function(){
            j  =  setInterval("play()",3000);
        });
        $(tabObj).on("click mouseover",function(){
             clearInterval(j);
             var curIndex = $(this).index();
             i = curIndex;
             show();
        }).on("mouseover",function(){
            j  =  setInterval("play()",3000);
        });
        $(pre).on("click",function(){
            if(i>-1&&i<6){
                i--;
                show();
            }
            if(i<0){
                i = 5;
                show();
            }
        });
        $(next).on("click",function(){
            if(i>-1&&i<6){
                i++;
                show();
            }
            if(i>5){
                i = 0;
                show();
            }
        });

    },
    //鼠标移动上下张图片切换按钮显示
    "showBotton":function(Obj,show){
        var allowHidden = true;
        $(Obj).on("mouseover",function(){
            $(show).show();
        })
        $(Obj).on("mouseout",function(){
            setTimeout(function(){
                if (allowHidden){
                    $(show).hide();
                }
                allowHidden = true;
            }, 100);
        })
        $("#pre").on("mouseover",function(){
            allowHidden = false;
        });
        $("#next").on("mouseover",function(){
            allowHidden = false;
        });
    }
}




