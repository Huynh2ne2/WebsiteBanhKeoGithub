function printError(Id, Msg){
    document.getElementById(Id).innerHTML = Msg;
}
function validateForm(){
    var uid = document.Form.uid.value;
    var name = document.Form.name.value;
    var gt = document.Form.gt.value;
    var phone = document.Form.phone.value;
    var email = document.Form.email.value;

    var uidErr = nameErr = gtErr =  phoneErr = emailErr = true;
    //ID
    var ex = /^[0-9]{1,}$/;
    if(ex.test(name) == false) {
        printError("uidErr", "Please enter a valid your id");
        var elem = document.getElementById("uid");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        printError("uidErr", "");
        uidErr = false;
        var elem = document.getElementById("uid");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }


    //USERNAME	
    var regex = /^[A-Za-z]+$/;              
    if(regex.test(name) == false) {
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

    //Giới tính
    if(gt == "") {
        printError("gtErr", "Please select your gender");
        var elem = document.getElementById("gt");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("gtErr", "");
        gtErr = false;
        var elem = document.getElementById("gt");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }

    //Số điện thoại
    var regex = /^[0-9]\d{9}$/;
    if(regex.test(phone) == false) {
        printError("phoneErr", "Please enter a valid 10 digit phone number");
        var elem = document.getElementById("phone");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else{
        printError("phoneErr", "");
        phoneErr = false;
        var elem = document.getElementById("phone");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }

    //Email
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email) == false) {
        printError("emailErr", "Please enter a valid email address");
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

    if(( uidErr||nameErr || phoneErr || emailErr || gtErr) == true){
        return false;
    }	
    else{
    	
        alert("Hoàn tất thủ tục nhập thông tin nhân viên..!!");
    }	
};