document.addEventListener("DOMContentLoaded", ()=>{
     let photographerId = window.location.search;

         photographerId = new URLSearchParams(photographerId);

         photographerId = photographerId.get("id");

         fetch("data/photographers.json").then((response)=>{

                return response.json();

         }).then((values)=>{

            const photographersInfos = values.photographers;

            const photographersMedias = values.media;

            displayPhotographerInfo(photographersInfos);

            displayPhotographerMedias(photographersMedias);
            
                
         }).catch((error)=>{

             console.log(error);
         });


         function displayPhotographerInfo(photographersArray){

              const photographersInfos = photographersArray.filter((photographer)=>{

                    return photographer.id === Number(photographerId);

              }); 

              const photographerProfile = `
              
            <div class="photographer-profile">
                <h2>${photographersInfos[0].name}</h2></br>
                <span>${photographersInfos[0].city}, ${photographersInfos[0].country}</span> </br>
                <quote>${photographersInfos[0].tagline}</quote>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <div class="user-pic">
              <img src=assets/photographers/portrait/${photographersInfos[0].portrait}>
            </div>
              `;

              document.querySelector(".photograph-header").innerHTML = photographerProfile;

         }

         // filtre tout les médias en lié de l'id photograph

         function displayPhotographerMedias(mediasArray){

            const photographersMedias = mediasArray.filter((media)=>{

                return media.photographerId === Number(photographerId);
            });
            const photographerPicture = `
            
            <div class="card-container">
              <div class="filter">
                <span> Trier par : </span>
              </div>
              <div class="picture_container>
                <div class="card_picture">
                  <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[0].image[0]}">
                </div>
                <div class="card_picture">
                  <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[0].image[1]}">
                </div>
                <div class="card_picture">
                  <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[0].image[2]}">
                </div>
                <div class="card_picture">
                  <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[0].image[3]}">
                </div>
                <div class="card_picture">
                  <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[0].image[4]}">
                </div>
                <div class="card_picture">
                  <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[0].image[5]}">
                </div> 
              </div>
            </div>
          `;

          document.querySelector(".photographer_picture").innerHTML = photographerPicture;

         }

        
});

function displayInfoContainer(){

}