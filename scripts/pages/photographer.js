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

              const photographerHTML = `
              
            <div class="photographer-profile">
                Mimi Keel </br>
                London, UK </br>
                Voir le beau dans le quotidien
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <div class="user-pic">
              <!-- insérer la photo ici -->
            </div>
              
              `;

              document.querySelector(".photograph-header").innerHTML = photographerHTML;



              

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