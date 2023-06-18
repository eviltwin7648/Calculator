var string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      calculateResult();
    } else if (e.target.innerHTML == "DEL") {
      removeLastCharacter();
    } else if (e.target.innerHTML == "RESET") {
      resetCalculator();
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

// Input from Keydown
document.addEventListener("keydown", function (event) {
  let keypress = event.key;
  if (keypress == "Enter") {
    event.preventDefault(); // Prevent form submission
    calculateResult();
  } else if (keypress == "Backspace") {
    removeLastCharacter();
  } else if (keypress == "r") {
    resetCalculator();
  } else {
    string = string + keypress;
    document.querySelector("input").value = string;
  }
});

function calculateResult() {
  string = eval(string);
  document.querySelector("input").value = string;
}

function removeLastCharacter() {
  string = string.slice(0, -1);
  document.querySelector("input").value = string;
}

function resetCalculator() {
  string = "";
  document.querySelector("input").value = string;
}

document.getElementById("one").addEventListener("click", function () {
  document.body.classList.remove("active2");
  document.body.classList.remove("active3");
  document.body.classList.add("active1");
  document.querySelector("#circle").style.left = "2%";
});

document.getElementById("two").addEventListener("click", function () {
  document.body.classList.remove("active1");
  document.body.classList.remove("active3");
  document.body.classList.add("active2");
  document.querySelector("#circle").style.left = "42%";
});
document.getElementById("three").addEventListener("click", function () {
  document.body.classList.remove("active2");
  document.body.classList.remove("active1");
  document.body.classList.add("active3");
  document.querySelector("#circle").style.left = "75%";
});
