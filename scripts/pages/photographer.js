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
                <div class="picture-container">
                  <div class="card-picture">
                    <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[1].image}" alt="${photographersMedias[1].title}le ${photographersMedias[1].date}">
                    <div class="under-pîcture">
                      <span class="picture-name">${photographersMedias[1].title}</span><span class="picture-likes">${photographersMedias[1].likes}</span>
                    </div>
                    </div>
                  <div class="card-picture">
                    <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[2].image}" alt="${photographersMedias[2].title}le ${photographersMedias[2].date}">
                    <div class="under-pîcture">
                      <span class="picture-name">${photographersMedias[2].title}</span><span class="picture-likes">${photographersMedias[2].likes}</span>
                    </div>
                    </div>
                  <div class="card-picture">
                    <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[3].image}" alt="${photographersMedias[3].title}le ${photographersMedias[3].date}">
                    <div class="under-pîcture">
                      <span class="picture-name">${photographersMedias[3].title}</span><span class="picture-likes">${photographersMedias[3].likes}</span>
                    </div>
                    </div>
                  <div class="card-picture">
                    <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[4].image}" alt="${photographersMedias[4].title}le ${photographersMedias[4].date}">
                    <div class="under-pîcture">
                      <span class="picture-name">${photographersMedias[4].title}</span><span class="picture-likes">${photographersMedias[4].likes}</span>
                    </div>
                    </div>
                  <div class="card-picture">
                    <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[5].image}" alt="${photographersMedias[5].title}le ${photographersMedias[5].date}">
                    <div class="under-pîcture">
                      <span class="picture-name">${photographersMedias[5].title}</span><span class="picture-likes">${photographersMedias[5].likes}</span>
                    </div>
                    </div>
                  <div class="card-picture">
                    <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[6].image}" alt="${photographersMedias[6].title}le ${photographersMedias[6].date}">
                    <div class="under-pîcture">
                      <span class="picture-name">${photographersMedias[6].title}</span><span class="picture-likes">${photographersMedias[6].likes}</span>
                    </div>
                  </div> 
                  <div class="card-picture">
                    <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[7].image}" alt="${photographersMedias[7].title}le ${photographersMedias[7].date}">
                    <div class="under-pîcture">
                      <span class="picture-name">${photographersMedias[7].title}</span><span class="picture-likes">${photographersMedias[7].likes}</span>
                    </div>
                  </div> 
                  <div class="card-picture">
                    <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[8].image}" alt="${photographersMedias[8].title}le ${photographersMedias[8].date}">
                    <div class="under-pîcture">
                      <span class="picture-name">${photographersMedias[8].title}</span><span class="picture-likes">${photographersMedias[8].likes}</span>
                    </div>
                  </div> 
                  <div class="card-picture">
                    <img src="assets/photographers/${photographersMedias[0].photographerId}/${photographersMedias[9].image}" alt="${photographersMedias[9].title}le ${photographersMedias[9].date}">
                    <div class="under-pîcture">
                      <span class="picture-name">${photographersMedias[9].title}</span><span class="picture-likes">${photographersMedias[9].likes}</span>
                    </div>
                  </div> 
                </div>
              </div>
            `;

            document.querySelector(".photographer-picture").innerHTML = photographerPicture;

          }

});
