const googleKey = '6LcLMYMpAAAAADK7BMqMojyJEp8A88Zt9oiqSNLs';
@@include('simplebar.js');
@@include('choices.min.js');
@@include('imask.js');
@@include('FileFunnel.js');
@@include('swiper-bundle.js');
@@include('animation.js');
@@include('modal.js');
@@include('lightgallery.min.js');

function slideDown(el){
    el.style.height = 'auto';
    let elHeight = el.offsetHeight;
    el.style.height = '0px';
    setTimeout(function(){
        el.style.height = elHeight + 'px';
    }, 50);
    let interval = setInterval(function(){
        if(el.offsetHeight == elHeight){
           clearInterval(interval);
           el.style.height = 'auto';
           el.style.overflow = 'visible';
        }
    }, 300);
}
function slideUp(el){
    el.style.height = el.offsetHeight + 'px';
    el.style.overflow = 'hidden';
    setTimeout(function(){
        el.style.height = '0px';
    }, 100);
    let interval = setInterval(function(){
        if(el.offsetHeight == 0){
            clearInterval(interval);
            el.removeAttribute('style');
        }
    }, 300);
};
function toggleSlider(el){
    if(el.offsetHeight > 0){
        slideUp(el);
    }else{
        slideDown(el);
    }
}

document.addEventListener('DOMContentLoaded', function () {

    let nlUnwrapSSL = document.querySelectorAll('.unwrap-services-stage-list');
    if(nlUnwrapSSL.length > 0){
        nlUnwrapSSL.forEach(btn=>{
            btn.addEventListener('click', (e)=>{
                e.preventDefault();
                let el = btn.previousElementSibling;
                btn.remove();
                el.style.maxHeight = '100%';
                let elHeight = el.offsetHeight;
                 
                el.style.maxHeight = '180px';
                setTimeout(function(){
                    el.style.maxHeight = elHeight + 'px';
                    el.classList.add('hide-shadow')
                }, 50);
                let interval = setInterval(function(){
                    if(el.offsetHeight == elHeight){
                       clearInterval(interval);
                       el.style.maxHeight = '100%'; 
                    }
                }, 300);
                
            })
        });
    }

    // работа статичного меню
    let staticBurger = document.querySelector('.header-top-main .burger-btn');
    let staticNav = document.querySelector('.header-top nav');
    if (staticBurger) {
        staticBurger.addEventListener('click', function (e) {
            staticBurger.classList.toggle('active');
            staticBurger.parentElement.classList.toggle('active');
            staticNav.classList.toggle('show-nav');
            document.body.classList.toggle('fixed');
        });
    }
    // работа скользящего меню
    // let scrollPosition = 0;
    
    let flyBurger = document.querySelector('.header-fly .burger-btn');
    let flyNav = document.querySelector('.header-fly nav');
    if (flyBurger) {
        flyBurger.addEventListener('click', function (e) {
            flyBurger.classList.toggle('active');
            flyNav.classList.toggle('show-nav');

            // if (document.body.classList.contains('fixed')) {
            //     document.body.classList.remove('fixed');
            //     window.scrollTo(0, scrollPosition);
            // } else {
            //     scrollPosition = window.pageYOffset;
            //     setTimeout(function () {
            //         document.body.classList.add('fixed');
            //     }, 400);
            // }

            if (window.innerWidth < 640) {
                flyBurger.parentElement.classList.toggle('active');
            }
        });
    }

    let flyHeader = document.querySelector('.header-fly');
    document.addEventListener('scroll', function () {
        if (window.pageYOffset > 110) {
            flyHeader.classList.add('show-panel');
        } else {
            flyHeader.classList.remove('show-panel');
        }
    });

    let nlPChoices = document.querySelectorAll('.p-choices');
    let arSelect = [];
    let arSelectMultiple = [];

    if(nlPChoices.length > 0){
        nlPChoices.forEach(select=>{
            if(select.getAttribute('multiple')){
                let currentSelect = new Choices(select, {
                    removeItemButton: true,
                    noResultsText: 'Значение не найдено',
                    loadingText: 'Загрузка...', 
                    searchEnabled: false,
                    placeholder: true,
                    placeholderValue: null, 
                    shouldSort: false,
                    position: 'auto',
                    allowHTML: true,
                    noChoicesText: 'Больше нечего выбирать', 
                }); 
                arSelectMultiple.push(currentSelect);
            }else{
                let currentSelect = new Choices(select, { 
                    noResultsText: 'Значение не найдено',
                    loadingText: 'Загрузка...',  
                    searchEnabled: false,
                    placeholder: true,
                    placeholderValue: null, 
                    shouldSort: false,
                    position: 'auto',
                    allowHTML: true,
                }); 
                arSelect.push(currentSelect);
            }
            
        });
    }
 

  

    // подключаю маски
    const nlTelMaskElem = document.querySelectorAll('.tel-mask'); 
    if(nlTelMaskElem.length > 0){
        nlTelMaskElem.forEach(item=>{
            let mask = IMask(item, {mask: '+{7}(000)000-00-00'});
        });
    } 
    
    // подключаю слайдеры
    let heliSlider = document.querySelector('.articles-sl');
    const hSl = new Swiper(heliSlider, {
        // Optional parameters  
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        watchOverflow: false,
        spaceBetween: 20,
        breakpoints: { 
            310: {
                spaceBetween: 10,
                slidesPerView: 2, 
            },
            350: {
                spaceBetween: 20,
                slidesPerView: 2, 
            },
            650: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            950: {
                spaceBetween: 20,
                slidesPerView: 4,
            }
        }

    });

    // работа спойлеров
    let spoilerBtn = document.querySelectorAll('.spoiler-btn');
    if(spoilerBtn.length > 0){
        spoilerBtn.forEach(item=>{
            item.addEventListener('click', function(e){ 
                this.parentElement.classList.toggle('active');
                toggleSlider(this.nextElementSibling);
            })
        });
    }
// установка размера карты
let mapElem = document.querySelector('.map-autowidth');
  
function autoWidthMap(){
    if(mapElem && window.innerWidth > 600){ 
        let bodyRect = document.body.getBoundingClientRect();
        let mapElemRect = mapElem.getBoundingClientRect(); 
        mapElem.style.width = Math.ceil(bodyRect.width - mapElemRect.x) + 'px';
    }
}

window.addEventListener('resize', autoWidthMap);
autoWidthMap();
    // ------yamaps-----------------------
    function initMap() {
        var myMap = new ymaps.Map("map", {
            center: [55.846396, 37.655544],
            zoom: 16
        });

        myMap.controls.add('zoomControl', {
            size: "large"
        });

        myPlacemark1 = new ymaps.Placemark([55.846396, 37.655544], {
            // Свойства. 
            hintContent: '<div class="map-hint caption-color h5">План Б</div>',
            balloonContent: '<div class="map-hint">г. Москва, проезд Серебрякова, д. 14 стр. 15</div>',
        }, {
            iconImageHref: './local/templates/planB/img/map-marker.svg',
            // Размеры метки.
            iconImageSize: [67, 76],
            iconImageOffset: [-33.5, -38]
        });

        myMap.geoObjects
            .add(myPlacemark1);
    }
    if(document.querySelector('#map')){
        ymaps.ready(initMap); 
    }

    // работа видеоконтейнера 
    
    let nlPlayBtn = document.querySelectorAll('.video-box__video-play');
    if(nlPlayBtn.length > 0){
        nlPlayBtn.forEach(btn=>{
            btn.addEventListener('click', function(e){
                e.preventDefault();
                let video = this.previousElementSibling; 
                video.setAttribute('controls', 'controls')
                video.play();
                this.remove();
            })
        })
    }


    // подключение lightgallery 
    let nlLightgalleryBox = document.querySelectorAll('.lightgallery-box'); 
    if(nlLightgalleryBox.length > 0){
        nlLightgalleryBox.forEach(lItem=>{
            lightGallery(lItem, {   
                speed: 500, 
            });
        })
    }

    // подключение SimpleBar
    Array.prototype.forEach.call(
        document.querySelectorAll('.modal__content-container'),
        (el) => new SimpleBar(el)
    );

});
 
    // подключения плагина подгрузки файлов
    let fileFunnelMultiple = document.querySelector('.file-funnel--multiple'); 
    if(fileFunnelMultiple){
        document.ffElem = new FileFunnel(fileFunnelMultiple, {
            deskBox: '.file-funnel__text',
            reciever: '.file-funnel__receiver',
            accept: ['.pdf', '.jpg', '.png', '.doc', '.docx'],
            docsBox: '.file-funnel__docs'
        });
    }

    let fileFunnelAldoc = document.querySelector('.file-funnel--aldoc');  
    if(fileFunnelAldoc){ 
        document.fileFunnelAldocObj = new FileFunnel(fileFunnelAldoc, {
            deskBox: '.file-funnel__text',
            reciever: '.file-funnel__receiver',
            accept: ['.pdf', '.jpg', '.png', '.doc', '.docx'],
            docsBox: '.file-funnel__docs'
        }); 
    }
 

 
    let fileFunnelIMG= document.querySelector('.file-funnel--only-img'); 
    if(fileFunnelIMG){
        document.fileFunnelIMGElem = new FileFunnel(fileFunnelIMG, {
            deskBox: '.file-funnel__text',
            reciever: '.file-funnel__receiver',
            accept: ['.jpg', '.png'],
            docsBox: '.file-funnel__docs'
        }); 
    }
 