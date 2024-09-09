// cargo las opciones a un json y las leo
document.addEventListener("DOMContentLoaded", () => {
    fetch("../assets/options.json")
      .then(response => response.json())
      .then(data => {
        const select = document.getElementById("select");
        data.opciones.forEach(opcion => {
          const optionElement = document.createElement("option");
          optionElement.value = opcion.value;
          optionElement.textContent = opcion.text;
          select.appendChild(optionElement);
        });
      })
      .catch(error => console.error("Error al cargar las opciones:", error));
  });
  
  //hago la funcion para enviar el formulario y evito que se recargue la pagina
  function sendForm(event) {
    event.preventDefault(); 
    const formulario = document.getElementById("formulario");
    const datosFormulario = {
      nombre: formulario.nombre.value,
      correo: formulario.email.value,
      password: formulario.password.value,
      opcion: formulario.opcion.value,
      texto: formulario.texto.value,
    };

    //imprimo como un objeto
    console.log(datosFormulario);
  }
  