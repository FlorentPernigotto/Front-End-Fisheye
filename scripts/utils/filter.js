let isOpen = false;

 const selectOptions = document.querySelector("#select-block-options");
 
 const firstButtonText = document.querySelector("#select-first-option-text");
 
 const optionsButtons = selectOptions.querySelectorAll("button");

document.querySelector("#select-first-option").addEventListener("click", ()=>{
				if(isOpen === false){
         
             // On ouvre le faux select
             
             selectOptions.style.display = "block";
             
             isOpen = true;
             
             return handleButtonsOptions();
        
        }
        
        if(isOpen === true){
        
        		 return closeSelect();
        
        }

});


function closeSelect(){

		 // On ferme le faux select
             
     selectOptions.style.display = "none";
     
      return isOpen = false;
             

}

function handleButtonsOptions(){

     optionsButtons.forEach((button)=>{
        
              button.onclick = ()=>{
              
                  const buttonText = button.textContent;
                    
                  button.innerHTML = firstButtonText.textContent;
                    
                  firstButtonText.innerHTML = buttonText;         
                    
                  return closeSelect();
        
              };
        
        });


}
