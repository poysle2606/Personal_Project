function slowMotion() {
  const items = document.querySelectorAll('.item');
  document.addEventListener('scroll', (event) => {
    items.forEach(item => {
      if (item.offsetTop - window.scrollY < 350) {
        item.classList.add('active');
      }
    });
  });
}
