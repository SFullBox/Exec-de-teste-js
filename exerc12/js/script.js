async function converter() {
    const valor = document.getElementById('valor').value;
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    const taxaDeCambio = data.rates.BRL;
    const valorConvertido = valor * taxaDeCambio;
    document.getElementById('resultado').innerHTML = `
        <p>Valor em Dólar: $${valor}</p>
        <p>Valor em Real: R$${valorConvertido.toFixed(2)}</p>
    `;
}
