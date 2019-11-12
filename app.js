let result = document.getElementById('result')

function login() {
    const loginUri = 'https://localhost:5001/Auth/login'

    fetch(loginUri, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: 'lucas', password: '123' })
     })
        .then(response => response.text())
        .then(text => result.innerText = text)
}