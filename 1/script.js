// script.js
let usuarios = [
    { usuario: "user1", contrasena: "pass1" },
    { usuario: "user2", contrasena: "pass2" }
];

function validarUsuario(event) {
    event.preventDefault(); // Evita el envío del formulario
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const mensaje = document.getElementById('mensaje');

    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario);

    if (!usuarioEncontrado) {
        mensaje.innerText = "Usuario no encontrado. Por favor, regístrate.";
        return false;
    } 

    if (usuarioEncontrado.contrasena === contrasena) {
        // Redirigir a la página de bienvenida
        window.location.href = "dashboard.html"; // Asegúrate que la ruta es correcta
        return true;
    } else {
        mensaje.innerText = "Contraseña incorrecta. Intenta de nuevo.";
        return false;
    }
}

function registrarUsuario() {
    const nuevoUsuario = prompt("Ingresa un nuevo usuario:");
    const nuevaContrasena = prompt("Ingresa una nueva contraseña:");

    if (nuevoUsuario && nuevaContrasena) {
        usuarios.push({ usuario: nuevoUsuario, contrasena: nuevaContrasena });
        alert("Usuario registrado exitosamente.");
    } else {
        alert("Registro cancelado.");
    }
}
