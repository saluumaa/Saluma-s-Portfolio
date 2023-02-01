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
    navbarEl.classList.toggle('active');
    humbergerIcon.classList.toggle('hide');
    closeIcon.classList.toggle('show');
  });
});

const workCards = [
  {
    Name: 'Tonic',
    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    FeaturedImage: 'images/Snapshoot Portfolio11.png',
    Technologies: ['Html', 'Css', 'JavaScript', 'Github', 'Ruby', 'Bootstrap'],
    LiveVersion: 'See Live',
    source: 'See Source',
  },

  {
    Name: 'Multi-Post Stories',
    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    FeaturedImage: 'images/Snapshoot Portfolio (1).png',
  },

  {
    Name: 'Facebook 360',
    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    FeaturedImage: 'images/Snapshoot Portfolio.png',
  },

  {
    Name: 'Uber Navigation',
    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    FeaturedImage: 'images/Snapshoot Portfolio (3).png',
  },
];

const sectionHide = document.querySelector('.container');
const btnEl1 = document.querySelector('.btn-one');
const btnEl2 = document.querySelector('.btn-two');
const btnEl3 = document.querySelector('.btn-three');
const btnEl4 = document.querySelector('.btn-four');
const body = document.querySelector('body');

btnEl1.addEventListener('click', () => {
  sectionHide.classList.toggle('hide-container');
  body.classList.toggle('background-img');
  const Popsection = document.createElement('section');
  Popsection.className = 'Popup-Section';
  Popsection.innerHTML = `
      <div class="icon-holder">
      <h2>${workCards[0].Name} </h2>
      <a onclick="showMenu(close)"><i class="fa-solid fa-xmark close-cards"></i></a>
      </div>
      <article class="wrap-frame">
      <p class="frame canopy">CANOPY</p>
      <img src="images/Counter.png" alt="">
      <p class="frame">Back End Dev</p>
      <img class="frame" src="images/Counter.png" alt="" class="card-img">
      <p class="frame">2015</p>
      </article>
      <img src= "${workCards[0].FeaturedImage}" alt="Snapshoot" class="card-img desk-img"> 
      <div class="right-pop">
      <p class="par pop-par">${workCards[0].Description} </p>
      <div class="column-pop">
      <div class="lang-button">
      <ul class="space-tech">
          <li><a href="#">${workCards[0].Technologies[0]}</a></li>
          <li> <a href="#">${workCards[0].Technologies[1]}</a></li>
          <li><a href="#">${workCards[0].Technologies[2]}</a></li>
      </ul>
      <ul class="Desktop-vers">
          <li><a href="#">${workCards[0].Technologies[3]}</a></li>
          <li> <a href="#">${workCards[0].Technologies[4]}</a></li>
          <li><a href="#">${workCards[0].Technologies[5]}</a></li>
      </ul>
      <hr class="hor-line">
  </div>
  <div class="popBtn">
  <a href="https://saluumaa.github.io/Personal-portfolio/"><button type="button" class="pop-btn">${workCards[0].LiveVersion}  <i class="fa-solid fa-power-off in-btn"></i></button></a>
  <a href="https://github.com/saluumaa/Saluma-s-Portfolio"><button type="button" class="pop-btn">${workCards[0].source} <i class="fa-brands fa-github in-btn"></i> </button></a>
  </div>
  </div>
  </div>
  `;
  body.appendChild(Popsection);
});

btnEl2.addEventListener('click', () => {
  sectionHide.classList.toggle('hide-container');
  body.classList.toggle('background-img');
  const Popsection = document.createElement('section');
  Popsection.className = 'Popup-Section';
  Popsection.innerHTML = `
      <div class="icon-holder">
      <h2>${workCards[1].Name} </h2>
      <a onclick="showMenu(close)"><i class="fa-solid fa-xmark close-cards"></i></a>
      </div>
      <article class="wrap-frame">
      <p class="frame canopy">CANOPY</p>
      <img src="images/Counter.png" alt="">
      <p class="frame">Back End Dev</p>
      <img class="frame" src="images/Counter.png" alt="" class="card-img">
      <p class="frame">2015</p>
      </article>
      <img src= "${workCards[1].FeaturedImage}" alt="Snapshoot" class="card-img desk-img"> 
      <div class="right-pop">
      <p class="par pop-par">${workCards[1].Description} </p>
      <div class="column-pop">
      <div class="lang-button">
      <ul class="space-tech">
          <li><a href="#">${workCards[0].Technologies[0]}</a></li>
          <li> <a href="#">${workCards[0].Technologies[1]}</a></li>
          <li><a href="#">${workCards[0].Technologies[2]}</a></li>
      </ul>
      <ul class="Desktop-vers">
          <li><a href="#">${workCards[0].Technologies[3]}</a></li>
          <li> <a href="#">${workCards[0].Technologies[4]}</a></li>
          <li><a href="#">${workCards[0].Technologies[5]}</a></li>
      </ul>
      <hr class="hor-line">
  </div>
  <div class="popBtn">
  <a href="https://saluumaa.github.io/Personal-portfolio/"><button type="button" class="pop-btn">${workCards[0].LiveVersion}  <i class="fa-solid fa-power-off in-btn"></i></button></a>
  <a href="https://github.com/saluumaa/Saluma-s-Portfolio"><button type="button" class="pop-btn">${workCards[0].source} <i class="fa-brands fa-github in-btn"></i> </button></a>
  </div>
  </div>
  </div>
  `;
  body.appendChild(Popsection);
});

