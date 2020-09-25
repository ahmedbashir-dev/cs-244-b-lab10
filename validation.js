var nameInput = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirm_password');
var submitBtn = document.getElementById('submit');

// function validatePassword(inputField){

// }
nameInput.addEventListener('input', function(){
    var nameValue = nameInput.value;
    if((nameValue == '' || nameValue == null) || (nameValue.length < 3 || nameValue.length > 32)){
        if(nameInput.classList.contains("is-valid")){
            nameInput.classList.remove("is-valid");
        }
        nameInput.classList.add("is-invalid");
        submitBtn.setAttribute("disabled","true");
        
    }
    else{
        if(nameInput.classList.contains("is-invalid")){
            nameInput.classList.remove("is-invalid");
        }
        nameInput.classList.add("is-valid");
        submitBtn.removeAttribute("disabled");
    } 
});

password.addEventListener('input',function(){
    var passwordValue = password.value;
    if(passwordValue.length < 3 || passwordValue.length > 64){
        if(password.classList.contains("is-valid")){
            password.classList.remove("is-valid");
        }
        password.classList.add("is-invalid");
        submitBtn.setAttribute("disabled","true");
    }
    else{
        if(password.classList.contains("is-invalid")){
            password.classList.remove("is-invalid");
        }
        password.classList.add("is-valid");
        submitBtn.removeAttribute("disabled");
    }
});

submitBtn.addEventListener('click',function(){
    // var passwordValue = password.value;
    // var numbers = /^[0-9]+$/;
    // if(passwordValue.match(numbers)){
    //  alert("your password is correct");
    // }
    // else{
    //  alert("Invalid Password");
    // }
})
