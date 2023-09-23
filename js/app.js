function getPin() {
  const pin = generatePin();
  const pinString = pin + "";

  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document
  .getElementById("generate-btn-pin")
  .addEventListener("click", function () {
    const pin = getPin();
    const displayPinField = document.getElementById("display-pin");
    displayPinField.value = pin;
  });

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById("typed-numbers");
    const previousTypeNumber = typeNumberField.value;

    if (isNaN(number)) {
      if (number === "C") {
        typeNumberField.value = "";
      } else if (number === "<") {
        const digit = previousTypeNumber.split("");
        digit.pop();
        const remainingDigits = digit.join("");
        typeNumberField.value = remainingDigits;
      }
    } else {
      const newTypeNumber = previousTypeNumber + number;
      typeNumberField.value = newTypeNumber;
    }
  });
