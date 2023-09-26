const control = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

control.addEventListener('input', fontChanger);

function fontChanger(evt) {
// Number(evt.currentTarget.value)  === Number(text.style.fontSize)
    
    text.style.fontSize = `${evt.currentTarget.value}px`

    // console.log(Number(evt.currentTarget.value))
}

// console.dir(text.style.fontSize)
// console.log(Number(text.style.fontSize))
// console.dir(text)