class Animator {
  constructor(el){
    if (!el instanceof HTMLElement ) throw "parameter el is not type of html element "; 
    this.EL = el ;
  }
  animate (  time, breaktime ,...texts ) { 
    let EL = this.EL ;
    let i = 0 ;
    function sentence () { 
      if ( texts.length == i) i=0 ; 
      let j = 0 ;
      let word = texts[i] ;
      //
      EL.innerText = '' ;
      function alphabet () {
        EL.innerText += word[j] ; 
        j++ ;
        if ( j == word.length ) return ; 
        setTimeout (alphabet , time/word.length ) ;
      } 
      alphabet () ;
      i++ ; 
      //if (i== texts.length ) i = 0 ;
      setTimeout(sentence,time+breaktime ) ;
    } 
    sentence () ;
  }
}