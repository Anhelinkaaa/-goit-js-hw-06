const window = document.querySelector("#validation-input");

window.addEventListener("blur", chackFunction);

function chackFunction(evt) {
  // if (evt.target.value.length === window.dataset.length) {

  //     console.log(evt.target.value.length)}
  // window.style.validationInput.valid.borderColor = `#4caf50`;

  //     evt.currentTarget.value.length === Number(window.dataset.length) ? console.log('hello')
  // : console.log('pizdec')

  //      evt.currentTarget.value.length === Number(window.dataset.length) ? window.style.borderColor = '#4caf50'
  // : window.style.borderColor = '#validation-input.invalid'

  if (evt.currentTarget.value.length === Number(window.dataset.length)) {
    //   window.style.borderColor = "#4caf50";
      window.classList.remove('invalid');
      window.classList.add('valid');
     
     
  } else {
    //   window.style.borderColor = "#validation-input.invalid";
      
      window.classList.remove('valid')
      window.classList.add('invalid')
  }

    console.dir(window.classList)
  //  console.dir(evt.target)

  // console.log(evt.currentTarget.value.length)
  //  console.dir(evt.target.value.length)
  // console.log(Number(window.dataset.length))
}
