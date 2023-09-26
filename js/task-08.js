const sub = document.querySelector(".login-form");
sub.addEventListener("submit", subForm);

function subForm(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Bсі поля повинні бути заповнені.");
  } else {
    const contacts = {
      Email: email,
      Password: password,
    };
    console.log(contacts);
  }
  form.reset();
}
