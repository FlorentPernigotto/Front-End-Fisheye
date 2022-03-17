function photographerFactory(data) {
    const { name, portrait , city , country, tagline, price} = data;

    const picture = `assets/photographers/portrait/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' ); // création de la card
        const a = document.createElement( 'a' );
        a.setAttribute("href", "photographer.html")
        const img = document.createElement( 'img' ); // insertion de l'image profil
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        const h2 = document.createElement( 'h2' ); // création du nom de profil
        h2.textContent = name;
        const location = document.createElement( 'div' );
        location.setAttribute("class", "location");
        const cityValue = document.createElement('span');  
        cityValue.textContent = city;
        const virgule = document.createElement( 'span' )
        virgule.textContent = ",";
        const countryValue = document.createElement('span');
        countryValue.textContent = country;
        const quoteValue = document.createElement('quote');
        quoteValue.textContent = tagline;
        const priceContainer = document.createElement('div');
        const priceValue = document.createElement('span');
        priceValue.textContent = price;
        const valuePerDay = document.createElement('span');
        valuePerDay.textContent = "€/jours" ;

        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        a.appendChild(location);
        location.appendChild(cityValue);
        location.appendChild(virgule);
        location.appendChild(countryValue);
        a.appendChild(quoteValue);
        a.appendChild(priceContainer);
        priceContainer.appendChild(priceValue);
        priceContainer.appendChild(valuePerDay)
        return (article);
    }
    return { name, picture, getUserCardDOM }
}