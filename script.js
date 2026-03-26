// ===== CALENDLY CONFIG =====
// Replace this URL with your actual Calendly link
const CALENDLY_URL = 'https://calendly.com/olivia-myhrapp/30min';

function openCalendly() {
  if (window.Calendly) {
    Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    // Fallback: open Calendly in new tab if widget fails to load
    window.open(CALENDLY_URL, '_blank');
  }
}

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
  });
});

// Video overlay click-to-play
const videoOverlay = document.getElementById('videoOverlay');
const demoVideo = document.getElementById('demoVideo');
if (videoOverlay && demoVideo) {
  videoOverlay.addEventListener('click', () => {
    videoOverlay.classList.add('hidden');
    demoVideo.play();
  });
  demoVideo.addEventListener('pause', () => {
    if (demoVideo.currentTime > 0 && !demoVideo.ended) return;
    videoOverlay.classList.remove('hidden');
  });
  demoVideo.addEventListener('ended', () => {
    videoOverlay.classList.remove('hidden');
  });
}

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.borderBottomColor = 'rgba(0,0,0,.1)';
  } else {
    navbar.style.borderBottomColor = 'rgba(0,0,0,.06)';
  }
});
