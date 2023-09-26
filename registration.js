function validRegistration(){
    var username = document.getElementById("username")
    var fullname = document.getElementById("fullname")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var address = document.getElementById("address")

    
    if(username.value.length < 8){
        alert("Username must at least 8 character");
    }else if(fullname.value.length < 10){
        alert("Full name must at least 10 character");
    }else if(!email.value.endsWith("@gmail.com")){
        alert("Email must be @gmail.com");
    }else if(!checkAlphaNum(password.value)){
        alert("Password must be Alpanum");
    }else if(address.value.length < 20){
        alert("Address must at least 20 character");
    }
}

function checkAlphaNum(password){
    var isAlpha = false;
    var isNum = false;
    for(let i=0;i<password.length;i++){
        if(isNaN(password[i])){
            isAlpha = true;
        }else{
            isNum = true;
        }
        if(isAlpha && isNum){
            return true;
        }
    }
    return false;
}
