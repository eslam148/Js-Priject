
let loginUser = JSON.parse(localStorage.getItem("user")) ;
console.log(loginUser)
if(loginUser){
    window.location.href = "index.html";  
}
var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let nameinput = document.getElementById("name");
let email = document.getElementById("Email");
let Password = document.getElementById("Password");  
let Confirm_Password = document.getElementById("Confirm-Password");  
let listError = document.getElementById("all-alert")
let button = document.getElementById("submit");
let emialError =document.getElementById("Email-alert") 
let Confirmpasswordalert =document.getElementById("Confirm-password-alert") 

let user ={
    email:"islam12476794@gmail.com",
    password:"eslam@1998"
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value == "" || Password.value == "" ||nameinput.value == "" ) {
        listError.innerHTML = "Please fill all the fields";
    }
    else if (!regex.test(email.value)) {
         emialError.innerHTML = "Please enter a valid email";

    }
    else if(Confirm_Password.value !=  Password.value){
        Confirmpasswordalert.innerHTML = "Passwords not match."
      
       
       
    }
    else {
    addUser(nameinput.value, email.value, Password.value);
      
    }
})

async function addUser(name,email,password){
    try{
         
        let data = await fetch("http://localhost:3000/user", {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'id': Math.floor(Math.random() * 1000000),
                'name': name,
                'email':  email.toLowerCase(),
                'password': password
        
            })
        
        });
        let users = await data.json();
        localStorage.setItem("user",JSON.stringify(result))
        window.location.href = "#home";  
       

    }catch(e){
    }
}