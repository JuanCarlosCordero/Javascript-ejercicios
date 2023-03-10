function preguntarTarea() {
    let respuesta = prompt("¿Hiciste la tarea? (responde si o no)");
    if (respuesta.toLowerCase() === "si") {
      alert("¡Bien hecho!");
    } else if (respuesta.toLowerCase() === "no") {
      alert("No te rindas, ¡empieza ya mismo!");
    } else {
      alert("Respuesta inválida, por favor responde si o no.");
      preguntarTarea();
    }
  }
  
  preguntarTarea();
  