async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        const userList = document.getElementById('listaUsuarios');
        
        userList.innerHTML = '';

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            
            userCard.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Endereço:</strong> ${user.address.street}, ${user.address.city}</p>
                <p><strong>Telefone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            `;
            
            userList.appendChild(userCard);
        });
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
}

window.onload = fetchUsers;
