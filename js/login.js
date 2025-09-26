let form = document.getElementById("forms-login");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let email = document.getElementById("email-login").value;
    let password = document.getElementById("senha-login").value;

    if (email.trim() === "") {
        return;
    }

    if (password.trim() === "") {
        return;
    }

    await fetch("http://18.191.216.109:5000/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            sessionStorage.setItem("session", JSON.stringify(data.user, null, 2))
            window.location.href = "index.html";
        }

        console.log(data);
    });
});
