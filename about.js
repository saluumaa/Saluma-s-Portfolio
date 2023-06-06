const chevronDown = document.querySelectorAll('.fa-chevron-down');
const chevronRight = document.querySelectorAll('.fa-chevron-right');
const menu = document.querySelectorAll('.language-set');

chevronDown.forEach((chevron, index) => {
  chevron.addEventListener('click', () => {
    menu[index].classList.toggle('show');
    chevronDown[index].style.display = 'none';
    chevronRight[index].style.display = 'block';
    chevronRight[index].style.visibility = 'visible';
  });
});

chevronRight.forEach((chevron, index) => {
  chevron.addEventListener('click', () => {
    menu[index].classList.toggle('show');
    chevronDown[index].style.visibility = 'visible';
    chevronDown[index].style.display = 'block';
    chevronRight[index].style.display = 'none';
  });
});
