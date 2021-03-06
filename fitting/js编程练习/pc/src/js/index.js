window.onload  = function() {
    fun1();
    function fun1() {
        var changeStyle = function (elem, attr, value) {
            console.log(elem)
            elem[0].style[attr] = value;
        };
        var oBtn = document.getElementsByClassName("button");
        var oDiv = document.getElementsByClassName("change_01");
        var oAtt = ["width", "height", "background", "display", "display"];
        var oVal = ["280px", "200px", "red", "none", "block"];
        var len = oBtn.length;
        for (var i = 0; i < len; i++) {
            oBtn[i].index = i;
            oBtn[i].onclick = function () {
                this.index == len - 1 && (oDiv.style.cssText = "");//如果前者为真，执行后面代码
                changeStyle(oDiv, oAtt[this.index], oVal[this.index]);
            }
        }
    };
    fun2();
    function fun2() {
        var oLink = document.getElementsByTagName("link")[0];
        var oSkin = document.getElementsByClassName("skin")[0].getElementsByTagName("li");
        for (var i = 0; i < oSkin.length; i++) {
            oSkin[i].onclick = function () {
                for (var p in oSkin) oSkin[p].className = "";
                this.className = "current";
                oLink["href"] = "css/" + this.id + ".css";
                console.log(oLink["href"]);
            }
        }
    };
    fun3();
    function fun3() {
        var oBtn = document.getElementsByClassName("writing")[0].getElementsByTagName("P")[0];
        var selector = document.getElementsByClassName("selector")[0];
        var close = document.getElementById("close");
        var style = selector.style;
        oBtn.onclick = function () {
            style.display = style.display == "block" ? "none" : "block";
        };
        close.onclick = function () {
            style.display = "none";
        }
    };
    fun4();
    function fun4() {
        var oBtn = document.getElementsByTagName("button")[0];
        var oInput = document.getElementsByTagName("input")[0];
        var oStrong = document.getElementsByTagName("strong")[0];
        oInput.onkeyup = function () {
            this.value = this.value.replace(/[^(\d)| (+)]/, "");
            console.log(1);
        }
        oBtn.onclick = function () {
            var sum = 0;
            var oInput = document.getElementsByTagName("input")[0].value.split("+");//split(separator(分隔方式),howmany)把一个字符串分割成字符串数组。
            for (var i in oInput) {
                sum += parseInt(oInput[i]);
            }
            oStrong.innerHTML = sum;
        }
    };
    fun5();
    function fun5() {
        var changeStyle = function (elem, name, value) {
            elem.style[name] = value;
        }
        var change = document.getElementById("change_05");
        var target = document.getElementById("outer_05");
        var oBtn = target.getElementsByTagName("button");
        var oInput = target.getElementsByTagName("input");
        oBtn[0].onclick = function () {
            changeStyle(change, oInput[0].value, oInput[1].value);
        },
            oBtn[1].onclick = function () {
                change.removeAttribute("style");
            }
    };
    fun6();
    function fun6() {
        var li = document.getElementById("nav_06").getElementsByTagName("li");
        var content = document.getElementById("content_06").getElementsByTagName("div");
        var len = li.length;
        for (var i = 0; i < len; i++) {
            li[i].index = i;
            li[i].onmouseover = function () {
                for (var j = 0; j < len; j++) li[j].className = "";
                this.className = "active";
                for (var j = 0; j < len; j++) content[j].style.display = "none";
                content[this.index].style.display = "block";
            }
        }
    };
    fun7();
    function fun7() {
        var li = document.getElementById("calender").getElementsByTagName("li");
        var msg = document.getElementsByClassName("msg")[0];
        var p = msg.getElementsByTagName("p")[0];
        var strong = msg.getElementsByTagName("strong")[0];
        var array = [
            "元旦：1月1日至3日放假三天。",
            "春节：2月2日至8日放假7天。",
            "妇女节：3月8日妇女节，与我无关。",
            "清明节：4月3日至5日放假3天",
            "劳动节：4月30日至5月2日放假3天。",
            "端午节：6月4日至6日放假3天。",
            "小暑：7月7日小暑。不放假。",
            "七夕节：8月6日七夕节。不放假。",
            "中秋节：9月10日至12日放假3天。",
            "国庆节：10月1日至7日放假7天。",
            "立冬：11月8日立冬。不放假。",
            "艾滋病日:12月1日<br />废除奴隶制国际日:12月2日。"
        ];
        for (var i = 0; i < li.length; i++) {
            li[i].index = i;
            li[i].onmouseover = function () {
                for (var n = 0; n < li.length; n++) li[n].className = "";
                this.className = "active";
                p.innerHTML = array[this.index];
                strong.innerHTML = this.index + 1;
            }
        }
    };
    fun8();
    function fun8() {
        var target = document.getElementById("test_08_nav");
        var nav = target.getElementsByTagName("p")[0];
        var show = target.getElementsByTagName("ul")[0];
        nav.onclick = function () {
            var style = show.style;
            style.display = style.display == "none" ? "block" : "none";
        }
    };
    fun9();
    function fun9() {
        var img = document.getElementById("img").getElementsByTagName("img");
        var div = document.getElementById("img").getElementsByTagName("div")[0];
        var len = img.length;
        for (var i = 0; i < len; i++) {
            img[i].onmouseover = function () {
                img[0].src = this.src;
            }
        }
    };
    fun10();
    function fun10() {
        var target = document.getElementById("test_10");
        var a = target.getElementsByTagName("a")[0];
        var input = target.getElementsByTagName("input");
        var label = target.getElementsByTagName("label")[0];
        var len = input.length;
        var isCheckAll = function () {
            for (var i = 1, n = 0; i < len; i++) {
                input[i].checked && n++;
            }
            input[0].checked = n == len - 1;
            label.innerHTML = input[0].checked ? "全不选" : "全选";
        }
        //全选/全不选
        input[0].onclick = function () {
            for (var i = 1; i < len; i++) {
                input[i].checked = this.checked;
            }
            isCheckAll();
        }
        //反选
        a.onclick = function () {
            for (var i = 1; i < len; i++) {
                input[i].checked = !input[i].checked;
            }
            isCheckAll();
        }
        //根据复选个数更新全选框状态
        for (var i = 1; i < len; i++) {
            input[i].onclick = function () {
                isCheckAll();
            }
        }
    };
    fun11();
    function fun11() {
        // select
        var select = document.getElementById("select_01");
        var getValueSelect = document.getElementById("get_value_01");
        var resetValueSelect = document.getElementById("reset_value_01");
        // 获取 select 选项值
        getValueSelect.onclick = function () {
            var selectIndex = select.selectedIndex;     //获得是第几个被选中了
            var selectText = select.options[selectIndex].text; //获得被选中的项目的文本（.text）
            var selectValue = select.options[selectIndex].value; //获得被选中的项目的值（.value）
            if (selectIndex == 0) {
                alert("你还没有选择城市");
            } else {
                alert('选中第' + selectIndex + '项，  值是"' + selectValue + '"，  文本是"' + selectText + '"');
            }
        }
        // 重置 select 选项值
        resetValueSelect.onclick = function () {
            select.value = "    ";
        }


        var mselect = document.getElementById("select_02");
        var getValuemSelect = document.getElementById("get_value_02");
        var resetValuemSelect = document.getElementById("reset_value_02");

        // 获取 多选select 选项值
        getValuemSelect.onclick = function () {
            var mValue = "";
            for (var i = 0; i < mselect.options.length; i++) {
                if (mselect.options[i].selected) {
                    mValue += mselect.options[i].value + "，";
                }
            }
            alert(mValue);
        }

        // 重置 多选select 选项值
        resetValuemSelect.onclick = function () {
            for (var i = 0; i < mselect.options.length; i++) {
                mselect.options[i].selected = false;
            }
        }

        document.getElementById("check_all").onclick = function () {
            for (var i = 0; i < mselect.options.length; i++) {
                if (mselect.options[i].value != "") {
                    mselect.options[i].selected = true;
                }
            }
        }

        document.getElementById("check_opp").onclick = function () {
            for (var i = 0; i < mselect.options.length; i++) {
                if (mselect.options[i].value != "") {
                    //var bool = mselect.options[i].selected;
                    mselect.options[i].selected == true ? mselect.options[i].selected = false : mselect.options[i].selected = true;
                }
            }
        }
// mselect 多选(要放到onload外)
        function checkselect(objname) {
            o = document.getElementById(objname);
            t = document.getElementById("output");
            var intvalue = "";
            for (i = 0; i < o.options.length; i++) {
                if (o.options[i].selected) {
                    intvalue += o.options[i].value + ",";
                }
            }
            t.value = intvalue.substr(0, intvalue.length - 1);
            //alert(intvalue);
        }
    };
    fun12();
    function fun12() {
        var input = document.getElementById("test_12").getElementsByTagName("input");
        var span = document.getElementById("result");
        var button = document.getElementById("test_12").getElementsByTagName("button")[0];
        var i = 0;
        for (i = 0; i < input.length - 1; i++) {
            input[i].nokeyup = function () {
                this.value = this.value.replace(/^\d/, "");
            }
        }
        button.onclick = function () {
            (input[0].value == "" || input[1].value == "") ?
                alert("请输入数字！") :
                span.innerHTML = parseInt(input[0].value) + parseInt(input[1].value);
        }
    };
    fun13();
    function fun13() {
        var num = document.getElementById("test_13").getElementsByTagName("span")[0];
        var i = 0;
        var t = setInterval(upDateNum, 900);
        upDateNum();
        function upDateNum() {
            num.innerHTML = i++;
        }

        //window.clearInterval(t);
    };
    fun14();
    function fun14() {
        var calc = document.getElementById("calc");
        var small = document.getElementById("small");
        var a = calc.getElementsByTagName("a");
        var input = calc.getElementsByTagName("input")[1];
        var s = false;
        var len = a.length;
        var i = 0;
        for (i = 0; i < len; i++) {
            a[i].onFocus = function () {
                this.blur();
            }
            a[i].onclick = function () {
                switch (this.innerHTML) {
                    case "C":
                        input.value = 0;
                        small.value = "";
                        break;
                    case "%":
                        count("%");
                        break;
                    case "÷":
                        count("/");
                        break;
                    case "×":
                        count("*");
                        break;
                    case "+":
                    count("+");
                    break;
                    case "-":
                        count("-");
                        break;
                    case ".":
                        if(input.value.search(/[\.\%\/\*\-\+]/) != -1)
                        break;
                    case "=":
                        s || (small.value += input.value);
                        input.value = eval(small.value.replace(/\%\/\*\-\+/, ""));
                        input.value = input.value.substr(0, 10).replace("NaN", 0);
                        s = true;
                        break;
                    default:
                        s && (input.value = 0, small.value = "", s = false);
                        input.value.length < 10 && (input.value = (input.value + this.innerHTML).replace(/^[0\%\/\*\-\+](\d)/, "$1"))
                }
            }
        }
        function count(a) {
            if (s) {
                small.value = input.value + a;
                input.value = a;
            } else {
                /[\%\/\*\-\+]$/.test(input.value) || (small.value += input.value);
                input.value = a;
                /[\%\/\*\-\+]$/.test(small.value) || (small.value += input.value);
                small.value = small.value.slice(-1) != a ? input.value.replace(/.$/, a) : small.value;
            }
        }
    };
    fun15();
    function fun15(){
        var clock = document.getElementById("test_15");
        var time = clock.getElementsByTagName("span");
        setInterval(getTimes,999);
        getTimes();
        function getTimes (){
            var date = new Date();
            var nDate = [date.getHours(),date.getMinutes(),date.getSeconds()];
            for(var i in nDate) time[i].innerHTML = format([nDate[i]]);
        }
        function format(a){
            return a.toString().replace(/^(\d)$/,"0$1")
        }
    };
    //fun16();
    function fun16(){
        var target =document.getElementById("test_16");
        var tab = target.getElementsByClassName("show")[0].getElementsByTagName("li");
        var obj = target.getElementsByClassName("index")[0].getElementsByTagName("li");
        var timer = play = null;
        var i = index =0;
        var aorder = true;
        var len =  obj.length;
        //切换按钮
        for(i=0;i<len;i++){
            tab[i].index = i;
            obj[i].onmouseover = function(){
                show(this.index);
            };
        };
        //鼠标滑过清理定时器
        target.onmouseover = function(){
            clearInterval(play);
        };
        //鼠标离开启动自动播放
        target.onmouseout = function(){
            autoPlay();
        };
        //自动播放函数
        function autoPlay(){
            play = setInterval(function(){
                //判断播放顺序
                aorder?index++:index--;
                //正序
                index >= len && (index = len -2,aorder=false);
                //倒序
                index <= 0 && (index = 0,aorder = true);
                show(index);
            },2000)
        };
        autoPlay();
        function show(a){
            index=a;
            var alpha = 0;
            for(i=0;i<len;i++) obj[i].className="";
            obj[index].className = "current";
            clearInterval(timer);
            for(i=0;i<len;i++){
                tab[i].style.opacity = 0;
                tab[i].style.filter = "alpha(opacity=0)";
            }
            timer = setInterval(function(){
                alpha +=2;
                alpha >100 && (alpha = 100);
                tab[index].style.opacity = alpha/100;
                tab[index].style.filter = "alpha(opacity="+alpha+")";
                alpha == 100 && clearInterval(timer);
            },20);
        }
        //上一张
        var up = target.getElementsByClassName("before")[0];
        var down = target.getElementsByClassName("next")[0];
        up.onmouseover = function(){
            up.style.opacity=up.style.opacity == 0 ? 100 :0;
        }
        up.onmouseout = function(){
            up.style.opacity=up.style.opacity == 0 ? 100 :0;
        }
        up.onclick = function(){

        }
        //下一张
        down.onmouseover = function(){
            down.style.opacity=down.style.opacity == 0 ? 100 :0;
        }
        down.onmouseout = function(){
            down.style.opacity=down.style.opacity == 0 ? 100 :0;
        }
        down.onclick = function(){

        }











    };
    fun17();
    function fun17(){
        var aBtn = document.getElementById("test_17").getElementsByTagName("input");
        var EventUtil = {
            addHandler:function(oElement,sEvent,fnHandler){
                oElement.addEventListener?oElement.addEventListener(sEvent,fnHandler,false):oElement.attachEvent("on"+sEvent,fnHandler);
            },
            removeHandler:function(oElement,sEvent,fnHandler){
                oElement.removeEventListener?oElement.removeEventListener(sEvent,fnHandler,false):oElement.detachEvent("on"+sEvent,fnHandler);
            },
            addLoadHandler:function(fnHandler){
                this.addHandler(window,"load",fnHandler);
            }
        };
        EventUtil.addLoadHandler(function(){
            var aBtn = document.getElementById("test_17").getElementsByTagName("input");
            EventUtil.addHandler(aBtn[1],"click",function(){
                EventUtil.addHandler(aBtn[0],"click",fnHandler);
                aBtn[0].value = "我可以点击了！";
                console.log(1);
            });
            EventUtil.addHandler(aBtn[2],"click",function(){
                EventUtil.removeHandler(aBtn[0],"click",fnHandler);
                aBtn[0].value = "毫无用处的按钮"
            });
            function fnHandler(){
                alert("事件绑定成功！")
            }
        });
    }
    fun18();
    function fun18(){
        console.log(1);
        var tab = document.getElementById("test_18"),
            li = tab.getElementsByTagName("li"),
            p = tab.getElementsByTagName("p")[0],
            b = tab.getElementsByTagName("b")[0],
            score = 0,
            len = li.length;
        var aMsg = [
            "很不满意|差得太离谱，与卖家描述的严重不符，非常不满",
            "不满意|部分有破损，与卖家描述的不符，不满意",
            "一般|质量一般，没有卖家描述的那么好",
            "满意|质量不错，与卖家描述的基本一致，还是挺满意的",
            "非常满意|质量非常好，与卖家描述的完全一致，非常满意"
        ]
        for(var i =0;i<len;i++){
            li[i].index = i;
            li[i-1].onmouseover = function(){
                foPoint(this.index);
                p.style.display = "block";
                p.style.left = 100 + this.index*this.offsetWidth +"px";
                p.innerHTML="<em><b>"+this.index+"</b>分"+aMsg[this.index-1].match(/ (.+)\|/)[1]+"</em>"+aMsg[this.index-1].match(/\|(.+)/)[1];
            }
            li[i-1].onmouseout = function(){
                fnPoint();
                p.style.display = "none";
            };
            li[i-1].onclick = function(){
                star = this.index;
                p.style.display = "none";
                b.innerHTML="<strong>"+(this.index)+"分</strong>(" + aMsg[this.index-1].match(/\|(.+)/)[1]+")";
            };
            function fnPoint(arg){
                score = arg || star;
                for(var i = 0;i<len;i++) li[i].className = i < score ? "on":"";

            }




        }
    }







}

































