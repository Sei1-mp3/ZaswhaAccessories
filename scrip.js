// Navbar Scroll Effect
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Form Submission Handling
document.getElementById('kontakForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Pesan Anda telah terkirim! Terima kasih.');
});


