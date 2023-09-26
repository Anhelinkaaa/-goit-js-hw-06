function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body')
const color = document.querySelector('.color')
const button = document.querySelector('.change-color')

button.addEventListener('click', changeColor)

function changeColor(evt) {
  const arr = getRandomHexColor()
  
  body.style.backgroundColor = arr;
color.textContent = `${arr}`

  
  console.dir(color.textContent)
  console.log(evt)
  console.log(evt)
}