/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    if (navMenu) {
        navMenu.classList.remove('show-menu')
    }
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    if (modalViews[modalClick]) {
        modalViews[modalClick].classList.add('active-modal')
    }
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== CERTIFICATE SWIPER ====================*/
if (document.querySelector('.certificate__container')) {
    let swiperCertificate = new Swiper('.certificate__container', {
        cssMode: true,
        loop: true,

        pagination: {
            el: '.swiper-pagination-certificate',
            clickable: true,
        },
    })
}

/*==================== PORTFOLIO SWIPER ====================*/
if (document.querySelector('.portfolio__container')) {
    let swiperPortfolio = new Swiper('.portfolio__container', {
        cssMode: true,
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination-portfolio',
            clickable: true,
        },
    })
}

/*==================== TESTIMONIAL SWIPER ====================*/
if (document.querySelector('.testimonial__container')) {
    let swiperTestimonial = new Swiper('.testimonial__container', {
        cssMode: true,
        loop: true,

        pagination: {
            el: '.swiper-pagination-testimonial',
            clickable: true,
        },
    })
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link')
            } else {
                navLink.classList.remove('active-link')
            }
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')

    if (nav) {
        if (this.scrollY >= 80) {
            nav.classList.add('scroll-header')
        } else {
            nav.classList.remove('scroll-header')
        }
    }
}

window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')

    if (scrollUp) {
        if (this.scrollY >= 560) {
            scrollUp.classList.add('show-scroll')
        } else {
            scrollUp.classList.remove('show-scroll')
        }
    }
}

window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}

if (themeButton) {
    if (document.body.classList.contains(darkTheme)) {
        themeButton.classList.add(iconTheme)
    } else {
        themeButton.classList.remove(iconTheme)
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.setItem(
            'selected-theme',
            document.body.classList.contains(darkTheme) ? 'dark' : 'light'
        )
    })
}