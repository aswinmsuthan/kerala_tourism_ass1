let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("error");
let psw = document.getElementById("exampleInputPassword1");
let pswerror = document.getElementById("pswerror");
let pno = document.getElementById("phonenumber");
let pnoerror = document.getElementById("pnoerror");
function validate() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (regexp.test(email.value)) {
        error.innerHTML = "valid";
        error.style.color = "green";
        // var minNumberofChars = 6;
        // var maxNumberofChars = 12;
        var regularExpression = /^.{10,16}$/;
        if (regularExpression.test(psw.value)) {
            pswerror.innerHTML = "valid";
            pswerror.style.color = "green";
            // return true;
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (pno.value.match(phoneno)) {
                pnoerror.innerHTML = "valid";
                pnoerror.style.color = "green";
                return true;
            }
            else {
                pnoerror.innerHTML = "invalid";
                pnoerror.style.color = "red";
                return false;
            }
            // return true;
        }
        else {
            pswerror.innerHTML = "Invalid";
            pswerror.style.color = "red";
            return false;
        }

    }
    else {
        error.innerHTML = "invalid";
        error.style.color = "red";
        return false;
    }
}