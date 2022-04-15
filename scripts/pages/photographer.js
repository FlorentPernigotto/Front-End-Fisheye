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

            const photographerPrice = `

            <span>${photographersInfos[0].price}</span>
            `;

            document.querySelector(".average-per-day").innerHTML = photographerPrice;
          }

         // filtre tout les médias en lié de l'id photograph

         function displayPhotographerMedias(mediasArray){
            const photographersMedias = mediasArray.filter((media)=>{
                return media.photographerId === Number(photographerId);
              });

            function mediasFactory(media){
            
                  if(media.image !== undefined){
                  
                        return createImage(media);
                  
                  }
                  
                  return createVideo(media);
            
            }
            
            function createImage(sourceImg){
            
                return `
                <div class="card-picture">
                    <img src="assets/photographers/${photographersMedias[0].photographerId}/${sourceImg.image}" alt="${photographersMedias[1].title}le ${photographersMedias[1].date}">
                    <div class="under-picture">
                      <span class="picture-name">${photographersMedias[1].title}</span><span class="picture-likes">${photographersMedias[1].likes}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg></span>
                    </div>
                  </div>`;
            }
            
            function createVideo(sourceVideo){
            
                return `<div class="card-picture">
                <video alt=${sourceVideo.alt} controls>
                  <source src=assets/photographers/${photographersMedias[0].photographerId}/${sourceVideo.video}>
                </video>  
                <div class="under-picture">
                    <span class="picture-name">${photographersMedias[1].title}</span><span class="picture-likes">${photographersMedias[1].likes}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg></span>
                  </div>
                </div>`
            }
            let mediasHTML = "";
            photographersMedias.forEach((element)=>{
                    mediasHTML+= `
                    
                        ${mediasFactory(element)}
                    
                    `;
            
            });
            
            document.querySelector(".picture-container").innerHTML = mediasHTML;
            
            
            

          }
});

