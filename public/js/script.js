const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove("active");
  }
});

// Close mobile menu when clicking on links
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const navHeight = 64; // Height of fixed navigation
      const targetPosition = targetSection.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = "0.2s";
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0) translateX(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll(".fade-up, .slide-in");
animatedElements.forEach((el) => observer.observe(el));

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".parallax-element");

  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed || 0.5;
    const yPos = -(scrollY * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(30, 41, 59, 0.9)";
    navbar.style.backdropFilter = "blur(20px)";
  } else {
    navbar.style.backgroundColor = "rgba(30, 41, 59, 0.7)";
    navbar.style.backdropFilter = "blur(20px)";
  }
});

// Skill bar animation trigger
const skillBars = document.querySelectorAll(".skill-bar");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
      }
    });
  },
  {
    threshold: 0.5,
  }
);

skillBars.forEach((bar) => skillObserver.observe(bar));

// Form submission
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector("textarea").value;

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate form submission
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.textContent = "Message Sent!";
    submitBtn.style.backgroundColor = "#22c55e";

    // Reset form
    contactForm.reset();

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.backgroundColor = "";
    }, 2000);
  }, 1000);
});

// Add dynamic year to footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector("footer p");
if (footerYear) {
  footerYear.innerHTML = footerYear.innerHTML.replace("2025", currentYear);
}
