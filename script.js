const submitBtn = document.querySelector(".btn");

submitBtn.addEventListener("click", (event) => {
  const email = document.querySelector("input").value;
  var mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (email == null || email == "") {
    document.querySelector(".warning").style.display = "block";
    document.querySelector(".warning").innerHTML =
      "Whoops! It looks like you forgot to add your email";
  } else if (email.match(mailformat)) {
    document.querySelector("input").innerHTML = email;
    event.preventDefault();
  } else {
    event.preventDefault();
    document.querySelector(".warning").style.display = "block";
    document.querySelector(".warning").innerHTML =
      "Please provide a valid email address";
    document.querySelector("input").value = "example@email.com";
    document.getElementById("email").style.color = "black";
    document.getElementById("email").style.border =
      "1px solid hsl(354, 100%, 66%)";
    document.querySelector(".form-data").style.marginBottom = "18px";
  }
});
