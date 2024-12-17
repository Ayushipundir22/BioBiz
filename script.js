burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");

burger.addEventListener('click',()=> {
    navList.classList.toggle('v-class-res');
    navbar.classList.toggle('h-nav-res')
})

window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "rgb(255, 255, 255)";
        navbar.classList.add('scrolled');
    } else {
        navbar.style.backgroundColor = rgba(34, 139, 34, 0.7); 
        navbar.classList.remove('scrolled');
    }
}

