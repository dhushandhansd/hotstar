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