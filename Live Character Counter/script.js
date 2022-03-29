let textArea = document.querySelector('#textarea');
let count = document.querySelector('.count');

let charLength;

textArea.addEventListener('input',()=>{
  charLength = textArea.value.length;
  count.innerText = charLength;
})

