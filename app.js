const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

    const filter = document.getElementById('interest');
    const cards = document.querySelectorAll('.community-card');

    filter.addEventListener('change', () => {
      const value = filter.value;
      cards.forEach(card => {
        if (value === 'all' || card.textContent.toLowerCase().includes(value)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });