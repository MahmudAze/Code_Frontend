var input = document.querySelector(".form-control");

input.addEventListener("keyup", function (e) {
  var title = document.querySelector(".title");

  var inputValue = e.target.value;
  var error = document.querySelector(".text-danger");

  if (inputValue != "") {
    title.innerHTML = inputValue;
    error.classList.add("d-none");
  }
  else {
    error.classList.remove("d-none");
    title.innerHTML = "";
  }
});
