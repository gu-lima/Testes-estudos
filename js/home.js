async function logged() {
    let anchor = document.getElementById("account-anchor");
    let anchor2 = document.getElementById("account-anchor2");
    let session = JSON.parse(sessionStorage.getItem("session"));
    
    if (session){
        anchor.textContent = `${session.name.split(" ")[0]}`;
        anchor2.textContent = `${session.name.split(" ")[0]}`;
        anchor.href = "./pages/perfil";
        anchor2.href = "./pages/perfil"
    }

    anchor.textContent = "Cadastre-se";
    anchor2.textContent = "Cadastre-se";
}

document.addEventListener("DOMContentLoaded", async () => {
    await logged();
});
