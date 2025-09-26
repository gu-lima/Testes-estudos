async function generateCard() {
    let flexCards = document.getElementById("flex-card");

    let session = JSON.parse(sessionStorage.getItem("pets"));

    if(!session) {
        await fetch("https://api.webmercadoria.com.br/api/pet")
        .then(res => res.json())
        .then(data => {
            sessionStorage.setItem("pets", JSON.stringify(data, null, 2));
        });
    }

    session.pets.forEach(element => {
        let card = document.createElement("div");

        let img = document.createElement("img");
        img.src = "../assets/dog 1.jpg";
        img.alt = `Foto do ${element.name}`;
        card.className = "card";

        let petName = document.createElement("h3");
        petName.textContent = element.name;
        
        let petType = document.createElement("span");
        petType.textContent = element.type;

        let petVaccines = document.createElement("p");
        petVaccines.textContent = `Vacinas: ${element.vaccines}`;

        let petAge = document.createElement("p");
        petAge.textContent = `Idade: ${element.age}`;

        let petSize = document.createElement("p");
        petSize.textContent = element.animalSize;
        
        let petLocale = document.createElement("p");
        petLocale.textContent = element.locale;

        card.appendChild(img);
        card.appendChild(petName);
        card.appendChild(petType);
        card.appendChild(petVaccines);
        card.appendChild(petAge);
        card.appendChild(petSize);
        card.appendChild(petLocale);
        flexCards.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    await generateCard();
});