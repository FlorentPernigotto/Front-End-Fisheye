function photographersInfos(data) {
    const { name, city, country, tagline, } = data;

    function photographerProfile() {

        const photographerContainer = document.createElement('div');
        const photographerName = document.createElement('h1');
        photographerName.textContent = name;
        const cityValue = document.createElement('span');  
        cityValue.textContent = city;
        const virgule = document.createElement( 'span' );
        virgule.textContent = ",";
        const countryValue = document.createElement('span');
        countryValue.textContent = country;
        const quoteValue = document.createElement('quote');
        quoteValue.textContent = tagline;

        
        infosContainer.appendChild(photographerName);
        infosContainer.appendChild(cityValue);



        return(infosContainer);
    }

    return { photographerProfile }
}

