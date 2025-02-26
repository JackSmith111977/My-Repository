function clickPrintButton(){
    console.log("Clicked PrintButton");
}

/*dom0级别事件实现*/
//特性：当同时存在多个相同事件时，前者会被后者覆盖
var dom0PrintButton = document.getElementById("dom0click");
dom0PrintButton.onclick = function (){
    console.log("dom0Clicked Button1");
}
dom0PrintButton.onclick = function (){
    console.log("dom0Clicked Button2");
}
/*dom2级别事件实现*/
//特性：当同时存在多个相同事件时，所有事件会同时触发
var dom2PrintButton = document.getElementById("dom2click");
dom2PrintButton.addEventListener("click",function(){
    console.log("dom2Clicked Button1");
})
dom2PrintButton.addEventListener("click",function(){
    console.log("dom2Clicked Button2");
})

/*鼠标触发事件*/
//单击触发
var clickButton = document.getElementById("click");
clickButton.addEventListener("click",function(){
    console.log("click");
})
//双击触发
var dblclickButton = document.getElementById("dblClick");
dblclickButton.addEventListener("dblclick",function(){
    console.log("dblClick");
})
//按下鼠标触发
var mouseDown = document.getElementById("mouseDown");
mouseDown.addEventListener("mousedown",function(){
    console.log("mouseDown");
})
//松开鼠标触发
var mouseUp = document.getElementById("mouseUp");
mouseUp.addEventListener("mouseup",function(){
    console.log("mouseUp");
})
//鼠标移动时连续触发
var mouseMove = document.getElementById("mouseMove");
mouseMove.addEventListener("mousemove",function(){
    console.log("mouseMove");
})
//鼠标进入时触发，但不包括子节点
var mouseEnter = document.getElementById("mouseEnter");
mouseEnter.addEventListener("mouseenter",function(){
    console.log("mouseEnter");
})
//鼠标离开时触发，但不包括父节点
var mouseLeave = document.getElementById("mouseLeave");
mouseLeave.addEventListener("mouseleave",function(){
    console.log("mouseLeave");
})
//鼠标进入时触发，进入子节点再次触发
var mouseOver = document.getElementById("mouseOver");
mouseOver.addEventListener("mouseover",function(){
    console.log("mouseOver");
})
//鼠标离开时触发，离开父节点再次触发
var mouseOut = document.getElementById("mouseOut");
mouseOut.addEventListener("mouseout",function(){
    console.log("mouseOut");
})
//鼠标滚轮时触发
var wheel = document.getElementById("wheel");
wheel.addEventListener("wheel",function(){
    console.log("wheel");
})

/*event事件对象*/
//event获取事件属性
var printEvent = document.getElementById("printEvent");
printEvent.addEventListener("click",function(event){
    console.log(event);
})
//event.target 获取触发事件的元素
//event.type 返回事件类型，只读
printEvent.addEventListener("mousedown",function(event){
    console.log(event.target);
    console.log(event.type);
    event.target.innerHTML = "Clicked";
})
printEvent.addEventListener("mouseup",function(event){
    console.log(event.target);
    console.log(event.type);
    event.target.innerHTML = "PrintEvent";
})
//event.preventDefault() 阻止浏览器默认事件
var printBilibili = document.getElementById("bilibili");
printBilibili.addEventListener("click",function(event){
    event.preventDefault();
    console.log("bilibili");
})
//event.stopPropagation() 阻止事件冒泡
var fatherevent = document.getElementById("FatherEvent");
var sonevent = document.getElementById("SonEvent");
fatherevent.addEventListener("click",function(){
    console.log("FatherEvent");
})
sonevent.addEventListener("click",function(e){
    e.stopPropagation();
    console.log("SonEvent");
})

/*键盘事件清单*/
//keydown 键盘按下时触发
//keyup 键盘松开时触发
//keypress 键盘按下触发，但是ctrl、alt、meta、shift等无值键无法触发
var username = document.getElementById("username");
username.addEventListener("keydown",function(e){
    console.log("keydown");
    console.log("键值是:",e.keyCode);
})
username.addEventListener("keyup",function(e){
    console.log(e.target.value);
})
username.addEventListener("keypress",function(e){
    console.log("keypress");
})
//e.keyCode 返回键值

/*表单事件*/
//input事件，输入时触发
var inputEvent = document.getElementById("inputEvent");
inputEvent.addEventListener("input",function(e){
    console.log(e.target.value);
})
//select事件，选择时触发
inputEvent.addEventListener("select",function(e){
    console.log(e.target.value);
})
//change事件,仅当失去焦点和回车后触发
var changeEvent = document.getElementById("changeEvent");
changeEvent.addEventListener("change",function(e){
    console.log(e.target.value);
})
//reset事件，作用于表单上,清空表单
var resetForm = document.getElementById("resetForm");
var resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click",function(e){
    resetForm.reset();
})
//submit事件，作用于表单上，将表单内容提交给服务器
resetForm.addEventListener("submit",function(){
    
})

/*事件代理 通过父元素处理子元素事件*/
var fatherTag = document.getElementById("fatherTag");
fatherTag.addEventListener("click",function(e){
    console.log(e.target.tagName.toLowerCase());//toLowerCase 转换成小写
    console.log(e.target.innerHTML);
})

/*定时器 setTimeout(function,time/ms) 延时执行
本函数内部的function如果内部有this指针，则此指针指向全局环境
若仍要使用，则可以在setTimeout外部先指定一个变量赋值this再调用*/
var afunction = setTimeout(function(){
    console.log("Hello World");
},3000);
//clearTimeout( x ) 取消x定时器
clearTimeout(afunction);

/*定时器 setInterval(function,time/ms) 每隔一段时间执行一次*/
var aInterval = setInterval(function(){
    document.getElementById("sonP").innerHTML = Date(Date.now);
    document.getElementById("sonP").style.fontSize = "20px";
},1000);
//clearInterval( x ) 取消x定时器

/*滚动事件*/
// window.addEventListener("scroll",function(){
//     console.log("Scrolled");
//     //document.documentElement.scrollTop 获取滚动高度
//     console.log(document.documentElement.scrollTop);
// })
//此函数执行频率太高，需要防抖函数
/*防抖函数*/
function debounce(fc,delay){
    var timer = null;
    return function(){
        if(timer){
            //计时器存在，则清除计时器
            clearTimeout(timer);
        }
        //计时器不存在，则设置延时执行
        timer = setTimeout(fc,delay);
        
    }
    //每次请求都会检测timer是否存在，在delay时间内多次请求，则会清除timer停止执行，直到最后一次请求，经过delay后执行一次
}
//防抖后的滚动事件
var printScrollTop = function(){
    console.log(document.documentElement.scrollTop);
}
window.onscroll = debounce(printScrollTop,400);
//鼠标移动连续触发的防抖
var debounceMousemove = document.getElementById("debounceMousemove");
function printMousemove(){
    console.log("MouseMove!!!");
}
debounceMousemove.addEventListener("mousemove",debounce(printMousemove,100));
//除了防抖函数，也可以用节流函数拯救性能
/*节流函数*/
function throttle(fc,delay){
    var flag = true;
    return function(){
        if(flag){
            flag = false;
            setTimeout(function(){
                fc();
                flag = true;
            },delay);
        }else return false;
    }
}
//节流后的滚动事件
function printScrollTop() {
    console.log(document.documentElement.scrollTop);
}

window.addEventListener("scroll",throttle(printScrollTop,200));




