// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add Scroll-to-Top Button Behavior
  const scrollTopButton = document.createElement('button');
  scrollTopButton.innerText = '⬆️';
  scrollTopButton.style.position = 'fixed';
  scrollTopButton.style.bottom = '20px';
  scrollTopButton.style.right = '20px';
  scrollTopButton.style.display = 'none';
  scrollTopButton.style.padding = '10px 15px';
  scrollTopButton.style.backgroundColor = '#007acc';
  scrollTopButton.style.color = '#fff';
  scrollTopButton.style.border = 'none';
  scrollTopButton.style.borderRadius = '5px';
  scrollTopButton.style.cursor = 'pointer';
  
  document.body.appendChild(scrollTopButton);
  
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });
  
  // Simple Alert for Contact Links
  const contactLinks = document.querySelectorAll('#contact a');
  contactLinks.forEach(link => {
    link.addEventListener('click', () => {
      alert('Thanks for reaching out! I will get back to you shortly.');
    });
  });
  