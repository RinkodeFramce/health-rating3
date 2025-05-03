// В `js/transition.js`
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    });
  });
  
  document.body.classList.add('fade-in');