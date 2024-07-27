document.getElementById("search-btn").addEventListener("click", () => {
    const countryInp = document.getElementById("country-inp").value.trim();
    const result = document.getElementById("result");
    
    if (!countryInp) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
        return;
    }

    const url = `https://restcountries.com/v3.1/name/${countryInp}?fullText=true`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status === 404) {
                result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
                return;
            }
            const country = data[0];
            const currency = country.currencies[Object.keys(country.currencies)[0]];
            const languages = Object.values(country.languages).join(", ");
            
            result.innerHTML = `
                <img src="${country.flags.svg}" class="flag-img">
                <h2>${country.name.common}</h2>
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${country.capital[0]}</span>
                </div>
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${country.continents[0]}</span>
                </div>
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${country.population.toLocaleString()}</span>
                </div>
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${currency.name} - ${Object.keys(country.currencies)[0]}</span>
                </div>
                <div class="data-wrapper">
                    <h4>Common Languages:</h4>
                    <span>${languages}</span>
                </div>
            `;
        })
        .catch(() => {
            result.innerHTML = `<h3>An error occurred. Please try again later.</h3>`;
        });
});
