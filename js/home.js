async function logged() {
    let anchor = document.getElementById("account-anchor");
    let session = JSON.parse(sessionStorage.getItem("session"));
    
    console.log(session);
}

document.addEventListener("DOMContentLoaded", async () => {
    await logged();
});
