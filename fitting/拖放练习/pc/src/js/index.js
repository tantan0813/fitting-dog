/**
 * Created by 000228 on 2016/10/28.
 */
window.onload  = function(){

    $.getJSON("img.json", function(data){
        var myJson=[];
        myJson.push("<li><img src='"+data.img.img1+"'/></li>");
        myJson.push("<li><img src='"+data.img.img2+"'/></li>");
        myJson.push("<li><img src='"+data.img.img3+"'/></li>");
        myJson.push("<li><img src='"+data.img.img4+"'/></li>");
        myJson.push("<li><img src='"+data.img.img5+"'/></li>");
        myJson.push("<li><img src='"+data.img.img6+"'/></li>");
        myJson.push("<li><img src='"+data.img.img7+"'/></li>");
        myJson.push("<li><img src='"+data.img.img8+"'/></li>");
        myJson.push("<li><img src='"+data.img.img9+"'/></li>");
        $("#box_01 ul").html(myJson.join(""));
        var myJson_01 =[];
        myJson_01 = data.img.toString().replace(/img\d/gi,"");
        console.log(myJson_01);
        console.log(data.img.img1);
    });



}