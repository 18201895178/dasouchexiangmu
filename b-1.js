// JavaScript Document
var bigdiv=document.getElementById("ad");
var a=document.getElementById("adv").getElementsByTagName("div");
var left=document.getElementById("left");
var right=document.getElementById("right");
var b=0;
a[b].classList.add("cover");
var play=function(){
   var _b=b;
    b<a.length-1 ? b++ : b=0;
	a[b].classList.add("cover");
	a[_b].classList.remove("cover");		
	}
var time=setInterval(play,2000);
bigdiv.onmouseover=function(){
	clearInterval(time);
	};
bigdiv.onmouseout=function(){
	time=setInterval(play,2000);
	};
left.onclick=function(){
	
	play();
	};

right.onclick=function(){
	var _b=b;
	b>0 ? b-- : b=a.length-1;
	a[b].classList.add("cover");
	a[_b].classList.remove("cover");	
	};