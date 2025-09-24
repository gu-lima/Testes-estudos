let form = document.getElementById("forms-cadastro");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let name = document.getElementById("nome-cadastro").value;
    let email = document.getElementById("email-cadastro").value;
    let password = document.getElementById("senha-cadastro").value;

    await fetch("http://localhost:5000/api/user/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })
});
