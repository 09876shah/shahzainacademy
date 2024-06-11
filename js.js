var btn=document.querySelector("#nav .right i")
var tl=gsap.timeline();
var t2=gsap.timeline();
var t3=gsap.timeline();
var t4=gsap.timeline();
var t5=gsap.timeline();
var t6=gsap.timeline();
var t7=gsap.timeline();
var t8=gsap.timeline();
var t9=gsap.timeline();
var t10=gsap.timeline();
var page3y;
var pag3=document.querySelector("#page3");
var btn2=document.querySelector("#hbsc .right i");
var page3img1=document.querySelector(".item1 img");
var page3img2=document.querySelector(".item2 img");
var page3img3=document.querySelector(".item3 img");
var page3img4=document.querySelector(".item4 img");
var page3img5=document.querySelector(".item5 img");
var page3img6=document.querySelector(".item6 img");
var page3img7=document.querySelector(".item7 img");
var page3img8=document.querySelector(".item8 img");
// var pag2=document.querySelector("#page2");
var test=0;


gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("section").forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      endTrigger: "body",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false
    });
  });




gsap.from(".right img",{
    opacity:0,
    transform:"TranslateX(100%)",
    duration:1.7
})
function rotate(){
    gsap.to(".right img",{
        rotate:360,
        duration:1.5,
        delay:2,
        ease:"linear"
    })
}
if(test===0){
    setInterval(rotate,3000);
    test=1;
}
else{
    setInterval(rotate,3000);
    test=0
}
gsap.from(".left", {
    opacity: 0,
    duration: 1.3,
    stagger: 0.5,
});
tl.to("#hbsc",{
    right:0,
    duration:0.4
})
tl.from("hbsc",{
    right:-30,
    duration:0.4
})
tl.pause();
btn.addEventListener("click",function(){
   tl.play();
})
btn2.addEventListener("click",function(){
   tl.reverse();
})

   

t2.from(".lefts img",{
    opacity:0,
    y:100,
    duration:0.7,
    stagger:0.5
})
t2.from(".rights",{
    opacity:0,
    duration:0.7,
    // delay:0.2,
    x:200,
    stagger:0.7
    
})
t2.pause();


// t3.from(".item1 img",{
//     opacity:0,
//     duration:0.5,
//     y:100
// })
// t3.pause();

window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        t2.play();
        // page3y=dets.deltaY;
       
    }    
    })
// pag3.addEventListener("scroll",function(){
//     t3.play();
// })

    t3.to(".item1 img",{
        scale:1.3,
        duration:0.4,  
   })
    t4.to(".item2 img",{
        scale:1.3,
        duration:0.4,  
   })
    t5.to(".item3 img",{
        scale:1.3,
        duration:0.4,  
   })
    t6.to(".item4 img",{
        scale:1.3,
        duration:0.4,  
   })
    t7.to(".item5 img",{
        scale:1.3,
        duration:0.4,  
   })
    t8.to(".item6 img",{
        scale:1.3,
        duration:0.4,  
   })
    t9.to(".item7 img",{
        scale:1.3,
        duration:0.4,  
   })
    t10.to(".item8 img",{
        scale:1.3,
        duration:0.4,  
   })
t3.pause();
t4.pause();
t5.pause();
t6.pause();
t7.pause();
t8.pause();
t9.pause();
t10.pause();

page3img1.addEventListener("mousemove",function(){
    t3.play();
})
page3img2.addEventListener("mousemove",function(){
    t4.play();
})
page3img3.addEventListener("mousemove",function(){
    t5.play();
})
page3img4.addEventListener("mousemove",function(){
    t6.play();
})
page3img5.addEventListener("mousemove",function(){
    t7.play();
})
page3img6.addEventListener("mousemove",function(){
    t8.play();
})
page3img7.addEventListener("mousemove",function(){
    t9.play();
})
page3img8.addEventListener("mousemove",function(){
    t10.play();
})
page3img1.addEventListener("mouseleave",function(){
    t3.reverse();
})
page3img2.addEventListener("mouseleave",function(){
    t4.reverse();
})
page3img3.addEventListener("mouseleave",function(){
    t5.reverse();
})
page3img4.addEventListener("mouseleave",function(){
    t6.reverse();
})
page3img5.addEventListener("mouseleave",function(){
    t7.reverse();
})
page3img6.addEventListener("mouseleave",function(){
    t8.reverse();
})
page3img7.addEventListener("mouseleave",function(){
    t9.reverse();
})
page3img8.addEventListener("mouseleave",function(){
    t10.reverse();
})