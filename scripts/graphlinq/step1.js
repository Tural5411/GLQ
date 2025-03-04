// Глобальные переменные
const easing = 'power3.inOut';
const duration = 1.5;


// Начало анимации секции Cards_grid

const sectionCardsGrid = document.querySelector('#cards_grid1')
const animateItem1 = sectionCardsGrid.querySelector('.animate-item.is-1')
const animateItem2 = sectionCardsGrid.querySelector('.animate-item.is-2')
const animateItem3 = sectionCardsGrid.querySelector('.animate-item.is-3')
const animateLine = sectionCardsGrid.querySelector('.animate-line')
const animateBtn1 = sectionCardsGrid.querySelector('.btn-line.is-1')
const animateBtn2 = sectionCardsGrid.querySelector('.btn-line.is-2')
const animateBtn3 = sectionCardsGrid.querySelector('.btn-line.is-3')



// Создаем анимацию для секции Cards_grid
let getSectionCardsGridAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: sectionCardsGrid,
        scrub: true,
        start: '-=130%',
        markers: false
    }
});

getSectionCardsGridAnimation
    .to(animateLine,
        { height: '99%', duration: 4.5, ease: easing }
    )
    .from(animateItem1, { autoAlpha: .3, duration: duration, ease: easing }, 1.5)
    .from(animateBtn1, { autoAlpha: .3, duration: duration, ease: easing }, '<')
    .from(animateItem2, { autoAlpha: .3, duration: duration, ease: easing }, 2)
    .from(animateBtn2, { autoAlpha: .3, duration: duration, ease: easing }, '<')
    .from(animateItem3, { autoAlpha: .3, duration: duration, ease: easing }, 2.5)
    .from(animateBtn3, { autoAlpha: .3, duration: duration, ease: easing }, '<')


// Конец анимации секции Cards_grid



// Начало анимации секции Cards_grid2

const sectionCardsGrid2 = document.querySelector('#cards_grid2')
const animateItem4 = sectionCardsGrid2.querySelector('.animate-item.is-1')
const animateItem5 = sectionCardsGrid2.querySelector('.animate-item.is-2')
const animateItem6 = sectionCardsGrid2.querySelector('.animate-item.is-3')
const animateLine2 = sectionCardsGrid2.querySelector('.animate-line')
const animateBtn4 = sectionCardsGrid2.querySelector('.btn-line-alternative.is-1')
const animateBtn5 = sectionCardsGrid2.querySelector('.btn-line-alternative.is-2')
const animateBtn6 = sectionCardsGrid2.querySelector('.btn-line-alternative.is-3')



// Создаем анимацию для секции Cards_grid2
let getSectionCardsGrid2Animation = gsap.timeline({
    scrollTrigger: {
        trigger: sectionCardsGrid2,
        scrub: true,
        start: '-=130%',
        markers: false
    }
});

getSectionCardsGrid2Animation
    .to(animateLine2,
        { height: '99%', duration: 4.5, ease: easing }
    )
    .from(animateItem4, { autoAlpha: .3, duration: duration, ease: easing }, 1.5)
    .from(animateBtn4, { autoAlpha: .3, duration: duration, ease: easing }, '<')
    .from(animateItem5, { autoAlpha: .3, duration: duration, ease: easing }, 2)
    .from(animateBtn5, { autoAlpha: .3, duration: duration, ease: easing }, '<')
    .from(animateItem6, { autoAlpha: .3, duration: duration, ease: easing }, 2.5)
    .from(animateBtn6, { autoAlpha: .3, duration: duration, ease: easing }, '<')


// Конец анимации секции Cards_grid2




// Начало анимации секции Cards_grid3

const sectionCardsGrid3 = document.querySelector('#cards_grid3')
const animateItem7 = sectionCardsGrid3.querySelector('.animate-item.is-1')
const animateItem8 = sectionCardsGrid3.querySelector('.animate-item.is-2')
const animateLine3 = sectionCardsGrid3.querySelector('.animate-line')
const animateBtn7 = sectionCardsGrid3.querySelector('.btn-line.is-1')
const animateBtn8 = sectionCardsGrid3.querySelector('.btn-line.is-2')



// Создаем анимацию для секции Cards_grid3
let getSectionCardsGrid3Animation = gsap.timeline({
    scrollTrigger: {
        trigger: sectionCardsGrid3,
        scrub: true,
        start: '-=180%',
        markers: false
    }
});

getSectionCardsGrid3Animation
    .to(animateLine3,
        { height: '66%', duration: 4.5, ease: easing }
    )
    .from(animateItem7, { autoAlpha: .3, duration: duration, ease: easing }, 1.5)
    .from(animateBtn7, { autoAlpha: .3, duration: duration, ease: easing }, '<')
    .from(animateItem8, { autoAlpha: .3, duration: duration, ease: easing }, 2)
    .from(animateBtn8, { autoAlpha: .3, duration: duration, ease: easing }, '<')


// Конец анимации секции Cards_grid3