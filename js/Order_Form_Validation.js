function printError(Id, Msg){
    document.getElementById(Id).innerHTML = Msg;
}
function validateForm(){
    var name = document.Form.name.value;
    var phone = document.Form.phone.value;
    var email = document.Form.email.value;
    var address = document.Form.value;
    
    var nameErr = phoneErr = emailErr =  addressErr =true;

    //Username
    var regex = /^[A-Za-z]+$/;              
    if(regex.test(name) === false) {
        printError("nameErr", "Please enter a valid name");
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        printError("nameErr", "");
        nameErr = false;
        var elem = document.getElementById("name");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }
    

    //Phone
    var regex = /^[0-9]\d{9}$/;
    if(regex.test(phone) == false){
        printError("phoneErr", "Please enter valid 10 digit phone number");
        var elem = document.getElementById("phone");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else{
        printError("phoneErr", "");
        phoneErr = false;
        var elem = document.getElementById("phone");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }

    //email
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email) === false) {
        printError("emailErr", "Example email address : name@gmail.com");
        var elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else{
        printError("emailErr", "");
        emailErr = false;
        var elem = document.getElementById("email");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");

    }

    //Số nhà/đường
    var regex = /^[0-9a-zA-Z]+$/;
    if(regex.test(address) === false) {
        printError("addressErr", "Please enter a valid name");
        var elem = document.getElementById("address");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        printError("addressErr", "");
        addressErr = false;
        var elem = document.getElementById("address");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }

    if((nameErr || phoneErr || emailErr || addressErr) == true){
        return false;
    }	
    else{
        alert("Order successfu!!!");
    }
};