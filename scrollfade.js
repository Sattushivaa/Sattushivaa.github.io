function ScrollFade(el , time) {
  let style = getComputedStyle(el) ; 

  Object.assign (el.style,{ transition : "all "+time+"ms", opacity : 0, transform : "translateY(50px)"}) ; 
   ;
  document.addEventListener ( "scroll", (e)=>{ 
    let rect = el.getBoundingClientRect (); 
    if (rect.top < screen.availHeight -300) {el.style.opacity = 1; el.style.transform = 'translateY(0px)' } else { 
      el.style.opacity = 0; 
      el.style.transform = 'translateY(50px)' ;
    }
    
  })
}

function ScrollSide(el , time) {
  let style = getComputedStyle(el) ; 

  Object.assign (el.style,{ transition : "all "+time+"ms", opacity : 0, transform : "translateX(-100px)"}) ; 
   ;
  document.addEventListener ( "scroll", (e)=>{ 
    let rect = el.getBoundingClientRect (); 
    if (rect.top < screen.availHeight -300) {el.style.opacity = 1; el.style.transform = 'translateX(0px)' } else { 
      el.style.opacity = 0; 
      el.style.transform = 'translateX(-100px)' ;
    }
    
  })
}

