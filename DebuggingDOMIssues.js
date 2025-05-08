
// JavaScript code with bugs
const para = document.querySelector('#message'); // Fixed a typo "message" was written as"massage"
const textButton = document.getElementById('textButton'); // getElementByName was used intead of getElementById as "textButton" is id
textButton.addEventListener("click",() => { // addEventListener was written as addClickEventListener and added click in the parameter
  para.innerText = 'New Message'; // Incorrect property
});

const box = document.getElementById('box');
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
  box.style.backgroundColor = 'blue'; // Fixed typo in 'style'
});
