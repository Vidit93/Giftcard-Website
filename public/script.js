const images = [
  "images/1.jpg",
  "images/2.jpg"
];

let currentIndex = 0;

// Function to preload all images
function preloadImages() {
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
  }
}

// Function to change the image and preload the next one
function changeImage() {
  const imageUrl = images[currentIndex];
  const sliderImage = document.getElementById("slider-image");
  sliderImage.style.backgroundImage = `url(${imageUrl})`;

  // Preload the next image
  const nextIndex = (currentIndex + 1) % images.length;
  const nextImage = new Image();
  nextImage.src = images[nextIndex];

  // Update currentIndex for the next iteration
  currentIndex = nextIndex;
}

// Lazy load images
preloadImages();

// Execute changeImage once immediately
changeImage();

// Change the image every 2.5 seconds (2500 milliseconds)
setInterval(changeImage, 5000);



// JavaScript to toggle the menu
document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById('menuIcon');
  var navbarLinks = document.querySelector('.navbar-links');
  var navbarRight = document.querySelector('.navbar-right');

  menuIcon.addEventListener('click', function () {
    // Toggle the visibility of the menu links and menu icon
    navbarLinks.classList.toggle('menu-active');
    navbarRight.classList.toggle('menu-active');
  });
});

// JavaScript to handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Collect form data
  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const msg = formData.get("message");

  // Convert form data to JSON
  const contact = {
    name: name,
    e_mail: email,
    subject: subject,
    msg: msg,
};

  // Make POST request to API endpoint
  fetch('https://contactform-api-surq.onrender.com/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        // Optionally, reset the form
        this.reset();
      } else {
        alert('Failed to send message. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    });
});



// Function to count numbers
function countNumbers() {
  const counters = document.querySelectorAll('.counter-value');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const interval = setInterval(() => {
      count += Math.ceil(target / 100); // Increase by a fraction of the target number
      if (count >= target) {
        count = target; // Stop counting when it reaches the target number
        clearInterval(interval);
      }
      counter.innerText = count;
    }, 10);
  });
}

// Boolean flag to track if counting has been triggered
let countingTriggered = false;

// Check if the statistics section is in the viewport
window.addEventListener('scroll', () => {
  if (!countingTriggered) {
    const statisticsSection = document.querySelector('.statistics');
    if (isInViewport(statisticsSection)) {
      countNumbers();
      countingTriggered = true;
    }
  }
});


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var offerCardContainer = document.getElementById("offer-card");

  offerCardContainer.addEventListener("click", function (event) {
    var clickedCard = event.target.closest(".offer");
    if (clickedCard) {
      var target = clickedCard.getAttribute("data-target");

      if (target.startsWith("#")) {
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = target;
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var service = document.getElementById("ourservice");

  service.addEventListener("click", function (event) {
    window.location.href = "Services.html";

  });
});
document.addEventListener("DOMContentLoaded", function () {
  var service = document.getElementById("ourservice1");

  service.addEventListener("click", function (event) {
    window.location.href = "Services.html";

  });
});
document.addEventListener("DOMContentLoaded", function () {
  var service = document.getElementById("ourservice2");

  service.addEventListener("click", function (event) {
    window.location.href = "Services.html";

  });
});