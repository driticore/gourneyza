document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('navbar');

    const header = `
        <a href="/index.html"><img src="/images/logo.png" alt="Gourney Logo"></a>
        <nav class="navbar">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/pages/projects.html">Projects</a></li>
                <li><a href="/pages/service.html">Services</a></li>
                <li><a href="/pages/about.html">About Us</a></li>
                <li><a href="/pages/contact.html">Contact Us</a></li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
        <div class="social-icons">
            <a href="https://www.instagram.com/gourneyza/" target="_blank"><i class="fa-brands fa-instagram" style="color: #000000;"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61564734251856" target="_blank"><i class="fa-brands fa-facebook" style="color: #000000;"></i></a>
        </div>

    `;

    nav.innerHTML = header;

    const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar > ul");
const navLink = document.querySelectorAll(".navbar > ul > li > a");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.navbar ul li a, .dropbtn');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the offset position of the navbar
var sticky = nav.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    nav.classList.add("nav-bg");
  } else {
    nav.classList.remove("nav-bg");
  }
}



});
