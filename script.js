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
    Description: 'Car Hub is a website that allows you to search for cars that suits you. It also allows you to add cars to your list and remove them from your  list. you can reserve a car and see the details of the car you want to buy.',
    FeaturedImage: 'images/car hub shot.png',
    Technologies: ['React', 'Redux', 'Github', 'Ruby on Rails', 'CSS','Postgres'],
    LiveVersion: 'See Live',
    source: 'See Source',
  },

  {
    Name: 'Budget App',
    Description: 'Budget App is an Application that helps you to manage your budget and keep track of your expenses.',
    FeaturedImage: 'images/budget screenshot.PNG',
    Technologies: ['Ruby on Rails','Github', 'Postgres', 'Bootstrap', 'CSS', 'Render'],
    LiveVersion: '<a href="https://budgetapp-d0on.onrender.com/">See Live</a>',
    source: '<a href="https://github.com/saluumaa/Budget-App">See Source</a>',
  },

  {
    Name: 'Awesome Books',
    Description: 'Awesome Books is an Application that helps you to collect and save your favorite books, it will let you as well remove the completed books.',
    FeaturedImage: 'images/Awesome Books.PNG',
    Technologies: ['Html', 'Css', 'JavaScript', 'Github', 'Ruby', 'Bootstrap'],
    LiveVersion: 'See Live',
    source: 'See Source',
  },

  {
    Name: 'Leaderboard',
    Description: 'Leaderboard is an API that allows you to post your score and see the scores of other players.',
    FeaturedImage: 'images/Leaderboargame.PNG',
    Technologies: ['Html', 'Css', 'JavaScript', 'Github', 'API', 'Webpack'],
    LiveVersion: '<a href="LIVE_URL_HERE">See Live</a>',
    source: '<a href="LIVE_URL_HERE">See Source</a>'
  },

  {
    Name: 'Bookstore',
    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    FeaturedImage: 'images/Bookstore Snapshot.PNG',
    Technologies: ['Html', 'Css', 'JavaScript', 'Github', 'API', 'Webpack'],
    LiveVersion: 'See Live',
    source: 'See Source',
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
      <p class="frame canopy">CANOPY</p>
      <img src="images/Counter.png" alt="">
      <p class="frame">Back End Dev</p>
      <img class="frame" src="images/Counter.png" alt="" class="card-img">
      <p class="frame">2015</p>
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
