const input = document.querySelector("#name-input");

input.addEventListener("input", textInput);
function textInput(evt) {
  let output = document.querySelector("#name-output");

  if (evt.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = evt.currentTarget.value;
  }

  console.dir(output);
}
