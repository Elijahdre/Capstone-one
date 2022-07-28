const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('#nav');

function menu() {
  hamburger.classList.toggle('change');
  nav.classList.toggle('hide');
  document.body.classList.toggle('no-scroll');
  const show = document.getElementById('navbarSupportedContent');
  show.classList.toggle('d-none');
  if (show.style.display === 'flex') {
    show.style.display = 'flex';
  } else {
    show.style.display = 'flex';
  }
}
hamburger.addEventListener('click', menu);

const dishes = {
  0: {
    name: 'Fried Rice ',
    photo: 'images/food2.jpg',
    title: 'Fried rice',
    content:
      'This is a Nigerian food rich in protein and vitamins and eaten in the South',
    description:
      'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye.',
  },
  1: {
    name: 'Mashed Potatoes',
    photo: 'images/food3.jpg',
    title: 'Potatoes',
    content:
      'This is a Nigerian food rich in protein and vitamins and eaten in the South',
    description:
      'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye.',
  },
  2: {
    name: 'Fish and Egg',
    photo: 'images/food4.jpg',
    title: 'Fish',
    content:
      'This is a Nigerian food rich in protein and vitamins and eaten in the South',
    description:
      'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye.',
  },
  3: {
    name: 'Cucumber sauce',
    photo: 'images/food5.jpg',
    title: 'Cucu',
    content:
      'This is a Nigerian food rich in protein and vitamins and eaten in the South',
    description:
      'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye.',
  },
  4: {
    name: 'Egusi-Pudding',
    photo: 'images/food6.jpg',
    title: 'Egusi-pudding',
    content: 'This is a Nigerian food rich in protein and vitamins',
    description:
      'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye.',
  },
  5: {
    name: 'Leaf soup and Eba',
    photo: 'images/food9.jpg',
    title: 'Eba',
    content:
      'This is a Nigerian food eaten mostly in the western part of the country',
    description:
      'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye.',
  },
};

function displayDishes() {
  const dishesDiv = document.getElementById('get-dishes');
  const dishKeys = Object.keys(dishes);
  let buildHTML = '';
  for (let i = 0; i < dishKeys.length; i += 1) {
    const dish = dishes[dishKeys[i]];
    buildHTML += `
      <div class="col-12 col-lg-6 col-xl-6 mb-lg-5 mb-xl-5 ${
  i > 1 ? 'm-hide' : ''
}">
        <div class="dishes-slider ">
          <div class="dish-item d-flex">
            <div class="dish-img me-3">
              <img class="" src="${dish.photo}" alt="Speaker">
            </div>
            <div class="speaker-info">
              <h3 class="speaker-name fw-bold">
                <a href="#" class="text-decoration-none">
                  <span>${dish.name}</span>
                </a>
              </h3>
              <p class="speaker-designation fst-italic orange-text">
                <span>${dish.title}</span>
              </p>
              <p class="speaker-description">${dish.content}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  dishesDiv.innerHTML = buildHTML;
}

window.onload = () => {
  displayDishes();
};

const showDishes = document.querySelector('.show-more-dishes');
showDishes.addEventListener(
  'click',
  (e) => {
    e.preventDefault();
    showDishes.remove();
    const hide = document.querySelectorAll('.m-hide');
    for (let i = 0; i < hide.length; i += 1) {
      hide[i].classList.remove('m-hide');
    }
  },
  false,
);
