// const randomColor = () => {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// const letters = document.querySelectorAll('.letter');

// setInterval(function() {
//   for(let letter of letters) {
//     letter.style.color = randomColor();
//   }
// }, 1000)


const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const letters = document.querySelectorAll('.letter');

const randomColorLetters = () => {
  setInterval(function() {
    for(let letter of letters) {
      letter.style.color = randomColor();
    }
  }, 1000)
}
randomColorLetters();



// 