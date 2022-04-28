/** 
   * Fonction qui gere l'affichage de la lightbox
   * @param {array} medias
   * @param {object} media
   * @return {undefined}
 */ 

 function lightbox(medias, media){
  
    // Le media actuel qui est dans la lightbox

    let actualMediaId = media.id;

   //La lightbox est creee


 const lighboxContent = document.querySelector('#lightboxContent');


 lightboxContent.innerHTML = mediasFactory(media);

 const next = document.querySelector("#next");

const previous = document.querySelector("#previous");


next.addEventListener("click", ()=>{
 
     // Premierement il faut determinet l'index du media actuel dans la lightbox
 
     const actualIndex = medias.findIndex((element)=>{
       
         return element.id === actualMediaId;
       
     });
 
     if(actualIndex !== medias.length){
       
          lightboxContent.innerHTML = mediasFactory(medias[actualIndex + 1]);
       
          return actualMediaId = medias[actualIndex + 1].id;
       
     }
 
});

previous.addEventListener("click", ()=>{
 
     const actualIndex = medias.findIndex((element)=>{
       
         return element.id === actualMediaId;
       
     });
 
    if(actualIndex !== 0){
      
         lightboxContent.innerHTML = mediasFactory(medias[actualIndex - 1]);
       
          return actualMediaId = medias[actualIndex - 1].id;
       
      
    }
 
});


}

function mediasFactory(media){

   // Utilisation de la decomposition par affectation (destructuring assignment) https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
   
   const {image, video, alt} = media;

   if(image !== undefined){

    
        return createImage(image, alt);

   }

   return createVideo(video, alt);

}


function createImage(mediaSrc, altText){

    return `<img class="photographer__content__article_media" src="img/photographs/${mediaSrc}" alt="${altText}" />`;

}

function createVideo(mediaSrc, altText){

  return `
     <video class="photographer__content__article_media video" alt="${altText}">
         <source src="img/photographs/${mediaSrc}" type="video/mp4">
     </video>`;

}