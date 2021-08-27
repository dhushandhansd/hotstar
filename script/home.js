const emailLogin = document.getElementById('login-card1')
const mobileLogin = document.getElementById('login-card2')
const phoneLogin = document.getElementById('login-card3')

let popup = document.getElementById('popup')

let backButton = document.getElementById('back-btn-id')

function loginPopup() {
    popup.style.display = 'block'
    popup.style.display = 'flex'
    popup.style.transition = 'all .3s ease-out'
}

function closePopup() {
    popup.style.display = 'none'
}

function facebookLogin() {
    emailLogin.style.display = 'none'
    mobileLogin.style.display = 'block'
    backButton.style.display = 'block'
    phoneLogin.style.display = 'none'
}

function toEmailLogin() {
    mobileLogin.style.display = 'none'
    emailLogin.style.display = 'block'
    backButton.style.display = 'none'
    phoneLogin.style.display = 'none'
}

function numberOver() {
    mobileLogin.style.display = 'none'
    emailLogin.style.display = 'none'
    backButton.style.display = 'block'
    phoneLogin.style.display = 'block'
}

let imageSlide = 1
startCarousal(imageSlide)

let scroll = document.getElementById('cards-scrollable-container')

function scroll(slideDirection) {
    startCarousal(imageSlide += slideDirection)
}

function startCarousal(slide) {
    let carousalCount = document.getElementsByClassName('carousal')
    if(slide > carousalCount.length) {
        imageSlide = 1
    }
    if(slide < 1) {
        imageSlide = carousalCount.length
    }

    for(let i = 0; i<carousalCount.length; i++) {
        carousalCount.style.display = 'none'
    }

    carousalCount[imageSlide-1].style.display = 'block'
}
