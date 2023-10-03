const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // parar envío formulario
    console.log(event);

    let nombre = event.target.name.value; 
    let apellidos = event.target.apellidos.value;
    let telefono = event.target.telefono.value;
    let direccion = event.target.direccion.value;
    let email = event.target.email.value;
    let sugerencias = event.target.sugerencias.value;


    let msj = "";
    //3<nombre>30 && type string
    if (name.length < 3 || lname.length > 30){
        msj += "Nombre fuera de tamaño: 3-30 caracteres.\n";
    };
 
    //3<apellidos>30 && type string
    if (apellidos.length < 3 || apellidos.length > 30){
        msj += "Apellidos fuera de tamaño: 3-30 caracteres.\n";
    };
    // 9 telefono && number

    if (telefono.length != 11 || typeof telefono !=num) {

      msj += "ERROR en el campo teléfono: " + telefono + "no es correcto\n";
    };

    //7<direccion>150 

    if (direccion.length < 7 || apellidos.length > 150){
        msj += "Dirección fuera de tamaño: 7 a 150 caracteres.\n";
    };
    
    //email .com .es @  requireemail
    if (!email.endsWith(".com") && !email.endsWith(".es") ||!email.includes("@")){
        msj += "ERROR en el campo email: " + email + "no es una dirección de email.\n";
    };

    //sugerencias != ""
    if (sugerencias == ""){
        msj += "¿Que vamos a hacer?¡Has dejado el campo en blanco!"
    };


    //comprobar si hay errores
    if (msj.length != 0) {
        //alert(msj);

        let preError = document.createElement("pre");
        let mensaje = document.createTextNode(msj);
        preError.setAttribute("id", "preError");
        preError.appendChild(mensaje);
    
        document.getElementById("formulario").appendChild(preError)
    };

});