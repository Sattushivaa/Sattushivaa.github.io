alert('This website is a school project and may contain information from oyher sources');

var shadow = document.getElementById('box');
let rtt = 0;
setInterval(()=>{
  shadow.style.transform = `rotateX(${rtt}deg) rotateY(${rtt}deg)`;
  rtt++;
},100);

var para = document.getElementById('para');
var string = para.textContent;

para.innerHTML = '<br/><br/>';
for(let i = 0; i < string.length; i++){
  para.innerHTML += `<span class="char">${string[i]}</span>`;
}
function hdShow(elm,time_interval,main_interval){ 
  elm.style.opacity = '1';
    setInterval(()=>{
      elm.style.opacity = '0';
    },main_interval);
    setTimeout(()=>{
      setInterval(()=>{
        elm.style.opacity = '1';
      },main_interval);
    },time_interval);
}

var chars = document.getElementsByClassName('char');
//for(let i = 0; i < string.length; i++){
//  chars[i].innerHTML = string[i];
//}

//var chars2 = chars;

var num = 0;

setInterval(function(){
  if(num < chars.length){
  hdShow(chars[num],3200,3200);
  num ++;}
},200);

var GMT = new CUBER;
var cube1_map = GMT.map(200,1,'z');
var cube1_cmp = GMT.compile(cube1_map,shadow);
GMT.style(cube1_cmp,{
  property : ['background'],
  value : ['#0208454D']
});