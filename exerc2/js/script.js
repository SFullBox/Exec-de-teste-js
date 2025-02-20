async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        
        const userDetails = document.getElementById('user-details');
        
        userDetails.innerHTML = '';

        userDetails.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Endereço:</strong> ${user.address.street}, ${user.address.city}</p>
            <p><strong>Telefone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        `;
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
}

window.onload = fetchUser;
