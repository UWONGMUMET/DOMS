const typeColor = {
    bug: "#8bc34a",
    dragon: "#ffeb3b",
    electric: "#ffca28",
    fairy: "#ec407a",
    fighting: "#795548",
    fire: "#ef5350",
    flying: "#b2dfdb",
    grass: "#66bb6a",
    ground: "#d7ccc8",
    ghost: "#ab47bc",
    ice: "#4fc3f7",
    normal: "#cfd8dc",
    poison: "#ba68c8",
    psychic: "#f06292",
    rock: "#8d6e63",
    water: "#42a5f5",
};

const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    const finalUrl = url + id;
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            generateCard(data);
        });
};

let generateCard = (data) => {
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;

    const themeColor = typeColor[data.types[0].type.name];
    card.innerHTML = `
        <p class="hp">
          <span>HP</span>
            ${hp}
        </p>
        <img src=${imgSrc} />
        <h2 class="poke-name">${pokeName}</h2>
        <div class="types">
         
        </div>
        <div class="stats">
          <div>
            <h3>${statAttack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>${statDefense}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>${statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
    `;
    appendTypes(data.types);
    styleCard(themeColor);
};

let appendTypes = (types) => {
    types.forEach((item) => {
        let span = document.createElement("SPAN");
        span.textContent = item.type.name.toUpperCase();
        span.style.backgroundColor = typeColor[item.type.name];
        document.querySelector(".types").appendChild(span);
    });
};

let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
