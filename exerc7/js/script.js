async function obterPokemons() {
    const quantidade = document.getElementById('quantidade').value;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantidade}`);
    const data = await response.json();
    const pokemons = data.results;
    let html = '';
    pokemons.forEach(pokemon => {
        html += `<p>${pokemon.name}</p>`;
    });
    document.getElementById('resultado').innerHTML = html;
}
