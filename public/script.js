// JavaScript to toggle the menu
document.addEventListener("DOMContentLoaded", function() {
  var menuIcon = document.getElementById('menuIcon');
  var navbarLinks = document.querySelector('.navbar-links');
  var navbarRight = document.querySelector('.navbar-right');

  menuIcon.addEventListener('click', function() {
      // Toggle the visibility of the menu links and menu icon
      navbarLinks.classList.toggle('menu-active');
      navbarRight.classList.toggle('menu-active');
  });
});

// JavaScript to handle form submission
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);

    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Display a success message
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Form submitted successfully!';
        successMessage.classList.add('success-message');
        document.body.appendChild(successMessage);

        // Reset the form after successful submission
        this.reset();

        // Remove the success message after a certain duration
        setTimeout(() => {
          successMessage.remove();
        }, 5000); // Remove after 5 seconds
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Display an error message
      alert('Form submission failed. Please try again later.');
    }
  });
});

// Array of image URLs for the slider
const images = [
  "images/image1.jpg",
  "images/image2.webp",
  "images/image3.webp",
  "images/image4.webp",
  "images/image5.jpg"
];


// Function to change the background image of the slider
function changeImage() {
  const index = Math.floor(Math.random() * images.length); // Get a random index from the images array
  const imageUrl = images[index]; // Get the image URL at the random index
  const sliderImage = document.getElementById("slider-image"); // Get the slider image element
  sliderImage.style.backgroundImage = `url(${imageUrl})`; // Set the background image
}

// Change the image every 5 seconds (5000 milliseconds)
setInterval(changeImage, 3000);

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

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
