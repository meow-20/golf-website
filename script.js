let crsr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x - 37 +"px";
    crsr.style.top = dets.y - 23 +"px";

    blur.style.left = dets.x-150 +"px";
    blur.style.top = dets.y-150 +"px";
});

let all = document.querySelectorAll("#nav h4, #nav img, #text-about-us, #about-us img, #green-box h1, .card, h3, h4, h5, #logo, i, .copyright");
all.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        crsr.style.transition = 'all linear 0.1s';
        crsr.style.scale = 3;
        crsr.style.border = "0.2px solid #ccc";
        crsr.style.backgroundColor = "transparent";
    });
    element.addEventListener("mouseleave",function(){
        crsr.style.transition = 'all linear 0.1s';
        crsr.style.scale = 1;
        crsr.style.border = "0px";
        crsr.style.backgroundColor = "#95c11e";
    });
})

// const arrow = document.querySelector("#down-arrow");
// const hover = gsap.from("#down-arrow", {
//   duration: 0.5,
//   paused: true,
//   ease: "ease-in-out"
// });

// arrow.addEventListener("mouseenter", () => hover.play());
// arrow.addEventListener("mouseleave", () => hover.reverse());

gsap.to("#nav",{
    height: "100px",
    backgroundColor: "#000",
    duration:0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -5%",
        end: "top -6%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        start: "top -30%",
        end: "top -75%",
        // markers:true,
        scrub:1
    }
});

gsap.from("#about-us img, #text-about-us",{
    y:1000,
    // stagger:0.4,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 30%",
        scrub:1
    }
});

gsap.from(".card",{
    opacity:0.0,
    scale:0.6,
    duration:0.5,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:2
    }
})
gsap.from("#comma-one",{
    y:-90,
    x:-90,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#comma-one",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 37%",
        scrub:2
    }
})
gsap.from("#comma-two",{
    y:90,
    x:90,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#comma-two",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 77%",
        scrub:2
    }
})
gsap.from("#bg-text",{
    y:100,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#bg-text",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})