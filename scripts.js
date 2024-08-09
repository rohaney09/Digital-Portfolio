document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav ul li a");
  const nav = document.querySelector("nav");


  links.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - nav.offsetHeight,
        behavior: "smooth"
      });
    });
  });

  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });


  // EmailJS integration
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const templateParams = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_y9yzan5", "template_uymb67s", templateParams)
      .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        contactForm.reset();
      }, function(error) {
        console.log("FAILED...", error);
        alert("Message failed to send.");
      });
  });
});


function showProjects(projectType) {
  // Get all project elements
  const allProjects = document.querySelectorAll('.project-box');

  // Hide currently visible projects with animation
  allProjects.forEach(project => {
      if (project.classList.contains('show')) {
          project.classList.remove('show');
          project.classList.add('hide');
          setTimeout(() => project.style.display = 'none', 80); // Allow time for animation to complete
      }
  });

  // Show the selected projects after hiding the previous ones
  setTimeout(() => {
      const selectedProjects = document.querySelectorAll(`.${projectType}`);
      selectedProjects.forEach(project => {
          project.style.display = 'block';
          setTimeout(() => {
              project.classList.remove('hide');
              project.classList.add('show');
          }, 350); // Allow time for display change to take effect
      });
  }, 80); // Delay to match the hiding animation duration
}


const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
let currentIndex = 0;

function updateGallery(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');

    const imgWidth = images[index].clientWidth;
    const imgOffset = images[index].offsetLeft;
    const containerCenter = gallery.clientWidth / 2;
    const scrollOffset = imgOffset - containerCenter + imgWidth / 2;

    gallery.style.transform = `translateX(-${scrollOffset}px)`;
}

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        updateGallery(currentIndex);
    });
});

// Initialize the gallery with the first image active
updateGallery(currentIndex);

function Task() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const mail = document.getElementById('email').value;

  if (name !== '' && message !== '' && mail !== '') {
      document.getElementById("popup").style.display = "block";
      setTimeout(function() {
          document.getElementById("popup").style.display = "none";
      }, 1000);
      console.log("Form submitted successfully!");
      return true; // Prevent form submission
  }
  return false; // Allow form submission
}

/**
 echo "# Digital-Portfolio" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/rohaney09/Digital-Portfolio.git
git push -u origin main
 */