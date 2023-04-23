function test_str() {
    var res;
    var str =
        document.getElementById("password").value;
    if (str.match(/[a-z]/g) && str.match(
            /[A-Z]/g) && str.match(
            /[0-9]/g) && str.match(
            /[^a-zA-Z\d]/g) && str.length >= 8){
        alert("Login Successful")
            }
    else{
       alert("Password is incorrect")
    }
}