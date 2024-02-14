let button = document.getElementById("button");
let image = document.getElementById("image");
let number = document.getElementById("number");
let name = document.getElementById("name");

const changePokemon = async () => {
    let numberRandom = Math.ceil(Math.random() * 151);

    let requestString = `https://pokeapi.co/api/v2/pokemon/${numberRandom}`;
    let data = await fetch(requestString);
    let response = await data.json();


    image.src = response.sprites.front_default;
    number.textContent = `# ${response.id}`;
    name.textContent = response.name;
};

changePokemon();


button.addEventListener("click", changePokemon);
