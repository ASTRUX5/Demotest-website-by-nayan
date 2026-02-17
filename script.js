const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

faders.forEach(fade => {
  fade.style.opacity = 0;
  fade.style.transform = "translateY(40px)";
  fade.style.transition = "all 1s ease";
  observer.observe(fade);
});
