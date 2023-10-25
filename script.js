const navbarEl = document.querySelector('.nav-bar');
const humbergerIcon = document.querySelector('.humberger');
const closeIcon = document.querySelector('.close');
const navLinksEl = document.querySelectorAll('.nav-links');

humbergerIcon.addEventListener('click', () => {
  navbarEl.classList.toggle('active');
  humbergerIcon.classList.toggle('hide');
  closeIcon.classList.toggle('show');
});

closeIcon.addEventListener('click', () => {
  navbarEl.classList.toggle('active');
  humbergerIcon.classList.toggle('hide');
  closeIcon.classList.toggle('show');
});

navLinksEl.forEach((item) => {
  item.addEventListener('click', () => {
    if (window.innerWidth >= 768) {
      navbarEl.style.display = 'flex';
    } else {
      navbarEl.classList.toggle('active');
      humbergerIcon.classList.toggle('hide');
      closeIcon.classList.toggle('show');
    }
  });
});

const workCards = [
  {
    Name: 'Car Hub',
    Dev: 'Full Stack Dev',
    Description: 'Car Hub is a website that allows you to search for cars that suits you. It also allows you to add cars to your list and remove them from your  list. you can reserve a car and see the details of the car you want to buy.',
    FeaturedImage: 'images/car hub shot.png',
    Technologies: ['React', 'Redux', 'Github', 'Ruby on Rails', 'CSS', 'Postgres'],
    LiveVersion: '<a href="https://dev--cozy-concha-614dd5.netlify.app/">See Live</a>',
    source: '<a href="https://github.com/deniodev/Car-Hub">See Source</a>',
  },

  {
    Name: 'Budget App',
    Dev: 'Back End Dev',
    Description: 'Budget App is an Application that helps you to manage your budget and keep track of your expenses.',
    FeaturedImage: 'images/budget screenshot.PNG',
    Technologies: ['Ruby on Rails', 'Github', 'Postgres', 'Bootstrap', 'CSS', 'Render'],
    LiveVersion: '<a href="https://budgetapp-d0on.onrender.com/">See Live</a>',
    source: '<a href="https://github.com/saluumaa/Budget-App">See Source</a>',
  },

  {
    Name: 'Awesome Books',
    Dev: 'Front End Dev',
    Description: 'Awesome Books is an Application that helps you to collect and save your favorite books, it will let you as well remove the completed books.',
    FeaturedImage: 'images/Awesome Books.PNG',
    Technologies: ['Html', 'Css', 'JavaScript', 'Github', 'Ruby', 'Bootstrap'],
    LiveVersion: '<a href="https://saluumaa.github.io/Awesome-Books/">See Live</a>',
    source: '<a href="https://github.com/saluumaa/Awesome-Books">See Source</a>',
  },

  {
    Name: 'Leaderboard',
    Dev: 'Front End Dev',
    Description: 'Leaderboard is an API that allows you to post your score and see the scores of other players.',
    FeaturedImage: 'images/Leaderboargame.PNG',
    Technologies: ['Html', 'Css', 'JavaScript', 'Github', 'API', 'Webpack'],
    LiveVersion: '<a href="https://saluumaa.github.io/Leader-board/dist/">See Live</a>',
    source: '<a href="https://github.com/saluumaa/Leader-board">See Source</a>',
  },

  {
    Name: 'Bookstore',
    Dev: 'Front End Dev',
    Description: "Bookstore is an Application that allows you to add books to your list and remove them from your list. you can also change the status of the book you've read.",
    FeaturedImage: 'images/Bookstore Snapshot.PNG',
    Technologies: ['Html', 'Css', 'JavaScript', 'Github', 'API', 'Webpack'],
    LiveVersion: '<a href="3">See Live</a>',
    source: '<a href="https://github.com/saluumaa/book-store">See Source</a>',
  },
];

const sectionHide = document.querySelector('.container');
const btnEl1 = document.querySelectorAll('.btn');
const body = document.querySelector('body');

btnEl1.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    sectionHide.classList.toggle('hide-container');
    body.classList.toggle('background-img');
    const workCard = workCards[index];
    const Popsection = document.createElement('section');
    Popsection.className = 'Popup-Section';
    Popsection.innerHTML = `  
    <div class="icon-holder">
      <h2>${workCard.Name} </h2>
      <a onclick="showMenu(close)"><i class="fa-solid fa-xmark close-cards"></i></a>
    </div>
    <article class="wrap-frame">
      <p class="frame canopy">Salum</p>
      <img src="images/Counter.png" alt="">
      <p class="frame">${workCard.Dev}</p>
      <img class="frame" src="images/Counter.png" alt="" class="card-img">
      <p class="frame">2023</p>
    </article>
      <img src= "${workCard.FeaturedImage}" alt="Snapshoot" class="card-img desk-img"> 
    <div class="right-pop">
      <p class="par pop-par">${workCard.Description} </p>
      <div class="column-pop">
      <div class="lang-button">
      <ul class="space-tech">
          <li><a href="#">${workCard.Technologies[0]}</a></li>
          <li> <a href="#">${workCard.Technologies[1]}</a></li>
          <li><a href="#">${workCard.Technologies[2]}</a></li>
      </ul>
      <ul class="Desktop-vers">
          <li><a href="#">${workCard.Technologies[3]}</a></li>
          <li> <a href="#">${workCard.Technologies[4]}</a></li>
          <li><a href="#">${workCard.Technologies[5]}</a></li>
      </ul>
      <hr class="hor-line">
  </div>
  <div class="popBtn">
  <button type="button" class="pop-btn">${workCard.LiveVersion}  <i class="fa-solid fa-power-off in-btn"></i></button>
  <button type="button" class="pop-btn">${workCard.source} <i class="fa-brands fa-github in-btn"></i> </button>
  </div>
  </div>
  </div>
    `;
    body.appendChild(Popsection);
  });
});

function showMenu(close) {
  if (close) {
    document.querySelector('.container').classList.toggle('hide-container');
    document.querySelector('body').classList.toggle('background-img');
    document.querySelector('.Popup-Section').classList.add('hide-popup');
    const e = document.querySelector('body');
    e.removeChild(e.lastChild);
  }
}

showMenu();
