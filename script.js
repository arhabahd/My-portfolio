/**
 * ============================================================================
 * PORTFOLIO JAVASCRIPT - M. ARHAB AHAMED
 * Interactive behaviors, navigation, typing effect, and contact validation.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DOM ELEMENT REFERENCES
  // --------------------------------------------------------------------------
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const copyCodeBtn = document.getElementById('copy-code-btn');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const currentYearSpan = document.getElementById('current-year');
  const typingTextElement = document.getElementById('typing-text');

  // Set current year dynamically in footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. MOBILE NAVIGATION DRAWER
  // --------------------------------------------------------------------------
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu when clicking outside of nav
    document.addEventListener('click', (event) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. HEADER SCROLL EFFECT & BACK TO TOP BUTTON
  // --------------------------------------------------------------------------
  const handleScrollEffects = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header styling on scroll
    if (header) {
      if (scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scroll-to-top button visibility
    if (scrollTopBtn) {
      if (scrollY > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    // Active Section Link Highlighting
    highlightActiveSection(scrollY);
  };

  window.addEventListener('scroll', handleScrollEffects, { passive: true });

  // Scroll to top button action
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. ACTIVE SECTION LINK HIGHLIGHTING
  // --------------------------------------------------------------------------
  function highlightActiveSection(scrollY) {
    const headerOffset = 100;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - headerOffset;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. SUBTITLE TYPING ANIMATION
  // --------------------------------------------------------------------------
  if (typingTextElement) {
    const roles = [
      'Physical Science & IT Undergraduate',
      'Software & Web Developer',
      'Java & Python Programmer',
      'Problem Solver & Tech Explorer',
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseDelay = 1800;

    function typeLoop() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let timeout = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentRole.length) {
        // Finished typing full word; pause before deleting
        timeout = pauseDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting; move to next word
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeout = 400;
      }

      setTimeout(typeLoop, timeout);
    }

    // Initiate typing animation after initial render
    setTimeout(typeLoop, 600);
  }

  // --------------------------------------------------------------------------
  // 6. TOAST NOTIFICATION UTILITY
  // --------------------------------------------------------------------------
  let toastTimeout;
  function showToast(message, duration = 3000) {
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  // --------------------------------------------------------------------------
  // 7. COPY CODE SNIPPET TO CLIPBOARD
  // --------------------------------------------------------------------------
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', async () => {
      const codeToCopy = `const developer = {
  name: "M. Arhab Ahamed",
  education: [
    "B.Sc. Physical Science @ SEUSL",
    "BIT (External) @ Univ. of Moratuwa"
  ],
  coreSkills: [
    "HTML", "CSS", "JavaScript",
    "Java", "Python"
  ],
  focusAreas: ["Web Development", "Software Eng"],
  hardWorker: true,
  readyToLearn: true,
  buildSolution() {
    return "Turning ideas into clean code 🚀";
  }
};`;

      try {
        await navigator.clipboard.writeText(codeToCopy);
        const copyTextSpan = copyCodeBtn.querySelector('.copy-text');
        const originalText = copyTextSpan ? copyTextSpan.textContent : 'Copy';

        if (copyTextSpan) copyTextSpan.textContent = 'Copied!';
        copyCodeBtn.classList.add('copied');
        showToast('Code snippet copied to clipboard!');

        setTimeout(() => {
          if (copyTextSpan) copyTextSpan.textContent = originalText;
          copyCodeBtn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        showToast('Failed to copy to clipboard.');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. COPY EMAIL BUTTON
  // --------------------------------------------------------------------------
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = 'arhab.ahamed@example.com';
      try {
        await navigator.clipboard.writeText(email);
        showToast('Email address copied to clipboard!');
      } catch (err) {
        showToast('Failed to copy email address.');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 9. CONTACT FORM VALIDATION & HANDLING
  // --------------------------------------------------------------------------
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const formFeedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('submit-btn');

    // Validation helper functions
    const isValidEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };

    const validateField = (input, errorId, condition) => {
      const errorMsg = document.getElementById(errorId);
      if (!condition) {
        input.classList.add('is-invalid');
        if (errorMsg) errorMsg.classList.add('visible');
        return false;
      } else {
        input.classList.remove('is-invalid');
        if (errorMsg) errorMsg.classList.remove('visible');
        return true;
      }
    };

    // Live validation on blur & input
    nameInput?.addEventListener('input', () => {
      validateField(nameInput, 'name-error', nameInput.value.trim().length > 1);
    });

    emailInput?.addEventListener('input', () => {
      validateField(emailInput, 'email-error', isValidEmail(emailInput.value.trim()));
    });

    subjectInput?.addEventListener('input', () => {
      validateField(subjectInput, 'subject-error', subjectInput.value.trim().length > 2);
    });

    messageInput?.addEventListener('input', () => {
      validateField(messageInput, 'message-error', messageInput.value.trim().length >= 10);
    });

    // Form submit listener
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, 'name-error', nameInput.value.trim().length > 1);
      const isEmailValid = validateField(emailInput, 'email-error', isValidEmail(emailInput.value.trim()));
      const isSubjectValid = validateField(subjectInput, 'subject-error', subjectInput.value.trim().length > 2);
      const isMessageValid = validateField(messageInput, 'message-error', messageInput.value.trim().length >= 10);

      if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        // Display loading state on button
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        if (btnText && btnLoading) {
          btnText.classList.add('d-none');
          btnLoading.classList.remove('d-none');
          submitBtn.disabled = true;
        }

        // Simulate successful message dispatch
        setTimeout(() => {
          if (btnText && btnLoading) {
            btnText.classList.remove('d-none');
            btnLoading.classList.add('d-none');
            submitBtn.disabled = false;
          }

          if (formFeedback) {
            formFeedback.className = 'form-feedback success';
            formFeedback.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully. I will get back to you soon.';
            formFeedback.classList.remove('d-none');
          }

          showToast('Message sent successfully!');
          contactForm.reset();

          // Hide success message after 6 seconds
          setTimeout(() => {
            if (formFeedback) formFeedback.classList.add('d-none');
          }, 6000);
        }, 1200);
      } else {
        if (formFeedback) {
          formFeedback.className = 'form-feedback error';
          formFeedback.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Please check the required fields before submitting.';
          formFeedback.classList.remove('d-none');
        }
      }
    });
  }
});
