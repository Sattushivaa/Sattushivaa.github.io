const el=(k)=>document.querySelector(k);
document.onscroll = (ev)=>{
  var scrolled = window.scrollY;
  var vl = -(scrolled)+'px';
  el('#moon').style.top = vl.replace('-','');
  el('#rockright').style.right = 
  el('#rockleft').style.left =
 // el('#pebbleright').style.right = 
  el('#pebbleleft').style.left = vl;
}

el('#moon').style.top = -window.scrollY+'px';