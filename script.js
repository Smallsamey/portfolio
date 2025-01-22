document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles.js
  particlesJS('particles', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#4A90E2"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#4A90E2",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5
          }
        }
      }
    },
    retina_detect: true
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const headerOffset = 80;
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });

  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };

      // Here you would typically send the form data to your backend
      try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Message sent successfully!');
        contactForm.reset();
      } catch (error) {
        alert('There was an error sending your message. Please try again.');
      }
    });
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });
});

// Add scroll-based navbar background with blur
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(26, 36, 53, 0.95)';
    header.style.backdropFilter = 'blur(10px)';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  } else {
    header.style.background = 'rgba(26, 36, 53, 0.8)';
    header.style.backdropFilter = 'blur(5px)';
    header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
  }
});