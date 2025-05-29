  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('show');
      } else {
        el.classList.remove('show');
      }
    });
  }, { threshold: 0.10 });

  document.querySelectorAll('.fade-up, .fade-blur, .zoom-in').forEach(el => {
    observer.observe(el);
  });

