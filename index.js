const burger = document.querySelector('.menu_mobile');
const navMenu = document.querySelector('.navigation_bar');
const link = document.querySelectorAll('.nav_link')
const body = document.querySelector('body')
const header = document.querySelector('header')
burger.addEventListener ('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.addEventListener('click', function (event) {
    if (!burger.contains(event.target) &&
    !navMenu.contains(event.target)
    && 
    !header.contains(event.target)
            )
    {
      burger.classList.remove('active');
      navMenu.classList.remove('active');
    }
}
)
}
)

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
        burger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}