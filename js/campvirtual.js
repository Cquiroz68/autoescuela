function validarUsuario() {
    let usuario = document.getElementById("username").value;
    let contrasena = document.getElementById("password").value;
    let usuarios = ["usuario1", "usuario2", "usuario3"];
    let contrasenas = ["contrasena1", "contrasena2", "contrasena3"];
    let usuarioValido = usuario+contrasena;
  
    for (let i = 0; i < usuarios.length; i++) {
      if (usuario == usuarios[i] && contrasena == contrasenas[i]) {
        usuarioValido = true;
        break;
      }
    }
  
    if (usuarioValido) {
      window.location.href = "./reservafinal.html";
    } else {
      alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  }
  
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    validarUsuario();
  });