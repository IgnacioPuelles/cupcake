$(document).ready(function(){

    var fEmail =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Expresión regular para validar el formato de email

    $("#form").submit(function(event) { // Maneja el evento de envío del formulario
        event.preventDefault(); // Previene el comportamiento por defecto del formulario
    });

    $("#btn-enviar").click(function(){ // Maneja el evento de clic en el botón de enviar

        var flag = false; // Inicializa la bandera de validación como falsa
        var email = $("#email").val(); // Obtiene el valor del campo de email
 
        if ($("#nombre").val() == ""){ // Verifica si el campo de nombre está vacío
            $("#eNombre").fadeIn(); // Muestra el mensaje de error para el nombre
            flag = true; // Establece la bandera de validación como verdadera
        }else{
            $("#eNombre").fadeOut(); // Oculta el mensaje de error para el nombre
        }

        if (!fEmail.test(email)){ // Verifica si el email no cumple con el formato
            $("#eEmail").fadeIn(); // Muestra el mensaje de error para el email
            flag = true; // Establece la bandera de validación como verdadera
        }else{
            $("#eEmail").fadeOut(); // Oculta el mensaje de error para el email
        }

        if ($("#asunto").val() == ""){ // Verifica si el campo de asunto está vacío
            $("#eAsunto").fadeIn(); // Muestra el mensaje de error para el asunto
            flag = true; // Establece la bandera de validación como verdadera
        }else{
            $("#eAsunto").fadeOut(); // Oculta el mensaje de error para el asunto
        }

        if ($("#mensaje").val() == ""){ // Verifica si el campo de mensaje está vacío
            $("#eMensaje").fadeIn(); // Muestra el mensaje de error para el mensaje
            flag = true; // Muestra el mensaje de error para el mensaje
        }else{
            $("#eMensaje").fadeOut(); // Oculta el mensaje de error para el mensaje
        }

        if (!flag){ // Si no hay errores de validación
            $("#cont_modal").fadeIn(); // Muestra el modal de confirmación

            // Resetea los valores de los campos del formulario
            $("#nombre").val("");
            $("#email").val("");
            $("#asunto").val("");
            $("#mensaje").val("");
        }

        return !flag; // Retorna el estado de la bandera (false si no hay errores, true si los hay)

    });

    $("#mod_close").click(function(){ // Maneja el evento de clic en el botón de cerrar modal
        $("#cont_modal").fadeOut(); // Oculta el modal de confirmación
    })

});
