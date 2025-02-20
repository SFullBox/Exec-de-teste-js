async function obterUsuarios() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    const users = data.results;
    let html = '';
    users.forEach(user => {
        html += `
            <div>
                <p><strong>${user.name.first} ${user.name.last}</strong></p>
                <p>Email: ${user.email}</p>
                <p>Telefone: ${user.phone}</p>
                <p>Localidade: ${user.location.city}</p>
            </div>
        `;
    });
    document.getElementById('user-list').innerHTML = html;
}

obterUsuarios();