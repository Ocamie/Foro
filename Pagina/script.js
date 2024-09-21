document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    const username = document.querySelector('#username').value.trim(); // Elimina espacios en blanco

    if (username) {
        alert(`Username "${username}" has been submitted.`);
        // Aquí puedes agregar código para enviar el username a un servidor o procesarlo
    } else {
        alert('Please enter a username');
    }
});
