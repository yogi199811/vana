gsap.to("#fs", {
    height: "0%",
    top: "100%",
    duration: 2,
    ease: Expo.easeInOut


})



gsap.from("#page1 h1, #page1 h3 ,  #nav img,#corner a", {
    opacity : 0 ,
    y : 15,
    delay : 1,
    duration: 0.6,
    stagger : 0.5,
    ease: Expo.easeInOut


})




gsap.to("#ring img",{

    scrollTrigger : {
        trigger : "#page2",
        start : "top 60%" ,
        // markers : true ,
        scrub : 2 ,
        // pin : true ,
        end : "top 80%"
    },
    // opacity : 1 ,
    duration : 2 ,
    // ease : Expo.easeOut,
    y : -20 ,
    // stagger : 0.3
    // delay : 2


})

gsap.to("#watch img", {

    scrollTrigger: {
        trigger: "#page2",
        start: "top 20%",
        // markers: true,
        scrub: 2,
        // pin: true,
        end: "top 40%"
    },
    // opacity : 1 ,
    duration: 2,
    // ease : Expo.easeOut,
    y: -50,
    // stagger : 0.3
    // delay : 2


})

gsap.to("#shoes img", {

    scrollTrigger: {
        trigger: "#page2",
        start: "top 20%",
        // markers: true,
        scrub: 2,
        // pin: true,
        end: "top 40%"
    },
    // opacity : 1 ,
    duration: 2,
    // ease : Expo.easeOut,
    y: 40,
    // stagger : 0.3
    // delay : 2


})

gsap.to("#doller", {

    scrollTrigger: {

        trigger: "#doller",
        start: "top 80%",
        // markers: true,
        scrub: 2,
        // pin: true,
        end: "top 100%"
    },

    // opacity : 0,
    y: -30,


})


gsap.to("#eclips img", {

    scrollTrigger: {
        trigger: "#page4",
        start: "top 20%",
        // markers: true,
        scrub: 2,
        // pin: true,
        end: "top 50%"
    },
    // opacity : 1 ,
    duration: 4,
    ease : Expo.ease,
    y: -100,
    // stagger : 0.3
    // delay : 2


})

gsap.to("#semicircle img", {

    scrollTrigger: {
        trigger: "#page5",
        start: "top 20%",
        // markers: true,
        scrub: 2,
        // pin: true,
        end: "top 50%"
    },
    // opacity : 1 ,
    duration: 4,
    // transform : "scale(1.03)",
    ease : Expo.ease,
    y: -60,
    
    // stagger : 0.3
    // delay : 2


})


gsap.to("#fullcircle img", {

    scrollTrigger: {
        trigger: "#page6",
        start: "top 20%",
        // markers: true,
        scrub: 2,
        // pin: true,
        end: "top 50%"
    },
    // opacity : 1 ,
    duration: 4,
    ease : Expo.ease,
    y: -100,

    // stagger : 0.3
    // delay : 2


})

document.querySelector("#semicircle").addEventListener("mousemove",function(){
    this.style.filter = "saturate(8)"
})

document.querySelector("#semicircle").addEventListener("mouseleave",function(){
    this.style.filter = "saturate(1)"
})




document.querySelector("#watch").addEventListener("mouseenter", function () {
    document.querySelector("#watch").style.transform = "scale(0.8)"
})

document.querySelector("#watch").addEventListener("mouseleave", function () {
    document.querySelector("#watch").style.transform = "scale(1)"
})



document.querySelector("#shoes").addEventListener("mouseenter", function () {
    document.querySelector("#shoes").style.transform = "scale(1.2)"
})

document.querySelector("#shoes").addEventListener("mouseleave", function () {
    document.querySelector("#shoes").style.transform = "scale(1)"
})


document.querySelector("#doller").addEventListener("mouseenter", function () {
    document.querySelector("#doller").style.transform = "scale(0.8)"
})

document.querySelector("#doller").addEventListener("mouseleave", function () {
    document.querySelector("#doller").style.transform = "scale(1)"
})





 const eclips = document.querySelector("#eclips");
 var flag = 0 ;
 var slag = 0
 const  rectangle= document.querySelector("#rectangle");


  rectangle.addEventListener("mouseenter",function(){
 if(flag===0){
     
     eclips.style.backgroundColor = "rgb(255,107,59)"
     flag = 1
 }

 else if (flag===1){
    eclips.style.backgroundColor = "#dbff00"
    flag = 2

 }

 else if (flag===2){
    eclips.style.backgroundColor = "rgb(238,189,255)"
    flag = 3

 }

 
 else if (flag===3){
    eclips.style.backgroundColor = "#0075ff"
    flag = 4
    

 }

 else if (flag===4){
    eclips.style.backgroundColor = "black"
    flag = 0
    

 }

})



eclips.addEventListener("mouseenter",function(){
    if(slag===0){
        
        rectangle.style.backgroundColor = "rgb(255,107,59)"
        slag = 1
    }
   
    else if (slag===1){
       rectangle.style.backgroundColor = "#dbff00"
       slag = 2
   
    }
   
    else if (slag===2){
       rectangle.style.backgroundColor = "rgb(238,189,255)"
       slag = 3
   
    }
   
    
    else if (slag===3){
       rectangle.style.backgroundColor = "#0075ff"
       slag = 4
       
   
    }
   
    else if (slag===4){
       rectangle.style.backgroundColor = "white"
       slag = 0
       
   
    }
   
   })





//  var nav = document.querySelector("#nav");
//  window.addEventListener("scroll",function(){

//     nav.style.top = "-10%"
  
// })

    
   var tl = gsap.timeline({
    repeat : -1 ,
   })

    tl
    .to("#line2 h1",{
        top : "-15%" ,
        ease : Expo.easeInOut ,
        stagger : 2 ,
        
        
    },'y')
    
    .to("#line2 h1",{
        top : "-150%" ,
        ease : Expo.easeInOut ,
        stagger : 2 ,
        delay : 2
    
        
    
    },'y')

    .to("#line4 h1",{
        top : "-15%" ,
        ease : Expo.easeInOut ,
        stagger : 2 ,
        
        
    },'y')

    .to("#line4 h1",{
        top : "-150%" ,
        ease : Expo.easeInOut ,
        stagger : 2 ,
        delay : 2
    
        
    
    },'y')


  
    

    







// gsap.to("#line2 h1",{
//     top : "-140%" ,
//     delay : 2 ,
//     ease : Expo.easeInOut ,
//     stagger : 2 ,


  
    
    
    



// })


//   var cursor = document.querySelector("#cursor")

//   document.querySelector("#main").addEventListener("mousemove",function(dets){
//     cursor.style.left  = `${(dets.clientX)}px`
//     cursor.style.top  = `${(dets.clientY)}px`
//   })