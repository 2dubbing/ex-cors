const MAIN_SERVER_URL = 'http://localhost:3000';
const STATIC_SERVER_URL = 'http://localhost:3001';

window.onload = function() {
  const img = document.querySelector('.content--image > img');
  const setImage = (imgSrc) => {
    img.src = imgSrc;
    img.alt = '이미지';
  }
  
  const button = document.querySelector('.content--image__button__same');
  button.addEventListener('click', () => {
    fetch(`${MAIN_SERVER_URL}/images`)
    .then(response => response.json())
    .then(({ images }) => {
      setImage(images[0]);
    });
  });

  const button2 = document.querySelector('.content--image__button__cross');
  button2.addEventListener('click', () => {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    fetch(`${STATIC_SERVER_URL}/images/`, { method: 'GET', headers })
    .then(response => response.json())
    .then(({ images }) => {
      setImage(images[0]);
    });
  });  
};