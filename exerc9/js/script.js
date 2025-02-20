async function obterUsuario() {
    const response = await fetch('https://randomuser.me/api/?results=1');
    const data = await response.json();
    const user = data.results[0];
    document.getElementById('user-details').innerHTML = `
        <p><strong>${user.name.first} ${user.name.last}</strong></p>
        <p>Email: ${user.email}</p>
        <p>Telefone: ${user.phone}</p>
        <p>Localidade: ${user.location.city}</p>
    `;
}

obterUsuario();
