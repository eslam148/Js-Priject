
let loginUser = JSON.parse(localStorage.getItem("user")) ;
console.log(loginUser)
if(loginUser){
    window.location.href = "index.html";  
}
var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let email = document.getElementById("Email");
let Password = document.getElementById("Password");  
let button = document.getElementById("submit");
let emialError =document.getElementById("Email-alert") 
let user ={
    email:"islam12476794@gmail.com",
    password:"eslam@1998"
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value == "" || Password.value == "") {
        emialError.innerHTML = "Please fill all the fields";
    }
    else if (!regex.test(email.value)) {
         emialError.innerHTML = "Please enter a valid email";

    }
    else {
        checkUser(email.value,Password.value);
       
       
    }
})

async function checkUser(email,password){
    try{
       let data = await  fetch("http://localhost:3000/user");
       let users =await data.json();
        //console.log(users);
        let result =  users.find((u)=> u.email == email && u.password == password);
        console.log(result)
       if(result){
          
         localStorage.setItem("user",JSON.stringify(result))
          window.location.href = "index.html";  
        }

    }catch(e){

    }
}