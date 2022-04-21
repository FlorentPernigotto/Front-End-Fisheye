window.onload = () => {
    const modale = document.getElementById("#lightboxContent");
    const close = document.querySelector(".close");
    const links = document.querySelectorAll(".link");
    
    // On ajoute l'écouteur click sur les liens
    for(let link of links){
        link.addEventListener("click", function(e){
            // On désactive le comportement des liens
            e.preventDefault();

            // On ajoute l'image du lien cliqué dans la modale
            const image = modale.querySelector(".lightboxPictureContent img");
                image.src = this.href;

            // On affiche la modale
            modale.classList.add("show");
        });
    }
    
    // On active le bouton close
    close.addEventListener("click", function(){
        modale.classList.remove("show");
    });
}