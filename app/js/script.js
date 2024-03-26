const mobileMenu = (() => {
  const burgerEl = document.getElementById('burgerEl')
  const hamburger = document.querySelector('.navbar__hamburger')
  burgerEl.addEventListener('click', () => {
    hamburger.classList.toggle('active')
  })
})()
