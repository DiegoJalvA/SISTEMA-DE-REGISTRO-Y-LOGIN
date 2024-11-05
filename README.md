SISTEMA DE REGISTRO Y LOGIN

Este proyecto es una página web sencilla que permite a los usuarios registrarse y hacer login. La aplicación verifica las credenciales de los usuarios existentes y permite registrar nuevos usuarios mediante un sistema de almacenamiento en memoria.

CARACTERISTICAS:

        Inicio de sesión: Los usuarios pueden ingresar su nombre de usuario y contraseña para acceder.
        Registro de usuario: Si el usuario no existe, puede registrarse ingresando un nuevo nombre de usuario y contraseña.
        Validación básica: La aplicación verifica si el usuario y la contraseña coinciden con los datos registrados.
        Redirección: Si el inicio de sesión es exitoso, el usuario es redirigido a una página de bienvenida (dashboard.html).

ESTRUCTURA DEL PROYECTO:

├── index.html          # Página principal de inicio de sesión
├── dashboard.html      # Página de bienvenida después del login
├── script.js           # Archivo JavaScript con la lógica de registro y validación
├── style.css           # Archivo CSS para el estilo de la página (opcional)
└── README.md           # Documentación del proyecto

CODIG JavaScript PRINCIPAL (script.js)

El archivo script.js contiene la lógica para validar el usuario y registrar nuevos usuarios.
Función validarUsuario(event): Valida el nombre de usuario y la contraseña al hacer login. Si el usuario no existe o la contraseña es incorrecta, muestra un mensaje de error.
Función registrarUsuario(): Permite a un nuevo usuario registrarse proporcionando un nombre de usuario y contraseña.

USO

       Clona el repositorio o descarga los archivos.
       Abre index.html en tu navegador.
       Ingresa un nombre de usuario y una contraseña para hacer login.
       Usuarios de ejemplo:
              Usuario: user1, Contraseña: pass1
              Usuario: user2, Contraseña: pass2
       Si el usuario no existe, usa el botón de registro para crear una cuenta nueva.
       
CONSIDERACIONES

Este proyecto almacena los datos de usuario en una variable de JavaScript, lo que significa que los registros se pierden al recargar la página.
Para almacenar los usuarios de manera persistente, considera integrar una base de datos o utilizar localStorage.

MEJORAS FUTURAS
    Integrar un sistema de almacenamiento persistente.
    Añadir validaciones de seguridad como cifrado de contraseñas.
    Mejorar la interfaz de usuario y el flujo de registro/login.
