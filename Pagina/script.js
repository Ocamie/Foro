document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    
    if (username) {
        alert(`Username ${username} has been submitted.`);
        // Aquí puedes agregar código para enviar el username a un servidor o procesarlo
    } else {
        alert('Please enter a username');
    }
});