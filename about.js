const chevronDown = document.querySelectorAll('.fa-chevron-down');
const chevronRight = document.querySelectorAll('.fa-chevron-right');
const menu = document.querySelectorAll('.language-set');

chevronDown.forEach((chevron, index) => {
  chevron.addEventListener('click', () => {
    menu.forEach((m, i) => {
      if (i !== index) {
        m.classList.remove('show');
        chevronDown[i].style.visibility = 'visible';
        chevronDown[i].style.display = 'block';
        chevronRight[i].style.display = 'none';
      }
    });
    menu[index].classList.toggle('show');
    chevronDown[index].style.display = 'none';
    chevronRight[index].style.display = 'block';
    chevronRight[index].style.visibility = 'visible';
  });
});

chevronRight.forEach((chevron, index) => {
  chevron.addEventListener('click', () => {
    menu.forEach((m, i) => {
      if (i !== index) {
        m.classList.remove('show');
        chevronDown[i].style.visibility = 'visible';
        chevronDown[i].style.display = 'block';
        chevronRight[i].style.display = 'none';
      }
    });
    menu[index].classList.toggle('show');
    chevronDown[index].style.visibility = 'visible';
    chevronDown[index].style.display = 'block';
    chevronRight[index].style.display = 'none';
  });
});
