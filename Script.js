// declare menu, closeMenu and navbar variables 
let menuImg = document.querySelector(".menuImg");
let navbar = document.querySelector(".navbar");
let closeImg = document.querySelector(".closeImg");

// menuImage onClick toggle close image 
menuImg.onclick = () => { 
    menuImg.classList.toggle("closeImg");
    navbar.classList.toggle("active");
  }
 
  // when window is scrolled top remove menu 
// and close menu button
let scrollUp = document.querySelector(".scrollUp");
window.onscroll = () => {
  menuImg.classList.remove("closeImg");
  navbar.classList.remove("active");

  if (window.scrollY > 200) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
}

// when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
    menuImg.classList.remove("closeImg");
  }
})