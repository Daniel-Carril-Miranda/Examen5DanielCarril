/**
 * @author Daniel Carril Miranda (DAw Student)
 * @github https://github.com/Daniel-Carril-Miranda/Examen5DanielCarril.git
 */

const id = (id) => {return document.getElementById(id)}

const validar = (e) =>{
    e.preventDefault();
    let mensajeError = [];
    // El campo Nombre no puede estar vacío
    id("nombre").value.trim().length === 0 ? mensajeError.push("Debe de insertar un nombre") : null
    // Validar que el nombre sólo contenga letras y la primera sea mayúscula
    !/^[A-Z]{1}[a-zA-Z]*$/.test(id("nombre").value.trim()) ? mensajeError.push("Debe de insertar mayúscula al princio y caractéres válidos") : null
    // Validar el correo electrónico
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(id("correo").value.trim()) ? mensajeError.push("Debe de insertar un correo electrónico correcto") : null
    //Validar longitud del mensaje
    id("mensaje").value.trim().length < 10 ? mensajeError.push("Debe de insertar al menos 10 caractéres") : null

    if (mensajeError.length === 0 && confirm("¿Desea enviar el formulario?")){
        formulario.submit();
    } else if (mensajeError.length > 0) {
        id("errores").textContent = "";
        mensajeError.forEach(function (error){
            let createLi = document.createElement("li")
            createLi.textContent = error
            id("errores").appendChild(createLi)
        })
    }
}

formulario.addEventListener("submit", validar)

