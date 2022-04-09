function changeColor() {
   let color = document.getElementById('colorInputColor').value;
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = color;
}
    
function changeLogo1Color() {
    let color = document.getElementById('colorLogo1Color').value;
    document.getElementById("logo1").style.color = color;

}
function changeLogo2Color() {
    let color = document.getElementById('colorLogo2Color').value;
    document.getElementById("logo2").style.color = color;

}
function pic1() {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundImage = "url('image.jpg')";
}
function pic2() {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundImage = "url('images2.jpg')";
} function pic3() {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundImage = "url('images3.jpg')";
} function pic4() {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundImage = "url('images4.jpg')";
}
function validateForm() {
    var valid = true;
    if (document.inputForm.name1.value == "") {
        alert("First name is empty");
        document.inputForm.name1.focus();
        valid = false;
    }
   else if (document.inputForm.name2.value == "") {
        alert("Second name is empty");
        document.inputForm.name2.focus();
        valid = false;
    }
    else if (document.inputForm.password1.value == "") {
        alert("Password is empty");
        document.inputForm.password1.focus();
        valid = false;
    }
    else if (document.inputForm.password2.value == "") {
        alert("Confirm password is empty");
        document.inputForm.password2.focus();
        valid = false;
    }
    else if (document.inputForm.username.value == "") {
        alert("Username is empty");
        document.inputForm.username.focus();
        valid = false;
    }
    else if (document.inputForm.email.value == "") {
        alert("Email is empty");
        document.inputForm.email.focus();
        valid = false;
    }
    else if (document.inputForm.email.value.indexOf("@") == -1 || document.inputForm.email.value.indexOf(".") == -1) {
            alert("Please Enter valid email, e.g:info@yahoo.com");
            document.inputForm.email.focus();
            valid = false;
        }
         
    if (valid==true) {
        location.href = "login.html";
    }
   
}
function validateLoginForm() {
    var valid = true;
    if (document.loginForm.username.value == "") {
        alert("Username is empty");
        document.loginForm.username.focus();
        valid = false;
    }
    else if (document.loginForm.password.value == "") {
        alert("Password is empty");
        document.loginForm.password.focus();
        valid = false;
    }
    if (valid == true) {
        location.href = "home.html";
    }
}