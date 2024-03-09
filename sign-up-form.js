const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordInputs = document.querySelectorAll(".error");
const passwordAlert = document.querySelector(".checkPassword");


passwordInputs.forEach((element) => {
        element.addEventListener("input",() => {
                console.log(passwordInput.value);
                if (passwordInput.value != confirmPasswordInput.value) {
                        passwordInput.style.cssText += "outline: 2px solid red";
                        confirmPasswordInput.style.cssText += "outline: 2px solid red";
                        passwordAlert.textContent = "*Passwords do not match";
                }
                else {
                        passwordInput.style.cssText += "outline: 2px solid royalblue";
                        confirmPasswordInput.style.cssText += "outline: 2px solid royalblue";
                        passwordAlert.textContent = "";
                }
        })

});
