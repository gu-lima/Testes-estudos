async function logged() {
    let anchor = document.getElementById("account-anchor");
    let session = sessionStorage.getItem("session");
    
    console.log(session);
}

document.addEventListener("DOMContentLoaded", async () => {
    await logged();
});
