'use strict';

const gallery = document.querySelector('.gallery');
const modalDialog = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// for(let car of vehicles) {
//   gallery.insertAdjacentHTML('beforeend',`<div class="car">
//   <img id="${car.id}" src="./content/img/${car.imageName}.jpg" alt="${car.make} ${car.model}" />
//   <p>${car.make} ${car.model}</p>
//   </div>`)
// }

vehicles.forEach(car => {
  gallery.insertAdjacentHTML(
    'beforeend',
    `<div class="car">
    <img id="${car.id}" src="./content/img/${car.imageName}.jpg" alt="${car.make} ${car.model}" />
    <p>${car.make} ${car.model}</p>
    </div>`
  );
});

const images = document.querySelectorAll('.car img');

const openModal = function(imageSrc, id) {
  const image = modalDialog.querySelector('.modal-container');

  image.innerHTML = `<img src="${imageSrc}" /><a class="btn" href="car-detail.html?vehicleId=${id}">Mer information</a>`;

  overlay.classList.remove('hidden');
  modalDialog.classList.remove('hidden');
}

for(let image of images){
  let src = image.getAttribute('src');
  let id = image.getAttribute('id');

  image.addEventListener('click', function() {
    openModal(src, id);
  });
}

const quitModal = () => {
  modalDialog.classList.add('hidden');
  overlay.classList.add('hidden');
}

closeModal.addEventListener('click', quitModal);

overlay.addEventListener('click', quitModal);

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') {
    if(!modalDialog.classList.contains('hidden')){
      quitModal();
    }
  }
})

