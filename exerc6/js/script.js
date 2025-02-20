async function obterPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();
    const pokemons = data.results;
    let html = '';
    pokemons.forEach(pokemon => {
        html += `<p>${pokemon.name}</p>`;
    });
    document.getElementById('resultado').innerHTML = html;
}

obterPokemons();