btnEl3.addEventListener('click', () => {
  sectionHide.classList.toggle('hide-container');
  body.classList.toggle('background-img');
  const Popsection = document.createElement('section');
  Popsection.className = 'Popup-Section';
  Popsection.innerHTML = `
      <div class="icon-holder">
      <h2>${workCards[2].Name} </h2>
      <a onclick="showMenu(close)"><i class="fa-solid fa-xmark close-cards"></i></a>
      </div>
      <article class="wrap-frame">
      <p class="frame canopy">CANOPY</p>
      <img src="images/Counter.png" alt="">
      <p class="frame">Back End Dev</p>
      <img class="frame" src="images/Counter.png" alt="" class="card-img">
      <p class="frame">2015</p>
      </article>
      <img src= "${workCards[2].FeaturedImage}" alt="Snapshoot" class="card-img desk-img"> 
      <div class="right-pop">
      <p class="par pop-par">${workCards[0].Description} </p>
      <div class="column-pop">
      <div class="lang-button">
      <ul class="space-tech">
          <li><a href="#">${workCards[0].Technologies[0]}</a></li>
          <li> <a href="#">${workCards[0].Technologies[1]}</a></li>
          <li><a href="#">${workCards[0].Technologies[2]}</a></li>
      </ul>
      <ul class="Desktop-vers">
          <li><a href="#">${workCards[0].Technologies[3]}</a></li>
          <li> <a href="#">${workCards[0].Technologies[4]}</a></li>
          <li><a href="#">${workCards[0].Technologies[5]}</a></li>
      </ul>
      <hr class="hor-line">
  </div>
  <div class="popBtn">
  <a href="https://saluumaa.github.io/Personal-portfolio/"><button type="button" class="pop-btn">${workCards[0].LiveVersion}  <i class="fa-solid fa-power-off in-btn"></i></button></a>
  <a href="https://github.com/saluumaa/Saluma-s-Portfolio"><button type="button" class="pop-btn">${workCards[0].source} <i class="fa-brands fa-github in-btn"></i> </button></a>
  </div>
  </div>
  </div>
  `;
  body.appendChild(Popsection);
});

btnEl4.addEventListener('click', () => {
  sectionHide.classList.toggle('hide-container');
  body.classList.toggle('background-img');
  const Popsection = document.createElement('section');
  Popsection.className = 'Popup-Section';
  Popsection.innerHTML = `
      <div class="icon-holder">
      <h2>${workCards[3].Name} </h2>
      <a onclick="showMenu(close)"><i class="fa-solid fa-xmark close-cards"></i></a>
      </div>
      <article class="wrap-frame">
      <p class="frame canopy">CANOPY</p>
      <img src="images/Counter.png" alt="">
      <p class="frame">Back End Dev</p>
      <img class="frame" src="images/Counter.png" alt="" class="card-img">
      <p class="frame">2015</p>
      </article>
      <img src= "${workCards[3].FeaturedImage}" alt="Snapshoot" class="card-img desk-img"> 
      <div class="right-pop">
      <p class="par pop-par">${workCards[3].Description} </p>
      <div class="column-pop">
      <div class="lang-button">
      <ul class="space-tech">
          <li><a href="#">${workCards[0].Technologies[0]}</a></li>
          <li> <a href="#">${workCards[0].Technologies[1]}</a></li>
          <li><a href="#">${workCards[0].Technologies[2]}</a></li>
      </ul>
      <ul class="Desktop-vers">
          <li><a href="#">${workCards[0].Technologies[3]}</a></li>
          <li> <a href="#">${workCards[0].Technologies[4]}</a></li>
          <li><a href="#">${workCards[0].Technologies[5]}</a></li>
      </ul>
      <hr class="hor-line">
  </div>
  <div class="popBtn">
  <a href="https://saluumaa.github.io/Personal-portfolio/"><button type="button" class="pop-btn">${workCards[0].LiveVersion}  <i class="fa-solid fa-power-off in-btn"></i></button></a>
  <a href="https://github.com/saluumaa/Saluma-s-Portfolio"><button type="button" class="pop-btn">${workCards[0].source} <i class="fa-brands fa-github in-btn"></i> </button></a>
  </div>
  </div>
  </div>
  `;
  body.appendChild(Popsection);
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
