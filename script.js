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
    Name: 'Blog App',
    Dev: 'Full Stack Developer',
    Description: 'The Blog App is a full-stack application that allows users to create, edit, and delete posts. It is built using Node.js, Express, and MongoDB. It also has user authentication and authorization features.',
    FeaturedImage: 'images/fullpostscreenschot.png',
    Technologies: ['GitHub', 'NodeJs', 'CSS', 'MongoDB', 'netlify', 'Render'],
    LiveVersion: '<a href="https://imaginative-dusk-5ee5e7.netlify.app/" class="url-remove-decoration">See Live</a>',
    Source: '<a href="https://github.com/misalazeem/node-blog-app" class="url-remove-decoration">See Source</a>',
  },
  {
    Name: 'Recipe App',
    Dev: 'Back End Developer',
    Description: 'The Recipe App is a web application that enables users to create and manage recipes. It is built using Ruby on Rails and includes user authentication (login/signup). Users can also generate shopping lists for their recipes.',
    FeaturedImage: 'images/recipeapppop.PNG',
    Technologies: ['GitHub', 'Ruby on Rails', 'CSS', 'PostgreSQL', 'Bootstrap', 'Render'],
    LiveVersion: '<a href="https://recipe-app-eaet.onrender.com/" class="url-remove-decoration">See Live</a>',
    Source: '<a href="https://github.com/misalazeem/Recipe_App" class="url-remove-decoration">See Source</a>',
  },

  {
    Name: 'Budget App',
    Dev: 'Back End Developer',
    Description: 'The Budget App is designed to help users manage their finances and track expenses. It is built using Ruby on Rails and provides a user-friendly interface for expense management.',
    FeaturedImage: 'images/budgetapppop.PNG',
    Technologies: ['Ruby on Rails', 'GitHub', 'PostgreSQL', 'Bootstrap', 'CSS', 'Render'],
    LiveVersion: '<a href="https://budget-app-fdkb.onrender.com/" class="url-remove-decoration">See Live</a>',
    Source: '<a href="https://github.com/saluumaa/Budget-App" class="url-remove-decoration">See Source</a>',
  },

  {
    Name: 'Book Store',
    Dev: 'Front End Developer',
    Description: 'The Bookstore App allows users to create a list of books, remove them, and track their reading progress. It is built with React and features an intuitive user interface.',
    FeaturedImage: 'images/bookstorepop.PNG',
    Technologies: ['React', 'CSS', 'API', 'GitHub', 'Render', 'Bootstrap'],
    LiveVersion: '<a href="https://book-store-f6oy.onrender.com/" class="url-remove-decoration">See Live</a>',
    Source: '<a href="https://github.com/saluumaa/book-store" class="url-remove-decoration">See Source</a>',
  },

  {
    Name: 'Leaderboard',
    Dev: 'Front End Developer',
    Description: 'The Leaderboard is an API that allows users to post their scores and view the scores of other players. It is built with HTML, CSS, and JavaScript and provides a competitive gaming platform.',
    FeaturedImage: 'images/leaderboardpop.PNG',
    Technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'API', 'Webpack'],
    LiveVersion: '<a href="https://saluumaa.github.io/Leader-board/dist/" class="url-remove-decoration">See Live</a>',
    Source: '<a href="https://github.com/saluumaa/Leader-board" class="url-remove-decoration">See Source</a>',
  },

  {
    Name: 'Genius Academy',
    Dev: 'Front End Developer',
    Description: "Genius Academy is an online platform that offers a wide range of educational resources and courses to help individuals enhance their skills and knowledge in various areas. It's built using HTML, CSS, and JavaScript.",
    FeaturedImage: 'images/skillsailpop4.PNG',
    Technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Bootstrap', 'Webpack'],
    LiveVersion: '<a href="https://saluumaa.github.io/Skill-Sail-Site/" class="url-remove-decoration">See Live</a>',
    Source: '<a href="https://github.com/saluumaa/Skill-Sail-Site" class="url-remove-decoration">See Source</a>',
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
  <button type="button" class="pop-btn">${workCard.Source} <i class="fa-brands fa-github in-btn"></i> </button>
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
