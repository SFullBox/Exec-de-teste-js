async function obterPrevisao() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&appid=abc123xyz&units=metric&lang=pt_br');
    const data = await response.json();
    document.getElementById('resultado').innerHTML = `
        <p>Temperatura: ${data.main.temp}°C</p>
        <p>Condição: ${data.weather[0].description}</p>
        <p>Umidade: ${data.main.humidity}%</p>
    `;
}

obterPrevisao();
