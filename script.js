function validateInput() {
  const input = document.getElementById("input");
  const inputValue = document.getElementById("input").value;
  const questionContainer = document.querySelector(".question-container");
  const main = document.querySelector("main");
  const body = document.querySelector("body");

  let ans = inputValue.toLowerCase();

  // Example validation: check if it's empty
  if (ans.trim() === "") {
    alert("Input cannot be empty.");
    input.value = "";
  } else if (ans === "elephant") {
    // remove display none class
    main.classList.remove("none-display");
    body.style.height = "100%";
    // add display none to question-container class
    questionContainer.classList.add("none-display");
  } else {
    alert("Not you.");
    input.value = "";
  }
}
