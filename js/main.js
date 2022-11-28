function slider() {
    var swiper = new Swiper('.reviews .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        loop: false,
        navigation: {
            nextEl: '.reviews .swiper-button-next',
            prevEl: '.reviews .swiper-button-prev',
        },
    })
}

function sliderGallery() {
    var swiper = new Swiper('.gallery-two .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: false,
        navigation: {
            nextEl: '.gallery-two .swiper-button-next',
            prevEl: '.gallery-two .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 'auto',
            },
        }
    })
}
slider();
sliderGallery();

// Menu
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__right');
let body = document.querySelector('body')

burger.addEventListener('click', function() {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__right--active');
    body.classList.toggle('fixed-body');
})


// Scroll


// Accordion
let toggleBlocks = document.querySelectorAll(".slideToggle-block")
toggleBlocks.forEach((el, i) => {
    el.setAttribute("data-id", i + 1)
    let id = el.getAttribute("data-id")
    let toggleElement = document.querySelector(`[data-id="${id}"] .slideToggle-block__show`)
    let animatedBlock = document.querySelector(`[data-id="${id}"] .slideToggle-block__hidden`)
    let contentBlock = document.querySelector(`[data-id="${id}"] .slideToggle-block__wrap`)
    let contentBlockHeight = contentBlock.getBoundingClientRect().height
    toggleElement.onclick = function() {
        console.log();
        if (el.classList.contains("slideToggle-block--active")) {
            el.classList.remove("slideToggle-block--active")
            animatedBlock.style.height = `0px`
        } else {
            el.classList.add("slideToggle-block--active")
            animatedBlock.style.height = `${contentBlockHeight}px`
            setToggleBlocksHeight()
        }

    }
});
window.onresize = function() {
    setToggleBlocksHeight()
}
function setToggleBlocksHeight() {
    if(toggleBlocks.length===0){
        return
    }
    let activeToggleBlocks = document.querySelectorAll(".slideToggle-block--active")

    activeToggleBlocks.forEach(el => {
        let id = el.getAttribute("data-id")
        let animatedBlock = document.querySelector(`[data-id="${id}"] .slideToggle-block__hidden`)
        let contentBlock = document.querySelector(`[data-id="${id}"] .slideToggle-block__wrap`)
        let contentBlockHeight = contentBlock.getBoundingClientRect().height
        animatedBlock.style.height = `${contentBlockHeight}px`
    });
}

// Tabs
const tabs = document.querySelectorAll('.reviews__tab');
const contents = document.querySelectorAll('.reviews__content');
const tabsContainer = document.querySelector('.reviews__tabs-btns');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        if(index === 0){
            tabsContainer.classList.remove("_second")
        } else{
            tabsContainer.classList.add("_second")
        }


        contents.forEach((content) => {
            content.classList.remove('reviews__content--active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('reviews__tab--active');
        });

        tabs[index].classList.add('reviews__tab--active');
        contents[index].classList.add('reviews__content--active');
    });
});

// Animation
AOS.init({
    disable: '',
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    // Settings
    offset: 120,
    delay: 0,
    duration: 500,
    easing: 'ease',
    once: 1,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

// fancybox
Fancybox.defaults.placeFocusBack = false