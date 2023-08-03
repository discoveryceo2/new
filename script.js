function text() {
    // Retrieving data
    var uid = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pw = document.getElementById("password").value;

    // Storing Data
    var user = localStorage.setItem("uid", uid);
    var em = localStorage.setItem("email", email);
    var pass = localStorage.setItem("pw", pw);

    //Retrieving stored data and using it for calculation
    var user = localStorage.getItem("uid", uid);
    var em = localStorage.getItem("email", email);
    var pass = localStorage.getItem("pw", pw);

    var a, b, c;
    a = "Oluwadarasimi";
    b = "dara.oluwunmi@outlook.com";
    c = "12345";

    if (a == user && b == em && c == pass) {
        alert("Login Successfull !");
    }
    else {
        alert("Invalid Details !")
    }
}