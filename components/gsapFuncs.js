import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
export const setupMenuTextAnimation = (page,gsap) => {
  ScrollTrigger.getAll()
  console.log(page)
  page.childNodes.forEach((child,idx) => {
    let toggleActions ='play complete restart reset'
    // console.log('menuTextANIMATIONS',child)
    console.log(child)
    if(child.classList.contains('light-bg')){
      
      // console.log('LIGHT BG',child)
      gsap.to('#nav-logo',{
        scrollTrigger:{
          trigger:child,
          start:'top top',
          // endTrigger:page[idx+1],
          // end: "bottom +=2500px",
          toggleActions:toggleActions,
          id:'Light BG '+idx,markers:true
        },fill:'#672349',duration:0.2
      })
      gsap.to('.menu-text1',{
        scrollTrigger:{
          trigger:child,
          start:'top +=30px',
          // end:'bottom bottom',
          // end: "bottom +=2500px",

          toggleActions:toggleActions
        },color:'#672349',duration:0.2,
        // textShadow: '1px 1px 3px  white',

      })
    } 
    else {
      // console.log('wrapper children',child.classList.contains('blue-gr2'))
      // console.log('DArk BG',child)

      gsap.to('#nav-logo',{
        scrollTrigger:{
          trigger:child,
          start:'top +=30px',
          // end:'bottom bottom',
          toggleActions:toggleActions,
          id:'DARK BG '+idx,markers:true

        },fill:'white',duration:0.2,
      })
      gsap.to('.menu-text1',{
        scrollTrigger:{
          trigger:child,
          start:'top +=30px',
          // end:'bottom bottom',
          toggleActions:toggleActions
        },color:'white',duration:0.2
        // ,textShadow: '1px 1px 3px var(--blue)',
      })
    }
   
  })
}

export function setupSplits(SplitText,gsap) {
  let quotes = document.querySelectorAll('.split-text-large')
  let quotesSmall = document.querySelectorAll('.split-text-small')
  let quotesMedium= document.querySelectorAll('.split-text-medium')

  let lineWrapper = document.querySelectorAll('.bd-line-wrapper')
  let lines = document.querySelectorAll('.bd-line')
  if(lineWrapper){
    lineWrapper.forEach((line,idx) =>{
     let currentIdx = idx*2
     gsap.set(lines[currentIdx],{scaleX:0})
     gsap.set(lines[currentIdx+1],{scaleX:0})
        gsap.to(lines[currentIdx], {
          scaleX: 1,
          duration: 2,
          transformOrigin: "left center",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: lineWrapper[idx],
            start: "top 85%",
            toggleActions: "play none none reverse",
            // markers:true,
            // id:'lines'
          }
        });
        gsap.to(lines[currentIdx+1], {
          scaleX: 1,
          duration: 2,
          transformOrigin: "left center",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: lineWrapper[idx],
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
    })
  }   
  quotes.forEach(quote => {
    // Reset if needed
    if (quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }
    quote.split = new SplitText(quote, {
      type: "lines,words",
      linesClass: "split-line-large"
    });
    // Set up the anim
    quote.anim = gsap.from(quote.split.words, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 85%",
        // markers:true,id:'lg title'
      },
      duration: 0.5,
      ease: "circ.out",
      y: 150,
      stagger: 0.1,
    });
  });
  quotesSmall.forEach(quote => {
    // Reset if needed
    if (quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }
    quote.split = new SplitText(quote, {
      type: "lines,words",
      linesClass: "split-line-small"
    });
    // Set up the anim
    quote.anim = gsap.from(quote.split.words, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 85%",
      },
      duration: 0.5,
      ease: "circ.out",
      y: 150,
      stagger: 0.1,
    });
  });
  quotesMedium.forEach(quote => {
    // Reset if needed
    if (quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }
    quote.split = new SplitText(quote, {
      type: "lines,words",
      linesClass: "split-line-medium"
    });
    // Set up the anim
    quote.anim = gsap.from(quote.split.words, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 85%",
        // markers:true,id:'med title'
      },
      duration: 0.5,
      ease: "circ.out",
      y: 150,
      stagger: 0.1,
    });
  });
 

  
}
