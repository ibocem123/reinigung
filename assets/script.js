document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-4');
        entry.target.classList.add('opacity-100', 'translate-y-0');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-4', 'transition', 'duration-1000');
    observer.observe(el);
  });
});
