function printError(Id, Msg){
    document.getElementById(Id).innerHTML = Msg;
}
function validateForm(){
    var phonenum = document.Form.phonenum.value;
    var passw = document.Form.passw.value;
    var phonenumError = passwError = true;
    var regex = /^[0-9]\d{9}$/;
    if(regex.test(phonenum) == false){
        printError("phonenumError", "Please enter valid 10 digit phone number");
        var elem = document.getElementById("phonenum");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else{
        printError("phonenumError", "");
        phonenumError = false;
        var elem = document.getElementById("phonenum");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }
    //Password
    var regex=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(regex.test(passw) == false){
        printError("passwError", "Please enter valid password");
        var elem = document.getElementById("passw");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else{
        printError("passwError", "");
        passwError = false;
        var elem = document.getElementById("passw");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }
    if((phonenumError || passwError) == true){
        return false;
    }
    else{
        alert("Login successfu!!!");
    }
};