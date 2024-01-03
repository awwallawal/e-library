const eyePassword = document.getElementById('eye-password');
const inputPassword = document.getElementById('password');
const showPassword = document.getElementById("show-password");
const eyeIcon = document.getElementById('eye-icon');
const email = document.getElementById('email');
const form = document.getElementById("form");
const loginBtn = document.getElementById("login-btn");
const regBtn = document.getElementById("reg-btn");
const closeBtn = document.querySelector(".close-btn")
console.log(closeBtn)

regBtn.addEventListener('click', ()=>{
    console.log("Salaam Alaikum Awwal")
})

loginBtn.addEventListener('click', ()=>{
    console.log("Salaam Alaikum Akolade")
})

closeBtn.addEventListener('click', ()=>{
    console.log("Salaam Alaikum Akanni")
    
})



inputPassword.addEventListener('keyup', ()=>{
    showPassword.textContent = ": " + inputPassword.value;
    showPassword.classList.add('hidepassword')
})

eyePassword.addEventListener('click', ()=>{
    showPassword.classList.toggle('toggleshow');
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(!validator.isEmail(email.value)){
        alert("Invalid Email. Please check the email address");
        return false
    } else {
        alert ("Correct values!")
    }
})
