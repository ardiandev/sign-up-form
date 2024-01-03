const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");
const inputEl = document.querySelectorAll("input");

inputEl.forEach(inputField =>
  inputField.addEventListener("input", event => {
    if (event.target.value) {
      event.target.classList.add("filled");
    } else {
      event.target.classList.remove("filled");
    }

    handleInput(event);
  })
);
function handleInput(event) {
  let input = event.target;

  switch (input.type) {
    case "email":
      handleInputEmail(input);
      break;
  }
}

function handleInputEmail(input) {
  const emailRegex = /@.*\./;

  if (!emailRegex.test(input.value)) {
    input.classList.remove("filled");
  }
}

form.addEventListener("submit", event => {
  event.preventDefault();
});
