const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.querySelector('.hamburger');
        const hamburgerMenu = document.querySelector('.hamburger-menu');

        hamburger.addEventListener('click', () => {
            const isMenuVisible = hamburgerMenu.style.display === 'flex';
            hamburgerMenu.style.display = isMenuVisible ? 'none' : 'flex';
        });
    });



    const images = [
      "images/1 (1).png",
      "images/1 (2).png",
      "images/1 (3).png",
      "images/1 (4).png"
  ];
  
  let index = 0;
  const drinksImage = document.getElementById("DrinksImage");
  
  function changeImage() {
      index = (index + 1) % images.length;
      drinksImage.src = images[index];
  }
  
  setInterval(changeImage, 5000);


  document.addEventListener("DOMContentLoaded", function () {
    const favIcons = document.querySelectorAll(".fav-icon");

    favIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            this.classList.toggle("active");

            if (this.classList.contains("active")) {
                this.classList.replace("fa-regular", "fa-solid"); // Change to solid heart
            } else {
                this.classList.replace("fa-solid", "fa-regular"); // Change back to outline heart
            }
        });
    });
});
