async function consultarCEP() {
    const cep = document.getElementById('cep').value;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    document.getElementById('resultado').innerHTML = `
        <p>Logradouro: ${data.logradouro}</p>
        <p>Bairro: ${data.bairro}</p>
        <p>Cidade: ${data.localidade}</p>
        <p>Estado: ${data.uf}</p>
    `;
}
