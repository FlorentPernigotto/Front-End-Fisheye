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

              const photographerInfo = photographersArray.filter((photographer)=>{

                    return photographer.id === Number(photographerId);

              });

              

         }

         // filtre tout les médias en lié de l'id photograph

         function displayPhotographerMedias(mediasArray){

            const photographersMedias = mediasArray.filter((media)=>{

                return media.photographerId === Number(photographerId);
            });
         }
});