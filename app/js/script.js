const burgerEl = document.getElementById('burgerEl')
const hamburger = document.querySelector('.navbar__hamburger')
const nav = document.querySelector('.navbar__menu')

const mobileMenu = (() => {
  burgerEl.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('openMenuMobile')
  })
})()
