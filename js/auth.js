// REGISTER
document.addEventListener("DOMContentLoaded", function () {

    let registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let username = document.getElementById("regUser").value;
            let password = document.getElementById("regPass").value;

            localStorage.setItem("user", username);
            localStorage.setItem("pass", password);

            alert("Registrasi berhasil!");
            window.location.href = "index.html";
        });
    }

    // LOGIN
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let username = document.getElementById("logUser").value;
            let password = document.getElementById("logPass").value;

            let savedUser = localStorage.getItem("user");
            let savedPass = localStorage.getItem("pass");

            if (username === savedUser && password === savedPass) {
                alert("Login berhasil!");
                localStorage.setItem("loginStatus", "true");
                window.location.href = "home.html";
            } else {
                alert("Username atau password salah!");
            }
        });
    }

    // Jika tidak login, cegah akses home.html
    if (window.location.pathname.includes("home.html")) {
        if (localStorage.getItem("loginStatus") !== "true") {
            window.location.href = "index.html";
        }
    }
});

// LOGOUT
function logout() {
    localStorage.removeItem("loginStatus");
    alert("Anda telah logout");
    window.location.href = "index.html";
}
