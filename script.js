gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);



document.addEventListener('DOMContentLoaded',()=>{
    console.log("LOADED")
    const el = document.querySelector(".clip-path-section .inner")

    let isActive = false
    ScrollTrigger.create({
        trigger: ".clip-path-section .inner",
        start: "top center",
        end: "+=500",
        onUpdate: self => {
            if(self.isActive !==isActive){
                isActive = self.isActive
                
                if(isActive){
                    el.style.clipPath = "circle(200% at 0% 0%)";
                    console.log("enabled")
                }
                else{
                    el.style.clipPath = "circle(0% at 0% 0%)";
                    console.log("disabled")
                }
            }
        }
      });
})


