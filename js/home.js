async function logged() {
    let anchor = document.getElementById("account-anchor");
    let session = JSON.parse(sessionStorage.getItem("session"));
    
    anchor.textContent = session ? `${session.name.split(" ")[0]}` : "Cadastre-se";
    console.log(session);
}

document.addEventListener("DOMContentLoaded", async () => {
    await logged();
});
