const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuContent = document.getElementById("mobile-menu-content");
mobileMenu?.addEventListener("click", function () {
    mobileMenuContent?.classList.toggle("hidden")
})
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
   });
gsap.from(".nav",{opacity:0,y:-100,duration:1.5,ease:"bounce.out"});

gsap.to(".hero-text",{
    duration: 2,
    text: "Grow Your Business With Customized Digital Marketing"
});

gsap.from(".about-title",{
    duration:1,
    x:"-100vw",
    scrollTrigger:{
        trigger:".about-title",
        end: '+=300', 
        scrub:0.5
    }
});
gsap.to(".about-subtitle",{
    duration: 2,
    scrollTrigger:{
        trigger:".about-subtitle",
        end: '+=250', 
        scrub:0.5 
    },
    text: "Social Reach is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients. Instead, Social Reach trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website."
});

gsap.from(".about-text1",{
    duration: 1,
    x:"-100vw",
    scrollTrigger:{
        trigger:".about-text1",
        end: '+=300', 
        scrub:0.5
    }
});

gsap.from(".about-image1",{
    duration:1,
    y:"100vh",
    opacity:0,
    scrollTrigger:{
        trigger:".about-text1",
        end: '+=300', 
        scrub:0.5
    }
});
gsap.from(".about-image2",{
    duration:1,
    y:"100vh",
    opacity:0,
    scrollTrigger:{
        trigger:".about-text2",
        end: '+=300', 
        scrub:0.5
    }
});
gsap.from(".about-text2",{
    duration: 1,
    x:"100vw",
    scrollTrigger:{
        trigger:".about-text2",
        end: '+=300', 
        scrub:0.5
    }
}); 

gsap.to(".customers-title",{
    duration: 2,
    text: "Businesses Have Already Grown With Our Digital Marketing Services",
    scrollTrigger:{
        trigger:".customers-title",
        end: '+=250', 
        scrub:0.5 
    }
}); 

gsap.from(".mcustomer",{
    duration: 1,
    x:"100vw",
    scrollTrigger:{
        trigger:".mcustomer",
        end: '+=300', 
        scrub:0.5
    }
}); 
let customerstimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".ocimage1",
        end: '+=700',
        toggleActions: "play reverse play reverse",
    }
});

customerstimeline.from(".ocimage1", { duration: 0.9, x: "100vw" })
  .from(".ocimage2", { duration: 0.9, x: "100vw" }, "-=0.7")
  .from(".ocimage3", { duration: 0.9, x: "100vw" }, "-=0.7")
  .from(".ocimage4", { duration: 0.9, x: "100vw" }, "-=0.7")
  .from(".ocimage5", { duration: 0.9, x: "100vw" }, "-=0.7");
 
  gsap.from(".scard1",{
    duration: 1,
    x:"-100vw",
    scrollTrigger:{
        trigger:".scard1",
        end: '+=400', 
        scrub:0.5
    }
}); 
gsap.from(".scard2",{
    duration: 1,
    x:"100vw",
    scrollTrigger:{
        trigger:".scard2",
        end: '+=400', 
        scrub:0.5
    }
}); 
gsap.from(".scard3",{
    duration: 1,
    x:"-100vw",
    scrollTrigger:{
        trigger:".scard3",
        end: '+=400', 
        scrub:0.5
    }
}); 
gsap.from(".scard4",{
    duration: 1,
    x:"100vw",
    scrollTrigger:{
        trigger:".scard4",
        end: '+=400', 
        scrub:0.5
    }
}); 



let reviews = gsap.timeline({
    scrollTrigger: {
        trigger: ".review-card",
        end: '+=300',
        scrub:0.5,
    }
});

reviews.from(".comment1",{duration: 1.5,scale: 0,borderRadius: "50%",opacity: 0,})
.from(".comment2",{duration: 1.5,scale: 0,borderRadius: "50%",opacity: 0,})
.from(".comment3",{duration: 1.5,scale: 0,borderRadius: "50%",opacity: 0,})