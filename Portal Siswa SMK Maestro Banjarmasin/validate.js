function validatelogin() {
    event.preventDefault();
    var nis = document.getElementById("nis").value;
    var password = document.getElementById("password").value;
    if (nis == "1616161616" && password == "123456") {
        alert("Login berhasil!");
        window.location = "Home.html"; // Redirecting to other page.
    }
    else {
        alert("Username atau password yang Anda masukkan salah!");
    }
}

function chkpswd() {
    var password = document.getElementById("password1");
    var conf = document.getElementById("confirm_password");
    if (password.value != conf.value) {
        alert("Password tidak cocok!");
    }
}

function chktype() {
    var nis = document.getElementById("nis").value;
    var nis1 = document.getElementById("nis1").value;
    if (isNaN(nis) || isNaN(nis1)) {
        alert("NIS hanya boleh dimasukkan angka");
    }
}