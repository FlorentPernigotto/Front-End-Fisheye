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

              const photographerPicture = `
            
                <div class="card-container">
                  <div class="filter">
                    <span> Trier par : </span>
                  </div>
                  <div class="picture_container>
                    <div class="cardPicture">
                      <img src=assets/photographers${photographersMedias[0].images}>
                    </div> 
                
                  </div>
                </div>
              
              `;

              document.querySelector(".photographer_picture").innerHTML = photographerPicture;

              

         }

         // filtre tout les médias en lié de l'id photograph

         function displayPhotographerMedias(mediasArray){

            const photographersMedias = mediasArray.filter((media)=>{

                return media.photographerId === Number(photographerId);
            });
         }

        
});

function displayInfoContainer(){

}