function printError(Id, Msg){
    document.getElementById(Id).innerHTML = Msg;
}
function validateForm(){
    var name = document.Form.name.value;
    var phone = document.Form.phone.value;
    var pass = document.Form.pass.value;
    
    var phoneError = passError = nameError = true;
    //Username
    
    var regex = /^[a-zA-Z\s] + $/;
    if(regex.test(name) == false){
        printError("phoneError", "Please enter valid user name");
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else{
        printError("nameError", "");
        nameError = false;
        var elem = document.getElementById("name");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }
    //Phone
    var regex = /^[0-9]\d{9}$/;
    if(regex.test(phone) == false){
        printError("phoneError", "Please enter valid 10 digit phone number");
        var elem = document.getElementById("phone");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else{
        printError("phoneError", "");
        phoneError = false;
        var elem = document.getElementById("phone");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }
    //Password
    var regex=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(regex.test(pass) == false){
        printError("passError", "Please enter valid password");
        var elem = document.getElementById("pass");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else{
        printError("passError", "");
        passError = false;
        var elem = document.getElementById("pass");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }
    if((phoneError || passError || nameError) == true){
        return false;
    }	
    else{
        alert("Register successfu!!!");
    }
};