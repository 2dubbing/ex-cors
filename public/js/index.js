const MAIN_SERVER_URL = 'http://localhost:3000';
const API_SERVER_URL = 'http://localhost:3001';

window.onload = function() {
  const img = document.querySelector('.content--image > img');
  const setImage = (imgSrc) => {
    img.src = imgSrc;
    img.alt = '이미지';
  };
  
  const setText = ($target, text) => {
    $target.innerText = text;
  };

  const button = document.querySelector('.content--image__button__same');
  button.addEventListener('click', () => {
    setImage("/images/kakao_tube.png")
  });

  const button2 = document.querySelector('.content--image__button__cross');
  button2.addEventListener('click', () => {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    fetch(`${API_SERVER_URL}/images`, { method: 'GET', headers })
    .then(response => response.json())
    .then(({ images }) => setImage(images[0]));
  });

  const $textView = document.querySelector('.content--simple-request > p');
  const button3 = document.querySelector('.content--simple-request__button');
  button3.addEventListener('click', () => {
    const headers = new Headers({
      'Content-Type': 'text/plain',
    });

    fetch(`${API_SERVER_URL}/simple-text`, { method: 'GET', headers })
    .then(response => response.text())
    .then(text => setText($textView, text));
  });

  const $credentialView = document.querySelector('.content--credential-request > p');
  const button4 = document.querySelector('.content--credential-request__button');
  button4.addEventListener('click', () => {

    fetch(`${API_SERVER_URL}/credential`, { 
      method: 'GET', 
      credentials: 'include',
    })
    .then(response => response.json())
    .then(({ data }) => setText($credentialView, data[0]));
  });
};