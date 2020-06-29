const MAIN_SERVER_URL = 'http://localhost:3000';
const STATIC_SERVER_URL = 'http://localhost:3001';

window.onload = function() {
  const setImage = (imgSrc) => {
    const img = document.querySelector('.content--image > img');
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

    fetch(`${STATIC_SERVER_URL}/images`, { method: 'GET', headers })
    .then(response => response.json())
    .then(({ images }) => {
      setImage(images[0]);
    });
  });  
};

window.onerror = function (msg, url, lineNo, columnNo, error) {
  const logBox = document.querySelector('.content--section__log');
  const string = msg.toLowerCase();
  const substring = "script error";

  if (string.indexOf(substring) > -1){
    logBox.value = 'Script Error: See Browser Console for Detail';

  } else {
    const message = [
      'Message: ' + msg,
      'URL: ' + url,
      'Line: ' + lineNo,
      'Column: ' + columnNo,
      'Error object: ' + JSON.stringify(error)
    ].join(' - ');

    logBox.value = message;
  }

  return false;
};