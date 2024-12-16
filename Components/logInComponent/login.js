var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


let email = document.getElementById("Email");
let Password = document.getElementById("Password");  
let button = document.getElementById("submit");
let emialError =document.getElementById("Email-alert") 


button.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value == "" || Password.value == "") {
        emialError.innerHTML = "Please fill all the fields";
    }
    else if (!regex.test(email.value)) {
         emialError.innerHTML = "Please enter a valid email";

    }
    else {
        alert("Login Successful");
        window.location.href = "index.html";
    }
})
