var c=document.getElementById("trigon");
var ctx=c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(50,50);
ctx.moveTo(50,50);
ctx.lineTo(100,0);
ctx.moveTo(100,0);
ctx.lineTo(0,0);
ctx.strokeStyle="green";
ctx.stroke();
var c=document.getElementById("parallelepiped");
var ctx=c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(60,0);
ctx.moveTo(60,0);
ctx.lineTo(80,50);
ctx.moveTo(0,0);
ctx.lineTo(20,50);
ctx.moveTo(20,50);
ctx.lineTo(80,50);
ctx.strokeStyle="red";
ctx.stroke();
var c=document.getElementById("trapezoid");
var ctx=c.getContext("2d");
ctx.moveTo(40,0);
ctx.lineTo(80,0);
ctx.moveTo(80,0);
ctx.lineTo(100,50);
ctx.moveTo(40,0);
ctx.lineTo(20,50);
ctx.moveTo(20,50);
ctx.lineTo(100,50);
ctx.strokeStyle="forestgreen";
ctx.stroke();
var c=document.getElementById("line");
var ctx=c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(100,0);
ctx.strokeStyle="royalblue";
ctx.stroke();
var c=document.getElementById("arrow");
var ctx=c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(100,0);
ctx.moveTo(100,0);
ctx.lineTo(85,5);
ctx.moveTo(100,0);
ctx.lineTo(85,0);
ctx.strokeStyle="indigo";
ctx.stroke();