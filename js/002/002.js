function clickPrintButton(){
    console.log("Clicked PrintButton");
}

/*dom0�����¼�ʵ��*/
//���ԣ���ͬʱ���ڶ����ͬ�¼�ʱ��ǰ�߻ᱻ���߸���
var dom0PrintButton = document.getElementById("dom0click");
dom0PrintButton.onclick = function (){
    console.log("dom0Clicked Button1");
}
dom0PrintButton.onclick = function (){
    console.log("dom0Clicked Button2");
}
/*dom2�����¼�ʵ��*/
//���ԣ���ͬʱ���ڶ����ͬ�¼�ʱ�������¼���ͬʱ����
var dom2PrintButton = document.getElementById("dom2click");
dom2PrintButton.addEventListener("click",function(){
    console.log("dom2Clicked Button1");
})
dom2PrintButton.addEventListener("click",function(){
    console.log("dom2Clicked Button2");
})

/*��괥���¼�*/
//��������
var clickButton = document.getElementById("click");
clickButton.addEventListener("click",function(){
    console.log("click");
})
//˫������
var dblclickButton = document.getElementById("dblClick");
dblclickButton.addEventListener("dblclick",function(){
    console.log("dblClick");
})
//������괥��
var mouseDown = document.getElementById("mouseDown");
mouseDown.addEventListener("mousedown",function(){
    console.log("mouseDown");
})
//�ɿ���괥��
var mouseUp = document.getElementById("mouseUp");
mouseUp.addEventListener("mouseup",function(){
    console.log("mouseUp");
})
//����ƶ�ʱ��������
var mouseMove = document.getElementById("mouseMove");
mouseMove.addEventListener("mousemove",function(){
    console.log("mouseMove");
})
//������ʱ���������������ӽڵ�
var mouseEnter = document.getElementById("mouseEnter");
mouseEnter.addEventListener("mouseenter",function(){
    console.log("mouseEnter");
})
//����뿪ʱ�����������������ڵ�
var mouseLeave = document.getElementById("mouseLeave");
mouseLeave.addEventListener("mouseleave",function(){
    console.log("mouseLeave");
})
//������ʱ�����������ӽڵ��ٴδ���
var mouseOver = document.getElementById("mouseOver");
mouseOver.addEventListener("mouseover",function(){
    console.log("mouseOver");
})
//����뿪ʱ�������뿪���ڵ��ٴδ���
var mouseOut = document.getElementById("mouseOut");
mouseOut.addEventListener("mouseout",function(){
    console.log("mouseOut");
})
//������ʱ����
var wheel = document.getElementById("wheel");
wheel.addEventListener("wheel",function(){
    console.log("wheel");
})

/*event�¼�����*/
//event��ȡ�¼�����
var printEvent = document.getElementById("printEvent");
printEvent.addEventListener("click",function(event){
    console.log(event);
})
//event.target ��ȡ�����¼���Ԫ��
//event.type �����¼����ͣ�ֻ��
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
//event.preventDefault() ��ֹ�����Ĭ���¼�
var printBilibili = document.getElementById("bilibili");
printBilibili.addEventListener("click",function(event){
    event.preventDefault();
    console.log("bilibili");
})
//event.stopPropagation() ��ֹ�¼�ð��
var fatherevent = document.getElementById("FatherEvent");
var sonevent = document.getElementById("SonEvent");
fatherevent.addEventListener("click",function(){
    console.log("FatherEvent");
})
sonevent.addEventListener("click",function(e){
    e.stopPropagation();
    console.log("SonEvent");
})

/*�����¼��嵥*/
//keydown ���̰���ʱ����
//keyup �����ɿ�ʱ����
//keypress ���̰��´���������ctrl��alt��meta��shift����ֵ���޷�����
var username = document.getElementById("username");
username.addEventListener("keydown",function(e){
    console.log("keydown");
    console.log("��ֵ��:",e.keyCode);
})
username.addEventListener("keyup",function(e){
    console.log(e.target.value);
})
username.addEventListener("keypress",function(e){
    console.log("keypress");
})
//e.keyCode ���ؼ�ֵ

/*���¼�*/
//input�¼�������ʱ����
var inputEvent = document.getElementById("inputEvent");
inputEvent.addEventListener("input",function(e){
    console.log(e.target.value);
})
//select�¼���ѡ��ʱ����
inputEvent.addEventListener("select",function(e){
    console.log(e.target.value);
})
//change�¼�,����ʧȥ����ͻس��󴥷�
var changeEvent = document.getElementById("changeEvent");
changeEvent.addEventListener("change",function(e){
    console.log(e.target.value);
})
//reset�¼��������ڱ���,��ձ�
var resetForm = document.getElementById("resetForm");
var resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click",function(e){
    resetForm.reset();
})
//submit�¼��������ڱ��ϣ����������ύ��������
resetForm.addEventListener("submit",function(){
    
})

/*�¼����� ͨ����Ԫ�ش�����Ԫ���¼�*/
var fatherTag = document.getElementById("fatherTag");
fatherTag.addEventListener("click",function(e){
    console.log(e.target.tagName.toLowerCase());//toLowerCase ת����Сд
    console.log(e.target.innerHTML);
})

/*��ʱ�� setTimeout(function,time/ms) ��ʱִ��
�������ڲ���function����ڲ���thisָ�룬���ָ��ָ��ȫ�ֻ���
����Ҫʹ�ã��������setTimeout�ⲿ��ָ��һ��������ֵthis�ٵ���*/
var afunction = setTimeout(function(){
    console.log("Hello World");
},3000);
//clearTimeout( x ) ȡ��x��ʱ��
clearTimeout(afunction);

/*��ʱ�� setInterval(function,time/ms) ÿ��һ��ʱ��ִ��һ��*/
var aInterval = setInterval(function(){
    document.getElementById("sonP").innerHTML = Date(Date.now);
    document.getElementById("sonP").style.fontSize = "20px";
},1000);
//clearInterval( x ) ȡ��x��ʱ��

/*�����¼�*/
// window.addEventListener("scroll",function(){
//     console.log("Scrolled");
//     //document.documentElement.scrollTop ��ȡ�����߶�
//     console.log(document.documentElement.scrollTop);
// })
//�˺���ִ��Ƶ��̫�ߣ���Ҫ��������
/*��������*/
function debounce(fc,delay){
    var timer = null;
    return function(){
        if(timer){
            //��ʱ�����ڣ��������ʱ��
            clearTimeout(timer);
        }
        //��ʱ�������ڣ���������ʱִ��
        timer = setTimeout(fc,delay);
        
    }
    //ÿ�����󶼻���timer�Ƿ���ڣ���delayʱ���ڶ������������timerִֹͣ�У�ֱ�����һ�����󣬾���delay��ִ��һ��
}
//������Ĺ����¼�
var printScrollTop = function(){
    console.log(document.documentElement.scrollTop);
}
window.onscroll = debounce(printScrollTop,400);
//����ƶ����������ķ���
var debounceMousemove = document.getElementById("debounceMousemove");
function printMousemove(){
    console.log("MouseMove!!!");
}
debounceMousemove.addEventListener("mousemove",debounce(printMousemove,100));
//���˷���������Ҳ�����ý���������������
/*��������*/
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
//������Ĺ����¼�
function printScrollTop() {
    console.log(document.documentElement.scrollTop);
}

window.addEventListener("scroll",throttle(printScrollTop,200));




