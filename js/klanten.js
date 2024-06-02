// klanten.js

document.addEventListener("DOMContentLoaded", function () {
    const klantenContainer = document.getElementById("klanten-container");
  
    const aantalKlanten = 10; 
  
    fetch(`https://randomuser.me/api/?results=${aantalKlanten}`)
      .then((response) => response.json())
      .then((data) => {
        const klanten = data.results;
  
        klanten.forEach((klant) => {
          const klantHTML = `
            <div class="klant">
              <img src="${klant.picture.large}" alt="${klant.name.first}" class="klant-afbeelding">
              <div class="klant-info">
                <h3>${klant.name.title}</h3>
                <p>${klant.name.first} ${klant.name.last}</p>
                <p>${klant.location.country}</p>
              </div>
            </div>
          `;
  
          klantenContainer.innerHTML += klantHTML;
        });
      })
      .catch((error) => console.error("Fout bij het ophalen van klantengegevens:", error));
  });
  