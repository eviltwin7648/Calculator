let string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "RESET") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

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
