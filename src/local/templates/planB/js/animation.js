document.addEventListener('DOMContentLoaded', function(){
    gsap.registerPlugin(ScrollTrigger); 

    let windowWidth = window.innerWidth;
    window.addEventListener('resize', function(){
        windowWidth = window.innerWidth; 
    });
    

    let headerTop = document.querySelector('.header-top');
    if(headerTop){
        headerTop.classList.remove('header-top--start');
    }

    // const aboutTL = gsap.timeline();
    gsap.fromTo('.header-hall__content',{y: 1000},{y: 0, ease:  "power1.out", duration: 0.9}); 
    gsap.fromTo('.header-hall__decor-img-box',{y: 1000},{y: 0, ease:  "power1.out", duration: 0.9}, '-=0.7'); 

    // gsap.fromTo('.advantages-list-animation',{y: 500},{y: 0, ease:  "power1.out", duration: 0.9}, '-=0.7'); 
    
    let advantageItems = document.querySelectorAll('.main-page .advantage');
    if(advantageItems.length > 0){
        let advantageAount = 0;
        advantageItems.forEach(advantage=>{
            gsap.fromTo(advantage, {y: 300 + advantageAount + 200},{  y: 0, ease:  "power1.out", duration: 1.5, }, ); 
            advantageAount = advantageAount + 200;
        })
    }
    
    
    let nlFeature = document.querySelectorAll('.feature');
    if(nlFeature.length > 0){
        let featureCount = 0;
        nlFeature.forEach(feature=>{
            gsap.fromTo(feature, {y: 300 + featureCount + 200},{scrollTrigger: '.about-section .btn',  y: 0, ease:  "power1.out", duration: 1, }, ); 
            featureCount = featureCount + 200;
        });
    }

    let nlWorkStages = document.querySelectorAll('.work-stages');
    if(nlWorkStages.length > 0){
        nlWorkStages.forEach(ws=>{
            gsap.fromTo(ws, {y: 40},{scrollTrigger: ws,  y: 0, ease:  "power1.out", duration: 0.5, }, ); 
        });
    }
    
    let nlServices = document.querySelectorAll('.services-cost-section .services');
    if(nlServices.length > 0){
        let servicesCount = 0;
        nlServices.forEach(services=>{ 
            if(windowWidth > 1135){
                gsap.fromTo(services, {y: 500 + servicesCount + 500},{scrollTrigger: '.services-cost-section .section-title',  y: 0, ease:  "power1.out", duration: 0.9,}); 
                servicesCount = servicesCount + 500;
            }else{
                gsap.fromTo(services, {y: 200},{scrollTrigger: services,  y: 0, ease:  "power1.out", duration: 0.7, }, ); 
            }
            
            
        });
    }

    let nlReviews = document.querySelectorAll('.reviews-sectinon .review'); 
    if(nlReviews.length > 0){
        nlReviews.forEach(review=>{
            gsap.fromTo(review, {y: 80},{scrollTrigger: review,  y: 0, ease:  "power1.out", duration: 0.5, }, ); 
        });
    }

    let nlANSpoiler = document.querySelectorAll('.answers-section .spoiler');
    if(nlANSpoiler.length > 0){
        nlANSpoiler.forEach(spoiler=>{
            gsap.fromTo(spoiler, {y: 60},{scrollTrigger: spoiler,  y: 0, ease:  "power1.out", duration: 0.5, }, ); 
        });
    }

    
});