document.addEventListener("DOMContentLoaded", function () {
  const resultField = document.getElementById("result");
  const buttons = document.querySelectorAll(".buttons button");

  let currentInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = this.textContent;

      if (buttonText === "AC") {
        currentInput = "";
      } else if (buttonText === "=") {
        try {
          currentInput = eval(currentInput).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else {
        currentInput += buttonText;
      }

      resultField.value = currentInput;
    });
  });
});
