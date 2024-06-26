function validarLog() {
    // Previene el comportamiento por defecto del formulario de login al ser enviado
    document.getElementById("Login").addEventListener("submit", function(event){event.preventDefault();});

    // Obtiene el valor del campo de email de login
    var logMail = document.getElementById("LoginEmail").value;
    // Obtiene el elemento donde se mostrará el mensaje de error del email
    var mailLogError = document.getElementById('valCorreoLog');
    // Obtiene el valor del campo de contraseña de login
    var logPass = document.getElementById('LoginPass').value;
    // Obtiene el elemento donde se mostrará el mensaje de error de la contraseña
    var PassLogError =document.getElementById('valPassLog');


    // Obtiene el elemento donde se mostrará el mensaje de error de la contraseña
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Valida el formato del email
    if (!emailPattern.test(logMail)) { 
        mailLogError.innerText = 'Formato de correo no válido.'; // Muestra mensaje de error si el formato es incorrecto

    } else {
        mailLogError.innerText = ''; // Limpia el mensaje de error si el formato es correcto
    }
    // Valida la longitud de la contraseña
    if (logPass.length < 8) {
        PassLogError.innerText = 'Ingrese contraseña.'; // Muestra mensaje de error si la contraseña es demasiado corta
    }else{
        PassLogError.innerText = ''; // Limpia el mensaje de error si la longitud es adecuada
    }

    // Si no hay errores de validación, muestra un mensaje de éxito y redirige al usuario
    if(mailLogError.innerText === '' && PassLogError.innerText === ''){
        alert('Se inicio sesión correctamente.');
        window.location.href = "index.html"; // Redirige a la página de inicio
    }
    return false; // Previene el envío del formulario
}

function validarReg(){
    // Previene el comportamiento por defecto del formulario de registro al ser enviado
    document.getElementById("Reg").addEventListener("submit", function(event){event.preventDefault();});

    // Obtiene los valores de los campos del formulario de registro
    var nombre = document.getElementById('RegInputName').value;
    var valNom = document.getElementById('valNombReg'); // Elemento de mensaje de error del nombre
    var apell = document.getElementById('RegInputLastName').value;
    var valApell = document.getElementById('valApellReg'); // Elemento de mensaje de error del apellido
    var mail = document.getElementById('RegInputEmail').value;
    var valMail = document.getElementById('valCorreoReg'); // Elemento de mensaje de error del email
    var pass = document.getElementById('RegInputPassword').value;
    var valPass = document.getElementById('valPassReg'); // Elemento de mensaje de error de la contraseña
    var pass1 = document.getElementById('RegInputPassword1').value;
    var valPass1 = document.getElementById('valPassReg1'); // Elemento de mensaje de error de la confirmación de contraseña

    // Expresión regular para validar el formato de email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Valida la longitud del nombre
    if (nombre.length < 3) {
        valNom.innerText = 'Nombre debe tener largo de mínimo 3 caracteres.'; // Muestra mensaje de error si el nombre es demasiado corto
    } else {
        valNom.innerText = ''; // Limpia el mensaje de error si la longitud es adecuada
    }

    // Valida la longitud del apellido
    if (apell.length < 4) {
        valApell.innerText = 'Apellido debe tener largo de mínimo 4 caracteres.'; // Muestra mensaje de error si el formato es incorrecto
    } else {
        valApell.innerText = ''; // Limpia el mensaje de error si el formato es correcto
    }

    // Valida el formato del email
    if (!emailPattern.test(mail)) { 
        valMail.innerText = 'Formato de correo no válido.'; // Muestra mensaje de error si el formato es incorrecto
    } else {
        valMail.innerText = ''; // Limpia el mensaje de error si el formato es correcto
    }

    // Valida la longitud de la contraseña
    if (pass.length < 8) {
        valPass.innerText = 'Contraseña debe tener largo de mínimo 8 caracteres.'; // Muestra mensaje de error si la contraseña es demasiado corta
    } else {
        valPass.innerText = ''; // Limpia el mensaje de error si la longitud es adecuada
    }

    // Valida que las contraseñas coincidan
    if (pass1 !== pass) {
        valPass1.innerText = 'Las contraseñas deben coincidir.'; // Muestra mensaje de error si las contraseñas no coinciden
    } else {
        valPass1.innerText = ''; // Limpia el mensaje de error si las contraseñas coinciden
    }

    // Valida que la confirmación de contraseña no esté vacía
    if (pass1 === '') {
        valPass1.innerText = 'Por favor, repita la contraseña.'; // Muestra mensaje de error si la confirmación de contraseña está vacía
    }

    // Si no hay errores de validación, muestra un mensaje de éxito y redirige al usuario
    if (valNom.innerText === '' && valApell.innerText === '' && valMail.innerText === '' && valPass.innerText === '' && valPass1.innerText === '') {
        alert('Su cuenta ha sido creada.');
        window.location.href = "index.html"; // Redirige a la página de inicio
    }

    return false; // Previene el envío del formulario
}