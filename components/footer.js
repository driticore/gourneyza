
document.addEventListener('DOMContentLoaded' , () => {
    const div = document.getElementById('footer-container')

    const footer = `
        <div class="footer-content">
            <div class="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="projects.html">Services</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
    
            <div class="footer-section contact">
                <h3>Contact Us</h3>
                <p><i class="fas fa-phone-alt"></i> +27 65 676 3013</p>
                <p><i class="fas fa-envelope"></i> gourneyza@gmail.com</p>
            </div>
    
            <div class="footer-section social">
                <h3>Follow Us</h3>
            <a href="https://www.instagram.com/gourneyza/" target="_blank"><i class="fa-brands fa-instagram" style="color: #000000;"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61564734251856" target="_blank"><i class="fa-brands fa-facebook" style="color: #000000;"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Designed by Gourney</p>
        </div> `


    div.innerHTML= footer


})
