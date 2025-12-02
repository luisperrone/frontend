function validateForm() {
    console.log("ValidarForm");
    const hardcodedUser = "admin@admin.com";
    const hardcodedPassword = "admin123";

    const email = document.getElementById("id_email").value;
    const password = document.getElementById("id_passw").value;

    let isValid = true;

    if (email.length < 1){
        showErrorMessage("empty_email", "Email field cannot be empty");
        isValid = false;
    }   else{
            clearErrorMessage("empty_email")
    }

    if (password.length < 1){
        showErrorMessage("empty_pssw", "Password field cannot be empty");
        isValid = false;
    }   else{
            clearErrorMessage("empty_pssw")
    }

    if (hardcodedUser !== email || hardcodedPassword !== password){
        showErrorMessage("error_email", "Invalid email or password");
        isValid = false;
    }   else{
            clearErrorMessage("error_email")
        }

    return isValid;

}

function showErrorMessage(fieldId, message){
    const errorText = document.getElementById(fieldId);
    if (!errorText) return;
    errorText.textContent = "❌" + message;
    errorText.style.display = "block";

}

function clearErrorMessage(fieldId){
        const errorText = document.getElementById(fieldId);
        if (!errorText) return;
        errorText.style.display = "none";

}

const loginButton = document.getElementById ("form_btn");
loginButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Get in listener");
    if (validateForm()){
        window.location.href = "Pages/Welcome.html";
    }
})