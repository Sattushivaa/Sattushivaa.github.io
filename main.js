console.log('Hello World!');
let body = document.querySelector("h1") ; 
let animator = new Animator (body ) ; 
animator.animate(2000,500,"fast","efficient"); 
let section_el = document.querySelectorAll ('section *');
section_el.forEach( el => ScrollFade (el ,500));

let sideScroll_el = document.querySelectorAll(".ss") ; 
sideScroll_el.forEach(el=>ScrollSide(el,500));