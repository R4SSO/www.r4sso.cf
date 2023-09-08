document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false}
            ]
        });
    });


// dark mode
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    
// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark])').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}
    
var themeToggleBtn = document.getElementById('theme-toggle');
    
// Check if the theme has been set via local storage previously
if (localStorage.getItem('color-theme') === 'dark') {
  // If the theme is set to dark, add the 'dark' class
  document.documentElement.classList.add('dark');
}

themeToggleBtn.addEventListener('click', function() {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
    
    // Toggle the theme when the button is clicked
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});


// Get the mobile menu button element
const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');

// Get the mobile menu element
const mobileMenu = document.getElementById('mobile-menu');

// Add click event listener to mobile menu button
mobileMenuButton.addEventListener('click', () => {
  // Toggle the "aria-expanded" attribute
  const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
  mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
  
  // Toggle the "hidden" class on the mobile menu
  mobileMenu.classList.toggle('hidden');
});

// accordion
 document.addEventListener("DOMContentLoaded", function () {
    const accordionButton = document.querySelector('[data-accordion-target]');
    const accordionBody = document.querySelector(accordionButton.getAttribute('data-accordion-target'));
    const accordionIcon = document.querySelector('[data-accordion-icon]');

    // Set accordion to expanded by default
    accordionButton.setAttribute('aria-expanded', true);
    accordionBody.classList.remove('hidden');

    // Toggle the accordion when the button is clicked
    accordionButton.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      accordionBody.classList.toggle('hidden', expanded);
      accordionIcon.classList.toggle('rotate-0', !expanded);
      accordionIcon.classList.toggle('rotate-180', expanded);
    });
  });

// scroll to top button
window.onscroll = function() { scrollFunction() };
  
    function scrollFunction() {
      var scrollToTopButton = document.getElementById("scroll-to-top");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    }
  
    function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

