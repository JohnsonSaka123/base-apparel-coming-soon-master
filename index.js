const EmailForm = document.querySelector(".email-form");

EmailForm.addEventListener("submit" , (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email");

  const errorMsg = document.getElementById("error-msg");

  const errorIcon = document.getElementById('error-icon');

  //removing any whitespace
  const email = emailInput.value.trim();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;



  /*let mail = "sakajohnson1@gmail.com" ;*/

  if (!email){
    showError("Email cannot be empty");
  }else if (!emailPattern.test(email)){
    showError("Please provide a valid email address");
  }else{
    clearError();
    alert("Thanks! Email submitted successfully.");
  }

  function showError(message){
    errorMsg.textContent = message;
    emailInput.classList.add('error');
    errorIcon.style.display = "block";
  }

  function clearError(){
    errorMsg.textContent = "";
    emailInput.classList.remove("error");
    errorIcon.style.display = "none";
    emailInput.value = "";
  }
})