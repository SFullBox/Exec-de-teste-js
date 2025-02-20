async function obterFato() {
    const response = await fetch('https://meowfacts.herokuapp.com/');
    const data = await response.json();
    document.getElementById('resultado').innerHTML = `
        <p><strong>Fato sobre gatos:</strong> ${data.data}</p>
    `;
}
