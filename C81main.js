var canvas=document.getElementById("myCanvas");
var draw=canvas.getContext("2d");
var lastxposition,lastyposition;
var pencolor="red";
var linethickness=5;
var screenwidth=screen.width;
var smallcanvaswidth=screen.width-70;
var smallcanvasheight=screen.height-300;

if (screenwidth<992){
  document.getElementById("myCanvas").width=smallcanvaswidth;
   document.getElementById("myCanvas").height=smallcanvasheight;
}
canvas.addEventListener("touchstart",touchstartf);
function  touchstartf(e){  
  lastxposition=e.touches[0].clientX-canvas.offsetLeft;
  lastyposition=e.touches[0].clienty-canvas.offsetTop;
}
canvas.addEventListener("touchmove",touchmovef);
function  touchmovef(e){
currentxposition=e.touches[0].clientX-canvas.offsetLeft;
 currentyposition=e.touches[0].clientY-canvas.offsetTop;
  draw.beginPath();
draw.strokeStyle=pencolor;
draw.lineWidth=linethickness;
draw.moveTo(lastXposition,lastYposition);
draw.lineTo(currentXposition,currentYposition);
draw.stroke();
lastXposition=currentXposition;
lastYposition=currentYposition;
}